import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
@Injectable()
export class ToDoService {
todo_list :  Todo[]=[{Id:1,content:'hhhhh',status:'not done',priority:'hhhhhh'},
{Id:2,content:'bbhh',status:'done',priority:'ggghh'}];
  constructor() { }

getAllTodo() {
    return this.todo_list;
  }



 addTodo(to: Todo) {
     to.Id = this.todo_list.length + 1;
     this.todo_list.push(to);
  }


}