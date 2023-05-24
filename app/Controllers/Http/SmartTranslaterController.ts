import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  { translate } from 'bing-translate-api';
import tags from 'language-tags';

export default class SmartTranslaterController {
  public async index({ view }: HttpContextContract) {
    return view.render('pages/SmartTranslater')
  }

  public async show({ view, params }: HttpContextContract) {
    let b = await translate(decodeURI(params.id), null, 'id').then(async(res) => {
      console.log(res.translation);
      let autoTrans = res.language.from
      let LanguageFull = tags.language(autoTrans).descriptions()
      console.log("Translate Code : " + autoTrans + "\nFull Language Text : " + LanguageFull)
      return res.translation
    })
    return view.render('pages/SmartTranslater', {textarea: decodeURI(params.id), textarea2: b})
  }

  public async store({ response, request }: HttpContextContract) {
    // translate('how are you today?', null, 'id').then(async(res) => {
    //   console.log(res.translation);
    //   let autoTrans = res.language.from
    //   let LanguageFull = tags.language(autoTrans).descriptions()
    
    //   console.log("Translate Code : " + autoTrans + "\nFull Language Text : " + LanguageFull)
    // }).catch(err => {
    //   console.error(err);
    // });
    return response.redirect().toRoute('SmartTranslaterController.show', { id: request.input('in') })
  }
}
