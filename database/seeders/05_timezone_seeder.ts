import Timezone from '#models/timezone'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Timezone.createMany([
      {
        uid: 'CA0000001',
        nom: 'America/Toronto',
      },
      {
        uid: 'FR0000001',
        nom: 'Europe/Paris',
      },
      {
        uid: 'GF0000001',
        nom: 'America/Cayenne',
      },
      {
        uid: 'GP0000001',
        nom: 'America/Guadeloupe',
      },
      {
        uid: 'MQ0000001',
        nom: 'America/Martinique',
      },
      {
        uid: 'PF0000001',
        nom: 'Pacific/Tahiti',
      },
      {
        uid: 'RE0000001',
        nom: 'Indian/Reunion',
      },
      {
        uid: 'YT0000001',
        nom: 'Indian/Mayotte',
      },
    ])
  }
}
