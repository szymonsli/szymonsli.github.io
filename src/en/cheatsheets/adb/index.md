---
title: ADB commands
layout: layouts/post.html
tags: cheatsheets
short: Useful commands for Android Debug Bridge
date: 08/02/2026
---

### Get available devices

```sh
$ adb devices
List of devices attached
5722edc1        device
```

Or for more details:

```sh
$ adb devices -l
List of devices attached
5722edc1        device product:joyeuse_eea model:Redmi_Note_9_Pro device:joyeuse transport_id:6
```

### Connection

The number `5722edc1` is this device's serial number. You can use this number to send commands to a specific device with the `-s` flag.

```sh
$ adb -s 5722edc1 [command]
```

There is no need to use the serial number if only one device is connected.

```sh
$ adb [command]
```

If only one USB device is available, the `-d` flag can be used.

```sh
$ adb -d [command]
```

If only one TCP/IP device is available, the `-e` flag can be used.

### Shell connection

```sh
$ adb -s 5722edc1 shell
joyeuse:/ $
```

### App installation

```sh
$ adb -s 5722edc1 install app.apk
Performing Streamed Install
Success
```

### File transfer

Get a file from the device

```sh
$ adb -s 5722edc1 pull /path/to/file.txt ./local_directory
```

Upload a file to the device

```sh
$ adb -s 5722edc1 push ./file.txt /device_directory/path
```

### Logs

```sh
$ adb -s 5722edc1 logcat
```
