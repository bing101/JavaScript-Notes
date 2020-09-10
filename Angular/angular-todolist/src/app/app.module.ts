import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

// Whenever you are aadding a new component, it has to go here in the declarations
// AppCompononet is the main component
// Imports will have all your imported modules
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
