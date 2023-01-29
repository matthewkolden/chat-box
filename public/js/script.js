// const socket = io()
// socket.on('connect', () =>{' '}
// {console.log(socket.id)})
// socket.on('disconnect', () =>{' '}
// {console.log(socket.id)})

// import { io } from ('socket.io-client')
const socket = io('http://localhost:3000')

// this.socket.on('connect', () => {
//   console.log('Hello World')
// })

// this.socket.on('disconnect', () => {
//   console.log(socket.id)
// })

const form = document.getElementById('chat')
const msg = document.getElementById('msg')
const pastMsg = document.getElementById('past-messages')

socket.on('sent message', (data) => {
  const li = document.createElement('li')
  li.innerText = data
  pastMsg.append(li)
})

form.addEventListener('submit', (e) => {
  const message = msg.value
  e.preventDefault()
  if (message) {
    socket.emit('chat', message)
    msg.value = ''
  }

  console.log(msg.value)
  console.log('Just hit the submit button')
})
