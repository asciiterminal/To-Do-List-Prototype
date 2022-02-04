//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname  + "/date.js");
//our own custom module for date.js

const app = express();

//var item =  "";
const items = ["Buy Food","Cook Food","Eat Food"];
//We created this {var item = "";} to allow the {app.post} to
//insert a new {item} value but it'll only add/update/overwrite one value since its
//only a single declaration obviously.So we'll be creating an array collection instead.
const workItems = [];
//Donnot worry if an array is declared as a {const}, This is JavaScript's
//feature that even if its a {const} but yet an array, new items can be pushed
//into it.

app.set('view engine', 'ejs'); //We added this line of code after {const app = express();}
//since this activates using {express} first and also what this line of code
//does is that it tells out program to use {ejs} as the {view engine}

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res) {

let day = date.getDate();//This will trigger the date module.



  res.render("list", {listTitle: day, newListItems: items});//Page will crash as {item} is defined
    //later in {app.post} so will will define it as an empty string above.
    //But again its a single declaration meaning that no new value will be
    //added instead of adding/overwriting one item.So we will create an array.
    //In {res.render} we have to pass the "day" and "item" variable together
    //send to {list.ejs} otherwise creating them separately will crash the page.
  });

   //{} will contain a JavaScript object from {.ejs}
  //file from the {list.ejs} file within the {<%= %>} marker.
  //Also it's showing from "list" tag the file name to render.
  //{res.render} renders the {.ejs} upon trigger it'll tell {express}
  //to look for a file {list.ejs} that we have already created and stores
  //in the "views" folder.
  //This will fill in {KindOfDay} in the {list.ejs} file with what ever
  //day gets concluded from this file.


app.post("/",function(req,res){

let item = req.body.newItem;

 if (req.body.list === "Work"){
//What we are doing here that that upon creating the {"/work"} route
//when ever we add an item through that page it ends up adding items
//into the default page which is {"/"} so we are telling the page to appropriate
//the value insertion where it belongs.
//The rest of the code is an obvious explanation.

workItems.push(item);
res.redirect("/work");
} else {

items.push(item);
res.redirect("/");

}


//From {list.ejs} you will Insert the value into {newItem} from the {body} by {req} request
//into {var item} that will be "pushed" into the {items} array, Hence more values can be added.
//But another issue to combat is that it adds values to the same list line.
//for that in {list.ejs} we will create a for loop.
// items.push(item);

// res.redirect("/");//When {var item} receives its value upon the triggering of
//{app.post} it'll loop to {app.post} that also keeps {app.get} alive because
//of this home-route {"/"}.

});

app.get("/work", function(req,res){

res.render("list", {listTitle: "Work List", newListItems: workItems } );

});

app.get("/about",function(req,res){

res.render("about");

})

app.listen(3000, function() {

  console.log("Server is up on port 3000");

});
