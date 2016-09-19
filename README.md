Spark Human Counter

# Admin Pages
- https://console.particle.io/devices
- Login with plotti@gmx.net | 
# Code
- Measuring.cpp is used to be flashed onto the device.

# Install
- npm install -g browser-sync
- npm install webpack -g

# Used APIs
- Url to access CM property: https://api.spark.io/v1/devices/240034001147343339383037/cm?access_token=800efcf08f1f961e4438ece0da1a20bc5ccfb4f4
- https://docs.particle.io/reference/firmware/photon/#particle-publish

# Ideas or Blogposts
- Idea for Human Count code: https://gist.github.com/petervojtek/55523fe97a6f16891d31
- https://docs.particle.io/guide/getting-started/intro/photon/
- https://openhomeautomation.net/cloud-data-logger-particle-photon/
- How to save battery life with sleeping over night: https://openhomeautomation.net/esp8266-battery/

# Live Graphing
- Either simply go to http://console.particle.io or 
- index.html is based on https://community.particle.io/t/tutorial-getting-started-with-spark-publish/3422
- index2.html is based on google viz api.
- index3.html is based on http://bl.ocks.org/d3noob/6bd13f974d6516f3e491
- http://nvd3.org
- index4.html is based on https://www.pubnub.com/blog/2015-03-12-creating-realtime-updating-data-visualizations-with-nvd3/

# Device Api

Stream
```
curl "https://api.spark.io/v1/devices/240034001147343339383037/events/?access_token=800efcf08f1f961e4438ece0da1a20bc5ccfb4f4"
:ok


event: humancount
data: {"data":"742","ttl":"60","published_at":"2016-09-19T11:39:46.644Z","coreid":"240034001147343339383037"}
```  

# Development 
```sh

# it watches develop
npm build

# starts the server
npm start
```
