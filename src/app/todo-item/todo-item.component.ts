import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() public todoItem;
  @Output() public completeTodo = new EventEmitter();
  @Output() public deleteTodo = new EventEmitter();
  public itemClasses = {
    "w3-display-container": true
  };

  constructor() {}

  ngOnInit() {
    this.itemClasses["w3-green"] = this.todoItem.completed;
  }

  fireCompleteTodo() {
    this.completeTodo.emit(this.todoItem.id);
    this.itemClasses["w3-green"] = true;
  }
  fireDeleteTodo() {
    this.deleteTodo.emit(this.todoItem.id);
  }
}
