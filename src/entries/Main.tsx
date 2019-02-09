import * as React from 'react'
import styled from 'src/styled-components'

import Logo from 'src/assets/svgr/Logo'
import Carousel from 'src/components/Carousel'
import DeliveryItem from 'src/components/Delivery'

import homeImage from 'src/assets/home.jpg'
import missionImage from 'src/assets/mission.jpg'
import emailIcon from 'src/assets/email.svg'
import benefitsImage from 'src/assets/benefits.svg'

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
  display: flex;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 43px;
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
  font-family: Avenir Medium;
`

const EmailIcon = styled.a`
  display: block;
  float: right;
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

const MenuContainer = styled.div``

const News = styled.section`
  padding-top: 52px;
  padding-bottom: 65px;
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

const Mission = styled.section`
  min-height: 673px;
  padding-top: 165px;
  padding-bottom: 165px;
  background-image: url(${missionImage});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
`

const MissionTitle = styled.h3`
  font-size: 55px;
  font-family: Avenir Next Bold;
  color: #fff;
  text-align: center;
`

const UnderlinedText = styled.p`
  display: inline;
  border-bottom: 4px solid #00a8f3;
  line-height: 56px;
  font-family: Avenir Next Bold;
`

const MissionDescription = styled(UnderlinedText)`
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  font-size: 35px;
  color: #fff;
  text-align: center;
`

const MissionDescContainer = styled.div`
  max-width: 600px;
  margin: 40px auto 0;
`

const MissionInfo = styled.p`
  max-width: 654px;
  color: #fff;
  font-family: Open Sans;
  text-align: center;
  margin-top: 54px;
  margin-right: auto;
  margin-left: auto;
  line-height: 31px;
`

const Info = styled.section`
  max-width: 1090px;
  margin: 0 auto;
  padding-top: 146px;
`

const Helicopter = styled.div``

const HeliDescripionBlock = styled.div`
  display: inline-block;
  width: 50%;
  padding-right: 50px;
`

const HeliTitle = styled(UnderlinedText)`
  color: #000;
  font-size: 35px;
`

const HeliDescripion = styled.div`
  margin-top: 40px;
  font-family: Open Sans;
  line-height: 31px;
`

const HeliChartBlock = styled.div`
  display: inline-block;
  width: 50%;
  height: 350px;
  background-image: url(${benefitsImage});
  background-repeat: no-repeat;
`

const DeliveryComparisonBlock = styled.div`
  display: inline-block;
  width: 60%;

  > div {
    display: inline-block;
  }
`

const Delivery = styled.div`
  margin-top: 131px;
`

const DeliveryDescBlock = styled.div`
  display: inline-block;
  width: 40%;
  padding-right: 50px;
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
            <EmailIcon href="mailto:info@flug-auto.com" />
          </MenuContainer>
        </Menu>
        <News>
          <NewsTitle>News</NewsTitle>
          <Carousel />
          <MoreNewsButton>More news</MoreNewsButton>
        </News>
        <Mission>
          <MissionTitle>Mission</MissionTitle>
          <MissionDescContainer>
            <MissionDescription>
              Enabling instant access to goods
            </MissionDescription>
            <MissionDescription>for everyone, everywhere</MissionDescription>
          </MissionDescContainer>
          <MissionInfo>
            We believe the next big thing in logistics is near-instant delivery
            of goods. As an innovative and tech-driven B2B logistics provider,
            we have embarked on a journey to revolutionize how cargo is moved by
            providing air transportation for various applications, and we are
            focused on disrupting the miles before the "last-mile" delivery.
          </MissionInfo>
        </Mission>
        <Info>
          <Helicopter>
            <HeliDescripionBlock>
              <HeliTitle>
                The benefits of a helicopter at the price of a car
              </HeliTitle>
              <HeliDescripion>
                For businesses that want to transport cargo, we are the
                logistics provider of the sky, as we offer them the benefits of
                a helicopter, that is speed and access to remote locations, but
                at the cost of using a conventional car or van. We do this by
                leveraging our proprietary drone technology, capable of carrying
                up to 500lbs, over 150miles.
              </HeliDescripion>
            </HeliDescripionBlock>
            <HeliChartBlock />
          </Helicopter>
          <Delivery>
            <DeliveryComparisonBlock>
              <DeliveryItem />
              <DeliveryItem isAltered />
            </DeliveryComparisonBlock>
            <DeliveryDescBlock>
              <HeliTitle>Deliver anywhere within hours</HeliTitle>
              <HeliDescripion>
                Imagine a world where you could deliver a package anywhere in
                the US in under 3 hrs, even to the most remote town. This is the
                vision we are working towards here at Flugauto.
              </HeliDescripion>
            </DeliveryDescBlock>
          </Delivery>
        </Info>
      </div>
    )
  }
}
