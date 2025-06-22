import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  todoSercice: TodoService = inject(TodoService);

}
