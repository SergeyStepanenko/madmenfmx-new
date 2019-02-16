import * as React from 'react'
import styled from 'src/styled-components'
import map1 from 'src/assets/map_1.jpg'
import map2 from 'src/assets/map_2.jpg'

const MapsSection = styled.section`
  margin-top: 109px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Map: any = styled.img`
  width: ${({ isTablet }: any) => (isTablet ? '100%' : '900px')};
`

export default function Maps({ isTablet }: any) {
  return (
    <MapsSection>
      <picture>
        <Map isTablet={isTablet} src={map1} alt="flugauto" />
      </picture>
      <picture>
        <Map isTablet={isTablet} src={map2} alt="conventional way" />
      </picture>
    </MapsSection>
  )
}
