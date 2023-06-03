require("dotenv").config({ path: "src" + "/.env" });

const express = require("express");
const app = express();

app.use(express.json());

app.get("/nene", (req: any, res: any): any => {
  res.send("Nene!");
});

app.listen(Number(process.env.PORT), () => {
  console.log("Server up at port: ", process.env.PORT);
});
