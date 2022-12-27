const os=require("os");
console.log(os.version());
console.log(os.hostname());
console.log(os.arch());

const cpusInfo=os.cpus();

for(const info of cpusInfo){
    console.log(JSON.stringify(info));
}
console.log(os.totalmem());
console.log(os.totalmem()/(1024*1024*1024));

console.log(os.freemem());
console.log(os.freemem()/(1024*1024*1024));

console.log(os.userInfo());