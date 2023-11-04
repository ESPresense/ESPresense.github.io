---
layout: page
title: Apple
permalink: /beacons/apple
parent: Beacons
---

# Apple Devices

Apple devices emit various [BTLE continuity](https://github.com/furiousMAC/continuity) messages, often identified by the fingerprint `apple:100?:*-*`. In households with multiple iPhones, the nearby info may collide, leading to duplicate fingerprints. To resolve this, you can obtain the remote IRK (Identity Resolving Key) from your iOS (iPhone, iPad) or Watch OS (Apple Watch) device. While adding the IRK to the `Known BLE identity resolving keys` section of the ESPresense configuration is an option, using the `Enroll` feature is recommended as it's easier and syncs automatically to all ESPresense nodes. Note: ESPresense version 3.0 or higher is required!**

## iOS/iPadOS Enrollment

Enrolling your iPhone or iPad is straightforward:

1. Navigate to the ESPresense devices page in your browser: `http://<ip>/ui`.
2. Enter a name for your device in the name field and click the `Enroll` button.
3. On your iPhone or iPad, go to `Settings` -> `Bluetooth`. You'll see a new `ESPresense` device.
4. Pair the device. The key will be automatically obtained and added to the MQTT topic `espresense/settings`.

## Watch OS Enrollment

### Using Bluetooth Terminal App

1. Hit `Enroll` on the ESPresense web interface.
2. Download and install the [Bluetooth Terminal app](https://apps.apple.com/app/id1058693037) from the Apple App Store on an iOS device.
3. Launch the app on your Apple Watch and scan for nearby Bluetooth devices.
4. Click on "ESPresense" and accept the request to pair securely.
5. The Enroll prompt should stop automatically, indicating the key has been obtained.

## Lookup Method (Requires a Mac)

This method can be used for any iOS/iPadOS/Watch OS device:

1. **On MacOS**, ensure you are **logged in** with the **iCloud ID** associated with your device.
2. **Launch** the **Keychain Access** application.
3. In the left **sidebar**, click on **iCloud**.
4. In the upper right **search bar**, type `bluetooth`.
5. A series of GUIDs will appear with the *application password* type.

    ![keychain-icloud](../images/keychain_icloud.png)

6. **Open** each **GUID** to find the one associated with your Apple Watch. The **Account** field should display your watch's GUID in the format: `Public: XX:XX:XX:XX:XX:XX`.
7. **Click** on **Show password**.
8. **Type** your MacOS password **twice** and **copy** the contents.

    ![keychain-password](../images/keychain_password.png)

9. Paste the contents in the form below and click 'Decode' to convert this into an IRK.

{% include irk_decode.html %}

10. Add the output (which should be 32 characters) to the 'Known BLE identity resolving keys' section of the ESPresence configuration.

    ![ble-irk](../images/known_ble_irk.png)

11. In your HASS configuration, add the same string with 'irk:' prefixed, e.g., "irk:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".
12. Click 'Save' in the ESPresense UI, then 'Restart Device'.
