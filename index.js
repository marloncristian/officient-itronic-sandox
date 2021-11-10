const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const client_id = '505748'
const client_secret = 'QGwbd45wo8kodrGURxlBvGhQCV3Bm9kgTn2dZX7TCbElrojHlh'
const state = 'notimportant'
const version = 1

var fdefget = (_req, res) => {
  res.redirect(301, `https://app.officient.io/authorize?client_id=${client_id}&state=${state}&version=${version}`);
};

var fauth = function (req, res) {
	res.send(eq)
}

express()
  .get('/', fdefget)
  .get('/user/auth', fauth)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
