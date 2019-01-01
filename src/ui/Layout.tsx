import * as React from 'react'
import styled from 'src/styled-components'

import UserMenu from './UserMenu'

const Header: any = styled.header`
  height: 54px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`
const Body = styled.div`
  height: 100%;
  margin-top: 54px;
`
const Footer = styled.footer``

export default class Layout extends React.Component<any> {
  render() {
    const { children } = this.props

    return (
      <>
        <Header>
          <UserMenu />
        </Header>
        <Body>{children}</Body>
        <Footer />
      </>
    )
  }
}
