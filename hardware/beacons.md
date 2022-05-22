---
layout: page
title: Beacons
permalink: /beacons
parent: Hardware
nav_order: 2
---

## Known working trackable beacons

| Name                 | Supported | Links                                       | Notes                                                                |
|:---------------------|:---------:|:--------------------------------------------|:---------------------------------------------------------------------|
| Android Phones       | Yes       |                                             | [Must install an app](/beacons/apps)
| iPhones              | Yes *     |                                             | [continuity fingerprints,exposure or room-assistant app](/beacons/apps)
| Apple Watches        | Yes *     |                                             | [Must use continuity fingerprints](/beacons/apps)
| Tiles                | Yes       | [amazon](https://amzn.to/3h77T5f)           | These work great, but update slower
| Blue Charm Beacons   | Yes       | [amazon](https://amzn.to/2YGdA3w)           | Configure as iBeacon or eddystone, don't enable both at the same time
| MiBand               | 2,5,6 *   | [amazon](https://amzn.to/3E8AJMh)           | Make sure discoverable is turned on
| Amazfit Bip S        | Yes       | [amazon](https://amzn.to/3C4DyMK)           |
| Amazfit GTS 2 Mini   | Yes       | [amazon](https://www.amazon.com/dp/B08PCYKXV5?psc=1&ref=ppx_yo2ov_dt_b_product_details)  |
| Puck-JS              | Yes       | [espruino](https://www.espruino.com/Puck.js)| If programmed to [broadcast beacon packets](https://gist.github.com/jptrsn/d6cb9b9cdbcd41f3500708f8b694cad2)
| Generic BTLE Beacons | Yes       |                                             | Anything that follows the iBeacon or Eddystone standards
| MiFlora plant sensor | Yes *     |                                             | Location only
| Samsung smart tags   | Beta      |                                             | Needs more testing to know if id will be stable long term

`* = with caveats`

## Known to not work

| Name                | Notes                                                                |
|:--------------------|:---------------------------------------------------------------------|
| FitBits             | Only works well when not connected to app
| Xiaomi Watch        | Only works well when not connected to app
| Apple AirTags       | Doesn't work, privacy is similar to exp tokens
| HUAWEI Band 6       | Only works when not connected to a phone
| Huawei Watch GT2    | Only works when not connected to a phone

### Add to the list

If you have a different BLE-enabled piece of hardware that you have gotten to work with this project, please let us know about it! You can click the edit this page in the footer.
