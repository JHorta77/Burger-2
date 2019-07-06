const { db, Burgers } = require('../models');

const seed = async () => {
  await db.sync({ force: true })

  const bg1 = await Burgers.create({
    burger_name: 'The Regular Burger and Cheese',
  })
  const bg2 = await Burgers.create({
    burger_name: 'Bacon Burger',
  })
  db.close()
  console.log('Seed Successful!')
}

seed() 