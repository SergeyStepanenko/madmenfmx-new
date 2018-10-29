import * as React from 'react'
import { observable } from 'mobx'

import Times from './Timer'
import TodoList from './TodoList'

export const appState = observable({
  timer: 0,
  increment() {
    appState.timer = appState.timer + 1
  }
})

export default class Mobx extends React.Component {
  render() {
    return (
      <div>
        <Times appState={appState} />
        <TodoList />
      </div>
    )
  }
}
