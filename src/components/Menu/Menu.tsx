import * as React from 'react'
import { debounce } from 'lodash-es'
// @ts-ignore
import scrollToElement from 'scroll-to-element'

import styled, { css } from 'src/styled-components'
import emailIcon from 'src/assets/email.svg'
import closeImage from 'src/assets/menu_close.svg'
import burgerImage from 'src/assets/menu.svg'
import Logo from 'src/assets/svgr/Logo'
import ScreenService from 'src/services/ScreenService'

export const menuHeight = 76

const MenuSection: any = styled.section`
  position: relative;
  height: ${menuHeight}px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  ${(props: any) =>
    props.isHeaderFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
    `}

  ${(props: any) =>
    props.isOpened &&
    css`
      border-bottom: 1px solid #e3eeef;
    `}
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 43px;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
`

const Item: any = styled.li`
  width: 100px;
  display: block;
  height: 100%;
  font-size: 16px;
  text-align: center;
  line-height: 76px;
  cursor: pointer;
  color: ${(props: any) =>
    props.isActive ? props.theme.colors.main : '#9caeb7'};
  font-family: Avenir Medium;
  text-transform: capitalize;
`

const EmailIcon: any = styled.a`
  display: block;
  margin-left: ${({ isTablet }: any) => (isTablet ? 5 : 30)}px;
  width: 84px;
  height: 100%;
  background-image: url(${emailIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  ${({ isTablet }: any) =>
    !isTablet &&
    css`
      border-left: 2px solid #e5ecef;
    `}
`

const MenuBlock = styled.nav`
  display: flex;
  align-items: center;
`

const MenuButton = styled.img`
  width: 19px;
  cursor: pointer;
`

const CloseButton = styled(MenuButton)``

const OpenButton = styled(MenuButton)``

const MobileList = styled.ul`
  position: absolute;
  padding: 0;
  list-style: none;
  top: ${menuHeight}px;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;

  ${Item} {
    text-align: left;
    margin-left: 46px;
    width: 100%;
    line-height: 60px;
    border-bottom: 1px solid #eeeff1;
  }

  ${Item}:last-of-type {
    border-bottom: none;
  }
`

export default class Menu extends React.PureComponent<any> {
  state = {
    isHeaderFixed: false,
    headerScrollPosition: 0,
    isOpened: false
  }

  node = null
  newsNode = null
  menuRef = React.createRef()

  componentDidMount() {
    this.listenScroll()
    this.listenResize()
    this.setNewsNode()
    this.setHeaderScrollPosition()
  }

  componentWillUnmount() {
    this.unlistedScroll()
  }

  listenResize() {
    // @ts-ignore
    ScreenService.onResize(this.onResize)
  }

  onResize = () => {
    // this.setHeaderScrollPosition()
  }

  listenScroll() {
    const { isStatic } = this.props

    if (isStatic) {
      return
    }

    window.addEventListener('scroll', this.onScroll)
  }

  unlistedScroll() {
    const { isStatic } = this.props

    if (isStatic) {
      return
    }

    window.removeEventListener('scroll', this.onScroll)
  }

  setNewsNode() {
    // @ts-ignore
    this.newsNode = document.getElementById('news')
  }

  setHeaderScrollPosition() {
    if (!this.menuRef.current) {
      return
    }

    const headerScrollPosition =
      // @ts-ignore
      this.menuRef.current.getBoundingClientRect().top + window.pageYOffset

    this.setState({ headerScrollPosition })
  }

  onScroll = () => {
    const { isHeaderFixed, headerScrollPosition } = this.state

    if (!this.newsNode) {
      return
    }

    if (window.pageYOffset >= headerScrollPosition && !isHeaderFixed) {
      this.setState({ isHeaderFixed: true }, () => {
        // @ts-ignore
        this.newsNode.style.marginTop = `${menuHeight}px`
      })
    }

    if (window.pageYOffset < headerScrollPosition && isHeaderFixed) {
      this.setState({ isHeaderFixed: false }, () => {
        // @ts-ignore
        this.newsNode.style.marginTop = '0'
      })
    }
  }

  renderMenuItems() {
    const { menuItems } = this.props

    return menuItems.map((value: string) => (
      <Item key={value} onClick={() => this.handleMenuItemClick(value)}>
        {value}
      </Item>
    ))
  }

  render() {
    const { id, isTablet } = this.props
    const { isHeaderFixed, isOpened } = this.state

    return (
      <MenuSection
        id={id}
        ref={this.menuRef}
        isOpened={isOpened}
        isHeaderFixed={isHeaderFixed}
      >
        <LogoContainer>
          <Logo width={isTablet ? '150px' : '233px'} fill="#052554" />
        </LogoContainer>
        <MenuBlock>
          {!isTablet && <List>{this.renderMenuItems()}</List>}
          {isTablet &&
            (isOpened ? (
              <CloseButton
                src={closeImage}
                onClick={this.handleCloseMenuClick}
              />
            ) : (
              <OpenButton
                src={burgerImage}
                onClick={this.handleOpenMenuClick}
              />
            ))}
          {isTablet && isOpened ? (
            <MobileList>{this.renderMenuItems()}</MobileList>
          ) : null}
          <EmailIcon href="mailto:info@flug-auto.com" isTablet={isTablet} />
        </MenuBlock>
      </MenuSection>
    )
  }

  handleMenuItemClick = (id: string) => {
    const { isOpened } = this.state

    if (isOpened) {
      this.setState({ isOpened: false })
    }

    scrollToElement(`#${id}`, {
      offset: -menuHeight
    })
  }

  handleCloseMenuClick = () => {
    this.setState({ isOpened: false })
  }

  handleOpenMenuClick = () => {
    this.setState({ isOpened: true })
  }
}
