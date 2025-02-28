// Marker class
// Used on Various Map Markers

class marker {
    constructor(name, lat, lng) {
        // placeData
        this.placeData = {
            "name": name,
            "lat": lat,
            "lng": lng,
            "info": null
        }

        // eventData
        this.eventData = [
            {
                "date": null, // Date() object
                "desc": null,
                "img": null, // Image() object
                "tags": []
            }
        ]

        // markerData
        this.markerData = {
            "LMarker": null,
            "icon": null,
            "sicon": null,
            "color": null
        }
    }



    // placeData

    getPlaceData() {
        return this.placeData
    }

    setPlaceData(name, lat, lng, info) {
        this.placeData = {
            "name": name,
            "lat": lat,
            "lng": lng,
            "info": info
        }
    }

    getPlaceName() {
        return this.placeData.name
    }

    setPlaceName(name) {
        this.placeData.name = name
    }

    getPlaceLat() {
        return this.placeData.lat
    }

    setPlaceLat(lat) {
        this.placeData.lat = lat
    }

    getPlaceLng() {
        return this.placeData.lng
    }

    setPlaceLng(lng) {
        this.placeData.lng = lng
    }

    getPlacePos() {
        return [this.placeData.lat, this.placeData.lng]
    }

    getPlaceInfo() {
        return this.placeData.info
    }

    setPlaceInfo(info) {
        this.placeData.info = info
    }



    // eventData

    getEventData() {
        return this.eventData
    }

    setEventData(data) {
        this.eventData = data
    }

    addEventData(date, desc, img, tags) {
        this.eventData.push({
            "date": date,
            "desc": desc,
            "img": img,
            "tags": tags
        })
    }

    isEventDataEmpty() {
        return this.eventData.length === 0
    }

    // sort the eventData by date
    // direction = 1 for ascending (earliest first), -1 for descending (latest first)
    // if a different direction value is given, the data will be sorted in ascending order
    // if no direction is given, the data will be sorted in ascending order
    sortEventData(direction = 1) {
        if (direction === -1) {
            return this.eventData.sort((a, b) => new Date(b.date) - new Date(a.date))
        }
        else {
            return this.eventData.sort((a, b) => new Date(a.date) - new Date(b.date))
        }
    }

    // return the set of event data that falls within the given date range
    // the set is sorted by date, earliest first
    getRangeEventData(minDate, maxDate) {
        this.sortEventData()
        return this.eventData.filter(e => new Date(e.date) >= minDate && new Date(e.date) <= maxDate)
    }

    // return the most recent event data that falls within the given date range
    // if no event data is found, return null
    getEarliestEventData(minDate, maxDate) {
        // filter by date range
        let filtered = this.getRangeEventData(minDate, maxDate)
        if (filtered.length === 0) {
            return null
        }
        // sort by date, earliest first
        let sorted = filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
        return sorted[0]
    }

