import Route from '@ioc:Adonis/Core/Route'

Route.resource('/pemains', 'PemainsController').only(['index', 'show', 'destroy'])
Route.post('/pemains/:timId/:userId', 'PemainsController.store')
Route.put('/pemains/:id/:timId/:userId', 'PemainsController.update')