import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
 task_list = [];
  constructor() { }
todo_list=[{content:'fghgfggf',status:'hgfhghg',priority:'ytyyt'},{content:'123',status:'2345',priority:'0087'}];
 delete(todo){
const index = this.todo_list.indexOf(todo,0);
if(index > -1){
 this.todo_list.splice(index,1) ;
}
 }


 add() {
    
    }


ngOnInit() {

}
}