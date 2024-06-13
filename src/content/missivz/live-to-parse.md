---
title: Live to Parse, Parse to Live
author: Jon Brookes
isDraft: false
publishedDate: 06-14-2024
tags:
  - Web Development
  - Python
  - Regex
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

![another shiny thing, this time a parser](/images/shiny03.webp)

I always liked to use Regex to parse less structured data that did not fall into the categories of common patterns such as XML, JSON, CSV for which there are parsers aplenty. 

When data is less structured however, for example as variable length text records where the start of record is of a known format, each record can be 'chunked' and then each record parsed there after. 

Regex can be used to do this and I liked to use multi-line, commented and easier to read regex patterns in languages such as Perl which I do not use any longer but Python can do a similar trick like with the following :

```python

import re

data = """
b1991698-299b-11ef-babc-00155dc3845c 3 5
some text
more text
fin
b1991698-299b-11ef-babc-00155dc3845c 3 4 7
b1991698-299b-11ef-babc-00155dc3845c 3 3
more 
more
b1991698-299b-11ef-babc-00155dc3845c 3 3
this will be the last time
"""


# Define the record pattern
record_pattern = r"""
    b[0-9a-f]{7}-[0-9a-f]{4} - [0-9a-f]{4} - [0-9a-f]{4} - [0-9a-f]{12}
    \s+
    \d\s+\d(?:\s+\d)?
"""

# Define the pattern
pattern = re.compile(rf"""
    (
        {record_pattern}
        # md5sum followed by 2 or 3 numbers
    ) 
    (.*?) 
    # Non-greedy match for any characters in between
    (?= 
    # Lookahead assertion
        {record_pattern} 
        # Next checksum pattern
        |$ 
        # Or end of string
    )
""", re.VERBOSE | re.DOTALL)

# Find all matches
matches = pattern.findall(data)

# Combine the checksum and the captured text for each match
records = [m[0] + m[1] for m in matches]

list_of_results = []
for record in records:
    list_of_results.append(record)

# Print results
for record in list_of_results:
    print(record)
    print("---")  # Separator for readability

```

`re.compile(pattern)` in Python's re module is used to compile a regular expression pattern into a regular expression object. This object can be used for matching using its match(), search() and other methods, described below.

The `rf` before the triple quotes is a combination of r and f string prefixes in Python.

`r` stands for "raw" and means that backslashes in the string are treated as literal backslashes rather than escape characters. This is useful in regular expressions because they often contain backslashes.

`f` stands for "formatted" and allows for embedded expressions inside string literals, enclosed in curly braces {}. The expressions will be replaced with their values. This is useful when you want to insert variables into a regular expression.

`re.compile(rf"""...""")` is compiling a regular expression that may contain variables and where backslashes are treated as literal backslashes.In Python's re module, re.VERBOSE and re.DOTALL are flags that modify the behavior of the regular expression.


`re.VERBOSE`: This flag allows you to write regular expressions that look nicer and are more readable by allowing you to visually separate logical sections of the pattern and add comments. Whitespace within the pattern is ignored, except when in a character class or preceded by an unescaped backslash, and, when a line contains a '#' that is not in a character class and is not preceded by an unescaped backslash, all characters from the leftmost such '#' through the end of the line are ignored.

`re.DOTALL`: This flag makes the '.' special character match any character at all, including a newline; without this flag, '.' will match anything except a newline. This is useful when you want to match a multiline block of text.

The lookahead assertion `(?=...)` is used to assert that what follows the current position in the string matches a certain pattern, without consuming characters or making them part of the match. In this case, it's used to assert that either another checksum pattern follows or we've reached the end of the string (|$).

Without this lookahead assertion, the regular expression would only match a record if it's immediately followed by another record. The last record in the string, which is not followed by another record, would not be matched.

and here is the output

```bash
❯ python multi-line-v2.py
b1991698-299b-11ef-babc-00155dc3845c 3 5
some text
more text
fin

---
b1991698-299b-11ef-babc-00155dc3845c 3 4 7

---
b1991698-299b-11ef-babc-00155dc3845c 3 3
more
more

---
b1991698-299b-11ef-babc-00155dc3845c 3 3
this will be the last time
---
```

and each 'record' is printed one after another from a list of strings

Python can use regex in a similar way to Perl could using 'best practice' approach where otherwise gnarly regular expressions are coerced into semi-human readable and more maintainable patterns and format.