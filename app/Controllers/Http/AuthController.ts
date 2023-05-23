import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async loginPage({ view }: HttpContextContract) {
    return view.render("auth/login");
  }

  public async login({ request }: HttpContextContract) {
    let email = request.input("email");
    let pass = request.input("password");
    return `${email} and ${pass}`;
  }

  public async regisPage({ view }: HttpContextContract) {
    return view.render("auth/register");
  }

  public async register({ request }: HttpContextContract) {
    return request.all();
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async homePage({ view }: HttpContextContract) {
    return view.render("auth/home");
  }
}
