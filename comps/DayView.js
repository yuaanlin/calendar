import React from "react";
import EventCard from "./eventCard";
import { FlexboxGrid } from "rsuite";
import { Event } from "../classes";

class DayView extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.props.openEventEditDialog(this.props.event);
    };

    render() {
        return this.props.events.map(event => {
            event = new Event(event, event.isEmpty);
            return (
                <FlexboxGrid key={event.id} spacing={1}>
                    <FlexboxGrid.Item colspan={4}>
                        <p style={{ color: "white", fontSize: 8 }}>{event.isEmpty ? "" : event.getStartTimeSrting()}</p>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={20}>
                        <EventCard
                            event={event}
                            openEventEditDialog={this.props.openEventEditDialog}
                            openEventCreateDialog={this.props.openEventCreateDialog}
                        />
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            );
        });
    }
}

export default DayView;
