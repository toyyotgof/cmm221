const express = require ('express')
const { twig } = require('twig')
const app = express()

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.listen(8000, function(err) {
	console.log('Server is running on port 8000')
})