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
const user = document.getElementById('user').innerText

socket.emit('new-user', user)

socket.on('connect', () => {
  socket.emit('join-room', roomId)
})

socket.on('sent message', (data) => {
  const li = document.createElement('li')
  li.innerText = `${data.user}:${data.message}`
  pastMsg.append(li)
})

socket.on('user-connected', (user) => {
  const li = document.createElement('li')
  if (user) {
    li.innerText = `${user} joined`
    pastMsg.append(li)
  }
})

socket.on('user-disconnected', (user) => {
  const li = document.createElement('li')
  if (user) {
    li.innerText = `${user} left`
    pastMsg.append(li)
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const message = msg.value
  console.log(roomId, 'this is my id')
  if (message) {
    socket.emit('chat', { msg: message, id: roomId, name: user })
    msg.value = ''
  }
})
