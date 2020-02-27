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
