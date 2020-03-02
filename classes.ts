import { generateUUID } from "./utils/methods";

interface EventObject {
    startTime: string,
    endTime: string,
    location: string,
    description: string,
    id: string,
    calendarTitle: string,
    ignore: boolean,
    ignoreReason: string,
    repeatID: string,
    isEmpty: boolean,
    title: string,
    color: Array<string>
}

const defaultEventObject : EventObject = {
    startTime: "",
    endTime: "",
    location: "",
    description: "",
    id: "",
    calendarTitle: "",
    ignore: true,
    ignoreReason: "",
    repeatID: "",
    isEmpty: true,
    title: "",
    color: [""]
}

export class Event {

    startTime: Date;
    endTime: Date;
    duration: number;
    location: string;
    description: string;
    id: string;
    calendarTitle: string;
    ignore: boolean;
    ignoreReason: string;
    repeatID: string;
    isEmpty: boolean;
    title: string;
    color: Array<string>;

    constructor(JSONObject: EventObject = defaultEventObject) {
        this.startTime = new Date(JSONObject.startTime);
        this.endTime = new Date(JSONObject.endTime);
        this.duration = Math.floor((this.endTime.getTime() - this.startTime.getTime()) / 60000);
        this.location = JSONObject.location == undefined ? "" : JSONObject.location;
        this.description = JSONObject.description == undefined ? "" : JSONObject.description;
        this.id = JSONObject.id == undefined ? generateUUID() : JSONObject.id;
        this.calendarTitle = JSONObject.calendarTitle == undefined ? "" : JSONObject.calendarTitle;
        this.ignore = JSONObject.ignore == undefined ? false : JSONObject.ignore;
        this.ignoreReason = JSONObject.ignoreReason == (undefined || "") ? "" : JSONObject.ignoreReason;
        this.repeatID = JSONObject.repeatID == undefined ? "" : JSONObject.repeatID;
        this.isEmpty = JSONObject.isEmpty;
        this.title = JSONObject.title;
        this.color = JSONObject.color;
    }

    isAllDayEvent() {
        return this.duration >= 1440;
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

interface RepeatObject {
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string,
    cycle: string,
    repeatData: number,
    generated: Array<string>,
    calendarTitle: string
}

const defaultRepeatObject : RepeatObject = {
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    cycle: "",
    repeatData: 0,
    generated: [],
    calendarTitle: ""

}

export class Repeat {

    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    startTime: Date;
    endTime: Date;
    cycle: string;
    repeatData: number;
    generated: Array<string>;

    constructor(JSONObject: RepeatObject = defaultRepeatObject) {
        this.id = JSONObject.id == undefined ? generateUUID() : JSONObject.id;
        this.name = JSONObject.name;
        this.startDate = new Date(JSONObject.startDate);
        this.endDate = new Date(JSONObject.endDate);
        this.startTime = new Date(JSONObject.startTime);
        this.endTime = new Date(JSONObject.endTime);
        this.cycle = JSONObject.cycle;
        this.repeatData = JSONObject.repeatData;
        this.generated = JSONObject.generated == undefined ? [] : JSONObject.generated;
    }
}

interface CalendarObject {
    title: string,
    color: Array<string>,
    label: string,
    events: Array<EventObject>,
    repeats: Array<RepeatObject>
}

const defaultCalendarObject : CalendarObject = {
    title: "",
    color: [],
    label: "",
    events: [],
    repeats: []
}

export class Calendar {

    title: string;
    color: Array<string>;
    label: string;
    events: Array<Event>;
    repeats: Array<Repeat>;

    constructor(JSONObject: CalendarObject = defaultCalendarObject) {
        this.title = JSONObject.title;
        this.color = JSONObject.color;
        this.label = this.title;
        this.events = JSONObject.events.map(event => {
            event.calendarTitle = this.title;
            return new Event(event);
        });
        this.repeats = JSONObject.repeats == undefined ? [] : JSONObject.repeats.map(repeat => {
            repeat.calendarTitle = this.title;
            return new Repeat(repeat);
        });;
    }
}

interface UserObject {
    username: string,
    calendars: Array<CalendarObject>
}

const defaultUserObject : UserObject = {
    username: "",
    calendars: []
}

export class User {

    username: string;
    calendars: Array<Calendar>;

    constructor(JSONObject: UserObject = defaultUserObject) {
        this.username = JSONObject.username;
        this.calendars = JSONObject.calendars.map(calendar => {
            return new Calendar(calendar);
        });
    }
}
