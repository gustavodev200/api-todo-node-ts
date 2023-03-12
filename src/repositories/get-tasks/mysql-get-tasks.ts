import { IGetTasksRepository } from "../../controllers/get-tasks/protocols";
import { TaskOutputDTO } from "../../dtos/TaskDTO";
import { prisma } from "../../prisma/client";

export class MysqlGetTasksRepository implements IGetTasksRepository {
  public async getTasks(): Promise<TaskOutputDTO[]> {
    const tasks = await await prisma.task.findMany({
      orderBy: [
        {
          completed: "asc",
        },
        {
          task_priority: "asc",
        },
      ],
    });

    return tasks;
  }
}
