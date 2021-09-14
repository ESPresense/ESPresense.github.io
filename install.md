---
layout: page
title: Install
permalink: /install
---

## Prerequisites

You're going to need the following items:

* [Base Stations](./hardware)
* [Tracking beacons](./beacons)
* [MQTT Server](https://mosquitto.org/)

## Steps

### 1. Install firmware on base station

Just press the install button below with your device connected via usb:

{% include install.html %}

If the serial port is not showing up, your computer might be missing the drivers for the USB serial chip used in your ESP device. These drivers work for most ESP devices:

* CP2102 (square chip): <a href="https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers">driver</a>
* CH341: <a href="https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers">driver</a>

<img src="/images/captive_portal.png" style="float:right;left-margin:20px;width:400px">
### 2. Wifi/MQTT setup on base station

The ESP32 will launch a captive browser (under it's own SSID) on first normal boot after flashing that will allow you to configure:

* WiFi settings
* MQTT settings
* Room name
* Discovery distance

<br style="clear:both;">

### 3. Configure Home Assistant

See the page on [configuring Home Assistant](/home_assistant)

### Troubleshooting

If you're having difficulty getting things set up and work properly, check out the [troubleshooting page](/troubleshooting) before you open an issue. It will help you determine what information you need to provide to identify and fix what's gone wrong.
