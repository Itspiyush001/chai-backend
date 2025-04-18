import exprees from "express"
import cors from "cors"
import cookieParser from "cookieParser"

const app = exprees();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}))

app.use(exprees.json({limit: "20kb"}))
app.use(exprees.urlencoded({extended:true, limit:"16kb"}))
app.use(exprees.static("public"))
app.use(cookieParser())


// import routes

import userRouter from "./routes/user.routes.js"

app.use("api/v1/users", userRouter)

export { app }