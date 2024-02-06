/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todolist').del() // stupidly named the table the same thing as the db again 
  await knex('todolist').insert([
    {id: 1, description: 'make a server'},
    {id: 2, description: 'make a database'},
    {id: 3, description: 'initialize knex'},
    {id: 4, description: 'make a migration'},
    {id: 5, description: 'seed the table'},
  ]);
};