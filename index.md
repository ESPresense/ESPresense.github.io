---
layout: page
title: Home
permalink: /
---

An ESP32 based presence detection node for use with the [Home Assistant](https://www.home-assistant.io/) [`mqtt_room` component](https://www.home-assistant.io/components/sensor.mqtt_room/) for localized device presence detection. This is a Fork/rewrite of [ESP32-room-assistant](https://jptrsn.github.io/ESP32-mqtt-room).

![Beacon Flow](./images/beacon_flow.jpg)

## Differences from ESP32-room-assistant

* Uses a fingerprint instead of mac addresses so we can track randomized mac devices (like Apple Watches and iOS devices)
* Fully supports using Tiles as trackers
* Filters rssi via a 3 value median filter with a Kalman filter on top
* Fully multithreaded, uses constant BLE scanning
* Additional [AppDaemon app](https://github.com/ESPresense/ad-espresense-ips) that attempts to solve indoor position (x,y,z) with multiple ESPresense stations using multilateralization.
* Firmware bins released w/ auto-updating (with a preference if you don't want this)
* WiFi captive portal for setting up
* Browser based webserial install

## Getting Started

<iframe width="560" height="315" src="https://www.youtube.com/embed/7bfW_6130To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

You're going to need the following items:

* [Base Stations](./hardware)
* [Tracking beacons](./beacons)
* [MQTT Server](https://mosquitto.org/)

## Installation

Check out the [installation page](install)

## Troubleshooting

If you're having difficulty getting things set up and work properly, check out the [troubleshooting page](/troubleshooting) before you open an issue. It will help you determine what information you need to provide to identify and fix what's gone wrong.

## Release Notes

View the [changelog here](https://github.com/ESPresense/ESPresense/blob/master/CHANGELOG.md).

## Credits

This depends heavily on the hard work done by a number of people.
* **ESP32-room-assistant** [(GitHub)](https://jptrsn.github.io/ESP32-mqtt-room/index.html#credits).  All credit for the intial codebase goes to him!
* **Web Serial Terminal** [(Github)](https://github.com/rafaelaroca/web-serial-terminal) - Very nice terminal using web serial
* **pcbreflux** [(GitHub)](https://github.com/pcbreflux) [(YouTube)](https://www.youtube.com/channel/UCvsMfEoIu_ZdBIgQVcY_AZA) - this code takes heavy inspiration from [ESP32_BLE_beaconscan](https://github.com/pcbreflux/espressif/tree/master/esp32/arduino/sketchbook/ESP32_BLE_beaconscan)
* **Neil Kolban** [(GitHub)](https://github.com/nkolban) [(YouTube)](https://www.youtube.com/channel/UChKn_BlaVrMrhEquPNI6HuQ) - provided the [Bluetooth low enery libraries](https://github.com/nkolban/esp32-snippets) used
* **Marvin Roger** [(GitHub)](https://github.com/marvinroger) - provided the [Async MQTT library](http://marvinroger.viewdocs.io/async-mqtt-client/)
* **Benoit Blanchon** [(GitHub)](https://github.com/bblanchon) [(YouTube)](https://www.youtube.com/channel/UC8HZRqN4wfytHfRGMLUQWkQ) - provided the [Arduino JSON library](https://arduinojson.org/)
* **Me No Dev** [(GitHub)](https://github.com/me-no-dev) - provided the [Async TCP library](https://github.com/me-no-dev/AsyncTCP)
* **Kyle Gordon** [(GitHub)](https://github.com/kylegordon) - wrote the necessary code for PlatformIO support


