import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import auth from "./routers/auth.route.js"
import { connectdb } from "./database/db.js"

// Connect to Database
connectdb()

const PORT = process.env.PORT || 5000


const app = express()
// Middleware
app.use(cors(
    {
        origin: ["http://localhost:3000","http://localhost:5173"],
        credentials: true,
    }
))
app.use(express.json())

// Sample Route
app.use("/auth", auth)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})