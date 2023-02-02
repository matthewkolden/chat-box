const React = require('react')
const DefaultLayout = require('./layout/Default')

class Edit extends React.Component {
  render() {
    const { chat } = this.props

    return (
      <DefaultLayout>
        <div className="flex flex-col">
          <div className="flex justify-between mb-4">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <a href="/chat">Go back</a>
            </button>
            <form
              className="flex justify-between"
              action="/logout?_method=DELETE"
              method="POST"
            >
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Logout
              </button>
            </form>
          </div>
          <h1 className="text-4xl mb-4">Edit {chat.name}</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black flex flex-col justify-end">
            <div className="flex items-center justify-between">
              <form
                className="flex items-center"
                action={`/chat/edit/${chat._id}?_method=PUT`}
                method="POST"
              >
                <input type="text" name="name" defaultValue={chat.name} />
                <p className="mr-2">{chat.code}</p>
                <input
                  type="submit"
                  value="Sumbit"
                  name=""
                  className="m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                />
              </form>
              <div className="flex">
                <form action={`/chat/${chat._id}?_method=DELETE`} method="POST">
                  <button
                    type="submit"
                    className="m-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Edit
