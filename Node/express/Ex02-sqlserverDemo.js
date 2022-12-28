const app=require("express")();
const server=require("mssql/msnodesqlv8");
const parser=require("body-parser")
app.use(parser.urlencoded({"extended" : true}));
app.use(parser.json())
const config={
    server : '192.168.171.36',
    database : '3310',
    driver : 'msnodesqlv8',
    options:{
        trustedConnection : true,
        TrustServerCertificate :  true
    }


}

const pool =new server.ConnectionPool(config);

app.get("/Form", (req, res) => res.sendFile(__dirname + "/form.html"));

app.get("/Tablerecords", (req, res)=>res.sendFile(__dirname + "/table.html"));

app.post("/formPost", (req, res)=>{
    const body = req.body;
    console.log(body);
    const query = `INSERT INTO employees VALUES(${body.id}, '${body.name}', '${body.address}',${body.salary})`;
    pool.connect().then(()=>{
        pool.request().query(query, (err, result) => {
            if (err)
                console.log(err)
            else
                res.send("Employee inserted successfully")
        })
    }).catch((err)=>{
        console.error(err)
    })
})
app.get('/',(req,res)=>{

//connect to database

pool.connect().then(()=>{
    pool.request().query("select * from employees",(err,results)=>{
        if(err){
            console.error(err);
        }
        else{
            
        res.send(results.recordset);
        
        }

    })

}).catch((err)=>{
    if(err) console.log(err);
})
})

app.get("/:id",(req,res)=>{
    console.log(req.params);

    const id=parseInt(req.params.id);
    pool.connect().then(()=>{
        pool.request().query(`select * from employees where empId=${id}`,(err,result)=>{

       
        if(err)
        console.error(err);
        else
        res.send(result.recordset)
    })
    }).catch((err)=>{
        if(err) console.log(err);
})
})

app.post("/",(req,res)=>{
    const body=req.body;
    const query=`insert into employees values(${body.empid},'${body.empName}','${body.empAdress}',${body.empSalary})`;
    pool.connect().then(()=>{
        pool.request().query(query,(err,result)=>{
            if(err)
            console.log(err);
            else
            res.send("employee inserted successfully")
        })
    }).catch((err)=>{
        console.error(err);
    })
})


app.delete("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    pool.connect().then(()=>{
        pool.request().query(`delete from employees where empId = ${id}`,(err,result)=>{
            if(err)
            console.error(err);
            else
            res.send("record deleted successfully")
        })
    }).catch((err)=>{
        if(err) console.log(err);
    })

})
app.listen(1234,()=>console.log("server available at 1234"))