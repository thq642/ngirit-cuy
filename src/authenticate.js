require('dotenv').config()
const auth = require('basic-auth')
const LOGIN = process.env.USER
const PASSWORD = process.env.PASS

function authenticate(req, res, next) {
  if (LOGIN && PASSWORD) {
    const credentials = auth(req)
    if (!credentials || credentials.name !== LOGIN || credentials.pass !== PASSWORD) {
      res.setHeader('WWW-Authenticate', `Basic realm="Ngirit-cuy Compression Service"`)

      return res.status(401).end('Access denied')
    }
  }

  next()
}

module.exports = authenticate
