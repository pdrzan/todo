export class Task {
  id: number;
  message: string;
  completed: boolean;

  constructor(id: number, message: string, completed: boolean) {
    this.id = id;
    this.message = message;
    this.completed = completed;
  }
}
