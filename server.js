let express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('Database connected...')
  },
  err => {
    console.log('Cannot connect to the database' + err);
  }
);

const adUnitRoutes = require('./routes/adunit.route');
const app = express();

app.use(bodyParser.json());
app.use(cors());
//跨域请求设置
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });
const port = process.env.PORT || 4000;

app.use('/adunits', adUnitRoutes);
const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
