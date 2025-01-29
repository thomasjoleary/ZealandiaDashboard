var map = L.map('map').setView([-41.2883, 174.7666], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

map.setMaxBounds([[-41.15177509803096, 175.3280641410647], [-41.42985785717913, 174.2143251273928]])

function NameToCircle(cityname) {
    var result;
    var index;
    var entry;
    var circle;

    for (index = 0; index < cities.length; ++index) {
        entry = cities[index];
        if (entry.city.toUpperCase() === cityname.toUpperCase()) {
            result = entry;
            circle = L.circle([entry.lat, entry.lng], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.3,
                radius: Math.cbrt(entry.population) * 1000,
            }).addTo(map);
            circle.bindPopup(entry.city);
            break;
        }
    }
    console.log(result)
    return result;
}

function giveBounds() {
    var bounds = map.getBounds();
    console.log(bounds);
    return bounds;
}