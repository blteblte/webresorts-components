const express = require('express')
const app = express()

app.use(express.static('www'))

app.listen(3999, 'localhost', () => console.log('app listening on port 3999...'))
