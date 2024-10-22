require('dotenv').config()
const express = require('express')
const { GoogleGenerativeAI } = require('@google/generative-ai')
const app = express()
//função middleware
app.use(express.json())
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

app.post('/pergunte-ao-gemini', async (req, res) => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
  })
  const { prompt } = req.body
  const result = await model.generateContent(prompt)
  res.json({completion: result.response.text()})
})

app.listen(3000, () => {
  console.log('Subiu')
})


