import { TaskInputDTO, TaskOutputDTO } from "../../dtos/TaskDTO";
import { badRequest, created, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { ICreateTaskRepository } from "./protocols";

export class CreateTaskController implements IController {
  constructor(private readonly createTaskRepository: ICreateTaskRepository) {}
  public async handle(
    httpRequest: HttpRequest<TaskInputDTO>
  ): Promise<HttpResponse<TaskOutputDTO | string>> {
    try {
      const task = await this.createTaskRepository.createTask(
        httpRequest.body!
      );

      if (!task) {
        return badRequest("Por favor preencha os campos!");
      }

      return created<TaskOutputDTO>(task);
    } catch (error) {
      return serverError();
    }
  }
}
