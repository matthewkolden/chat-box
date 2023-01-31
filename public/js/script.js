// const socket = io()
// socket.on('connect', () =>{' '}
// {console.log(socket.id)})
// socket.on('disconnect', () =>{' '}
// {console.log(socket.id)})

// const io = require('socket.io-client')
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
const roomId = document.getElementById('room-id').innerText

socket.on('connect', () => {
  console.log(socket.id)
  socket.emit('join-room', roomId)
})

socket.on('sent message', (data) => {
  const li = document.createElement('li')
  li.innerText = data
  pastMsg.append(li)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const message = msg.value
  console.log(roomId, 'this is my id')
  if (message) {
    socket.emit('chat', { msg: message, id: roomId })
    msg.value = ''
  }

  console.log(msg.value)
  console.log('Just hit the submit button')
})
