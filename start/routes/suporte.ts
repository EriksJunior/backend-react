import Route from '@ioc:Adonis/Core/Route'

Route.post('/suporte', 'SuportesController.store')
Route.get('/suporte/:page', 'SuportesController.index')
Route.get('/suporte/edit/:id', 'SuportesController.fetchCustomerToEdit')
Route.get('/suporte/dados/tecnicos/niveis', 'SuportesController.fetchCustomerToTechnicalData')
Route.put('/suporte/:id', 'SuportesController.update')
Route.delete('/suporte/:id', 'SuportesController.destroy')
