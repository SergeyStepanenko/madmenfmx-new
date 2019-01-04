import * as React from 'react'
import { browserHistory } from 'react-router'

import styled from 'src/styled-components'
import Image from 'src/assets/firstImage.jpg'

const ImageContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
`

const Pointer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 468px;
  left: 407px;
  background-color: yellow;
  border-radius: 50%;
  cursor: pointer;
`

export default React.memo(function Entry() {
  const handleClick = () => {
    browserHistory.push('/3')
  }

  return (
    <ImageContainer>
      <Pointer onClick={handleClick} />
    </ImageContainer>
  )
})
