import * as React from 'react'
import styled from 'src/styled-components'
import * as S from 'src/styles'
import partner1Image from 'src/assets/partner_1.png'
import partner2Image from 'src/assets/partner_2.png'
import partner3Image from 'src/assets/partner_3.png'

const Title = styled(S.Title)``

const PartnersSection = styled.section`
  background-color: #fff;
  padding-top: 80px;
  padding-bottom: 100px;
`

const Image = styled.img``

const PartnersBlock = styled.div`
  text-align: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * + * {
    margin-left: 78px;
  }
`

export default function Partners(props: any) {
  return (
    <PartnersSection>
      <Title>Partners</Title>
      <PartnersBlock>
        <Image src={partner1Image} width="232px" alt="luxaviation" />
        <Image src={partner2Image} width="148px" alt="techstars" />
        <Image src={partner3Image} width="204px" alt="nvidia" />
      </PartnersBlock>
    </PartnersSection>
  )
}
