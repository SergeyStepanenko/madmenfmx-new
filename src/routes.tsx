import * as React from 'react'

// import Spinner from 'src/ui/UserMenu/Loader'

const App = React.lazy(() => import('./App'))
// const Node = () => import('src/components/Node')
// const Mobx = () => import('src/components/Mobx')
// const Test = () => import('src/components/Test')
// const Form = () => import('src/entries/Form')
// const Slider = () => import('src/components/Slider')
// const SpinnerExample = () => import('src/ui/UserMenu/Loader')

// const Loader = ({ error }: any) => {
//   if (error) {
//     console.error(error)

//     return <pre style={{ color: 'red' }}>Error</pre>
//   }

//   return <Spinner />
// }

const Test = () => (
  <div>
    <App />
  </div>
)

export const config = [
  { path: '/', Component: App, name: 'Главная' }
  // { path: 'test', Component: Test, name: 'Test' },
  // { path: 'mobx', Component: Mobx, name: 'Mobx' },
  // { path: 'node', Component: Node, name: 'Node' },
  // { path: 'form', Component: Form, name: 'Form' },
  // { path: 'slider', Component: Slider, name: 'Slider' },
  // { path: 'spinner', Component: SpinnerExample, name: 'Spinner' }
]

const routes = config.map(({ path, Component }) => {
  return {
    path,
    component: Test
  }
})

export default routes
