import * as React from 'react'
import { debounce } from 'lodash-es'
import styled from 'src/styled-components'
import CarouselItem from 'src/components/CarouselItem'
import ArrowCarousel from 'src/assets/svgr/ArrowCarousel'
import ScreenService from 'src/services/ScreenService'

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
  width: 778px;
  overflow: hidden;
`

const Button = styled.button`
  width: 200px;
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: ${(props: any) => (props.isActive ? 'pointer' : 'default')};
`

const ArrowRightButton: any = styled(Button)``

const ArrowLeftButton: any = styled(Button)`
  svg {
    transform: rotate(180deg);
  }
`

export default class Carousel extends React.Component {
  state = {
    slide: 1,
    containerWidth: 0
  }

  items = [
    {
      dateText: 'Jan 1, 2019',
      titleText: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
      descriptionText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
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
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
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
    const { slide, containerWidth } = this.state

    return (
      <Container onResize={this.handleResize}>
        <ArrowLeftButton
          isActive={slide > 1}
          onClick={this.handleLeftArrowClick}
        >
          <ArrowCarousel fill={this.leftArrowColor} />
        </ArrowLeftButton>
        <ListWrapper ref={this.listWrapperRef}>
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
        <ArrowRightButton
          isActive={slide < this.items.length}
          onClick={this.handleRightArrowClick}
        >
          <ArrowCarousel fill={this.rightArrowColor} />
        </ArrowRightButton>
      </Container>
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
}
