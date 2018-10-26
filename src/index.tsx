import App from './App'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory, Route, Router } from 'react-router'

import registerServiceWorker from './registerServiceWorker'
import Test from 'src/components/Test'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="test" component={Test} />
  </Router>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
