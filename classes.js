import { generateUUID } from "./utils/methods";

export class Event {
    constructor(JSONObject, isEmpty) {
        this.startTime = new Date(JSONObject.startTime);
        this.endTime = new Date(JSONObject.endTime);
        this.duration = parseInt((this.endTime - this.startTime) / 60000);
        this.location = JSONObject.location == undefined ? undefined : JSONObject.location;
        this.description = JSONObject.description == undefined ? undefined : JSONObject.description;
        this.id = JSONObject.id == undefined ? generateUUID() : JSONObject.id;
        this.calendarTitle = JSONObject.calendarTitle == undefined ? undefined : JSONObject.calendarTitle;
        if (!isEmpty) {
            this.isEmpty = false;
            this.title = JSONObject.title;
            this.color = JSONObject.color;
        } else this.isEmpty = true;
    }

    isAllDayEvent() {
        return this.duration >= 1440;
    }

    isEmpty() {
        return this.isEmpty;
    }

    getStartTimeSrting() {
        return this.startTime.getHours() + ":" + (this.startTime.getMinutes() < 10 ? "0" : "") + this.startTime.getMinutes();
    }

    getEndTimeSting() {
        return this.endTime.getHours() + ":" + (this.endTime.getMinutes() < 10 ? "0" : "") + this.endTime.getMinutes();
    }

    getDurationString() {
        return this.getStartTimeSrting() + " - " + this.getEndTimeSting();
    }
}

export class Calendar {
    constructor(JSONObject) {
        this.title = JSONObject.title;
        this.color = JSONObject.color;
        this.events = JSONObject.events.map(event => {
            event.calendarTitle = this.title;
            return new Event(event);
        });
    }
}

export class User {
    constructor(JSONObject) {
        this.username = JSONObject.username;
        this.calendars = JSONObject.calendars.map(calendar => {
            return new Calendar(calendar);
        });
    }
}
