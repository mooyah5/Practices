const express = require('express');
const app = express();
app.use(express.static('public'));

// 라우터(get)이 라우팅(길을 찾는다)을 함.
// 사용자, Router, Controller 3개가 있음
// 사용자의 요청과 요청에 대한 처리인 컨트롤러를 중개

app.get('/', function (req, res) {
  res.send('Hello home page');
}); // home으로 접속하면 두번째 인자가 실행
app.get('/dynamic', function (req, res) {
  let lis = ''
  for (let i = 0; i < 20; i++){
    lis = lis + '<li>coding</li>';
  }
  const time = Date()
  const output = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    Hello Dynamic~~!!
    <ul>
      ${lis}
    </ul>
    <h3>${time}</h5>
  </body>
  </html>`
  res.send(output);
})
app.get('/route', function (req, res) {
  res.send('HEllo Router, <img style="width:100px;" src="coffee.jpg">')
});
app.get('/login', function (req, res) {
  res.send('Please Login')  // 포트 번호 뒤에 /login을 붙이면 들어가는 곳
})
app.listen(3000, function () {
  console.log('Connected 3000 port!');
});