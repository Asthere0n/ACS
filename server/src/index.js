import dotenv from "dotenv"
import { connectDB } from './db.js'
import app from "./app.js"

dotenv.config()

const PORT = process.env.PORT | 5000
const MONGO_URI = process.env.MONGO_URI

connectDB(MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
    })
})
    .catch((err) => {
        console.error('Failed to start server:', err)
    })