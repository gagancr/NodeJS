const express =require('express');
const app=express();
const parser=require('body-parser');

app.use(parser.urlencoded({extended:false}))

app.get('/',(req,res)=>res.send("welcome to training"));

app.get('/Home',(req,res)=>res.sendFile(__dirname+"/Home.html"));
app.get('/Register',(req,res)=>res.sendFile(__dirname+"/Register.html"))


app.get("/AfterRegister",(req,res)=>{
    const name=req.query.txtName;
    const email=req.query.txtEmail;
    res.send(` ' ${name} '  you're registered with us will be contacted later with the email address of " ${email} " `)
})

app.post("/AfterRegister",(req,res)=>{
    if(req.body==null){
    res.send("the form doesnt contain body data in it");
    }
    else{
        const name=req.body.txtName;
        const email=req.body.txtEmail;
        res.send(` ' ${name} '  you're registered with us Via HTTP_POST method will be contacted later with the email address of " ${email} " `)
    }
})



app.listen(1234,()=>console.log("server available at 1234"));





/*
CREATE a folder called express
install the express package in this folder
open the terminal in the folder location and enter the command : npm install express , express will be installed in the node modules with a reference of it
mentioned in the package.json
package.json is the config settings for your nodejs project . it contains info like dependencies

*/