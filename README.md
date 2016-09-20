Spark Human Counter

# TLDR
- A small IOT Device (Photon) with a Echo Sensor measures people walking by @ liip.

# Code
- Measuring.cpp is used to be flashed onto the device.

# Install & Run
- npm install -g browser-sync
- npm install webpack -g
- npm install nodemon
- npm i
- npm run build <-- watches develop
- nodemon backend/index.js  <-- starts the server

# Used APIs
- Url to access CM property: https://api.spark.io/v1/devices/240034001147343339383037/cm?access_token=800efcf08f1f961e4438ece0da1a20bc5ccfb4f4
- Url to access human count property: https://api.spark.io/v1/devices/240034001147343339383037/human_count?access_token=800efcf08f1f961e4438ece0da1a20bc5ccfb4f4
- More about the publish URLs https://docs.particle.io/reference/firmware/photon/#particle-publish
- Stream
```
curl "https://api.spark.io/v1/devices/240034001147343339383037/events/?access_token=800efcf08f1f961e4438ece0da1a20bc5ccfb4f4"
:ok


event: humancount
data: {"data":"742","ttl":"60","published_at":"2016-09-19T11:39:46.644Z","coreid":"240034001147343339383037"}
```  

# Ideas or Blogposts
- Idea for Human Count code: https://gist.github.com/petervojtek/55523fe97a6f16891d31
- General Stuff https://docs.particle.io/guide/getting-started/intro/photon/
- https://openhomeautomation.net/cloud-data-logger-particle-photon/
- How to save battery life with sleeping over night: https://openhomeautomation.net/esp8266-battery/

# Live Graphing
- Either simply go to http://console.particle.io or 
- index.html is based on https://community.particle.io/t/tutorial-getting-started-with-spark-publish/3422
- index2.html is based on google viz api. https://developers.google.com/chart/interactive/docs/gallery/gauge

# Admin Pages
- https://console.particle.io/devices
- Login with your credentials from particle but make sure to make an accout first. Then ask plotti to make you part of the project, so I can add your email.

