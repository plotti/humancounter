import rp from 'request-promise'
import connect from './humanCounter'
import displayChart from './displayChart'

// expose jquery
require('expose?$!expose?jQuery!jquery')
require('bootstrap-webpack')
require('./style.css')

let eventSource = connect()
const pplCount = document.getElementById('pplCount')

rp({uri: `${window.location.origin}/human_count`, json: true})
    .then(data => pplCount.innerHTML = data.result)
    .catch(err => console.error(err))

eventSource.addEventListener('humancount', (e) => {
    let parsedData = JSON.parse(e.data)
    console.log(`Received data`, parsedData)
    pplCount.innerHTML = parsedData.data
    displayChart.newPoint(0.3)
}, false)
