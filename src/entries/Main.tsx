import * as React from 'react'
import styled from 'src/styled-components'
import homeImage from 'src/assets/home.jpg'
import emailIcon from 'src/assets/email.svg'
import Logo from 'src/assets/svgr/Logo'

import Carousel from 'src/components/Carousel'

const ImageContainer = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${homeImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
`

const TitleContainer = styled.div`
  max-width: 817px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Menu = styled.menu`
  height: 76px;
  padding-left: 43px;
  display: flex;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  float: left;
`

const Item: any = styled.li`
  width: 110px;
  height: 100%;
  font-size: 16px;
  text-align: center;
  line-height: 76px;
  cursor: pointer;
  color: ${(props: any) =>
    props.isActive ? props.theme.colors.main : '#9caeb7'};
`

const EmailIcon = styled.a`
  display: block;
  float: right;
  width: 84px;
  height: 100%;
  border-left: 2px solid #e5ecef;
  background-image: url(${emailIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

const MenuContainer = styled.div``

const News = styled.section`
  padding-top: 52px;
  padding-bottom: 65px;
  background-color: #f2f6f7;
`

const NewsTitle = styled.h5`
  font-size: 55px;
  text-align: center;
`

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <ImageContainer>
          <TitleContainer>
            <Logo width="815px" />
          </TitleContainer>
        </ImageContainer>
        <Menu>
          <LogoContainer>
            <Logo width="233px" fill="#052554" />
          </LogoContainer>
          <MenuContainer>
            <List>
              <Item>Home</Item>
              <Item isActive>News</Item>
              <Item>Mission</Item>
              <Item>Timeline</Item>
              <Item>Team</Item>
              <Item>Partners</Item>
            </List>
            <EmailIcon href="mailto:test@test.com" />
          </MenuContainer>
        </Menu>
        <News>
          <NewsTitle>News</NewsTitle>
          <Carousel />
        </News>
      </div>
    )
  }
}
