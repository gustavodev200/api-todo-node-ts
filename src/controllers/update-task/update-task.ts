import { TaskInputDTO, TaskOutputDTO } from "../../dtos/TaskDTO";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateTaskRepository, UpdateTaskParams } from "./protocols";

export class UpdateTaskController implements IController {
  constructor(private readonly updateTaskRepository: IUpdateTaskRepository) {}

  public async handle(
    httpRequest: HttpRequest<TaskInputDTO>
  ): Promise<HttpResponse<TaskOutputDTO | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Missing fields");
      }

      if (!id) {
        return badRequest("Missing task id");
      }

      const allowedFielsToUpdate: (keyof UpdateTaskParams)[] = [
        "task",
        "task_priority",
        "completed",
      ];

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFielsToUpdate.includes(key as keyof UpdateTaskParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed");
      }

      const task = await this.updateTaskRepository.updateTaskById(id, body);

      return ok<TaskOutputDTO>(task);
    } catch (error) {
      return serverError();
    }
  }
}
