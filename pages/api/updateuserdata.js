import nextConnect from "next-connect";
import middleware from "./database";
const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    try {
        var calendars = JSON.parse(req.body).calendars;
        if (calendars != undefined) await req.db.collection("userdata").updateOne({ username: "ken20001207" }, { $set: { calendars: calendars } });
        res.json({ code: 200 });
    } catch (err) {
        res.json({ code: 500, message: err });
    }
});

export default handler;
