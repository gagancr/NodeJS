const http=require('http');
const fs =require('fs');
const httpParse=require('url').parse;
const dir=__dirname; //const for the current directory of the application.

function displayPage(res,url){
    const file=dir+url+".html";
    fs.createReadStream(file).pipe(res); //it will read the stream data of the file and push the stream to the response and end the response
}


function errorPage(res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h1 style='color:red'>OOPS!! Something wrong happened</h1>")
    res.write("<hr>")
    res.write("<h2> The page you have requested is not available with us!!!")


}

http.createServer((req,res)=>{
    if(req.method=="GET"){
        const query=httpParse(req.url).query;
        if(query!=null){
            let obj=httpParse(req.url,true).query;
        const msg=`Thanks ${obj.txtName} for registering with us! your email ${obj.txtEmail} is registered`;
        res.write(msg);
        res.end();
        return;
        }
    } else if(req.method=="POST"){
        req.on("data" ,function(inputs){ //data(predefined) is an event triggered when the page is posted
            res.write(inputs);
            res.end();
            return;
        })
    }
    switch(req.url){
        case "/favicon.ico": {
         res.end();
         break;
        }
        case "/Register":
            displayPage(res,req.url);
            break;
        case "/Home":
            displayPage(res,req.url);
            break;
            default:{
                errorPage(res);
                res.end()
                break;
                }
    }
   
}).listen(1234);