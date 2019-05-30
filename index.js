const express = require("express");
const massive = require('massive');
require('dotenv').config();
const controller = require("./controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

// massive(CONNECTION_STRING).then(dbInstance => app.set("db", dbInstance));

//This was before modification below
// These were the instructions to modify:

// * Modify the massive `.then` to set `db` on app and also call `dbInstance.new_planes`.
// * Chain a `.then` that has a parameter called `planes`. Return a `console.log` of `planes`.
// * Chain a `.catch` that has a parameter called `err`. Return a `console.log` of `err`.
// * Restart/Run the API so the planes get added to the table.
// * Comment out `dbInstance.new_planes` so we don't get duplicate planes.
massive(CONNECTION_STRING).then(dbInstance =>{
  app.set("db", dbInstance);
  // dbInstance.new_planes()
  // .then(planes=> console.log(planes))
  // .catch(err=>console.log(err))

  // another modification:

  // dbInstance.get_planes()
  // .then(planes => console.log(planes))
  // .catch(err => console.log(err));

  // Looks to me like all queries handled by 'massive' need to have a .then and a .catch method. 
  // 
});

app.get("/api/planes", controller.getPlanes);

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
