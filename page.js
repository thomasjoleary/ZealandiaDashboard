///////////////////////////////////
// Map Instantiation
var map = L.map('map').setView([-41.2883, 174.7666], 12);

let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
osm.addTo(map);

let baseMaps = {
    "OpenStreetMap": osm
}

let catchmentGroup = new L.LayerGroup()
catchmentGroup.addTo(map)
let catchmentgeo = L.geoJson(catchment)
catchmentGroup.addLayer(catchmentgeo)

let zealandiaGroup = new L.LayerGroup()
zealandiaGroup.addTo(map)
let zealandiageo = L.geoJson(zealandia).addTo(map);
zealandiaGroup.addLayer(zealandiageo)

let kaiwharawharaGroup = new L.LayerGroup()
kaiwharawharaGroup.addTo(map)
let kaiwharawharageo = L.geoJson(kaiwharawhara).addTo(map);
kaiwharawharaGroup.addLayer(kaiwharawharageo)

let markers = new L.LayerGroup().addTo(map)

let overlayMaps = {
    "Kaiwharawhara Catchment": catchmentGroup,
    "Zealandia": zealandiaGroup,
    "Kaiwharawhara Stream": kaiwharawharaGroup,
    "Markers": markers
}

let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map)

map.setMaxBounds([[-41.15177509803096, 175.3280641410647], [-41.42985785717913, 174.2143251273928]])

///////////////////////////////////
// Marker Making

let currentSelect

let selectedIcon = new L.Icon({
    iconUrl: 'assets/images/marker-icon-2x-blue.png',
    iconSize: [50, 82],
    iconAnchor: [24, 82],
    popupAnchor: [1, -34],
});

let defaultIcon = new L.Icon.Default;

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
    let title = document.getElementById('info-title')
    let marker = findMarkerinList(e.target)
    title.innerHTML = marker.getName()
    dataView.innerHTML = marker.getData()

    if (currentSelect) {
        currentSelect.setIcon(defaultIcon)
    }
    e.target.setIcon(selectedIcon)
    currentSelect = e.target
}

function markerMaker(name, lat, lng) {
    let constructed = new marker(name, lat, lng)

    constructed.setLMarker(L.marker(constructed.getPos()).addTo(map))

    constructed.getLMarker().on('click', dataFromMarker)

    markerList.push(constructed)

    markers.addLayer(constructed.getLMarker())

    return constructed
}

/*
function markerPopup(marker, text) {
    marker.getLMarker().bindPopup(text)
}
*/

let popupopen = false;

function markerAdd(e) {

    let popup = document.getElementById('popup')

    if (popupopen === false) {
        popup.style.display = "block"
        popupopen = true
    } else {
        popup.style.display = "none"
        popupopen = false
    }

}

let popupname = ""
let popupinfo = ""

function setMarkerHere(e) {

    let marker = markerMaker(popupname, e.latlng.lat, e.latlng.lng)
    marker.setData(popupinfo)

    let popup = document.getElementById('popup')
    popup.style.display = "none"
    popupopen = false

    document.getElementById('popupname').value = ""
    document.getElementById('popupinfo').value = ""

    map.off('click', setMarkerHere)
    map.on('click', onMapClick)

}

function popupSubmit(e) {

    e.preventDefault()

    popupname = document.getElementById('popupname').value
    popupinfo = document.getElementById('popupinfo').value

    map.on('click', setMarkerHere)
    map.off('click', onMapClick)

}

///////////////////////////////////
// Sample Markers
let tangle = markerMaker("Tanglewood", -41.289273, 174.754056)
tangle.setData("I can see you. Turn around.")
let dam = markerMaker("Dam", -41.298383, 174.744959)
dam.setData("Dam with a great view and lots of wind.")
let suspension = markerMaker("John's Suspension Bridge", -41.29768, 174.746854)
suspension.setData("John LOVES this bridge and its steel cable.")
let estuary = markerMaker("Estuary", -41.260735, 174.789888)
estuary.setData("Where the freshwater meets the saltwater!")
let fishladder = markerMaker("Fish Ladder", -41.259848, 174.769296)
fishladder.setData("Fish ladder, but also where the two main branches of the river meet!")
let karoricemetery = markerMaker("Karori Cemetery", -41.276083, 174.751224)
karoricemetery.setData("Plastic flowers left at graves here are commonly blown into the Kaiwharawhara.")
let appleton = markerMaker("Appleton Park", -41.285393, 174.754128)
appleton.setData("Built on top a landfill. Leachate from this landfill leaks into the Kaiwharawhara.")
let otari = markerMaker("Otari-Wilton's Bush", -41.266592, 174.755824)
otari.setData("The only place with untouched bush in Wellington!")
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
var coordsText = "Mouse coordinates:";
map.on('mousemove', onMapMouseMove);

function onMapMouseMove(e) {
    var x, y;

    x = e.latlng.lat.toFixed(5);
    y = e.latlng.lng.toFixed(5);
    coordsText = "Mouse coordinates: " + x + ", " + y;
    document.getElementById("coordsbox").innerHTML = coordsText;
}
///////////////////////////////////

catchmentgeo.bindPopup("Kaiwharawhara Catchment");
catchmentgeo.setStyle({fillColor: 'lime', fillOpacity: 0.2, color: 'green', weight: 1});

zealandiageo.bindPopup("Zealandia");
zealandiageo.setStyle({fillColor: 'orange', fillOpacity: 0.2, color: 'orange', weight: 3});

kaiwharawharageo.bindPopup("Kaiwharawhara Stream");

let popupbutton = document.getElementById('popupsubmit')
popupbutton.addEventListener('click', popupSubmit)
