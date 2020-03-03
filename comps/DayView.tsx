import React from "react";
import EventCard from "./eventCard";
import { FlexboxGrid } from "rsuite";
import { DayViewProps } from "../interfaces"

class DayView extends React.Component<DayViewProps> {

    render() {
        return this.props.events.map(event => {
            return (
                <FlexboxGrid key={event.id} spacing={1}>
                    <FlexboxGrid.Item colspan={4}>
                        <p style={{ color: "white", fontSize: 8 }}>{event.isEmpty ? "" : event.getStartTimeSrting()}</p>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={20}>
                        <EventCard
                            height={-1}
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
