const db = require('../config/connection');
const { User, Dog } = require('../models');
const userSeeds = require('./userSeeds.json');
const dogSeeds = require('./dogSeed.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Dog.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < dogSeeds.length; i++) {
      const { _id, dog_owner } = await Dog.create(dogSeeds[i]); 
      const user = await User.findOneAndUpdate(
        { username: dog_owner }, 
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
