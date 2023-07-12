let express = require("express");
let app = express();
let cors = require("cors");
let dal = require("./dal.js");

//used to serve static filex public directory
//app.use(express.static("public"));
//app.use(cors);
 
//create user account
app.get("/account/create/:name/:email/:password", (req, res) => {
  dal
    .create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      //console.log('My user', JSON.stringify(user));
      //res.send(user);
    });
});

app.get("/", (req, res) => {
  res.send("Hi to my page");
});
//all accounts
app.get("/account/all", (req, res) => {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

let port = 8000;
app.listen(port);
console.log("Running on port: " + port);
