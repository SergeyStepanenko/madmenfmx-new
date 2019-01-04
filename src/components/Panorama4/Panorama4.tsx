import * as React from 'react'
import { browserHistory } from 'react-router'
// @ts-ignore
import { Pannellum, PannellumVideo } from 'pannellum-react'

import panorama from 'src/assets/4panorama.png'

export default function Panorama4() {
  const handleGoToPanorama3 = () => {
    browserHistory.push('/3')
  }
  const handleGoToPanorama5 = () => {
    browserHistory.push('/5')
  }

  return (
    <Pannellum
      width="100%"
      height="100vh"
      image={panorama}
      pitch={0}
      yaw={335}
      hfov={110}
      autoLoad
      onLoad={() => {
        console.log('panorama loaded')
      }}
    >
      <Pannellum.Hotspot
        cssClass="ololololo"
        type="custom"
        pitch={0}
        yaw={120}
        handleClick={handleGoToPanorama3}
        name="hs1"
      />
      <Pannellum.Hotspot
        cssClass="ololololo"
        type="custom"
        pitch={10}
        yaw={285}
        handleClick={handleGoToPanorama5}
        name="hs1"
      />
    </Pannellum>
  )
}
