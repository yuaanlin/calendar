import { Notification } from "rsuite";
import { Event, Calendar, Repeat, User } from "../classes";

/** 產生一組 UUID 給任意物件使用 */
export function generateUUID() {
    var d = Date.now();
    if (typeof performance !== "undefined" && typeof performance.now === "function") {
        d += performance.now();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
}

/** 將時間物件和今天日期比對來返回中文的時間敘述 */
export function getDayDescription(date) {
    var dayDescription = "";
    var DayA = new Date(date);
    var DayB = new Date();
    DayA.setHours(12, 0, 0);
    DayB.setHours(12, 0, 0);
    if (parseInt((DayA - DayB) / 3600000) < 0) {
        if (parseInt((DayA - DayB) / 3600000) == 0) dayDescription = "今天";
        else if (parseInt((DayA - DayB) / 3600000) == -24) dayDescription = "昨天";
        else if (parseInt((DayA - DayB) / 3600000) == -48) dayDescription = "前天";
        else dayDescription = parseInt((DayA - DayB) / 3600000 / -24) + " 天前";
    } else {
        if (parseInt((DayA - DayB) / 3600000) == 0) dayDescription = "今天";
        else if (parseInt((DayA - DayB) / 3600000) == 23) dayDescription = "明天";
        else if (parseInt((DayA - DayB) / 3600000) == 47) dayDescription = "後天";
        else dayDescription = parseInt((DayA - DayB) / 3600000 / 24) + 1 + " 天後";
    }
    return dayDescription;
}

/** 顯示錯誤訊息 */
export function displayError(title, message) {
    Notification["error"]({
        title: title,
        description: message
    });
}

/** 返回特定日期的 0 點 0 分 */
export function startOfDay(date) {
    date = new Date(date);
    var time = new Date();
    time.setTime(date.getTime());
    time.setHours(0, 0, 0);
    return time;
}

/** 返回特定日期的 23 點 59 分 */
export function endOfDay(date) {
    date = new Date(date);
    var time = new Date();
    time.setTime(date.getTime());
    time.setHours(23, 59, 59);
    return time;
}

/** 將傳入的 Event Array 用 Empty Event 填滿空白的時間段 */
export function fillEvents(events, date) {
    var filled = new Array();
    var time = startOfDay(date);
    events.map(event => {
        var startTime = new Date(event.startTime);
        var endTime = new Date(event.endTime);
        if (startTime.getHours() > endTime.getHours()) {
            endTime.setHours(23, 59, 59);
        }
        filled.push(new Event({ startTime: time, endTime: startTime }, true));
        filled.push(event);
        time.setTime(endTime.getTime());
    });
    filled.push(new Event({ startTime: time, endTime: endOfDay(date) }, true));
    return filled;
}

export function buildRepeatToEvent(userdata, date) {
    var newdata = new User(userdata);
    newdata.calendars.map(calendar => {
        calendar.repeats.map(repeat => {
            repeat = new Repeat(repeat);
            if (date - repeat.startDate > 0 && repeat.endDate - date > 0) {
                if (
                    repeat.cycle == "Week" &&
                    date.getDay() == repeat.repeatData &&
                    !repeat.generated.includes(date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate())
                ) {
                    repeat.generated.push(date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate());
                    var startTime = new Date(date);
                    var endTime = new Date(date);
                    startTime.setHours(repeat.startTime.getHours(), repeat.startTime.getMinutes());
                    endTime.setHours(repeat.endTime.getHours(), repeat.endTime.getMinutes());
                    calendar.events.push(new Event({ title: repeat.name, color: calendar.color, startTime: startTime, endTime: endTime }));
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
                    calendar.events.push(new Event({ title: repeat.name, color: calendar.color, startTime: startTime, endTime: endTime }));
                }
            }
        });
    });
    return newdata;
}

/** 從傳入的 Calendar Array 過濾出特定日期的 Event */
export function eventsToDispay(calendars, date) {
    var eventsToDispay = [];
    calendars.map(calendar => {
        calendar = new Calendar(calendar);
        calendar.events.map(event => {
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
    eventsToDispay.sort((a, b) => a.startTime - b.startTime);
    return eventsToDispay;
}

/** 從傳入的 Calendar Array 過濾出特定日期的 All Day Event (全天事件) */
export function allDayEventsToDispay(calendars, date) {
    var allDayEventsToDispay = [];
    calendars.map(calendar => {
        calendar = new Calendar(calendar);
        calendar.events.map(event => {
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
