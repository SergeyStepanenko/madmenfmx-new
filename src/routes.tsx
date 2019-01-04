import * as React from 'react'

import Entry from 'src/components/Entry'
import Panorama3 from 'src/components/Panorama3'
import Panorama4 from 'src/components/Panorama4'
import Panorama5 from 'src/components/Panorama5'

export const config = [
  { path: '/', Component: Entry, name: 'Entry' },
  { path: '/3', Component: Panorama3, name: 'Panorama3' },
  { path: '/4', Component: Panorama4, name: 'Panorama4' },
  { path: '/5', Component: Panorama5, name: 'Panorama5' }
]

const routes = config.map(({ path, Component }) => {
  return {
    path,
    component: () => <Component />
  }
})

export default routes
