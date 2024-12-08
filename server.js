const express = require('express')
const path = require('path')
const app = express()
const port = 3005;
//home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}).get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//events page
app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'events.html'))
})


//athletes page
app.get('/athletes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'athletes.html'))
})

//medals page
app.get('/medals', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'medals.html'))
})


//history page
app.get('/history', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'history.html'))
})



//test api and code page
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test', 'index.html'))
})

//for css and js files
app.use(express.static('public/src'))

//for images and other files
app.use(express.static('public/assets'))

app.get('/sitemap', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemap.xml'))
})

app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}/)`);
})
