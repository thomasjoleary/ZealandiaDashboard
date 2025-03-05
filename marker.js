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
                "date": null, // date() object from date.js
                "desc": null,
                "img": null, // Image() object
                "tags": [],
                "citation": []
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

    addEventData(date, desc, img, tags, citation) {
        // if fields are null, do not push
        if (date === null && desc === null && img === null && tags === null) {
            return
        }
        // if fields are null and tags is empty, do not push
        if (date === null && desc === null && img === null && tags.length === 0) {

            return
        }
        // if eventData is repeat, do not push
        for (let i = 0; i < this.eventData.length; i++) {
            if (this.eventData[i].date === date && this.eventData[i].desc === desc && this.eventData[i].img === img && this.eventData[i].tags === tags) {
                return
            }
        }

        // otherwise push the eventData
        this.eventData.push({
            "date": date,
            "desc": desc,
            "img": img,
            "tags": tags,
            "citation": citation
        })
    }

    isEventDataEmpty() {
        return this.eventData.length === 0
    }

    // list all eventData dates
    listEventDataDates() {
        return this.eventData.map(e => e.date)
    }

    // sort the eventData by date
    // direction = 1 for ascending (earliest first), -1 for descending (latest first)
    // if a different direction value is given, the data will be sorted in ascending order
    // if no direction is given, the data will be sorted in ascending order
    sortEventData(direction = 1) {
        if (direction === -1) {
            return this.eventData.sort((a, b) => date.compareDates(a.date,b.date))
        }
        else {
            let sorted = this.eventData.sort((a, b) => date.compareDates(b.date, a.date))
            return sorted
        }
    }

    // return the set of event data that falls within the given date range
    // the set is sorted by date, earliest first
    getRangeEventData(minDate, maxDate, direction) {
        this.sortEventData(direction)
        return this.eventData.filter(e => date.isDateBefore(minDate, e.date) && date.isDateAfter(maxDate, e.date))
    }

    // return the most recent event data that falls within the given date range
    // if no event data is found, return null
    getEarliestEventData(minDate, maxDate) {
        // filter by date range
        let filtered = this.getRangeEventData(minDate, maxDate, 1)
        if (filtered.length === 0) {
            return null
        }
        // sort by date, earliest first
        let sorted = filtered.sort((a, b) => date.compareDates(new date(a.date), new date(b.date)))
        return sorted[0]
    }

    // return the most recent event data that falls within the given date range
    // if no event data is found, return null
    getLatestEventData(minDate, maxDate) {
        // filter by date range
        let filtered = this.getRangeEventData(minDate, maxDate, 1)
        if (filtered.length === 0) {
            return null
        }
        // sort by date, latest first
        let sorted = filtered.sort((a, b) => date.compareDates(new date(b.date), new date(a.date)))
        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i].date === null) {
                continue
            } else {
                return sorted[i]
            }
        } return null
    }

    getFirstEventData() {
        return this.eventData.sort((a, b) => date.compareDates(new date(a.date), new date(b.date)))[0]
    }

    getLastEventData() {
        return this.eventData.sort((a, b) => date.compareDates(new date(b.date), new date(a.date)))[0]
    }

    getEventDate(eventData) {
        return eventData.date
    }

    setEventDate(eventData, year, month, day) {
        let date = new date(year, month - 1, day)
        eventData.date = date
    }

    containsDateWithinRange(minDate, maxDate) {
        for (let i = 0; i < this.eventData.length; i++) {
            if (isDateWithinRange(this.eventData[i].date, minDate, maxDate)) {
                return true
            }
        }
        return false
    }

    getLastEventDate() {
        return this.eventData.sort((a, b) => date.compareDates(new date(a.date), new date(b.date)))[0].date
    }

    getFirstEventDate() {
        return this.eventData.sort((a, b) => date.compareDates(new date(b.date), new date(a.date)))[0].date
    }

    getEarliestEventDate(minDate, maxDate) {
        let earliest = this.getEarliestEventData(minDate, maxDate)
        if (earliest === null) {
            return null
        }
        return earliest.date
    }

    getLatestEventDate(minDate, maxDate) {
        let latest = this.getLatestEventData(minDate, maxDate)
        if (latest === null) {
            return null
        }
        return latest.date
    }

    getEventDesc(eventData) {
        return eventData.desc
    }

    setEventDesc(eventData, desc) {
        eventData.desc = desc
    }

    getFirstEventDesc() {
        return this.eventData.sort((a, b) => date.compareDates(new date(a.date), new date(b.date)))[0].desc
    }

    getLastEventDesc() {
        return this.eventData.sort((a, b) => date.compareDates(new date(b.date), new date(a.date)))[0].desc
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

    getCitation(eventData) {
        return eventData.citation
    }

    setCitation(citation) {
        eventData.citation = citation
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
        let filtered = this.getRangeEventData(minDate, maxDate, 1)
        for (let i = 0; i < filtered.length; i++) {
            ret.push(filtered[i].img)
        }
        return ret
    }

    // return the most recent image in the eventData that falls within the given date range
    getLatestEventImg(minDate, maxDate) {
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
        this.eventData = []
        // if there is no timeline, return
        if (timeline === null || timeline === undefined) {
            return
        }
        // else iterate through the timeline and push the data once for every picture
        // only one picture per event is supported, so there is a new eventData for every picture
        for (let i = 0; i < timeline.length; i++) {
            for (let j = 0; j < timeline[i].img.length; j++) {
                let image = new Image()
                image.src = timeline[i].img[j].src
                image.alt = timeline[i].img[j].alt
                // if the date is null, push the event without a date
                if (timeline[i].year === null && timeline[i].month === null && timeline[i].day === null) {
                    this.addEventData(null, timeline[i].event, image, [], timeline[i].citations)
                }
                // if the month or day is null, push the event with only the year
                else if (timeline[i].month === null || timeline[i].day === null) {
                    this.addEventData(new date(timeline[i].year, null, null),
                        timeline[i].event,
                        image,
                        [],
                        timeline[i].citations
                    )
                } else {
                    // else push the event with the full date
                    this.addEventData(new date(timeline[i].year, timeline[i].month-1, timeline[i].day),
                        timeline[i].event,
                        image,
                        [],
                        timeline[i].citations
                    )
                }
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


isDateWithinRange = function(time, minDate, maxDate) {
    if (time === null) {
        return false
    }
    return date.isDateBefore(minDate, time) && date.isDateAfter(maxDate, time)
}


