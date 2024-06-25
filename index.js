const express = require('express')
const createFile = require('./file1.js')
const readFile = require('./file.js')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  createFile(req,res)
})

app.get('/files',(req,res)=>{
  readFile(req,res)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})