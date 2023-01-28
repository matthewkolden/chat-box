const React = require('react')
const io = require('socket.io-client')
const DefaultLayout = require('./layout/Default')

class Chatroom extends React.Component {
  state = {
    messages: [],
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    this.socket.emit('message', {
      name: formData.get('name'),
      message: formData.get('message'),
    })
    event.target.reset()
  }

  render() {
    const { messages } = this.props
    return (
      <DefaultLayout>
        <div>
          <h1>Chat</h1>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>
                {message.name}: {message.message}
              </li>
            ))}
          </ul>
          <form action="/chatroom" method="POST" onSubmit={this.handleSubmit}>
            <div className="flex items-center justify-between">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="msg"
                placeholder="Message"
              />
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Chatroom
