const helper = require('./helper');
const read = helper.read;
const write = helper.write;

console.log("start");

// console.log(process.argv);
const request = process.argv[2];
if(request === "read") {
    read();
} else if(request === "write") {
    write();
} else {
    console.error("エラー:readまたはwriteの引数を入れてください")
}

console.log("end");
