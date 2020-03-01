import { XMLHttpRequest } from "xmlhttprequest";
import fs from "fs";


export function getNewSessionID() {
    return new Promise((resolve, _reject) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = "arraybuffer";
        xhr.open("get", "http://jwbinfosys.zju.edu.cn/CheckCode.aspx", true);
        xhr.send(null);
        xhr.onload = function() {
            fs.writeFile("a.gif", Buffer.from(this.responseText), ()=>{});

            resolve(
                xhr
                    .getResponseHeader("Set-Cookie")
                    .toString()
                    .split("=")[1]
                    .split(";")[0]
            );
        };
    });
}
