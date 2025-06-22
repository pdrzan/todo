import { Component, Input, Output, EventEmitter, inject, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task'
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'task-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css'
})
export class TaskComponent {
  todoService: TodoService = inject(TodoService);

  @Output() remove = new EventEmitter<Task>();

  @Input()
  task: Task | undefined;

  removeTask() {
    this.remove.emit(this.task);
  }

  onCompleteChange(task: Task) {
    this.todoService.updateTask(task).subscribe(task => {
      this.task = task;
    });
  }
}
