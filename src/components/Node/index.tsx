import * as React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { TASK } from 'src/constants'
import { TaskModel } from 'src/models'

import Layout from 'src/Layout'

import Item from './components/Item'

@inject(TASK)
@observer
export default class Node extends React.Component<any> {
  render() {
    const {
      task: { list, isLoading }
    } = this.props

    return (
      <Layout>
        <button
          style={{ width: '200px', height: '40px' }}
          onClick={this.handleClick}
        >
          Нажми плез
        </button>
        <button
          style={{ width: '200px', height: '40px' }}
          onClick={this.handleClickAdd}
        >
          Еще нажми плез
        </button>
        <Table style={{ width: '400px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          {isLoading ? (
            <TableBody>
              <TableRow>
                <TableCell>
                  <small>Загрузка</small>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {list.map(({ id, name, status }: TaskModel) => {
                return (
                  <Item
                    // onClick={this.handleItemClick}
                    key={id}
                    name={name}
                    status={status}
                  />
                )
              })}
            </TableBody>
          )}
        </Table>
      </Layout>
    )
  }

  handleClick = () => {
    const { task } = this.props

    task.fetch()
  }

  handleClickAdd = () => {
    const { task } = this.props

    task.add({ name: 'ololo', status: 'pending' })
  }
}
