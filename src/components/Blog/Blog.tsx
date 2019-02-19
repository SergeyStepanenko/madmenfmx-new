import * as React from 'react'
import styled from 'src/styled-components'
import * as S from 'src/styles'

const Title = styled(S.Title)``

const Container: any = styled.div`
  background-color: #f2f7f8;
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
    margin-top: 32px;
    margin-bottom: 24px;
  }

  article {
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

  #blog {
    & > * + * {
      margin-top: 30px;
    }
  }
`

export default class Blog extends React.Component<any> {
  blogNode = null

  componentDidMount() {
    this.appendBlogNode()
  }

  appendBlogNode() {
    // @ts-ignore
    this.blogNode = document.getElementById('blog')
    // @ts-ignore
    this.listRef.current.appendChild(this.blogNode)
  }

  listRef = React.createRef()

  render() {
    const { renderMenu } = this.props

    return (
      <Container>
        {renderMenu()}
        <List ref={this.listRef}>
          <Title>News</Title>
        </List>
      </Container>
    )
  }
}
