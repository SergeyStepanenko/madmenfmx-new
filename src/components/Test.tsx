import * as React from 'react'
import * as S from './styled'

interface State {
  count: number
}

export default class Test extends React.Component<{}, State> {
  state = {
    count: 1
  }

  handleIncrementCounter = () => {
    this.setState((prevProps) => ({ count: prevProps.count + 1 }))
  }

  render() {
    return (
      <S.Button onClick={this.handleIncrementCounter}>
        {this.state.count}
      </S.Button>
    )
  }
}
