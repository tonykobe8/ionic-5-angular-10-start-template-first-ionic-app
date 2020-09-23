import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

 


constructor() { }
todo_list=[{content:'hhhhh',status:'not done',priority:'hhhhhh'},
{content:'bbhh',status:'done',priority:'ggghh'}];


 delete(index){
this.todo_list.splice(index,1) ;
}

 addTask() {
 
 }



ngOnInit() {

}
}
