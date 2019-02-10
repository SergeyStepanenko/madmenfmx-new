import * as React from 'react'
import styled from 'src/styled-components'
import emailIcon from 'src/assets/email.svg'

const List = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
`

const Item: any = styled.li`
  width: 100px;
  display: block;
  height: 100%;
  font-size: 16px;
  text-align: center;
  line-height: 76px;
  cursor: pointer;
  color: ${(props: any) =>
    props.isActive ? props.theme.colors.main : '#9caeb7'};
  font-family: Avenir Medium;
`

const EmailIcon = styled.a`
  display: block;
  margin-left: 30px;
  width: 84px;
  height: 100%;
  border-left: 2px solid #e5ecef;
  background-image: url(${emailIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

const MenuSection = styled.menu`
  display: flex;
  align-items: center;
`

export default function Menu(props: any) {
  const { isTablet } = props

  return (
    <MenuSection>
      {!isTablet && (
        <List>
          <Item>Home</Item>
          <Item isActive>News</Item>
          <Item>Mission</Item>
          <Item>Timeline</Item>
          <Item>Team</Item>
          <Item>Partners</Item>
        </List>
      )}
      <EmailIcon href="mailto:info@flug-auto.com" />
    </MenuSection>
  )
}
