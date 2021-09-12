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
* Additional [AppDaemon app](https://github.com/ESPresense/ad-espresense-ips) will post process mqtt topics into ips topic (x,y,z) and (latt,long,elevation)
* Firmware bins released w/ auto-updating (use the -noupdate.bin if you don't want this)
* WiFi captive portal for setting up
* Browser based webserial install

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


