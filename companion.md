---
layout: page
title: Companion
permalink: /companion
nav_order: 99
---

# Companion

# ESPresense Companion
## How to use
ESPresense Companion is meant to be a visual representation of where your device is within your house and 
as a way to troubleshoot Espresense settings so that automation triggers are more accurate.

The more accurate your house plan and the more base stations you include, the higher the accuracy of ESPresense Companion

### Find your home's GPS coordinates
The easiest way to do this is using google maps or google earth.  Search for your home's address, and click on the street in front of it to get your latitude and longitude. 
On google earth, search for your home's address, place your mouse over your home and it will show you latitude, longitude and elevation in the bottom right.  



### Draw out your house
You will need the dimensions of the interior of your house to get the best results.  There are multiple ways to do this, one option is to create a free home plan using magicplan (https://www.magicplan.app/)

However you get those measurements, you will need to convert that plan into something YAML can use.  For this, we have the ESPresense Floorplan Creator (https://espresense.com/Floorplan-Creator/)

Once you have drawn out your rooms, click "convert to YAML Code" and copy/paste what is generated onto Notepad.



### Setup Mqtt
Espresense and Espresense rely on MQTT to function - this guide to the companion assumes you have an MQTT connectoin and it is set up Espresense already.  
If you have not - go here to set that up: https://mosquitto.org/.  Then 

Once that is set up, go to your MQTT addon and write down the host, port (default is 1883), username and password.  
If your MQTT connection is through HASSIO, Companion will use that addon.  If you use another method, you'll add that information to the config file described later.

Be sure that MQTT has Discovery enabled ("auto-discovered")- otherwise you will need to add your mqtt configuration to the MQTT tab.



###install the espresense companion app
Go to your home assistant add-on store and add the following repository: https://github.com/ESPresense/hassio-addons

Reload the add-on store and click on the ESPresense Companion.  No need to change anything - just click install.  

Don't click start yet - if you do a generic home plan will be displayed.  Go to file explorer or Studio Code Server and look for the espresense folder with the config.yaml 



### Edit Config file
Once ESPresense Companion is installed, go to /config/espresense/config.yaml.

For MQTT Connection, you only need to add the username and password you wrote down earlier if you use the HASSIO MQTT addon.  If you use another MQTT method, list the host and port as well.  
SSL must be false

For GPS, put in the coordinates you determined earlier.  Latitude and longitude are in decimal format.  Elevation is in meters

For floors - 
ID and name can be anything.
bounds: the first 3 numbers are the left and bottom starting points, and the 2nd 3 numbers are the top and right end points.  You will use this to center the diagram

For rooms: Copy and paste the results of the floorplan creator.  

For nodes: list out and locate the approximate location of each nodes
Note: you can map multiple base stations to a room, but each station must have a unique name 


For devices: Add specific devices using the format 
- id: darrels-watch
  name: darrell's watch

Use the variable * to include multiple devices such as 
  - id: "tile:*" # Track all tiles
  - id: "irk:*" # Track all IRKs
  - id: "apple:*" # Track all apple devices
  - id: "ibeacon:*" # Track all iBeacon devices
  - name: "*" # Track all named devices

## Help write this documentation!  Click the edit this page below.
