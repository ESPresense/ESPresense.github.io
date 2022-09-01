---
layout: page
title: Home
permalink: /
nav_order: 0
---

# Home

An ESP32 based presence detection node for use with the [Home Assistant](https://www.home-assistant.io/) [`mqtt_room` component](https://www.home-assistant.io/components/sensor.mqtt_room/) for localized device presence detection. This is a fork/rewrite of [ESP32-mqtt-room](https://jptrsn.github.io/ESP32-mqtt-room).

* ESP32 base stations are cheaper and easier to use than Rasberry Pis
* Extensive fingerprint based ids instead of mac addresses so we can track or count things others can't
* IRK based enrollment of Apple devices to passively uniquely locate even with private random addresses
* Home Assistant MQTT Discovery for easy HA configuration
* Auto-updates by downloading github released bin (with a preference if you don't want this)
* Filters measured distance with both a median prefilter and a 1Euro filter (reduces jitter for more accuracy)

## Required

* [Base Stations](./base-stations)
* [Beacons/Phones/Watches](./beacons)
* [MQTT Server](https://mosquitto.org/)

## Optional

* [Sensors](./sensors)

## Troubleshooting

If you're having difficulty getting things set up and work properly, check out the [troubleshooting page](/troubleshooting) before you open an issue. It will help you determine what information you need to provide to identify and fix what's gone wrong.

## Credits

This depends heavily on the hard work done by a [number of people](/credits)
