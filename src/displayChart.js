const d3 = require('d3')
const realTimeChart = require('./realTimeChart')

// mean and deviation for time interval
let meanMs = 3000, // milliseconds
    dev = 550

// define time scale
let timeScale = d3.scale.linear()
    .domain([300, 1700])
    .range([300, 1700])
    .clamp(true)

// define value scale
let valueScale = d3.scale.linear()
    .domain([0, 1])
    .range([30, 95])

// generate initial data
let normal = d3.random.normal(1000, 150)
let currMs = new Date().getTime() - 300000 - 4000
let data = d3.range(300).map(function(d, i, arr) {
    let value = valueScale(Math.random()) // random data
    //let value = Math.round((d % 60) / 60 * 95) // ramp data
    let interval = Math.round(timeScale(normal()))
    currMs += interval
    let time = new Date(currMs)
    let obj = { interval: interval, value: value, time: time, ts: currMs }
    return obj
})

// create the real time chart
let chart = realTimeChart()
    .title("Liipers passing stairs")
    .yTitle("Y Scale")
    .xTitle("Time")
    .border(true)
    .width(900)
    .height(290)
    .barWidth(1)
    .initialData(data)

console.log("Version: ", chart.version)
console.dir("Dir++")
console.trace()
console.warn("warn")

// invoke the chart
let chartDiv = d3.select("#viewDiv").append("div")
    .attr("id", "chartDiv")
    .call(chart)

// alternative invocation
//chart(chartDiv)


// drive data into the chart roughly every second
// in a normal use case, real time data would arrive through the network or some other mechanism
let d = 0
function newMockData() {
    console.log('starting generating data')
    let timeout = Math.round(timeScale(normal()))

    setTimeout(function() {

        // create new data item
        let now = new Date()
        let obj = {
            value: valueScale(Math.random()), // random data
            //value: Math.round((d++ % 60) / 60 * 95), // ramp data
            time: now,
            color: "red",
            ts: now.getTime(),
            interval: timeout
        }

        // send the datum to the chart
        chart.datum(obj)

        // do forever
        newMockData()

    }, timeout)
}
// start the data generator
// dataGenerator()

function newPoint(value) {
    let timeout = Math.round(timeScale(normal()))
    // "2016-09-19T14:28:43.802Z"
    let now = new Date()
    let obj = {
        value: valueScale(value),
        time: now,
        color: "red",
        ts: now.getTime(),
        interval: timeout
    }

    // send the datum to the chart
    chart.datum(obj)
}


module.exports = {
    newMockData,
    newPoint
}
