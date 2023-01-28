const React = require('react')

// Higher order component
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/app.css" />
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className="text-white bg-slate-800 w-screen h-screen flex flex-col justify-center font-mono">
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
