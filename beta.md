---
layout: page
title: Beta
permalink: /beta
nav_exclude: true
---

# Beta

You can either proceed with the automatic firmware installation via your webbrowser below or refer to the manual installation instructions.

## Automatic installation via Browser

Just press the Connect button below with your device connected via usb:

{% include firmware.html %}

## Manual installation

<div class="clearfix" markdown=1>

<img src="/images/esphome-flasher_mac.jpg" class="clearfix" style="float:right;margin-left:20px;width:400px">

* Download the <a href="https://github.com/ESPresense/ESPresense/releases">latest released firmware</a> for your ESP device
* Download one of the following tools to write the firmware to your ESP device:
* <a href="https://github.com/espressif/esptool">esptool.py</a> or <a href="https://github.com/esphome/esphome-flasher">ESPHome-Flasher</a> - we're going to use ESPHome-Flasher here (Mac-Users, please take note of <a href="https://github.com/esphome/esphome-flasher/issues/26#issuecomment-671061140">this bug</a> *first*!)
* Connect your ESP device to your computer
* Start ESPHome-Flasher
* Select the appropiate serial port (should be automatically detected)
* Click "View Logs"
* Start flashing via the "Flash ESP" button

If the serial port is not showing up, your computer might be missing the drivers for the USB serial chip used in your ESP device. These drivers work for most ESP devices:

* CP2102 (square chip): <a href="https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers">driver</a>
* CH341: <a href="https://github.com/nodemcu/nodemcu-devkit/tree/master/Drivers">driver</a>

</div>

## After flashing

After the flash completed successfully, you should see the SSID you're supposed to connect to in the next step on one of the last lines in the Console window. Once you've connected to the configuration portal see [here](/configuration/portal) to configure it.
