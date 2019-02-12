import * as React from 'react'
import { debounce } from 'lodash-es'
import styled from 'src/styled-components'

import ScreenService from 'src/services/ScreenService'

import Logo from 'src/assets/svgr/Logo'
import Menu from 'src/components/Menu'
import Carousel from 'src/components/Carousel'
import Info from 'src/components/Info'
import Misson from 'src/components/Mission'
import Timeline from 'src/components/Timeline'
import Team from 'src/components/Team'
import TurnKeySolution from 'src/components/TurnKeySolution'
import homeImage from 'src/assets/home.jpg'
import logoMobile from 'src/assets/logo_icon.svg'

import map1 from 'src/assets/map_1.jpg'
import map2 from 'src/assets/map_2.jpg'

const Wrapper: any = styled.div``

const ImageContainer = styled.section`
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

const TitleContainer = styled.h1`
  max-width: 817px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuSection = styled.section`
  height: 76px;
  display: flex;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 43px;
`

const News = styled.section`
  padding-top: 52px;
  padding-right: 12px;
  padding-bottom: 65px;
  padding-left: 12px;
  background-color: #f2f6f7;
`

const NewsTitle = styled.h5`
  font-size: 55px;
  text-align: center;
  font-family: Avenir Next Bold;
`

const MoreNewsButton = styled.button`
  display: block;
  width: 190px;
  height: 52px;
  margin: 30px auto 0 auto;
  text-transform: uppercase;
  text-align: center;
  background-color: transparent;
  border: 2px solid #00a8f3;
  border-radius: 4px;
  font-size: 13px;
  font-family: Avenir Black;
  cursor: pointer;
  outline: none;
`

const Maps = styled.section`
  margin-top: 109px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Map: any = styled.img`
  width: ${({ isTablet }: any) => (isTablet ? '100%' : '900px')};
`

const MobileLogoContainer = styled.div`
  text-align: center;
`

const LogoMobile = styled.img`
  width: 280px;
`

export default class Main extends React.Component {
  state = {
    isTablet: this.isTablet,
    isMobile: this.isMobile,
    isMobileSmall: this.isMobileSmall
  }

  wrapperRef = React.createRef()

  componentDidMount() {
    this.listenResize()
  }

  get isTablet() {
    return window.innerWidth < 991
  }

  get isMobile() {
    return window.innerWidth <= 767
  }

  get isMobileSmall() {
    return window.innerWidth <= 454
  }

  listenResize() {
    // @ts-ignore
    ScreenService.onResize(this.onResize)
  }

  onResize = debounce(() => {
    this.setState({
      isTablet: this.isTablet,
      isMobile: this.isMobile
    })
  }, 20)

  render() {
    const {
      isTablet,
      isMobile
      // isMobileSmall
    } = this.state

    return (
      <Wrapper>
        <ImageContainer>
          <TitleContainer>
            {isTablet ? (
              <MobileLogoContainer>
                <LogoMobile src={logoMobile} />
              </MobileLogoContainer>
            ) : (
              <Logo width="815px" />
            )}
          </TitleContainer>
        </ImageContainer>
        <MenuSection>
          <LogoContainer>
            <Logo width="233px" fill="#052554" />
          </LogoContainer>
          <Menu isTablet={isTablet} />
        </MenuSection>
        <News>
          <NewsTitle>News</NewsTitle>
          <Carousel isTablet={isTablet} isMobile={isMobile} />
          <MoreNewsButton>More news</MoreNewsButton>
        </News>
        <Misson isTablet={isTablet} isMobile={isMobile} />
        <Info isTablet={isTablet} />
        <Maps>
          <picture>
            <Map isTablet={isTablet} src={map1} alt="flugauto" />
          </picture>
          <picture>
            <Map isTablet={isTablet} src={map2} alt="conventional way" />
          </picture>
        </Maps>
        <TurnKeySolution isTablet={isTablet} isMobile={isMobile} />
        <Timeline isMobile={isMobile} />
        <Team isMobile={isMobile} />
      </Wrapper>
    )
  }
}
