import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('products', table =>{
    table.increments('id').primary();
    table.string('profile_img').notNullable();
    table.string('name').notNullable();
    table.string('category').notNullable();
    table.decimal('cust').notNullable();
    table.decimal('sale_Price').notNullable();
  });

}

export async function down(knex: Knex){
  return knex.schema.dropTable('products');
}