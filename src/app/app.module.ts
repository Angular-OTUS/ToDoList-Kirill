import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item-component/to-do-list-item-component';
import { InputToDoComponent } from './components/input-to-do/input-to-do.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./modules/shared/shared.module";
import { ListItemDescriptionComponent } from './components/list-item-description/list-item-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    InputToDoComponent,
    ListItemDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    NoopAnimationsModule,
    SharedModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
