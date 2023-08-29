import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodoItem} from "../to-do-list/to-do-list.component";
import {buttonDelete} from "../../constants/buttonConstData";

@Component({
  selector: 'app-to-do-list-item-component',
  templateUrl: './to-do-list-item-component.html',
  styleUrls: ['./to-do-list-item-component.scss']
})
export class ToDoListItemComponent {
  @Input() todoItem: ITodoItem | null = null;

  @Output() deleteTodo = new EventEmitter<number>();
  public buttonDelete = buttonDelete

  deleteTargetTodo() {
    this.deleteTodo.emit(this.todoItem?.id)
  }
}
