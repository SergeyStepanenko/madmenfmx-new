import * as React from 'react'
// @ts-ignore
import scrollToElement from 'scroll-to-element'
import styled, { css } from 'src/styled-components'
import emailIcon from 'src/assets/email.svg'
import Logo from 'src/assets/svgr/Logo'

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

const EmailIcon = styled.a`
  display: block;
  margin-left: 30px;
  width: 84px;
  height: 100%;
  border-left: 2px solid #e5ecef;
  background-image: url(${emailIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

const MenuBlock = styled.menu`
  display: flex;
  align-items: center;
`

export default class Menu extends React.PureComponent<any> {
  state = {
    isHeaderFixed: false
  }

  node = null
  newsNode = null
  wrapperNode = null
  menuRef = React.createRef()

  componentDidMount() {
    this.listenScroll()
    this.setNewsNode()
    this.setWrapperNode()
  }

  componentWillUnmount() {
    this.unlistedScroll()
  }

  listenScroll() {
    window.addEventListener('scroll', this.onScroll)
  }

  unlistedScroll() {
    window.removeEventListener('scroll', this.onScroll)
  }

  setNewsNode() {
    // @ts-ignore
    this.newsNode = document.getElementById('news')
  }

  setWrapperNode() {
    // @ts-ignore
    this.wrapperNode = document.getElementById('wrapper')
  }

  getSectionsPositions() {
    if (!this.wrapperNode) {
      return
    }

    // @ts-ignore
    const { children } = this.wrapperNode || {}

    if (!children) {
      return
    }

    children.reduce = [].reduce

    return children.reduce((acc: any, item: any) => {
      const { id } = item

      if (!id) {
        return acc
      }

      // console.log('scrollTop >>> ', item.scrollTop)

      return {
        ...acc,
        [item.id]: item.getBoundingClientRect().top
      }
    }, {})
  }

  onScroll = () => {
    const { isMobile } = this.props
    const { isHeaderFixed } = this.state

    if (isMobile) {
      return
    }

    if (!this.menuRef || !this.menuRef.current || !this.newsNode) {
      return
    }

    // @ts-ignore
    const offsetTop = this.menuRef.current.getBoundingClientRect().top
    // @ts-ignore
    const newsOffsetY = this.newsNode.getBoundingClientRect().top

    if (offsetTop < 0 && !isHeaderFixed) {
      this.setState({ isHeaderFixed: true }, () => {
        // @ts-ignore
        this.newsNode.style.marginTop = `${menuHeight}px`
      })
    }

    if (newsOffsetY >= menuHeight && isHeaderFixed) {
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
          <Logo width="233px" fill="#052554" />
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
          <EmailIcon href="mailto:info@flug-auto.com" />
        </MenuBlock>
      </MenuSection>
    )
  }

  handleMenuItemClick = (value: string) => {
    const { isHeaderFixed } = this.state
    const positions = this.getSectionsPositions()

    let scrollPosition =
      positions[value] + document.documentElement.scrollTop - menuHeight

    // window.scroll(0, scrollPosition)

    scrollToElement(`#${value}`)
  }
}
