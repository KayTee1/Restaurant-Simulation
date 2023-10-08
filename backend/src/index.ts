import express, { Application } from "express";
import menuRoutes from "./routes/menuRoutes.js";
import { getMenu } from "./controllers/menuController.js";

const app: Application = express();
const PORT = 3005;

app.use("/menu", menuRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
