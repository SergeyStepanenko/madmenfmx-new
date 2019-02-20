import * as React from 'react'
import styled from 'src/styled-components'
import closeImage from 'src/assets/menu_close.svg'
import * as S from 'src/styles'

const Title = styled(S.Title)``

const Container: any = styled.div`
  background-color: #f2f7f8;
  padding-top: 32px;
  padding-bottom: 32px;

  #blog {
    display: block !important;
  }
`

const List: any = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  ${Title} {
    margin-bottom: 24px;
  }

  article {
    margin-left: 16px;
    margin-right: 16px;
    padding: 24px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.03);
  }

  img {
    max-width: 100%;
  }

  h2 {
    margin-top: 16px;
  }

  #container {
    & > * + * {
      margin-top: 30px;
    }
  }
`

const CloseButton = styled.img`
  position: fixed;
  top: 24px;
  right: 24px;
`

export default class Blog extends React.Component<any> {
  blogNode = null

  componentDidMount() {
    this.appendBlogNode()
  }

  appendBlogNode() {
    // @ts-ignore
    this.blogNode = document.getElementById('blog').cloneNode(true)
    // @ts-ignore
    this.listRef.current.appendChild(this.blogNode)
  }

  listRef = React.createRef()

  render() {
    const { onCloseClick } = this.props

    return (
      <Container>
        <CloseButton
          src={closeImage}
          width="24px"
          alt="close"
          onClick={onCloseClick}
        />
        <List ref={this.listRef}>
          <Title>News</Title>
        </List>
      </Container>
    )
  }
}
