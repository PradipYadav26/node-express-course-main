const express = require('express')
const app = express()
const { people } = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))
//GET
app.get('/api/people', (req, res) => {
  res.status(200).json({success: true,data:people})
})
//POST
app.post('/login',(req,res)=>{
  const {name} = req.body;
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }
  res.send('POST')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
