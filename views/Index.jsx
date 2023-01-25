const React = require('react')

class Index extends React.Component {
  render() {
    const { title } = this.props

    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>{title}</h1>
          <p>Welcome to {title}</p>
        </body>
      </html>
    )
  }
}
module.exports = Index
