import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"]
})
export class TodoFormComponent implements OnInit {
  constructor() {}

  @Output() public addTodo = new EventEmitter();

  ngOnInit() {}

  fireAddTodo(e, todoTitle) {
    e.preventDefault();
    console.log("Fired AddTodo", todoTitle);
    this.addTodo.emit(todoTitle);
  }
}
