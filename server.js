const express = require('express');
console.log(express);
const app = express();

app.use(express.static('./dist/angular-pwa-demo'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/angular-pwa-demo/'});
});

app.listen(process.env.PORT || 8080);