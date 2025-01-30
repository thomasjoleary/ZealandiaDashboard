///////////////////////////////////
// Map Instantiation
var map = L.map('map').setView([-41.2883, 174.7666], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

map.setMaxBounds([[-41.15177509803096, 175.3280641410647], [-41.42985785717913, 174.2143251273928]])

///////////////////////////////////
// Marker Making
function markerMaker(name, lat, lng) {
    let constructed = new marker(name, lat, lng)

    constructed.setLMarker(L.marker(constructed.getPos()).addTo(map))

    return constructed
}

function markerPopup(marker, text) {
    marker.getLMarker().bindPopup(text)
}

///////////////////////////////////
// Sample Markers
let tangle = markerMaker("Tanglewood", -41.289273, 174.754056)
markerPopup(tangle, "Tanglewood")
let dam = markerMaker("Dam", -41.298383, 174.744959)
markerPopup(dam, "Upper Karori Dam")
let suspension = markerMaker("John's Suspension Bridge", -41.29768, 174.746854)
markerPopup(suspension, "John's Lover")
///////////////////////////////////


///////////////////////////////////
// Lat Long Popup Function (for debugging)
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
///////////////////////////////////


geojson = L.geoJson(kaiwharawhara).addTo(map);