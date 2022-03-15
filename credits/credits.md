---
layout: page
title: Credits
permalink: /credits
nav_order: 999
---

# Credits

## Fork of ESP32-mqtt-room

ESPresense is a fork/rewrite of [ESP32-mqtt-room](https://jptrsn.github.io/ESP32-mqtt-room).

### Differences

* SUPER Easy Browser based installation
* Captive portal for easy WiFi setup
* Home Assistant MQTT Discovery for easy HA configuration
* Auto-updates by downloading github released bin (with a preference if you don't want this)
* Uses a fingerprint instead of mac addresses so we can track randomized mac devices (like Apple Watches and iOS devices)
* Filters measured distance with botah a median prefilter and a Kalman filter (reduces jitter for more accuracy)
* Fully multithreaded, uses constant BLE scanning, doesn't disable wdt (more reliable)
* Additional [AppDaemon app](https://github.com/ESPresense/ad-espresense-ips) that attempts to solve indoor position (x,y,z) with multiple ESPresense stations using multilateralization.

## Libraries Used

ESPresense depends heavily on the hard work done by a number of people:

* **ESP32-room-assistant** [(GitHub)](https://jptrsn.github.io/ESP32-mqtt-room/index.html#credits).  All credit for the intial codebase goes to him!
* **Web Serial Terminal** [(Github)](https://github.com/rafaelaroca/web-serial-terminal) - Very nice terminal using web serial
* **Marvin Roger** [(GitHub)](https://github.com/marvinroger) - provided the [Async MQTT library](http://marvinroger.viewdocs.io/async-mqtt-client/)
* **Benoit Blanchon** [(GitHub)](https://github.com/bblanchon) [(YouTube)](https://www.youtube.com/channel/UC8HZRqN4wfytHfRGMLUQWkQ) - provided the [Arduino JSON library](https://arduinojson.org/)
