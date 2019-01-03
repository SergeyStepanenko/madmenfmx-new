import * as React from 'react'
import { observer, inject } from 'mobx-react'

import styled from 'src/styled-components'
import Spinner from 'src/ui/UserMenu/Loader'

import UserMenu from './UserMenu'

const Header = styled.header`
  height: 54px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`

const Body: any = styled.div`
  height: 100%;
  margin-top: 54px;
  ${(props: any) => props.isLoading && 'display: none'};
`
const Footer = styled.footer``

@inject('statusStore')
@observer
export default class Layout extends React.Component<any> {
  render() {
    const {
      children,
      statusStore: { isLoading }
    } = this.props

    return (
      <>
        <Header>
          <UserMenu />
        </Header>
        <div>
          {isLoading && <Spinner />}
          <Body isLoading={isLoading}>{children}</Body>
        </div>
        <Footer />
      </>
    )
  }
}
