import { BaseSeeder } from '@adonisjs/lucid/seeders'

import TypesLieu from '#models/type_lieu'

export default class extends BaseSeeder {
  async run() {
    await TypesLieu.createMany([
      {
        uid: 'TL0000001',
        nom: 'Agence Web & Marketing',
      },
      {
        uid: 'TL0000002',
        nom: 'Coworking',
      },
      {
        uid: 'TL0000003',
        nom: 'Freelance',
      },
      {
        uid: 'TL0000004',
        nom: 'Incubateur',
      },
      {
        uid: 'TL0000005',
        nom: 'Accélérateur',
      },
      {
        uid: 'TL0000006',
        nom: 'Ateliers artisanaux partagés',
      },
      {
        uid: 'TL0000007',
        nom: 'Fablab / Atelier de Fabrication Numérique',
      },
      {
        uid: 'TL0000008',
        nom: 'Tiers-lieu culturel',
      },
      {
        uid: 'TL0000009',
        nom: 'Tiers-lieu agricole',
      },
      {
        uid: 'TL0000010',
        nom: 'Cuisine partagée / Foodlab',
      },
      {
        uid: 'TL0000011',
        nom: 'LivingLab / Laboratoire d’innovation sociale',
      },
      {
        uid: 'TL0000012',
        nom: 'Espace public numérique',
      },
      {
        uid: 'TL0000013',
        nom: 'Bibliothèque avec espace numérique',
      },
      {
        uid: 'TL0000014',
        nom: 'Centre de formation aux métiers du numérique',
      },
      {
        uid: 'TL0000015',
        nom: 'HackerSpace',
      },
      {
        uid: 'TL0000016',
        nom: 'MakerSpace',
      },
      {
        uid: 'TL0000017',
        nom: 'Espace de technologie éducative',
      },
      {
        uid: 'TL0000018',
        nom: 'Centre multimédia',
      },
      {
        uid: 'TL0000019',
        nom: 'Plateforme de co-création numérique',
      },
      {
        uid: 'TL0000020',
        nom: 'Cluster numérique',
      },
      {
        uid: 'TL0000021',
        nom: 'Espace de réalité virtuelle / augmentée',
      },
      {
        uid: 'TL0000022',
        nom: "Centre de ressources numériques pour l'emploi",
      },
      {
        uid: 'TL0000023',
        nom: 'Espace d’inclusion numérique',
      },
      {
        uid: 'TL0000024',
        nom: 'Point d’accès à l’internet public',
      },
      {
        uid: 'TL0000025',
        nom: 'Centre de recherche et développement en TIC',
      },
      {
        uid: 'TL0000026',
        nom: 'Hub d’innovation numérique',
      },
      {
        uid: 'TL0000027',
        nom: "Centre d'éducation aux médias et à l'information",
      },
      {
        uid: 'TL0000028',
        nom: 'Site Internet',
      },
    ])
  }
}
