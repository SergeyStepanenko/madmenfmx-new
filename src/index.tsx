import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router'

import { ThemeProvider, theme } from 'src/styled-components'
import 'normalize.css/normalize.css'
import 'reset-css'

import Root from 'src/Root'

import routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Root>
    <ThemeProvider theme={theme}>
      <Router history={browserHistory} routes={routes} />
    </ThemeProvider>
  </Root>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
