import React from "react";
import { Helmet } from "react-helmet";
import DayPicker from "react-day-picker";
import fetch from "isomorphic-unfetch";
import { Transition } from "react-transition-group";

import DayView from "../comps/DayView";
import { User, Calendar, Event } from "../classes";
import { backendURL } from "../config";
import { getDayDescription } from "../utils/methods";

import {
    Loader,
    Panel,
    Button,
    Container,
    FlexboxGrid,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    CheckboxGroup,
    Checkbox,
    Col,
    SelectPicker,
    Modal,
    Avatar
} from "rsuite";

import "rsuite/lib/styles/themes/dark/index.less";

const duration = 600;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
};

function startOfDay(date) {
    date = new Date(date);
    var time = new Date();
    time.setTime(date.getTime());
    time.setHours(0, 0, 0);
    return time;
}

function endOfDay(date) {
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
            loaded: false,
            waiting: false,
            selectedDay: new Date(),
            eventsToDispay: [],
            userdata: {},
            filled: [],
            inputing: {
                title: "",
                date: "",
                time: "",
                ignore: [],
                ignoreReason: ""
            },
            editingEvent: false,
            creatingEvent: false,
            selectedEvent: new Event({
                title: "選中的事件",
                startTime: new Date(),
                endTime: new Date(),
                color: ["#fd3721", "#b721ff"],
                calendarTitle: "哈"
            })
        };
        this.handleDayClick = this.handleDayClick.bind(this);
        this.openEventEditDialog = this.openEventEditDialog.bind(this);
        this.closeEventEditDialog = this.closeEventEditDialog.bind(this);
        this.openEventCreateDialog = this.openEventCreateDialog.bind(this);
        this.closeEventCreateDialog = this.closeEventCreateDialog.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.createEvent = this.createEvent.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    async handleDayClick(day, { selected }) {
        this.setState({
            selectedDay: selected ? new Date() : day
        });
    }

    static async getInitialProps() {
        const res = await fetch(backendURL + "/api/getuserdata");
        const json = await res.json();
        var userdata = new User(json);
        var etd = eventsToDispay(userdata.calendars, new Date());
        var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
        return { userdata: userdata, filled: filled, eventsToDispay: etd };
    }

    componentDidMount() {
        setTimeout(() => {
            var filled = fillEvents(this.props.eventsToDispay, new Date());
            this.setState({ filled: filled, userdata: this.props.userdata, loaded: true });
        }, 200);
    }

    openEventEditDialog(event) {
        this.setState({
            selectedEvent: event,
            editingEvent: true,
            inputing: {
                title: event.title,
                date: event.startTime.getFullYear() + "/" + (event.startTime.getMonth() + 1) + "/" + event.startTime.getDate(),
                time: event.startTime.getHours() + ":" + event.startTime.getMinutes() + "~" + event.endTime.getHours() + ":" + event.endTime.getMinutes(),
                ignore: [event.ignore ? "ignore" : null],
                ignoreReason: event.ignoreReason == undefined ? "" : event.ignoreReason
            }
        });
    }

    closeEventEditDialog() {
        this.setState({ editingEvent: false });
    }

    openEventCreateDialog() {
        this.setState({
            creatingEvent: true,
            inputing: {
                title: event.title,
                date: this.state.selectedDay.getFullYear() + "/" + (this.state.selectedDay.getMonth() + 1) + "/" + this.state.selectedDay.getDate(),
                time: new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes(),
                calendar: { label: this.state.userdata.calendars[0].title, value: this.state.userdata.calendars[0] }
            }
        });
    }

    closeEventCreateDialog() {
        this.setState({ creatingEvent: false });
    }

    async createEvent() {
        this.setState({
            waiting: true
        });
        var newStartTime = new Date();
        var newEndTime = new Date();
        newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1] - 1, this.state.inputing.date.split("/")[2]);
        newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1] - 1, this.state.inputing.date.split("/")[2]);
        newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
        newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
        var newdata = new User(this.state.userdata);
        newdata.calendars.map(calendar => {
            if (calendar.title == this.state.inputing.calendar.label) {
                calendar.events.push(new Event({ title: this.state.inputing.title, startTime: newStartTime, endTime: newEndTime, color: calendar.color }));
            }
        });
        await fetch(backendURL + "/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        const res = await fetch(backendURL + "/api/getuserdata");
        const json = await res.json();
        var userdata = new User(json);
        var etd = eventsToDispay(userdata.calendars, new Date());
        var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
        this.setState({ userdata: userdata, filled: filled, eventsToDispay: etd, waiting: false, creatingEvent: false });
    }

    async updateEvent() {
        this.setState({
            waiting: true
        });
        var newStartTime = new Date();
        var newEndTime = new Date();
        newStartTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1] - 1, this.state.inputing.date.split("/")[2]);
        newEndTime.setFullYear(this.state.inputing.date.split("/")[0], this.state.inputing.date.split("/")[1] - 1, this.state.inputing.date.split("/")[2]);
        newStartTime.setHours(this.state.inputing.time.split("~")[0].split(":")[0], this.state.inputing.time.split("~")[0].split(":")[1]);
        newEndTime.setHours(this.state.inputing.time.split("~")[1].split(":")[0], this.state.inputing.time.split("~")[1].split(":")[1]);
        var newdata = new User(this.state.userdata);
        newdata.calendars.map(calendar => {
            calendar.events.map(event => {
                if (event.id == this.state.selectedEvent.id) {
                    event.startTime = newStartTime;
                    event.endTime = newEndTime;
                    event.title = this.state.inputing.title;
                    event.ignore = this.state.inputing.ignore.includes("ignore") ? true : false;
                    event.ignoreReason = this.state.inputing.ignoreReason;
                }
            });
        });
        await fetch(backendURL + "/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        const res = await fetch(backendURL + "/api/getuserdata");
        const json = await res.json();
        var userdata = new User(json);
        var etd = eventsToDispay(userdata.calendars, new Date());
        var filled = fillEvents(eventsToDispay(userdata.calendars, new Date()), new Date());
        this.setState({ userdata: userdata, filled: filled, eventsToDispay: etd, waiting: false, editingEvent: false });
    }

    handleFormChange(value) {
        this.setState({
            inputing: {
                ignoreReason: value.ignoreReason,
                ignore: value.ignore,
                calendar: value.calendar,
                time: value.time,
                date: value.date,
                title: value.title
            }
        });
    }

    render() {
        var DayviewContent = <Loader />;
        if (this.state.userdata.calendars != undefined) {
            var calendarOptions = this.state.userdata.calendars.map(calendar => {
                return { label: calendar.title, value: calendar };
            });
            if (this.state.inputing.ignore != undefined)
                var ignoreReason = this.state.inputing.ignore.includes("ignore") ? (
                    <FormGroup>
                        <ControlLabel>忽略原因</ControlLabel>
                        <FormControl name="ignoreReason" />
                    </FormGroup>
                ) : null;
            var filled = fillEvents(eventsToDispay(this.state.userdata.calendars, this.state.selectedDay), this.state.selectedDay);
            DayviewContent = <DayView events={filled} openEventEditDialog={this.openEventEditDialog} openEventCreateDialog={this.openEventCreateDialog} />;
        }

        var dayDescription = getDayDescription(this.state.selectedDay);

        return (
            <Container>
                <Helmet>
                    <title>Reacal : 專注於使用者體驗的日程規劃工具</title>
                </Helmet>

                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} xs={20} sm={18} md={12}>
                        <FlexboxGrid justify="space-around">
                            <FlexboxGrid.Item colspan={7}>
                                <div style={{ marginTop: 80, marginLeft: 28 }}>
                                    <h1 style={{ color: "white", marginBottom: 0 }}>Reacal</h1>
                                    <p style={{ color: "gray", marginTop: 0 }}>專注於使用者體驗的日程規劃工具</p>
                                </div>
                                <div style={{ marginTop: 40 }}>
                                    <DayPicker selectedDays={this.state.selectedDay} onDayClick={this.handleDayClick} />
                                </div>
                                <div style={{ marginLeft: 28, marginTop: 36 }}>
                                    <h3 style={{ color: "white", marginBottom: 8 }}>
                                        {this.state.selectedDay.getFullYear()} / {this.state.selectedDay.getMonth() + 1} / {this.state.selectedDay.getDate()}
                                    </h3>
                                    <p style={{ color: "gray", marginTop: 0 }}>{dayDescription}</p>
                                </div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={14}>
                                <Panel elevation={10} style={{ backgroundColor: "#222222", marginLeft: 60 }} bodyFill>
                                    <div
                                        style={{
                                            overflowY: "scroll",
                                            maxHeight: "100vh",
                                            padding: 48
                                        }}
                                    >
                                        <Transition in={this.state.loaded} timeout={duration}>
                                            {state => (
                                                <div
                                                    style={{
                                                        ...defaultStyle,
                                                        ...transitionStyles[state]
                                                    }}
                                                >
                                                    {DayviewContent}
                                                </div>
                                            )}
                                        </Transition>
                                    </div>
                                </Panel>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </FlexboxGrid.Item>
                </FlexboxGrid>

                <Modal show={this.state.editingEvent} aria-labelledby="form-dialog-title" width="xs">
                    <Modal.Header closeButton onClick={this.closeEventEditDialog}>
                        <Avatar
                            style={{
                                backgroundImage:
                                    "linear-gradient(315deg, " + this.state.selectedEvent.color[0] + " 0%, " + this.state.selectedEvent.color[1] + " 100%)",
                                color: "#ffffff"
                            }}
                        >
                            {this.state.selectedEvent.calendarTitle.charAt(0)}
                        </Avatar>{" "}
                        <h5 style={{ marginLeft: 6, display: "inline-block" }}>{this.state.selectedEvent.calendarTitle}</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <Form formValue={this.state.inputing} onChange={this.handleFormChange}>
                            <FormGroup>
                                <ControlLabel>事件標題</ControlLabel>
                                <FormControl name="title" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>日期</ControlLabel>
                                <FormControl name="date" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>時間</ControlLabel>
                                <FormControl name="time" />
                            </FormGroup>
                            <FormGroup>
                                <FormControl accepter={CheckboxGroup} name="ignore">
                                    <Checkbox value="ignore">忽略該事項</Checkbox>
                                </FormControl>
                            </FormGroup>
                            <FormGroup>{ignoreReason}</FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeEventEditDialog}>取消</Button>
                        <Button appearance="primary" onClick={this.updateEvent} loading={this.state.waiting}>
                            更新
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.creatingEvent} aria-labelledby="form-dialog-title" width="xs">
                    <Modal.Header closeButton onClick={this.closeEventCreateDialog}>
                        <h5>創建新事件</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <Form formValue={this.state.inputing} onChange={this.handleFormChange}>
                            <FormGroup>
                                <ControlLabel>行事曆</ControlLabel>
                                <FormControl name="calendar" data={calendarOptions} accepter={SelectPicker} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>事件標題</ControlLabel>
                                <FormControl name="title" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>日期</ControlLabel>
                                <FormControl name="date" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>時間</ControlLabel>
                                <FormControl name="time" />
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeEventCreateDialog}>取消</Button>
                        <Button appearance="primary" onClick={this.createEvent} loading={this.state.waiting}>
                            創立
                        </Button>
                    </Modal.Footer>
                </Modal>

                <style global jsx>{`
                    .fade-enter,
                    .fade-appear {
                        opacity: 0;
                    }
                    .fade-enter-active,
                    .fade-appear-active {
                        opacity: 1;
                        transition: opacity 1s ease-in;
                    }
                    .fade-enter-done {
                        opacity: 1;
                    }
                    .fade-exit {
                        opacity: 1;
                    }

                    .fade-exit-active {
                        opacity: 0;
                        transition: opacity 1s ease-in;
                    }

                    .fade-exit-done {
                        opacity: 0;
                    }
                    body {
                        background: #222222;
                        margin: 0;
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
    }
}

export default index;
