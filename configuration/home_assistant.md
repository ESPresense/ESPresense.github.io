---
layout: page
title: Home Assistant
permalink: /home_assistant
parent: Configuration
---

# Home Assistant

The Home Assistant integration consists of two parts:
1. **node sensors**: each ESP32 appears as a device automatically (because MQTT auto discovery), including entities to set max distance and disable/enable active scan or query
2. **beacons**: define each beacon in `configuration.yaml` (using [mqtt_room integration](https://www.home-assistant.io/integrations/mqtt_room/))

### beacons: MQTT device topics

Once the ESP32 is running, it is important to configure Home Assistant to use the information from the MQTT topic to determine what devices to track. You can read the full documentation [on the Home Assistant website](https://www.home-assistant.io/components/sensor.mqtt_room/). It is critical that you configure your device IDs to match the device fingerprint found by ESPresence (e.g. `apple:1007:11-12`).

#### connect to ESP32

The easiest way to find the fingerprint is to connect the usb cable and monitor the serial port (115200 baud) while bringing a device close to the ESP32. To monitor the serial port you can use the [ESPresense terminal](https://espresense.com/terminal).
Alternatives: e.g. Arduino monitor function, the `PlatformIO` VSCode [extension](https://diyprojects.io/install-ide-platformio-extension-visual-studio-code-vscode-windows-32-bit-linux/#.YTmXNNMzYZ8) or via platform io ``pio  run --target monitor``.

You should see output similar to the following:

```terminal
--- Miniterm on /dev/cu.usbserial-39522517AB  115200,8,N,1 ---
--- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H ---
0 New   | MAC: 67dc0c979510, ID: apple:0c0e:26
0 New   | MAC: 14dc290e58f2, ID: apple:0a01:5
1 Close | MAC: 4277f2521053, ID: apple:1007:11-12
```

The `Close` message will show which devices are under half a meter away. Once you move the device > 1m you will see a `Left` message.

#### monitor MQTT topics

Alternatively, you can monitor the MQTT topics using e.g. [MQTT Explorer](http://mqtt-explorer.com/).
Connect to the Home Assistant MQTT broker (same configuration as used for the ESPresence sensor setup).
This groups + shows the `rooms` and `devices`.

### MQTT auto discovery

ESPresense supports [MQTT auto discovery](https://www.home-assistant.io/docs/mqtt/discovery/), which is enabled by default in Home Assistant.
This means a device + entities for each ESP32 sensor will automatically be created.

They appear as device + entities in Mosquitto broker card on the **integrations** page.

[![Open your Home Assistant instance and show your integrations.](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

And available in the **devices** overview.

[![Open your Home Assistant instance and show your devices.](https://my.home-assistant.io/badges/devices.svg)](https://my.home-assistant.io/redirect/devices/)

### beacons: configuration.yaml

Each beacon that should be monitored in Home Assistant needs to be added to the `configuration.yaml` file.

```yaml
sensor:
# One entry for each beacon you want to track
  - platform: mqtt_room
    device_id: "apple:1007:11-12"
    name: 'Darrell Watch'
    state_topic: 'espresense/rooms'
    timeout: 60
    away_timeout: 120 # number of seconds after which the enitity will get status not_home
```

### screenshots

#### MQTT ESP32 Device

<img width="1033" alt="PNG image" src="https://user-images.githubusercontent.com/2084872/150005629-b080bf83-7eed-458d-8c91-808deb568e61.png">

#### beacon: MQTT room sensor in the lovelace UI

![Mqtt Room sensor](/images/mqtt_room_sensor.png)

#### ESP32 sensor: binary sensor with telemetry in the lovelace UI

![Binary sensor with telemetry](/images/binary_sensor_with_telemetry.png)

### sensors: manual configuration

Normally not needed, but in case [MQTT auto discovery](https://www.home-assistant.io/docs/mqtt/discovery/) is disabled, it is possible to manually add a `binary_sensor` for the ESP32 sensor.
Note: this does not add the entities that are normally added automatically: set max distance, active scan, query.

```yaml
binary_sensor:
# One entry per sensor node
  - platform: mqtt
    name: Dining Mqtt Room
    state_topic: espresense/rooms/dining/status # use the MQTT topic for the room
    json_attributes_topic: espresense/rooms/living/telemetry
    payload_on: online
    payload_off: offline
    device_class: connectivity
```

### Configuration via MQTT topics

If you end up deploying a fleet of ESP32s in your home, it can quickly become painful to go to each device to update settings.

You can use tools like MQTT explorer or if you are using mosquitto (default for HA), the mosquitto_sub and mosquitto_pub tools to view and manage the settings.

```mosquitto_sub -h homeassistant.local -u <username> -P <password> -i presensce-information -v -t "espresense/rooms/kitchen/#"
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
```mosquitto_pub -h homeassistant.local -u <username> -P <password> -i presensce-information -t "espresense/rooms/kitchen/auto_update/set" -m "ON" -d```

You can use a bash script to update settings for your whole fleet
```bash
myArray=("kitchen" "family_room" "study" "media_room" "living_room" "master_bedroom" "master_bathroom")

for str in ${myArray[@]}; do
  echo $str
  mosquitto_pub -h homeassistant.local -u <username> -P <password> \
    -i presensce-information -t "espresense/rooms/$str/include/set" -m "apple:bbbyyyy iBeacon:44445555" -d
  mosquitto_pub -h homeassistant.local -u <username> -P <password> \
    -i presensce-information -t "espresense/rooms/$str/restart/set" -m "PRESS" -d
done
```
