import { Component,  NgZone,  OnInit } from '@angular/core';
import { todo } from '../todo.model';

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



 

constructor(private zone: NgZone) { }

delete(index){
this.todo_list.splice(index,1) ;
}

ngOnInit() {
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
  this.zone.run(() => {
  let index = this.todo_list.map(x => this.Id).indexOf(todo[0].Id);
  let newItem = {
    Id:todo[0].Id,
    content: todo[0].content,
    status: todo[0].status,
    priority: todo[0].priority,
    } 
   if (index !== -1) {
    this.todo_list.push(newItem);
  } else {
    this.todo_list[index] = newItem;
       }
});


}
}