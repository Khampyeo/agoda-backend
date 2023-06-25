const Room = require('../models/roomModel');

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: rooms.length,
      data: {
        rooms
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getAllRoomsByHotel = async (req, res) => {
  try {
    const rooms = await Room.find({ hotel_id: req.params.id });
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: rooms.length,
      data: {
        rooms
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
// exports.getRoom = async (req, res) => {
//   try {
//     const room = await Room.find(Id: req.params.id });
//     // Tour.findOne({ _id: req.params.id })

//     res.status(200).json({
//       status: 'success',
//       data: {
//         room
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
