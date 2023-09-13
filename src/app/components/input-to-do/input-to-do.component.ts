import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonProps} from "src/app/Types/ButtonTypes";
import {buttonAdd} from "src/app/constants/buttonConstData";

@Component({
  selector: 'app-input-to-do',
  templateUrl: './input-to-do.component.html',
  styleUrls: ['./input-to-do.component.scss']
})
export class InputToDoComponent {
  public todoAdd: ButtonProps = buttonAdd
  public todoName = ''
  public todoDescription = ''
  @Output() sendNewTodo = new EventEmitter<[string, string]>()

  onClickAdd() {
    if (!this.todoAdd.isDisabled) {
      this.sendNewTodo.emit([this.todoName, this.todoDescription])
      this.todoDescription = ""
      this.todoName = ""
      this.todoAdd.isDisabled = true
    }
  }

  onChangeInput(value: string) {
    this.todoName = value
    this.onCheckData()
  }

  onChangeArea(value: string) {
    this.todoDescription = value
    this.onCheckData()
  }

  onCheckData() {
    this.todoAdd = {...this.todoAdd, buttonStyles: {...buttonAdd.buttonStyles,  button__noActive: false}, isDisabled: false}
    if (this.todoName === "" || this.todoDescription === "") {
      this.todoAdd = {...this.todoAdd, buttonStyles: {...buttonAdd.buttonStyles,  button__noActive: true}, isDisabled: true}
    } else {
      this.todoAdd = {...this.todoAdd, buttonStyles: {...buttonAdd.buttonStyles,  button__noActive: false}, isDisabled: false}
    }
  }
}