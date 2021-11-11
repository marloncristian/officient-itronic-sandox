const express = require('express')
const request = require('request')

const path = require('path')
const PORT = process.env.PORT || 5000
const client_id = '505748'
const client_secret = 'QGwbd45wo8kodrGURxlBvGhQCV3Bm9kgTn2dZX7TCbElrojHlh'
const state = 'notimportant'
const version = 1
const fetch = require('node-fetch')

console.log(`version: ${version}`)

var fdefget = (_req, res) => {
  res.redirect(301, `https://app.officient.io/authorize?client_id=${client_id}&state=${state}&version=${version}`);
};

var fauth = function (req, res) {
  let todo = {
    code : req.query.code, 
    client_id : 505748,
    client_secret : 'QGwbd45wo8kodrGURxlBvGhQCV3Bm9kgTn2dZX7TCbElrojHlh',
    grant_type : authorization_code
  };
  fetch('https://api.officient.io/1.0/token', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
}).then(rsp => rsp.json())
  .then(json => res.send(json));
}

var fping = (_req, res) => {
  res.send('pong');
};

var app = express()
  .get('/', fdefget)
  .get('/user/auth', fauth)
  .get('/ping', fping)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

module.exports = app;