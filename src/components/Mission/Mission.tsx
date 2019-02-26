import * as React from 'react'
import styled from 'src/styled-components'
import missionImage from 'src/assets/mission.jpg'
import * as S from 'src/styles'

const MissionSection = styled.section`
  min-height: 673px;
  padding-top: 165px;
  padding-bottom: 165px;
  padding-right: 12px;
  padding-left: 12px;
  background-image: url(${missionImage});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;

  @media (max-width: 990px) {
    min-height: auto;
    padding-top: 42px;
    padding-bottom: 42px;
  }
`

const MissionTitle = styled.h3`
  font-size: 55px;
  font-family: Avenir Next Bold;
  color: #fff;
  text-align: center;
`

const MissionDescription = styled(S.UnderlinedText)`
  position: relative;
  font-size: 35px;
  color: #fff;
  text-align: center;
`

const MissionDescContainer = styled.div`
  max-width: 600px;
  margin: 40px auto 0;
  text-align: center;
`

const MissionInfo = styled.p`
  max-width: 654px;
  color: #fff;
  font-family: Open Sans;
  font-size: 19px;
  text-align: center;
  margin-top: 54px;
  margin-right: auto;
  margin-left: auto;
  line-height: 31px;
`

export default function Mission(props: any) {
  const { id, isTablet } = props

  return (
    <MissionSection id={id}>
      <MissionTitle>Mission</MissionTitle>
      <MissionDescContainer>
        {isTablet ? (
          <MissionDescription>
            Enabling instant access to goods for everyone, everywhere
          </MissionDescription>
        ) : (
          <React.Fragment>
            <MissionDescription>
              Enabling instant access to goods
            </MissionDescription>
            <MissionDescription> for everyone, everywhere</MissionDescription>
          </React.Fragment>
        )}
      </MissionDescContainer>
      <MissionInfo>
        We believe the next big thing in logistics is near-instant delivery of
        goods. As an innovative and tech-driven B2B logistics provider, we have
        embarked on a journey to revolutionize how cargo is moved by providing
        air transportation for various applications, and we are focused on
        disrupting the miles before the "last-mile" delivery.
      </MissionInfo>
    </MissionSection>
  )
}
