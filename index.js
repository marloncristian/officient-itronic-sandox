const express = require('express')
const https = require('https')

const PORT = process.env.PORT || 5000
const client_id = '505747'
const client_secret = '7Z7saqTfgJZK4DJ9ZgOH8IDodCwWmToUZEQlxEw1HrBkVxD5vo'
const state = 'notimportant'
const version = 1

console.log(`version: ${version}`)

var fdefget = (_req, res) => {
  res.redirect(301, `https://app.officient.io/authorize?client_id=${client_id}&state=${state}&version=${version}`);
};

var fauth = function (req, res) {

  let data = new TextEncoder().encode(
    JSON.stringify({
      code : 2, 
      client_id : client_id,
      client_secret : client_secret,
      grant_type : 1
    })
  );
  const options = {
    hostname: 'www.globo.com',
    port: 443,
    //path: '',
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Content-Length': data.length
    // }
  }

  const request = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    // request.on('data', d => {
    //   process.stdout.write(d)
    // })
  })

  request.on('error', error => {
    console.error(error)
  })

  // import('./node_modules/node-fetch/src/index.js')
  // .then(fetch => {
  //   console.log('success');
  //   console.log(JSON.stringify(fetch))
  // })
  // .catch(err => {
  //   console.log(err);
  // })

//   fetch('https://api.officient.io/1.0/token', {
//     method: 'POST',
//     body: JSON.stringify(todo),
//     headers: { 'Content-Type': 'application/json' }
// }).then(rsp => rsp.json())
//   .then(json => res.send(json));
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