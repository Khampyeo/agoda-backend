const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const hotelRouter = require('./routes/hotelRouter');
const roomRouter = require('./routes/roomRouter');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/rooms', roomRouter);

module.exports = app;
