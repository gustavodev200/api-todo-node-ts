import { ICreateTaskRepository } from "../../controllers/create-task/protocols";
import { TaskInputDTO, TaskOutputDTO } from "../../dtos/TaskDTO";
import { prisma } from "../../prisma/client";

export class MysqlCreateTaskRepository implements ICreateTaskRepository {
  public async createTask(params: TaskInputDTO): Promise<TaskOutputDTO> {
    const task = await prisma.task.create({
      task: params.task,
      task_priority: params.task_priority,
    });

    return task;
  }
}
