const React = require('react')
const DefaultLayout = require('./layout/Default')

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title="Login">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black"
          action="/"
          method="POST"
        >
          <div className="mb-4">
            <label htmlFor="username">Enter your username</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              defaultValue=""
              name="username"
              id="username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Enter your password</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              defaultValue=""
              name="password"
              id="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              type="submit"
              name=""
              value="Login"
            />
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <a href="/signup">Make an account</a>
            </button>
          </div>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Index
