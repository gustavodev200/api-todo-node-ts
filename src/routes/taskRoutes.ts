import { Request, Response, Router } from "express";
import { CreateTaskController } from "../controllers/create-task/create-task";
import { GetTasksController } from "../controllers/get-tasks/get-tasks";
import { MysqlCreateTaskRepository } from "../repositories/create-task/mysql-create-task";
import { MysqlGetTasksRepository } from "../repositories/get-tasks/mysql-get-tasks";

const router = Router();

router.get("/tasks", async (req: Request, res: Response) => {
  const getTasksController = new GetTasksController(
    new MysqlGetTasksRepository()
  );

  const { body, statusCode } = await getTasksController.handle();

  res.status(statusCode).json(body);
});

router.post("/tasks", async (req: Request, res: Response) => {
  const createTaskController = new CreateTaskController(
    new MysqlCreateTaskRepository()
  );

  const { body, statusCode } = await createTaskController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

export default router;
