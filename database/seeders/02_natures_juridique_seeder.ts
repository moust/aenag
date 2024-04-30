import { BaseSeeder } from '@adonisjs/lucid/seeders'

import NatureJuridique from '#models/nature_juridique'

export default class extends BaseSeeder {
  async run() {
    await NatureJuridique.createMany([
      {
        uid: 'NJ0000001',
        description: 'Association',
      },
      {
        uid: 'NJ0000002',
        description: 'Collectif citoyen',
      },
      {
        uid: 'NJ0000003',
        description: 'SARL-SA-SAS-SASU',
      },
      {
        uid: 'NJ0000004',
        description: 'SCIC-SCOP-CAE',
      },
      {
        uid: 'NJ0000005',
        description: 'Société Publique Locale',
      },
      {
        uid: 'NJ0000006',
        description: 'Pôle d’Equilibre Territorial Rural',
      },
      {
        uid: 'NJ0000007',
        description: 'Département',
      },
      {
        uid: 'NJ0000008',
        description: 'Région',
      },
      {
        uid: 'NJ0000009',
        description: "Groupement d'Intérêt Public",
      },
      {
        uid: 'NJ0000010',
        description: 'Intercommunalité',
      },
      {
        uid: 'NJ0000011',
        description: 'Université',
      },
      {
        uid: 'NJ0000012',
        description: 'Collège',
      },
      {
        uid: 'NJ0000013',
        description: 'Lycée',
      },
      {
        uid: 'NJ0000014',
        description: 'Collectivité locale ou territoriale',
      },
      {
        uid: 'NJ0000015',
        description: 'Établissement public de coopération intercommunale (EPCI)',
      },
      {
        uid: 'NJ0000016',
        description: 'Autre / Inconnu',
      },
      {
        uid: 'NJ0000017',
        description: 'Entreprise Individuel',
      },
    ])
  }
}
