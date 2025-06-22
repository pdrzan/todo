import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task'

@Component({
  selector: 'task-component',
  imports: [CommonModule],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css'
})
export class TaskComponent {
  @Input()
  task: Task | undefined;

  constructor() {
    console.log(this.task);
  }
}
