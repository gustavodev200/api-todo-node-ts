import express from "express";
import { config } from "dotenv";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";

const main = async () => {
  config();
  const server = express();

  server.use(express.json());

  server.use(taskRoutes);

  server.use(cors());

  const port = process.env.PORT || 8000;

  server.listen(port, () => console.log(`Server is running in port: ${port}`));
};

main();
