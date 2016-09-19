function start() {

    document.getElementById("uptime").innerHTML = "Waiting for data...";
    var deviceID = "240034001147343339383037";
    var accessToken = "800efcf08f1f961e4438ece0da1a20bc5ccfb4f4";
    var eventSource = new EventSource("https://api.spark.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken);

    eventSource.addEventListener('open', function(e) {
        console.log("Opened!"); },false);

    eventSource.addEventListener('error', function(e) {
        console.log("Errored!"); },false);

    eventSource.addEventListener('humancount', function(e) {
        console.log("Received Stuff!");
        var parsedData = JSON.parse(e.data);
        var tempSpan = document.getElementById("uptime");
        var tsSpan   = document.getElementById("tstamp");
        tempSpan.innerHTML = parsedData.data + " people went through stairs today.";
        tempSpan.style.fontSize = "28px";
        tsSpan.innerHTML = "At timestamp " + parsedData.published_at;
        tsSpan.style.fontSize = "9px";
    }, false);
}
