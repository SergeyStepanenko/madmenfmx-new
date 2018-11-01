import * as React from 'react'
import { browserHistory, Route, Router } from 'react-router'

import Test from 'src/components/Test'
import Mobx from 'src/components/Mobx'
import Node from 'src/components/Node'

import App from './App'

const routes = [
  { path: '/', component: App },
  { path: 'test', component: Test },
  { path: 'mobx', component: Mobx },
  { path: 'node', component: Node }
]

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Router>
    )
  }
}
