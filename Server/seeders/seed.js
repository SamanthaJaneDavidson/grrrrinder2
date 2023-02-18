const db = require('../config/connection');
const { User, Dog } = require('../models');
const userSeeds = require('./userSeeds.json');
const dogSeeds = require('./dogSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Dog.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < dogSeeds.length; i++) {
      const { _id, user_id } = await Dog.create(dogSeeds[i]); //I'm doing something wrong here with how I'm referencing dog to owner and hooking it up here. 
      const user = await User.findOneAndUpdate(
        { username: user_id }, //Same issue as above. I don't thing user_id is right
        {
          $addToSet: {
            dog: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
