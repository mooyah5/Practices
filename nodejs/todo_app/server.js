const express = require('express')
const app = express()
// const bodyParser= require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true })) 
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');  // ejs 라이브러리 등록

var db;
MongoClient.connect('mongodb+srv://mooyah5:1357qor~@firstcloud.eymez8m.mongodb.net/?retryWrites=true&w=majority', (에러, client) => {
  if (에러) { console.log(에러) }
  
  db = client.db('todoapp')

  app.listen(8080, function() {
    console.log('listening on 8080')
  })
})


// .get('경로', function(요청내용, 응답할 방법){})
app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
})

app.get('/white', function (요청, 응답) {
  응답.sendFile(__dirname + '/white.html')
})


// 어떤 사람이 /add 경로로 post요청을하면, 데이터2개(날짜, 제목)을 보내주는데, 이때, 'post'라는 이름을 가진 collection에 두 데이터 저장하기
app.post('/add', (요청, 응답) => {
  console.log(요청.body)
  응답.send('전송완료')
  db.collection('post').insertOne( {제목: 요청.body.title, 날짜: 요청.body.date}, function (에러, 결과) {
    console.log('저장완료')
  });
})
// 보낸 요청을 쓰려면 라이브러리 설치 필요 npm install body-parser (input 속 데이터를 해석할 수 있게 도와줌)
// input name속성 반드시 있어야함


// /list로 GET요청 접속하면, 실제 DB에 저장된 데이터들로 꾸며진 HTML 보여주기
app.get('/list', (요청, 응답) => {
  // db에 저장된 post라는 collection 안의 모든 데이터 꺼내기
  db.collection('post').find().toArray((에러, 결과) => {
    console.log(결과)
    응답.render('list.ejs', { posts: 결과 })
  }) // find()는 모든 데이터를 다 가져오는데, 메타데이터까지 가져오므로, toArray() 함수로 array화
})