import { BaseSeeder } from '@adonisjs/lucid/seeders'

import PublicCible from '#models/public_cible'

export default class extends BaseSeeder {
  async run() {
    await PublicCible.createMany([
      {
        uid: 'PC0000001',
        nom: '16-30 ans en situation de fragilité',
      },
      {
        uid: 'PC0000002',
        nom: "Demandeurs d'emploi",
      },
      {
        uid: 'PC0000003',
        nom: 'Bénéficiaires des minimas sociaux',
      },
      {
        uid: 'PC0000004',
        nom: "Personnes en situation d'illetrisme",
      },
      {
        uid: 'PC0000005',
        nom: 'Personnes ne maîtrisant pas la langue française',
      },
      {
        uid: 'PC0000006',
        nom: 'Entreprises',
      },
      {
        uid: 'PC0000007',
        nom: 'Tout public',
      },
    ])
  }
}
