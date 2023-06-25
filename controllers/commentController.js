const redis = require('redis');

const client = redis.createClient({
  host: 'localhost',
  port: 6379
});

exports.getAllCommentByHotel = async (req, res) => {
  if (!client.isOpen) {
    await client.connect();
  }
  // , {
  //   LIMIT: { from: 0, size: 10 }
  // }

  const result = await client.ft.search('idx', '@hotelId: [2096 2096]');
  res.status(200).json({
    status: 'success',
    result
  });
};
exports.createComment = async (req, res) => {
  client.connect();

  client.on('connect', () => {
    console.log('Connected to Redis');
  });

  // const {
  //   userId,
  //   name,
  //   country,
  //   typeGuest,
  //   typeRoom,
  //   time,
  //   comment,
  //   title,
  //   stayOn,
  //   dayOfStayed,
  //   hotelId,
  //   rating
  // } = req.body;
  for (let i = 4000000; i < 5000000; i += 1) {
    client.HSET(`Comment:${i}`, {
      userId: i % 34567,
      name: `name:${i % 34567}`,
      country: ['VietNam', 'America', 'Japan', 'Korea', 'Canada', 'ThaiLand'][
        (i % 34567) % 6
      ],
      typeGuest: ['Bussiness', 'Couples', 'Solo', 'Family', 'Group'][i % 5],
      typeRoom: ['Deluxe', 'Executive', 'Junior', 'Premier'][i % 4],
      reviewAt: '22/6/2023',
      comment: ['Good', 'excellent', 'Normaly', 'Not bad', 'Quiet nice'][i % 5],
      title: 'No title',
      stayOn: '21/6/2023',
      dayOfStayed: 3,
      hotelId: i % 13278,
      roomId: i % 20000,
      rating: [5, 6, 7, 8, 9, 10][i % 6]
    });
  }
  res.status(200).json({
    status: 'create success'
    // result: result
  });
};
