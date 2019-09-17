# PostCSS Z Indexes Map

[PostCSS] plugin to search all z-index values and display them in an ordered or non-ordered list.


[PostCSS]: https://github.com/postcss/postcss 

Input:
```css
.a {
  z-index: 14;
}

.b {
  z-index: 222;
}

.c {
  z-index: 136;
}
```

Output without sort: 
```css
/* 
 PostCSS z-indexes-map plugin. Start: 
 
 1 .a { z-index: 14; } start at line 2; 
 
 2 .b { z-index: 222; } start at line 6; 

 3 .c { z-index: 136; } start at line 10; 

 PostCSS z-indexes-map plugin. End. 
*/
```

Output with asc sort: 
```css
/* 
 PostCSS z-indexes-map plugin. Start: 
 
 1 .a { z-index: 14; } start at line 2; 
 
 2 .c { z-index: 136; } start at line 10; 
 
 3 .b { z-index: 222; } start at line 6; 
 
 PostCSS z-indexes-map plugin. End. 
*/
```

Output with desc sort: 
```css
/* 
 PostCSS z-indexes-map plugin. Start: 
 
 1 .b { z-index: 222; } start at line 6;
  
 2 .c { z-index: 136; }start at line 10; 
 
 3 .a { z-index: 14; } start at line 2; 
 
 PostCSS z-indexes-map plugin. End. 
*/
```


Z-indexes not found: 
```
/* PostCSS z-indexes-map plugin: z-indexes not found. */
```

## Usage:

```js
const zIndexesMap = require('postcss-z-indexes-map');

postcss([
  zIndexesMap()
])
```

## Options

| Option | Type | Default | Values
|---|---|---|---|
| 1. sort | String | "" | "asc", "desc", "" 
| 2. output | String | "console" | "console", "file" 

```js
// Example with asc sort and file output:

postcss([ 
  zIndexesMap({
    sort: 'asc',
    output: 'file'
  })
])
```

> ## Authors
>The idea of Vyacheslav Efremenko https://github.com/brainsapiens \
>Code by Dmitry Marchenkov https://github.com/marchenkovdmitry

See [PostCSS] docs for examples for your environment.
