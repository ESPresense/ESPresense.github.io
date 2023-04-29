---
layout: page
title: Sensors
permalink: /sensors
nav_order: 3
---

# Sensors Supported

* [PIR Motion](#pir-motion)
* [Radar Motion](#radar-motion)
* [Temperature](#temperature) (DHT11, DHT22)
* [Ambient Light](#ambient-light) (BH1750, TSL2561)
* [Weather Sensor](#weather-sensor) (BME280)
* [Weight Sensor](#weight-sensor) (HX711)

Sensors are configured using the web interface of the ESPsense device.

## PIR Motion
The PIR motion sensor can be configured in the GPIO section. There are several options on how to configure the pin to match the specific PIR device in use.
* PIR motion pin type:
  * Pullup
  * Pullup Inverted
  * Pulldown
  * Pulldown Inverted
  * Floating
  * Floating Inverted
* PIR motion pin (-1 for disable):
* PIR motion timeout (in seconds):
## Radar Motion
The Radar motion sensor can be configured in the GPIO section. There are several options on how to configure the pin to match the specific Radar device in use.
* PIR motion pin type:
  * Pullup
  * Pullup Inverted
  * Pulldown
  * Pulldown Inverted
  * Floating
  * Floating Inverted
* PIR motion pin (-1 for disable):
* PIR motion timeout (in seconds):

### LD2410(b/c)
These are a set of 24GHZ radar motion sensors with the B & C varients having integrated bluetooth. These devices have a UART serial port which is unused and a single pin to indicate Motion and static presense. 

To use these devices with ESPresense, we connect the power and ground and the 'Occupied' pin with a high value of occupied and a low value of unoccupied.

## Temperature
These devices use the I2C bus which is configured in the ESPresense device UI in the GPI section. 
## Ambient Light
These devices use the I2C bus which is configured in the ESPresense device UI in the GPI section. 

## Weather Sensor
These devices use the I2C bus which is configured in the ESPresense device UI in the GPI section. 

## Weight Sensor
### HX711
This device uses a non-i2c compliant two wire protocol which is configured in the ESPresense device UI in the GPI section.
