'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

const conString = 'postgres://postgres:1234@localhost:5432/portfolio';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.text({type: '*/*'}));
app.use(express.static('./public'));

function proxyGithub(request, response) {
  console.log(`Routing GitHub request for ${request.params[0]}`);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
  }))(request, response);
}

app.post('/email', function(req, res) {
  console.log(req.body);
  res.send('');
});

app.get('/github/*', proxyGithub);

app.get('*', (request, response) => response.sendFile('index.html', {root: './'}));


app.listen(PORT, () => console.log('LocalHost: ' + PORT));