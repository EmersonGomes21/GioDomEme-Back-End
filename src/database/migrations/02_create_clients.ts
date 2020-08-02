import Knex from 'knex';
export async function up(knex: Knex){
  return knex.schema.createTable('clients', table =>{
    table.increments('id').primary();
    table.string('profile_img').notNullable();
    table.string('name').notNullable();
    table.string('contact').notNullable();
    table.string('telephone').notNullable();
    table.string('address').notNullable();
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('clients');
}