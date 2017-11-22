const express = require('express')
const api = express.Router()
const models = require("./models");
const db = models.db

const Place = models.Place
const Hotel= models.Hotel
const Activity= models.Activity
const Restaurant= models.Restaurant

const hotelP = Hotel.findAll({
	include: [{model: Place}]
})
const ActivityP = Activity.findAll({
	include: [{model: Place}]
})
const RestaurantP = Restaurant.findAll({
	include: [{model: Place}]
	// include: [{ all: true }]
})


api.get('/hotels', (req, res, next) => {
			hotelP.then( (hotels)=>{
				res.json(hotels)
			}).catch(next)	
})

api.get('/', (req, res, next) => {
		Promise.all([hotelP, ActivityP, RestaurantP]).then( function(dataVals){
			res.json(dataVals)
		})
})





module.exports = api