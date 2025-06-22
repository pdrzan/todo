import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../models/task';
import { TaskComponent } from '../task-component/task-component';

@Component({
  selector: 'home',
  imports: [TaskComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  todoService: TodoService = inject(TodoService);

  tasks: Task[] = []

  constructor() {
    this.todoService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
