require("dotenv").config({ path: "./.env" })
const knex = require("knex");
const config = require("./knexfile");

if(process.env.NODE_ENV === 'production'){
    module.exports = knex(config.production);
} else {
    module.exports = knex(config.development);
}