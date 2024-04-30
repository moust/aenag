import { BaseSeeder } from '@adonisjs/lucid/seeders'

import Superficie from '#models/superficie'

export default class extends BaseSeeder {
  async run() {
    await Superficie.createMany([
      {
        uid: 'SP0000001',
        nom: 'Moins de 60m²',
      },
      {
        uid: 'SP0000002',
        nom: 'Entre 60 et 200m²',
      },
      {
        uid: 'SP0000003',
        nom: 'Plus de 200m²',
      },
    ])
  }
}
