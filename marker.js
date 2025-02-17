// Marker class
// Used on Various Map Markers

class marker {
    constructor(name, lat, lng, year) {
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
                "src": null,
                "alt": null
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
        // year of the data of the marker
        this.year = year
    }

    getAltTxt() {
        return this.alttxt
    }

    getImgData() {
        return this.imgData
    }

    getAllImgData(year) {
        return this.imgData.filter(e => e.year === year)
    }

    getMostRecentImgData() {
        return this.imgData.sort((a, b) => b.year - a.year)[0]
    }

    isEmptyImgData() {
        return this.imgData[0].src === null && this.imgData[0].alt === null
    }

    setImgData(timeline) {
        this.imgData.year = timeline.year,
        this.imgData.month = timeline.month,
        this.imgData.day = timeline.day,
        this.imgData.event = timeline.event,
        this.imgData.src = timeline.img[0].src,
        this.imgData.alt = timeline.img[0].alt
    }

    setAltTxt(txt) {
        this.alttxt = txt
    }

    getImgSrc() {
        return this.imgsrc
    }

    setImgSrc(src) {
        this.imgsrc = src
    }

    getYear() {
        return this.year
    }

    setYear(year) {
        this.year = year
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