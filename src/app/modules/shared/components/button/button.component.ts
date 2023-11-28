import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonProps} from "src/app/Types/ButtonTypes";



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() clickButton = new EventEmitter();
  @Input() public buttonProps: ButtonProps = {text: "", buttonStyles: {}}
}
