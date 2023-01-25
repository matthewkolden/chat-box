const React = require('react')

class Error extends React.Component {
  render() {
    const { title, error } = this.props

    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>{message}</h1>
          <h2>{error.status}</h2>
          <pre>{error.stack}</pre>
        </body>
      </html>
    )
  }
}
module.exports = Error
