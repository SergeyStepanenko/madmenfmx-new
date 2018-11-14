import styled from 'src/styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* font-family: ${(props) => props.theme.fontFamily.main};
  font-size: 60px; */
  background-image: url(http://madfmx.ru/images/big/1.jpg);
  background-size: 1366px;
  background-position: center top;
  background-repeat: no-repeat;
  animation: slide-up 5s ease forwards;
  background-color: black;

  @keyframes slide-up {
    0% {
      background-position-y: -600px;
    }

    100% {
      background-position-y: -50;
    }
  }
`

export const Mad = styled.span`
  color: ${(props) => props.theme.colors.main};
`
