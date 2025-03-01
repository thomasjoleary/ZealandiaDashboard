const historicaldata =
{
    "locations": [
        {
            "name": "Appleton Park",
            "lat": -41.260735,
            "lng": 174.789888,
            "timeline": [
                {
                    "year": 1929,
                    "month": null,
                    "day": null,
                    "event": "The Appleton Park area before dumping was a wooded valley.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/1929.png",
                            "alt": "Appleton Park before dumping."
                        }
                    ]
                },
                {
                    "year": 1935,
                    "month": null,
                    "day": null,
                    "event": "Dumping begins at Appleton Park landfill. Toxic wastes include heavy metals, asbestos, and other hazardous materials.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/1935.png",
                            "alt": "Appleton Park dumping in 1935."
                        }
                    ]
                },
                {
                    "year": 1965,
                    "month": 8,
                    "day": 17,
                    "event": "Appleton Park landfill is covered in grass.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/1965.jpg",
                            "alt": "Appleton Park in 1965."
                        }
                    ]
                },
                {
                    "year": 2025,
                    "month": 2,
                    "day": 12,
                    "event": "Appleton Park landfill covered over with grass, a parking lot, and a cycle path.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/2025.png",
                            "alt": "Appleton Park in 2025 pictured from the south."
                        }
                    ]
                }
            ]
        },
        {
            "name": "Estuary",
            "lat": -41.285393,
            "lng": 174.754128,
            "timeline": [
                {
                    "year": 2025,
                    "month": 1,
                    "day": 16,
                    "event": "The Kaiwharawhara estuary is not reachable by civilians. The rail line and the motorway cut off access.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/estuary/2025.jpg",
                            "alt": "Estuary in 2025, looking upstream from the rail line."
                        }
                    ]
                }
            ]
        }
    ]
}

function getTimeline(location) {
    for (let i = 0; i < historicaldata.locations.length; i++) {
        if (historicaldata.locations[i].name === location) {
            console.log("getting timeline of " + location)
            return historicaldata.locations[i].timeline
        }
    }
}