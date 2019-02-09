import * as React from 'react'
import styled from 'src/styled-components'

import ArrowSmall from 'src/assets/svgr/ArrowSmall'

const Item: any = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: ${(props: any) => props.width}px;
  height: 266px;
  padding: 41px 35px;
  box-sizing: border-box;
`

const Date = styled.p`
  font-size: 14px;
`

const Title = styled.p`
  margin-top: 14px;
  font-size: 24px;
`

const Description = styled.p`
  margin-top: 28px;
  font-size: 14px;
`

const Block = styled.div``

const ReadMoreButton = styled.button`
  display: flex;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
  color: #00a4f3;
  text-transform: uppercase;
  outline: none;
  border: 0;
  background-color: transparent;
`

export default React.memo(function CarouselItem(props: any) {
  const { dateText, titleText, descriptionText, width } = props

  return (
    <Item width={width}>
      <Block>
        <Date>{dateText}</Date>
        <Title>{titleText}</Title>
        <Description>{descriptionText}</Description>
      </Block>
      <ReadMoreButton>
        Read more <ArrowSmall />
      </ReadMoreButton>
    </Item>
  )
})
