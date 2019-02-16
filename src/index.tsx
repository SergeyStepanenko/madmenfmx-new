import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router'

import { ThemeProvider, theme } from 'src/styled-components'
import 'normalize.css/normalize.css'
import 'reset-css'

import routes from './routes'
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={browserHistory} routes={routes} />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
)
