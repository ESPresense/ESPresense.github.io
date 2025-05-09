---
layout: page
title: Configuration
parent: Companion
nav_order: 2
---

# Configuration

## Example Configuration
You can find an example configuration file [here](https://github.com/ESPresense/ESPresense-companion/blob/main/src/config.example.yaml)

## GPS Coordinates
Find your home's coordinates:
- **Google Maps**: Search your address and click the street in front of your house
- **Google Earth**: Search your address and hover over your house - coordinates and elevation show in bottom right

## Room Measurement Guide

Start at the **bottom-left corner** of your building/area - this serves as the **origin (0,0)**. All measurements are taken from this corner. When plotting, use either clockwise or counter-clockwise direction consistently. If you prefer, you can start from any corner of your building, but you will need to remember to set the correcponding option in the map settings.

### Example measurements (clockwise, using north as an example orientation, 2 rooms in a 3m * 8m house):
Note: All measurements are required to be in meters

#### Room 1
1. Start point(North East Corner): `(0,0)`
2. North wall (North West Corner): `(3,0)` (3 meters (9 feet))
3. East wall (South West Corner):  `(3,4)` (4 meters (12 feet))
4. South wall (South East Corner): `(0,4)`
5. West wall is automatically connected between last and first corner

#### Room 2
1. Start point(North East Corner): `(0,4)`
2. North wall (North West Corner): `(3,4)` (3 meters (9 feet))
3. East wall (South West Corner):  `(3,8)` (4 meters (12 feet))
4. South wall (South East Corner): `(0,8)`
5. West wall is automatically connected between last and first corner

### Example with a fireplace on the 2nd wall and 2 alcoves:

#### Room
1. Start point: `(0,0)`
2. Width: `(5,0)` (2 meters (6 feet))
3.   ┘ corner `(5,1)`
4. ┌ corner `(4.5,1)`
5. └ corner `(4.5,3)`
6.   ┐ corner `(5,3)`
7. Depth: `(5,3.5)` (3.5 meters (10.5 feet))
8. Final corner: `(0,3.5)`
9. Last wall is automatically connected between last and first corner

## Creating Your Floorplan

There are three ways to create your floor plan:
1. Use [MagicPlan](https://www.magicplan.app/) to create a free home plan
2. Use the [ESPresense Floorplan Creator](https://espresense.com/Floorplan-Creator/) to convert measurements to YAML
3. Directly edit the YAML coordinates in the config file - changes update live thanks to hot reloading
   - The Map has a nice feature where you can hover over a spot on the map, hit Cntrl-C at the points you want, then you can paste those points into the yaml

## Node Placement

For optimal device location accuracy:
- Place base station nodes at the corners of your floor plan
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
  rotation: your_rotation_in_degrees # Rotation in degrees from north (0 degrees)
```

*   `rotation`: Specifies the orientation of your map relative to North (0 degrees). This helps align the map correctly if your floorplan's 'up' direction isn't true North.
*   Use the **Geolocation** view in the UI to verify your GPS coordinates and rotation are set correctly.
*   Remember, the `config.yaml` file live reloads, so you can adjust these settings and see the changes on the map immediately without needing to restart.

### Map Settings
```yaml
map:
  flip_x: false # Set to true to flip X coordinates (default: false)
  flip_y: true # Set to true to use bottom-left origin, false for top-left origin (default: true)
  wall_thickness: 0.1 # Wall thickness in meters
  wall_color: "#ddd" # Optional wall color, if not set uses room color
  wall_opacity: 0.35 # Optional wall opacity, if not set defaults to 0.35
```
Note: Will just use defaults if left out of config yaml

### Optimisation Settings
```yaml
optimization:
  enabled: true
  interval_secs: 3600
  limits:
    absorption_min: 2.5
    absorption_max: 3.5
    tx_ref_rssi_min: -70
    tx_ref_rssi_max: -50
    rx_adj_rssi_min: -15
    rx_adj_rssi_max: 20

locators:
  nadaraya_watson:
    enabled: true
    floors: ["ground", "outside"]  # floor id, see floor configuration section
    bandwidth: 0.5
    kernel: gaussian

  nealder_mead:
    enabled: false
    floors: ["ground", "outside"]  # floor id, see floor configuration section
    weighting:
      algorithm: gaussian
      props:
        sigma: 0.10

  nearest_node:
    enabled: true
    max_distance: 10 # in meters
```
Note: The locators section and most of the optimization section can be left out if optimization is not wanted, as long as enabled is set to false

### Other Settings
```yaml

timeout: 30 # How long before device considered stale
away_timeout: 120 # How long before device is considered away

history:
  enabled: false # Enable to log history to db (Beta)
  expire_after: 24h # Expire after 24 hours
```

### Floor Configuration
Units are always meters.
```yaml
floors:
  - id: ground
    name: Ground Floor
    bounds: [[0, 0, 0], [10, 8, 3]]  # Bounds (x,y,z) of map in meters, in this example: 10m wide, 8m deep, 3m high ([[left, bottom, z], [right, top, z]]).
    rooms: # See Rooms Section
```

### Rooms

Rooms are all measured from the initial starting point, regardless of floor. Paste output from floor plan creator or measure manually. Units are always meters.

```yaml
rooms:
  - id: living-room
    name: Living Room
    floor: ground
    points:
      - [0,0]
      - [3,0]
      - [3,4]
      - [0,4]
```
Note: you can define 4 or more points depending on the shape of the room. Use clockwise or counter-clockwise order consistently across all rooms.

### Nodes
Create 1 node entry for each node. Units are always meters.
```yaml
nodes:
  - id: esp32-1 # optional
    name: Living Room Node
    room: living-room # room id, see rooms section
    point: [2,2,1]  # x,y,z coordinates within room
    floors: ["ground", "outside"] # floor id, LIST THE FLOOR THE NODE IS ON FIRST, followed by the next closest location.
```
Note: Multiple nodes can be mapped to one room, but each needs a unique name.

### Devices
```yaml
# Devices to track
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

# Devices to NOT track
exclude_devices:
  - id: "iBeacon:e5ca1ade-f007-ba11-0000-000000000000-*" # These are junk, we alias them to node:*
```

## Live Updates

The configuration file supports hot reloading, which means:
- Changes to the config file update in real-time
- You can adjust room coordinates and see immediate results
- Fine-tune node positions while watching the effects live
- No need to restart the companion after changes
- If there is unexpected behavior give the companion add-on a moment to implement the configuration, if unresolved or unresponsive a reboot (not restart of home assistant, a full reboot) of the host device can resolve the issue.

### Help write this documentation! Click 'Edit this page on GitHub' below.
