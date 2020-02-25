import React from "react";
import Grid from "@material-ui/core/Grid";
import EventCard from "./eventCard";

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
                <Grid key={event.id} container spacing={1}>
                    <Grid item xs={2}>
                        <p style={{ color: "white", fontSize: 8 }}>{event.isEmpty ? "" : event.getStartTimeSrting()}</p>
                    </Grid>
                    <Grid item xs={10}>
                        <EventCard event={event} openEventEditDialog={this.props.openEventEditDialog} openEventCreateDialog={this.props.openEventCreateDialog} />
                    </Grid>
                </Grid>
            );
        });
    }
}

export default DayView;
