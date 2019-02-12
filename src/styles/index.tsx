import styled from 'src/styled-components'

export const UnderlinedText = styled.p`
  display: inline;
  border-bottom: 4px solid #00a8f3;
  line-height: 56px;
  font-family: Avenir Next Bold;
`

export const Title = styled.h3`
  font-size: 55px;
  font-family: Avenir Next Bold;
  color: #000;
  text-align: center;
`

export const Subtitle = styled(UnderlinedText)`
  font-size: 35px;
`

export const Button: any = styled.button`
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: ${(props: any) => (props.isActive ? 'pointer' : 'default')};
`
