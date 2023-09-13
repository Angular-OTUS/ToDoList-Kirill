import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ITodoItem} from "../to-do-list/to-do-list.component";
import {buttonDelete} from "../../constants/buttonConstData";


@Component({
  selector: 'app-to-do-list-item-component',
  templateUrl: './to-do-list-item-component.html',
  styleUrls: ['./to-do-list-item-component.scss']
})
export class ToDoListItemComponent implements OnChanges {

  @Input() todoItem: ITodoItem | null = null;
  @Input() selectedId: number | null = null;

  @Output() deleteTodo = new EventEmitter<number>();
  @Output() selectId = new EventEmitter<number>();

  public buttonDelete = buttonDelete
  public isSelected = this.todoItem?.id ? this.selectedId === this.todoItem?.id : false

  ngOnChanges(changes: SimpleChanges): void {
    if (this.todoItem?.id) {
      this.isSelected = changes['selectedId'].currentValue === this.todoItem.id && !this.isSelected;
    }
  }
}
