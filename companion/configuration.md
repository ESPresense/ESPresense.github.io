---
layout: page
title: Configuration
parent: Companion
nav_order: 2
---

# Configuration

## Example Configuration
You can find a working configuration file here: https://github.com/ESPresense/ESPresense-companion/blob/main/src/config.example.yaml

## GPS Coordinates
Find your home's coordinates:
- **Google Maps**: Search your address and click the street in front of your house
- **Google Earth**: Search your address and hover over your house - coordinates and elevation show in bottom right

## Room Measurement Guide

Start at the **bottom left corner** of your building/area - this serves as the **origin (0,0)**. All measurements are taken from this south-west corner. When plotting, use either clockwise or counter-clockwise direction consistently.

Example measurements (clockwise):

### Room 1
1. Start point: `(0,0)`
2. North wall: `(3,0)` (9 feet/3 meters)
3. East wall: `(3,4)` (12 feet/4 meters)
4. South wall: `(0,4)`

### Room 2
1. Start point: `(3,0)`
2. Width: `(5,0)` (6 feet/2 meters)
3. Depth: `(5,3.5)` (10.5 feet/3.5 meters)
4. Final corner: `(3,3.5)`

## Creating Your Floorplan

There are three ways to create your floorplan:
1. Use [MagicPlan](https://www.magicplan.app/) to create a free home plan
2. Use the [ESPresense Floorplan Creator](https://espresense.com/Floorplan-Creator/) to convert measurements to YAML
3. Directly edit the YAML coordinates in the config file - changes update live thanks to hot reloading

## Node Placement

For optimal device location accuracy:
- Place base station nodes at the corners of your floorplan
- Add an additional node within 1-3 meters
- Aim for 5 fixes minimum - more fixes improve accuracy
- The algorithm prioritizes closest distances (40% weight using gaussian distribution)

## Configuration File

Navigate to `/config/espresense/config.yaml` and configure:

### MQTT Connection
```yaml
# For Home Assistant's MQTT addon
mqtt:
  username: your_username
  password: your_password
  ssl: false

# For external MQTT, also include:
  host: your_host
  port: 1883
```

### GPS Settings
```yaml
gps:
  latitude: your_decimal_latitude
  longitude: your_decimal_longitude
  elevation: your_elevation_in_meters
```

### Floor Configuration
```yaml
floors:
  - id: ground
    name: Ground Floor
    bounds: [[0, 0, 0], [17.2, 18.5, 2.6]]  # Centers your diagram. [[left, bottom, z], [right, top, z]]
```

### Rooms
```yaml
# Paste output from floorplan creator or measure manually
# Rooms are members of one floor, so they go aligned to the bounds of their floor
- name: Livingroom
 points:
  - [6, 12]
  - [8.6, 12]
  - [8.6, 10]
  - [8, 9]
  - [6, 9]
  - [6, 12]

```
Note: you can define 4 or more points depending on the shape of the room. Use clockwise or counter-clockwise order consistently.

### Nodes
```yaml
# Nodes belong to one or more floors, so they are defined as separate yaml node
nodes:
  - name: Master
    point: [3.25, 11, 3.2]
    floors: ["first"]
```
Note: Multiple nodes can be mapped to one room, but each needs a unique name.

### Devices
```yaml
devices:
  # Specific device
  - id: darrels-watch
    name: "Darrell's Watch"

  # Using wildcards
  - id: "tile:*"    # Track all tiles
  - id: "irk:*"     # Track all IRKs
  - id: "apple:*"   # Track all Apple devices
  - id: "ibeacon:*" # Track all iBeacon devices
  - name: "*"       # Track all named devices
```

## Live Updates

The configuration file supports hot reloading, which means:
- Changes to the config file update in real-time
- You can adjust room coordinates and see immediate results
- Fine-tune node positions while watching the effects live
- No need to restart the companion after changes

## Help write this documentation! Click the edit this page below.
