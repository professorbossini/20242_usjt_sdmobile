require('dotenv').config()
// const app = require('express')()
const express = require('express')
const { OpenAI } = require('openai')
const app = express()
//função middleware
app.use(express.json())
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
console.log(OPENAI_API_KEY)

//POST /pergunte-ao-chatgpt () => {}
app.post('/pergunte-ao-chatgpt', (req, res) => {
  const openai = new OpenAI(OPENAI_API_KEY)
  res.json({mensagem: 'Ok'})
})

//defina esse endpoint, ele devolve esse json: {msg: "oi"}
//e mais ainda, acione-o via navegador
//localhost:3000/oi
//GET /oi?nome=Ana
//localhost:3000/oi?nome=Ana
app.get('/oi', (req, res) => {
  res.json({msg: `Oi, ${req.query.nome}`})
})


app.listen(3000, () => {
  console.log('Subiu')
})


