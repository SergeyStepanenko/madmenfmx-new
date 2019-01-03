import * as React from 'react'
import { observable, action } from 'mobx'

const App = () => import('./App')
const Node = () => import('src/components/Node')
const Mobx = () => import('src/components/Mobx')
const Test = () => import('src/components/Test')
const Slider = () => import('src/components/Slider')
const Form = () => import('src/entries/Form')

export const config = [
  { path: '/', Component: App, name: 'Главная' },
  { path: 'node', Component: Node, name: 'Node' },
  { path: 'test', Component: Test, name: 'Test' },
  { path: 'mobx', Component: Mobx, name: 'Mobx' },
  { path: 'slider', Component: Slider, name: 'Slider' },
  { path: 'form', Component: Form, name: 'Form' }
]

function retry(fn: any, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error: any) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error)

            return
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject)
        }, interval)
      })
  })
}

class ErrorBoundary extends React.Component<any> {
  @observable hasError = false
  @observable errorText = null

  componentDidCatch(error: any) {
    this.setError(error)
  }

  @action
  setError(error: any) {
    this.hasError = true
    this.errorText = error
  }

  render() {
    if (this.hasError) {
      return <h1>Ошибка</h1>
    }

    return this.props.children
  }
}

const routes = config.map(({ path, Component }) => {
  // @ts-ignore
  const LazyEntryWithRetry = React.lazy(() => retry(Component))

  return {
    path,
    component: () => (
      <ErrorBoundary>
        <LazyEntryWithRetry />
      </ErrorBoundary>
    )
  }
})

export default routes
