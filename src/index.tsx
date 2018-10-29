import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { browserHistory, Route, Router } from 'react-router'

import Test from 'src/components/Test'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="test" component={Test} />
  </Router>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
