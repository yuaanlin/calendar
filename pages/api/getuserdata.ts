import nextConnect from "next-connect";
import middleware from "./database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: { db: { collection: (arg0: string) => { (): any; new(): any; findOne: { (arg0: { username: string; }): any; new(): any; }; }; }; }, res: { json: (arg0: any) => void; }) => {
    let doc = await req.db.collection("userdata").findOne({ username: "ken20001207" });
    res.json(doc);
});

export default handler;
