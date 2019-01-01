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
import Spinner from 'src/ui/UserMenu/Loader'

import routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Root>
    <Provider {...stores}>
      <ThemeProvider theme={theme}>
        <Layout>
          <React.Suspense fallback={<Spinner />}>
            <Router history={browserHistory} routes={routes} />
          </React.Suspense>
        </Layout>
      </ThemeProvider>
    </Provider>
  </Root>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
