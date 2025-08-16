import express from "express"
import cors from "cors"
import router from "./routes/childrenRouter.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/children", router)

export default app