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

const preferensi =  [
  {
    image : "/images/baliview.jpg",
    label : "Taman",
    desc : "asdlkfjsdaklfj"
  },
  {
    image : "/images/baliview.jpg",
    label : "Taman",
    desc : "asdlkfjsdaklfj"
  }
]

export default class TravelRecomendationController {
  public async index({ view, params }: HttpContextContract) {
    const {category , pref} = params;

    if(category && pref){
      return view.render("pages.TravelRecomendation.result", {
        tv : []
      });
    }
    if(category){
      return view.render("pages.TravelRecomendation.category", {
        preferensi,
        category
      });
    }
    return view.render("pages.TravelRecomendation.index", {
      categories
    });
    

    
  }
  public async category({ view, params }: HttpContextContract) {
    const category = params.category;
    return view.render("pages.TravelRecomendation.category", {
      preferensi,
      category
    });
  }
  public async result({ view, params }: HttpContextContract) {
    const category = params.category;
    const preferensi = params.preferensi;
    return view.render("pages.TravelRecomendation.result", {
      preferensi,
      category
    });
  }
}
