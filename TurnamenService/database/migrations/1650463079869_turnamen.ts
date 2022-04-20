import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Turnamen extends BaseSchema {
  protected tableName = 'turnamen'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('judul', 100).notNullable()
      table.dateTime('tanggal_mulai').notNullable()
      table.dateTime('tanggal_akhir').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
