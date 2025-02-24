// Marker class
// Used on Various Map Markers

class marker {
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

    getAltTxt() {
        return this.alttxt
    }

    setAltTxt(txt) {
        this.alttxt = txt
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

    getRangeImgData(minYear, maxYear) {
        return this.imgData.filter(e => e.year >= minYear && e.year <= maxYear)
    }

    getMostRecentImgData(maxYear) {
        let filtered = this.getAllImgData(maxYear);
        let timelinePoint = filtered.sort((a, b) => b.year - a.year)[0];
        return timelinePoint.img.src;
    }

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

    setDate(year, month, day) {
        this.date = new Date(year, month, day)
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