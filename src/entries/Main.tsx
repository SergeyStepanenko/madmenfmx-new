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
import Maps from 'src/components/Maps'
import Partners from 'src/components/Partners'
import TurnKeySolution from 'src/components/TurnKeySolution'
import homeImage from 'src/assets/home.jpg'
import logoMobile from 'src/assets/logo_icon.svg'

const Wrapper: any = styled.div``

const ImageSection = styled.section`
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

const News: any = styled.section`
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
    isMobileSmall: this.isMobileSmall,
    isTitleFixed: false
  }

  positions = []

  componentDidMount() {
    this.listenResize()
    this.getSectionsPositions()
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

  getSectionsPositions() {
    if (!this.wrapperRef || !this.wrapperRef.current) {
      return
    }

    // @ts-ignore
    const { children } = this.wrapperRef.current || []

    children.reduce = [].reduce

    this.positions = children.reduce(
      (acc: any, item: any) => ({
        ...acc,
        [item.id]: item.getBoundingClientRect().top
      }),
      {}
    )

    console.log(this.positions)
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

  wrapperRef = React.createRef()
  newsRef = React.createRef()

  render() {
    const { isTablet, isMobile, isTitleFixed } = this.state

    return (
      <Wrapper ref={this.wrapperRef}>
        <ImageSection id="logo">
          <TitleContainer>
            {isTablet ? (
              <MobileLogoContainer>
                <LogoMobile src={logoMobile} />
              </MobileLogoContainer>
            ) : (
              <Logo width="815px" />
            )}
          </TitleContainer>
        </ImageSection>
        <Menu id="menu" isMobile={isMobile} />
        <News id="news" ref={this.newsRef}>
          <NewsTitle>News</NewsTitle>
          <Carousel isTablet={isTablet} isMobile={isMobile} />
          <MoreNewsButton>More news</MoreNewsButton>
        </News>
        <Misson id="mission" isTablet={isTablet} isMobile={isMobile} />
        <Info id="info" isTablet={isTablet} />
        <Maps id="maps" isMobile={isMobile} />
        <TurnKeySolution
          id="keySolution"
          isTablet={isTablet}
          isMobile={isMobile}
        />
        <Timeline id="timeline" isMobile={isMobile} />
        <Team id="team" isMobile={isMobile} />
        <Partners id="partners" isMobile={isMobile} />
      </Wrapper>
    )
  }
}
