# PostCSS Z Indexes Map [![Build Status][ci-img]][ci]

[PostCSS] plugin to search all z-index values.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/marchenkovdmitry/postcss-z-indexes-map.svg
[ci]:      https://travis-ci.org/marchenkovdmitry/postcss-z-indexes-map

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

Output: 
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

/* 
 PostCSS z-indexes-map plugin. Start: 

 1 .b , z-index: 222 , start at line 6; 

 2 .c , z-index: 136 , start at line 10; 

 3 .a , z-index: 14 , start at line 2; 

 PostCSS z-indexes-map plugin. End. 
*/
```
z-indexes not found: 
```
/* PostCSS z-indexes-map plugin: z-indexes not found. */
```

## Usage

```js
postcss([ require('postcss-z-indexes-map') ])
```

See [PostCSS] docs for examples for your environment.
