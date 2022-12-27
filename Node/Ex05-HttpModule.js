const http=require("http")

http.createServer(function(req,res){
    console.log(req.url);
    // res.write("hello world  ")
    if(req.url=="/employees")
    res.write("employee page of application");
    else if(req.url=="/customers")
    res.write("customer page of the app")

    else
    res.write("default page of the app");

    res.end();
}).listen(1225)