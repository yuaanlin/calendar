import nextConnect from "next-connect";
import middleware from "./database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection("userdata").findOne({ username: "ken20001207" });
    res.json(doc);
});

export default handler;
