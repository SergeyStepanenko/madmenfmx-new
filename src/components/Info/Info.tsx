import * as React from 'react'
import styled, { css } from 'src/styled-components'
import DeliveryItem from 'src/components/Delivery'
import benefitsImage from 'src/assets/benefits.svg'
import * as S from 'src/styles'

const Helicopter: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 42px;
  padding-right: 42px;

  ${(props: any) => props.isTablet && css``}
`

const InfoSection = styled.section`
  max-width: 1090px;
  margin: 0 auto;
  padding-top: 146px;
  padding-right: 12px;
  padding-left: 12px;
`

const HeliDescripionBlock: any = styled.div`
  max-width: 380px;
  padding-right: ${(props: any) => (props.isTablet ? '20' : '50')}px;
`

const HeliChartBlock: any = styled.div`
  ${(props: any) =>
    props.isTablet &&
    css`
      margin-top: 80px;
    `}

  width: ${(props: any) => (props.isTablet ? '480px' : '50%')};
  height: 350px;
  background-image: url(${benefitsImage});
  background-repeat: no-repeat;
`

const HeliTitle: any = styled(S.UnderlinedText)`
  color: #000;
  font-size: 35px;

  ${(props: any) =>
    props.isTablet &&
    css`
      white-space: nowrap;
    `}
`

const HeliDescripion = styled.div`
  margin-top: 40px;
  font-family: Open Sans;
  line-height: 31px;
`

const DeliveryComparisonBlock = styled.div`
  display: flex;
  width: 60%;

  > div:first-of-type {
    z-index: 1;
  }

  > div:last-of-type {
    transform: translate(-30px, 30px);
  }
`

const Delivery = styled.div`
  display: flex;
  margin-top: 131px;
`

const DeliveryDescBlock = styled.div`
  margin-top: 130px;
  margin-left: 50px;
  width: 40%;
  padding-right: 50px;
`

export default function Info(props: any) {
  const { isTablet, id } = props

  return (
    <InfoSection id={id}>
      <Helicopter isTablet={isTablet}>
        <HeliDescripionBlock isTablet={isTablet}>
          <HeliTitle isTablet={isTablet}>
            The benefits of a helicopter
            {isTablet && <br />} at the price of a car
          </HeliTitle>
          <HeliDescripion>
            For businesses that want to transport cargo, we are the logistics
            provider of the sky, as we offer them the benefits of a helicopter,
            that is speed and access to remote locations, but at the cost of
            using a conventional car or van. We do this by leveraging our
            proprietary drone technology, capable of carrying up to 500lbs, over
            150miles.
          </HeliDescripion>
        </HeliDescripionBlock>
        <HeliChartBlock isTablet={isTablet} />
      </Helicopter>
      <Delivery>
        <DeliveryComparisonBlock>
          <DeliveryItem />
          <DeliveryItem isAltered />
        </DeliveryComparisonBlock>
        <DeliveryDescBlock>
          <HeliTitle>Deliver anywhere within hours</HeliTitle>
          <HeliDescripion>
            Imagine a world where you could deliver a package anywhere in the US
            in under 3 hrs, even to the most remote town. This is the vision we
            are working towards here at Flugauto.
          </HeliDescripion>
        </DeliveryDescBlock>
      </Delivery>
    </InfoSection>
  )
}
