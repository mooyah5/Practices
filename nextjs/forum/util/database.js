import { MongoClient } from 'mongodb'
import "../env"
import { db_name, db_pass, db_user } from "../db"
const url = `mongodb+srv://${db_user}:${db_pass}@${db_name}.eymez8m.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo_) {
    global._mongo_ = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo_
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }