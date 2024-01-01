---
layout: page
title: Apple
permalink: /beacons/apple
parent: Beacons
---

# Apple Devices

Apple devices emit various [BTLE continuity](https://github.com/furiousMAC/continuity) messages, often identified by the fingerprint `apple:100?:*-*`. In households with multiple iPhones, the nearby info may collide, leading to duplicate fingerprints. To resolve this, you can obtain the remote IRK (Identity Resolving Key) from your iOS (iPhone, iPad) or Watch OS (Apple Watch) device. While adding the IRK to the `Known BLE identity resolving keys` section of the ESPresense configuration is an option, using the `Enroll` feature is recommended as it's easier and syncs automatically to all ESPresense nodes. Note: ESPresense version 3.0 or higher is required!**

Note: Some iOS devices do not emit a beacon while the phone screen is off if there is not a reason for the device to broadcast a signal, consequently the device may not appear while the screen is off. Something like an iWatch, Universal Clipboard with Handoff enabled, or other services that require the phone to communicate regularly may resolve this issue as they require the subject iOS device to communicate while 'sleeping'. In the case you do not have a bluetooth device like an iWatch, some people report that using background apps like iCloud Family Sharing, iCloud Photo Backup, or Room Assistant have convinced the device to communicate while 'sleeping'. This issue is not universal, but it's not clear why this occurs at this time and you may not experience this issue even if the device seemingly has no reason to communicate.

## Enrollment (easiest)

## iPhone / iPads (native)

- Navigate to the ESPresense devices page in your browser: `http://<ip>/ui/#/devices`.
- Enter a name for your device in the name field and click the `Enroll` button.
- On your iPhone or iPad, go to `Settings` -> `Bluetooth`. You'll see a new `ESPresense` device.
- Tap on the bluetooth device named `ESPresense` and accept the request to pair securely.
- The Enroll prompt should stop automatically, indicating the key has been obtained and added to the MQTT topic `espresense/settings`.

## Apple Watch (using Bluetooth Terminal App)

- Download and install the [Bluetooth Terminal app](https://apps.apple.com/app/id1058693037) from the Apple App Store on an iOS device, ensure it installed on your watch as well.
- Navigate to the ESPresense devices page in your browser: `http://<ip>/ui/#/devices`.
- Enter a name for your device in the name field and click the `Enroll` button.
- Launch the `BluetoothLE` App on your Apple Watch (included as part of iOS Bluetooth Terminal app).
- Tap on the bluetooth device named `ESPresense` and accept the request to pair securely.
- The Enroll prompt should stop automatically, indicating the key has been obtained and added to the MQTT topic `espresense/settings`.

If you're having trouble, please note: you will see ESPresense in the native settings, but it will refuse to securely pair. It's imperative to follow the steps under the 'Apple Watch (using Bluetooth Terminal App)' section above to ensure a successful pairing via the app.  Secure pairing is the key to us getting an IRK!

## Lookup Method (requires a Mac)

This method can be used for any iOS/iPadOS/Watch OS device:

- **On MacOS**, ensure you are **logged in** with the **iCloud ID** associated with your device.
- **Launch** the **Keychain Access** application.
- In the left **sidebar**, click on **iCloud**.
- In the upper right **search bar**, type `bluetooth`.
- A series of GUIDs will appear with the *application password* type.

    ![keychain-icloud](../images/keychain_icloud.png)

- **Open** each **GUID** to find the one associated with your Apple Watch. The **Account** field should display your watch's GUID in the format: `Public: XX:XX:XX:XX:XX:XX`.
- **Click** on **Show password**.
- **Type** your MacOS password **twice** and **copy** the contents.

    ![keychain-password](../images/keychain_password.png)

- Paste the contents in the form below and click 'Decode' to convert this into an IRK.

{% include irk_decode.html %}

- Add the output (which should be 32 characters) to the 'Known BLE identity resolving keys' section of the ESPresence configuration.

    ![ble-irk](../images/known_ble_irk.png)

- In your HASS configuration, add the same string with 'irk:' prefixed, e.g., "irk:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".
- Click 'Save' in the ESPresense UI, then 'Restart Device'.
