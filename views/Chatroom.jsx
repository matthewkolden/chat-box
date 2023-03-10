const React = require('react')
// const { io } = require('socket.io-client')
const DefaultLayout = require('./layout/Default')

class Chatroom extends React.Component {
  render() {
    // const socket = io()
    const { id, user, chat } = this.props
    return (
      <DefaultLayout>
        <div className="w-9/12">
          <div className="flex mb-4 justify-between">
            <h1 className="text-4xl">{chat.name}</h1>
            <div className="flex">
              <form action="/logout?_method=DELETE" method="POST">
                <h1 id="room-id" className="hidden text-4xl">
                  {id}
                </h1>
                <button
                  type="submit"
                  className="mr-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  Logout
                </button>
              </form>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <a href="/chat">Go back</a>
              </button>
            </div>
          </div>
          <ul
            id="past-messages"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black h-96 max-h-96 flex flex-col justify-end overflow-y-scroll"
          ></ul>{' '}
          <form id="chat">
            <div className="flex items-center justify-between">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="msg"
                id="msg"
                placeholder="Message"
              />
              <button
                className="ml-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          <h3 id="user" className="mt-4 text-2xl">
            {user}
          </h3>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Chatroom
