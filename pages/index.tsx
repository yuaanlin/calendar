import React from "react";
import { Helmet } from "react-helmet";
import DayPicker from "react-day-picker";
import fetch from "isomorphic-unfetch";
import { Transition } from "react-transition-group";

import DayView from "../comps/DayView";
import AllDayEvents from "../comps/AllDayEvents";
import EditEventDialog from "../comps/EditEventDialog";
import CreateEventDialog from "../comps/CreateEventDialog";
import CreateRepeatDialog from "../comps/CreateRepeatDialog";
import HourLines from "../comps/HourLines";
import { User, Event, Repeat, Calendar } from "../classes";
import { IndexStates, IndexProps, Inputing } from "../interfaces";
import { backendURL, duration, defaultStyle, transitionStyles } from "../config";
import { getDayDescription, displayError, eventsToDispay, allDayEventsToDispay, buildRepeatToEvent, createEvent } from "../utils/methods";

import { Loader, Panel, Container, FlexboxGrid, Col, Divider } from "rsuite";

import "rsuite/lib/styles/themes/dark/index.less";
import "../style.less";

class index extends React.Component<IndexProps, IndexStates> {
    constructor(props: Readonly<IndexProps>) {
        super(props);
        this.state = {
            loaded: false,
            waiting: false,
            removing: false,
            selectedDay: new Date(),
            eventsToDispay: [],
            userdata: new User(),
            filled: [],
            editingEvent: false,
            creatingEvent: false,
            creatingRepeat: false,
            selectedEvent: new Event(),
            inputing: {
                title: "",
                date: "",
                time: "",
                ignore: false,
                ignoreReason: "",
                allday: false,
                calendar: { label: "", value: new Calendar() },
                startDate: "",
                endDate: "",
                cycle: "",
                description: "",
                location: "",
                repeatData: 0
            }
        };
        this.handleDayClick = this.handleDayClick.bind(this);
        this.openEventEditDialog = this.openEventEditDialog.bind(this);
        this.closeEventEditDialog = this.closeEventEditDialog.bind(this);
        this.openEventCreateDialog = this.openEventCreateDialog.bind(this);
        this.closeEventCreateDialog = this.closeEventCreateDialog.bind(this);
        this.openRepeatCreateDialog = this.openRepeatCreateDialog.bind(this);
        this.closeRepeatCreateDialog = this.closeRepeatCreateDialog.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.createEvent = this.createEvent.bind(this);
        this.createRepeat = this.createRepeat.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    async handleDayClick(day: Date) {
        var newdata = buildRepeatToEvent(this.state.userdata, day);
        fetch(backendURL + "/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        this.setState({
            selectedDay: day,
            userdata: newdata
        });
    }

