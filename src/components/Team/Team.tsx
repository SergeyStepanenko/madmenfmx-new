import * as React from 'react'
import { debounce } from 'lodash-es'
// @ts-ignore
import { Swipeable } from 'react-swipeable'
import styled from 'src/styled-components'
import Item from './Item'
import * as S from 'src/styles'
import ScreenService from 'src/services/ScreenService'
import { width, padding } from './constants'

import ArrowCarousel from 'src/assets/svgr/ArrowCarousel'

import alexImage from 'src/assets/team_alex.png'
import dimiImage from 'src/assets/team_dimi.png'
import frankImage from 'src/assets/team_frank.png'
import gerritImage from 'src/assets/team_gerrit.png'
import jamesImage from 'src/assets/team_james.png'

const items = [
  {
    image: frankImage,
    title: 'Dr. Frank Noppel',
    description: 'Co-Founder, CEO',
    link: 'http://linkedin.com/in/franknoppel',
    infoNode: (
      <React.Fragment>
        <li>
          <b>Founder</b> of private jet air taxi company
        </li>
        <li>
          2 PhDs in <b>aircraft propulsion</b>
        </li>
        <li>
          <b>Inventor</b> of 3 patents
        </li>
        <li>
          <b>Researcher</b> for green aircraft propulsion technology,{' '}
          <b>Rolls Royce</b>
        </li>
        <li>
          Developed <b>control system</b> of spacecraft prototype, EADS Astrium{' '}
          <b>(Airbus)</b>
        </li>
      </React.Fragment>
    )
  },
  {
    image: gerritImage,
    title: 'Dr. Gerrit Becker',
    description: 'Co-Founder, Head of Technical Development',
    link: 'http://linkedin.com/in/dr-gerrit-becker-33619757',
    infoNode: (
      <React.Fragment>
        <li>
          Designed <b>autonomous road vehicle</b> for USA Pentagon
        </li>
        <li>
          Worked on <b>NASA</b> project
        </li>
        <li>
          Expert on <b>light-weight structures</b>
        </li>
        <li>
          <b>PhD</b> in Mechanical Engineering
        </li>
      </React.Fragment>
    )
  },
  {
    image: alexImage,
    title: 'Alexander Xydas',
    description: 'Co-Founder, Head of Business Development',
    link: 'http://linkedin.com/in/alexanderxydas',
    infoNode: (
      <React.Fragment>
        <li>
          <b>Serial entrepreneur</b>, co-founded 2 hardware start-ups
        </li>
        <li>
          Growth strategy for <b>Google</b>, <b>IBM</b> and{' '}
          <b>McKinsey Digital</b>
        </li>
        <li>
          <b>MBA</b> from Kellogg School of Management
        </li>
      </React.Fragment>
    )
  },
  {
    image: jamesImage,
    title: 'James McClearen',
    description: 'Head of R&D',
    link: 'http://linkedin.com/in/jamesmcclearen',
    infoNode: (
      <React.Fragment>
        <li>
          Mass production at <b>Toyota</b> in Japan
        </li>
        <li>
          Cutting edge <b>military vehicle designs</b>
        </li>
        <li>
          <b>15-year track record</b> of leading and inspiring teams
        </li>
        <li>
          <b>Inventor</b> of the first proven blast propagation mapping sensor
          tech
        </li>
      </React.Fragment>
    )
  },
  {
    image: dimiImage,
    title: 'Dr. Dimitris Xydas',
    description: 'Software & Control Systems',
    link: 'http://linkedin.com/in/dimitrisxydas/',
    infoNode: (
      <React.Fragment>
        <li>
          <b>Lead engineer</b> for <b>robotic remote-handling systems</b> for
          operation within nuclear environment
        </li>
        <li>
          Developed sign-language recognition gloves using{' '}
          <b>neural networks</b>
        </li>
        <li>
          Built multi-jointed <b>robotic manipulators</b> and walkers
        </li>
        <li>
          <b>PhD</b> in <b>Cybernetics</b>
        </li>
      </React.Fragment>
    )
  }
]

const TeamSection = styled.section`
  padding-top: 76px;
  padding-right: 12px;
  padding-left: 12px;
  background-color: #f1f5f7;
  padding-top: 70px;
  padding-bottom: 92px;

  @media (max-width: 990px) {
    padding-top: 42px;
  }
`

const TeamTitle = styled(S.Title)``

const Description = styled(S.Subtitle)``

const DesWrapper = styled.div`
  max-width: 760px;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: 860px) {
    max-width: 630px;
  }

  @media (max-width: 750px) {
    max-width: 630px;
  }
`

const Info = styled.div`
  margin-top: 45px;
  font-family: Open Sans;
  font-size: 16px;
  line-height: 24px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
  line-height: 32px;
  text-align: center;

  @media (max-width: 970px) {
    max-width: 640px;
  }
`

const Container: any = styled.div`
  width: ${(props: any) => props.containerWidth}px;
  overflow: hidden;
`

