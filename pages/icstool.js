import React from "react";
import EventCard from "../comps/eventCard";
import { Event } from "../classes";

/** Parse .ics string into event array */
function toEventArray(lines) {
    return new Promise(resolve => {
        var events = [];
        var tempEvent = { cal: "重要事項" };
        var reading = false;
        for (var line = 0; line < lines.length; line++) {
            if (lines[line].includes("BEGIN") && lines[line].includes("VEVENT")) {
                reading = true;
            } else if (lines[line].includes("END") && lines[line].includes("VEVENT")) {
                if (tempEvent.title != undefined && tempEvent.cal != undefined && tempEvent.startTime != undefined && tempEvent.endTime != undefined) {
                    events.push(
                        new Event({ title: tempEvent.title, startTime: tempEvent.startTime, endTime: tempEvent.endTime, color: ["#FFAF3A", "#8E5800"] })
                    );
                }
                reading = false;
            }
            if (reading) {
                if (lines[line].includes("DTSTART")) {
                    tempEvent.startTime = calenDate(lines[line].split(":")[1]);
                } else if (lines[line].includes("DTEND")) {
                    tempEvent.endTime = calenDate(lines[line].split(":")[1]);
                } else if (lines[line].split(":")[0] == "SUMMARY") {
                    tempEvent.title = lines[line].split(":")[1];
                } else if (lines[line].split(":")[0] == "LOCATION") {
                    tempEvent.location = lines[line].split(":")[1];
                } else if (lines[line].split(":")[0] == "DESCRIPTION") {
                    tempEvent.description = lines[line].split(":")[1];
                }
            }
        }
        resolve(events);
    });
}

/** Parse string of ics date format into date object */
function calenDate(icalStr) {
    var strYear = icalStr.substr(0, 4);
    var strMonth = parseInt(icalStr.substr(4, 2), 10) - 1;
    var strDay = icalStr.substr(6, 2);
    var strHour = icalStr.substr(9, 2);
    var strMin = icalStr.substr(11, 2);
    var strSec = icalStr.substr(13, 2);

    var oDate = new Date(strYear, strMonth, strDay, strHour, strMin, strSec);

    return oDate;
}

class icstool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    onChangeHandler = e => {
        const file = e.target.files[0];
        var reader = new FileReader();
        const vm = this;
        reader.onload = async function() {
            var lines = this.result.split("\n");
            vm.setState({
                events: await toEventArray(lines)
            });
        };
        reader.readAsText(file);
    };

    render() {
        const eventcards = this.state.events.map(event => {
            return <EventCard event={event} height={90} key={event.title} />;
        });
        return (
            <div>
                <input style={{ marginTop: this.state.events.length == 0 ? 360 : 60 }} type="file" name="file" onChange={this.onChangeHandler} />
                <div style={{ marginTop: 30, marginBottom: 30, color: "white" }}>{JSON.stringify(this.state.events)}</div>
                {eventcards}
                <style global jsx>{`
                    body {
                        background: #333333;
                    }
                    ::-webkit-scrollbar {
                        width: 5px;
                    }
                    ::-webkit-scrollbar-track {
                        -webkit-border-radius: 10px;
                        border-radius: 10px;
                        margin: 80px 0 5px 0;
                    }
                    ::-webkit-scrollbar-thumb {
                        -webkit-border-radius: 4px;
                        border-radius: 4px;
                        background: rgb(80, 80, 80);
                    }
                `}</style>
            </div>
        );
    }
}

export default icstool;
