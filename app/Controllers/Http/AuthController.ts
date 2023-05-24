import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from 'App/Models/User'


export default class AuthController {
  public async loginPage({ view }: HttpContextContract) {
    return view.render("auth/login");
  }

  public async login({ request, response, auth, session }: HttpContextContract) {
    let email = request.input("email");
    let pass = request.input("password");
    
    try {
      await auth.use('web').attempt(email, pass)
      response.redirect('/home')
    } catch {
      session.flash('error', 'Email atau password salah')
      return response.redirect('/login')
    }
  }

  public async regisPage({ view }: HttpContextContract) {
    return view.render("auth/register");
  }

  public async register({ request, response }: HttpContextContract) {
    await User.create(request.all())
    return response.redirect().toPath('/login')
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async homePage({ view }: HttpContextContract) {
    return view.render("pages/home");
  }
}
