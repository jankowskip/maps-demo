const express = require('express');

const app = express();

app.use(express.static('./dist/maps-demo'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/maps-demo/'}),
);

app.listen(process.env.PORT || 8080);
