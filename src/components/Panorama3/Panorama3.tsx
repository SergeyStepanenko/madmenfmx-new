import * as React from 'react'
import { browserHistory } from 'react-router'
// @ts-ignore
import { Pannellum, PannellumVideo } from 'pannellum-react'

import panorama from 'src/assets/3panorama.png'

export default function Panorama3() {
  const handleGoToStart = () => {
    browserHistory.push('/')
  }
  const handleGoToPanarama4 = () => {
    browserHistory.push('/4')
  }

  return (
    <Pannellum
      width="100%"
      height="100vh"
      image={panorama}
      pitch={0}
      yaw={160}
      hfov={110}
      autoLoad
      onLoad={() => {
        console.log('panorama loaded')
      }}
    >
      <Pannellum.Hotspot
        cssClass="ololololo"
        type="custom"
        pitch={-10}
        yaw={125}
        handleClick={handleGoToPanarama4}
        name="hs1"
      />
      <Pannellum.Hotspot
        cssClass="ololololo"
        type="custom"
        pitch={-10}
        yaw={170}
        handleClick={handleGoToStart}
        name="hs1"
      />
    </Pannellum>
  )
}
