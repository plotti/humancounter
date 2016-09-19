const express = require('express')
const app = express()

app.get('/dupa', (req, res, next) => {
    console.log('dupa')
    res.json({'dupa':42})
})

const server = app.listen(process.env.PORT || 3006, () => {
    console.log(`Express is listening to ${server.address().port}`)
});
