import * as React from 'react'

import { TodoModel } from 'src/models'

interface IProps extends TodoModel {
  onEdit: (id: number) => void
}

export default class TodoItem extends React.PureComponent<IProps> {
  render() {
    const { text } = this.props

    return (
      <>
        <span>
          <li>{text}</li>
        </span>
        <span>
          <button onClick={this.handleClickEdit}>Изменить</button>
        </span>
      </>
    )
  }

  handleClickEdit = () => {
    const { onEdit, id } = this.props

    onEdit(id)
  }
}
