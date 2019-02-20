import * as React from 'react'
import { debounce } from 'lodash-es'
// @ts-ignore
import scrollToElement from 'scroll-to-element'

import styled, { css } from 'src/styled-components'
import emailIcon from 'src/assets/email.svg'
import Logo from 'src/assets/svgr/Logo'
import ScreenService from 'src/services/ScreenService'

const menuHeight = 76

const MenuSection: any = styled.section`
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
  margin-left: 30px;
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

export default class Menu extends React.PureComponent<any> {
  state = {
    isHeaderFixed: false,
    headerScrollPosition: 0
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

  onResize = debounce(() => {
    this.setHeaderScrollPosition()
  }, 20)

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
    const { isMobile } = this.props
    const { isHeaderFixed, headerScrollPosition } = this.state

    if (isMobile || !this.newsNode) {
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

  render() {
    const { id, menuItems, isTablet } = this.props
    const { isHeaderFixed } = this.state

    return (
      <MenuSection id={id} ref={this.menuRef} isHeaderFixed={isHeaderFixed}>
        <LogoContainer>
          <Logo width={isTablet ? '150px' : '233px'} fill="#052554" />
        </LogoContainer>
        <MenuBlock>
          {!isTablet && (
            <List>
              {menuItems.map((value: string) => (
                <Item
                  key={value}
                  onClick={() => this.handleMenuItemClick(value)}
                >
                  {value}
                </Item>
              ))}
            </List>
          )}
          <EmailIcon href="mailto:info@flug-auto.com" isTablet={isTablet} />
        </MenuBlock>
      </MenuSection>
    )
  }

  handleMenuItemClick = (id: string) => {
    scrollToElement(`#${id}`, {
      offset: -menuHeight
    })
  }
}
