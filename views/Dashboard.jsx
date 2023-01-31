const React = require('react')
const DefaultLayout = require('./layout/Default')

class Dashboard extends React.Component {
  render() {
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
          <form action="/chat">
            <label htmlFor="chat-code">Enter code to join chatroom</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="code"
              id="chat-code"
              placeholder="Enter code here"
            />
            <input
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              type="submit"
              name=""
              value="Join room"
            />
          </form>
          <form action="/chat" method="POST">
            <h1 className="text-4xl">Create Chat</h1>
            <label htmlFor="code-create">Create code</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="name"
              id="code-create"
              placeholder="Create name here"
            />
            <label htmlFor="name-create">Create name</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="code"
              id="name-create"
              placeholder="Create code here"
            />
            <input
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              type="submit"
              name=""
              value="Create room"
            />
          </form>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Dashboard
