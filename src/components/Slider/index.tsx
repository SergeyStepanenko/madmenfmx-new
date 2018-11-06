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

@observer
export default class Slider extends React.Component<any> {
  @observable
  index: number = 0

  @action('handleShowNextSlide')
  handleShowNextSlide = () => {
    if (this.index === 2) {
      this.index = 0

      return
    }

    this.index = this.index + 1
  }

  @action('handleShowPreviousSlide')
  handleShowPreviousSlide = () => {
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
        <button onClick={this.handleShowPreviousSlide}>Пред</button>
        <button onClick={this.handleShowNextSlide}>След</button>
      </div>
    )
  }
}
