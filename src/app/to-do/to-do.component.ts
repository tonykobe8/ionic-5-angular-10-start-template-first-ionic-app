import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
 
content: string;
status: string;
priority: string;
taskList = [];
constructor() { }
todo_list=[{content:'hh'}];


 delete(todo){
const index = this.todo_list.indexOf(todo,0);
if(index > -1){
 this.todo_list.splice(index,1) ;
}
 }

 addTask() {
if (this.content.length > 0) {
let todo = this.content;
this.todo_list.push(todo);
this.content = "";
}
}

ngOnInit() {

}
}