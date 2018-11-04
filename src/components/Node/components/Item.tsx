import * as React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { TaskModel } from 'src/models'

export default class Item extends React.PureComponent<Partial<TaskModel>> {
  render() {
    const { name, status } = this.props

    return (
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{status}</TableCell>
      </TableRow>
    )
  }
}
