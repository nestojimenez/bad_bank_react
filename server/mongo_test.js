const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "myproject";

async function run() {
  try {
    client.connect();
    console.log("Connected to server!");
    const db = client.db(dbName);

    const col = db.collection("users");

    //new user
    let name = "user" + Math.floor(Math.random() + 10000);
    let email = name + "@mit.edu";
    let userDocument = { name: name, email: email };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(userDocument);
    // Find one document
    const myDoc = await col.find().toArray();
    // Print to the console
    console.log(myDoc);

    client.close();
    
  } catch (err) {
    console.log(err.stack);
  }
}

run().catch(console.dir);

/* //data base
    const dbName = 'myproject';
    const db = client.db(dbName);

    //new user
    let name = 'user' + Math.floor(Math.random()+10000);
    let email = name + '@mit.edu';

    //insert into customer tabl
    let collection = db.collection('customer');
    let doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result){
        console.log('Document insert');
    });*/
