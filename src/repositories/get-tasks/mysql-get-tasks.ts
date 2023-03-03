import { IGetTasksRepository } from "../../controllers/get-tasks/protocols";
import { TaskOutputDTO } from "../../dtos/TaskDTO";
import { prisma } from "../../prisma/client";

export class MysqlGetTasksRepository implements IGetTasksRepository {
  public async getTasks(): Promise<TaskOutputDTO[]> {
    const tasks = await prisma.task.findMany({});

    return tasks;
  }
}
