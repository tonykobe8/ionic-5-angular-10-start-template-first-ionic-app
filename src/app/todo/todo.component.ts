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




constructor(
public alertController: AlertController) { }
delete(index){
this.todo_list.splice(index,1) ;
}
ngOnInit() {
    }
  
addTask(){
//console.log(this.content,this.status,this.priority);
   this.todo_list.push({Id:this.Id,content:this.content,status:this.status,priority:this.priority});
   this.Id=""; this.content=""; this.status="";
   this.priority="";
   }
 


async updateTask(todo,index) {
const alert = await this.alertController.create({
cssClass: 'secondary',
header: 'update task?',

        inputs: [{  value:todo.content , placeholder:'content' },
        {value:todo.status ,placeholder:'status'},
        {value:todo.priority, placeholder: 'priority'}],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Update', handler: data => {

if (data[0].length == 0) {
this.todo_list[index] = todo;
} else {
this.todo_list[index] = data[0];  
 }
          }
        }
      ]
    });
    alert.present();
}
}