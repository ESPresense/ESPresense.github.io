---
layout: page
title: Beacons
permalink: /beacons
nav_order: 2
has_children: true
---

# Beacons

## Known working

| Name                 | Links                                       | Notes                                                                |
|:---------------------|:--------------------------------------------|:---------------------------------------------------------------------|
| Android Phones       |                                             | [Must install an app](/beacons/android)
| iPhones              |                                             | [Pair to retrieve IRK](/beacons/apple)
| Apple Watches        |                                             | [Use iCloud keychain to get IRK](/beacons/apple)
| Wear OS Smartwatches |                                             | [Must use HA companion app](/beacons/android)
| Tiles                | [amazon](https://amzn.to/3h77T5f)           | These work great, but update somewhat slow
| Blue Charm Beacons   | [amazon](https://amzn.to/2YGdA3w)           | Configure as iBeacon or eddystone, don't enable both at the same time
| Generic BTLE Beacons |                                             | Anything that follows the iBeacon or Eddystone standards
| musegear finder 2    | [musegear](https://shop.musegear-finder.net/collections/finder-2) | Must be connected once with the associated app.
| Whoop strap 3.0      |                                             | Id format: name:whoop-xxxxxxx
| Whoop strap 4.0      |                                             | Id format: name:whoop-xxxxxxx
| Amazfit Band         | [amazon](https://amzn.to/3lArIr0)           | Make sure discoverable is turned on
| Amazfit Bip S        | [amazon](https://amzn.to/3C4DyMK)           |
| Amazfit Bip 3 Pro    | [amazon](https://amzn.asia/d/98vWhnk)       | Use the Zepp app on your paired phone to set the watch to be discoverable
| Amazfit GTS 2 Mini   | [amazon](https://amzn.to/3e6JQom)           |
| Amazfit GTS 4 Mini   | [amazon](https://amzn.to/3nc8CrI)           | Make sure discoverable is turned on
| Amazfit GTR 2e       | [amazon](https://amzn.to/3Awz16C)           |
| Xiaomi Mi Band       | [amazon](https://amzn.to/3E8AJMh)           | Make sure discoverable is turned on
| Innway Wallet Card   | [amazon](https://amzn.to/3Z8Govf)           | Rechargeable iBeacon - no need to use app or activate
| Ultrahuman Ring      | [ultrahuman](https://www.ultrahuman.com/ring/) |
| OpenHaystack-Beacons | [openhaystack-firmware](https://github.com/acalatrava/openhaystack-firmware/tree/main/apps/openhaystack-alternative) | Work outdoors with Apple's FindMy Network and are easily indoor-trackable
| Xiaomi Mi Tags| [Ali Express](https://a.aliexpress.com/_msMm7sS)| If you pair them to the app, simply turn off Bluetooth long enough for it to start beeping, leave it disconnected after.

## Works with caveats

| Name                 | Notes                                                                                                         |
|:---------------------|:--------------------------------------------------------------------------------------------------------------|
| MiFlora plant sensor | Location only
| FitBits              | Only works when not connected to a phone
| Xiaomi Watch         | Only works when not connected to a phone
| HUAWEI Band 6        | Only works when not connected to a phone
| HUAWEI Watch GT2     | Only works when not connected to a phone
| Fi Smart Dog Collar  | Smart Base needs to be powered off or Collars will not beacon
| Gigaset G-Tag        | Only works when not connected to a phone
| Garmin Instinct Solar| [amazon](https://amzn.to/3JF7IeI)           | This only work while using the Broadcast Heart Rate function. It seems to be somewhat slow but usable. I do think that maybe all garmin device with this function will work.

## Known to not work

| Name                | Notes                                                                |
|:--------------------|:---------------------------------------------------------------------|
| Apple AirTags       | We can only count how many are currently not connected to a phone
| Samsung SmartTags   | Randomized mac addresses

### Add to the list

If you have a different BLE-enabled piece of hardware that you have gotten to work with this project, please let us know about it! You can click the edit this page in the footer.
