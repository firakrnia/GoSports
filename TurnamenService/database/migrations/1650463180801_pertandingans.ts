import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pertandingans extends BaseSchema {
  protected tableName = 'pertandingans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('judul', 100).notNullable()
      table.string('lokasi', 100).nullable()
      table.integer('urutan', 5).notNullable()
      table.dateTime('tanggal_mulai').notNullable()
      table.string('status').nullable()
      table.integer('babak_id').unsigned().references('id').inTable('babaks').onDelete('CASCADE')
      table.integer('turnamen_id').unsigned().references('id').inTable('turnamen').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
