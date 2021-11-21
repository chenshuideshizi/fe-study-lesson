// (add 2 (subtract 40 2))
// add(2, subtract(4, 2))

// 分词
function generateToken(str) {
  let current = 0;
  let tokens = [];

  while(current < str.length) {
    let char = str[current];

    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      });
      current++;
      continue;
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      });
      current++;
      continue;
    }

    if (/\s/.test(char)) {
      current++;
      continue;
    }

    if (/[0-9]/.test(char)) {
      let numberValue = '';
      while(/[0-9]/.test(char)) {
        numberValue += char;
        char = str[++current];
      }
      tokens.push({
        type: 'number',
        value: numberValue
      });
      continue;
    }

    if (/[a-z]/.test(char)) {
      let stringValue = '';
      while(/[a-z]/.test(char)) {
        stringValue += char;
        char = str[++current];
      }
      tokens.push({
        type: 'name',
        value: stringValue
      });
      continue;
    }

    throw new TypeError("未能识别的字符");

  }

  return tokens;
}

// 生成 AST
function generateAST(tokens) {
  let current = 0;
  let ast = {
    type: 'Program',
    body: [],
  };

  function walk() {
    let token = tokens[current];

    if (token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    if (token.type === 'paren' && token.value === '(') {
      token = tokens[++current];
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };
      token = tokens[++current];
      while(
        (token.type !== 'paren')
        ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        node.params.push(walk());
        token = tokens[current];
      }
      current++;
      return node;
    }
  }

  while (current < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}

// 转化 ast 到新的 ast
function transformer(ast) {
  let newAst = {
    type: 'Program',
    body: [],
  }

  ast._context = newAst.body;

  DFS(ast, {
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: "NumberLiteral",
          value: node.value
        });
      }
    },
    CallExpression: {
      enter(node, parent) {
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };
        node._context = expression.arguments;

        if (parent.type !== 'CallExpression') {
          expression = {
            type: "ExpressionStatement",
            expression: expression,
          };
        }
        parent._context.push(expression);
      }
    }
  });

  return newAst;
}

function DFS(ast, visitor) {

  function traversArray(children, parent) {
    children.forEach(child => traverseNode(child, parent));
  }

  function traverseNode(node, parent) {
    let methods = visitor[node.type];
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch(node.type) {
      case "Program":
        traversArray(node.body, node);
        break;
      case "CallExpression":
        traversArray(node.params, node);
        break;
      case "NumberLiteral":
        break;
    }

    // if (methods && methods.exit) {
    //   methods.exit(node, parent);
    // }
  }

  return traverseNode(ast, null);
}

// 基于 ast 生成代码
function generate(ast) {
  switch(ast.type) {
    case "Identifier": return ast.name;
    case "NumberLiteral": return ast.value;
    case "Program": return ast.body.map(subAst => generate(subAst)).join('\n');
    case "ExpressionStatement": return generate(ast.expression) + ';';
    case "CallExpression": return generate(ast.callee) + "(" + ast.arguments.map(arg => generate(arg)).join(', ') + ")";
  }
}

function parser(input) {
  const tokens = generateToken(input);
  const ast = generateAST(tokens);
  const newAst = transformer(ast);
  return generate(newAst);
}

module.exports = parser;