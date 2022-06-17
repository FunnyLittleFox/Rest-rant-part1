const express = require('express')
const app = express()

app.get('/', fucntion (req, res) {
    res.send("Hello World!")
})

app.listen(3000, function (res, req) {
    res.send("Connected to Foxnet")
})