const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql")
const conn = require("express-myconnection");
const taskRoutes = require("./routes/tasks.js")

const app = express()
app.set("port",process.env.PORT || 3000);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//middlewars

app.use(morgan("dev"));
app.use(conn(mysql,{
    host:"localhost",
    user: "root",
    password: "",
    database:"tareas"
},"single"))

app.use(express.urlencoded({extended:false}))

//routes

app.use("/",taskRoutes);

//static files
app.use(express.static(path.join(__dirname,"public")));

app.listen(app.get("port"),()=>{
    console.log(`app funcionando en el puerto ${app.get("port")}`)
})