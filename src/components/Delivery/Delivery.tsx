import * as React from 'react'
import styled from 'src/styled-components'

import techImage from 'src/assets/flugauto_icon.svg'
import clockBlueImage from 'src/assets/icon_time_frame.png'
import tickBlueImage from 'src/assets/icon_tick.png'
import costBlueImage from 'src/assets/icon_cost.png'
import opexBlueImage from 'src/assets/icon_opex.png'

import truckImage from 'src/assets/truck_icon.svg'
import clockGreyImage from 'src/assets/icon_time_frame_gr.png'
import costGreyImage from 'src/assets/icon_cost_gr.png'
import crossGreyImage from 'src/assets/icon_cross.png'
import opexGreyImage from 'src/assets/icon_opex_gr.png'

const DeliveryItem: any = styled.div`
  width: ${(props: any) => (props.isAltered ? 347 : 326)}px;
  min-height: 575px;
  padding-top: 30px;
  padding-right: 34px;
  padding-bottom: 30px;
  padding-left: ${(props: any) => (props.isAltered ? 65 : 34)}px;
  background-color: ${(props: any) =>
    props.isAltered ? '#f1f5f7' : props.theme.colors.main};
  border-radius: 6px;
`

const DeliveryImage: any = styled.img`
  display: block;
  margin-top: ${(props: any) => (props.isAltered ? 30 : 0)}px;
  margin-left: auto;
  margin-right: auto;
  width: ${(props: any) => (props.isAltered ? 144 : 206)}px;
`

const DeliveryTitle: any = styled.p`
  margin-top: ${(props: any) => (props.isAltered ? 40 : 30)}px;
  font-size: 18px;
  font-family: Avenir Next Bold;
  text-align: center;
  color: ${(props: any) => (props.isAltered ? '#000' : '#fff')};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const DeliveryLine: any = styled.div`
  display: flex;
  align-items: center;
`

const DeliveryList: any = styled.div`
  margin-top: 28px;

  & > * + * {
    margin-top: 16px;
  }

  ${DeliveryLine} {
    border-bottom: 1px solid
      ${(props: any) => (props.isAltered ? '#a8c4ce' : '#354d81')};
    padding-bottom: 18px;
  }

  ${DeliveryLine}:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const DeliveryIcon = styled.img`
  display: block;
  width: 26px;
  height: 26px;
`

const DeliveryText: any = styled.div`
  color: ${(props: any) => (props.isAltered ? '#000' : '#fff')};
  margin-left: 14px;
  font-family: Open Sans;
  line-height: 26px;
`

const DeliveryStongText: any = styled.strong`
  color: ${(props: any) => (props.isAltered ? '#000' : '#fff')};
  font-family: Open Sans Bold;
`

export default function Delivery(props: any) {
  const { isAltered } = props

  let params

  if (isAltered) {
    params = {
      deliveryImage: truckImage,
      deliveryTitle: 'Conventional way',
      delivery1Icon: clockGreyImage,
      delivery1StrongText: 'Time frame:',
      delivery1Text: '24-48hrs',
      delivery2Icon: costGreyImage,
      delivery2StrongText: 'Cost per delivery:',
      delivery2Text: '$',
      delivery3Icon: crossGreyImage,
      delivery3StrongText: 'Infrastructure:',
      delivery3Text:
        'expensive network of fulfillment centers, vans and trucks',
      delivery4Icon: opexGreyImage,
      delivery4StrongText: 'OpEx:',
      delivery4Text: '1-2 operators per van/ truck, army of support staff'
    }
  } else {
    params = {
      deliveryImage: techImage,
      deliveryTitle: 'Flugauto',
      delivery1Icon: clockBlueImage,
      delivery1StrongText: 'Time frame:',
      delivery1Text: 'Less than 3 Hrs',
      delivery2Icon: costBlueImage,
      delivery2StrongText: 'Cost per delivery:',
      delivery2Text: '$ (price of a car-ride)',
      delivery3Icon: tickBlueImage,
      delivery3StrongText: 'Infrastructure:',
      delivery3Text: 'no complex network of fulfillment centers and warehouses',
      delivery4Icon: opexBlueImage,
      delivery4StrongText: 'OpEx:',
      delivery4Text: '1 operator per fleet of UAVs'
    }
  }

  const {
    deliveryImage,
    deliveryTitle,
    delivery1Icon,
    delivery1StrongText,
    delivery1Text,
    delivery2Icon,
    delivery2StrongText,
    delivery2Text,
    delivery3Icon,
    delivery3StrongText,
    delivery3Text,
    delivery4Icon,
    delivery4StrongText,
    delivery4Text
  } = params

  return (
    <DeliveryItem isAltered={isAltered}>
      <DeliveryImage src={deliveryImage} isAltered={isAltered} />
      <DeliveryTitle isAltered={isAltered}>{deliveryTitle}</DeliveryTitle>
      <DeliveryList isAltered={isAltered}>
        <DeliveryLine isAltered={isAltered}>
          <DeliveryIcon src={delivery1Icon} />
          <DeliveryText isAltered={isAltered}>
            <DeliveryStongText isAltered={isAltered}>
              {delivery1StrongText}
            </DeliveryStongText>{' '}
            {delivery1Text}
          </DeliveryText>
        </DeliveryLine>
        <DeliveryLine isAltered={isAltered}>
          <DeliveryIcon src={delivery2Icon} />
          <DeliveryText isAltered={isAltered}>
            <DeliveryStongText isAltered={isAltered}>
              {delivery2StrongText}
            </DeliveryStongText>{' '}
            {delivery2Text}
          </DeliveryText>
        </DeliveryLine>
        <DeliveryLine isAltered={isAltered}>
          <DeliveryIcon src={delivery3Icon} />
          <DeliveryText isAltered={isAltered}>
            <DeliveryStongText isAltered={isAltered}>
              {delivery3StrongText}
            </DeliveryStongText>{' '}
            {delivery3Text}
          </DeliveryText>
        </DeliveryLine>
        <DeliveryLine isAltered={isAltered}>
          <DeliveryIcon src={delivery4Icon} />
          <DeliveryText isAltered={isAltered}>
            <DeliveryStongText isAltered={isAltered}>
              {delivery4StrongText}
            </DeliveryStongText>{' '}
            {delivery4Text}
          </DeliveryText>
        </DeliveryLine>
      </DeliveryList>
    </DeliveryItem>
  )
}
