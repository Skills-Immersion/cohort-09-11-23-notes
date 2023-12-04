const knex = require("knex");

const db_connection = knex({
    //configuration option
    // client driver
    client: "pg",
    // connection to our db
    connection: "postgres://czhiekgo:9yCLZeNNTrMh7h4VoOAaTL-9nfMq2iap@otto.db.elephantsql.com/czhiekgo"
})

let info = db_connection.select("*")
