import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method = "POST") {
    try {
      let db = (await connectDB).db('forum')
      let res = await db.collection('post').deleteOne({ _id: new ObjectId(요청.body) })
      
    } catch (err) {
      응답.status(500)
    }
    console.log(res)
    응답.status(200).json('삭제 완료')
  }
}