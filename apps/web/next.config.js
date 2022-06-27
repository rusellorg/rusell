const withTM = require('next-transpile-modules')([
  '@rusell-org/companies',
  '@rusell-org/shared',
  '@rusell-org/routes',
])

module.exports = withTM({
  reactStrictMode: true,
})
