const mongoose = require('mongoose')
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv')

const indexRouter = require('./routes/index')




app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

mongoose.connect('mongodb://127.0.0.1:27017/mybrary').then(()=>{
    console.log("connect")
}).catch((error) =>{
    console.log(error)
})

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)