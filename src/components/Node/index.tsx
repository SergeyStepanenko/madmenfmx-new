import * as React from 'react'
import { action } from 'mobx'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { TASK } from 'src/constants'
import { TaskModel } from 'src/models'

@inject(TASK)
@observer
export default class Node extends React.Component<any> {
  render() {
    const { task } = this.props

    return (
      <>
        <button
          style={{ width: '200px', height: '40px' }}
          onClick={this.handleClick}
        >
          Нажми плез
        </button>
        <Table style={{ width: '400px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {task.taskList.map(({ id, name, status }: TaskModel) => {
              return (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{status}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </>
    )
  }

  @action('get tasks')
  handleClick = async () => {
    const { task } = this.props

    task.fetch()
  }
}
