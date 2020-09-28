import { Injectable } from '@angular/core';
import { todo } from './to-do';

@Injectable( )
export class ToDoService {


todo_list:Array<todo> =[{Id:1,content:'hhhhh',status:'not done',priority:'kkkk'},
{Id:2,content:'bbhh',status:'done',priority:'ggggg'}];


constructor() { }
  getData() {
    return this.todo_list;
  }
  updateTask(todo: todo){
  console.log(todo.Id);
  
     const index = this.todo_list.findIndex(c => c.Id === todo.Id);
   
     this.todo_list[index] = todo;

  }
}