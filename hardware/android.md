---
layout: page
title: Android devices
permalink: /beacons/android
parent: "Hardware"
---

### Why an App?

Android devices are typically tight lipped and need an app to get them to emit BLE advertisements. Thus, the need for an app to allow us to find it.

## Android apps

| App Name         | Supported       | Links                                                                                                                                                                                                       | Notes |
|:-----------------|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------|
| HA Companion App | Yes/Recommended | [Playstore](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android&hl=en_GB&gl=US) / [HA Documentation](https://companion.home-assistant.io/docs/core/sensors/#bluetooth-sensors) | Requires Home Assistant |
| Beacon Scope     | Yes             | [Playstore](https://play.google.com/store/apps/details?id=com.davidgyoungtech.beaconscanner)                                                                                                                | Standalone App |
| Beacon Simulator | Yes             | [Playstore](https://play.google.com/store/apps/details?id=net.alea.beaconsimulator)                                                                                                                         | Standalone App |

## COVID Exposure Tracking

If none of the above is helping you uniquely identity your phone you can install a COVID Exposure tracker app on just the phone you want to track. Those beacons will be shown as `exp:20`. Unfortunetly we cannot use them to unqiuely identify your device **if it is enabled on multiple devices**. BUT, we can use the number of unique `exp:20` ids to count the number of people that are in a room.  Use the [count settings](/configuration/settings#counting) to do this.

### Add to the list

If you have a different BLE-enabled piece of hardware that you have gotten to work with this project, please let us know about it! You can click the edit this page in the footer.
