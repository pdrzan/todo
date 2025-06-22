export class Task {
  id: number | null;
  message: string;
  completed: boolean;

  constructor(id: number | null, message: string, completed: boolean) {
    this.id = id;
    this.message = message;
    this.completed = completed;
  }
}
