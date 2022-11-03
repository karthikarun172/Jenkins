const express = require('express')
const server = express()

const port = 7000

server.get('/', (req, res) => {
  return res.send('Hello, Express.js!')
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
