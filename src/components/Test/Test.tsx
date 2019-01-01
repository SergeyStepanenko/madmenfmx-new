import * as React from 'react'
import * as S from './styled'

interface IState {
  count: number
}

const OtherComponent = React.lazy(() => import('src/components/Mobx'))

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  )
}

export default class Test extends React.Component<{}, IState> {
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
        <MyComponent />
      </div>
    )
  }
}
