import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Thread from './Thread'
import User from './User'

export default class Reply extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public threadId: number

  @column()
  public userId: number

  @column()
  public content: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Thread)
  public thread: BelongsTo<typeof Thread>
}
