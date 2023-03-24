const readLine = require("readline");

let rl = readLine.createInterface(process.stdin , process.stdout);

rl.question("Enter Your Name : " , (ans)=>{
    console.log("Hello " +ans);
    rl.close()
})