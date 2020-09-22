import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }
  todo_list=[{content:'fghgfggf',status:'hgfhghg',priority:'ytyyt'},{content:'123',status:'2345',priority:'0087'}];

  ngOnInit() {
  }

}