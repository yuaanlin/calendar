import nextConnect from "next-connect";
import middleware from "./database";
import { User, Calendar, Event } from "../../classes";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection("userdata", function(err, collection) {
        if (err) console.error(err);
        collection.insertOne(
            new User({
                username: "ken20001207",
                calendars: [
                    new Calendar({
                        title: "預設行事曆1",
                        color: ["#fd3721", "#b721ff"],
                        events: [
                            new Event({
                                title: "預設事項1",
                                startTime: new Date("2020/2/23 10:00"),
                                endTime: new Date("2020/2/23 11:00"),
                                color: ["#fd3721", "#b721ff"]
                            }),
                            new Event({
                                title: "預設事項2",
                                startTime: new Date("2020/2/24 13:00"),
                                endTime: new Date("2020/2/24 14:00"),
                                color: ["#fd3721", "#b721ff"]
                            }),
                            new Event({
                                title: "預設事項3",
                                startTime: new Date("2020/2/23 16:00"),
                                endTime: new Date("2020/2/23 17:00"),
                                color: ["#fd3721", "#b721ff"]
                            })
                        ]
                    }),
                    new Calendar({
                        title: "預設行事曆2",
                        color: ["#B721FF", "#21D4FD"],
                        events: [
                            new Event({
                                title: "預設事項4",
                                startTime: new Date("2020/2/24 10:00"),
                                endTime: new Date("2020/2/24 11:00"),
                                color: ["#B721FF", "#21D4FD"]
                            }),
                            new Event({
                                title: "預設事項5",
                                startTime: new Date("2020/2/23 12:00"),
                                endTime: new Date("2020/2/23 13:30"),
                                color: ["#B721FF", "#21D4FD"]
                            }),
                            new Event({
                                title: "預設事項6",
                                startTime: new Date("2020/2/24 15:00"),
                                endTime: new Date("2020/2/24 15:30"),
                                color: ["#B721FF", "#21D4FD"]
                            })
                        ]
                    })
                ]
            })
        );
    });
    res.json({ code: 200 });
});

export default handler;
