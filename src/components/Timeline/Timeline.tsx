import * as React from 'react'
import styled from 'src/styled-components'
import * as S from 'src/styles'
import timelineImage from 'src/assets/timeline.svg'

const TimelineSection = styled.section`
  margin-top: 76px;
  padding-right: 12px;
  padding-left: 12px;
`

const TimelineTitle = styled(S.Title)``

const Description = styled(S.Subtitle)``

const DesWrapper = styled.div`
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
const Block = styled.div`
  width: 877px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  background-image: url(${timelineImage});
  background-repeat: no-repeat;
  background-position-y: 70px;
  background-size: 855px;
`

const ItemInner = styled.div`
  width: 179px;
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
`

function Item({ year, title, description }: any) {
  return (
    <ItemInner>
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
  const { id } = props

  return (
    <TimelineSection id={id}>
      <TimelineTitle>Timeline</TimelineTitle>
      <DesWrapper>
        <Description>Fully operational within 3 years</Description>
      </DesWrapper>
      <Block>
        {items.map(({ year, title, description }: any) => (
          <Item
            key={title}
            year={year}
            title={title}
            description={description}
          />
        ))}
      </Block>
    </TimelineSection>
  )
}
