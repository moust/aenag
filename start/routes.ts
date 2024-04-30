/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const LieuxController = () => import('#controllers/lieux_controller')

// router.on('/').render('pages/home')
router.get('/', [LieuxController, 'create'])
router.get('/list', [LieuxController, 'index'])
router.get('/:uid', [LieuxController, 'show'])
router.post('/', [LieuxController, 'store']).as('lieux.store')
