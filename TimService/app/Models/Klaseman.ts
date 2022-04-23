import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Klaseman extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public bermain: number

  @column()
  public menang: number
  
  @column()
  public kalah: number
  
  @column()
  public seri: number

  @column()
  public poin: number
  
  @column()
  public timId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
