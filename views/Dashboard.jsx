const React = require('react')
const DefaultLayout = require('./layout/Default')

class Dashboard extends React.Component {
  render() {
    const { chats, user } = this.props

    return (
      <DefaultLayout>
        <div className="flex flex-col">
          <form
            className="flex mb-4 justify-between"
            action="/logout?_method=DELETE"
            method="POST"
          >
            <h1 className="text-4xl">Chat</h1>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Logout
            </button>
          </form>
          <form action="/chat/join" method="POST">
            <div className="mb-4">
              <label htmlFor="chat-code">Enter code to join chatroom</label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="code"
                id="chat-code"
                placeholder="Enter code here"
              />
            </div>

            <input
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-4"
              type="submit"
              name=""
              value="Join room"
            />
          </form>
          <form action="/chat" method="POST">
            <h1 className="text-4xl mb-4">Create Chat</h1>
            <div className="mb-4">
              <label htmlFor="name-create">Create name</label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="name"
                id="name-create"
                placeholder="Create name here"
              />
            </div>
            <input
              className="mb-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              type="submit"
              name=""
              value="Create room"
            />
          </form>
          <h1 className="text-4xl mb-4">Your Rooms</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black flex flex-col justify-end">
            <ul>
              {chats.map((chatroom, i) => {
                return (
                  <div className="flex items-center justify-between" key={i}>
                    <li>
                      {chatroom.name} - ({chatroom.code})
                    </li>
                    <div className="flex">
                      <button className="m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        <a href={`/chat/${chatroom._id}`}>Join</a>
                      </button>

                      <button className="m-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
                        <a href={`/chat/edit/${chatroom._id}`}>Edit</a>
                      </button>
                    </div>
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Dashboard
