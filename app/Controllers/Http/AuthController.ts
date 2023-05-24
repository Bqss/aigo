import User from 'App/Models/User'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async loginPage({view}: HttpContextContract) {
    return view.render('auth/login')
  }

  public async login({auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
  
    try {
      await auth.use('web').attempt(email, password)
      // response.redirect('/dashboard')
      response.send('SUKSES LOGIN GAN HEHE')
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async dashboard({view,auth}: HttpContextContract) {
    const user = new User()
    if(auth.user) {
      return user
    }
    return 'NO'
  }

  public async regisPage({view}: HttpContextContract) {
    return view.render('auth/register')
  }

  public async register({ request }: HttpContextContract) {
    const user = new User()
    user.firstname = request.input('firstname')
    user.lastname = request.input('lastname')
    user.email = request.input('email')
    user.password = request.input('password')
    await user.save()
    console.log(user.$isPersisted)

    return request.all()
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
