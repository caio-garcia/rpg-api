import { configDotenv } from "dotenv";
import express from "express";
import userRoute from "./controllers/user.controller";

configDotenv();

const app = express();

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Welcome to RPG API");
});

app.use("/user", userRoute);

app.listen(Number(process.env.PORT), () => {
  console.log(`RPG API is listening at http://localhost:${process.env.PORT}`);
});
