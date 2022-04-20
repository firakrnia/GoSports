import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pemains extends BaseSchema {
  protected tableName = 'pemains'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('posisi').nullable()
      table.string('nomor_punggung').nullable()
      table.integer('user_id').nullable()
      table.integer('tim_id').unsigned().references('id').inTable('tims').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
