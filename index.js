const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const arr = [
  'click me', 'click click click', 'hey! it hirts!'
]

app.get('/button-name', (req, res) => {
  let random = Math.random() * 2
  let rounded = Math.round(random)
  res.send(arr[rounded])
})

app.listen(3000, ()=>console.log("Started"))
