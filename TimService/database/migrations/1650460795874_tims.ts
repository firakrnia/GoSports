import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tims extends BaseSchema {
  protected tableName = 'tims'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nama', 255).notNullable()
      table.string('asal_instansi', 255).notNullable()
      table.string('logo', 180).nullable()
      table.integer('user_id').nullable()
      table.timestamps(true, true)

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
