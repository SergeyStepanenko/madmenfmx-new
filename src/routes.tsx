import * as React from 'react'
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

export const config = [
  { path: '/', getComponent: App, name: 'Главная' },
  { path: 'test', getComponent: Test, name: 'Test' },
  { path: 'mobx', getComponent: Mobx, name: 'Mobx' },
  { path: 'node', getComponent: Node, name: 'Node' }
]

export const routes = config.map(({ path, getComponent }) => {
  return {
    path,
    component: Loadable({
      loader: getComponent,
      loading: Loader
    })
  }
})
