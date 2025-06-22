import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly baseUrl = 'https://localhost:8000';
  readonly basePath = this.baseUrl + '/task';

  private http = inject(HttpClient);
}
