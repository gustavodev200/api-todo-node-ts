import { TaskOutputDTO } from "../../dtos/TaskDTO";

export interface IGetTasksRepository {
  getTasks(): Promise<TaskOutputDTO[]>;
}
