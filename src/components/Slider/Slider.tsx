import * as React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import WhoWeAre from 'src/components/Slider/components/WhoWeAre'
import Shop from 'src/components/Slider/components/Shop'

import * as S from './styled'

const items: React.ReactNode[] = [WhoWeAre, Shop, () => <div>ThirdBlock</div>]

const SLIDE_CHANGE_INTERVAL = 2500
const PENDING_DELAY = 4000
const isAutoSliderOff = true

@observer
export default class Slider extends React.Component {
  @observable
  index: number = 0

  @observable
  isPending: boolean = false

  interval: any
  timeout: any

  componentDidMount() {
    this.startAutoSlider()
  }

  @action('startAutoSlider')
  startAutoSlider() {
    if (isAutoSliderOff) {
      return
    }

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
    if (this.index === items.length - 1) {
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
        <S.Container>
          {items.map((Component: any, index: number) => {
            return (
              <S.Block key={index} isActive={this.index === index}>
                <Component />
              </S.Block>
            )
          })}
        </S.Container>
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
