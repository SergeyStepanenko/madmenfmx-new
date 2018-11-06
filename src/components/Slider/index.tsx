import * as React from 'react'
import styled from 'styled-components'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

const Container = styled.div`
  position: relative;
  height: 400px;
`

const Block: any = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props: any) => (props.isActive ? 2 : 1)};
  opacity: ${(props: any) => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`

interface Item {
  title: string
}

const items: Item[] = [
  { title: 'FirstBlock' },
  { title: 'SecondBlock' },
  { title: 'ThirdBlock' }
]

const SLIDE_CHANGE_INTERVAL = 2000
const PENDING_DELAY = 5000

@observer
export default class Slider extends React.Component {
  @observable
  index: number = 0

  interval: any
  timeout: any

  @observable
  isPending = false

  componentDidMount() {
    this.startAutoSlider()
  }

  @action('startAutoSlider')
  startAutoSlider() {
    this.interval = setInterval(this.showNextSlide, SLIDE_CHANGE_INTERVAL)
  }

  @action('pauseAutoSlider')
  pauseAutoSlider() {
    if (this.isPending) {
      return
    }

    clearTimeout(this.timeout)
    clearInterval(this.interval)

    this.isPending = true

    this.timeout = setTimeout(() => {
      this.isPending = false

      this.startAutoSlider()
    }, PENDING_DELAY)
  }

  @action('showNextSlide')
  showNextSlide = () => {
    if (this.index === 2) {
      this.index = 0

      return
    }

    this.index = this.index + 1
  }

  @action('showPreviousSlide')
  showPreviousSlide() {
    if (this.index === 0) {
      this.index = items.length - 1

      return
    }

    this.index = this.index - 1
  }

  render() {
    return (
      <div>
        <Container>
          {items.map((item, index) => {
            const { title } = item

            return (
              <Block key={title} isActive={this.index === index}>
                {title}
              </Block>
            )
          })}
        </Container>
        <button onClick={this.handleClickPrevious}>Пред</button>
        <button onClick={this.handleClickNext}>След</button>
      </div>
    )
  }

  handleClickPrevious = () => {
    this.showPreviousSlide()
    this.pauseAutoSlider()
  }

  handleClickNext = () => {
    this.showNextSlide()
    this.pauseAutoSlider()
  }
}
