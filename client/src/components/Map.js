// import React from 'react';
// import searchDogs from '../pages/Search-Dogs';

// //Base map
// const map = L.map('map').setView([39.9509, 75.1575], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// //Icon for the dogs if we can't actually load a link/pic to the popup 
// const dogIcon = L.icon({
//     iconUrl: "Images/dog-icon",
//     iconSize: [, 30]
// });


// //Zip to long/lat geocoding converstion 
// function getLonLat(dogLocation){
//     const geoCodingUrl = "http://api.openweathermap.org/geo/1.0/zip?zip=" + dogLocation + "US&appid=d97fe2285b7bc123de0716fce9e4ac7a"; 

//     fetch(geoCodingUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             var lon = data.coord.lon
//             var lat = data.coord.lat
//             dogMap(lat, lon);
//         })
// }

// function dogMap(lat, lon) {

//     const popup = L.popup()

//     return
//     <div className='map'>
//         {(props.perferred_location.map(potato => { 
//             console.log(props.perferred_location)
//             return (

//             )
//         }))}
//     </div>
// }


// export default Map;

// {/* <Map preferred_location={potato.preferred_location}/> //needs to also go in search dogs
// L.popup (["add dog name or something"], {icon: dogIcon}).setLatLng(long, lat).setContent */}
// // (dogIcon).openOn(map);
