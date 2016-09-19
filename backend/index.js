const rp = require('request-promise')
const express = require('express')
const cors = require('cors')

let app = express()

app.use(cors({
    origin: 'localhost:3006'
}))

app.get('/dupa', (req, res, next) => {

    rp({
        uri: 'https://api.spark.io/v1/devices/240034001147343339383037',
        qs: {
            access_token: '800efcf08f1f961e4438ece0da1a20bc5ccfb4f4'
        },
        headers: {
            // 'Authorization': 'Bearer <authentication code>'
        },
        json: true
    })
        .catch(err => res.status(500).json(err))
})

app.use(express.static('public'))

const server = app.listen(process.env.PORT || 3006, () => {
    console.log(`Express is listening to ${server.address().port}`)
});