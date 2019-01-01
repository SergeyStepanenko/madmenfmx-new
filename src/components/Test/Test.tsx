import * as React from 'react'
import * as S from './styled'

interface IState {
  count: number
}

export default class Test extends React.Component<any, IState> {
  public state = {
    count: 1
  }

  public handleIncrementCounter = () => {
    this.setState((prevProps) => ({ count: prevProps.count + 1 }))
  }

  public render() {
    return (
      <div>
        <S.Button onClick={this.handleIncrementCounter}>
          {this.state.count}
        </S.Button>
      </div>
    )
  }
}
