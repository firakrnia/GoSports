import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tim from 'App/Models/Tim'

export default class TimsController {
    public async index({ request, response, auth }: HttpContextContract) {
        try {
            await auth.authenticate()
            const page = request.input()
            const tims = Tim.query().paginate()
        } catch (error) {
            
        }
    }

    public async store({}: HttpContextContract) {}

    public async show({}: HttpContextContract) {}

    public async update({}: HttpContextContract) {}

    public async destroy({}: HttpContextContract) {}
}
