import Route from '@ioc:Adonis/Core/Route'

Route.post('/cliente', 'ClientesController.store')
Route.put('/cliente/:id', 'ClientesController.update')
