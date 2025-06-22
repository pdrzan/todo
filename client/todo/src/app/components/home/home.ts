import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../models/task';
import { TaskComponent } from '../task-component/task-component';

@Component({
  selector: 'home',
  imports: [TaskComponent, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  todoService: TodoService = inject(TodoService);

  tasks: Task[] = [];

  new_task_message: string = "";

  ngOnInit(): void {
    this.getTasks();
  }

  onAddTaskButtonClick() {
    if(!this.new_task_message) return;

    this.todoService.addTask(new Task(null, this.new_task_message, false))
      .subscribe(task => {
        console.log(task);
        this.new_task_message = "";
        this.getTasks();
      });
  }

  onEnter(event: KeyboardEvent) {
    console.log(event);
    if(event.key === 'Enter') {
      this.onAddTaskButtonClick();
    }
  }

  getTasks() {
    this.todoService.getAllTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
