const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

app.use(bodyParser.json())

const arr = [
  'title', 'title2', 'title3'
]

app.get('/title', (req, res) => {
  let random = Math.random() * 2
  let rounded = Math.round(random)
  res.send(arr[rounded])
})

app.post('/calculate', (req, res) => {
  try{
    if(req.body.action === '$') {
      let calculated = eval(req.body.expression)
      let rounded = Math.round(calculated)
      res.send({rounded: rounded})
    } else if(req.body.action === '=') {
        let calculated = eval(req.body.expression)
        res.send({calculated: calculated})
    } else if(req.body.action === 'arrow') {
        let backspace = req.body.expression.slice(0, -1)
        res.send({backspace: backspace})
    }
  } catch (e) {
    res.send({error: e})
  }
})

app.listen(3000, ()=>console.log("Started"))
