// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config({ path: "./.env" })
module.exports = {


  development: {
    client: 'postgresql',
    connection: {
      database: 'midterm',
      user:     'sq1',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || {
      database: process.env.DB,
      user:     process.env.DB_USER,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
