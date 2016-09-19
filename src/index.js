// expose jquery
require('expose?$!expose?jQuery!jquery')
require('bootstrap-webpack')
require('./style.css')

let connect = require('./humanCounter')

const displayChart = require('./displayChart')

// displayChart.newMockData()

let eventSource = connect()
const pplCount = document.getElementById('pplCount')

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
    // tempSpan.innerHTML = parsedData.data + " people went through stairs today.";
    // tempSpan.style.fontSize = "28px";
    // tsSpan.innerHTML = "At timestamp " + parsedData.published_at;
    // tsSpan.style.fontSize = "9px";
}, false)

