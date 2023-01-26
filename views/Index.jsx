const React = require('react')

class Index extends React.Component {
  render() {
    const { title } = this.props

    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
          <script defer src="http://localhost:3000/socket.io/socket.io.js" />
          <script defer src="javascripts/script.js" />
        </head>
        <body>
          <div>
            <header>
              <h1>Chat</h1>
            </header>
            <main>
              <div>
                <h3>Room Name:</h3>
                <h2 id="room-name"></h2>
                <h3>Users</h3>
                <ul id="users"></ul>
              </div>
              <div></div>
            </main>
            <div>
              <form id="chat-form">
                <input
                  id="msg"
                  type="text"
                  placeholder="Enter Message"
                  required
                  autoComplete="off"
                />
                <button>Send</button>
              </form>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Index
