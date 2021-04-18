const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const productRouter = require('./router/product')
const orderRouter = require('./router/order')

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors())
app.use(morgan("dev"))
app.use('/product', productRouter)
app.use('/order', orderRouter)

const PORT = 5000

app.listen(PORT, console.log("서버 실행 "))