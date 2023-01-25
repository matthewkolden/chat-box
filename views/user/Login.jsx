const React = require('react')

class Login extends React.Component {
  render() {
    const { title } = this.props

    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Login</h1>

          <form action="/users/login" method="POST">
            <label htmlFor="username">Enter your username</label>
            <input
              type="text"
              defaultValue=""
              name="username"
              id="username"
              required
            />
            <br />
            <label htmlFor="password">Enter your password</label>
            <input
              type="password"
              defaultValue=""
              name="password"
              id="password"
              required
            />
            <br />
            <input type="submit" name="" value="Login" />
          </form>
        </body>
      </html>
    )
  }
}
module.exports = Login
