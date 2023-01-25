const React = require('react')

class Signup extends React.Component {
  render() {
    const { title } = this.props

    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Signup</h1>

          <form action="/users/signup" method="POST">
            <label htmlFor="username">Create a username</label>
            <input
              type="text"
              defaultValue=""
              name="username"
              id="username"
              required
            />
            <br />
            <label htmlFor="password">Create a password</label>
            <input
              type="password"
              defaultvalue=""
              name="password"
              id="password"
              required
            />
            <br />
            <input type="submit" name="" value="Signup" />
          </form>
        </body>
      </html>
    )
  }
}
module.exports = Signup
