import { tokenReference } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Todo} from '../Model/todo'
import {TodoService} from '../services/todo.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = new Todo();
  todos: Todo[];
  constructor(
    private TodoService : TodoService
  )
  {

   }

  ngOnInit(): void
  {
      this.todos = this.TodoService.getTodo();
  }
  addTodo()
  {
    if(this.todos.length)
        {
            this.todo.id = this.todos[this.todos.length - 1].id +1;
        }
        else
        {
            this.todo.id=1;
        }
      this.TodoService.addTodo(this.todo);
      this.todo= new Todo();
  }
  deleteTodo(todo:Todo)
  {
    this.TodoService.deleteTodo(todo);
  }


}
