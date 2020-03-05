import React, { CSSProperties } from "react";
import { EventCardProps, EventCardState } from "../interfaces";
import { getEventPopoverContent, getLineAmount, getEventCardInfo } from "../utils/methods";

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

        var lineAmount = getLineAmount(event, this.props.height);
        var eventInfo = getEventCardInfo(event);
        var popoverContent = getEventPopoverContent(event);

        if (event.isAllDayEvent())
            return (
                <Whisper
                    placement="right"
                    delayHide={0}
                    trigger="hover"
                    speaker={<Popover title={event.title}>{popoverContent.map(content => {
                        return content;
                    })}</Popover>}
                >
                    <Panel style={style} onClick={this.handleClick} key={event.id} className="EventCard" bodyFill>
                        {eventInfo.slice(0, lineAmount).map(info => {
                            return info;
                        })}
                    </Panel>
                </Whisper>
            );
        else
            return (

                <FlexboxGrid className={event.ignore ? "ignoredEventCardGrid" : "EventCardGrid"} style={gridStyle}>
                    <FlexboxGrid.Item colspan={4}>
                        {event.getStartTimeSrting()}
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={18}>
                        <Whisper
                            placement="right"
                            delayHide={0}
                            container={this.props.container.current == null ? undefined : this.props.container.current}
                            trigger="hover"
                            speaker={<Popover title={event.title}>{popoverContent.map(content => {
                                return content;
                            })}</Popover>}
                        >
                            <Panel style={style} onClick={this.handleClick} key={event.id} className="EventCard" bodyFill>
                                {eventInfo.slice(0, lineAmount).map(info => {
                                    return info;
                                })}
                            </Panel>

                        </Whisper>

                    </FlexboxGrid.Item>
                </FlexboxGrid>
            );
    }

}

export default EventCard;
