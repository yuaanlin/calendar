import nextConnect from "next-connect";
import { getNewSessionID, getCaptcha } from "../../utils/xhr";

const handler = nextConnect();

handler.get(async (req, res) => {
    var sessionID = await getNewSessionID();
    res.json(sessionID);
});

export default handler;
