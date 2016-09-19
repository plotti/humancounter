import rp from 'request-promise'
import connect from './humanCounter'
import displayChart from './displayChart'

// expose jquery
require('expose?$!expose?jQuery!jquery')
require('bootstrap-webpack')
require('./style.css')

let eventSource = connect()
const pplCount = document.getElementById('pplCount')

rp({
    uri: 'https://api.spark.io/v1/devices/240034001147343339383037',
    qs: {
        access_token: '800efcf08f1f961e4438ece0da1a20bc5ccfb4f4'
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
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
    // var tempSpan = document.getElementById("uptime");
    // var tsSpan   = document.getElementById("tstamp");
    // tempSpan.innerHTML = parsedData.data + " people went through stairs today.";
    // tempSpan.style.fontSize = "28px";
    // tsSpan.innerHTML = "At timestamp " + parsedData.published_at;
    // tsSpan.style.fontSize = "9px";

    // var tempSpan = document.getElementById("uptime");
    // var tsSpan   = document.getElementById("tstamp");
    // tempSpan.innerHTML = parsedData.data + " ";
    // tempSpan.style.fontSize = "28px";
    // tsSpan.innerHTML = "At timestamp " + parsedData.published_at;
    // tsSpan.style.fontSize = "9px";
}, false)

