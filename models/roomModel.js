const mongoose = require('mongoose');
// const validator = require('validator');

const roomSchema = new mongoose.Schema(
  {
    name: { type: String },
    id: { type: Number },
    img: { type: [String] },
    type_room: { type: String },
    highest_price: { type: Number },
    current_price: { type: Number },
    area: { type: Number },
    people: {
      aduld: Number,
      child: Number
    },
    benefit: { type: [String] },
    room_facilities: { type: [String] },
    point_gain: { type: Number },
    coupon: { type: Object },
    review: { type: Number },
    polices: { type: Object },
    booked_day: { type: Object },
    hotel_id: { type: Number }
  },
  { collection: 'Phong' }
);

const Room = mongoose.model('Phong', roomSchema);

module.exports = Room;
