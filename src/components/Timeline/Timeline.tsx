import * as React from 'react'
import styled, { css } from 'src/styled-components'
import * as S from 'src/styles'
import timelineImage from 'src/assets/timeline.svg'
import timelineMobileImage from 'src/assets/timeline_mobile.svg'

const TimelineSection = styled.section`
  padding-top: 76px;
  padding-right: 12px;
  padding-left: 12px;
  padding-bottom: 140px;

  @media (max-width: 990px) {
    padding-top: 42px;
    padding-bottom: 82px;
  }
`

const TimelineTitle = styled(S.Title)``

const Description = styled(S.Subtitle)``

const DesWrapper = styled.div`
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Block: any = styled.div`
  width: 877px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  background-repeat: no-repeat;
  background-position-y: 70px;
  background-size: 855px;
  background-image: url(${timelineImage});

  @media (min-width: 991px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 990px) {
    position: relative;
    width: 260px;
    height: 727px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    position: relative;
    background-image: none;
    padding-top: 10px;
  }
`

const TimelineMobileImage = styled.img`
  width: 26px;
  position: absolute;
  top: 6px;
  left: 0px;
  height: 727px;
`

const ItemInner: any = styled.div`
  width: 179px;

  @media (max-width: 990px) {
    height: 120px;
    width: 230px;

    margin-top: ${(props: any) => {
      switch (props.index) {
        case 1:
          return 13
        case 2:
          return 47
        case 3:
          return 26
        case 4:
          return 22
      }

      return 0
    }}px;
  }
`

const Year = styled.div`
  color: #d0dce1;
  font-family: Avenir Next Bold;
  font-size: 18px;
`

const Title = styled.div`
  margin-top: 10px;
  font-family: Open Sans Bold;
  font-size: 16px;
  white-space: nowrap;
`

const Info = styled.div`
  margin-top: 75px;
  font-family: Open Sans;
  font-size: 16px;
  line-height: 24px;
  padding-right: 30px;

  @media (max-width: 990px) {
    margin-top: 16px;
    padding-right: 0;
  }
`

function Item({ year, title, description, index }: any) {
  return (
    <ItemInner index={index}>
      <Year>{year}</Year>
      <Title>{title}</Title>
      <Info>{description}</Info>
    </ItemInner>
  )
}

const items = [
  {
    year: 2017,
    title: 'Idea born',
    description: 'Co-founders had the initial idea behind the design'
  },
  {
    year: 2018,
    title: 'Maiden flight',
    description:
      'Flugauto is founded and the first prototype proves the concept'
  },
  {
    year: 2019,
    title: 'Real-life pilots',
    description: 'First experimental pilots in real-life conditions'
  },
  {
    year: 2020,
    title: 'Production-ready',
    description: 'Full-size Flugauto production at scale begins'
  },
  {
    year: 2021,
    title: 'Commercial applications',
    description:
      'Global commercial applications. A new way of moving cargo is available'
  }
]

export default function Timeline(props: any) {
  const { id, isTablet } = props

  return (
    <TimelineSection id={id}>
      <TimelineTitle>Timeline</TimelineTitle>
      <DesWrapper>
        <Description>Fully operational within 3 years</Description>
      </DesWrapper>
      <Block isTablet={isTablet}>
        {items.map(({ year, title, description }: any, index) => (
          <Item
            key={title}
            index={index}
            year={year}
            title={title}
            description={description}
          />
        ))}
        {isTablet && <TimelineMobileImage src={timelineMobileImage} />}
      </Block>
    </TimelineSection>
  )
}
