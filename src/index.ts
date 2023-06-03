const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any): any => {
  res.send("Nene!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
