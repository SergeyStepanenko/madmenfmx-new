import * as React from 'react'
import { browserHistory } from 'react-router'
import styled from 'src/styled-components'

import { config } from 'src/routes'

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`
const MenuItem = styled.li`
  cursor: pointer;
`

const Link = styled.a``

export default class UserMenu extends React.PureComponent {
  render() {
    return (
      <MenuList>
        {config.map(({ path, name }) => (
          <MenuItem key={path}>
            <Link
              href={path}
              onClick={(event) => this.handleMenuItemClick(event, path)}
              onMouseDown={(event) => this.handleMouseDown(event, path)}
            >
              {name}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    )
  }

  handleMenuItemClick = (event: any, path: any) => {
    event.preventDefault()

    browserHistory.push(path)
  }

  handleMouseDown = (event: any, path: any) => {
    if (
      event.ctrlKey ||
      event.shiftKey ||
      event.metaKey || // apple
      (event.button && event.button == 1) // middle click, >IE9 + everyone else
    ) {
      window.open(path, '_blank')

      return
    }

    event.preventDefault()
  }
}
