import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
Id: any;
content:string;
status:string;
priority:string;
todo_list:Array<Todo> =[{Id:1,content:'hhhhh',status:'not done',priority:'kkkk'},
{Id:2,content:'bbhh',status:'done',priority:'ggggg'}];
constructor(private todoService: TodoService,
public alertController: AlertController) { }
delete(index){
this.todo_list.splice(index,1) ;
}
ngOnInit() {
    }
    get AllTodoList() {
    return this.todoService.getData();
  }
addTask(){
//console.log(this.content,this.status,this.priority);
   this.todo_list.push({Id:this.Id,content:this.content,status:this.status,priority:this.priority});
   this.Id="";
   this.content="";
   this.status="";
   this.priority="";
   }
 
async updateTask(Id: any) {
const todo = this.todoService.getData().find(c => c.Id === Id);
const alert = await this.alertController.create({
cssClass: 'my-custom-class',
header: 'update task?',
inputs: [{
name: 'content',
type: 'text',
placeholder: 'Content'
},{
name: 'status',
type: 'text',
placeholder: 'Status'
},{
name: 'priority',
type: 'text',
placeholder: 'Priority'
}],



buttons: [{
text: 'Cancel',
role: 'cancel',
cssClass: 'secondary',
handler: () => {
this.todo_list;
}
}, {
text: 'update',
handler: () => {
console.log('Confirm Ok');
}
}]
});
await alert.present();
}

}