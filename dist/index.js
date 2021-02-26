
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tokenlink.cjs.production.min.js')
} else {
  module.exports = require('./tokenlink.cjs.development.js')
}
