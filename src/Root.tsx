import * as React from 'react'

export default class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV === 'production') {
      return null
    }

    const DevTools = require('mobx-react-devtools').default

    return <DevTools />
  }

  render() {
    return (
      <>
        {this.props.children}
        {this.renderDevTool()}
      </>
    )
  }
}
