//faker 
const {faker} = require("@faker-js/faker");
//mysql2
const mysql = require("mysql2");
//for express
const express = require("express");
let app = express();
let port =3000;
let path = require("path");
//for ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//for serving static file
app.use(express.static(path.join(__dirname,"public")));
//for post request
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Method Override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
//for uuid
const { v4: uuidv4 } = require("uuid");
let createRandomUser = ()=>{
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};
//create connection
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "legend",
    password :""
});
//our first query insert 105 users to the database 
//using place holder " ? "
// let q = "insert into Teacher values ?";
// let data = [];
// for(let i=0;i<=105;i++){
//     data.push(createRandomUser());
// }
// //push 105 users data into the Teacher table
// //use the connection
// try{
//     connection.query(q , [data],(err ,result)=>{
//         if(err)throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// };
// connection.end();

//create our home route
//home route show how much data exist in our table
app.listen(port,()=>{
    console.log("Bhai Sunuchi Re..");
});
app.get("/",(req,res)=>{
    let q = "select count(*) from Teacher"
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let count = result[0]['count(*)']
            res.render("home.ejs",{count});
        });
    }catch(err){
        console.log(err);
    };
});
//show all users of the database
app.get("/user",(req,res)=>{
    let q = "select * from Teacher";
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("showuser.ejs",{users});
        });
    }catch(err){
        console.log(err);
        res.send("Some error Occurs in the database");
    };
});
//our third Task
//to render the edit form
app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params;
    let q = `select * from Teacher where id = "${id}"`;
    try{
        connection.query(q,(err,result)=>{
           if(err) throw err;
            let user = result[0];
            console.log(user);
            res.render("edit.ejs",{user});
        });
    }catch(err){
        console.log(err);
    };
});
//update route
app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    let q = `select * from Teacher where id = "${id}"`;
    let {password: formpass , name : newname} = req.body;
    try{
        connection.query(q , (err,result)=>{
            if(err) throw err;
            let user = result[0];
            if(formpass != user.password){
                res.send("InCorrect Password . Enter Corrrect Password");
            }else{
                let q2 = `update Teacher set name = "${newname}" where id = "${id}" `;
                connection.query(q2,(err,ans)=>{
                    if(err)throw err;
                    console.log(ans);
                    res.redirect("/user");
                });
            };
        });
    }catch(err){
        console.log(err);
        res.send("Some Error Occurs");
    };
});
//add a user 
//serve the form
app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
});
//update the form
app.post("/user", (req, res) => {
    let id = uuidv4();

    let { name, email, password } = req.body;

    let q = `insert into Teacher values (?, ?, ?, ?)`;
    try{
    connection.query(q, [id, name, email, password], (err, result) => {
        if(err)throw err;
        res.redirect("/user");
    });
}catch(err){
    console.log(err);
};
});
