import { BaseSeeder } from '@adonisjs/lucid/seeders'

import Statut from '#models/statut'

export default class extends BaseSeeder {
  async run() {
    await Statut.createMany([
      {
        uid: 'ST0000001',
        nom: 'Ouvert',
      },
      {
        uid: 'ST0000002',
        nom: 'En projet',
      },
    ])
  }
}
