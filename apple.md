---
layout: page
title: Apple
permalink: /beacons/apple
parent: Beacons
---

# Apple Devices

Apples devices emit various [btle continuity](https://github.com/furiousMAC/continuity) messages and the fingerprint `apple:100?:*-*` is often the one seen. Unfortunately if your household has many iPhones, eventually the nearby info will start to collide and lead to duplicate fingerprints.

To work around this you can get the remote IRK (identity resolving key) from your iOS (iPhone) or Watch OS (Apple Watch) device and add this to the `Known BLE identity resolving keys` section of the ESPresense configuration.

> **Note: ESPresense version 3.0 or higher is required!**

## iOS (manual setup)

To automatically get the IRK for your iOS device you can pair it with an ESPresense instance and the key will be visible in the `espresense/settings` topic. You can either manually add it to your configuration or let HASS configure it for you.

1. Go in your browser to the ESPresense devices page: `http://espresense-office/ui`
2. **Fill in** a name for your device in the **name field** and **click** the **Enroll** button.
3. **On your iPhone** to to **Settings** -> **Bluetooth** and you'll see a new **ESPresense** device.
4. **Pair** the device and the key becomes visible in the MQTT topic `espresense/settings`

> Tip: use MQTT explorer to view the RAW messages.

Now you can add the 32-bit key to the `Known BLE identity resolving keys` section of the ESPresense configuration and to your HASS configuration with the following syntax: `irk:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

![ble-irk](../images/known_ble_irk.png)

## Watch OS

An Apple Watch cannot be paired with Bluetooth to the ESPresense instance. You have to extract the IRK from iCloud with the Apple Keychain application on MacOS.

> Tip: To ensure you have the right IRK, you need to know your Apple Watch's GUID. To easily find your Apple Watch GUID go **on your Apple Watch** to the **Settings** app -> **General** -> **Info** and look under **Bluetooth** for the MAC address. 

1. **On MacOS**, make sure you are **logged in** with the **iCloud ID** with which the Apple Watch is configured.
2. **Start** the **Keychain access** application.
3. In the left **sidebar** click on **iCloud**
4. In the upper right **search bar** type `bluetooth`
5. A series of GUIDs are shown with the *application password* type.

    ![keychain-icloud](../images/keychain_icloud.png)

1. **Open** each **GUID** to find the one associated with your apple watch. You should see your watches GUID as part of the **Account** field in the format: `Public: XX:XX:XX:XX:XX:XX`
3. **Click** on **Show password**
4. **Type** your MacOS password **twice** and **copy** the **XML contents** to a text editor.

    ![keychain-password](../images/keychain_password.png)

3. **Find** the `Remote IRK` key and **copy** the *base64 encoded* string in the *data* key:

    ```xml
    <key>Remote IRK</key>
    <data>aGktZnJvbS1qb2Vw</data>
    ```

9. Paste the IRK in the form below and click 'Decode' to convert this into an IRK. Under the hood, this is convert the Base64 data to a hex string and then reversing the order of the bytes.

<div>
  <script>
  function base64ToHex(str) {
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
        let tmp = bin.charCodeAt(i).toString(16);
        if (tmp.length === 1) tmp = "0" + tmp;
        hex[hex.length] = tmp;
    }
    return hex;
  }

  function decode(e) {
    const input = document.getElementById('base64_input');
    const output = document.getElementById('base64_output');
    const data = input.value;
    output.innerText = base64ToHex(input).reverse().join('');
  }
  </script>
  <input type="text" id="base64_input">
  <button type="button" onclick="decode">Convert</button>
  <br><br>
  <b>Output</b>
  <div id="base64_output">
</div>
 
11. Add the output (which should be 32 characters) to the 'Known BLE identity resolving keys' section of the ESPresence configuration.
    
![ble-irk](../images/known_ble_irk.png)
    
12. Add the same string to your HASS configuration with 'irk:' added in front e.g. "irk:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

