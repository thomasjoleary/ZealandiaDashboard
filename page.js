///////////////////////////////////
// Map Instantiation
var map = L.map('map').setView([-41.2883, 174.7666], 12);

// adds detailed map layer
let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
osm.addTo(map);

// adds simple map layer
let withoutStreetNames = L.tileLayer('https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
withoutStreetNames.addTo(map);

var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

// sets map layers
let baseMaps = {
    "Detailed Map": osm,
    "Simple Map": withoutStreetNames,
    "Topographic": openTopoMap
}

// instantiates markerList, will be used in many functions to hold
// instances of the marker class found in marker.js
let markerList = []

// adds Kaiwharawhara catchment overlay
let catchmentGroup = new L.LayerGroup()
catchmentGroup.addTo(map)
let catchmentgeo = L.geoJson(catchment)
catchmentGroup.addLayer(catchmentgeo)

// adds Zealandia overlay
let zealandiaGroup = new L.LayerGroup()
zealandiaGroup.addTo(map)
let zealandiageo = L.geoJson(zealandia).addTo(map);
zealandiaGroup.addLayer(zealandiageo)

// adds Kaiwharawhara stream overlay
let kaiwharawharaGroup = new L.LayerGroup()
kaiwharawharaGroup.addTo(map)
let kaiwharawharageo = L.geoJson(kaiwharawhara).addTo(map);
kaiwharawharaGroup.addLayer(kaiwharawharageo)

// adds markers layer to add map Markers to
let markers = new L.LayerGroup().addTo(map)

// sets overlays
let overlayMaps = {
    "Kaiwharawhara Catchment": catchmentGroup,
    "Zealandia": zealandiaGroup,
    "Kaiwharawhara Stream": kaiwharawharaGroup,
    "Markers": markers
}

// applies map layers and overlays
let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map)

// sets the maximum bounds so users cannot scroll away from the Wellington region
map.setMaxBounds([[-41.15177509803096, 175.3280641410647], [-41.42985785717913, 174.2143251273928]])

// helper function to reset the info box on the right side of the dashboard
function clearInfo() {

    let dataView = document.getElementById('info-content')
    let title = document.getElementById('info-title')
    title.innerHTML = "To use:"
    dataView.innerHTML = "Click on a marker to see more information"
    // hide the image box
    clearPictures()

    if (currentSelect) {
        let currentMarker = findMarkerinList(currentSelect)
        setLMarkerIcon(currentMarker, currentMarker.getLIcon())
    }
    currentSelect = null

}

// remove pictures from right side of the dashboard
function clearPictures() {
    let img = document.getElementById('picture')
    img.style.visibility = 'hidden';
    img.style.maxHeight = '0px';
}

// show pictures on right side of the dashboard
function showPictures() {
    let img = document.getElementById('picture')
    img.style.visibility = 'visible';
    img.style.maxHeight = '100%';
}

///////////////////////////////////
// Date Range

// displays all markers between start and end, where start and end are dates
// from the date inputs when they are enabled
function displayBetween(start, end) {
    for (let i = 0; i < markerList.length; i++) {
        // if event date is between start and end, display the marker
        if (markerList[i].containsDateWithinRange(start, end)) {
            markerList[i].getLMarker()._icon.style.visibility = 'visible'
        } else {
            // get image data and check if one of the images is in the range
            // if so, make the marker visible
            markerList[i].setEventDataFromTimeline(getTimeline(markerList[i].getName()))
            let imgData = markerList[i].getRangeEventImg(start, end)
            if (imgData != null) {
                if (imgData.length > 0) {
                    markerList[i].getLMarker()._icon.style.visibility = 'visible'
                } else {
                // else hide the marker
                    markerList[i].getLMarker()._icon.style.visibility = 'hidden'
                }
            } else {
                // else hide the marker
                markerList[i].getLMarker()._icon.style.visibility = 'hidden'
            }
        }
    }
}

// displays all markers, used when the interval sliders are disabled
function displayAll() {
    for (let i = 0; i < markerList.length; i++) {
        markerList[i].getLMarker()._icon.style.visibility = 'visible'
    }
}

// accesses the starting date
let startDate = document.getElementById('dateStart')
let startDateval = document.getElementById('startValue')
startDate.value = "1900-01-01"
// accesses the ending date
let endDate = document.getElementById('dateEnd')
let endDateval = document.getElementById('endValue')
endDate.value = "2030-12-31"
// defaults the date inputs to be disabled
startDate.disabled = true
endDate.disabled = true
// accesses the checkbox to enable the interval sliders
let enableDates = document.getElementById('intervalCheck')

// onclick function to enable and disable the interval sliders
enableDates.onclick = function() {
    if (enableDates.checked === true) {
        startDate.disabled = false
        endDate.disabled = false
        displayBetween(new Date(startDate.value), new Date(endDate.value))
    } else if (enableDates.checked === false) {
        startDate.disabled = true
        endDate.disabled = true
        displayAll()
    }
}

