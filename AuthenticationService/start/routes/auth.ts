import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'AuthController').apiOnly()

Route.post('auth/register', 'AuthController.register')
Route.post('auth/login', 'AuthController.login')
Route.get('auth/logout', 'AuthController.logout')
