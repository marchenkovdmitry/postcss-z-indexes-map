var postcss = require('postcss');

module.exports = postcss.plugin('postcss-z-indexes-map', function (opts) {

  return root => {

    let zIndexArr = [];
    let outputArr = [];

    root.walkRules(rule => {
      rule.walkDecls(decl => {

        if ( decl.prop === 'z-index') {
          zIndexArr.push({
            prop: decl.prop,
            value: decl.value,
            selector: decl.parent.selector,
            startAt: `start at line ${decl.source.start.line}`,
          });
        }

      });
    });

    if (opts !== undefined && opts !== null) {
      if (opts.sort === 'asc') {
        zIndexArr.sort(function(a, b) {return a.value - b.value});
      } else if (opts.sort === 'desc') {
        zIndexArr.sort(function(a, b) {return b.value - a.value});
      }
    }

    (zIndexArr.length !== 0) ? outputArr.push(`/* \n PostCSS z-indexes-map plugin. Start: \n`) : null;

    zIndexArr.forEach(function(item, i) {
      outputArr.push(`\n ${i+1} ${item.selector} { ${item.prop}: ${item.value}; } ${item.startAt}; \n`);
    });

    (zIndexArr.length !== 0) ? outputArr.push(`\n PostCSS z-indexes-map plugin. End. \n*/`) : null;

    (zIndexArr.length === 0) ? outputArr.push(`/* PostCSS z-indexes-map plugin: z-indexes not found. */`) : null;

    root.append(outputArr.join(''));
  };
});



