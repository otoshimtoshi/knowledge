## Heading

**Example**

```text
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

---

## Horizontal

**Example**

```text
___
---
***
```

---

---

---

## Typographic replacements

**Example**

```text
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
```

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

## Emphasis

**Example**

```text
**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
~~Strikethrough~~
```

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

**Example**

```text
> Blockquotes Sample
>> Blockquotes Sample
>>> Blockquotes Sample
```

> Blockquotes Sample
>
> > Blockquotes Sample
> >
> > > Blockquotes Sample

## Lists

**Example**

```text
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  + Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
```

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

**Example**

```text
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`
```

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1) You can use sequential numbers...
1) ...or keep all the numbers as `1.`

**Example**

```text
57. foo
1. bar
```

Start numbering with offset:

57. foo
1. bar

## Code

**Example**

```text
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

**Example**

var foo = function (bar) {
return bar++;
};

console.log(foo(5));

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

**Example**

```text
| Option | Description |
| ------ | ----------- |
| data   | Description |
| engine | Description |
| ext    | Description |
```

| Option | Description |
| ------ | ----------- |
| data   | Description |
| engine | Description |
| ext    | Description |

**Example**

right and left aligned columns

```text
| Option | Description |
|:------| -----------:|
| datadatadata   | DescriptionDescription |
| engineengineengine | DescriptionDescriptionDescription |
| extextextextextextext    | DescriptionDescriptionDescriptionDescription |
```

| Option                |                                  Description |
| :-------------------- | -------------------------------------------: |
| datadatadata          |                       DescriptionDescription |
| engineengineengine    |            DescriptionDescriptionDescription |
| extextextextextextext | DescriptionDescriptionDescriptionDescription |

## Links

**Example**

```text
[link text](https://github.com/otoshimtoshi/knowledge)
```

[link text](https://github.com/otoshimtoshi/knowledge)

```text
Autoconverted link https://github.com/otoshimtoshi/knowledge (enable linkify to see)
```

Autoconverted link https://github.com/otoshimtoshi/knowledge (enable linkify to see)

## Used by Plugings

### 1. [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark)

**Example**

```text
==Marked text==
```

==Marked text==

### 2. [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)

**Example**

```text
Footnote 1 link[^first].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^three].
```

Footnote 1 link[^first].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^three].

[^first]: Footnote **can have markup**
[^three]: Footnote text.
