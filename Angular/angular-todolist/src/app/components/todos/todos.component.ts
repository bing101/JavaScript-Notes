import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
import { title } from 'process';

@Component({
  selector: 'app-todos', // This selector will be used to refrence component in another
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // Mostly used to import services
  constructor() {}

  // This is basically a lifecycle method
  // Works like a constructor
  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Throw out trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Homework',
        completed: true,
      },
      {
        id: 3,
        title: 'Pickup vegies',
        completed: false,
      },
    ];
  }
}
