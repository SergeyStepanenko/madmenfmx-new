import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { browserHistory, Route, Router } from 'react-router'
import { Provider } from 'mobx-react'

import Root from 'src/Root'
import { TodoStore } from 'src/stores'
import { TodoModel } from 'src/models'
import Test from 'src/components/Test'
import Mobx from 'src/components/Mobx'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'

const defaultTodos = [
  new TodoModel('Active 1'),
  new TodoModel('Active 2'),
  new TodoModel('Use React', true)
]

const todoStore = new TodoStore(defaultTodos)

ReactDOM.render(
  <Root>
    <Provider {...{ todo: todoStore }}>
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="test" component={Test} />
        <Route path="mobx" component={Mobx} />
      </Router>
    </Provider>
  </Root>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
