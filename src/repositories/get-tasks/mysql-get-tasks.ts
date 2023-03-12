import { IGetTasksRepository } from "../../controllers/get-tasks/protocols";
import { TaskOutputDTO } from "../../dtos/TaskDTO";
import { prisma } from "../../prisma/client";

export class MysqlGetTasksRepository implements IGetTasksRepository {
  public async getTasks(): Promise<TaskOutputDTO[]> {
    const tasks = await (
      await prisma.task.findMany({})
    ).sort((a, b) => a.task_priority - b.task_priority);

    return tasks;
  }
}
