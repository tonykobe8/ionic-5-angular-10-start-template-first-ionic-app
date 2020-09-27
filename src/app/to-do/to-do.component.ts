import { Component, OnInit } from '@angular/core';
import { todo } from '../todo.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
content:string;
status:string;
priority:string;
todo_list:Array<todo> =[{content:'hhhhh',status:'not done',priority:'kkkk'},
{content:'bbhh',status:'done',priority:'ggggg'}];
alertCtrl: any;
constructor() { }

delete(index){
this.todo_list.splice(index,1) ;
}

ngOnInit() {
}

addTask(){
//console.log(this.content,this.status,this.priority);
   this.todo_list.push({content:this.content,status:this.status,priority:this.priority});
   this.content="";
   this.status="";
   this.priority="";
   }


updateTask(index){
//console.log(this.content,this.status,this.priority);
  console.log("fff")
}


}
