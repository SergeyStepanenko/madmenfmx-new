import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Main from 'src/entries'
import { ThemeProvider, theme } from 'src/styled-components'
import 'normalize.css/normalize.css'
import 'reset-css'

import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
)
