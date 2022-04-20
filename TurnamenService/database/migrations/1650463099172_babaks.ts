import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Babaks extends BaseSchema {
  protected tableName = 'babaks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('turnamen_id').unsigned().references('id').inTable('turnamen').onDelete('CASCADE')
      table.string('judul', 100).notNullable()
      table.integer('urutan').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
