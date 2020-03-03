import React, { CSSProperties } from "react";
import { EventCardProps, EventCardState } from "../interfaces";

import { FlexboxGrid, Whisper, Popover, Panel } from "rsuite";

class EventCard extends React.Component<EventCardProps, EventCardState> {
    constructor(props: Readonly<EventCardProps>) {
        super(props);
        this.state = {
            hover: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.openEventEditDialog(this.props.event);
    }

    render() {
        const event = this.props.event;
        const style: CSSProperties = {
            height: this.props.height > 0 ? this.props.height : event.getDuration(),
            backgroundImage: "linear-gradient(315deg, " + event.color[0] + " 0%, " + event.color[1] + " 100%)",
            fontSize: 8,
            paddingLeft: 16,
            paddingTop: 10,
            marginTop: event.isAllDayEvent() ? 16 : 0,
            paddingBottom: 6,
            opacity: event.ignore ? 0.2 : 1
        };

        const gridStyle: CSSProperties = {
            width: "100%",
            position: "absolute",
            top: event.getDurationBetweenDayBegin()
        }

        /** compose event info of card */
        var lineAmount =
            this.props.height >= 0
                ? Math.floor(this.props.height / 20) > 1
                    ? Math.floor(this.props.height / 20) - 1
                    : 1
                : Math.floor(event.getDuration() / 20) > 1
                    ? Math.floor(event.getDuration() / 20) - 1
                    : 1;
        var eventInfo = [];
        eventInfo.push(
            event.isAllDayEvent() ? (
                <p key="title" style={{ color: "white" }}>
                    {event.title}{" "}
                </p>
            ) : (
                    <p key="title" style={{ color: "white" }}>
                        {event.title}{" "}
                        <strong style={{ marginLeft: 16, color: "rgba(255,255,255,0.4)" }}>{event.getDurationString()}</strong>
                    </p>
                )
        );
        if (event.description != "") eventInfo.push(<p style={{ color: "rgba(255,255,255,0.8)" }} key="description">
            {event.description}
        </p>)
        if (event.location != "") eventInfo.push(<p style={{ color: "rgba(255,255,255,0.8)" }} key="location">
            {event.location}
        </p>)
        if (!event.isAllDayEvent())
            eventInfo.push(
                <p style={{ color: "rgba(255,255,255,0.8)" }} key="duration">
                    {event.getDuration()} 分鐘
                        </p>
            );
        eventInfo.push(
            <p style={{ color: "rgba(255,255,255,0.8)" }} key="cal">
                {event.calendarTitle}
            </p>
        );
        if (event.isAllDayEvent()) {
            if (event.ignore == true)
                return (
                    <Whisper
                        placement="right"
                        delayHide={0}
                        trigger="hover"
                        speaker={<Popover>該事件已被忽略，原因為{event.ignoreReason}</Popover>}
                    >
                        <Panel style={style} onClick={this.handleClick} key={event.id} className="EventCard" bodyFill>
                            {eventInfo.slice(0, lineAmount).map(info => {
                                return info;
                            })}
                        </Panel>
                    </Whisper>
                );
            else {
                return (
                    <Panel style={style} onClick={this.handleClick} key={event.id} className="EventCard" bodyFill>
                        {eventInfo.slice(0, lineAmount).map(info => {
                            return info;
                        })}
                    </Panel>
                );
            }
        } else {
            if (event.ignore == true)
                return (
                    <Whisper
                        placement="right"
                        delayHide={0}
                        trigger="hover"
                        speaker={<Popover>該事件已被忽略，原因為{event.ignoreReason}</Popover>}
                    >
                        <FlexboxGrid style={gridStyle}>
                            <FlexboxGrid.Item colspan={4}>
                                {event.getStartTimeSrting()}
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={18}>
                                <Panel style={style} onClick={this.handleClick} key={event.id} className="EventCard" bodyFill>
                                    {eventInfo.slice(0, lineAmount).map(info => {
                                        return info;
                                    })}
                                </Panel>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Whisper>
                );
            else {
                return (
                    <FlexboxGrid style={gridStyle}>
                        <FlexboxGrid.Item colspan={4}>
                            {event.getStartTimeSrting()}
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={18}>
                            <Panel style={style} onClick={this.handleClick} key={event.id} className="EventCard" bodyFill>
                                {eventInfo.slice(0, lineAmount).map(info => {
                                    return info;
                                })}
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>

                );
            }
        }

    }
}

export default EventCard;
