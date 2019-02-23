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

  @media (max-width: 990px) {
    padding-top: 42px;
  }
`

const Image = styled.img``

const PartnersBlock = styled.div`
  text-align: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 801px) {
    & > * + * {
      margin-left: 78px;
    }
  }

  @media (max-width: 800px) {
    flex-flow: column;

    & > * + * {
      margin-top: 40px;
    }
  }
`

const ImageLink: any = styled.a``

export default function Partners(props: any) {
  const { id } = props

  return (
    <PartnersSection id={id}>
      <Title>Partners</Title>
      <PartnersBlock>
        <ImageLink target="_blank" href="https://luxaviation.com">
          <Image src={partner1Image} width="232px" alt="luxaviation" />
        </ImageLink>
        <ImageLink target="_blank" href="https://techstars.com">
          <Image src={partner2Image} width="148px" alt="techstars" />
        </ImageLink>
        <ImageLink target="_blank" href="https://nvidia.com">
          <Image src={partner3Image} width="204px" alt="nvidia" />
        </ImageLink>
      </PartnersBlock>
    </PartnersSection>
  )
}
