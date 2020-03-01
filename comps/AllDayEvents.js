import React from "react";
import EventCard from "./eventCard";

class AllDayEvents extends React.Component {
    render() {
        return this.props.events.map(event => {
            return <EventCard key={event.id} height={60} event={event} openEventEditDialog={this.props.openEventEditDialog} openEventCreateDialog={this.props.openEventCreateDialog} />;
        });
    }
}

export default AllDayEvents;
