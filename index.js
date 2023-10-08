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



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs", { day: dayFormatted })
})

app.get("/work", (req,res) => {
    res.render("work.ejs", { day: dayFormatted })
})

//app.post("/addtask", (req,res) => {
//    res.render("index.ejs")
//})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})