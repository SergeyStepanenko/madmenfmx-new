import * as React from 'react'
import { observable } from 'mobx'

import Times from './Timer'

export const appState = observable({
  timer: 0,
  increment() {
    appState.timer = appState.timer + 1
  }
})

export default class Mobx extends React.Component {
  render() {
    return <Times appState={appState} />
  }
}
