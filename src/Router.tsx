import * as React from 'react'
import { browserHistory, Route, Router } from 'react-router'
import * as Loadable from 'react-loadable'

const App = () => import('./App')
const Node = () => import('src/components/Node')
const Mobx = () => import('src/components/Mobx')
const Test = () => import('src/components/Test')

const Loader = ({ error }: any) => {
  if (error) {
    console.error(error)

    return <pre style={{ color: 'red' }}>Error</pre>
  }

  return null
}

const config = [
  { path: '/', getComponent: App },
  { path: 'test', getComponent: Test },
  { path: 'mobx', getComponent: Mobx },
  { path: 'node', getComponent: Node }
]

const routines = config.map(({ path, getComponent }) => {
  return {
    path,
    component: Loadable({
      loader: getComponent,
      loading: Loader
    })
  }
})

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        {routines.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Router>
    )
  }
}
