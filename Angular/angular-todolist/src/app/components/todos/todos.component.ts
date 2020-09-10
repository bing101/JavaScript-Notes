import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
import { title } from 'process';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos', // This selector will be used to refrence component in another
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // Mostly used to import services
  // We load the todo service through const
  constructor(private ts: TodoService) {}

  // This is basically a lifecycle method
  // Works like a constructor
  ngOnInit(): void {
    // think of this as a promise
    this.ts.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // Deleting from ui
    this.todos = this.todos.filter((t) => t.id != todo.id);

    // delete from the server
    this.ts.deleteTodo(todo);
  }
}
