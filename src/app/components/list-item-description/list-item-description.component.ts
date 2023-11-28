import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-item-description',
  templateUrl: './list-item-description.component.html',
  styleUrls: ['./list-item-description.component.scss']
})
export class ListItemDescriptionComponent {
  @Input() description = ""
}
