const express = require('express')
const app = express()

app.use(express.static('../dist'))

app.get('/', (req, res) => {
    res.send('yes')
})

app.listen(25000, (err) => {
    if (!err) console.log('success');
})