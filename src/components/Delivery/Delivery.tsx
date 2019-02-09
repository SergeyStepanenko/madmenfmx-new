import * as React from 'react'
import styled from 'src/styled-components'

import techImage from 'src/assets/flugauto_icon.svg'
import clockBlueImage from 'src/assets/icon_time_frame.png'
import tickBlueImage from 'src/assets/icon_tick.png'
import costBlueImage from 'src/assets/icon_cost.png'
import opexBlueImage from 'src/assets/icon_opex.png'

const DeliveryImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 206px;
`

const DeliveryTitle = styled.p`
  margin-top: 30px;
  font-size: 18px;
  font-family: Avenir Next Bold;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const DeliveryLine = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 18px;
`

const DeliveryItem = styled.div`
  width: 326px;
  padding: 30px 34px;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 6px;
`

const DeliveryList = styled.div`
  margin-top: 28px;

  & > * + * {
    margin-top: 16px;
  }

  ${DeliveryLine} {
    border-bottom: 1px solid #354d81;
  }

  ${DeliveryLine}:last-child {
    border-bottom: none;
  }
`

const DeliveryIcon = styled.img`
  display: block;
  width: 26px;
  height: 26px;
`

const DeliveryText = styled.div`
  color: #fff;
  margin-left: 14px;
  font-family: Open Sans;
  line-height: 26px;
`

const DeliveryStongText = styled.strong`
  color: #fff;
  font-family: Open Sans Bold;
`

export default function Delivery(props: any) {
  const { isAltered } = props

  let params

  if (isAltered) {
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
    delivery4StrongText,
    delivery4Text
  } = params

  return (
    <DeliveryItem>
      <DeliveryImage src={deliveryImage} />
      <DeliveryTitle>{deliveryTitle}</DeliveryTitle>
      <DeliveryList>
        <DeliveryLine>
          <DeliveryIcon src={delivery1Icon} />
          <DeliveryText>
            <DeliveryStongText>{delivery1StrongText}</DeliveryStongText>{' '}
            {delivery1Text}
          </DeliveryText>
        </DeliveryLine>
        <DeliveryLine>
          <DeliveryIcon src={delivery2Icon} />
          <DeliveryText>
            <DeliveryStongText>{delivery2StrongText}</DeliveryStongText>{' '}
            {delivery2Text}
          </DeliveryText>
        </DeliveryLine>
        <DeliveryLine>
          <DeliveryIcon src={delivery3Icon} />
          <DeliveryText>
            <DeliveryStongText>{delivery3StrongText}</DeliveryStongText>{' '}
            {delivery3Text}
          </DeliveryText>
        </DeliveryLine>
        <DeliveryLine>
          <DeliveryIcon src={opexBlueImage} />
          <DeliveryText>
            <DeliveryStongText>{delivery4StrongText}</DeliveryStongText>{' '}
            {delivery4Text}
          </DeliveryText>
        </DeliveryLine>
      </DeliveryList>
    </DeliveryItem>
  )
}
