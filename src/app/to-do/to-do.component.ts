import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }
  todo_list=[{content:'fghgfggf',status:'hgfhghg',priority:'ytyyt'}];

  ngOnInit() {
  }

}