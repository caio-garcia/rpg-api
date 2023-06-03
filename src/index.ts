require("dotenv").config({ path: "src" + "/.env" });

const express = require("express");
const app = express();

app.get("/", (req: any, res: any): any => {
  res.send("Nene!");
});

app.listen(Number(process.env.PORT), () => {
  console.log("Server up at port: ", process.env.PORT);
});
