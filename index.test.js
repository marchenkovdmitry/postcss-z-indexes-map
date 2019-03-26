var postcss = require('postcss');

var plugin = require('./');

function run (input, output, opts) {
  return postcss([plugin(opts)]).process(input).then(function (result) {
    expect(result.css).toEqual(output);
    expect(result.warnings()).toHaveLength(0)
  })
}


it('z-indexes not found', function () {
  return run('.vendor { background: silver; }',
    '.vendor { background: silver; }/* PostCSS z-indexes-map plugin: z-indexes not found. */');
});
