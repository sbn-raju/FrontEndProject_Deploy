const express = require('express');
const path = require("path");

const app = express();



require('dotenv').config();
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"../views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,"../public/css")));
app.use(express.static(path.join(__dirname,"../public/js")));
app.use(express.static(path.join(__dirname,"../public/images")));


const getIndexPage = require("./routes/indexPage.routes.js");
const getProjectpage = require("./routes/projectPage.routes.js");



app.get("/",getIndexPage);
app.get("/api/project/:id",getProjectpage);



app.listen(process.env.PORT||8080,()=>{
    console.log("App is listening at port");
});
