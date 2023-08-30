import {Component, OnInit} from '@angular/core';

export interface ITodoItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit{
  arrayTodo: ITodoItem[] = [];
  isLoading = true;
  setNewTodo(todoName: string) {
    const currentMaxId = this.getMaxId()
    this.arrayTodo = [...this.arrayTodo, {id:currentMaxId + 1, text: todoName}]
  }

  setDeleteTodo(id: number) {
    this.arrayTodo = this.arrayTodo.filter((item: ITodoItem) => item.id !== id)
  }

  getMaxId() {
    const arrayIds: number[] = [0]
    this.arrayTodo.forEach(({id}: ITodoItem) => {
      arrayIds.push(id)
    })
    return Math.max(...arrayIds)
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }
}
