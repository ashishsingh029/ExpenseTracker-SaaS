import mongoose from "mongoose"
// import { config } from "./app.config.js"
const connectMongoDb = async () => {
    try {
        // await mongoose.connect(config.MONGO_URI + config.DB_NAME)
        await mongoose.connect("mongodb://127.0.0.1:27017/expense-tracker")
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log(`Database Error = ${error.message}`)
        process.exit(1)
    }
}
export default connectMongoDb