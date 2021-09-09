---
layout: page
title: Home Assistant Configuration
permalink: /home_assistant
---

Once the ESP32 is running, it is important to configure Home Assistant to use the information from the MQTT topic to determine what devices to track. You can read the full documentation [on the Home Assistant website](https://www.home-assistant.io/components/sensor.mqtt_room/). It is critical that you configure your device IDs to match the device fingerprint found by ESPresence.  The easiest way to find it is to connect the usb cable and monitor the serial port (115200 baud) while bringing a device close to the ESP32.  To monitor the serial port you can use Ardiuno monitor function, the `PlatformIO` VSCode [extension](https://diyprojects.io/install-ide-platformio-extension-visual-studio-code-vscode-windows-32-bit-linux/#.YTmXNNMzYZ8) or via platform io ``pio  run --target monitor``.  You should see output similar to the following:

```terminal
--- Miniterm on /dev/cu.usbserial-39522517AB  115200,8,N,1 ---
--- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H ---
0 New   | MAC: 67dc0c979510, ID: apple:0c0e:26
0 New   | MAC: 14dc290e58f2, ID: apple:0a01:5
1 Close | MAC: 4277f2521053, ID: apple:1007:11-12
```

The Close message will show which devices are under half a meter away.  Once you move the device > 1m you will see a left message.  Just use the ID shown to configure below:

### configuration.yaml

Here is an example of how an entry into your `configuration.yaml` file should look:

```yaml
sensor:
# One entry for each beacon you want to track
  - platform: mqtt_room
    device_id: "apple:1007:11-12"
    name: 'ESPresense Presence'
    state_topic: 'espresense/rooms'
    timeout: 60
    away_timeout: 120

binary_sensor:
# One entry per sensor node
  - platform: mqtt
    name: Living Mqtt Room
    state_topic: espresense/rooms/living/status
    json_attributes_topic: espresense/rooms/living/telemetry
    payload_on: online
    payload_off: offline
    device_class: connectivity
```

#### Binary sensor with telemetry in the lovelace UI

![Binary sensor with telemetry](/images/binary_sensor_with_telemetry.png)

#### Mqtt room sensor in the lovelace UI

![Mqtt Room sensor](/images/mqtt_room_sensor.png)
