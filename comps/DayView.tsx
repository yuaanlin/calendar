import React from "react";
import EventCard from "./eventCard";
import { DayViewProps } from "../interfaces"

class DayView extends React.Component<DayViewProps> {

    render() {
        return this.props.events.map(event => {
            return (
                <EventCard
                    key={event.id}
                    height={-1}
                    event={event}
                    openEventEditDialog={this.props.openEventEditDialog}
                    openEventCreateDialog={this.props.openEventCreateDialog}
                    container={this.props.container}
                />
            );
        });
    }
}

export default DayView;
