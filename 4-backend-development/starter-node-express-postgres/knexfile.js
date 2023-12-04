// Update with your config settings.
const path = require("path")
require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE_NAME, DB_PORT } = process.env
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'db.drafbmgzuzcewjqyvjbq.supabase.co',
      user: 'postgres',
      password: 'crudKnexPassword',
      database: 'postgres',
      port: 5432,
      ssl: { rejectUnauthorized: false } // This might be necessary for Supabase
    },
    // migrations
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    //seeds
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    }
    //seeds
  },

  

};
