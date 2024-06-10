import express from "express"
import cors from "cors"
// cookieParser use- I access user browser's cookies from my server(cred operations )
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))



// configuring express with json -> setting limit(when we recieve json files)

app.use(express.json9({limit: "16kb"}))

// Getting data from URL

app.use(express.urlencoded({extended: true, limit: "16kb"}))

// when we just want to store img, pdf, in my server, to do so ,we just create a public folder(public assets) anyone can access it.
app.use(express.static("public"))

app.use(cookieParser())




//ROUTES Import:
import userRouter from './routes/user.routes.js'


//Routes Declaration:
app.use("/api/v1/users", userRouter) // URL will be as = http://localhost:8000/api/v1/user/login

export { app } 





 




























































































































