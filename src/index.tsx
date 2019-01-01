import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { browserHistory, Router } from 'react-router'
import 'normalize.css/normalize.css'

import { ThemeProvider } from 'src/styled-components'
import { theme } from 'src/styled-components/theme'
import stores from 'src/stores'
import Root from 'src/Root'
import Layout from 'src/ui/Layout'

import routes from './routes'

import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Root>
    <Provider {...stores}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router history={browserHistory} routes={routes} />
        </Layout>
      </ThemeProvider>
    </Provider>
  </Root>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
