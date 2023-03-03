import { TaskInputDTO, TaskOutputDTO } from "../../dtos/TaskDTO";

export interface ICreateTaskRepository {
  createTask(params: TaskInputDTO): Promise<TaskOutputDTO>;
}