    static async getInitialProps() {
        try {
            const res = await fetch(backendURL + "/api/getuserdata");
            const json = await res.json();
            var userdata = new User(json);
            var etd = eventsToDispay(userdata.calendars, new Date());
            return { userdata: userdata, eventsToDispay: etd };
        } catch (err) {
            displayError("發生錯誤 T_T", err);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ userdata: this.props.userdata, loaded: true });
        }, 200);
    }

    openEventEditDialog(event: Event) {
        this.setState({
            selectedEvent: event,
            editingEvent: true,
            inputing: {
                title: event.title,
                date: event.startTime.getFullYear() + "/" + (event.startTime.getMonth() + 1) + "/" + event.startTime.getDate(),
                time: event.startTime.getHours() + ":" + event.startTime.getMinutes() + "~" + event.endTime.getHours() + ":" + event.endTime.getMinutes(),
                ignore: event.ignore,
                ignoreReason: event.ignoreReason == undefined ? "" : event.ignoreReason,
                allday: event.isAllDayEvent(),
                calendar: { label: "", value: new Calendar() },
                startDate: "",
                endDate: "",
                cycle: "",
                repeatData: 0,
                description: event.description,
                location: event.location
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
                title: "",
                date: this.state.selectedDay.getFullYear() + "/" + (this.state.selectedDay.getMonth() + 1) + "/" + this.state.selectedDay.getDate(),
                time: new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes(),
                calendar: { label: this.state.userdata.calendars[0].title, value: this.state.userdata.calendars[0] },
                allday: false,
                ignore: false,
                ignoreReason: "",
                startDate: "",
                endDate: "",
                cycle: "",

                description: "",
                location: "",
                repeatData: 0
            }
        });
    }

    openRepeatCreateDialog() {
        this.setState({
            creatingEvent: false,
            creatingRepeat: true,
            inputing: {
                title: "",
                startDate: this.state.selectedDay.getFullYear() + "/" + (this.state.selectedDay.getMonth() + 1) + "/" + this.state.selectedDay.getDate(),
                endDate: this.state.selectedDay.getFullYear() + "/" + (this.state.selectedDay.getMonth() + 1) + "/" + this.state.selectedDay.getDate(),
                cycle: "Week",
                repeatData: 0,
                time: new Date().getHours() + ":" + new Date().getMinutes() + "~" + (new Date().getHours() + 1) + ":" + new Date().getMinutes(),
                calendar: { label: this.state.userdata.calendars[0].title, value: this.state.userdata.calendars[0] },
                allday: false,
                date: "",
                description: "",
                location: "",
                ignore: false,
                ignoreReason: ""
            }
        });
    }

    closeRepeatCreateDialog() {
        this.setState({ creatingRepeat: false });
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
        newStartTime.setFullYear(+this.state.inputing.date.split("/")[0], +this.state.inputing.date.split("/")[1] - 1, +this.state.inputing.date.split("/")[2]);
        newEndTime.setFullYear(+this.state.inputing.date.split("/")[0], +this.state.inputing.date.split("/")[1] - 1, +this.state.inputing.date.split("/")[2]);
        if (this.state.inputing.allday) {
            newStartTime.setHours(0, 0);
            newEndTime.setHours(24, 0);
        } else {
            newStartTime.setHours(+this.state.inputing.time.split("~")[0].split(":")[0], +this.state.inputing.time.split("~")[0].split(":")[1]);
            newEndTime.setHours(+this.state.inputing.time.split("~")[1].split(":")[0], +this.state.inputing.time.split("~")[1].split(":")[1]);
        }
        var newdata = this.state.userdata;
        newdata.calendars.map(calendar => {
            if (calendar.title == this.state.inputing.calendar.label) {
                calendar.events.push(createEvent(this.state.inputing.title, calendar.color, newStartTime, newEndTime, "", false, false, this.state.inputing.description, this.state.inputing.location));
            }
        });

        // 更新視圖
        var etd = eventsToDispay(newdata.calendars, new Date());
        this.setState({ userdata: newdata, eventsToDispay: etd, waiting: false, creatingEvent: false });

        // 上傳更新到資料庫
        var res = null;
        try {
            res = await fetch(backendURL + "/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        } catch (err) {
            displayError("對不起 ... 發生技術性問題啦 T_T", "創建新事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
        } finally {
            if (res != null && res.status != 200) displayError("對不起 ... 發生技術性問題啦 T_T", "創建新事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
        }
    }

    async createRepeat() {
        this.setState({
            waiting: true
        });
        var startDate = new Date();
        var endDate = new Date();
        startDate.setFullYear(
            +this.state.inputing.startDate.split("/")[0],
            +this.state.inputing.startDate.split("/")[1] - 1,
            +this.state.inputing.startDate.split("/")[2]
        );
        endDate.setFullYear(
            +this.state.inputing.endDate.split("/")[0],
            +this.state.inputing.endDate.split("/")[1] - 1,
            +this.state.inputing.endDate.split("/")[2]
        );
        var newStartTime = new Date();
        var newEndTime = new Date();
        newStartTime.setFullYear(
            +this.state.inputing.startDate.split("/")[0],
            +this.state.inputing.startDate.split("/")[1] - 1,
            +this.state.inputing.startDate.split("/")[2]
        );
        newEndTime.setFullYear(
            +this.state.inputing.startDate.split("/")[0],
            +this.state.inputing.startDate.split("/")[1] - 1,
            +this.state.inputing.startDate.split("/")[2]
        );
        if (this.state.inputing.allday) {
            newStartTime.setHours(0, 0);
            newEndTime.setHours(24, 0);
        } else {
            newStartTime.setHours(+this.state.inputing.time.split("~")[0].split(":")[0], +this.state.inputing.time.split("~")[0].split(":")[1]);
            newEndTime.setHours(+this.state.inputing.time.split("~")[1].split(":")[0], +this.state.inputing.time.split("~")[1].split(":")[1]);
        }
        var newdata = this.state.userdata;
        newdata.calendars.map(calendar => {
            if (calendar.title == this.state.inputing.calendar.label) {
                var newRepeat = new Repeat();
                newRepeat.name = this.state.inputing.title;
                newRepeat.startDate = startDate;
                newRepeat.endDate = endDate;
                newRepeat.startTime = newStartTime;
                newRepeat.endTime = newEndTime;
                newRepeat.cycle = this.state.inputing.cycle;
                newRepeat.repeatData = this.state.inputing.repeatData;
                newRepeat.description = this.state.inputing.description;
                newRepeat.location = this.state.inputing.location;
                calendar.repeats.push(newRepeat);
            }
        });

        // 更新視圖
        var etd = eventsToDispay(newdata.calendars, new Date());
        this.setState({ userdata: newdata, eventsToDispay: etd, waiting: false, creatingRepeat: false });

        // 上傳變更到數據庫
        var res = null;
        try {
            res = await fetch(backendURL + "/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        } catch (err) {
            displayError("對不起 ... 發生技術性問題啦 T_T", "創建新系列時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
        } finally {
            if (res != null && res.status != 200) displayError("對不起 ... 發生技術性問題啦 T_T", "創建新系列時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
        }
    }

    async updateEvent() {
        this.setState({
            waiting: true
        });
        var newStartTime = new Date();
        var newEndTime = new Date();
        newStartTime.setFullYear(+this.state.inputing.date.split("/")[0], +this.state.inputing.date.split("/")[1] - 1, +this.state.inputing.date.split("/")[2]);
        newEndTime.setFullYear(+this.state.inputing.date.split("/")[0], +this.state.inputing.date.split("/")[1] - 1, +this.state.inputing.date.split("/")[2]);
        if (this.state.inputing.allday) {
            newStartTime.setHours(0, 0);
            newEndTime.setHours(24, 0);
        } else {
            newStartTime.setHours(+this.state.inputing.time.split("~")[0].split(":")[0], +this.state.inputing.time.split("~")[0].split(":")[1]);
            newEndTime.setHours(+this.state.inputing.time.split("~")[1].split(":")[0], +this.state.inputing.time.split("~")[1].split(":")[1]);
        }
        var newdata = this.state.userdata;
        newdata.calendars.map(calendar => {
            calendar.events.map(event => {
                if (event.id == this.state.selectedEvent.id) {
                    event.startTime = newStartTime;
                    event.endTime = newEndTime;
                    event.title = this.state.inputing.title;
                    event.ignore = this.state.inputing.ignore;
                    event.ignoreReason = this.state.inputing.ignoreReason;
                    event.description = this.state.inputing.description;
                    event.location = this.state.inputing.location;
                }
            });
        });

        // 更新視圖
        var etd = eventsToDispay(newdata.calendars, new Date());
        this.setState({ userdata: newdata, eventsToDispay: etd, waiting: false, editingEvent: false });

        // 上傳變更到資料庫
        var res = null;
        try {
            res = await fetch(backendURL + "/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        } catch (err) {
            displayError("對不起 ... 發生技術性問題啦 T_T", "更新事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
        } finally {
            if (res != null && res.status != 200) displayError("對不起 ... 發生技術性問題啦 T_T", "更新事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
        }
    }

    async removeEvent() {
        this.setState({
            removing: true
        });
        var newdata = this.state.userdata;
        newdata.calendars.map(calendar => {
            var targetEvent = null;
            calendar.events.map(event => {
                if (event.id == this.state.selectedEvent.id) {
                    targetEvent = event;
                }
            });
            if (targetEvent != null) calendar.events.splice(calendar.events.indexOf(targetEvent), 1);
        });

        // 更新視圖
        var etd = eventsToDispay(newdata.calendars, new Date());
        this.setState({ userdata: newdata, eventsToDispay: etd, removing: false, editingEvent: false });

        // 上傳變更到資料庫
        var res = null;
        try {
            res = await fetch(backendURL + "/api/updateuserdata", { method: "post", body: JSON.stringify({ calendars: newdata.calendars }) });
        } catch (err) {
            displayError("對不起 ... 發生技術性問題啦 T_T", "刪除事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
        } finally {
            if (res != null && res.status != 200) displayError("對不起 ... 發生技術性問題啦 T_T", "刪除事件時發生了一些問題，希望你可以與我們聯絡來幫助我們改進 !");
        }
    }

    handleFormChange(value: Inputing) {
        this.setState({
            inputing: {
                ignoreReason: value.ignoreReason,
                ignore: value.ignore,
                calendar: value.calendar,
                cycle: value.cycle,
                repeatData: value.repeatData,
                time: value.time,
                date: value.date,
                title: value.title,
                allday: value.allday,
                startDate: value.startDate,
                endDate: value.endDate,
                description: value.description,
                location: value.location
            }
        });
    }

    render() {
        var DayviewContent = <Loader />;
        var AllDayEventsContent = <Loader />;
        if (this.state.userdata.calendars != undefined) {
            var etd = eventsToDispay(this.state.userdata.calendars, this.state.selectedDay);
            var ade = allDayEventsToDispay(this.state.userdata.calendars, this.state.selectedDay);
            DayviewContent = <DayView events={etd} openEventEditDialog={this.openEventEditDialog} openEventCreateDialog={this.openEventCreateDialog} />;
            AllDayEventsContent = (
                <AllDayEvents events={ade} openEventEditDialog={this.openEventEditDialog} openEventCreateDialog={this.openEventCreateDialog} />
            );
        }
        var Hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        var HourLines = Hours.map(hour => {
            return <Divider key={hour} style={{ position: "absolute", top: hour * 60, width: "100%", margin: 0 }} />
        })

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
                                <div className="app-title">
                                    <h1>Reacal</h1>
                                    <p>專注於使用者體驗的日程規劃工具</p>
                                </div>
                                <div className="day-picker-panel">
                                    <DayPicker selectedDays={this.state.selectedDay} onDayClick={this.handleDayClick} />
                                </div>
                                <div className="day-info">
                                    <h3>
                                        {this.state.selectedDay.getFullYear()} / {this.state.selectedDay.getMonth() + 1} / {this.state.selectedDay.getDate()}
                                    </h3>
                                    <p>{dayDescription}</p>
                                </div>
                                <div className="day-view-panel">
                                    <div className="day-view-scroll">
                                        <Transition in={this.state.loaded} timeout={duration}>
                                            {state => (
                                                <div
                                                    style={{
                                                        ...defaultStyle,
                                                        ...transitionStyles[state]
                                                    }}
                                                >
                                                    {AllDayEventsContent}
                                                </div>
                                            )}
                                        </Transition>
                                    </div>
                                </div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={14}>
                                <Panel style={{ marginLeft: 60 }} bodyFill onDoubleClick={this.openEventCreateDialog}>
                                    <div style={{
                                        overflowY: "scroll",
                                        height: "100vh",
                                    }}>
                                        <div
                                            style={{
                                                height: 1420,
                                                margin: 48,
                                                position: "relative"
                                            }}
                                        >

                                            {HourLines}

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
                                    </div>

                                </Panel>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </FlexboxGrid.Item>
                </FlexboxGrid>

                <EditEventDialog
                    editingEvent={this.state.editingEvent}
                    closeEventEditDialog={this.closeEventEditDialog}
                    selectedEvent={this.state.selectedEvent}
                    inputing={this.state.inputing}
                    handleFormChange={this.handleFormChange}
                    removeEvent={this.removeEvent}
                    removing={this.state.removing}
                    updateEvent={this.updateEvent}
                    waiting={this.state.waiting}
                />

                <CreateEventDialog
                    userdata={this.state.userdata}
                    creatingEvent={this.state.creatingEvent}
                    closeEventCreateDialog={this.closeEventCreateDialog}
                    inputing={this.state.inputing}
                    handleFormChange={this.handleFormChange}
                    createEvent={this.createEvent}
                    waiting={this.state.waiting}
                    openRepeatCreateDialog={this.openRepeatCreateDialog}
                />

                <CreateRepeatDialog
                    userdata={this.state.userdata}
                    creatingRepeat={this.state.creatingRepeat}
                    closeRepeatCreateDialog={this.closeRepeatCreateDialog}
                    inputing={this.state.inputing}
                    handleFormChange={this.handleFormChange}
                    createRepeat={this.createRepeat}
                    waiting={this.state.waiting}
                />
            </Container>
        );
    }
}

export default index;