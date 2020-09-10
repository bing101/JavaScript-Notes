import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todos';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // To take input from an external component
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // We have to catch this event for

  constructor(private todoService: TodoService) {}

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
    // toggle in ui
    todo.completed = !todo.completed;

    // toggle server
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  // Since the item is in upper component, we have to emit
  onDelete(todo: Todo) {
    console.log('deleting');
    this.deleteTodo.emit(todo);
  }
}
