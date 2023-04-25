import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://mooyah5:1357qor@firstcloud.eymez8m.mongodb.net/?retryWrites=true&w=majority'
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