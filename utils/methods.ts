import { Notification } from "rsuite";
import { Event, Calendar, Repeat, User } from "../classes";

/** 產生一組 UUID 給任意物件使用 */
export function generateUUID() {
    var d = Date.now();
    if (typeof performance !== "undefined" && typeof performance.now === "function") {
        d += performance.now();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
}

/** 將時間物件和今天日期比對來返回中文的時間敘述 */
export function getDayDescription(date: Date) {
    var dayDescription = "";
    var DayA = new Date(date);
    var DayB = new Date();
    DayA.setHours(12, 0, 0);
    DayB.setHours(12, 0, 0);
    if (Math.floor((DayA.getTime() - DayB.getTime()) / 3600000) < 0) {
        if (Math.floor((DayA.getTime() - DayB.getTime()) / 3600000) == 0) dayDescription = "今天";
        else if (Math.floor((DayA.getTime() - DayB.getTime()) / 3600000) == -24) dayDescription = "昨天";
        else if (Math.floor((DayA.getTime() - DayB.getTime()) / 3600000) == -48) dayDescription = "前天";
        else dayDescription = Math.floor((DayA.getTime() - DayB.getTime()) / 3600000 / -24) + " 天前";
    } else {
        if (Math.floor((DayA.getTime() - DayB.getTime()) / 3600000) == 0) dayDescription = "今天";
        else if (Math.floor((DayA.getTime() - DayB.getTime()) / 3600000) == 23) dayDescription = "明天";
        else if (Math.floor((DayA.getTime() - DayB.getTime()) / 3600000) == 47) dayDescription = "後天";
        else dayDescription = Math.floor((DayA.getTime() - DayB.getTime()) / 3600000 / 24) + 1 + " 天後";
    }
    return dayDescription;
}

/** 顯示錯誤訊息 */
export function displayError(title: string, message: string) {
    Notification["error"]({
        title: title,
        description: message
    });
}

/** 返回特定日期的 0 點 0 分 */
export function startOfDay(date: Date) {
    var time = new Date();
    time.setTime(date.getTime());
    time.setHours(0, 0, 0);
    return time;
}

/** 返回特定日期的 23 點 59 分 */
export function endOfDay(date: Date) {
    var time = new Date();
    time.setTime(date.getTime());
    time.setHours(23, 59, 59);
    return time;
}

/** 透過參數建立新 Event */
export function createEvent(name: string, color: Array<string>, startTime: Date, endTime: Date, repeatID: string, ignore: boolean = false, isEmpty: boolean = false, description: string = "", location: string = "") {
    var newEvent = new Event();
    newEvent.title = name;
    newEvent.color = color;
    newEvent.startTime = startTime;
    newEvent.endTime = endTime;
    newEvent.ignore = ignore;
    newEvent.isEmpty = isEmpty;
    newEvent.repeatID = repeatID;
    newEvent.description = description;
    newEvent.location = location;
    return (newEvent);
}

export function buildRepeatToEvent(userdata: User, date: Date) {
    var newdata = new User(userdata);
    newdata.calendars.map(calendar => {
        calendar.repeats.map(repeat => {
            repeat = new Repeat(repeat)
            if (date.getTime() - repeat.startDate.getTime() > 0 && repeat.endDate.getTime() - date.getTime() > 0) {

                if (
                    repeat.cycle == "Week" &&
                    date.getDay() == repeat.repeatData &&
                    !repeat.generated.includes(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate())
                ) {
                    repeat.generated.push(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
                    var startTime = new Date(date);
                    var endTime = new Date(date);
                    startTime.setHours(repeat.startTime.getHours(), repeat.startTime.getMinutes());
                    endTime.setHours(repeat.endTime.getHours(), repeat.endTime.getMinutes());
                    calendar.events.push(createEvent(repeat.name, calendar.color, startTime, endTime, repeat.id, false, false));
                } else if (
                    repeat.cycle == "Month" &&
                    date.getDate() == repeat.repeatData &&
                    !repeat.generated.includes(date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate())
                ) {
                    repeat.generated.push(date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate());
                    var startTime = new Date(date);
                    var endTime = new Date(date);
                    startTime.setHours(repeat.startTime.getHours(), repeat.startTime.getMinutes());
                    endTime.setHours(repeat.endTime.getHours(), repeat.endTime.getMinutes());
                    calendar.events.push(createEvent(repeat.name, calendar.color, startTime, endTime, repeat.id, false, false));
                }
            }
        });
    });
    return newdata;
}

/** 從傳入的 Calendar Array 過濾出特定日期的 Event */
export function eventsToDispay(calendars: Array<Calendar>, date: Date) {
    var eventsToDispay: Array<Event> = [];
    calendars.map(calendar => {
        calendar.events.map(event => {
            event = new Event(event);
            if (
                event.startTime.getFullYear() == date.getFullYear() &&
                event.startTime.getMonth() == date.getMonth() &&
                event.startTime.getDate() == date.getDate() &&
                !event.isAllDayEvent()
            ) {
                eventsToDispay.push(event);
            }
        });
    });
    eventsToDispay.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    return eventsToDispay;
}

/** 從傳入的 Calendar Array 過濾出特定日期的 All Day Event (全天事件) */
export function allDayEventsToDispay(calendars: Array<Calendar>, date: Date) {
    var allDayEventsToDispay: Array<Event> = [];
    calendars.map(calendar => {
        calendar.events.map(event => {
            event = new Event(event);
            if (
                event.startTime.getFullYear() == date.getFullYear() &&
                event.startTime.getMonth() == date.getMonth() &&
                event.startTime.getDate() == date.getDate() &&
                event.isAllDayEvent()
            ) {
                allDayEventsToDispay.push(event);
            }
        });
    });
    return allDayEventsToDispay;
}