// updates the map when the starting interval slider is moved
startDate.oninput = function() {
    endDate.min = startDate.value
    displayBetween(new Date(startDate.value), new Date(endDate.value))
}

// updates the map when the ending interval slider is moved
endDate.oninput = function() {
    startDate.max = endDate.value
    displayBetween(new Date(startDate.value), new Date(endDate.value))
}


///////////////////////////////////
// Markers

// holds currently selected icon
let currentSelect

// icon for default icons when selected
let selectedIcon = new L.Icon({
    iconUrl: 'assets/img/icon/marker-icon-2x-blue.png',
    iconSize: [50, 82],
    iconAnchor: [24, 82],
    popupAnchor: [1, -34],
    shadowSize: [0, 0]
});

// alternative icon for caution
let cautionIcon = new L.Icon({
    iconUrl: 'assets/img/icon/warning-pin-background.png',
    iconSize: [50, 50],
    iconAnchor: [24, 46],
    popupAnchor: [1, -17],
    shadowSize: [0, 0]
})

// icon for selected caution icons
let selectedCautionIcon = new L.Icon({
    iconUrl: 'assets/img/icon/warning-pin-background.png',
    iconSize: [100, 100],
    iconAnchor: [48, 92],
    popupAnchor: [1, -17],
    shadowSize: [0, 0]
})

// default icon, without a shadow
let defaultIcon = new L.Icon.Default;
defaultIcon.options.shadowSize = [0, 0]

// finds a marker class instance in the markerList from a given map Marker
function findMarkerinList(marker) {
    for (let i = 0; i < markerList.length; i++) {
        if (markerList[i].getLMarker() === marker) {
            return markerList[i]
        }
    }
    return false
}

// sets a marker instance's map Marker icon to the given icon
function setLMarkerIcon(marker, icon) {
    marker.getLMarker().setIcon(icon)
    marker.setLIcon(icon)
}

// gets data from a marker class instance given an onclicked map Marker
function dataFromMarker(e) {
    // gets the pieces of the info section on the right of the dashboard
    let dataView = document.getElementById('info-content')
    let title = document.getElementById('info-title')
    let img = document.getElementById('picture')
    // gets the clicked map Marker's marker class instance
    let marker = findMarkerinList(e.target)
    // sets the info section to the marker
    title.innerHTML = marker.getPlaceName()
    dataView.innerHTML = marker.getPlaceInfo()

    // set image data
    marker.setEventDataFromTimeline(getTimeline(marker.getPlaceName()))
    // if there is no image, make the image box invisible and sizeless
    // if there is an image, make the image box visible and sizeable and display the image
    if (marker.getAllEventImg() == null) {
        clearPictures()
    } else {
        showPictures()
        // get bounds of the date range
        if (document.getElementById('intervalCheck').checked) {
            start = new Date(startDate.value)
            end = new Date(endDate.value)
            // display image closest to end of range
            let data = marker.getLatestEventImg(start, end)

            img.src = data.src
            img.alt = data.alt
            dataView.innerHTML = marker.getEventDesc()
        } else {
            // get last image data
            let data = marker.getLastEventImg()

            // display most recent image
            img.src = data.src
            img.alt = data.alt
            dataView.innerHTML = marker.getLastEventData().desc
        }
    }

    // if there is a marker currently selected
    if (currentSelect) {
        // set the currently selected Marker to its marker class instance's icon
        let currentMarker = findMarkerinList(currentSelect)
        setLMarkerIcon(currentMarker, currentMarker.getLIcon())
    }
    // set the icon of the clicked Marker to its marker class instance's selected icon
    e.target.setIcon(marker.getSIcon())
    // set the currently selected marker to the clicked marker
    currentSelect = e.target
}


// This function makes Markers on the map and ties them to
// instances of the marker class.
function markerMaker(name, lat, lng) {
    // instance of marker class
    let constructed = new marker(name, lat, lng) 
    // add map Marker instance to the marker class, building using given position
    constructed.setLMarker(L.marker(constructed.getPos(), {icon : defaultIcon}).addTo(map))
    // add onclick function to Marker on map
    constructed.getLMarker().on('click', dataFromMarker)
    // add the marker class instance to markerList
    markerList.push(constructed)
    // add the Marker for the map to the markers layer
    markers.addLayer(constructed.getLMarker())
    // set the marker class icon to default without shadow
    constructed.setLIcon(defaultIcon)
    // set the marker class selected icon to double in size
    constructed.setSIcon(selectedIcon)
    // return the marker class instance
    return constructed
}

/*
function markerPopup(marker, text) {
    marker.getLMarker().bindPopup(text)
}
*/

// popup should be closed by default
let popupopen = false;

// function to toggle popup visibility on add marker button being pressed
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

// name and info of popup should be blank at start
let popupname = ""
let popupinfo = ""

