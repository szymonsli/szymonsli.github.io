---
title: Komendy ADB
layout: layouts/post.html
tags: cheatsheets
short: Przydatne komendy do Android Debug Bridge
date: 08/02/2026
---

### Pobieranie dostępnych urządzeń

```sh
$ adb devices
List of devices attached
5722edc1        device
```

Aby otrzymać więcej szczegółów:

```sh
$ adb devices -l
List of devices attached
5722edc1        device product:joyeuse_eea model:Redmi_Note_9_Pro device:joyeuse transport_id:6
```

### Połączenie

Numer `5722edc1` to numer seryjny urządzenia (serial). Przy użyciu flagi `-s` i tego numeru możemy wysyłać polecenia do konkretnego urządzenia.

```sh
$ adb -s 5722edc1 [command]
```

Jeżeli podłączone jest tylko jedno urządzenie, to nie trzeba podawać argumentu `-s`. Urządzenie będzie wybrane automatycznie.

```sh
$ adb [command]
```

Jeżeli tylko jedno urządzenie podłączone jest przez USB, można użyć flagi `-d` aby je wybrać.

```sh
$ adb -d [command]
```

Jeżeli tylko jedno urządzenie podłączone jest przez TCP/IP, można użyć flagi `-e` aby je wybrać.

### Połączenie z shell'em

```sh
$ adb -s 5722edc1 shell
joyeuse:/ $
```

### Instalacja aplikacji

```sh
$ adb -s 5722edc1 install app.apk
Performing Streamed Install
Success
```

### Transfer plików

Pobieranie pliku z urządzenia na komputer

```sh
$ adb -s 5722edc1 pull /ścieżka/do/pliku.txt ./lokalny_folder
```

Transfer pliku z komputera na urządzenie

```sh
$ adb -s 5722edc1 push ./plik.txt /ścieżka/na/urządzeniu
```

### Zawartość logów (logcat)

```sh
$ adb -s 5722edc1 logcat
```
