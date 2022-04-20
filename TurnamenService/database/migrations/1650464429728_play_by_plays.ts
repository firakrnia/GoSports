import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PlayByPlays extends BaseSchema {
  protected tableName = 'play_by_plays'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('menit').notNullable()
      table.string('deskripsi', 50).notNullable()
      table.integer('pemain_id', ).notNullable()
      table.integer('babak_id').unsigned().references('id').inTable('babaks').onDelete('CASCADE')
      table.integer('turnamen_id').unsigned().references('id').inTable('turnamen').onDelete('CASCADE')
      table.integer('pertandingan_id').unsigned().references('id').inTable('pertandingans').onDelete('CASCADE')
      table.integer('peserta_id').unsigned().references('id').inTable('pesertas').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
