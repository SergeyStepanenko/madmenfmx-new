import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { TODO } from 'src/constants'
import { TodoModel } from 'src/models'

@inject(TODO)
@observer
export default class TodoList extends React.Component<any> {
  render() {
    const { todo } = this.props

    return (
      <ul>
        {todo.activeTodos.map((value: TodoModel) => (
          <li key={value.id}>{value.text}</li>
        ))}
        <button onClick={this.handleClick} />
      </ul>
    )
  }

  handleClick = () => {
    const { todo } = this.props

    todo.add({ text: 'oloo', completed: false })
  }
}
