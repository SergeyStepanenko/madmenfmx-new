import * as React from 'react'
import { debounce } from 'lodash-es'
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

  componentDidMount() {
    this.listenScroll()
    this.setNewsNode()
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

  onScroll = () => {
    const { isMobile } = this.props
    const { isHeaderFixed } = this.state

    if (isMobile) {
      return
    }

    if (!this.menuRef || !this.menuRef.current) {
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

  menuRef = React.createRef()

  render() {
    const { id, isTablet } = this.props
    const { isHeaderFixed } = this.state

    return (
      <MenuSection id={id} ref={this.menuRef} isHeaderFixed={isHeaderFixed}>
        <LogoContainer>
          <Logo width="233px" fill="#052554" />
        </LogoContainer>
        <MenuBlock>
          {!isTablet && (
            <List>
              <Item>Home</Item>
              <Item isActive>News</Item>
              <Item>Mission</Item>
              <Item>Timeline</Item>
              <Item>Team</Item>
              <Item>Partners</Item>
            </List>
          )}
          <EmailIcon href="mailto:info@flug-auto.com" />
        </MenuBlock>
      </MenuSection>
    )
  }
}
