import * as React from 'react'
import { debounce } from 'lodash-es'
import styled from 'src/styled-components'
import * as S from 'src/styles'
import ScreenService from 'src/services/ScreenService'

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
    link: 'http://linkedin.com/in/franknoppel'
  },
  {
    image: gerritImage,
    title: 'Dr. Gerrit Becker',
    description: 'Co-Founder, Head of Technical Development',
    link: 'http://linkedin.com/in/dr-gerrit-becker-33619757'
  },
  {
    image: alexImage,
    title: 'Alexander Xydas',
    description: 'Co-Founder, Head of Business Development',
    link: 'http://linkedin.com/in/alexanderxydas'
  },
  {
    image: jamesImage,
    title: 'James McClearen',
    description: 'Head of R&D',
    link: 'www.linkedin.com/in/jamesmcclearen/'
  },
  {
    image: dimiImage,
    title: 'Dr. Dimitris Xydas',
    description: 'Software & Control Systems',
    link: 'www.linkedin.com/in/dimitrisxydas/'
  }
]

const width = 250
const padding = 16

const TeamSection = styled.section`
  margin-top: 76px;
  padding-right: 12px;
  padding-left: 12px;
  background-color: #f1f5f7;
  padding-top: 70px;
  padding-bottom: 92px;
`

const TeamTitle = styled(S.Title)``

const Description = styled(S.Subtitle)``

const DesWrapper = styled.div`
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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
`

const ItemInner: any = styled.div`
  width: ${width}px;
  height: 270px;
  background-color: #fff;
  text-align: center;
  flex-flow: column;
  padding-top: 28px;
  border-radius: 6px;
`

const ItemWrapper: any = styled.a`
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  text-decoration: none;
  color: black;
  border-radius: 6px;
  padding: ${padding}px;
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
`

const ItemImage = styled.img`
  width: 126px;
  height: 126px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const ItemTitle = styled.p`
  margin-top: 20px;
  font-family: Open Sans Bold;
`

const ItemDescription = styled.p`
  margin-top: 12px;
  color: #00a3f2;
  font-size: 12px;
  font-family: Open Sans Bold;
  line-height: 14px;
`

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`

const Button = styled(S.Button)`
  padding: 34px;
`

const ArrowLeftButton = styled(Button)`
  svg {
    transform: rotate(180deg);
  }
`

const ArrowRightButton = styled(Button)``

function Item({ image, title, description, link, index }: any) {
  return (
    <ItemWrapper href={link} target="_black" index={index}>
      <ItemInner>
        <ItemImage src={image} />
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemInner>
    </ItemWrapper>
  )
}

export default class Team extends React.Component<any> {
  state = {
    block: 0,
    blocksOnScreen: this.blocksOnScreen
  }

  componentDidMount() {
    this.listenResize()
  }

  listenResize() {
    // @ts-ignore
    ScreenService.onResize(this.onResize)
  }

  onResize = debounce(() => {
    this.setState({
      blocksOnScreen: this.blocksOnScreen
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

    return 2
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
    return (
      <TeamSection>
        <TeamTitle>Team</TeamTitle>
        <DesWrapper>
          <div>
            <Description>
              We are a world-class team of entrepreneurs,
            </Description>
          </div>
          <div>
            <Description>engineers, aviation and business experts</Description>
          </div>
        </DesWrapper>
        <Info>
          Οur multi-disciplinary team of passionate entrepreneurs and aviation
          experts has come together to develop and commercialize technology that
          will revolutionize the transportation of cargo. Collectively our team
          has research and work experience with leading academic institutions
          and technology and business corporations including NASA, Airbus,
          Google, BMW, IBM, McKinsey & Co., Georgia Tech and Stanford in the
          USA, Europe and the Middle East.
        </Info>
        <Carousel>
          <ArrowLeftButton
            isActive={this.isLeftArrowActive}
            onClick={this.handleLeftArrowClick}
          >
            <ArrowCarousel fill={this.leftArrowColor} />
          </ArrowLeftButton>
          <Container containerWidth={this.containerWidth}>
            <Block shift={this.shift} blockWidth={this.blockWidth}>
              {items.map(({ image, title, description, link }: any, index) => (
                <Item
                  key={title}
                  index={index}
                  image={image}
                  title={title}
                  description={description}
                  link={link}
                />
              ))}
            </Block>
          </Container>
          <ArrowRightButton
            isActive={this.isRightArrowActive}
            onClick={this.handleRightArrowClick}
          >
            <ArrowCarousel fill={this.rightArrowColor} />
          </ArrowRightButton>
        </Carousel>
      </TeamSection>
    )
  }

  handleLeftArrowClick = () => {
    const { block } = this.state

    const isCanMove = block > 0

    if (!isCanMove) {
      return
    }

    let nextBlock

    if (block <= this.blocksOnScreen) {
      nextBlock = 0
    } else if (block > this.blocksOnScreen) {
      nextBlock = block - this.blocksOnScreen
    }

    this.setState({ block: nextBlock })
  }

  handleRightArrowClick = () => {
    const { block } = this.state
    const isCanMove = block + this.blocksOnScreen < items.length

    if (!isCanMove) {
      return
    }

    let nextBlock = block + this.blocksOnScreen
    const isEdgeCase = nextBlock + this.blocksOnScreen >= items.length

    if (isEdgeCase) {
      const space = items.length % 2

      nextBlock = nextBlock - (this.blocksOnScreen - space)
    }

    this.setState({ block: nextBlock })
  }
}
