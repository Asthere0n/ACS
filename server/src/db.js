import mongoose from "mongoose";

export function connectDB(uri) {
    return mongoose.connect(uri)
        .then(() => {
            console.log("MongoDB Connected")
        })
        .catch((err) => {
            console.error("MongoDB not Connected", err)
            process.exit(1)
        })
}