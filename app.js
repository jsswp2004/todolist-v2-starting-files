//jshint esversion:6
//connecting mongoose
//1. Require mongoose
//#2 establish mongoose connection
//3. establish eschema
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose"); //#1
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//lecture 342 code not needed for mongoose
//const items = ["Buy Food", "Cook Food", "Eat Food"];
//const workItems = [];
//#3 create schema
const todolistSchema = new mongoose.Schema (
  {
    taskName: {
      type: String,
      required: [true, "Please check your data entry"]
    }
  }
);

//#2 establish mongoose connection
mongoose.connect("mongodb://localhost:27017/todolistDB");

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
