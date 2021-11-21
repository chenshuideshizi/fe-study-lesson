const path = require('path');
const fs = require('fs');
const vm = require('vm');

function r(filename) {
  const pathToFile = path.resolve(__dirname, filename);
  const content = fs.readFileSync(pathToFile, 'utf-8');

  const wrapper = [
    '(function(require, module, exports) {',
    '})'
  ];

  const wrappedContent = wrapper[0] + content + wrapper[1];

  const script = new vm.Script(wrappedContent, {
    filename: 'index.js'
  });

  const result = script.runInThisContext();

  const m = {
    exports: {},
  };

  result(r, m, m.exports);

  return m.exports;
}

const content = r('./module.js');
console.log(content);
