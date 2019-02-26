import * as React from 'react'
import styled, { css } from 'src/styled-components'
import DeliveryItem from 'src/components/Delivery'
import benefitsImage from 'src/assets/benefits.svg'
import * as S from 'src/styles'

const Helicopter: any = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 42px;
  padding-right: 42px;

  @media (max-width: 990px) {
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (max-width: 760px) {
    flex-flow: column;
  }
`

const InfoSection = styled.section`
  max-width: 1090px;
  margin: 0 auto;
  padding-top: 146px;
  padding-right: 12px;
  padding-left: 12px;

  @media (max-width: 990px) {
    padding-top: 42px;
    padding-bottom: 42px;
  }

  @media (max-width: 760px) {
    padding-right: 0;
    padding-left: 0;
  }
`

const HeliDescripionBlock: any = styled.div`
  padding-right: ${(props: any) => (props.isTablet ? '20' : '50')}px;

  @media (max-width: 980px) {
    max-width: 300px;
  }

  @media (max-width: 760px) {
    max-width: 100%;
    padding-right: 0;
  }
`

const HeliChartBlock: any = styled.div`
  ${(props: any) =>
    props.isTablet &&
    css`
      margin-top: 80px;
    `}

  min-width: 380px;
  height: 350px;
  background-image: url(${benefitsImage});
  background-repeat: no-repeat;
  margin-top: 120px;

  @media (max-width: 760px) {
    margin-top: 40px;
    min-width: 100%;
  }
`

const HeliTitle: any = styled(S.UnderlinedText)`
  color: #000;
  font-size: 35px;

  @media (max-width: 760px) {
    white-space: initial;
  }

  ${(props: any) =>
    props.isTablet &&
    css`
      white-space: nowrap;
    `}
`

const HeliDescripion = styled.div`
  font-size: 19px;
  margin-top: 40px;
  font-family: Open Sans;
  line-height: 31px;
`

const DeliveryComparisonBlock = styled.div`
  display: flex;
  width: 60%;

  @media (max-width: 990px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column;
    align-items: center;

    > div {
      width: 100%;
      border-radius: 0;
    }
  }

  > div:first-of-type {
    z-index: 1;
  }

  @media (min-width: 769px) {
    > div:last-of-type {
      transform: translate(-30px, 30px);
    }
  }
`

const Delivery = styled.div`
  display: flex;

  @media (max-width: 990px) {
    margin-top: 60px;
    flex-flow: column;
    align-items: center;
  }
`

const DeliveryDescBlock = styled.div`
  width: 40%;
  margin-top: 130px;
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 990px) {
    margin-top: 42px;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }
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
