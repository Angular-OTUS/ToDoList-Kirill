import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "./components/button/button.component";
import {LoaderComponent} from "./components/loader/loader.component";
import { InputComponent } from './components/input/input.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import {TooltipDirective} from './directives/tooltip/tooltip.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    LoaderComponent,
    InputComponent,
    TooltipComponent,
    TextareaComponent, TooltipDirective
  ],
    imports: [
        CommonModule,
        MatInputModule,
        FormsModule
    ],
    exports: [ButtonComponent, LoaderComponent, InputComponent, TextareaComponent, TooltipDirective]
})
export class SharedModule { }
