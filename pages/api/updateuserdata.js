import nextConnect from "next-connect";
import middleware from "./database";
import parse from "urlencoded-body-parser";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    var calendars = JSON.parse(req.body).calendars;
    if (calendars != undefined) await req.db.collection("userdata").updateOne({ username: "ken20001207" }, { $set: { calendars: calendars } });
    else console.log("null!");
    res.json({ code: 200 });
});

export default handler;
