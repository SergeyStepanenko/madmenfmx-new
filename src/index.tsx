import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router'
import 'normalize.css/normalize.css'

import Root from 'src/Root'

import routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Root>
    <Router history={browserHistory} routes={routes} />
  </Root>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
