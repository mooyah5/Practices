import DetailLink from "@/app/list/DetailLink"
import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props) {
  console.log(props)
  let db = (await connectDB ).db('forum')
  let res = await db.collection('post').findOne({
    _id: new ObjectId(props.params.id)
  })
  return (
    <div>
      <h4>{res.title}</h4>
      <p>{res.content}</p>
      <DetailLink/>
    </div>
  )
}