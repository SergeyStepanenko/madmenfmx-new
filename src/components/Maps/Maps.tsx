import * as React from 'react'
import styled from 'src/styled-components'
import map1 from 'src/assets/map_1.jpg'
import map2 from 'src/assets/map_2.jpg'

const MapsSection = styled.section`
  margin-top: 109px;
  display: flex;
  justify-content: center;

  @media (max-width: 990px) {
    margin-top: 40px;
    flex-flow: column;
    align-items: center;
  }
`

const Map: any = styled.img`
  width: 100%;
`

const Wrapper = styled.div`
  width: 50%;

  @media (max-width: 990px) {
    width: 100%;
    padding-left: 38px;
    padding-right: 38px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export default function Maps({ isTablet, id }: any) {
  return (
    <MapsSection id={id}>
      <Wrapper>
        <Map isTablet={isTablet} src={map1} alt="flugauto" />
      </Wrapper>
      <Wrapper>
        <Map isTablet={isTablet} src={map2} alt="conventional way" />
      </Wrapper>
    </MapsSection>
  )
}
