const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.post('/ApiClassic', async (req, res) => {
    let user = req.body.nombre
    console.log(`ClassicNombre: ${req.body.nombre}`)
    console.log(`CLssicApellido: ${req.body.apellido}`)
    res.json({ status: 401, body: 'err' })

})
app.post('/ApiFetch', async (req, res) => {
    console.log(`FecthNombre: ${req.body.nombre}`)
    console.log(`FetchApellido: ${req.body.apellido}`)
    res.json({ status: 401, body: 'err' })

})
app.post('/ApiAxios', async (req, res) => {
    console.log(`AxiosNombre: ${req.body.nombre}`)
    console.log(`AxiosApellido: ${req.body.apellido}`)
    res.json({ status: 401, body: 'err' })

})
app.listen(3002, () => {
    console.log('server run por 3002 pa')
})

