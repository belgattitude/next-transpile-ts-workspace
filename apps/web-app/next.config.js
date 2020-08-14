// Tell webpack to compile those packages
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')([
    '@optional-package-scope/bar',
    '@optional-package-scope/foo'
])

module.exports = withTM({})
