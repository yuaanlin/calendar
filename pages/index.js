import React from "react";
import Container from "@material-ui/core/Container";
import DayView from "../comps/DayView";
import fetch from "isomorphic-unfetch";
import Grid from "@material-ui/core/Grid";
import { User, Calendar, Event } from "../classes";
import DayPicker from "react-day-picker";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";

function startOfDay(date) {
    if (!date instanceof Date) {
        console.error("傳入的時間不是合法的 Date 物件。");
        return null;
    }
    date = new Date(date);
    var time = new Date();
    time.setTime(date.getTime());
    time.setHours(0, 0, 0);
    return time;
}

function endOfDay(date) {
    if (!date instanceof Date) {
        console.error("傳入的時間不是合法的 Date 物件。");
        return null;
    }
    date = new Date(date);
    var time = new Date();
    time.setTime(date.getTime());
    time.setHours(23, 59, 59);
    return time;
}

function fillEvents(events, date) {
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

function eventsToDispay(calendars, date) {
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

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: new Date(),
            eventsToDispay: [],
            userdata: {},
            filled: [],
            inputing: {
                title: "",
                date: "",
                time: ""
            },
            editingEvent: false,
            creatingEvent: false,
            selectedEvent: new Event({
                title: "選中的事件",
                startTime: new Date(),
                endTime: new Date(),
                color: ["#fd3721", "#b721ff"]
            })
        };
        this.handleDayClick = this.handleDayClick.bind(this);
        this.openEventEditDialog = this.openEventEditDialog.bind(this);
        this.closeEventEditDialog = this.closeEventEditDialog.bind(this);
        this.openEventCreateDialog = this.openEventCreateDialog.bind(this);
        this.closeEventCreateDialog = this.closeEventCreateDialog.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.createEvent = this.createEvent.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleCalendarChange = this.handleCalendarChange.bind(this);
    }

    async handleDayClick(day, { selected }) {
        this.setState({
            selectedDay: selected ? new Date() : day
        });
    }

    static async getInitialProps() {
        const res = await fetch("https://calendar-ten.now.sh//api/getuserdata");
        const json = await res.json();
        var userdata = new User(json);
        var etd = eventsToDispay(userdata.calendars, new Date());
        var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
        return { userdata: userdata, filled: filled, eventsToDispay: etd };
    }

    componentDidMount() {
        setTimeout(() => {
            var filled = fillEvents(this.props.eventsToDispay, new Date());
            this.setState({ filled: filled, userdata: this.props.userdata });
        }, 200);
    }

    openEventEditDialog(event) {
        this.setState({
            selectedEvent: event,
            editingEvent: true,
            inputing: {
                title: event.title,
                date: event.startTime.getFullYear() + "/" + event.startTime.getMonth() + "/" + event.startTime.getDate(),
                time: event.startTime.getHours() + ":" + event.startTime.getMinutes() + "~" + event.endTime.getHours() + ":" + event.endTime.getMinutes()
            }
        });
    }

    closeEventEditDialog() {
        this.setState({ editingEvent: false });
    }

    openEventCreateDialog() {
        this.setState({
            creatingEvent: true,
            inputing: { date: this.state.selectedDay.getFullYear() + "/" + this.state.selectedDay.getMonth() + "/" + this.state.selectedDay.getDate() }
        });
    }

    closeEventCreateDialog() {
        this.setState({ creatingEvent: false });
    }

    async createEvent() {
        var newStartTime = new Date();
        var newEndTime = new Date();
        newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
        newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
        newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
        newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
        var newdata = new User(this.state.userdata);
        newdata.calendars.map(calendar => {
            if (calendar.title == this.state.inputing.calendar) {
                calendar.events.push(new Event({ title: this.state.inputing.title, startTime: newStartTime, endTime: newEndTime, color: calendar.color }));
            }
        });
        await fetch("http://localhost:3000/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        this.setState({ creatingEvent: false });
        const res = await fetch("http://localhost:3000/api/getuserdata");
        const json = await res.json();
        var userdata = new User(json);
        var etd = eventsToDispay(userdata.calendars, new Date());
        var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
        this.setState({ userdata: userdata, filled: filled, eventsToDispay: etd });
    }

    async updateEvent() {
        var newStartTime = new Date();
        var newEndTime = new Date();
        newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
        newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1], this.state.inputing.date.split("/")[2]);
        newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
        newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
        var newdata = new User(this.state.userdata);
        newdata.calendars.map(calendar => {
            calendar.events.map(event => {
                if (event.id == this.state.selectedEvent.id) {
                    event.startTime = newStartTime;
                    event.endTime = newEndTime;
                    event.title = this.state.inputing.title;
                }
            });
        });
        await fetch("http://localhost:3000/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        this.setState({ editingEvent: false });
        const res = await fetch("http://localhost:3000/api/getuserdata");
        const json = await res.json();
        var userdata = new User(json);
        var etd = eventsToDispay(userdata.calendars, new Date());
        var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
        this.setState({ userdata: userdata, filled: filled, eventsToDispay: etd });
    }

    handleTitleChange(e) {
        this.state.inputing.title = e.target.value;
    }

    handleDateChange(e) {
        this.state.inputing.date = e.target.value;
    }

    handleTimeChange(e) {
        this.state.inputing.time = e.target.value;
    }

    handleCalendarChange(e) {
        this.state.inputing.calendar = e.target.value;
    }

    render() {
        if (this.state.userdata.calendars != undefined) {
            var calendarOptions = this.state.userdata.calendars.map(calendar => {
                return (
                    <option key={calendar.title} value={calendar.title}>
                        {calendar.title}
                    </option>
                );
            });
            var filled = fillEvents(eventsToDispay(this.state.userdata.calendars, this.state.selectedDay), this.state.selectedDay);

            var dayDescription = "";
            var DayA = new Date(this.state.selectedDay);
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

            return (
                <Container maxWidth="md">
                    <Grid container>
                        <Grid item xs={4}>
                            <div style={{ marginTop: 60 }}>
                                <Paper elevation={20} style={{backgroundColor: "#333333", padding: 16}}>
                                    <DayPicker selectedDays={this.state.selectedDay} onDayClick={this.handleDayClick} />
                                </Paper>
                            </div>
                            <div style={{ marginLeft: 26, marginTop: 60 }}>
                                <h2 style={{ color: "white", marginBottom: 16 }}>
                                    {this.state.selectedDay.getFullYear()} / {this.state.selectedDay.getMonth() + 1} / {this.state.selectedDay.getDate()}
                                </h2>
                                <p style={{ color: "gray", marginTop: 0 }}>{dayDescription}</p>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div
                                style={{
                                    overflowY: "scroll",
                                    maxHeight: "90vh",
                                    padding: 24,
                                    marginLeft: 60
                                }}
                            >
                                <DayView events={filled} openEventEditDialog={this.openEventEditDialog} openEventCreateDialog={this.openEventCreateDialog} />
                            </div>
                        </Grid>
                    </Grid>

                    <Dialog open={this.state.editingEvent} aria-labelledby="form-dialog-title" width="xs">
                        <DialogContent>
                            <TextField
                                autoFocus
                                defaultValue={this.state.selectedEvent.title}
                                margin="dense"
                                id="name"
                                label="事件標題"
                                fullWidth
                                onChange={this.handleTitleChange}
                            />
                            <TextField
                                defaultValue={
                                    this.state.selectedEvent.startTime.getFullYear() +
                                    "/" +
                                    this.state.selectedEvent.startTime.getMonth() +
                                    "/" +
                                    this.state.selectedEvent.startTime.getDate()
                                }
                                margin="dense"
                                id="name"
                                onChange={this.handleDateChange}
                                label="日期"
                                fullWidth
                            />
                            <TextField
                                defaultValue={
                                    this.state.selectedEvent.startTime.getHours() +
                                    ":" +
                                    this.state.selectedEvent.startTime.getMinutes() +
                                    "~" +
                                    this.state.selectedEvent.endTime.getHours() +
                                    ":" +
                                    this.state.selectedEvent.endTime.getMinutes()
                                }
                                margin="dense"
                                id="name"
                                onChange={this.handleTimeChange}
                                label="時間"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.closeEventEditDialog}>
                                取消
                            </Button>
                            <Button color="primary" onClick={this.createEvent}>
                                更新
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog open={this.state.creatingEvent} aria-labelledby="form-dialog-title" width="xs">
                        <DialogContent>
                            <FormControl>
                                <InputLabel htmlFor="demo-dialog-native">行事曆</InputLabel>
                                <Select native onChange={this.handleCalendarChange}>
                                    {calendarOptions}
                                </Select>
                            </FormControl>
                            <TextField autoFocus margin="dense" id="name" label="事件標題" fullWidth onChange={this.handleTitleChange} />
                            <TextField
                                defaultValue={new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate()}
                                margin="dense"
                                id="name"
                                onChange={this.handleDateChange}
                                label="日期"
                                fullWidth
                            />
                            <TextField
                                defaultValue={
                                    new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes()
                                }
                                margin="dense"
                                id="name"
                                onChange={this.handleTimeChange}
                                label="時間"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.closeEventCreateDialog}>
                                取消
                            </Button>
                            <Button color="primary" onClick={this.createEvent}>
                                創立
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <style global jsx>{`
                        body {
                            background: #222222;
                        }
                        ::-webkit-scrollbar {
                            width: 5px;
                        }
                        ::-webkit-scrollbar-track {
                            -webkit-border-radius: 10px;
                            border-radius: 10px;
                            margin: 80px 0 5px 0;
                        }
                        ::-webkit-scrollbar-thumb {
                            -webkit-border-radius: 4px;
                            border-radius: 4px;
                            background: rgb(80, 80, 80);
                        }
                        /* DayPicker styles */

                        .DayPicker {
                            display: inline-block;
                            font-size: 1rem;
                        }

                        .DayPicker-wrapper {
                            position: relative;

                            flex-direction: row;
                            padding-bottom: 1em;

                            -webkit-user-select: none;

                            -moz-user-select: none;

                            -ms-user-select: none;

                            user-select: none;
                        }

                        .DayPicker-Months {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                        }

                        .DayPicker-Month {
                            display: table;
                            margin: 0 1em;
                            margin-top: 1em;
                            border-spacing: 0;
                            border-collapse: collapse;

                            -webkit-user-select: none;

                            -moz-user-select: none;

                            -ms-user-select: none;

                            user-select: none;
                        }

                        .DayPicker-NavButton {
                            position: absolute;
                            top: 1em;
                            right: 1.5em;
                            left: auto;

                            display: inline-block;
                            margin-top: 2px;
                            width: 1.25em;
                            height: 1.25em;
                            background-position: center;
                            background-size: 50%;
                            background-repeat: no-repeat;
                            color: #8b9898;
                            cursor: pointer;
                        }

                        .DayPicker-NavButton:hover {
                            opacity: 0.8;
                        }

                        .DayPicker-NavButton--prev {
                            margin-right: 1.5em;
                            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC");
                        }

                        .DayPicker-NavButton--next {
                            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==");
                        }

                        .DayPicker-NavButton--interactionDisabled {
                            display: none;
                        }

                        .DayPicker-Caption {
                            display: table-caption;
                            margin-bottom: 0.5em;
                            padding: 0 0.5em;
                            text-align: left;
                            color: white;
                        }

                        .DayPicker-Caption > div {
                            font-weight: 500;
                            font-size: 1.15em;
                        }

                        .DayPicker-Weekdays {
                            display: table-header-group;
                            margin-top: 1em;
                        }

                        .DayPicker-WeekdaysRow {
                            display: table-row;
                        }

                        .DayPicker-Weekday {
                            display: table-cell;
                            padding: 0.5em;
                            color: #8b9898;
                            text-align: center;
                            font-size: 0.875em;
                        }

                        .DayPicker-Weekday abbr[title] {
                            border-bottom: none;
                            text-decoration: none;
                        }

                        .DayPicker-Body {
                            display: table-row-group;
                        }

                        .DayPicker-Week {
                            display: table-row;
                        }

                        .DayPicker-Day {
                            display: table-cell;
                            padding: 0.5em;
                            border-radius: 50%;
                            vertical-align: middle;
                            text-align: center;
                            cursor: pointer;
                            color: gray;
                        }

                        .DayPicker-WeekNumber {
                            display: table-cell;
                            padding: 0.5em;
                            min-width: 1em;
                            border-right: 1px solid #eaecec;
                            color: #8b9898;
                            vertical-align: middle;
                            text-align: right;
                            font-size: 0.75em;
                            cursor: pointer;
                        }

                        .DayPicker--interactionDisabled .DayPicker-Day {
                            cursor: default;
                        }

                        .DayPicker-Footer {
                            padding-top: 0.5em;
                        }

                        .DayPicker-TodayButton {
                            border: none;
                            background-color: transparent;
                            background-image: none;
                            box-shadow: none;
                            color: #4a90e2;
                            font-size: 0.875em;
                            cursor: pointer;
                        }

                        .DayPicker-Day--today {
                            color: white;
                            font-weight: 700;
                        }

                        .DayPicker-Day--outside {
                            color: #8b9898;
                            cursor: default;
                        }

                        .DayPicker-Day--disabled {
                            color: #dce0e0;
                            cursor: default;
                            /* background-color: #eff1f1; */
                        }

                        /* Example modifiers */

                        .DayPicker-Day--sunday {
                            background-color: #f7f8f8;
                        }

                        .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
                            color: #dce0e0;
                        }

                        .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
                            position: relative;

                            background-color: #4a90e2;
                            color: #f0f8ff;
                        }

                        .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
                            background-color: #51a0fa;
                        }

                        .DayPicker:not(.DayPicker--interactionDisabled)
                            .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
                            background-color: #f0f8ff;
                        }

                        /* DayPickerInput */

                        .DayPickerInput {
                            display: inline-block;
                        }

                        .DayPickerInput-OverlayWrapper {
                            position: relative;
                        }

                        .DayPickerInput-Overlay {
                            position: absolute;
                            left: 0;
                            z-index: 1;

                            background: white;
                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
                        }
                    `}</style>
                </Container>
            );
        } else {
            return <p>loading</p>;
        }
    }
}

export default index;
