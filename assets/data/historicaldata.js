function getTimeline(location) {
    for (let i = 0; i < historicaldata.locations.length; i++) {
        if (historicaldata.locations[i].name === location) {
            return historicaldata.locations[i].timeline
        }
    }
}

const historicaldata =
{
    "locations": [
        {
            "name": "Appleton Park",
            "lat": -41.285393,
            "lng": 174.754128,
            "info": "Appleton Park is a park situated on top of a retired landfill. The Kaiwharawhara Stream runs through the landfill. It also houses Zealandia's Birdwood car park.",
            "timeline": [
                {
                    "year": 1929,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "The Appleton Park area before dumping was a wooded valley.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/1929.png",
                            "alt": "Appleton Park 1929"
                        }
                    ],
                    "tags": [
                        "stream",
                        "forest"
                    ],
                    "citations": [
                        "-"
                    ]
                },
                {
                    "year": 1935,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Dumping begins at Appleton Park landfill. Toxic wastes include heavy metals, asbestos, and other hazardous materials.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/1935.png",
                            "alt": "Appleton Park 1935"
                        }
                    ],
                    "tags": [
                        "stream",
                        "forest"
                    ],
                    "citations": [
                        "-"
                    ]
                },
                {
                    "year": 1965,
                    "month": 8,
                    "day": 17,
                    "displayDate": "yes",
                    "event": "Appleton Park in 1965, now covered in grass.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/1965.png",
                            "alt": "Appleton Park 1965-8-17"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://archivesonline.wcc.govt.nz/assets/display/260646-max?u=9e350d095b684ae26e476837ac174939"
                    ]
                },
                {
                    "year": 2025,
                    "month": 2,
                    "day": 12,
                    "displayDate": "yes",
                    "event": "Appleton Park in 2025 includes a recent cycle path.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/2025.png",
                            "alt": "Appleton Park 2025-2-12"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "-"
                    ]
                },
                {
                    "year": 2025,
                    "month": null,
                    "day": null,
                    "displayDate": "no",
                    "event": "Appleton Park at Chaytor Street tip was used as a rubbish dump. According to GWRC and WCC, the site was filled with fuel oil, corrugated iron, petrol tines, lubricating drums, steam boilers, tar drums, iron castings, car bodies, sheep carcasses and discards from an electricity powerhouse. The site was closed in 1940, covered with a layer of clay, and grass was planted on top. More information about this location can be found on the WCC archives.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/appleton/2025.png",
                            "alt": "Appleton Park 2025"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://archivesonline.wcc.govt.nz/nodes/view/738450?keywords=Birdwood+street+chaytor+tip&type=all&highlights=eyIwIjoiYmlyZHdvb2QiLCIxIjoic3RyZWV0IiwiMiI6ImNoYXl0b3IiLCI0IjoidGlwIiwiNiI6InRpcCwiLCIxMCI6InN0cmVldC4iLCIxMyI6InRpcC4iLCIzMSI6InRpcHMiLCI1NCI6InRpcDoiLCI1NiI6InN0cmVldCwifQ%3D%3D "
                    ]
                }
            ]
        },
        {
            "name": "Estuary",
            "lat": -41.260735,
            "lng": 174.789888,
            "info": "The Kaiwharawhara estuary is where the stream meets the harbour. It is not reachable by civilians. The rail line and the motorway cut off access.",
            "timeline": [
                {
                    "year": 2025,
                    "month": 1,
                    "day": 16,
                    "displayDate": "no",
                    "event": "The Kaiwharawhara estuary is an important place for inanga to lay their eggs. Inanga lay their eggs in low-hanging vegetation to protect them from predators. Restoring native vegetation along the estuary is super important for increasing inanga population. Unfortunately, the estuary collects lots of pollution, which can be harmful to the species that rely on it.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/estuary/2025.png",
                            "alt": "Estuary 2025-1-16"
                        }
                    ],
                    "tags": [
                        "stream",
                        "forest"
                    ],
                    "citations": [
                        "-"
                    ]
                }
            ]
        },
        {
            "name": "Ian Galloway Park",
            "lat": -41.276616,
            "lng": 174.754922,
            "info": "Ian Galloway park is built on a retired landfill. Injuries sustained on the sports park often lead to infection.",
            "timeline": [
                {
                    "year": 2025,
                    "month": null,
                    "day": null,
                    "displayDate": "no",
                    "event": "From 1946 to 1973, Ian Galloway Park operated as a rubbish dump. According to GWRC, a variety of industrial wastes were dumped here, including 500 kg of cyanide (a poisonous chemical) encased in concrete drums. Also, large quantities of industrial waste from the demolition of Miramar Gasworks are known to be disposed of at this site.  (this image is not ours)",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/ian_galloway/galloway.jpg",
                            "alt": "Ian Galloway Park 2025"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://www.gw.govt.nz/assets/Documents/1998/10/Landfills-in-the-Wellington-Region.pdf",
                        "https://fastly.4sqi.net/img/general/200x200/28041749_-Tph29U1v7F1wtBFVyUeMUpSCH-wCyrAHlEFQPs5Law.jpg"
                    ]
                }
            ]
        },
        {
            "name": "\u014ctari-Wilton's Bush",
            "lat": -41.265993,
            "lng": 174.757727,
            "info": "The only untouched bush in Wellington.",
            "timeline": [
                {
                    "year": 1995,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Testing and site visits from 1995 revealed rust colored leachate within the stream. As of 1998, high levels of iron exceeded the ANZECC Aquatic Ecosystems guideline level. More information about this site can be found here: (Page 279) ",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/otari/otari.jpg",
                            "alt": "\u014ctari-Wilton's Bush 1995"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://www.gw.govt.nz/assets/Documents/1998/10/Landfills-in-the-Wellington-Region.pdf",
                        "https://wellingtongardens.nz/assets/112018_Brockie-Rock-Garden-2-1__ScaleWidthWzkwMF0.jpg"
                    ]
                },
                {
                    "year": 2020,
                    "month": 10,
                    "day": 13,
                    "displayDate": "yes",
                    "event": "Pua o te R\u0113inga/Woodrose seeds were gifted by the Ng\u0101ti Maniapoto and Ng\u0101ti Rereahu iwi and sown at \u014ctari-Wilton's Bush. It was also translocated to Zealandia on the same date.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/pua_o_te_reinga.jpg",
                            "alt": "\u014ctari-Wilton's Bush 2020-10-13"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://www.doc.govt.nz/nature/native-plants/dactylanthus/",
                        "https://www.nzgeo.com/stories/flower-of-hades/"
                    ]
                }
            ]
        },
        {
            "name": "Karori Cemetary",
            "lat": -41.272283,
            "lng": 174.750603,
            "info": "The second biggest cemetary in New Zealand.",
            "timeline": [
                {
                    "year": 2025,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "This location is a common illegal dumping site. Rubbish such as furniture, appliances, asbestos containing materials, old engine motors and other inorganic waste can be found here. This illegal dumping degrades and pollutes the stream. ",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/karori_cemetary/memorial.jpg",
                            "alt": "Karori Cemetary 2025"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://wellington.govt.nz/cemeteries/wellington-cemeteries/karori-cemetery/about-karori-cemetery",
                        "https://friendsofkaroricemetery.co.nz/"
                    ]
                }
            ]
        },
        {
            "name": "Trelissick Park",
            "lat": -41.260289,
            "lng": 174.771211,
            "info": "A park in Ngaio Gorge along the stream.",
            "timeline": [
                {
                    "year": 2025,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Trelissick Park contains crumbling water infrastructure from the early 20th century. Recently, a steel sewage pipe has been leaking raw sewage into the Kaiwharawhara stream.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/trelissick/sewagepipe.jpeg",
                            "alt": "Trelissick Park 2025"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "-"
                    ]
                }
            ]
        },
        {
            "name": "\u014ctari land slip",
            "lat": -41.269024,
            "lng": 174.753971,
            "info": "In 2022, a massive land slip occurred here.",
            "timeline": [
                {
                    "year": 2022,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "In 2022, a massive land slip occurred at \u014ctari-Wilton's Bush.  Large amounts of soil collapsed down a hill, undercutting a small section of the hilltop sports field and eventually stifling the flow of the Kaiwharawhara Stream through the valley. Erosion of the soil bank into the Kaiwharawhara continues to occur as native flora from replanting efforts struggle to take root before they are displaced.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/otari/land_slip.jpg",
                            "alt": "\u014ctari land slip 2022"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://www.stuff.co.nz/national/129677712/massive-sports-ground-slip-like-porridge ",
                        "https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DfGZQfjEdZd7oKlsiR53VLHvSZExpMzuRmKdwHbkL9PkMfyddGZQ6vogmbWkrUgWseB%2F%2FPgMd4kaOiFJuY5%2FjuNTzNF%2F8xWjeqleM+jvNihED9aQgmCWwNDwVzlPaNCu8EA+ocvBN2eo1JVTmGkX0pmBkogFrROF8XzAuFHhL016?resolution=1240x700"
                    ]
                }
            ]
        },
        {
            "name": "St John's Pool",
            "lat": -41.289005,
            "lng": 174.753465,
            "info": "A former swimming hole, now unsafe due to contamination.",
            "timeline": [
                {
                    "year": 2025,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "This area, just outside of Zealandia Te M\u0101ra a T\u0101ne, located within Birdwood Reserve, was once a valued recreational swimming hole. Unfortunately, ongoing stream pollution has made this location unsafe.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/birdwood/swimming_hole.jpg",
                            "alt": "St John's Pool 2025"
                        }
                    ],
                    "tags": [
                        "stream",
                        "people"
                    ],
                    "citations": [
                        "-"
                    ]
                }
            ]
        },
        {
            "name": "Zealandia Te M\u0101ra a T\u0101ne",
            "lat": -41.294757,
            "lng": 174.749635,
            "info": "K\u0101kahi were relocated here",
            "timeline": [
                {
                    "year": 2018,
                    "month": 7,
                    "day": 22,
                    "displayDate": "yes",
                    "event": "150 k\u0101kahi/freshwater mussels (E. menziesii) were collected from Lake K\u014dhangapiripiri in collaboration with Taranaki Wh\u0101nui.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/kakahi.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2018-7-22"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://rarespecies.nzfoa.org.nz/species/freshwater-mussel/"
                    ]
                },
                {
                    "year": 2018,
                    "month": 7,
                    "day": 21,
                    "displayDate": "yes",
                    "event": "50 k\u0101kahi/freshwater mussels (E. aucklandica) were collected from the Wairarapa Moana in collaboration with Rangit\u0101ne o Wairarapa and Ng\u0101ti Kahungunu ki Wairarapa.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/kakahi.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2018-7-21"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://rarespecies.nzfoa.org.nz/species/freshwater-mussel/"
                    ]
                },
                {
                    "year": 2018,
                    "month": 8,
                    "day": 1,
                    "displayDate": "yes",
                    "event": "All 150 k\u0101kahi/freshwater mussels were transferred into fyke nets (temporary holding enclosures) in Roto Mahanga. The k\u0101kahi were PIT tagged, weighed, measured and released between August 1 and August 5.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/kakahi.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2018-8-1"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://rarespecies.nzfoa.org.nz/species/freshwater-mussel/"
                    ]
                },
                {
                    "year": 2022,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "An additional 150 k\u0101kahi/freshwater mussels (E. menziesii) were collected from K\u014dhangapiripiri in collaboration with Taranaki Wh\u0101nui and translocated to Zealandia. These mussells were not PIT tagged.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/kakahi.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2022"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://rarespecies.nzfoa.org.nz/species/freshwater-mussel/"
                    ]
                },
                {
                    "year": 2020,
                    "month": 10,
                    "day": 13,
                    "displayDate": "yes",
                    "event": "Pua o te R\u0113inga/Woodrose seeds were gifted by the Ng\u0101ti Maniapoto and Ng\u0101ti Rereahu iwi and sown at Zealandia.  It was also translocated to \u014ctari-Wilton's Bush on the same date.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/pua_o_te_reinga.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2020-10-13"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://www.doc.govt.nz/nature/native-plants/dactylanthus/",
                        "https://www.nzgeo.com/stories/flower-of-hades/"
                    ]
                },
                {
                    "year": 2004,
                    "month": 5,
                    "day": 20,
                    "displayDate": "yes",
                    "event": "64 pirita/green mistletoe seeds were sown. This propogation is considered to have failed.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/pirita.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2004-5-20"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews%2F20241227%20Ileostylus%20micranthus%20Overview%2Edocx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews",
                        "http://www.temarareo.org/TMR-Pirita.html"
                    ]
                },
                {
                    "year": 2018,
                    "month": 5,
                    "day": 2,
                    "displayDate": "yes",
                    "event": "First successful propogation of pirita/green mistletoe in Zealandia from a source population in Upper Hutt. The seeds were sown onto 19 trees.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/pirita.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2018-5-2"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews%2F20241227%20Ileostylus%20micranthus%20Overview%2Edocx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews",
                        "http://www.temarareo.org/TMR-Pirita.html"
                    ]
                },
                {
                    "year": 2022,
                    "month": 10,
                    "day": null,
                    "displayDate": "yes",
                    "event": "As of October 2022, nine host trees still present pirita/green mistletoe.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/pirita.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2022"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews%2F20241227%20Ileostylus%20micranthus%20Overview%2Edocx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews",
                        "http://www.temarareo.org/TMR-Pirita.html"
                    ]
                },
                {
                    "year": 2024,
                    "month": 5,
                    "day": 16,
                    "displayDate": "yes",
                    "event": "A number of pirita/green mistletoe seeds were sown onto various host plants. The seeds were provided from Wairarapa.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/pirita.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2024-5-16"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews%2F20241227%20Ileostylus%20micranthus%20Overview%2Edocx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews",
                        "http://www.temarareo.org/TMR-Pirita.html"
                    ]
                },
                {
                    "year": 2024,
                    "month": 11,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Five of the pirita/green mistletoe seeds sown on May 16th were observed to have sprouted.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/pirita.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2024"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews%2F20241227%20Ileostylus%20micranthus%20Overview%2Edocx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews",
                        "http://www.temarareo.org/TMR-Pirita.html"
                    ]
                },
                {
                    "year": 2023,
                    "month": 11,
                    "day": 22,
                    "displayDate": "yes",
                    "event": "White mistletoe was sown throughout the week onto 23 host plants. Seeds were provided from the Wairarapa.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/white_mistletoe.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2023-11-22"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews%2F20241227%20Tupeia%20antarctica%20Overview%2Edocx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFlora%2FMistletoe%20Overviews",
                        "https://rarespecies.nzfoa.org.nz/species/white-mistletoe/"
                    ]
                },
                {
                    "year": 2024,
                    "month": 8,
                    "day": 22,
                    "displayDate": "yes",
                    "event": "41 frogs were released from their boxed enclosures. These were the last animals within Zealandia to be released from captivity.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/frog.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2024-8-22"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fd%29%20Monitoring%20%26%20Management%2FNative%2FFauna%2FFrogs%2FHamilton%27s%20frogs%20%28formerly%20Maud%20Island%20frogs%29%2F1%29%20Monitoring%20%26%20data%2F3%29%20Surveys%20by%20year%20%282022%2Dpresent%29%2F2024%2F2024%20release%2FData%5F2024%20frog%20release%2Exlsx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fd%29%20Monitoring%20%26%20Management%2FNative%2FFauna%2FFrogs%2FHamilton%27s%20frogs%20%28formerly%20Maud%20Island%20frogs%29%2F1%29%20Monitoring%20%26%20data%2F3%29%20Surveys%20by%20year%20%282022%2Dpresent%29%2F2024%2F2024%20release",
                        "https://www.visitzealandia.com/Whats-On/ArtMID/1150/ArticleID/596/Media-Release-Major-national-conservation-milestone-for-rare-native-frog-species"
                    ]
                },
                {
                    "year": 2024,
                    "month": 8,
                    "day": 30,
                    "displayDate": "yes",
                    "event": "25 frogs were released from their boxed enclosures. These were the last animals within Zealandia to be released from captivity.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/frog.jpg",
                            "alt": "Zealandia Te M\u0101ra a T\u0101ne 2024-8-30"
                        }
                    ],
                    "tags": [
                        "forest"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fd%29%20Monitoring%20%26%20Management%2FNative%2FFauna%2FFrogs%2FHamilton%27s%20frogs%20%28formerly%20Maud%20Island%20frogs%29%2F1%29%20Monitoring%20%26%20data%2F3%29%20Surveys%20by%20year%20%282022%2Dpresent%29%2F2024%2F2024%20release%2FData%5F2024%20frog%20release%2Exlsx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fd%29%20Monitoring%20%26%20Management%2FNative%2FFauna%2FFrogs%2FHamilton%27s%20frogs%20%28formerly%20Maud%20Island%20frogs%29%2F1%29%20Monitoring%20%26%20data%2F3%29%20Surveys%20by%20year%20%282022%2Dpresent%29%2F2024%2F2024%20release",
                        "https://www.visitzealandia.com/Whats-On/ArtMID/1150/ArticleID/596/Media-Release-Major-national-conservation-milestone-for-rare-native-frog-species"
                    ]
                }
            ]
        },
        {
            "name": "Roto M\u0101hanga",
            "lat": -41.29869,
            "lng": 174.74444,
            "info": "Toitoi were relocated here",
            "timeline": [
                {
                    "year": 2023,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "160 toitoi (G. cotidianus) were translocated from Lake K\u014dhangapiripiri. 158 were successfully released into Roto M\u0101hanga.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/toitoi.jpg",
                            "alt": "Roto M\u0101hanga 2023"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://www.visitzealandia.com/Whats-On/ArtMID/1150/ArticleID/468/Toitoi-Translocation"
                    ]
                },
                {
                    "year": 2024,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "159 toitoi were translocated and successfully released into Roto M\u0101hanga.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/toitoi.jpg",
                            "alt": "Roto M\u0101hanga 2024"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://www.visitzealandia.com/Whats-On/ArtMID/1150/ArticleID/468/Toitoi-Translocation"
                    ]
                },
                {
                    "year": 2025,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "The planned three-year release of toitoi into Roto M\u0101hanga will conclude in 2025.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/toitoi.jpg",
                            "alt": "Roto M\u0101hanga 2025"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://www.visitzealandia.com/Whats-On/ArtMID/1150/ArticleID/468/Toitoi-Translocation"
                    ]
                },
                {
                    "year": 2011,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Projects were undertaken in 2011 to remove brown trout from Roto M\u0101hanga. ",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/brown_trout.jpg",
                            "alt": "Roto M\u0101hanga 2011"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFauna%2F20241224%20Toitoi%2DGobiomorphus%20cotidianus%20Overview%2Edocx&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&parent=%2FS%2FConservationResearch%2Fh%29%20Species%20Overviews%20%26%20How%2Dto%27s%2FSpecies%20Overviews%2FFauna",
                        "https://www.flyfisherman.com/editorial/all-about-brown-trout/454242"
                    ]
                }
            ]
        },
        {
            "name": "Roto Kawau",
            "lat": -41.29256,
            "lng": 174.75161,
            "info": "Eurasian perch were introduced here",
            "timeline": [
                {
                    "year": 1874,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Eurasian perch (P. fluviatilis) were first introduced to Roto Kawau in 1874. This invasive species has dominated the aquatic ecosystem.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/eurasian_perch.jpg",
                            "alt": "Roto Kawau 1874"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Ff%29%20Projects%2Fk%29%20Lake%20Rehabilitation%2FLower%20lake%20eradication%202020%2Fb%29%20operations%20%26%20planning%2FField%20operations%2FField%5Fsurveys%2Felectric%20fishing%20report%2FRemoval%20of%20perch%20from%20Roto%20Kawau%202020%2Epdf&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&q=eurasian%20perch&parent=%2FS%2FConservationResearch&parentview=7"
                    ]
                },
                {
                    "year": 2007,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Boat electrofishing and netting techniques removed 3946 Eurasian perch from Roto Kawau (22% of the total perch biomass).",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/eurasian_perch.jpg",
                            "alt": "Roto Kawau 2007"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Ff%29%20Projects%2Fk%29%20Lake%20Rehabilitation%2FLower%20lake%20eradication%202020%2Fb%29%20operations%20%26%20planning%2FField%20operations%2FField%5Fsurveys%2Felectric%20fishing%20report%2FRemoval%20of%20perch%20from%20Roto%20Kawau%202020%2Epdf&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&q=eurasian%20perch&parent=%2FS%2FConservationResearch&parentview=7"
                    ]
                },
                {
                    "year": 2008,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Subsequent Eurasian perch removal efforts in 2008, 2009, and 2011 yielded an additional 11,091 Eurasian perch .",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/eurasian_perch.jpg",
                            "alt": "Roto Kawau 2008"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Ff%29%20Projects%2Fk%29%20Lake%20Rehabilitation%2FLower%20lake%20eradication%202020%2Fb%29%20operations%20%26%20planning%2FField%20operations%2FField%5Fsurveys%2Felectric%20fishing%20report%2FRemoval%20of%20perch%20from%20Roto%20Kawau%202020%2Epdf&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&q=eurasian%20perch&parent=%2FS%2FConservationResearch&parentview=7"
                    ]
                },
                {
                    "year": 2009,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Subsequent Eurasian perch removal efforts in 2008, 2009, and 2011 yielded an additional 11,091 Eurasian perch .",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/eurasian_perch.jpg",
                            "alt": "Roto Kawau 2009"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Ff%29%20Projects%2Fk%29%20Lake%20Rehabilitation%2FLower%20lake%20eradication%202020%2Fb%29%20operations%20%26%20planning%2FField%20operations%2FField%5Fsurveys%2Felectric%20fishing%20report%2FRemoval%20of%20perch%20from%20Roto%20Kawau%202020%2Epdf&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&q=eurasian%20perch&parent=%2FS%2FConservationResearch&parentview=7"
                    ]
                },
                {
                    "year": 2011,
                    "month": null,
                    "day": null,
                    "displayDate": "yes",
                    "event": "Subsequent Eurasian perch removal efforts in 2008, 2009, and 2011 yielded an additional 11,091 Eurasian perch .",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/eurasian_perch.jpg",
                            "alt": "Roto Kawau 2011"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Ff%29%20Projects%2Fk%29%20Lake%20Rehabilitation%2FLower%20lake%20eradication%202020%2Fb%29%20operations%20%26%20planning%2FField%20operations%2FField%5Fsurveys%2Felectric%20fishing%20report%2FRemoval%20of%20perch%20from%20Roto%20Kawau%202020%2Epdf&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&q=eurasian%20perch&parent=%2FS%2FConservationResearch&parentview=7"
                    ]
                },
                {
                    "year": 2020,
                    "month": 2,
                    "day": 17,
                    "displayDate": "yes",
                    "event": "Beginning February 17th, boat electrofishing and gill netting was undertaken to remove 2316 Eurasian perch from the lower reservoir. This was the 6th removal of perch from the lake to occur since February 2007.",
                    "img": [
                        {
                            "src": "assets/img/historicaldata/zealandia/eurasian_perch.jpg",
                            "alt": "Roto Kawau 2020-2-17"
                        }
                    ],
                    "tags": [
                        "stream"
                    ],
                    "citations": [
                        "https://zealandia1.sharepoint.com/S/ConservationResearch/Forms/AllItems.aspx?id=%2FS%2FConservationResearch%2Ff%29%20Projects%2Fk%29%20Lake%20Rehabilitation%2FLower%20lake%20eradication%202020%2Fb%29%20operations%20%26%20planning%2FField%20operations%2FField%5Fsurveys%2Felectric%20fishing%20report%2FRemoval%20of%20perch%20from%20Roto%20Kawau%202020%2Epdf&viewid=18821017%2D10cc%2D4f88%2D929e%2Dc2cfa6fc8c2f&q=eurasian%20perch&parent=%2FS%2FConservationResearch&parentview=7"
                    ]
                }
            ]
        }
    ]
}