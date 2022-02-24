import Route from '@ioc:Adonis/Core/Route'

Route.get('/cliente/:page', 'ClientesController.index')
Route.get('/cliente/edit/:id', 'ClientesController.fetchCustomerToEdit')
Route.post('/cliente', 'ClientesController.store')
