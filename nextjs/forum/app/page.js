import { connectDB } from "@/util/database.js"

export default async function Home() {
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div>
      {result[0].title}
      {result[0].content}
      
      {result[1].title}
      {result[1].content}
    </div>
  )
}