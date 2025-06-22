import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly baseUrl = 'http://localhost:8000';
  readonly basePath = this.baseUrl + '/task';

  private http = inject(HttpClient);

  public getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.basePath);
  }
}
