import express from "express";
import routes from "./server/routes";

const app = express();
const PORT = 3000;

routes(app);

app.get("/", (req, res) => {
  res.send(`your server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
