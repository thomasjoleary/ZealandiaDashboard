class date {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    getYear() {
        return this.year;
    }

    getFullYear() {
        return this.year;
    }

    getMonth() {
        return this.month;
    }

    getMonthName() {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.month];
    }

    getDay() {
        return this.day;
    }

    static compareDates(date1, date2) {
        // compare years
        if (date1.getYear() > date2.getYear()) {
            return 1;
        } else if (date1.getYear() < date2.getYear()) {
            return -1;
        }

        // compare months
        // check if months are null
        else if (date1.getMonth() == null && date2.getMonth() == null) {
            return 0;
        }
        // check if date1 month is null
        else if (date1.getMonth() == null) {
            return -1;
        }
        // check if date2 month is null
        else if (date2.getMonth() == null) {
            return 1;
        }

        // check month values
        else if (date1.getMonth() > date2.getMonth()) {
            return 1;
        } else if (date1.getMonth() < date2.getMonth()) {
            return -1;
        }
        
        // compare days
        // check if days are null
        else if (date1.getDay() == null && date2.getDay() == null) {
            return 0;
        }
        // check if date1 day is null
        else if (date1.getDay() == null) {
            return -1;
        }
        // check if date2 day is null
        else if (date2.getDay() == null) {
            return 1;
        }

        // check day values
        else if (date1.getDay() > date2.getDay()) {
            return 1;
        } else if (date1.getDay() < date2.getDay()) {
            return -1;
        }
        
        else {
            return 0;
        }
    }

    static isDateBefore(date1, date2) {
        return date.compareDates(date1, date2) == -1;
    }

    static isDateAfter(date1, date2) {
        return date.compareDates(date1, date2) == 1;
    }

    static convertDatetoObject(time) {
        return new date(time.getFullYear(), time.getMonth() + 1, time.getDate());
    }

    static convertStringtoObject(time) {
        let time2 = new Date(Date.parse(time))
        return new date(time2.getFullYear(), time2.getMonth() + 1, time2.getDate())
    }
}