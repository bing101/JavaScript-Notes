import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // To take input from an external component
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}

  // set dynamic classes for div
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  // change states
  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
