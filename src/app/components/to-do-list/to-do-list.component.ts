import {Component, OnInit} from '@angular/core';

export interface ITodoItem {
  id: number;
  text: string;
  description: string;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit{
  arrayTodo: ITodoItem[] = [];
  isLoading = true;
  selectedItemId: number | null = null

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }

  setNewTodo(todoData: [string, string]) {
    const [todoName, todoDescription] = todoData
    const currentMaxId = this.getMaxId()
    this.arrayTodo = [...this.arrayTodo, {id:currentMaxId + 1, text: todoName, description: todoDescription}]
  }

  setDeleteTodo(id: number) {
    this.arrayTodo = this.arrayTodo.filter((item: ITodoItem) => item.id !== id)
  }

  setSelectedItemId(id: number) {
    this.selectedItemId = this.selectedItemId !== id ? id : null
  }

  getMaxId() {
    const arrayIds: number[] = [0]
    this.arrayTodo.forEach(({id}: ITodoItem) => {
      arrayIds.push(id)
    })
    return Math.max(...arrayIds)
  }

  getDescription(id: number | null) {
    const selectedTodo = this.arrayTodo.find((item: ITodoItem) => item.id === id)
    return selectedTodo?.description
  }
}
