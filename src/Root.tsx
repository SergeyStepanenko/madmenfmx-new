import * as React from 'react'

export default class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default

      return <DevTools />
    }

    return null
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
