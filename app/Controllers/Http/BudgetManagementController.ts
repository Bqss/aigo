import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BudgetManagementController {
  public async index({view }: HttpContextContract){
    return view.render("pages.BudgetManagement")
  }
}
