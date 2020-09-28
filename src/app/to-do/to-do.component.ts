import { Component, OnInit } from '@angular/core';
import { todo } from '../to-do';
import { ToDoService } from './to-do.service';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
Id: any;
content:string;
status:string;
priority:string;
todo_list:Array<todo> =[{Id:1,content:'hhhhh',status:'not done',priority:'kkkk'},
{Id:2,content:'bbhh',status:'done',priority:'ggggg'}];
constructor() { }
delete(index){
this.todo_list.splice(index,1) ;
}
ngOnInit() {
    this.todoService.getData();
    }

addTask(){
//console.log(this.content,this.status,this.priority);
   this.todo_list.push({Id:this.Id,content:this.content,status:this.status,priority:this.priority});
   this.Id="";
   this.content="";
   this.status="";
   this.priority="";
   }
   updateTask(index){
 

}
}