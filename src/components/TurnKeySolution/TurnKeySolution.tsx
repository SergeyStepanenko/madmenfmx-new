import * as React from 'react'
import styled, { css } from 'src/styled-components'

import techImage from 'src/assets/tech.svg'
import operationsImage from 'src/assets/operations.svg'
import supportImage from 'src/assets/support.svg'
import tickImage from 'src/assets/icon_tick.png'

import * as S from 'src/styles'

const TurnKeySolutionWrapper: any = styled.section`
  margin-top: ${({ isTablet }: any) => (isTablet ? 168 : 63)}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 990px) {
    margin-top: 42px;
  }
`

const Title: any = styled(S.UnderlinedText)`
  font-size: 35px;

  ${({ isTablet }: any) =>
    isTablet &&
    css`
      line-height: 76px;
    `}
`

const TitleContainer = styled.div`
  text-align: center;
`

const Text = styled.p`
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  font-family: Open Sans;
  max-width: 700px;
  line-height: 31px;
  text-align: center;

  @media (max-width: 990px) {
    padding-right: 12px;
    padding-left: 12px;
  }
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 31px;

  & > div {
    margin: 17px;
  }
`

const ItemInner: any = styled.div`
  ${({ isTablet }: any): any => {
    if (isTablet) {
      return css`
        width: 262px;
      `
    }

    return css`
      width: 340px;
    `
  }}

  height: 350px;
  padding: 0 45px 45px;
  border-radius: 6px;
  background-color: #f1f5f7;
`

const Container = styled.div`
  margin-top: 47px;
`

const Block = styled.div`
  display: flex;
  align-items: center;
`

const FirstBlock = styled(Block)`
  padding-bottom: 14px;
  border-bottom: 1px solid #a8c4ce;
`

const SecondBlock = styled(Block)`
  margin-top: 14px;
`

const Image = styled.img``

const ItemTitle = styled.p`
  font-size: 18px;
  font-family: Avenir Next Bold;
  text-align: center;
  text-transform: uppercase;
`

const ItemText: any = styled.p`
  margin-left: 20px;
  font-size: 16px;
  font-family: Open Sans Bold;
  line-height: 24px;
`

const Item = ({
  image,
  imageWidth,
  titleText,
  firstText,
  secondText,
  isTablet,
  isMobile
}: any) => (
  <ItemInner isTablet={isTablet}>
    <Image src={image} />
    <ItemTitle>{titleText}</ItemTitle>
    <Container>
      <FirstBlock>
        <Image src={tickImage} width="25px" alt="check item" />
        <ItemText isMobile={isMobile} isTablet={isTablet}>
          {firstText}
        </ItemText>
      </FirstBlock>
      <SecondBlock>
        <Image src={tickImage} width="25px" alt="check item" />
        <ItemText isMobile={isMobile} isTablet={isTablet}>
          {secondText}
        </ItemText>
      </SecondBlock>
    </Container>
  </ItemInner>
)

export default function TurnKeySolution(props: any) {
  const { isTablet, isMobile, id } = props

  return (
    <TurnKeySolutionWrapper id={id} isTablet={isTablet}>
      <TitleContainer>
        <Title isTablet={isTablet}>Turn-key solution</Title>
      </TitleContainer>
      <Text>
        For our customers we offer an end-to-end solution, from operating and
        monitoring the fleet of UAVs to the on-the-ground operations and
        delivering to the final destination. <br />
        B2B customers simply book on our platform and sit back until the goods
        are delivered.
      </Text>
      <List>
        <Item
          isTablet={isTablet}
          isMobile={isMobile}
          image={techImage}
          imageWidth="207px"
          titleText="Tech"
          firstText="Hardware & Software"
          secondText="System Integration"
        />
        <Item
          isTablet={isTablet}
          isMobile={isMobile}
          image={operationsImage}
          imageWidth="183px"
          titleText="Operations"
          firstText="Monitor Fleet"
          secondText="On-The-Ground Operations"
        />
        <Item
          isTablet={isTablet}
          image={supportImage}
          imageWidth="151px"
          titleText="Support"
          firstText="Overhaul"
          secondText="Maintenance & Repair"
        />
      </List>
    </TurnKeySolutionWrapper>
  )
}
