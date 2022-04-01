---
layout: page
title: Beacon Apps
permalink: /beacons/apps
parent: "Hardware"
---

### Why an App?

Both Android and iPhone use a strategy of Bluetooth LE MAC address randomization for privacy. While this may not be a perfect solution, it means that the publicly-available bluetooth MAC address of your phone won't be consistent. Thus, the need for an app to allow us to find the phone.

## iOS / Watch OS Continuity Fingerprints

Apples devices emit various [btle continuity](https://github.com/furiousMAC/continuity) messages. The most useful one is is the nearby info. The first byte is 0x10, the next byte is the length. I've found different devices often have a slightly different lengths, and some devices have a different txPower. The fingerprint `apple:100?:*-*` is often the one seen. Watches are usually obvious with a lower lengths and low txPower. Unfortunately if your household has many iPhones, eventually the nearby info will start to collide and lead to duplicate fingerprints.

# iOS apps

| App Name         | Supported       | Links                                                                                                                                                                                                       | Notes |
|:-----------------|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------|
| HA Companion App | No              | [Appstore](https://apps.apple.com/us/app/home-assistant/id1099568401) | Only Android Does Beacon Broadcasting
| Room Assistant   | Yes *           | [Appstore](https://apps.apple.com/us/app/room-assistant/id1538642237) | Works, but deselect Auto-Toggle Visibility, also is more reliable if query is enabled |

## Android apps

| App Name         | Supported       | Links                                                                                                                                                                                                       | Notes |
|:-----------------|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------|
| HA Companion App | Yes/Recommended | [Playstore](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android&hl=en_GB&gl=US) / [HA Documentation](https://companion.home-assistant.io/docs/core/sensors/#bluetooth-sensors) | Requires Home Assistant |
| Beacon Scope     | Yes             | [Playstore](https://play.google.com/store/apps/details?id=com.davidgyoungtech.beaconscanner)                                                                                                                 | Standalone App |
| Beacon Simulator | Yes             | [Playstore](https://play.google.com/store/apps/details?id=net.alea.beaconsimulator)                                                                                                                         | Standalone App |
## COVID Exposure Tracking

If none of the above is helping you uniquely identity your phone you can install a COVID Exposure tracker app on just the phone you want to track. Those beacons will be shown as `exp:20`. Unfortunetly we cannot use them to unqiuely identify your device **if it is enabled on multiple devices**. BUT, we can use the number of unique `exp:20` ids to count the number of people that are in a room.  Use the (count functions)[/configuration/settings#counting] to do this.

### Add to the list

If you have a different BLE-enabled piece of hardware that you have gotten to work with this project, please let us know about it! You can click the edit this page in the footer.
