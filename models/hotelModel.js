const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String },
    id: { type: Number },
    img: { type: [String] },
    property_type: { type: String },
    address: { type: String },
    description: { type: String },
    review_mean: { type: Number },
    starRating: { type: Number },
    highlight: { type: [String] },
    coupon: { type: Boolean },
    point_gain: { type: Number },
    facilities: { type: [String] },
    Staycation_offers_available: { type: Object },
    porperty_polices: { type: Object }
  },
  { collection: 'KhachSan' }
);

const Hotel = mongoose.model('KhachSan', hotelSchema);

module.exports = Hotel;
