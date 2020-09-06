const express = require('express');
const cors = require('cors');

const app = express();
app.enable('trust proxy')

app.use(cors({optionSuccessStatus: 200}));
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
 
app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.header('accept-language'),
    "software": req.header('user-agent'),
  });
  console.log(req.body);
});

var listener = app.listen(process.env.PORT || 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
