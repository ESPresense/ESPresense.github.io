---
layout: page
title: Id Problems
permalink: /ids
parent: "Troubleshooting"
---

# Id Problems

## Multiple devices with the same id

### Query

The newest version allows you to selectively decide which ids you want queried to improve the id.  You can now put "apple:1005:9-12" in the query box and it'll ask the phone for it's model and turn it into "apple:13-3".  BUT if apple:1005:9-12 is working for you reliably it's better just to use that and keep query empty.  The ESP32 has to stop listening while sending out the queries which hurts the reliability of receiving advertisements from devices.
