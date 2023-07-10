const express = require('express')
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


app.get("*", (req, res) => {
    res.send("ERROR 404 Direccion equivocada")
})