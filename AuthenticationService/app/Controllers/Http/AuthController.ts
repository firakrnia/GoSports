import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User';
import { Cabor } from 'Contracts/enums';

export default class AuthController {
    public async index({request, response}: HttpContextContract) {
        try {
            const page = request.input('page', 1)
            const user = await User.query().paginate(page, 50)

            return response.status(200).json({
                success: true,
                data: user
            })
        } catch (error) {
            return response.status(404).json({
                message: error.message
            })
        }
    }

    public async register ({request, auth, response}: HttpContextContract){
        const validationSchema = schema.create({
            nama: schema.string(),
            email: schema.string([
                rules.email(),
                rules.normalizeEmail({
                allLowercase: true,
                gmailRemoveSubaddress: true,
    })
                
            ]),
            password: schema.string({}, [
                rules.minLength(6),
                rules.confirmed('konfirmasi_password')
            ]),
            cabor: schema.enum(Object.values(Cabor))
        })
        
        const validatedData = await request.validate({ schema: validationSchema })

        const user = await User.create(validatedData)

        const resData = {
            message: "Akun berhasil dibuat!",
            data : user
        }
        await auth.login(user)

        return response.status(201).json(resData) 
    }

    public async login({ request, response, auth }: HttpContextContract) {
        const user = request.only(['email', 'password'])

        try {
            const token = await auth.attempt(user.email, user.password)
            return response.status(201).json(token)
        } catch (error){
        return response.badRequest(console.log(error))
        }
        
    }
    
    public async logout( { response, auth }: HttpContextContract) {
        await auth.logout()
        
        return response.json({ message: 'Logout Berhasil'})
    }

    public async show ({response, params}:HttpContextContract){
        try {
            const user = await User.findOrFail(params.id)

            return response.status(200).json({
                success: true,
                data: user
            })
        } catch (error) {
            response.status(404).json({
                message: error.message
            })
        }
    }

    public async update ({ request, response, params}: HttpContextContract) {
        try {
            const user = await User.findByOrFail('id', params.id)

            user.nama = request.input('nama')
            user.cabor = request.input('cabor')
            await user.save()
        
            return response.json({
                success: true,
                data: user
        })
        } catch (error) {
            response.status(404).json({
                message: error.message
            })
        }

    }

    public async destroy ({ response, params }: HttpContextContract) {
        try {
            const user = await User.findByOrFail('id', params.id)

            await user.delete()
    
            return response.json({
                success: true,
                data: user
            })
        } catch (error) {
            response.status(404).json({
                message: error.message
            })
        }
    }

}
