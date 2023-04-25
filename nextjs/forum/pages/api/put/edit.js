import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    console.log(요청.body)

    try {
      let 수정된내용 = {title: 요청.body.title, content: 요청.body.content}
      let db = (await connectDB).db('forum')
      // $set: 기존값을 바꿔준다. 없으면 추가해준다.
      // $unset: 기존에 있던 키값을 제거
      // $inc: 기존 값이 숫자면 거기에 숫자를 더하거나 뺄 때 사용
      let res = await db.collection('post').updateOne(
        { _id: new ObjectId(요청.body._id) },
        { $set: 수정된내용 })
        console.log(res)
      응답.redirect(302, '/list')
    } catch (error) {
      console.log(error)
    }
  }
}