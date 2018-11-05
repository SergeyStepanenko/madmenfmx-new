import * as React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

// import { TaskModel } from 'src/models'

@observer
export default class Item extends React.Component<any> {
  @observable
  isUpdating = false

  @observable
  name = this.props.name

  render() {
    const { name, status } = this.props

    return (
      <TableRow>
        <TableCell>
          {this.isUpdating ? (
            <input
              type="text"
              value={this.name}
              onChange={this.handleNameChange}
            />
          ) : (
            name
          )}
        </TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>
          {this.isUpdating ? (
            <button onClick={this.handleUpdatingFinish}>Закончить</button>
          ) : (
            <button onClick={this.handleUpdatingStart}>Редактировать</button>
          )}
        </TableCell>
      </TableRow>
    )
  }

  @action('handleUpdatingFinish')
  handleUpdatingFinish = () => {
    const { onUpdate, id, status } = this.props

    onUpdate({ id, name: this.name, status })

    this.isUpdating = false
  }

  @action('handleUpdatingStart')
  handleUpdatingStart = () => {
    this.isUpdating = true
  }

  @action('handleNameChange')
  handleNameChange = (event: any) => {
    this.name = event.target.value
  }
}
