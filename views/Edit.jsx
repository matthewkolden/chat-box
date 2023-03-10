const React = require('react')
const DefaultLayout = require('./layout/Default')

class Edit extends React.Component {
  render() {
    const { chat } = this.props

    return (
      <DefaultLayout>
        <div className="flex flex-col w-9/12">
          <div className="flex justify-between mb-4 ">
            <h1 className="text-4xl">Edit {chat.name}</h1>
            <div className="flex">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4">
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
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black flex flex-col justify-end">
            <div className="flex items-center justify-between">
              <form
                className="flex items-center  w-3/5"
                action={`/chat/edit/${chat._id}?_method=PUT`}
                method="POST"
              >
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mr-4"
                  type="text"
                  name="name"
                  defaultValue={chat.name}
                />

                <input
                  type="submit"
                  value="Sumbit"
                  name=""
                  className="m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                />
              </form>
              <div className="flex items-center">
                <p className="mr-2">{chat.code}</p>
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
