import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let taskList = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.post("/submit", (req, res)=>{
    taskList.push(req.body.taskName);    
    res.render("index.ejs", {
        taskList: taskList
    });
})


app.listen(port, ()=>{

    console.log(`listning on ${port}`);

});