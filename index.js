const express = require('express')
const serveless = require('serverless-http')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log('funciona el server en el puerto');
})
app.get('/', (req, res) => {
    res.render('curso')
})


app.get('/contenido', (req, res) => {
    res.render('contenido')
})
app.get('/pruebas', (req, res) => {
    res.render('pruebas')
})
// renders de intro
app.get('/web', (req, res) => {
    res.render('web')
})
app.get('/internet', (req, res) => {
    res.render('internet')
})
app.get('/paginas', (req, res) => {
    res.render('paginas')
})
app.get('/stack', (req, res) => {
    res.render('stack')
})
app.get('/git', (req, res) => {
    res.render('git')
})
app.get('/heramientas', (req, res) => {
    res.render('heramientas')
})
// renders de HTML
app.get('/etiquetas', (req, res) => {
    res.render('etiquetas')
})
app.get('/elementos', (req, res) => {
    res.render('elementos')
})
app.get('/atributos', (req, res) => {
    res.render('atributos')
})
app.get('/cabecera', (req, res) => {
    res.render('cabecera')
})
app.get('/texto', (req, res) => {
    res.render('texto')
})
app.get('/formas', (req, res) => {
    res.render('formas')
})
app.get('/estructuras', (req, res) => {
    res.render('estructuras')
})
app.get('/semantico', (req, res) => {
    res.render('semantico')
})

// renders de CSS
app.get('/etiquetas', (req, res) => {
    res.render('etiquetas')
})
app.get('/etiquetas', (req, res) => {
    res.render('etiquetas')
})

app.get("*", (req, res) => {
    res.send("ERROR 404 Direccion equivocada")
})


