import * as React from 'react'
import styled from 'src/styled-components'

import ArrowSmall from 'src/assets/svgr/ArrowSmall'

const height = 266

const Item: any = styled.div`
  width: ${(props: any) => props.width}px;
  min-height: ${height}px;
  height: ${(props: any) => (props.isVisible ? 'auto' : '0px')};
  padding: 41px 35px;
  box-sizing: border-box;
  overflow: hidden;
`

const Date: any = styled.time`
  font-size: 14px;
  font-family: Open Sans;
`

const Title = styled.p`
  margin-top: 14px;
  font-size: 24px;
  font-family: Avenir Next Bold;
  color: #2b2b2b;
  line-height: 33px;
`

const Description: any = styled.div`
  font-size: 14px;
  font-family: Open Sans;
  line-height: 24px;
  height: ${(props: any) => (props.isExtended ? 'auto' : '90px')};
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  p {
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`

const Header = styled.header``

const ReadMoreText = styled.span``

const ReadMoreButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 0;
  padding-right: 0;
  color: #00a4f3;
  text-transform: uppercase;
  outline: none;
  border: 0;
  background-color: transparent;
  font-family: Avenir Black;
  font-size: 13px;
  cursor: pointer;

  svg {
    position: relative;
    top: -1px;
    left: 4px;
  }
`

export default class CarouselItem extends React.Component<any> {
  componentDidMount() {
    this.appendNode()
  }

  get isVisible() {
    const { index, currentSlide } = this.props

    return index + 1 === currentSlide
  }

  appendNode() {
    const { descriptionNode } = this.props

    if (!descriptionNode) {
      return
    }

    // @ts-ignore
    this.descriptionRef.current.appendChild(descriptionNode)
  }

  descriptionRef = React.createRef()

  render() {
    const {
      index,
      dateText,
      dateTime,
      titleText,
      width,
      isExtended
    } = this.props

    return (
      <Item width={width} isVisible={this.isVisible}>
        <Header>
          <Date dateTime={dateTime}>{dateText}</Date>
          <Title>{titleText}</Title>
        </Header>
        <Description ref={this.descriptionRef} isExtended={isExtended} />
        <ReadMoreButton
          onClick={() => this.handleToggleReadMoreClick(index, isExtended)}
        >
          <ReadMoreText>{isExtended ? 'Read less' : 'Read more'}</ReadMoreText>
          <ArrowSmall />
        </ReadMoreButton>
      </Item>
    )
  }

  handleToggleReadMoreClick = (index: number, isExtended: boolean) => {
    const { onReadMoreLessClick } = this.props

    onReadMoreLessClick(index, isExtended)
  }
}
