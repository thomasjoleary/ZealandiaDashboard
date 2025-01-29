var map = L.map('map').setView([-40.9006, 174.8860], 5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

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