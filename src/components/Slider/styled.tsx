import styled from 'src/styled-components'

export const Container = styled.div`
  position: relative;
  height: 400px;
`

export const Block: any = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props: any) => (props.isActive ? 1 : 0)};
  transition: opacity 0.8s ease;
`
