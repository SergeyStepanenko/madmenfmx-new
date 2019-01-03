import { TASK, TODO } from 'src/constants'
import { TodoModel } from 'src/models'

import TaskStore from './TaskStore'
import TodoStore from './TodoStore'
import StatusStore from './StatusStore'

const defaultTodos = [
  new TodoModel('Active 1'),
  new TodoModel('Active 2'),
  new TodoModel('Use React', true)
]

const taskStore = new TaskStore()
const todoStore = new TodoStore(defaultTodos)
const statusStore = new StatusStore()

export default {
  [TASK]: taskStore,
  [TODO]: todoStore,
  statusStore
}