const Block: any = styled.div<{ shift: number }>`
  width: ${(props: any) => props.blockWidth}px;
  margin-left: auto;
  margin-right: auto;
  transform: ${(props) => `translateX(${-props.shift}px)`};
  transition: transform 0.3s ease-in-out;
  touch-action: none;
`

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`

const Button = styled(S.Button)`
  padding: 34px;

  @media (max-width: 475px) {
    display: none;
  }
`

const PointsContainer = styled(S.PointsContainer)`
  @media (min-width: 475px) {
    display: none;
  }
`

const ArrowLeftButton = styled(Button)`
  svg {
    transform: rotate(180deg);
  }
`

const ArrowRightButton = styled(Button)``

export default class Team extends React.Component<any> {
  state = {
    block: 0,
    blocksOnScreen: this.blocksOnScreen,
    windowWidth: window.innerWidth
  }

  componentDidMount() {
    this.listenResize()
  }

  listenResize() {
    // @ts-ignore
    ScreenService.onResize(this.onResize)
  }

  onResize = debounce(({ windowWidth }) => {
    if (this.state.windowWidth === windowWidth) {
      return
    }

    this.setState({
      blocksOnScreen: this.blocksOnScreen,
      block: 0,
      windowWidth
    })
  }, 20)

  get blocksOnScreen() {
    const width = window.innerWidth

    if (width > 1320) {
      return 4
    }

    if (width <= 1320 && width > 1045) {
      return 3
    }

    if (width < 1045 && width > 765) {
      return 2
    }

    return 1
  }

  get blockWidth() {
    return items.length * (width + padding * 2)
  }

  get containerWidth() {
    return this.blocksOnScreen * (width + padding * 2)
  }

  get shift() {
    const { block } = this.state

    return block * (width + padding * 2)
  }

  get leftArrowColor() {
    return this.isLeftArrowActive ? '#000' : '#aaacad'
  }

  get rightArrowColor() {
    return this.isRightArrowActive ? '#000' : '#aaacad'
  }

  get isLeftArrowActive() {
    const { block } = this.state

    return block !== 0
  }

  get isRightArrowActive() {
    return this.isCanMoveToLeft
  }

  get isCanMoveToLeft() {
    const { block } = this.state

    return block + this.blocksOnScreen < items.length
  }

  render() {
    const { id, isTablet } = this.props
    const { block } = this.state

    return (
      <TeamSection id={id}>
        <TeamTitle>Team</TeamTitle>
        <DesWrapper>
          <Description>
            We&nbsp;are a&nbsp;world-class team of entrepreneurs, engineers,
            aviation and business experts
          </Description>
        </DesWrapper>
        <Info>
          &Omicron;ur multi-disciplinary team of&nbsp;passionate entrepreneurs
          and aviation experts has come together to&nbsp;develop and
          commercialize technology that will revolutionize the transportation
          of&nbsp;cargo. Collectively our team has research and work experience
          with leading academic institutions and technology and business
          corporations including NASA, Airbus, Google, BMW, IBM, McKinsey
          &amp;&nbsp;Co., Georgia Tech and Stanford in&nbsp;the USA, Europe and
          the Middle East.
        </Info>
        <Carousel>
          <ArrowLeftButton
            isActive={this.isLeftArrowActive}
            onClick={this.handleLeftArrowClick}
          >
            <ArrowCarousel fill={this.leftArrowColor} />
          </ArrowLeftButton>
          <Swipeable
            onSwipedLeft={this.handleSwipeLeft}
            onSwipedRight={this.handleSwipeRight}
            preventDefaultTouchmoveEvent
          >
            <Container containerWidth={this.containerWidth}>
              <Block shift={this.shift} blockWidth={this.blockWidth}>
                {items.map((item: any, index) => (
                  <Item
                    key={item.title}
                    index={index}
                    isTablet={isTablet}
                    {...item}
                  />
                ))}
              </Block>
            </Container>
          </Swipeable>
          <ArrowRightButton
            isActive={this.isRightArrowActive}
            onClick={this.handleRightArrowClick}
          >
            <ArrowCarousel fill={this.rightArrowColor} />
          </ArrowRightButton>
        </Carousel>
        <PointsContainer>
          {items.map((_, index) => (
            <S.Point
              key={index}
              isActive={block === index}
              onClick={() => this.handlePointClick(index)}
            />
          ))}
        </PointsContainer>
      </TeamSection>
    )
  }

  handleSwipeLeft = (event: any) => {
    this.handleRightArrowClick()
  }
  handleSwipeRight = (event: any) => {
    this.handleLeftArrowClick()
  }

  handlePointClick = (index: any) => {
    this.setState({ block: index })
  }

  handleLeftArrowClick = () => {
    const { block } = this.state

    const isCanMove = block > 0

    if (!isCanMove) {
      return
    }

    this.setState({ block: block - 1 })
  }

  handleRightArrowClick = () => {
    const { block } = this.state
    const isCanMove = block + this.blocksOnScreen < items.length

    if (!isCanMove) {
      return
    }

    this.setState({ block: block + 1 })
  }
}
