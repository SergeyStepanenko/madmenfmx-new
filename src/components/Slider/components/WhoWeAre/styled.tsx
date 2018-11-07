import styled from 'src/styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.main};
  font-size: 60px;
`
