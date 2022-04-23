import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pemain extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public posisi: string

  @column()
  public nomorPunggung: string
  
  @column()
  public userId: number
  
  @column()
  public timId: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
