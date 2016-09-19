import rp from 'request-promise'
import connect from './humanCounter'
import displayChart from './displayChart'

// expose jquery
require('expose?$!expose?jQuery!jquery')
require('bootstrap')
require('./style.css')

let eventSource = connect()
const pplCount = document.getElementById('pplCount')

rp({
    uri: 'https://api.spark.io/v1/devices/240034001147343339383037',
    qs: {
        access_token: '800efcf08f1f961e4438ece0da1a20bc5ccfb4f4'
    },
    headers: {
        // 'Content-Type': 'application/json',
        // 'Authorization': 'Bearer <authentication code>'
    }
})
    .then(console.warn)
    .catch(console.log)

eventSource.addEventListener('humancount', (e) => {
    let parsedData = JSON.parse(e.data)
    console.log(`Recieved data`, parsedData)
    pplCount.innerHTML = parsedData.data
    displayChart.newPoint(1)
    //parsedData.published_at;
}, false)
