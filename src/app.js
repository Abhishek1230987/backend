import express from "express"
import cors from "cors"
// cookieParser use- I access user browser's cookies from my server(cred operations )
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

export { app } 

// configuring express with json -> setting limit(when we recieve json files)

app.use(express.json9({limit: "16kb"}))

// Getting data from URL

app.use(express.urlencoded({extended: true, limit: "16kb"}))

// when we just want to store img, pdf, in my server, to do so ,we just create a public folder(public assets) anyonr can access it.
app.use(express.static("public"))



 




























































































































