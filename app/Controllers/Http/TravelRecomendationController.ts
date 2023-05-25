import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Datatv from "App/Models/Datatv";
import User from "App/Models/User";

const categories = [
  {
    image : "/images/imgtravel/19.webp",
    category: "Family",
    desc : "Wisata yang cocok untuk keluarga"
  },
  {
    image : "/images/imgtravel/5.webp",
    category : "Nature",
    desc : "Wisata yang cocok untuk keluarga"
  },
  {
    image : "/images/imgtravel/15.webp",
    category : "Education",
    desc : "Wisata yang cocok untuk keluarga"
  },
  {
    image : "/images/imgtravel/12.webp",
    category : "Shopping",
    desc : "Wisata yang cocok untuk keluarga"
  }
];

// const preferensi =  [
//   {
//     image : "/images/baliview.jpg",
//     label : "Taman",
//     desc : "asdlkfjsdaklfj"
//   },
//   {
//     image : "/images/baliview.jpg",
//     label : "Taman",
//     desc : "asdlkfjsdaklfj"
//   }
// ]

export default class TravelRecomendationController {
  public async index({ view, params, auth }: HttpContextContract) {
    const {category , pref} = params;
    let preferensi = await Datatv.query().whereLike("tags", `%${category}%`)
    let users = auth.user
    let result = await Datatv.query().whereLike("tags", `%${category},${pref}%`)
  
    if(category && pref){
      return view.render("pages.TravelRecomendation.result", {
        result
      });
    }
    if(category){
      return view.render("pages.TravelRecomendation.category", {
        preferensi,
        category
      });
    }
    
    return view.render("pages.TravelRecomendation.index", {
      categories,
      users
    });
  }
}
