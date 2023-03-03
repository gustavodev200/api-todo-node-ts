// export enum TaskPriority {
//   ALTA = 1,
//   MEDIA = 2,
//   BAIXA = 3,
// }

export interface TaskInputDTO {
  task: string;
  task_priority: number;
}

export interface TaskOutputDTO {
  id: string;
  task: string;
  task_priority: number;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
}
