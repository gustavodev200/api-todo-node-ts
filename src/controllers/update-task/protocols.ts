import { TaskOutputDTO } from "../../dtos/TaskDTO";

export interface UpdateTaskParams {
  task?: string;
  task_priority?: number;
  completed?: boolean;
}

export interface IUpdateTaskRepository {
  updateTaskById(id: string, params: UpdateTaskParams): Promise<TaskOutputDTO>;
}
