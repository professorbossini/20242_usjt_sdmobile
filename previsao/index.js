require('dotenv').config()
const axios = require('axios')
// const APPID = process.env.APPID
// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const Q = process.env.Q
// const CNT = process.env.CNT
// const TRUE_LANGUAGE = process.env.TRUE_LANGUAGE
// const UNITS = process.env.UNITS

const {
  PROTOCOL, BASE_URL, APPID, Q, CNT, TRUE_LANGUAGE, UNITS
} = process.env


const vai = async () => {
  const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&q=${Q}&cnt=${CNT}&lang=${TRUE_LANGUAGE}&units=${UNITS}`
  const resultado = await axios.get(url)
  console.log(resultado.data)
  for (let previsao of resultado.data.list){
    console.log(previsao.weather[0].description)
  }
}
vai()
//complete essa função (async/await)
//comece fazendo uma requisição com a axios
//no tratamento, mostre a descrição de cada previsão que tenha a sensação térmica maior ou igual a 25. Mostre, também, a própria sensação térmica
const ex = () => {

}
ex()


// axios.get(url)
// .then((res) => {
//   console.log(res.data)
//   console.log('==========================')
//   return res.data
// })
// .then(res => {
//   console.log(`CNT: ${res.cnt}`)
//   console.log('==========================')
//   return res
// })
// .then(res => {
//   for (let previsao of res.list){
//     console.log(`${new Date(Number(previsao.dt) * 1000).toLocaleString()}`)
//   }
//   console.log('==========================')  
// })
//fazer um novo then para mostrar nascer e pôr do Sol
//OBS: Não esqueça do return do then de cima

