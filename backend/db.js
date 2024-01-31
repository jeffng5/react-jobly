"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

// if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: 'postgres://avmgzkha:r-o7iAFo6lNiAE8CRqqXwJBE6ffz3ULy@mahmud.db.elephantsql.com/avmgzkha',
    ssl: {
      rejectUnauthorized: false
    }
  });
// } else {
//   db = new Client({
//     // connectionString: getDatabaseUri()
//     connectionString: "postgresql://jeffreyng:beachbodyp90x@127.0.0.1:5433/jobly.sql"
//   });
// }
console.log(getDatabaseUri())
db.connect();

module.exports = db;