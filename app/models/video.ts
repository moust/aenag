import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, beforeSave, belongsTo, column } from '@adonisjs/lucid/orm'

import Lieu from '#models/lieu'
import UidService from '#services/uid_service'

export default class Video extends BaseModel {
  static table = 't_videos'

  @column({ isPrimary: true })
  declare uid: string

  @column()
  declare lieuUid: string

  @column()
  declare url: string | null

  @column()
  declare description: string | null

  @belongsTo(() => Lieu, {
    foreignKey: 'lieuUid',
  })
  declare lieu: BelongsTo<typeof Lieu>

  @beforeSave()
  static async generateUid(video: Video) {
    if (!video.uid) {
      video.uid = UidService.createRandomString(9)
    }
  }
}
