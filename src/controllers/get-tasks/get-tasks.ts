import { TaskOutputDTO } from "../../dtos/TaskDTO";
import { badRequest, ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetTasksRepository } from "./protocols";

export class GetTasksController implements IController {
  constructor(private readonly getTasksRepository: IGetTasksRepository) {}

  public async handle(): Promise<HttpResponse<TaskOutputDTO[] | string>> {
    try {
      const tasks = await this.getTasksRepository.getTasks();

      if (tasks.length === 0) {
        return badRequest("Nenhuma Task encontrada!");
      }

      return ok<TaskOutputDTO[]>(tasks);
    } catch (error) {
      return serverError();
    }
  }
}
