const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");


mapboxgl.accessToken = "pk.eyJ1Ijoia2F0YmFsbG8iLCJhIjoiY2phOXVpYzM0MGt5cTJ3cTkyaXZlOTB1ayJ9.-Yg3Z6jWCdF_2FPSEWkIRQ";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);


// FETCH allhotels
fetch('/api')
.then((allThings)=>{
	// console.log(hotels)
	return allThings.json()
})
.then((allThings)=>{
	// console.log(hotels)
	const allHotels = document.getElementById("hotels-choices")
	const allAct = document.getElementById("activities-choices")
	const allRest = document.getElementById("restaurants-choices")

	allThings[0].forEach( function (hotel){
			const option = document.createElement('option')
			option.label = hotel.name
			option.value = hotel.id
			allHotels.append(option)
	})

	allThings[1].forEach( function (act){
			const option = document.createElement('option')
			option.label = act.name
			option.value = act.id
			allAct.append(option)
	})

	allThings[2].forEach( function (rest){
			const option = document.createElement('option')
			option.label = rest.name
			option.value = rest.id
			allRest.append(option)
	})

}).catch(console.error.bind(console))

const hotelOptions = document.getElementById("hotels-choices")

hotelOptions.addEventListener('change',()=>{
	console.log(hotelOptions.selectedIndex)
	console.log(hotelOptions.item(hotelOptions.selectedIndex))
	return hotelOptions.item(hotelOptions.selectedIndex)
})



document.getElementById("hotels-add")
	.addEventListener('click', ()=>{
		
	})














