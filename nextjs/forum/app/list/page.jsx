import ListItem from './ListItem.js'
import { connectDB } from "@/util/database"

export default async function List() {
  let db = (await connectDB).db('forum')
  let res = await db.collection('post').find().toArray()
  return (
    <div className="list-bg">
      <ListItem res={res} />
    </div>
  )
}