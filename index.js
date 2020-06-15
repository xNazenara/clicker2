const express = require('express')
const fs = require('fs')

const app = express()

app.get('/countries', (req, res)=>{

  fs.readFile(__dirname + '/countries.json', 'utf-8', (err, data)=>{

    if(err) {console.log(err)} else {
        res.send(data)
    }

  })

})

app.get('/country/:id', (req, res)=>{
  fs.readFile(__dirname + '/countries.json', 'utf-8', (err, data)=>{

    if(err) {console.log(err)} else {
      let country = null


      const newData = JSON.parse(data)

      for(let ctr = 0; ctr < newData.length; ctr++) {
        if (newData[ctr].id === Number(req.params.id)) {
          country = newData[ctr]
        }
      }


        res.send(country)
    }

  })

})

app.listen(3000, ()=>console.log("Started"))