// function to add a marker to the map based on popup's name and info
// marker will be set wherever the user clicks
function setMarkerHere(e) {

    let popupdate = document.getElementById('popupdate')

    let marker = markerMaker(popupname, e.latlng.lat, e.latlng.lng)
    marker.setPlaceInfo(popupinfo)

    let popup = document.getElementById('popup')
    popup.style.display = "none"
    popupopen = false

    document.getElementById('popupname').value = ""
    document.getElementById('popupinfo').value = ""
    popupdate.value = ""

    map.off('click', setMarkerHere)
    map.on('click', onMapClick)

}

// on submitting the popup, setMarkerHere will be activated
function popupSubmit(e) {

    e.preventDefault()

    popupname = document.getElementById('popupname').value
    popupinfo = document.getElementById('popupinfo').value

    map.on('click', setMarkerHere)
    map.off('click', onMapClick)

}

// adds the submit functionality to the popup's submit button
let popupbutton = document.getElementById('popupsubmit')
popupbutton.addEventListener('click', popupSubmit)

///////////////////////////////////
// Sample Markers
let tangle = markerMaker("Tanglewood", -41.289273, 174.754056)
tangle.setPlaceInfo("I can see you. Turn around. Testing testing 1, 2, 3!")
let dam = markerMaker("Dam", -41.298383, 174.744959)
dam.setPlaceInfo("Dam with a great view and lots of wind.")
let suspension = markerMaker("John's Suspension Bridge", -41.29768, 174.746854)
suspension.setPlaceInfo("John LOVES this bridge and its steel cable.")
let estuary = markerMaker("Estuary", -41.260735, 174.789888)
estuary.setPlaceInfo("Where the freshwater meets the saltwater!")
let fishladder = markerMaker("Fish Ladder", -41.259848, 174.769296)
fishladder.setPlaceInfo("Fish ladder, but also where the two main branches of the river meet!")
let karoricemetery = markerMaker("Karori Cemetery", -41.276083, 174.751224)
karoricemetery.setPlaceInfo("Plastic flowers left at graves here are commonly blown into the Kaiwharawhara.")
let appleton = markerMaker("Appleton Park", -41.285393, 174.754128)
appleton.setPlaceInfo("Built on top a landfill. Leachate from this landfill leaks into the Kaiwharawhara.")
const appletonimg = Image()
appletonimg.src = "assets/img/historicaldata/appleton/2025.png"
appletonimg.alt = "Appleton Park in 2025 pictured from the south."
appleton.addEventData(new Date(2025, 1, 12), "Appleton Park in 2025", appletonimg, [])
let otari = markerMaker("Otari-Wilton's Bush", -41.266592, 174.755824)
otari.setPlaceInfo("The only place with untouched bush in Wellington!")
setLMarkerIcon(appleton, cautionIcon)
appleton.setSIcon(selectedCautionIcon)
///////////////////////////////////


///////////////////////////////////
// Lat Long Popup Function (for debugging)
let debugpopup = L.popup();

function onMapClick(e) {
    /* FOR DEBUGGING
    debugpopup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);*/

    // clears the info on the right side of the dashboard on clicking the map
    clearInfo()

}
// sets the onclick of the map
map.on('click', onMapClick);
///////////////////////////////////
// Coordinate box
var coordsText = "Mouse coordinates:";
map.on('mousemove', onMapMouseMove);
// when the mouse moves on the map, updates the coordinate box
function onMapMouseMove(e) {
    var x, y;

    x = e.latlng.lat.toFixed(5);
    y = e.latlng.lng.toFixed(5);
    coordsText = "Mouse coordinates: " + x + ", " + y;
    document.getElementById("coordsbox").innerHTML = coordsText;
}
///////////////////////////////////

// adds a popup when the catchment overlay is clicked on
catchmentgeo.bindPopup("Kaiwharawhara Catchment");
catchmentgeo.setStyle({fillColor: 'lime', fillOpacity: 0.2, color: 'green', weight: 1});
// adds a popup when the zealandia overlay is clicked on
zealandiageo.bindPopup("Zealandia");
zealandiageo.setStyle({fillColor: 'orange', fillOpacity: 0.2, color: 'orange', weight: 3});
// adds a popup when the kaiwharawhara stream overlay is clicked on
kaiwharawharageo.bindPopup("Kaiwharawhara Stream");

///////////////////////////////////
// big picture window
// functionality: when you click on an image in the right side of the dashboard
//      the image will be displayed in a larger window

let fullscreenImageOn = false;
let fullscreenImage = document.getElementById('fullscreenImage');
let fullscreenImageSrc = document.getElementById('fullscreenImageSrc');

// when an image on the right side of the dashboard is clicked
function onImageClick() {
    // if the image is not already fullscreen
    if (!fullscreenImageOn) {
        // make the image fullscreen
        fullscreenImage.style.display = 'block';
        fullscreenImageOn = true;
        // set the image source to the clicked image
        fullscreenImageSrc.src = document.getElementById('picture').src;
    }
}

function onFullscreenClick() {
    // if the image is fullscreen
    if (fullscreenImageOn) {
        // make the image not fullscreen
        fullscreenImage.style.display = 'none';
        fullscreenImageOn = false;
    }
}