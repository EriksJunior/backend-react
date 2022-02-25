import Route from '@ioc:Adonis/Core/Route'

Route.post('/cliente', 'ClientesController.store')
Route.get('/cliente/:page', 'ClientesController.index')
Route.get('/cliente/edit/:id', 'ClientesController.fetchCustomerToEdit')
Route.put('/cliente/:id', 'ClientesController.update')
Route.delete('/cliente/:id', 'ClientesController.destroy')
