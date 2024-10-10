---
layout: page
title: Optimization and Calibration
permalink: /optimization
nav_order: 99
---

# Optimization

ESPresense Companion will automatically run optimization routines in the background periodically, to improve result quality by adjusting settings directly on nodes according to different algorithms.

The results can be seen in the grid on the Calibration page in Companion, where they can also be reset across all nodes if required.

## How it works

Optimization is enabled by default, running hourly.

On startup, after waiting `interval_secs`, it will take 3x snapshots of node data at the same interval (i.e. startup + 1hr, +2hr , +3 hr). These snapshots are held in memory. A calculation is applied to choose the best snapshot (with lowest error).

It will then begin running the optimization algorithms every `interval_secs`, comparing the results to the previous run, and updating several settings on nodes via MQTT.

Three algorithms are currently applied (as of 3.3.5):

- Rx Adj Rssi
- Absorption Avg
- Absorption NelderMead

These will update the following settings on nodes:

- Absorption
- RxAdjRssi
- TxRefRssi

These values are visible under the Calibration section of the node's web UI.

## Default Configuration

The below is extracted from the default configuration example:

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
```

The limits section will clamp the adjustment values the optimizer can set.


## Help write this documentation!  Click the edit this page below.
