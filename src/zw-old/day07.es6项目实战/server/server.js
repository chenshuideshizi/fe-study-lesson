const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
// 处理 json 类型的 content-type body
app.use(bodyParser.json());
// cors 中间件，帮助设置 access-allow-control-origin header
app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true,
}));
// 帮助设置 set-cookie header 和解析 request 中的 header
app.use(cookieParser());

app.set('view engine', 'pug');
app.get('/', function(req, res) {
  res.render('index', {
    articles: [
      { title: "文章1", imageList: ["https://source.unsplash.com/random/450x300"] },
      { title: "文章2", imageList: ["https://source.unsplash.com/random/450x300"] },
      { title: "文章2", imageList: ["https://source.unsplash.com/random/450x300", "https://source.unsplash.com/random/450x300"] },
    ]
  });
});

app.get('/api/json', function(req, res) {
  const { loginToken } = req.cookies;

  res.json({
    status: 0,
    loginToken,
  });
});

app.post('/api/login', function(req, res) {
  const { username, password } = req.body;

  // 需要进行用户名和密码鉴权，生成一个 token

  res.cookie('loginToken', username, {
    maxAge: 1000 * 60 * 15,
    domain: 'localhost',
    httpOnly: true,
  });

  res.json({
    status: 0,
    msg: '登录成功',
    data: username,
  });
});

app.listen(8080, () => {
  console.log('start at http://localhost:8080');
});