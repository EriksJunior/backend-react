import Route from '@ioc:Adonis/Core/Route'

Route.get('/cliente', 'ClientesController.index')
Route.post('/cliente', 'ClientesController.store')
