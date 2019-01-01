import * as React from 'react'

import styled from 'src/styled-components'
import { config } from 'src/routes'

import UserMenuLink from './components/UserMenuLink'

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`
const MenuItem = styled.li`
  cursor: pointer;
`

export default class UserMenu extends React.PureComponent {
  render() {
    return (
      <MenuList>
        {config.map(({ path, name }) => (
          <MenuItem key={path}>
            <UserMenuLink path={path} name={name} />
          </MenuItem>
        ))}
      </MenuList>
    )
  }
}
