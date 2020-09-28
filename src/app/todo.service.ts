import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
todo_list:Array<Todo> =[{Id:1,content:'hhhhh',status:'not done',priority:'kkkk'},
{Id:2,content:'bbhh',status:'done',priority:'ggggg'}];
  constructor() { }
getData() {
    return this.todo_list;
}
updateTask(todo: Todo){
  console.log(todo.Id);
  
     const index = this.todo_list.findIndex(c => c.Id === todo.Id);
    console.log(index);
    this.todo_list[index] = todo;

  }
}