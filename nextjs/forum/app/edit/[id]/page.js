import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {
  let db = (await connectDB ).db('forum')
  let res = await db.collection('post').findOne({
    _id: new ObjectId(props.params.id)
  })
  return (
    <div className="p-20">
      <h4>{ res.title} 게시물 수정페이지</h4>
      <form action="/api/put/edit" method="POST">
        <input name="title" defaultValue={res.title} />
        <input name="content" defaultValue={res.content} />
        <input name="_id" defaultValue={res._id.toString()} className="none"  />
        <button type="submit">전송</button>
      </form>
    </div>
  )
} 