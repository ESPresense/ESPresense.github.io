---
layout: page
title: Calibration
permalink: /calibration
parent: "Troubleshooting"
---

# Calibration

## Rss@1m seems incorrect

Rss@1m is broadcast in the beacons from `"ibeacon:*,altBeacon:* and eddy:*"` devices.  So if those are not correct you need to fix the beacon to send the correct value.

For all other devices rssi@1m is the setting ![image](https://user-images.githubusercontent.com/1491145/177425627-33ced56c-cc71-4789-91df-0c5fdc826547.png) plus an offset to correct for broadcast power.  See https://github.com/ESPresense/ESPresense/blob/master/lib/BleFingerprint/rssi.h for the exact values.
