---
layout: page
title: Companion
permalink: /companion
---

# Companion

![GitHub release (latest by date)](https://img.shields.io/github/v/release/ESPresense/ESPresense-companion)
![Docker Pulls](https://badgen.net/docker/pulls/espresense/espresense-companion)

The ESPresense-companion attempts to locate your Bluetooth Low Energy (BLE) items in the floorplan of your house. It also allows you to manage ESPresense nodes.

![image](https://user-images.githubusercontent.com/1491145/208942192-d8716e50-c822-48a7-a6d3-46b53ab9373e.png)

## Quick Start
1. [Install ESPresense Companion](/companion/installation)
2. [Configure your floorplan](/companion/configuration)
3. Place nodes at room corners plus one nearby (1-3m)
4. Set node maximum distance to zero using:
   ```markdown
   key: espresense/rooms/*/max_distance/set
   value: 0
   ```
5. Fine tune by hovering over devices and adjusting RSS@1m values

## Need Help?
Check our [Troubleshooting Guide](/companion/troubleshooting) or contribute to this documentation by clicking "Edit this page" below.