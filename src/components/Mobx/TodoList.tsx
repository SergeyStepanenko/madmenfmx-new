import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable, action } from 'mobx'

import { TODO } from 'src/constants'
import { TodoModel } from 'src/models'

import TodoItem from './TodoItem'

@inject(TODO)
@observer
export default class TodoList extends React.Component<any> {
  @observable
  value = ''

  render() {
    const { todo } = this.props

    return (
      <ul>
        <input type="text" onChange={this.handleChange} value={this.value} />
        <button type="text" onClick={this.handleClickAdd}>
          Добавить
        </button>
        {todo.activeTodos.map(({ id, text, completed }: TodoModel) => (
          <TodoItem
            id={id}
            key={id}
            text={text}
            completed={completed}
            onEdit={this.handleClickEdit}
          />
        ))}
      </ul>
    )
  }

  @action('input change')
  handleChange = (event: any) => {
    this.value = event.target.value
  }

  handleClickAdd = () => {
    const { todo } = this.props

    todo.add({ text: this.value, completed: false })
  }

  handleClickEdit = (id: number) => {
    const { todo } = this.props

    todo.edit(id, { text: this.value })
  }
}
