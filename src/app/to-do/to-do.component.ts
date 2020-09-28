import { Component,NgZone, OnInit } from '@angular/core';
import { todo } from '../todo';
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

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
ngZone: any;
alertCtrl: any;
constructor() { }
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
  public updateTask(inde) {
    let alert = this.alertCtrl.create({
      title: 'Change grocery item name:',
      message: '',
      inputs: [
        {
          placeholder: 'type in a new name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: data => {
            if (data[0].length === 0) {
              this.todo_list[index] = currentName;
            } else {
              this.todo_list[index] = data[0];
            }
          }
        }
      ]
    });
    alert.present();
  };

  public addItem() {
    let index = this.todo_list.length;
    this.updateTask("New item", index);
  }
}