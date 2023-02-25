// import React from 'react';

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

// //need to pull dog location from search results 
// function dogResults {


//     //call getLonLat
// }


// //Zip to long/lat geocoding converstion 
// function getLonLat(dogLocation){
//     const geoCodingUrl = "http://api.openweathermap.org/geo/1.0/zip?zip=" + dogLocation + "US&appid=d97fe2285b7bc123de0716fce9e4ac7a"; //alpha country code? 

//     //I don't think this is the "right" way for me to do it for this assignment
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

// function dogMap() {

//     const popup = L.popup()

//     return
//     <div className='map'>
//         {(dogLocation.map(potato => { //need to pull dog location from search results
//             console.log(dogLocation)
//             return (
//                 <Map preferred_location={potato.preferred_location}/>
//                 L.popup ([dogLocation], {icon: dogIcon}).setLatLng(long, lat).setContent(dogIcon).openOn(map);
//             )
//         }))}
//     </div>
// }


// export default Map;