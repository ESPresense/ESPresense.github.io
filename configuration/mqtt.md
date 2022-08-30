---
layout: page
title: MQTT
permalink: /configuration/mqtt
parent: "Configuration"
nav_order: 99
---

# Configuration via MQTT

If you end up deploying a fleet of ESP32s in your home, it can quickly become painful to go to each device to update settings.

You can use tools like MQTT explorer or if you are using mosquitto (default for HA), the mosquitto_sub and mosquitto_pub tools to view and manage the settings.

```bash
mosquitto_sub -h homeassistant.local -u <username> -P <password> -i presensce-information -v -t "espresense/rooms/kitchen/#"
espresense/rooms/study/status online
espresense/rooms/study/max_distance 10.00
espresense/rooms/study/absorption 3.50
espresense/rooms/study/include apple:aaaayyyy iBeacon:232323
espresense/rooms/study/exclude sonos:xxxx sonos:yyyy
espresense/rooms/study/status_led ON
espresense/rooms/study/ota_update OFF
espresense/rooms/study/auto_update OFF
espresense/rooms/study/prerelease OFF
espresense/rooms/study/active_scan OFF
espresense/rooms/study/arduino_ota OFF
```

You can update the configuration for any of the above topics by publishing to the /set endpoint for each topic like so:
```bash
mosquitto_pub -h homeassistant.local -u <username> -P <password> -i presensce-information -t "espresense/rooms/kitchen/auto_update/set" -m "ON" -d
```

You can use a room of `*` to update all ESPresense base stations at the same time.  If you retain that setting even NEW nodes will upon startup get that configuration set.
