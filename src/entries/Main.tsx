import * as React from 'react'
import styled from 'src/styled-components'
import homeImage from 'src/assets/home.jpg'
import logoIcon from 'src/assets/logo_icon.svg'
import logoIconBlack from 'src/assets/logo_icon_black.svg'
import logoTitle from 'src/assets/logo_type.svg'

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

const LogoIcon = styled.img.attrs({
  width: (props: any) => props.width
})``

const LogoTitle = styled.img.attrs({
  width: '600px'
})``

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
  padding-right: 34px;
  display: flex;
  justify-content: space-between;

  img {
    path {
      display: none;
    }
  }
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
`

const Item = styled.li`
  width: 110px;
  height: 100%;
  font-size: 16px;
  text-align: center;
  line-height: 76px;
  cursor: pointer;
`

const EmailIcon = styled.img``

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
            <LogoIcon src={logoIcon} width="180px" alt="logo" />
            <LogoTitle src={logoTitle} alt="flugauto" />
          </TitleContainer>
        </ImageContainer>
        <Menu>
          <LogoContainer>
            <LogoIcon src={logoIconBlack} alt="logo" width="50px" />
          </LogoContainer>
          <MenuContainer>
            <List>
              <Item>Home</Item>
              <Item>News</Item>
              <Item>Mission</Item>
              <Item>Timeline</Item>
              <Item>Team</Item>
              <Item>Partners</Item>
            </List>
            <EmailIcon />
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
