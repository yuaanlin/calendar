import React from "react";
import { Event } from "../classes";

import { Whisper, Popover, Panel } from "rsuite";

class EventCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elevation: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEmptyCardClick = this.handleEmptyCardClick.bind(this);
    }

    handleClick() {
        this.props.openEventEditDialog(this.props.event);
    }

    handleEmptyCardClick() {
        this.props.openEventCreateDialog(this.props.event);
    }

    emptyCard(startTime, endTime) {
        endTime = endTime;
        startTime = startTime;
        const duration = (endTime - startTime) / 60000;
        var cardStyle = {
            height: duration,
            backgroundColor: "transparent",
            borderBottomStyle: endTime.getMinutes() == 0 ? "solid" : "none",
            borderBottomColor: "#2F3136",
            borderBottomWidth: 2,
            borderTopStyle: startTime.getMinutes() == 0 ? "solid" : "none",
            borderTopColor: "#2F3136",
            borderTopWidth: 2
        };
        return <div style={cardStyle} key={startTime.getTime()} onClick={this.handleEmptyCardClick} />;
    }

    EmptySections(start, end) {
        if (end.getHours() < start.getHours()) {
            end.setHours(23, 59, 59);
        }
        var arr = new Array(end.getHours() - start.getHours() + 1);
        if (start.getHours() == end.getHours()) {
            arr[0] = this.emptyCard(start, end);
        } else if (start.getHours() + 1 == end.getHours()) {
            var a = new Date(end);
            a.setMinutes(0);
            arr[0] = this.emptyCard(start, a);
            arr[1] = this.emptyCard(a, end);
        } else {
            var a = new Date(start);
            a.setHours(start.getHours() + 1, 0);
            arr[0] = this.emptyCard(start, a);
            for (var i = start.getHours() + 1, j = 1; i < end.getHours(); i++, j++) {
                var a = new Date(start);
                a.setHours(i, 0);
                var b = new Date(start);
                b.setHours(i + 1, 0);
                arr[j] = this.emptyCard(a, b);
            }
            var a = new Date(end);
            a.setMinutes(0);
            arr[end.getHours() - start.getHours()] = this.emptyCard(a, end);
        }
        return arr;
    }

    render() {
        if (this.props.event instanceof Event) {
            if (this.props.event.isEmpty) {
                return this.EmptySections(this.props.event.startTime, this.props.event.endTime).map(emptyCard => {
                    return emptyCard;
                });
            } else {
                const style = {
                    height: this.props.height != undefined ? this.props.height : this.props.event.duration,
                    backgroundImage: "linear-gradient(315deg, " + this.props.event.color[0] + " 0%, " + this.props.event.color[1] + " 100%)",
                    fontSize: 8,
                    paddingLeft: 16,
                    paddingTop: 10,
                    marginTop: this.props.height != undefined ? 15 : 0,
                    paddingBottom: 6,
                    opacity: this.props.event.ignore ? 0.2 : 1
                };

                /** compose event info of card */
                var lineAmount =
                    this.props.height != undefined
                        ? parseInt(this.props.height / 20) > 1
                            ? parseInt(this.props.height / 20) - 1
                            : 1
                        : parseInt(this.props.event.duration / 20) > 1
                        ? parseInt(this.props.event.duration / 20) - 1
                        : 1;
                var eventInfo = [];
                eventInfo.push(
                    this.props.event.isAllDayEvent() ? (
                        <p key="title" style={{ color: "white" }}>
                            {this.props.event.title}{" "}
                        </p>
                    ) : (
                        <p key="title" style={{ color: "white" }}>
                            {this.props.event.title}{" "}
                            <strong style={{ marginLeft: 16, color: "rgba(255,255,255,0.4)" }}>{this.props.event.getDurationString()}</strong>
                        </p>
                    )
                );
                if (!this.props.event.isAllDayEvent())
                    eventInfo.push(
                        <p style={{ color: "rgba(255,255,255,0.8)" }} key="duration">
                            {this.props.event.duration} 分鐘
                        </p>
                    );
                eventInfo.push(
                    <p style={{ color: "rgba(255,255,255,0.8)" }} key="cal">
                        {this.props.event.calendarTitle}
                    </p>
                );
                if (this.props.event.ignore == true)
                    return (
                        <Whisper
                            placement="right"
                            delayHide={0}
                            trigger="hover"
                            speaker={<Popover>該事件已被忽略，原因為{this.props.event.ignoreReason}</Popover>}
                        >
                            <Panel style={style} onClick={this.handleClick} key={this.props.event.id} bodyFill>
                                {eventInfo.slice(0, lineAmount).map(info => {
                                    return info;
                                })}
                            </Panel>
                        </Whisper>
                    );
                else {
                    return (
                        <Panel style={style} onClick={this.handleClick} key={this.props.event.id} bodyFill>
                            {eventInfo.slice(0, lineAmount).map(info => {
                                return info;
                            })}
                        </Panel>
                    );
                }
            }
        } else {
            console.error("渲染事件卡片時接收到了不符合規範的 Event 物件。");
            return null;
        }
    }
}

export default EventCard;
