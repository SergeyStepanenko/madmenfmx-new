import * as React from 'react'
import { browserHistory } from 'react-router'
import styled from 'src/styled-components'
import { config } from 'src/routes'

const Container = styled.div``
const Header: any = styled.div`
  height: 54px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`
const Body = styled.div`
  margin-top: 54px;
`
const Footer = styled.div``
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`
const MenuItem = styled.li`
  cursor: pointer;
`

export default class Layout extends React.Component<any> {
  renderMenu = () => {
    return (
      <MenuList>
        {config.map(({ path, name }) => (
          <MenuItem key={path} onClick={() => this.handleMenuItemClick(path)}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    )
  }

  headerRef = React.createRef()

  render() {
    const { children } = this.props

    return (
      <Container>
        <Header ref={this.headerRef}>{this.renderMenu()}</Header>
        <Body>{children}</Body>
        <Footer />
      </Container>
    )
  }

  handleMenuItemClick = (path: any) => {
    browserHistory.push(path)
  }
}
