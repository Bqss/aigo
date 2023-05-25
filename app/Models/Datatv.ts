import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Datatv extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public name: string

  @column()
  public image: string

  @column()
  public loc: string

  @column()
  public coord: string

  @column()
  public desc: string

  @column()
  public tags: string

  @column()
  public imgmark: string

  @column()
  public descmark: string

  @column()
  public nearby: string

  @column()
  public regency: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

