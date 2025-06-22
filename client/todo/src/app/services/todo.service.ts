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

  public updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.basePath + `/${task.id}`, task);
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.basePath, task);
  }

  public getTask(task_id: number): Observable<Task> {
    return this.http.get<Task>(this.basePath + `/${task_id}`);
  }

  public deleteTask(task_id: number): Observable<Task> {
    return this.http.delete<Task>(this.basePath + `/${task_id}`);
  }
}
