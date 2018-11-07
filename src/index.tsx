import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { Provider } from 'mobx-react'
import { browserHistory, Router } from 'react-router'
import { ThemeProvider } from 'styled-components'
import 'normalize.css/normalize.css'

import Root from 'src/Root'
import { TodoStore, TaskStore } from 'src/stores'
import { TODO, TASK } from 'src/constants'
import { TodoModel } from 'src/models'
import { theme } from 'src/styled-components/theme'

import { routes } from './routes'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const defaultTodos = [
  new TodoModel('Active 1'),
  new TodoModel('Active 2'),
  new TodoModel('Use React', true)
]

const todoStore = new TodoStore(defaultTodos)
const taskStore = new TaskStore()

ReactDOM.render(
  <Root>
    <ThemeProvider theme={theme}>
      <Provider {...{ [TODO]: todoStore, [TASK]: taskStore }}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    </ThemeProvider>
  </Root>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
