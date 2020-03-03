import React from "react";
import { EventCardProps } from "../interfaces";

import { Whisper, Popover, Panel } from "rsuite";

class EventCard extends React.Component<EventCardProps> {
    constructor(props: Readonly<EventCardProps>) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmptyCardClick = this.handleEmptyCardClick.bind(this);
    }

    handleClick() {
        this.props.openEventEditDialog(this.props.event);
    }

    handleEmptyCardClick() {
        this.props.openEventCreateDialog();
    }

    emptyCard(startTime: Date, endTime: Date) {
        const duration = (endTime.getTime() - startTime.getTime()) / 60000;
        var cardStyle: React.CSSProperties = {
            height: duration,
            backgroundColor: "transparent",
            borderBottomStyle: endTime.getMinutes() == 0 ? "solid" : "none",
            borderBottomColor: "#2F3136",
            borderBottomWidth: 2,
            borderTopStyle: startTime.getMinutes() == 0 ? "solid" : "none",
            borderTopColor: "#2F3136",
            borderTopWidth: 2
        };
        return <div style={cardStyle} key={startTime.getTime()} onClick={this.handleEmptyCardClick}>
            {
                // startTime.getHours() + ":" + startTime.getMinutes() + "~" + endTime.getHours() + ":" + endTime.getMinutes()
            }
        </div>;
    }

    EmptySections(start: Date, end: Date) {
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
            for (var i = start.getHours() + 1, j = 1; i < end.getHours(); i++ , j++) {
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
        if (this.props.event.isEmpty) {
            return this.EmptySections(this.props.event.startTime, this.props.event.endTime).map(emptyCard => {
                return emptyCard;
            });
        } else {
            const style = {
                height: this.props.height != undefined ? this.props.height : this.props.event.getDuration(),
                backgroundImage: "linear-gradient(315deg, " + this.props.event.color[0] + " 0%, " + this.props.event.color[1] + " 100%)",
                fontSize: 8,
                paddingLeft: 16,
                paddingTop: 10,
                paddingBottom: 6,
                opacity: this.props.event.ignore ? 0.2 : 1
            };

            /** compose event info of card */
            var lineAmount =
                this.props.height >= 0
                    ? Math.floor(this.props.height / 20) > 1
                        ? Math.floor(this.props.height / 20) - 1
                        : 1
                    : Math.floor(this.props.event.getDuration() / 20) > 1
                        ? Math.floor(this.props.event.getDuration() / 20) - 1
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
                        {this.props.event.getDuration()} 分鐘
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
    }
}

export default EventCard;
