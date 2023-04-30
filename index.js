const express = require('express')
const app = express()
var cors = require('cors')
const port =process.env.PORT|| 5000
const catagories = require('./data/catagories.json')
const news = require ('./data/news.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('dragon comming')
})
app.get('/catagories', (req, res) => {
    res.send(catagories)
  })
app.get('/news',(req,res)=>{
    res.send(news)
})
app.get('/news/:id',(req,res)=>{
  const id = req.params.id
  const selectNews = news.find(n=>n._id===id)
  res.send(selectNews)
})
app.get('/catagories/:id',(req,res)=>{
  const id = parseInt(req.params.id)
  if(id === 0){
    res.send(news)
  }
  else{
    const selectCatagory = news.filter(n=>parseInt(n.category_id)=== id)
  res.send(selectCatagory)
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})