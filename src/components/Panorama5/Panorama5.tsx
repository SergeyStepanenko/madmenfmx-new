import * as React from 'react'
import { browserHistory } from 'react-router'
// @ts-ignore
import { Pannellum, PannellumVideo } from 'pannellum-react'

import panorama from 'src/assets/5panorama.png'

export default function Panorama5() {
  const handleGoToPanorama4 = () => {
    browserHistory.push('/4')
  }

  return (
    <Pannellum
      width="100%"
      height="100vh"
      image={panorama}
      pitch={-10}
      yaw={20}
      hfov={110}
      autoLoad
      onLoad={() => {
        console.log('panorama loaded')
      }}
    >
      <Pannellum.Hotspot
        cssClass="ololololo"
        type="custom"
        pitch={-5}
        yaw={68}
        handleClick={handleGoToPanorama4}
        name="hs1"
      />
    </Pannellum>
  )
}
