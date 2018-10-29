import * as React from 'react'
import { observer } from 'mobx-react'

import * as S from '../styled'

interface IAppState {
  timer: number
  increment: () => void
}

interface IProps {
  appState: IAppState
}

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: any
}

const Button: React.SFC<IButtonProps> = ({ onClick }) => (
  <S.Button onClick={onClick} />
)

@observer
export default class Timer extends React.Component<IProps> {
  render() {
    const {
      appState: { increment, timer }
    } = this.props

    return (
      <div>
        <div>timer {timer}</div>
        <Button onClick={increment}>Increment</Button>
      </div>
    )
  }
}
