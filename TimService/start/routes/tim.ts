import Route from '@ioc:Adonis/Core/Route'

Route.resource('/tims', 'TimsController').apiOnly()

