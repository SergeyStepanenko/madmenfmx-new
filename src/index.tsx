import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { Provider } from 'mobx-react'
import { browserHistory, Router } from 'react-router'
import { ThemeProvider } from 'src/styled-components'
import 'normalize.css/normalize.css'

import { theme } from 'src/styled-components/theme'
import store from 'src/stores'
import Root from 'src/Root'
import { routes } from './routes'
import Layout from 'src/ui/Layout'

import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Root>
    <ThemeProvider theme={theme}>
      <Provider {...store}>
        <Layout>
          <Router history={browserHistory} routes={routes} />
        </Layout>
      </Provider>
    </ThemeProvider>
  </Root>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
