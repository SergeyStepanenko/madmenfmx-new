import * as React from 'react'
import { browserHistory } from 'react-router'

import styled from 'src/styled-components'

import { getIsNewTabClick } from './utils'

const Link = styled.a``

export default function UserMenuLink(props: any) {
  const { path, name } = props

  const handleClick = (event: any) => {
    event.preventDefault()

    const isNewTabClick = getIsNewTabClick(event)

    if (isNewTabClick) {
      return
    }

    browserHistory.push(path)
  }

  const handleMouseUp = (event: any) => {
    event.preventDefault()

    const isNewTabClick = getIsNewTabClick(event)

    if (!isNewTabClick) {
      return
    }

    window.open(path, '_blank')
  }

  return (
    <Link href={path} onClick={handleClick} onMouseUp={handleMouseUp}>
      {name}
    </Link>
  )
}
