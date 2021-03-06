import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Klasemen extends BaseSchema {
  protected tableName = 'klasemen'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('bermain').notNullable().defaultTo(0)
      table.integer('menang').notNullable().defaultTo(0)
      table.integer('kalah').notNullable().defaultTo(0)
      table.integer('seri').notNullable().defaultTo(0)
      table.integer('poin').notNullable().defaultTo(0)
      table.integer('tim_id').unsigned().references('id').inTable('tims').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
