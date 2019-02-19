import * as React from 'react'
import styled, { css } from 'src/styled-components'

import ArrowSmall from 'src/assets/svgr/ArrowSmall'

const height = 266

const Item: any = styled.div`
  display: inline-block;
  width: ${(props: any) => props.nodeWidth}px;
  min-height: ${height}px;
  padding: 41px 35px;
  box-sizing: border-box;
  overflow: hidden;
  visibility: ${(props: any) => (props.isLoaded ? 'visible' : 'hidden')};
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
  height: ${(props: any) => props.nodeHeight};
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

const ReadMoreButton: any = styled.button`
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

    ${(props: any) =>
      props.isExtended &&
      css`
        transform: rotate(180deg);
      `}
  }
`

export default class CarouselItem extends React.Component<any> {
  descriptionHeight = null
  collapedHeight = 90

  componentDidMount() {
    this.appendNode()
    this.setHeight()
  }

  get isVisible() {
    const { index, currentSlide } = this.props

    return index + 1 === currentSlide
  }

  get isLoaded() {
    return Boolean(this.descriptionHeight)
  }

  get dynamicItemHeight() {
    const { isExtended } = this.props

    if (!isExtended) {
      return '90px'
    }

    if (this.descriptionHeight) {
      return `${this.descriptionHeight}px`
    }

    return 'auto'
  }

  appendNode() {
    const { descriptionNode } = this.props

    if (!descriptionNode) {
      return
    }

    // @ts-ignore
    this.descriptionRef.current.appendChild(descriptionNode)
  }

  setHeight() {
    const { index, onItemUpdate } = this.props

    setTimeout(() => {
      // @ts-ignore
      this.descriptionHeight = this.descriptionRef.current.clientHeight
      onItemUpdate(index, false)
    }, 1000)
  }

  descriptionRef = React.createRef()
  itemRef = React.createRef()
  buttonWrapperRef = React.createRef()

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
      <Item ref={this.itemRef} nodeWidth={width} isLoaded={this.isLoaded}>
        <Header>
          <Date dateTime={dateTime}>{dateText}</Date>
          <Title>{titleText}</Title>
        </Header>
        <Description
          ref={this.descriptionRef}
          nodeHeight={this.dynamicItemHeight}
          isExtended={isExtended}
        />
        <ReadMoreButton
          onClick={() => this.handleToggleReadMoreClick(index, isExtended)}
          isExtended={isExtended}
        >
          <ReadMoreText>{isExtended ? 'Read less' : 'Read more'}</ReadMoreText>
          <ArrowSmall />
        </ReadMoreButton>
      </Item>
    )
  }

  handleToggleReadMoreClick = (index: number, isExtended: boolean) => {
    const { onItemUpdate } = this.props

    onItemUpdate(index, !isExtended)
  }
}
