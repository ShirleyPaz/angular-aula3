import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = {
    id: 0,
    finished: false,
    title: '',
    description: '',
    date: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
