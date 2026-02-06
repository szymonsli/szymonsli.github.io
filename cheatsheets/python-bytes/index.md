---
title: Byte conversions in Python
layout: layouts/post.html
tags: cheatsheets
short: Bytes, strings, int, hex and bin
date: 06/02/2026
---

#### From int

Char representation of a number. Only one character can be converted

```python
>>> chr(83)
'S'
>>> chr(0x53)
'S'
>>> chr(261)
'ą'
```

From int to string with hex representation

```python
>>> hex(42)
'0x2a'
```

From int to string with binary representation

```python
>>> bin(42)
'0b101010'
```

From int to bytes

```python
>>> num = 12
>>> num.to_bytes(2, byteorder='big')
b'\x00\x0c'
```

#### From bytes

Bytes initialization

```python
>>> bytes_value = b"Value\x20\x3a\x29"
>>> bytes_value
b'Value :)'
```

From bytes to hex string

```python
>>> bytes_value.hex()
'56616c7565203a29'
```

From bytes to int

```python
>>> int(bytes_value.hex(), 16)
6224375411466320425
```

From bytes to string

```python
>>> bytes_value.decode()
'Value :)'
>>> bytes_value.decode(encoding="utf-8")
'Value :)'
```
