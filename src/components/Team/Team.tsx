import * as React from 'react'
import styled from 'src/styled-components'
import * as S from 'src/styles'

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

const Block: any = styled.div`
  width: ${(props: any) => props.blockWidth}px;
  margin-left: auto;
  margin-right: auto;
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

const ArrowLeftButton = styled(S.Button)`
  svg {
    transform: rotate(180deg);
  }
`

const ArrowRightButton = styled(S.Button)``

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
  // const { isTablet } = this.props

  get blocksOnScreen() {
    return 4
  }

  get blockWidth() {
    return items.length * (width + padding * 2)
  }

  get containerWidth() {
    return this.blocksOnScreen * (width + padding * 2)
  }

  get leftArrowColor() {
    return '#aaacad'
  }

  get rightArrowColor() {
    return '#aaacad'
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
          // isActive={slide > 1}
          // onClick={this.handleLeftArrowClick}
          >
            <ArrowCarousel fill={this.leftArrowColor} />
          </ArrowLeftButton>
          <Container containerWidth={this.containerWidth}>
            <Block blockWidth={this.blockWidth}>
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
          <ArrowRightButton>
            <ArrowCarousel fill={this.leftArrowColor} />
          </ArrowRightButton>
        </Carousel>
      </TeamSection>
    )
  }
}
