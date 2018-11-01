import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { browserHistory, Route, Router } from 'react-router'
import { Provider } from 'mobx-react'

import Root from 'src/Root'
import { TodoStore, TaskStore } from 'src/stores'
import { TODO, TASK } from 'src/constants'
import { TodoModel } from 'src/models'
import Test from 'src/components/Test'
import Mobx from 'src/components/Mobx'
import Node from 'src/components/Node'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'

const defaultTodos = [
  new TodoModel('Active 1'),
  new TodoModel('Active 2'),
  new TodoModel('Use React', true)
]

const todoStore = new TodoStore(defaultTodos)
const taskStore = new TaskStore()

const routes = [
  { path: '/', component: App },
  { path: 'test', component: Test },
  { path: 'mobx', component: Mobx },
  { path: 'node', component: Node }
]

ReactDOM.render(
  <Root>
    <Provider {...{ [TODO]: todoStore, [TASK]: taskStore }}>
      <Router history={browserHistory}>
        {routes.map(({ path, component }) => (
          <Route path={path} component={component} />
        ))}
      </Router>
    </Provider>
  </Root>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
