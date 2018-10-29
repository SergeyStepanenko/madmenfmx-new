import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { TODO } from 'src/constants'
import { TodoModel } from 'src/models'
import { observable, action } from 'mobx'

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
        {todo.activeTodos.map(({ id, text }: TodoModel) => (
          <li key={id}>{text}</li>
        ))}
        <button onClick={this.handleClick}>Добавить</button>
      </ul>
    )
  }

  @action('input change')
  handleChange = (event: any) => {
    this.value = event.target.value
  }

  handleClick = () => {
    const { todo } = this.props

    todo.add({ text: this.value, completed: false })
  }
}