    // return the most recent event data that falls within the given date range
    // if no event data is found, return null
    getLatestEventData(minDate, maxDate) {
        console.log("getLatestEventData")
        // filter by date range
        let filtered = this.getRangeEventData(minDate, maxDate)
        console.log("filtered", filtered)
        if (filtered.length === 0) {
            return null
        }
        // sort by date, latest first
        let sorted = filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
        console.log("sorted", sorted)
        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i].date === null) {
                continue
            } else {
                return sorted[i]
            }
        } return null
    }

    getFirstEventData() {
        return this.eventData.sort((a, b) => new Date(a.date) - new Date(b.date))[0]
    }

    getLastEventData() {
        return this.eventData.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    }

    getEventDate(eventData) {
        return eventData.date
    }

    setEventDate(eventData, date) {
        eventData.date = date
    }

    containsDateWithinRange(minDate, maxDate) {
        for (let i = 0; i < this.eventData.length; i++) {
            if (this.eventData[i].date === null) {
                continue
            } else if (this.eventData[i].date >= minDate && this.eventData[i].date <= maxDate) {
                return true
            }
        }
        return false
    }

    getLastEventDate() {
        return this.eventData.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date
    }

    getFirstEventDate() {
        return this.eventData.sort((a, b) => new Date(a.date) - new Date(b.date))[0].date
    }

    getEventDesc(eventData) {
        return eventData.desc
    }

    setEventDesc(eventData, desc) {
        eventData.desc = desc
    }

    getFirstEventDesc() {
        return this.eventData.sort((a, b) => a.date - b.date)[0].desc
    }

    getLastEventDesc() {
        return this.eventData.sort((a, b) => b.date - a.date)[0].desc
    }

    getEarliestEventDesc(minDate, maxDate) {
        let earliest = this.getEarliestEventData(minDate, maxDate)
        if (earliest === null) {
            return null
        }
        return earliest.desc
    }

    getLatestEventDesc(minDate, maxDate) {
        let latest = this.getLatestEventData(minDate, maxDate)
        if (latest === null) {
            return null
        }
        return latest.desc
    }

    getEventImg(eventData) {
        return eventData.img
    }

    setEventImg(eventData, img) {
        eventData.img = img
    }


    // image src and alt

    getEventImgSrc(eventData) {
        return eventData.img.src
    }

    setEventImgSrc(eventData, src) {
        eventData.img.src = src
    }

    getEventImgAlt(eventData) {
        return eventData.img.alt
    }

    setEventImgAlt(eventData, alt) {
        eventData.img.alt = alt
    }

    // return all images in the eventData
    // the images are sorted by year, earliest first
    getAllEventImg() {
        let ret = []
        this.sortEventData()
        for (let i = 0; i < this.eventData.length; i++) {
            ret.push(this.eventData[i].img)
        }
        if (ret.length === 0) {
            return null
        }
        return ret
    }

    // return all images in the eventData that fall within the given date range
    // the images are sorted by year, earliest first
    getRangeEventImg(minDate, maxDate) {
        let ret = []
        let filtered = this.getRangeEventData(minDate, maxDate)
        for (let i = 0; i < filtered.length; i++) {
            ret.push(filtered[i].img)
        }
        return ret
    }

    // return the most recent image in the eventData that falls within the given date range
    getLatestEventImg(minDate, maxDate) {
        console.log("getLatestEventImg")
        let latest = this.getLatestEventData(minDate, maxDate)
        if (latest === null) {
            return null
        }
        if (latest.img === null) {
            return null
        }
        return latest.img
    }

    // return the earliest image in the eventData that falls within the given date range
    getEarliestEventImg(minDate, maxDate) {
        let earliest = this.getEarliestEventData(minDate, maxDate)
        if (earliest === null) {
            return null
        }
        if (earliest.img === null) {
            return null
        }
        return earliest.img
    }

    getFirstEventImg() {
        let first = this.getFirstEventData()
        if (first === null) {
            return null
        }
        if (first.img === null) {
            return null
        }
        return first.img
    }

    getLastEventImg() {
        let last = this.getLastEventData()
        if (last === null) {
            return null
        }
        if (last.img === null) {
            return null
        }
        return last.img
    }

    setEventDataFromTimeline(timeline) {
        this.EventData = []
        // if there is no timeline, push a single event with the place info
        if (timeline === null || timeline === undefined) {
            this.eventData.push({
                "date": null,
                "desc": this.getPlaceInfo(),
                "img": null,
                "tags": []
            })
            return
        }
        // else iterate through the timeline and push the data once for every picture
        // only one picture per event is supported, so there is a new eventData for every picture
        console.log("timeline adding")
        for (let i = 0; i < timeline.length; i++) {
            for (let j = 0; j < timeline[i].img.length; j++) {
                let image = new Image()
                image.src = timeline[i].img[j].src
                image.alt = timeline[i].img[j].alt
                this.eventData.push({
                    "date": new Date(timeline[i].year, timeline[i].month-1, timeline[i].day),
                    "desc": timeline[i].event,
                    "img": image,
                    "tags": [] // TODO implement tags into the timeline JSON
                })
                console.log(new Date(timeline[i].year, timeline[i].month-1, timeline[i].day), timeline[i].event, image)
            }
        }
    }

    getEventTags(eventData) {
        return eventData.tags
    }

    setEventTags(eventData, tags) {
        eventData.tags = tags
    }

    addEventTag(eventData, tag) {
        eventData.tags.push(tag)
    }

    removeSpecificEventTag(eventData, tag) {
        eventData.tags = eventData.tags.filter(e => e !== tag)
    }

    removeDuplicateEventTags(eventData) {
        eventData.tags = [...new Set(eventData.tags)]
    }

    clearEventTags(eventData) {
        eventData.tags = []
    }

    getAllEventTags() {
        let tags = []
        for (let i = 0; i < this.eventData.length; i++) {
            for (let j = 0; j < this.eventData[i].tags.length; j++) {
                tags.push(this.eventData[i].tags[j])
            }
        }
        return [...new Set(tags)]
    }

    isSpecificEventTagsEmpty(eventData) {
        return eventData.tags.length === 0
    }

    isAllEventTagsEmpty() {
        return this.getAllEventTags().length === 0
    }

    countEventTags(eventData) {
        return eventData.tags.length
    }

    countAllEventTags() {
        return this.getAllEventTags().length
    }

    checkEventTagsFor(eventData, tag) {
        return eventData.tags.includes(tag)
    }

    checkAllEventTagsFor(tag) {
        return this.getAllEventTags().includes(tag)
    }



    // markerData

    getMarkerData() {
        return this.markerData
    }

    setMarkerData(data) {
        this.markerData = data
    }

    getLMarker() {
        return this.markerData.LMarker
    }

    setLMarker(marker) {
        this.markerData.LMarker = marker
    }

    getLIcon() {
        return this.markerData.icon
    }

    setLIcon(icon) {
        this.markerData.icon = icon
    }

    getSIcon() {
        return this.markerData.sicon
    }

    setSIcon(icon) {
        this.markerData.sicon = icon
    }

    getColor() {
        return this.markerData.color
    }

    setColor(color) {
        this.markerData.color = color
    }
}








// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------











class marker0 {
    constructor(name, lat, lng, date) {
        // name of marker
        this.name = name
        // latitude
        this.lat = lat
        // longitude
        this.lng = lng
        // information given by the marker
        this.data = null
        // imageData
        this.imgData = [
            {
                "year": null,
                "month": null,
                "day": null,
                "event": null,
                "img": {
                    "src": null,
                    "alt": null
                }
            }
        ]
        // source of image given by the marker
        this.imgsrc = null
        // alt text for the image
        this.alttxt = null
        // any applicable tags (use this for a possible sorting method)
        this.tags = []
        // use this for a future update where markers are different colors
        this.color = null
        // pointer to the instance of the map marker (VERY NECESSARY)
        this.LMarker = null
        // normal icon of the map marker
        this.icon = null
        // selected icon of the map marker (usually just normal icon but doubled in size)
        this.sicon = null
        // date of the data of the marker
        this.date = date
    }


    getImgData() {
        if (this.imgData.length === 0) {
            return null
        }
        if (this.imgData.length >= 1 && this.imgData[0].img.src === null) {
            return null
        }
        return this.imgData
    }

    getEvent() {
        return this.imgData[0].event
    }

    getFirstImgSrc() {
        return this.imgData[1].img[0].src
    }

    getLastImgSrc() {
        return this.imgData[this.imgData.length - 1].img.src
    }

    getLatestImgSrc(maxYear) {
        // if no maxYear is given, make no image appear
        if (maxYear === null) {
            clearPictures()
            return null
        }
        // iterate through the imgData array and return the first image that is less than or equal to the maxYear
        for (let i = this.imgData.length - 1; i >= 0; i--) {
            if (this.imgData[i].year <= maxYear) {
                return this.imgData[i].img[0].src
            }
        }
        // if no image is found, make no image appear
        clearPictures()
        return null
    }

    getLatestAltTxt(maxYear) {
        // if no maxYear is given, return the first alt text
        if (maxYear === null) {
            return null
        }
        // iterate through the imgData array and return the first alt text that is less than or equal to the maxYear
        for (let i = this.imgData.length - 1; i >= 0; i--) {
            if (this.imgData[i].year <= maxYear) {
                return this.imgData[i].img[0].alt
            }
        }
        // if no alt text is found, make no alt text appear
        return null
    }

    getLatestEvent(maxYear) {
        // if no maxYear is given, return the first event
        if (maxYear === null) {
            return this.imgData[0].event
        }
        // iterate through the imgData array and return the first event that is less than or equal to the maxYear
        for (let i = this.imgData.length - 1; i >= 0; i--) {
            if (this.imgData[i].year <= maxYear) {
                return this.imgData[i].event
            }
        }
        // if no event is found, make no event appear
        return null
    }

    getEarliestImgSrc(minYear) {
        // if no minYear is given, make no image appear
        if (minYear === null) {
            clearPictures()
            return null
        }
        for (let i = 0; i < this.imgData.length; i++) {
            if (this.imgData[i].year >= minYear) {
                return this.imgData[i].img[0].src
            }
        }
        // if no image is found, make no image appear
        clearPictures()
        return null
    }

