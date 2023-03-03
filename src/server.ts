import express from "express";
import { config } from "dotenv";
import taskRoutes from "./routes/taskRoutes";

const main = async () => {
  config();
  const server = express();

  server.use(express.json());

  server.use(taskRoutes);

  const port = process.env.PORT || 8000;

  server.listen(port, () => console.log(`Server is running in port: ${port}`));
};

main();
