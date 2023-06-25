const Hotel = require('./../models/hotelModel');
// const APIFeatures = require('./../utils/apiFeatures');

// exports.aliasTopTours = (req, res, next) => {
//   req.query.limit = '5';
//   req.query.sort = '-ratingsAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next();
// };

exports.getAllHotels = async (req, res) => {
  try {
    // EXECUTE QUERY
    // const features = new APIFeatures(Tour.find(), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .paginate();
    // const tours = await features.query;
    const hotels = await Hotel.find().limit(5);
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: hotels.length,
      data: {
        hotels
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.find({ address: /.*Flower.*/ });
    res.status(200).json({
      status: 'success',
      data: {
        hotel
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createHotel = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        hotel: newHotel
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
