import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
// It allows us to inject this service into a component
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // injecect http into the constructor
  constructor(private http: HttpClient) {}

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  // method to get all the array
  getTodos(): Observable<Todo[]> {
    const url = `${this.todosUrl}${this.todosLimit}`;
    return this.http.get<Todo[]>(url); // get request
  }

  // method for deleting from the server
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    console.log('removed from server');
    return this.http.delete<Todo>(url, httpOptions);
  }

  // method for updating in server
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
