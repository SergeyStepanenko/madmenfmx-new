import * as React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import styled from 'src/styled-components'

const SpinnerContainer = styled.div`
  > div {
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
  }
`

export default React.memo(function CircularIndeterminate() {
  return (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  )
})
