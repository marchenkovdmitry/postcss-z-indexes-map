var postcss = require('postcss');

module.exports = postcss.plugin('postcss-z-indexes-map', function (opts) {

  return root => {

    let zIndexArr = [];
    let outputArr = [];
    let isOptsDefine = typeof opts !== 'undefined' && opts !== null;
    let outputString;

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

    isOptsDefine && opts.sort === 'asc' && zIndexArr.sort((a, b) => a.value - b.value);
    isOptsDefine  && opts.sort === 'desc' && zIndexArr.sort((a, b) => b.value - a.value);

    zIndexArr.length !== 0 && outputArr.push(`/* \n PostCSS z-indexes-map plugin. Start: \n`);

    zIndexArr.forEach(function(item, i) {
      outputArr.push(`\n ${i+1} ${item.selector} { ${item.prop}: ${item.value}; } ${item.startAt}; \n`);
    });

    zIndexArr.length !== 0 && outputArr.push(`\n PostCSS z-indexes-map plugin. End. \n*/`);
    zIndexArr.length === 0 && outputArr.push(`/* PostCSS z-indexes-map plugin: z-indexes not found. */`);

    outputString = outputArr.join('');
    (typeof opts.output === 'undefined' || opts.output === 'console') && console.log(outputString);
    opts.output === 'file' && root.append(outputString);
  };
});



