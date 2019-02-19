import * as React from 'react'
import { debounce } from 'lodash-es'
import styled, { css } from 'src/styled-components'
import CarouselItem from 'src/components/CarouselItem'
import ArrowCarousel from 'src/assets/svgr/ArrowCarousel'
import ScreenService from 'src/services/ScreenService'
import * as S from 'src/styles'

const Container: any = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`

const List: any = styled.div`
  width: ${(props: any) => props.width}px;
  background-color: #fff;
  transform: ${(props: any) => `translateX(${props.shift}px)`};
  transition: transform 0.3s ease-in-out;
`

const ListWrapper: any = styled.div`
  width: ${({ isTablet }: any) => (isTablet ? '100%' : '778px')};
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 30, 44, 0.05);
`

const ArrowRightButton: any = styled(S.Button)`
  ${({ isTablet, isMobile }: any): any => {
    if (isTablet && !isMobile) {
      return css`
        padding-left: 78px;
        padding-right: 48px;
      `
    }

    if (isMobile && !isTablet) {
      return css`
        padding-left: 30px;
        padding-right: 25px;
      `
    }

    return css`
      padding-left: 120px;
      padding-right: 120px;
    `
  }}
`

const ArrowLeftButton: any = styled(S.Button)`
  svg {
    transform: rotate(180deg);
  }

  ${({ isTablet, isMobile }: any): any => {
    if (isTablet && !isMobile) {
      return css`
        padding-left: 48px;
        padding-right: 78px;
      `
    }

    if (isMobile && !isTablet) {
      return css`
        padding-left: 25px;
        padding-right: 30px;
      `
    }

    return css`
      padding-left: 120px;
      padding-right: 120px;
    `
  }}
`

export default class Carousel extends React.Component<any> {
  state = {
    slide: 1,
    containerWidth: 0,
    items: []
  }

  componentDidMount() {
    this.listenResize()
    this.setItems()
    this.setContainerWidth()
  }

  get leftArrowColor() {
    return this.state.slide === 1 ? '#aaacad' : null
  }

  get rightArrowColor() {
    const { slide, items } = this.state

    return slide === items.length ? '#aaacad' : null
  }

  get containerWidth() {
    return (
      // @ts-ignore
      this.listWrapperRef.current ? this.listWrapperRef.current.clientWidth : 0
    )
  }

  get listWidth() {
    const { items, containerWidth } = this.state

    return items.length * containerWidth
  }

  get shift() {
    const { slide, containerWidth } = this.state

    return -((slide - 1) * containerWidth)
  }

  listenResize() {
    // @ts-ignore
    ScreenService.onResize(this.handleResize)
  }

  setItems() {
    const node = document.getElementById('blog')

    if (!node || !node.children) {
      return
    }

    const { children } = node

    // @ts-ignore
    children.map = [].map

    // @ts-ignore
    const items = children.map((child) => {
      const dateNode = child.querySelector('.date')
      const titleNode = child.querySelector('.title')
      const descriptionNode = child.querySelector('.description')

      return {
        dateText: dateNode ? dateNode.innerText : null,
        dateTime: dateNode ? dateNode.dateTime : null,
        titleText: titleNode ? titleNode.innerText : null,
        descriptionNode: descriptionNode || null,
        isExtended: true,
        height: null
      }
    })

    this.setState({ items })
  }

  setContainerWidth() {
    this.setState({
      containerWidth: this.containerWidth
    })
  }

  scrollToLeft() {
    const { slide, items } = this.state

    if (slide === items.length) {
      return
    }

    this.collapseAllItems()

    this.setState((prevState: any) => ({
      slide: prevState.slide + 1
    }))
  }

  scrollToRight() {
    const { slide } = this.state

    if (slide === 1) {
      return
    }

    this.collapseAllItems()

    this.setState((prevState: any) => ({
      slide: prevState.slide - 1
    }))
  }

  collapseAllItems() {
    const { items } = this.state

    const updatedItems = items.map((item: any) => ({
      ...item,
      isExtended: false
    }))

    this.setState({ items: updatedItems })
  }

  listWrapperRef = React.createRef()

  render() {
    const { isTablet, isMobile } = this.props
    const { items, slide, containerWidth } = this.state

    return (
      <div>
        <Container>
          {!isMobile && (
            <ArrowLeftButton
              isTablet={isTablet}
              isMobile={isMobile}
              isActive={slide > 1}
              onClick={this.handleLeftArrowClick}
            >
              <ArrowCarousel fill={this.leftArrowColor} />
            </ArrowLeftButton>
          )}
          <ListWrapper isTablet={isTablet} ref={this.listWrapperRef}>
            <List width={this.listWidth} shift={this.shift}>
              {items.map((item: any, index) => (
                <CarouselItem
                  key={item.titleText}
                  index={index}
                  currentSlide={slide}
                  width={containerWidth}
                  onItemUpdate={this.handleItemUpdate}
                  {...item}
                />
              ))}
            </List>
          </ListWrapper>
          {!isMobile && (
            <ArrowRightButton
              isTablet={isTablet}
              isMobile={isMobile}
              isActive={slide < items.length}
              onClick={this.handleRightArrowClick}
            >
              <ArrowCarousel fill={this.rightArrowColor} />
            </ArrowRightButton>
          )}
        </Container>
        {isMobile && (
          <S.PointsContainer>
            {items.map((value, index) => (
              <S.Point
                key={index}
                isActive={index + 1 === slide}
                onClick={() => this.handlePointClick(index)}
              />
            ))}
          </S.PointsContainer>
        )}
      </div>
    )
  }

  handleLeftArrowClick = () => {
    this.scrollToRight()
  }

  handleRightArrowClick = () => {
    this.scrollToLeft()
  }

  handleResize = debounce(() => {
    this.setContainerWidth()
  }, 50)

  handlePointClick = (index: any) => {
    this.setState({ slide: index + 1 })
  }

  handleItemUpdate = (index: number, isExtended: boolean) => {
    const { items } = this.state

    const updatedItems = [...items]
    // @ts-ignore
    updatedItems[index].isExtended = isExtended

    this.setState({
      items: updatedItems
    })
  }
}
