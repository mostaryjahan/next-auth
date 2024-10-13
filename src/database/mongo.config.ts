import mongoose from "mongoose";

export function connect() {
    mongoose
    .connect(process.env.MONGO_URL! , {
        tls:true,
    })
    .then(()=> console.log("database connect successfully"))
    .catch((err) => console.log("there is some error", err))
}