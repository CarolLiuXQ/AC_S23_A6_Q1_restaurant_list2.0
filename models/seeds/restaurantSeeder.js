const mongoose = require('mongoose')
const restaurantList = require('../../restaurant.json').results
const Restaurant = require('../restaurant.js')
mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => console.log(error))
db.once('open', () => {
  console.log('mongodb connected')

  for (let i = 0; i < restaurantList.length; i++) {
    Restaurant.create({
      name: restaurantList[i].name,
      name_en: restaurantList[i].name_en,
      category: restaurantList[i].category,
      image: restaurantList[i].image,
      location: restaurantList[i].location,
      google_map: restaurantList[i].google_map,
      rating: restaurantList[i].rating,
      phone: restaurantList[i].phone,
      description: restaurantList[i].description
    })
  }
  console.log('done!')
})