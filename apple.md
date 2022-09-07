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
> **Note: With the automatic procedure you DON'T need to add the 32-bit key to the `Known BLE identity resolving keys`. It's automatically done via mqtt!**


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
4. **Type** your MacOS password **twice** and **copy** the contents.

    ![keychain-password](../images/keychain_password.png)

5. Paste the contents in the form below and click 'Decode' to convert this into an IRK. Under the hood, this is extracting Base64 data and converting it to a hex string and then reversing the order of the bytes.

    <center>
    <div>
      <script>
      /* Regex to validate base64 strings */
      var b64_regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

      /* Attempt to decode this as if it was an XML document straight from keychain.
         Return null if this cannot be done. */
      function tryDecodeXML(str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str,"text/xml");
        var dataElement = doc.getElementsByTagName('data');
        if (!dataElement || dataElement.length < 1) {
            return null;
        }
        var b64 = dataElement[0].innerHTML.trim();
        return tryDecodeBase64(b64);
      }

      function isBase64(str) {
        return !!b64_regex.exec(str);
      }

      function tryDecodeBase64(str) {
        if (!isBase64(str)) {
            return null;
        }

        for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
            var tmp = bin.charCodeAt(i).toString(16);
            if (tmp.length === 1) tmp = "0" + tmp;
            hex[hex.length] = tmp;
        }
        return hex;
      }

      function decode(e) {
        var input = document.getElementById('base64_input');
        var output = document.getElementById('base64_output');
        var data = input.value;

        var decoded = tryDecodeXML(data) || tryDecodeBase64(data);
        if (!decoded) {
            output.innerText = "Please paste the XML from iCloud or a Base64 encoded string";
            output.style = 'color: red;';
            return;
        }
        
        output.innerText = decoded.reverse().join('');
      }
      </script>
      <textarea type="text" id="base64_input" cols="32" rows="12"></textarea><br><br>
      <button type="button" onclick="decode()">Convert</button>
      <br><br>
      <b>Output</b>
      <div id="base64_output" style="font-family: monospace;"><span style="color: gray">Enter base64 above...</span></div>
      <br><br>
    </div>
    </center>

6. Add the output (which should be 32 characters) to the 'Known BLE identity resolving keys' section of the ESPresence configuration.
    
    ![ble-irk](../images/known_ble_irk.png)
    
7. Add the same string to your HASS configuration with 'irk:' added in front e.g. "irk:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

