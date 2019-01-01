import * as React from 'react'
import styled from 'src/styled-components'

import UserMenu from './UserMenu'

const Container = styled.div`
  height: 100%;
`
const Header: any = styled.div`
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
const Footer = styled.div``

export default class Layout extends React.Component<any> {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Header>
          <UserMenu />
        </Header>
        <Body>{children}</Body>
        <Footer />
      </Container>
    )
  }
}
