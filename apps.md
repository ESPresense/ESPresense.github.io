---
layout: page
title: Tracking Randomized MAC Devices
permalink: /beacons/apps
---

### Why an App?

Both Android and iPhone use a strategy of Bluetooth MAC address randomization for privacy. While this may not be a perfect solution, it means that the publicly-available bluetooth MAC address of your phone won't be consistent to devices with which it has not been paired. As we're using Bluetooth Low Energy to scan, we don't want to pair the device. Thus, the need for an app to allow us to track, except for the 2 options below.

## iOS / Watch OS Fingerprints

Apples devices emit various [btle continuity](https://github.com/furiousMAC/continuity) messages. The most useful one is is the nearby info. The first byte is 0x10, the next byte is the length. I've found different devices often have a slightly different lengths, and some devices have a different txPower. The fingerprint `apple:100?:*-*` is often the one seen. Watches are usually obvious with a lower lengths and low txPower.  Unfortunately if your household has many iPhones, eventually the nearby info will start to collide and lead to duplicate fingerprints.

## COVID Exposure Tracking

If none of the above is helping you uniquely identity your phone you can install a COVID Exposure tracker app on just the phone you want to track. Those beacons will be shown as `exp:20`. Unfortunetly we cannot use them to unqiuely identify your device **if it is enabled on multiple devices**. BUT, we could use the number of unique `exp:20` teks to count the number of people that are in a room. A future AppDaemon app I'd like to build would count them up so you could do automations based on the number of people in a room.

## Android beacon broadcasting apps

| App Name         | Tested          | Links                                                                                                                                                                                                       | Notes |
|:-----------------|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------|
| Beacon Scope     | Limited Testing | [Playstore](https://play.google.com/store/apps/details?id=com.davidgyoungtech.beaconscanner)                                                                                                                | Standalone App |
| Beacon Simulator | Limited Testing | [Playstore](https://play.google.com/store/apps/details?id=net.alea.beaconsimulator)                                                                                                                         | Standalone App |
| HA Companion App | Limited Testing | [Appstore](https://apps.apple.com/us/app/home-assistant/id1099568401?itsct=apps_box_badge&itscg=30200) / [Playstore](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android&hl=en_GB&gl=US) / [HA Documentation](https://companion.home-assistant.io/docs/core/sensors/#bluetooth-sensors) | Requires Home Assistant, Only Android Does Beacon Broadcasting |

*Note: This is not an exhaustive list, if you have any futher recommendations or experience with these or any other beacon broadcasting apps and want to contribute please let us know about it. You can [open an issue](https://github.com/ESPresense/ESPresense/issues/new) or just submit a pull request to update the [documentation](https://github.com/ESPresense/ESPresense.github.io) right in the repository!*

<img src="/images/beacon_scope_android.jpg" style="float:right;margin:24px;width:200px">
I have the best results from the [Beacon Scope](https://play.google.com/store/apps/details?id=com.davidgyoungtech.beaconscanner) app. You may also want to try [Beacon Simulator](https://play.google.com/store/apps/details?id=net.alea.beaconsimulator), although I've experienced some issues with it. Home Assistant recently released the ability to broadcast beacons via their [Home Assistant Companion App](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android), this method hasn't been tested throughly but is another option you can try.

### Beacon Scope - Setup

You can use any iBeacon UUID in the app. Whatever you choose, ensure that it matches exactly with your entry in the Home Assistant configuration, including both the `major` and `minor` version numbers. An example phone configuration could be:

```terminal
device ID: 2ec29f7da28e45eeadf491713bbe7948
major version number: 1
minor version number: 0
```

and the corresponding Home Assistant configuration would be:

```yaml
- platform: mqtt_room
  device_id: "2ec29f7da28e45eeadf491713bbe7948-1-0"
  name: 'Phone bt_room'
  state_topic: 'room_presence'
  timeout: 10
  away_timeout: 15
```

### Known Issues

With the release of advanced battery management, Android now has a habit of killing background processes. This means that you may not be able to track your phone consistently. I have yet to find a solution for this problem - if you know of one, please open an issue.

### Troubleshooting

See the [troubleshooting page](/troubleshooting) for some strategies to help debug problems.

### Add to the list

If you have a different BLE-enabled piece of hardware that you have gotten to work with this project, please let us know about it! You can [open an issue](https://github.com/ESPresense/ESPresense/issues/new) or just submit a pull request to update the [documentation](https://github.com/ESPresense/ESPresense.github.io) right in the repository!
