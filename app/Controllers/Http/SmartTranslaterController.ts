import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SmartTranslaterController {
  public async index({ view }: HttpContextContract) {
    return view.render('pages/SmartTranslater')
  }
}
