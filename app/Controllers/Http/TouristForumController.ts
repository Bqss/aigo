import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TouristForumsController {
  public async index({view }: HttpContextContract){
    return view.render("pages.TouristForum.index")
  }
}
