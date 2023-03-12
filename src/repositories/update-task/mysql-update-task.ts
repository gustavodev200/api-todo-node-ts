import {
  IUpdateTaskRepository,
  UpdateTaskParams,
} from "../../controllers/update-task/protocols";
import { TaskOutputDTO } from "../../dtos/TaskDTO";
import { prisma } from "../../prisma/client";

export class MysqlUpdateTaskRepository implements IUpdateTaskRepository {
  public async updateTaskById(
    id: string,
    params: UpdateTaskParams
  ): Promise<TaskOutputDTO> {
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        ...params,
      },
    });

    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new Error("Task not updated");
    }

    return task;
  }
}
