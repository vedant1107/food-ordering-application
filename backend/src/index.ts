import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("db connected");
    app.listen(7000, () => {
      console.log("server is running on localhost:7000");
    });
  })
  .catch((error) => {
    console.log("db connection error: ", error);
  });
