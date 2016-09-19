function connect() {
    console.log('connecting')
    var deviceID = "240034001147343339383037";
    var accessToken = "800efcf08f1f961e4438ece0da1a20bc5ccfb4f4";
    var eventSource = new EventSource("https://api.spark.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken);

    eventSource.addEventListener('open', (e) => {
        console.log("Opened!"); },false)

    eventSource.addEventListener('error', (e) => {
        console.log("Errored!"); },false)

    return eventSource
}

module.exports = connect
