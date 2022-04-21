import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Cabor } from 'Contracts/enums'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nama', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.enum('cabor',Object.values(Cabor)).notNullable()
      table.timestamps(true, true)

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
