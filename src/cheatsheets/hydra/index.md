---
title: Hydra
layout: layouts/post.html
tags: cheatsheets
short: Brute force tool
date: 21/12/2025
---

Hydra is a brute-forcing tool for penetration testers. Do not use this tool for systems or applications you don't own or without permission!

#### Important parameters:

```txt
-h => help
-l => single username
-L => path to a wordlist with usernames
-p => single password
-P => path to a wordlist with usernames
-C => path to a file with login:password wordlist. Used instaed of -L and -P
-s => port, if different than default is used
-M => path to a file with targets
-t => number of threads (default 16)
-U => help for a specific module
```

#### Help for a module:

```sh
hydra -U http-post-form
```

#### HTTP POST

```sh
hydra -L users.txt -P passwords.txt 10.0.0.2 -s 8080 http-post-form "/login:username=^USER^&password=^PASS^:Invalid"
```

What does it mean?

- Sends POST requests to `http://10.0.0.2:8080/login`
- Each request has body `login:username=^USER^&password=^PASS^`, where ^USER^ is a value from users.txt file and ^PASS^ is a value from passwords.txt
- If there is the "Invalid" phrase in response, it continues the attack, otherwise the result is successfully found

#### SSH

```sh
hydra -L /wordlists/useres.txt -P /wordlists/passwords.txt -t 8 ssh://10.0.0.2
```
