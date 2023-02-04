const React = require('react')

// Higher order component
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/app.css" />
          <script src="https://cdn.tailwindcss.com" />
          <script
            src="https://kit.fontawesome.com/df059f95ef.js"
            crossorigin="anonymous"
          />
          <script src="/socket.io/socket.io.js" />
          <script defer src="/js/script.js" />
        </head>
        <body className="text-white bg-slate-800 w-screen h-screen flex flex-col justify-center font-mono">
          <h1 className="self-center top-8 ml-8 text-4xl font-bold absolute">
            chat box <i className="fa-solid fa-comment"></i>
          </h1>
          <h1 className="self-center mb-8 text-4xl font-bold">
            {this.props.title}
          </h1>
          <div className="flex justify-center">{this.props.children}</div>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout
