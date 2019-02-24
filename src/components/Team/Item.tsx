import * as React from 'react'
import styled, { css } from 'src/styled-components'
import linkedInIcon from 'src/assets/linkedin.svg'

import { width, padding } from './constants'

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;

  a {
    margin-left: 14px;
  }
`

const ItemInner: any = styled.div`
  position: relative;
  width: ${width}px;
  height: 270px;
  background-color: #fff;
  text-align: center;
  flex-flow: column;
  padding-top: 28px;
  border-radius: 6px;
`

const ItemImage = styled.img`
  width: 126px;
  height: 126px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const ItemDescription = styled.p`
  margin-top: 12px;
  color: #00a3f2;
  font-size: 12px;
  font-family: Open Sans Bold;
  line-height: 14px;
`

const ItemTitle = styled.p`
  margin-top: 20px;
  font-family: Open Sans Bold;
`

const VisibleBlock = styled.div`
  position: relative;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`

const HiddenBlock = styled.div`
  position: absolute;
  top: 22px;
  left: 0;
  padding: 0 10px;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${ItemTitle} {
    margin-top: 0;
  }

  ul {
    margin-top: 11px;
    padding: 0 19px;
    list-style: none;
    text-align: left;

    & > * + * {
      margin-top: 7px;
    }
  }

  li {
    font-size: 14px;
    line-height: 16px;

    b {
      color: #00a1e9;
      font-weight: bold;
      font-size: inherit;
    }

    &:before {
      content: '\\2022';
      color: #00a1e9;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`

const styles = css`
  ${VisibleBlock} {
    z-index: 0;
    opacity: 0;
  }

  ${HiddenBlock} {
    z-index: 1;
    opacity: 1;
  }
`

const ItemWrapper: any = styled.div`
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  color: black;
  border-radius: 6px;
  padding: ${padding}px;
  outline: none;

  ${({ isTablet, isClicked }: any) => {
    if (isTablet) {
      return (
        isClicked &&
        css`
          ${styles}
        `
      )
    }

    return css`
      &:hover {
        ${styles}
      }
    `
  }}
`

export default class Item extends React.Component<any, any> {
  state = {
    isClicked: false
  }

  render() {
    const {
      image,
      title,
      description,
      link,
      index,
      infoNode,
      isTablet
    } = this.props
    const { isClicked } = this.state

    const itemTitle = <ItemTitle>{title}</ItemTitle>

    return (
      <ItemWrapper
        index={index}
        isClicked={isClicked}
        isTablet={isTablet}
        onClick={this.handleVisibility}
      >
        <ItemInner>
          <VisibleBlock>
            <ItemImage src={image} />
            {itemTitle}
            <ItemDescription>{description}</ItemDescription>
          </VisibleBlock>
          <HiddenBlock>
            <TitleBlock>
              {itemTitle}
              <a href={link} target="_black">
                <img src={linkedInIcon} width="20px" alt="linkedin" />
              </a>
            </TitleBlock>
            <ul>{infoNode}</ul>
          </HiddenBlock>
        </ItemInner>
      </ItemWrapper>
    )
  }

  handleVisibility = () => {
    const { isTablet } = this.props

    if (!isTablet) {
      return
    }

    this.setState((prevState: any) => ({
      isClicked: !prevState.isClicked
    }))
  }
}
