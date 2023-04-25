import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {
  if(요청.method == "GET") {
    let db = (await connectDB ).db('forum')
    let res = await db.collection('post').find().toArray()
    return 응답.status(200).json(res)
  }
  
}