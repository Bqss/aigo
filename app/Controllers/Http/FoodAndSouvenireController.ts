import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

const foods = [
  {
    id: "AIGOFOOD-01",
    name: "Prema Rasa",
    product: "Pie Susu",
    image: "/images/AIGOFOOD-01.webp",
    desc: "Prema Rasa was established in December 2015, initially producing, packaging, and selling their own Pie Susu with the best quality ingredients. Now, they have a shop located on Jalan Raya Kuta No. 85 Tuban, Kuta - Bali 80361, and have become one of the centers for Balinese souvenirs. They sell a variety of Balinese food and snacks.\n\nFor those of you who are visiting or vacationing in Bali, don't forget to buy some souvenirs, please come to our shop. Alternatively, they also serve Delivery Orders around the Denpasar - Badung area with a certain minimum order.",
    avgPrice: "Rp. 12.000 - Rp. 100.000",
    regency: "Badung",
  },
  {
    id: "AIGOFOOD-02",
    name: "Traditional Snack",
    product: "Jaja Geti Geti",
    image: "/images/AIGOFOOD-01.webp",
    desc: "Jaja Geti-geti is a traditional snack from Bangli Regency. You can only find this snack in traditional markets around the Bangli region. The form of Jaja Geti-Geti is already implied by its name. Jaja means cake, while Geti-geti is something made from sesame and sugar. So, it’s a cake made from sesame and sugar.\n\nThis snack almost resembles Geti Cake from Central Java. But the difference is in the grains used as basic ingredients. Geti cake uses sesame seeds, while Jaja Geti-geti uses godem. Godem is a black mustard seed which is usually used as a feed for a turtle bird. Relax, godem can also be consumed by humans! Because these grains have many health benefits for our body. ",
    avgPrice: "Rp. 15.000 - 30.000",
    regency: "Bangli",
  },
  {
    id: "AIGOFOOD-03",
    name: "Sudang Lepet Khas Bululeleng",
    product: "Sudang Lepet",
    image: "/images/AIGOFOOD-01.webp",
    desc: "Sudang Lepet is one of the popular culinary delights in Buleleng. This dish can only be found in the village of Sangsit, Sawan District, Buleleng Regency, Bali. Apart from jukut buangit, Sangsit Village is also famous for Sudang Lepet, a local dish that is highly sought after by the community.\n\nSudang Lepet is a traditional dish made from Blambang fish (flying fish). The Blambang fish used in the dish are sourced from the waters of Madura, which are then processed into a delicious and savory dish. Its salty and savory taste, combined with its crispy texture, makes it a perfect accompaniment to hot rice.",
    avgPrice: "Rp. 10.000 - Rp. 25.000",
    regency: "Bululeleng",
  },
];

export default class FoodAndSouvenireController {
  public async index({ view }: HttpContextContract) {
    return view.render("pages.FoodAndSouvenire.index",{
      foods
    });
  }
  public async detail({view}: HttpContextContract){
    return view.render("pages.FoodAndSouvenire.detail",{
    foodDetail : foods[0]
    })
  }
}
