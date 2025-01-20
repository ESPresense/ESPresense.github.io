---
layout: page
title: Initial Settings
permalink: /configuration/initial-settings
parent: "Configuration"
nav_order: 1
---

# Initial Settings

The ESP32 will launch a captive browser (under its own SSID) on first normal boot after flashing that will allow you to configure initial settings.

<div class="clearfix" markdown=1>

<img src="/images/settings_screenshot.png" alt="Screenshot of ESP32 initial settings interface" style="float:right;margin-left:20px;width:200px">

## Main Configuration

* Language - Select your preferred interface language
* Room name - This is the name that will identify this sensor in Home Assistant, as well as the state of mqtt_room sensor. Use a upper/lower word and we'll slugify it for the places that need that
* Seconds to wait for WiFi before captive portal (-1 = forever)
* Seconds to wait in captive portal before rebooting
* Ethernet Type - Select your ethernet connection type if applicable

## MQTT Settings

* Server / Port - non encrypted mqtt server (SSL is *NOT* supported)
* Username / Password - Optional. Note: Since MQTT connections are unencrypted, these credentials will be transmitted in plaintext. Consider using these only in trusted networks.
* Send to:
  * Discovery topic - enables home assistant mqtt topic (/homeassistant)
  * Home Assistant discovery topic prefix - customize the discovery topic prefix
  * Telemetry topic - enables stats about availability also used by counting
  * Rooms topic - traditional mqtt_room topic
  * Devices topic - instead of all mashed together topic, this adds a device to the path (much easier to understand in mqtt explorer)

## Updating

* Automatically update - If enabled we'll ask github for the latest version and if it's not the same version as current update to it
* Include pre-released - Modifies the above check to include pre-releases
* Arduino OTA Update - If enabled you can remotely flash this device using the standard (espota/arduino) protocol. Keep disabled for less memory usage, and security.

For additional configuration options like scanning, counting, filtering, calibration, and more, see the [Settings](settings) page.

</div>
