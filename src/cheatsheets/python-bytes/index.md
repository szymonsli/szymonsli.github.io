---
title: Konwersje liczb, znaków i bajtów w Pythonie
layout: layouts/post.html
tags: cheatsheets
short: Bajty, znaki, liczby heksadecymalne, binarne
date: 06/02/2026
---

### Konwersje z typu `int`

Konwersja liczby na jej reprezentację w Unicode.

```python
>>> chr(83)
'S'
>>> chr(0x53)
'S'
>>> chr(261)
'ą'
```

Konwersja liczby na string z jej wartością heksadecymalną.

```python
>>> hex(42)
'0x2a'
```

Konwersja liczby na string z jej wartością binarną.

```python
>>> bin(42)
'0b101010'
```

Konwersja liczby na string z jej wartością ósemkową.

```python
>>> oct(42)
'0o52'
```

Z liczby na typ `bytes`

```python
>>> num = 12
>>> num.to_bytes(2, byteorder='big')
b'\x00\x0c'
```

### Konwersje z typu `bytes`

Inicjalizacja typu `bytes`

```python
>>> bytes_value = b"Value\x20\x3a\x29"
>>> bytes_value
b'Value :)'
```

```python
>>> a = bytes("asdf", encoding = "utf-8")
>>> a
b'asdf'
```

Z `bytes` na string z wartością heksadecymalną

```python
>>> bytes_value = b"Value\x20\x3a\x29"
>>> bytes_value.hex()
'56616c7565203a29'
```

Z `bytes` na `int`

```python
>>> bytes_value = b"Value\x20\x3a\x29"
>>> int(bytes_value.hex(), 16)
6224375411466320425
```

Z `bytes` na `str`

```python
>>> bytes_value = b"Value\x20\x3a\x29"
>>> bytes_value.decode()
'Value :)'
>>> bytes_value.decode(encoding="utf-8")
'Value :)'
```

### Konwersje ze stringa

Z `str` na bytes

```python
>>> a = "Hello world!"
>>> a.encode()
b'Hello world!'
```

Ze stringa z wartością heksadecymalną na `bytes`

```python
>>> bytes.fromhex("4548")
b'EH'
```

Z pojedynczego znaku na liczbową reprezentację z Unicode (przeciwieństwo `chr()`)

```python
>>> ord("a")
97
```

Ze stringa z wartością dziesiętną na liczbę

```python
>>> int("1234")
1234
```

Ze stringa z wartością binarną na liczbę

```python
>>> int("10011", 2)
19
```

```python
>>> int("0b0011", 2)
19
```

Ze stringa z wartością heksadecymalną na liczbę

```python
>>> int("e4b", 16)
3659
```

```python
>>> int("0xe4b", 16)
3659
```
