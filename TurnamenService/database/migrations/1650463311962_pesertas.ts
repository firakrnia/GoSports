import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pesertas extends BaseSchema {
  protected tableName = 'pesertas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('menang', 2).notNullable()
      table.integer('skor', 2).notNullable()
      table.integer('tim_id', ).notNullable()
      table.integer('babak_id').unsigned().references('id').inTable('babaks').onDelete('CASCADE')
      table.integer('turnamen_id').unsigned().references('id').inTable('turnamen').onDelete('CASCADE')
      table.integer('pertandingan_id').unsigned().references('id').inTable('pertandingans').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
