import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


var today = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","","March","May","April","June","July","August","September","October","November","December"];
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1);
let day = weekday[today.getDay()];
mm = month[mm]
const dayFormatted = day + ", " + mm + ' ' + dd


var todos = [];
var schoolTodos = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", (req,res) => {
    res.render("index.ejs", { day: dayFormatted, listedTodos: todos })
})

app.get("/school", (req,res) => {
    res.render("school.ejs", { day: dayFormatted, listedTodos: schoolTodos })
})

app.post("/adddaytodo", (req,res) => {
    todos.push(req.body["todo"]);
    res.render("index.ejs", { day: dayFormatted, listedTodos: todos })
})

app.post("/addschooltodo", (req,res) => {
    schoolTodos.push(req.body["todo"]);
    res.render("school.ejs", { day: dayFormatted, listedTodos: schoolTodos })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})