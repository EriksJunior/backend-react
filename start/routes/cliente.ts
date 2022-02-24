import Route from '@ioc:Adonis/Core/Route'

Route.get('/cliente/:page', 'ClientesController.index')
Route.post('/cliente', 'ClientesController.store')
