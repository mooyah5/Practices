export default function Write() {
  return (
    <div className="p-20">
      <h4>글 작성</h4>
      <form action="/api/post/new" method="POST">
        <h5>제목</h5>
        <input type="text" name="title" placeholder="글제목"></input>
        <h5>내용</h5>
        <input cols="20" rows="3" name="content" placeholder="글내용"></input>
        <br/>
        <button type="submit">전송</button>
      </form>


      <p>-----------------------------------</p>
      <form method="post" action="/api/test">
        <button type="submit">test post 버튼</button>
      </form>
      <form method="get" action="/api/list">
        <button type="submit">list get 버튼</button>
      </form>
      <form method="get" action="/api/time">
        <button type="submit">time get 버튼</button>
      </form>
    </div>
  )
}