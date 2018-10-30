import { observable, computed, action } from 'mobx'

import { TodoModel } from 'src/models'

export default class TodoStore {
  @observable
  public todos: TodoModel[]

  constructor(fixtures: TodoModel[]) {
    this.todos = fixtures
  }

  @computed
  get activeTodos() {
    return this.todos.filter((todo) => !todo.completed)
  }

  @action('add todo')
  add = ({ text, completed }: TodoModel): void => {
    this.todos.push(new TodoModel(text, completed))
  }

  @action('edit todo')
  edit = (id: number, { text = '' }: Partial<TodoModel>): void => {
    this.todos = this.todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          text
        }
      }

      return todo
    })
  }
}
