import * as React from 'react'
import './App.css'

import logo from './logo.svg'

interface IDigits {
  a: number
  b: number
  c?: number
}

type ISum = (params: IDigits) => number

class App extends React.Component {
  public sum: ISum = ({ a, b, c }): number => {
    if (c) {
      return a + b + c
    }

    return a + b
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>{this.sum({ a: 1, b: 4 })}</div>
        <div>{this.sum({ a: 1, b: 3, c: 100 })}</div>
      </div>
    )
  }
}

export interface IdDisplay {
  display: string
  id: string
}

export const list: IdDisplay[] = [
  {
    display: 'Foo Select',
    id: 'foo'
  },
  {
    display: 'Bar Select',
    id: 'bar'
  }
]

export default App
