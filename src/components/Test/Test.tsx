import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { action, observable } from 'mobx'

import * as S from './styled'

@inject('statusStore')
@observer
export default class Test extends React.Component<any> {
  @observable count = 1

  @action
  componentDidMount() {
    const {
      statusStore: { toggleIsLoading }
    } = this.props

    toggleIsLoading(true)

    setTimeout(() => {
      toggleIsLoading(false)
    }, 2000)
  }

  componentWillUnmount() {
    const {
      statusStore: { toggleIsLoading }
    } = this.props

    toggleIsLoading(false)
  }

  @action handleClick = () => {
    this.count = this.count + 1
  }

  render() {
    return (
      <div>
        <S.Button onClick={this.handleClick}>{this.count}</S.Button>
      </div>
    )
  }
}
