const withTM = require('next-transpile-modules')([
  '@rusell-org/companies',
  '@rusell-org/shared',
])

module.exports = withTM({
  reactStrictMode: true,
})
