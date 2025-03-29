import "dotenv/config";
import path from "path"
import { fileURLToPath } from "url"
import cors from "cors";
import express from "express";
import config from "./config/app.config.js";
import HTTPSTATUS from "./constants/http.constant.js";
import connectDb from "./config/mongo.config.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import isAuthenticated from "./middlewares/auth.middleware.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
const app = express();
const BASE_PATH = config.BASE_PATH
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//     cors({
//         origin: config.FRONTEND_ORIGIN, // Allow only your frontend
//         credentials: true, // Allow cookies and authorization headers
//     })
// )
await connectDb();
app.get("/", (_, res) =>
    res.status(HTTPSTATUS.OK).json({ message: "ExpenseTracker First Api" })
);

// Server uploads Folder
// Manually define `__dirname` in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use(`${BASE_PATH}/v1/auth`, authRouter)
app.use(`${BASE_PATH}/v1/user`, isAuthenticated, userRouter)
app.use(errorHandler)
app.listen(config.PORT, () => console.log(`Server is Intercepting Requests on port = http://localhost:${config.PORT}`))