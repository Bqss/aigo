import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

const categories = [
  {
    image : "/images/baliview.jpg",
    category: "Wisata Keluarga",
    desc : "Wisata yang cocok untuk keluarga"
  },
  {
    image : "/images/baliview.jpg",
    category : "Wisata Alam",
    desc : "Wisata yang cocok untuk keluarga"
  },
  {
    image : "/images/baliview.jpg",
    category : "Wisata Edukasi",
    desc : "Wisata yang cocok untuk keluarga"
  },{
    image : "/images/baliview.jpg",
    category : "Wisata Belanja",
    desc : "Wisata yang cocok untuk keluarga"
  }
];

export default class TravelRecomendationController {
  public async index({ view }: HttpContextContract) {
    return view.render("pages.TravelRecomendation", {
      categories
    });
  }
  public async category({ view }: HttpContextContract) {
    return view.render("pages.TravelRecomendation", {
      
    });
  }
}
