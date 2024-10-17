import mongoose from "mongoose";

export function connect() {
  mongoose
    .connect(process.env.MONGO_URL!, {
      dbName: "nextAuthDB", // Use your database name
      
      tls: true,
    })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Error connecting to database", err));
}
