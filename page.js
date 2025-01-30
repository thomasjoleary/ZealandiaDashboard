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
let markerList = []

function findMarkerinList(marker) {
    let m
    for (let i = 0; i < markerList.length; i++) {
        if (markerList[i].getLMarker() === marker) {
            return markerList[i]
        }
    }
    return false
}

function dataFromMarker(e) {
    let dataView = document.getElementById('info-content')
    dataView.innerHTML = findMarkerinList(e.target).getData()
}

function markerMaker(name, lat, lng) {
    let constructed = new marker(name, lat, lng)

    constructed.setLMarker(L.marker(constructed.getPos()).addTo(map))

    constructed.getLMarker().on('click', dataFromMarker)

    markerList.push(constructed)

    return constructed
}

function markerPopup(marker, text) {
    marker.getLMarker().bindPopup(text)
}

///////////////////////////////////
// Sample Markers
let tangle = markerMaker("Tanglewood", -41.289273, 174.754056)
tangle.setData("I can see you. Turn around.")
markerPopup(tangle, "Tanglewood")
let dam = markerMaker("Dam", -41.298383, 174.744959)
markerPopup(dam, "Upper Karori Dam")
let suspension = markerMaker("John's Suspension Bridge", -41.29768, 174.746854)
markerPopup(suspension, "John's Lover")
let estuary = markerMaker("Estuary", -41.260735, 174.789888)
markerPopup(estuary, "Kaiwharawhara Estuary")
let fishladder = markerMaker("Fish Ladder", -41.259848, 174.769296)
markerPopup(fishladder, "Fish Ladder")
let karoricemetery = markerMaker("Karori Cemetery", -41.276083, 174.751224)
markerPopup(karoricemetery, "Karori Cemetery")
let appleton = markerMaker("Appleton Park", -41.285393, 174.754128)
markerPopup(appleton, "Appleton Park")
let otari = markerMaker("Otari-Wilton's Bush", -41.266592, 174.755824)
markerPopup(otari, "Otari-Wilton's Bush")
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

kaiwharawharageo = L.geoJson(kaiwharawhara).addTo(map);
kaiwharawharageo.bindPopup("Kaiwharawhara Stream");