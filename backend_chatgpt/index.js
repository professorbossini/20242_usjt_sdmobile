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
app.post('/pergunte-ao-chatgpt', async (req, res) => {
  const openai = new OpenAI(OPENAI_API_KEY)
  const prompt = req.body.prompt
  const model = 'gpt-4o-mini'
  const role = 'user'
  const max_tokens = 50
  const completion = await openai.chat.completions.create({
    messages: [{role: role, content: prompt}],
    model: model,
    max_tokens: max_tokens
  })
  res.json({completion: completion.choices[0].message.content})
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


