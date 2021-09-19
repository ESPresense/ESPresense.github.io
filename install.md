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

You can either proceed with the automatic firmware installation via your webbrowser below or refer to the manual installation instructions.

#### 1.1 Automatic installation via Browser

Just press the install button below with your device connected via usb:

{% include install.html %}

If the serial port is not showing up, your computer might be missing the drivers for the USB serial chip used in your ESP device. These drivers work for most ESP devices:

* CP2102 (square chip): <a href="https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers">driver</a>
* CH341: <a href="https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers">driver</a>

<img src="/images/captive_portal.png" style="float:right;left-margin:20px;width:400px">

#### 1.2 Manual installation

- Download the <a href="https://github.com/ESPresense/ESPresense/releases">latest released firmware</a> for your ESP device
- Download one of the following tools to write the firmware to your ESP device:
  - <a href="https://github.com/espressif/esptool">esptool.py</a> or <a href="https://github.com/esphome/esphome-flasher">ESPHome-Flasher</a> - we're going to use ESPHome-Flasher here (Mac-Users, please take note of <a href="https://github.com/esphome/esphome-flasher/issues/26#issuecomment-671061140">this bug</a> *first*!)
- Connect your ESP device to your computer
- Start ESPHome-Flasher
- Select the appropiate serial port (should be automatically detected)
- Click "View Logs"
- Start flashing via the "Flash ESP" button

After the flash completed successfully, you should see the SSID you're supposed to connect to in the next step on one of the last lines in the Console window:



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
