const fs=require("fs");

const file= "./Ex02-ConsumingModules.js";

function fileReadingSync(){
const contents =fs.readFileSync(file,"utf-8");

console.log(contents);
}
function fileReadingAsync(){
fs.readFile(file,'utf-8',function(err,data){
    if(err)
    console.error(err);
    else
    console.log(data)
})
}
const obj={"id":122,"name":"enoondu","address":"mysuru"}
function writeToFile(){

    fs.writeFileSync("SampleTextFile.txt",JSON.stringify(obj),"utf-8")
}

function writeFileAsync(){
 fs.writeFile("SampleTextFile.txt","Sample text to write ",(err)=>{
    if(err) console.log(err)
 })
}

function appendingToFile(){
    fs.appendFileSync("SampletextFile.txt" , "\nContent will be appended to the next line" , "utf-8")
}
function appendingToFileAsync(){
    fs.appendFile("SampletextFile.txt","\nAsyncContent will be appended to the next line" ,(err)=>{
        if(err) console.log(err);
    })
}


appendingToFileAsync();
//appendingToFile();
// fileReadingSync();
// fileReadingAsync();
// writeToFile();
// writeFileAsync()
console.log("this will execute after file reading")