const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "myproject";

//connect to mongodb
async function run() {
  try {
    client.connect();
    console.log("Connected to server!");
  } catch (e) {
    console.log(e.stack);
  }
}

//crate user account
const create = async (name, email, password) => {
  try {
    const db = client.db(dbName);

    const col = db.collection("users");

    //new user

    let userDocument = {
      name: name,
      email: email,
      pasword: password,
      balance: 100,
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(userDocument);
    // Find one document
    const myDoc = await col.find().toArray();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  }
};

const all = async () => {
  try {
    const db = client.db(dbName);
    const col = db.collection("users");
    const myDoc = await col.find().toArray();
    return myDoc;
  } catch (err) {
    console.log(err.stack);
  }
};

run().catch(console.dir);

module.exports = { create, all };
