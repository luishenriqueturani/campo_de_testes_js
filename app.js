//const express = require("express");
//const filter = require('./filter.js')
import pkg from 'express';
import filter from './filter.js'

const express = pkg

const app = express()
app.use(express.json())

const port = 3000

app.post(`/filter`, (req, res) => {

    const body = req.body

    //console.log(body)

    const filtered = filter(body.classifieds, body.filter)


    res.json(filtered)
})


app.listen(port, ()=>{
    console.log(`Runing on port: ${port}`)
})


