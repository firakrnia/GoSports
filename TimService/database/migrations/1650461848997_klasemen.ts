import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Klasemen extends BaseSchema {
  protected tableName = 'klasemen'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('bermain').notNullable()
      table.string('menang').notNullable()
      table.string('kalah').notNullable()
      table.string('seri').notNullable()
      table.string('poin').notNullable()
      table.integer('tim_id').unsigned().references('id').inTable('tims').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
