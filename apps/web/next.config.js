const withTM = require('next-transpile-modules')(['@rusell-org/companies'])

module.exports = withTM({
  reactStrictMode: true,
})
