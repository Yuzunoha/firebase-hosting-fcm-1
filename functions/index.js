const { https } = require('firebase-functions');

exports.index = https.onRequest((req, res) => {
  const html = `<!doctype html>
  <head>
    <title>Time</title>
  </head>
  <body>
    <p>こんにちは</p>
  </body>
</html>`;
  res.status(200).send(html);
});
