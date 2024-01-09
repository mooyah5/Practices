import ListItem from "./ListItem.js";
import { connectDB } from "@/util/database";

// export const dynamic = "force-dyn amic";

export const revalidate = 20;

export default async function List() {
  let db = (await connectDB).db("forum");
  let res = await db.collection("post").find().toArray();
  res = res.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return (
    <div className="list-bg">
      <ListItem res={res} />
    </div>
  );
}
