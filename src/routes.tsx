import * as React from 'react'

import Main from 'src/entries/Main'
import Carousel from 'src/components/Carousel'
import TurnKeySolution from 'src/components/TurnKeySolution'
// import Panorama5 from 'src/components/Panorama5'

export const config = [
  { path: '/', Component: Main, name: 'Main' },
  { path: '/Carousel', Component: Carousel, name: 'Carousel' },
  {
    path: '/TurnKeySolution',
    Component: TurnKeySolution,
    name: 'TurnKeySolution'
  }
  // { path: '/5', Component: Panorama5, name: 'Panorama5' }
]

const routes = config.map(({ path, Component }) => {
  return {
    path,
    component: () => <Component />
  }
})

export default routes
