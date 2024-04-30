import { BaseSeeder } from '@adonisjs/lucid/seeders'

import Pays from '#models/pays'

export default class extends BaseSeeder {
  async run() {
    await Pays.createMany([
      {
        uid: 'CA0000001',
        nom: 'Canada',
      },
      {
        uid: 'FR0000001',
        nom: 'France',
      },
      {
        uid: 'GF0000001',
        nom: 'Guyane',
      },
      {
        uid: 'GP0000001',
        nom: 'Guadeloupe',
      },
      {
        uid: 'MQ0000001',
        nom: 'Martinique',
      },
      {
        uid: 'PF0000001',
        nom: 'Polynésie',
      },
      {
        uid: 'RE0000001',
        nom: 'Réunion',
      },
      {
        uid: 'YT0000001',
        nom: 'Mayotte',
      },
    ])
  }
}
