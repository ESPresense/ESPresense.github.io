---
layout: page
title: Companion
permalink: /companion
nav_order: 99
---

# Companion

ESPresense Companion attempts to locate your Bluetooth Low Energy (BLE) items in the floorplan of your house. It also allows you to manage ESPresense nodes and settings.

## How to Use

ESPresense Companion provides a visual representation of your devices' locations within your house and helps troubleshoot ESPresense settings to improve automation trigger accuracy.

The more accurate your house plan and the more base stations you include, the higher the location accuracy will be.

### Find Your Home's GPS Coordinates
You can easily find coordinates using Google Maps or Google Earth:
- Google Maps: Search for your address and click on the street in front of your house to get latitude and longitude
- Google Earth: Search for your address and hover your mouse over your house - coordinates and elevation will display in the bottom right

### Draw Out Your House
You'll need accurate interior dimensions for best results. There are several options:
1. Create a free home plan using [MagicPlan](https://www.magicplan.app/)
2. Use the [ESPresense Floorplan Creator](https://espresense.com/Floorplan-Creator/) to convert your measurements into YAML format
3. Directly edit the YAML coordinates in the config file - the website will update in real-time thanks to hot reloading, allowing you to fine-tune your floorplan live

After using any of these methods, you'll want to save your YAML configuration. If using the Floorplan Creator, click "Convert to YAML Code" and save the generated code.

### Setup MQTT
ESPresense and ESPresense Companion require MQTT to function. If you haven't set up MQTT yet:
1. Install and configure [Mosquitto](https://mosquitto.org/)
2. Note your MQTT host, port (default 1883), username, and password
3. If using Home Assistant's MQTT addon, Companion will use those settings automatically
4. Ensure MQTT Discovery is enabled ("auto-discovered") or you'll need to manually configure MQTT settings

### Install ESPresense Companion
1. Add this repository to your Home Assistant add-on store: `https://github.com/ESPresense/hassio-addons`
2. Reload the add-on store
3. Find and install ESPresense Companion
4. Don't start the add-on yet - configure it first

### Edit Config File
Navigate to `/config/espresense/config.yaml` and configure:

MQTT Connection:
- For Home Assistant's MQTT addon: Only username and password needed
- For external MQTT: Include host and port
- Set SSL to false

GPS Settings:
- Enter latitude and longitude in decimal format
- Enter elevation in meters

Floor Configuration:
- Set ID and name as desired
- Bounds: First three numbers are left/bottom starting points, second three are top/right endpoints
- These bounds center your diagram

Rooms:
- Paste the YAML from the floorplan creator

Nodes:
- List each base station's approximate location
- Each node needs a unique name
- Multiple nodes can be mapped to one room

Devices:
```yaml
- id: darrels-watch
  name: "Darrell's Watch"
```

Use wildcards to include multiple devices:
```yaml
- id: "tile:*"    # Track all tiles
- id: "irk:*"     # Track all IRKs
- id: "apple:*"   # Track all Apple devices
- id: "ibeacon:*" # Track all iBeacon devices
- name: "*"       # Track all named devices
```

## Help write this documentation!  Click the edit this page below.