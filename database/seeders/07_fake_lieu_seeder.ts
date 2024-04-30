import Lieu from '#models/lieu'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Lieu.create({
      uid: '0079488BE',
      statutsUid: 'ST0000001',
      naturesJuridiques: 'NJ0000002',
      nom: 'Test Webmonster',
      description: "Webmonster c'est le top",
      paysUid: 'MQ0000001',
      latitude: 0.00000001,
      longitude: 0.00000001,
      timezonesUid: 'MQ0000001',
      telephone1: '+5960696111759',
      courriel1: 'hello@webmonster.tech',
    })
  }
}
