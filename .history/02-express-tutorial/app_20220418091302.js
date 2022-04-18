const express = require('express')
const app = express()
const { people } = require('./data')

app.use(express.static('./methods-public'))

//GET
app.get('/api/people', (req, res) => {
  res.status(200).json({success: true,data:people})
})
//POST
app.post('/login',(req,res)=>{
  res.send('POST')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
