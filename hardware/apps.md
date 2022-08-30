---
layout: page
title: Other Methods
permalink: /beacons/other
parent: "Hardware"
---

## Querying

If you can't install an app or Enroll (pair once) to a device you can instead Query it for name, model or manufacturer see (https://espresense.com/configuration/settings#scanning)

## COVID Exposure Tracking

If none of the above is helping you uniquely identity your phone you can install a COVID Exposure tracker app on just the phone you want to track. Those beacons will be shown as `exp:20`. Unfortunetly we cannot use them to unqiuely identify your device **if it is enabled on multiple devices**. BUT, we can use the number of unique `exp:20` ids to count the number of people that are in a room.  Use the [count settings](/configuration/settings#counting) to do this.

