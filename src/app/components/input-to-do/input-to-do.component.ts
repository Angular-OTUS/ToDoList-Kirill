import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonProps} from "../../Types/ButtonTypes";
import {buttonAdd} from "../../constants/buttonConstData";

@Component({
  selector: 'app-input-to-do',
  templateUrl: './input-to-do.component.html',
  styleUrls: ['./input-to-do.component.scss']
})
export class InputToDoComponent {
  public todoName = ''
  public todoAdd: ButtonProps = buttonAdd

  @Output() sendNewTodo = new EventEmitter<string>()

  onClickAdd() {
    this.sendNewTodo.emit(this.todoName)
    this.onCheckInput("")
  }

  onValueChange($event: Event): void {
    const {value} = $event.target as HTMLInputElement
    this.onCheckInput(value)
  }

  onCheckInput(value: string) {
    this.todoName = value
    if (this.todoName === "") {
      this.todoAdd = {...this.todoAdd, buttonStyles: {...buttonAdd.buttonStyles,  button__noActive: true}, isDisabled: true}
    } else {
      this.todoAdd = {...this.todoAdd, buttonStyles: {...buttonAdd.buttonStyles,  button__noActive: false}, isDisabled: false}
    }
  }
}
