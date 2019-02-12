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
  display: flex;
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

const Point: any = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }: any) =>
    isActive ? '#052554' : '#bad1da'};
`

const PointsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  & > * + * {
    margin-left: 10px;
  }
`

export default class Carousel extends React.Component<any> {
  state = {
    slide: 1,
    containerWidth: 0
  }

  items = [
    {
      dateText: 'Jan 1, 2019',
      titleText: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
      descriptionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna d exercitation ullamco laboris nisi ut aliquip ex'
    },
    {
      dateText: 'Jan 2, 2019',
      titleText: 'Lorem ipsum dolor sit amg',
      descriptionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
    },
    {
      dateText: 'Jan 3, 2019',
      titleText: 'Lorem ipsum dolor sit amet, adipisicing',
      descriptionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing eliostrud exercitation ullamco laboris nisi ut aliquip ex'
    }
  ]

  componentDidMount() {
    this.listenResize()
    this.setContainerWidth()
  }

  get leftArrowColor() {
    return this.state.slide === 1 ? '#aaacad' : null
  }

  get rightArrowColor() {
    return this.state.slide === this.items.length ? '#aaacad' : null
  }

  get containerWidth() {
    return (
      // @ts-ignore
      this.listWrapperRef.current ? this.listWrapperRef.current.clientWidth : 0
    )
  }

  get listWidth() {
    return this.items.length * this.state.containerWidth
  }

  get shift() {
    const { slide, containerWidth } = this.state

    return -((slide - 1) * containerWidth)
  }

  listenResize() {
    // @ts-ignore
    ScreenService.onResize(this.handleResize)
  }

  setContainerWidth() {
    this.setState({
      containerWidth: this.containerWidth
    })
  }

  scrollToLeft() {
    const { slide } = this.state

    if (slide === this.items.length) {
      return
    }

    this.setState((prevState: any) => ({
      slide: prevState.slide + 1
    }))
  }

  scrollToRight() {
    const { slide } = this.state

    if (slide === 1) {
      return
    }

    this.setState((prevState: any) => ({
      slide: prevState.slide - 1
    }))
  }

  listWrapperRef = React.createRef()

  render() {
    const { isTablet, isMobile } = this.props
    const { slide, containerWidth } = this.state

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
              {this.items.map(({ dateText, titleText, descriptionText }) => (
                <CarouselItem
                  key={titleText}
                  dateText={dateText}
                  titleText={titleText}
                  descriptionText={descriptionText}
                  width={containerWidth}
                />
              ))}
            </List>
          </ListWrapper>
          {!isMobile && (
            <ArrowRightButton
              isTablet={isTablet}
              isMobile={isMobile}
              isActive={slide < this.items.length}
              onClick={this.handleRightArrowClick}
            >
              <ArrowCarousel fill={this.rightArrowColor} />
            </ArrowRightButton>
          )}
        </Container>
        {isMobile && (
          <PointsContainer>
            {this.items.map((value, index) => (
              <Point
                key={index}
                isActive={index + 1 === slide}
                onClick={() => this.handlePointClick(index)}
              />
            ))}
          </PointsContainer>
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
}
