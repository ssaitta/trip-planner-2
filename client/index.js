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
