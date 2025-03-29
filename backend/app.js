import "dotenv/config"
import cors from "cors"
import express from "express"
import HTTPSTATUS from "./config/http.config.js"
import connectMongoDb from "./config/mongo.config.js"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use( 
//     cors({
//         origin: config.FRONTEND_ORIGIN, // Allow only your frontend
//         credentials: true, // Allow cookies and authorization headers
//     })
// )
// app.listen(config.PORT, () => console.log(`Server is Intercepting Requests on port = http://localhost:${config.PORT}`))
await connectMongoDb()
app.get("/", (_, res) => res.status(HTTPSTATUS.OK).json({ message: "ExpenseTracker First Api" }))
app.listen(8000, () => console.log(`Server is Intercepting Requests on port = http://localhost:8000`))