    getEarliestAltTxt(minYear) {
        // if no minYear is given, return the first alt text
        if (minYear === null) {
            return null
        }
        for (let i = 0; i < this.imgData.length; i++) {
            if (this.imgData[i].year >= minYear) {
                return this.imgData[i].img[0].alt
            }
        }
        return null
    }

    getAllImgData(maxYear) {
        let ret = []
        for (let i = 0; i < this.imgData.length; i++) {
            if (this.imgData[i].year <= maxYear) {
                ret.push(this.imgData[i])
            }
        }
        ret.sort((a, b) => a.year - b.year)
        return ret
    }

    getRangeImgData(minDate, maxDate) {
        return this.imgData.filter(e => new Date(e.year, e.month-1, e.day) >= minDate && new Date(e.year, e.month-1, e.day) <= maxDate);
    }

    getMostRecentImgData(minDate, maxDate) {
        let filtered = this.getRangeImgData(minDate, maxDate)
        let sorted = filtered.sort((a, b) => new Date(b.year, b.month-1, b.day) - new Date(a.year, a.month-1, a.day))
        if (sorted.length === 0) {
            return null
        }
        return sorted[0]
    }

    getEarliestImgData(minDate, maxDate) {
        let filtered = getRangeImgData(minDate, maxDate)
        let sorted = filtered.sort((a, b) => new Date(a.year, a.month-1, a.day) - new Date(b.year, b.month-1, b.day))
        if (sorted.length === 0) {
            return null
        }
        return sorted[0]
    }

    getLastImgData() {
        return this.imgData.sort((a, b) => new Date(b.year, b.month-1, b.day) - new Date(a.year, a.month-1, a.day))[0]
    }

    getFirstImgData() {
        return this.imgData.sort((a, b) => new Date(a.year, a.month-1, a.day) - new Date(b.year, b.month-1, b.day))[0]
    }

    // getMostRecentImgData(maxYear) {
    //     let filtered = this.getAllImgData(maxYear);
    //     let timelinePoint = filtered.sort((a, b) => b.year - a.year)[0];
    //     console.log(timelinePoint.img[0]);
    //     return timelinePoint.img[0];
    // }

    isEmptyImgData() {
        return this.imgData.length === 0
    }

    setImgData(timeline) {
        this.imgData = []
        // if there is no timeline, pull the data from the marker
        if (timeline === null || timeline === undefined) {
            this.imgData.push({
                "year": this.year,
                "month": null,
                "day": null,
                "event": this.getData(),
                "img": {
                    "src": this.imgsrc,
                    "alt": this.imgalt
                }
            })
            return
        }
        for (let i = 0; i < timeline.length; i++) {
            let img = []
            for (let j = 0; j < timeline[i].img.length; j++) {
                img.push({
                    "src": timeline[i].img[j].src,
                    "alt": timeline[i].img[j].alt
                })
            }
            this.imgData.push({
                "year": timeline[i].year,
                "month": timeline[i].month,
                "day": timeline[i].day,
                "event": timeline[i].event,
                "img": img
            })
        }
    }

    getImgSrc() {
        return this.imgsrc
    }

    setImgSrc(src) {
        this.imgsrc = src
    }

    getDate() {
        return this.date
    }

    // year = xxxx, month = 1-12, day = 1-31
    setDate(year, month, day) {
        this.date = new Date(year, month-1, day)
    }

    setLMarker(marker) { // The L.Marker object gets set here to tie the two together
        this.LMarker = marker
    }

    getLMarker() {
        return this.LMarker
    }

    setLIcon(icon) {
        this.icon = icon
    }

    getLIcon() {
        return this.icon
    }

    setSIcon(icon) {
        this.sicon = icon
    }

    getSIcon() {
        return this.sicon
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setData(data) {
        this.data = data
    }

    getData() {
        return this.data
    }

    setTags(tags) {
        this.tags = tags
    }

    getTags() {
        return this.tags
    }

    checkTagsFor(tag) {
        return this.tags.includes(tag)
    }

    removeSpecificTag(tag) {
        this.tags = this.tags.filter(e => e !== tag)
    }

    addTag(tag) {
        this.tags.push(tag)
    }

    clearTags() {
        this.tags = []
    }

    setPos(lat, lng) {
        this.lat = lat
        this.lng = lng
    }

    getPos() {
        return [this.lat, this.lng]
    }

    setColor(color) {
        this.color = color
    }

    getColor() {
        return this.color
    }
}