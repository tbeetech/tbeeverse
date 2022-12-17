const PORT = process.env.PORT || 5000
const express = require('express')
const app = express()


app.use(express.static('public'))
app.set('view engine', 'ejs')





// ROUTERS
app.get('/', (req,res)=>{
    res.render('index')

})
app.get('/about', (req, res)=> {
    res.render('about')
})
app.get('/contact', (req, res)=> {
    res.render('contact')
})
app.get('/services', (req,res)=> {
    res.render('services')
})
app.get('/portfolio', (req,res)=> {
    res.render('portfolio')
})
app.get('/blog', (req,res)=> {
    res.render('blog')
})
app.listen(PORT, ()=>{
    console.log('app running on local host 5000')
})