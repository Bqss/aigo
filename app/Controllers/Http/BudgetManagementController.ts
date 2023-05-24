import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

const hotels = [
  {
    id: "AGHOTEL-01",
    name: "The Mansion Resort Hotel & Spa",
    price: "Rp. 1.150.000",
    imgHotel: "./images/AGHOTEL-01.webp",
    address:
      "Jl. Penestanan, Sayan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
    coord: "-8.5051101,115.2391214",
    desc: "This luxurious Mansion Resort & Spa is located at the foot of a hill in Ubud, Bali. The hotel, situated in a zen landscaped garden, offers several outdoor swimming pools and hot tubs, organic menus, as well as complete health and beauty treatments.\n\nAll rooms are located in the courtyard or amidst the tropical garden, and feature beautifully designed interiors. They are spacious and equipped with AC, luxurious bathrooms, and minibars. All rooms showcase beautiful artworks by local artists.\n\nAs a guest at The Mansion Bali, you can enjoy luxurious French dishes at Indochine or taste various delicious foods from the international menu at Café La Terrace. This cafe is also the location of the hotel's private art collection. Other options include the Jasmine Tea Lounge and Wantilan Bar for drinks.\n\nThe resort offers a range of beauty treatments such as rejuvenation sessions and spa treatments. To enhance your experience, yoga classes and massage therapies are also available at the resort. You can also play billiards.\n\nMansion Hotel & Spa is only a few minutes' drive from popular areas such as Kuta, Seminyak, or Sanur, while Ngurah Rai International Airport can be reached within a 40-minute drive. Ubud Market is less than 3 km from the hotel. This is a favorite area for guests.",
    idTV: "AGTV-01",
  },
  {
    id: "AGHOTEL-02",
    name: "Bali Beach Gampling",
    price: "Rp. 850.000",
    imgHotel: "./images/AGHOTEL-02",
    address:
      "Jl. Kebo Iwa Jl. Batu Tampih Kangin No.Banjar, Pangkung Tibah, Kec. Kediri, Kabupaten Tabanan, Bali 82121",
    coord: "-8.5986396,115.0752368",
    desc: "Parking and Wi-Fi are always free, allowing you to stay connected and come and go anytime. Strategically located in Tanah Lot, which is a part of Bali, this property puts you close to attractive attractions and restaurant options. Don't leave before visiting the famous Sacred Monkey Forest Sanctuary. Outdoor swimming pool, massage and restaurant are some of the special facilities that will enhance your comfort during your stay.",
    idTV: "AGTV-02",
  },
  {
    id: "AGHOTEL-03",
    name: "RC Villas",
    price: "Rp. 2.200.000",
    imgHotel: "./images/AGHOTEL-03.webp",
    address:
      "Jl. Kayu Aya No.88, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361",
    coord: "-8.6853209,115.1557073",
    desc: "RC Villas & Spa Seminyak offers a variety of on-site facilities to satisfy all guests, including the most selective ones. Post your photos and answer emails whenever you want, with free Wi-Fi internet access at the resort. Plan your airport transfer in advance with easily bookable transportation services available at the resort. Exploring Bali becomes more comfortable with the car rental service available at the resort.\n\nFree parking is available, provided by the resort for guests arriving by private transportation. During your stay at this exceptional resort, the front desk staff is ready to assist you with various services including luggage storage, safety deposit boxes, and concierge services. The resort tour can even assist you in booking tickets and reservations for entertainment and exploration. The resort provides laundry and dry cleaning services that help you keep your favorite travel clothes clean so you can pack more practically.",
    idTV: "AGTV-03",
  },
];

const tv = [
  {
    id: "AGTV-01",
    name: "Bukit Campuhan Ridge Walk",
    image: "/images/AGTV-01.webp",
    loc: "Jl. Bangkiang Sidem, Kelusa, Kec. Payangan, Kabupaten Gianyar, Bali 80571",
    coord: "-8.4993467,115.2550384",
    desc: "This is a beautiful paved road along Campuhan Hill. Walking here will show the beautiful nature of Ubud.\n\nWith lots of trees and hills, Campuhan Ridge Walk has views of the forest as well as views of rice fields and fields.\n\nThere are rice fields further along the road; You will enjoy all the beautiful green scenery.",
    tags: "Nature,Hill,Park",
    imgMark: "./imgTravel/AGTV-01-MARK.webp",
    descMark:
      "For those interested in taking a walk on Campuhan ridge, one of the things you want to ask is about the travel time, and the distance traveled during the Campuhan ridge walk to Ubud.\n\nThere are two accesses to the Campuhan ridge area, one from the north\n\nand one from the south.\n\nIf you depart from the north side, head to the south side to be precise to the location of the Gunung Lebah temple, then you will cover a distance of about 1.2 kilometers with an estimated walking time of 25 minutes.",
    nearby: "Hotel,Restaurant,Mart",
    regency: "Gianyar",
    entrance: "FREE",
  },
  {
    id: "AGTV-02",
    name: "Bali Beach Gampling",
    image: "/images/AGTV-01.webp",
    loc: "Jl. Kebo Iwa Jl. Batu Tampih Kangin No.Banjar, Pangkung Tibah, Kec. Kediri, Kabupaten Tabanan, Bali 82121",
    coord: "-8.5986396,115.0752368",
    desc: "Bali Beach Glamping is a stunning resort on Bali’s West Coast with a spectacular outlook over the Indian Ocean, offering breathtaking views, where the ocean and ricefield become one, private luxury tented accommodation, and specialising in weddings and retreats.\n\nLocated just 25 minutes north of Canggu. The resort has a large lawn area ideal for wedding ceremonies, parties, yoga sessions etc.\n\nWith 50 air-conditioned luxury tents we are able to accommodate 120 guests in total. All luxury tents have ensuite bathrooms.",
    tags: "Nature,Beach,Ocean",
    imgMark: "./imgTravel/AGTV-02-MARK.webp",
    descMark:
      "With Pig Stone Beach just a few steps away, Bali Beach Glamping offers accommodation, a restaurant, an outdoor swimming pool, a garden and a terrace. Both Wi-Fi and private parking are accessible in the luxury tents free of charge. Each unit has a private bathroom with a shower, free toiletries, a hairdryer and slippers.\n\nBreakfast is available each morning, and includes buffet, continental and Asian options. Car rental services are available at Bali Beach Glamping.",
    nearby: "Restaurant,Hotel,Mart",
    regency: "Tabanan",
    entrance: "Rp. 1.200.000",
  },
];

const foodtv = [
    {
      "id": "AIGOFOOD-01",
      "name": "Prema Rasa",
      "product": "Pie Susu",
      "image": "/images/AIGOFOOD-01.webp",
      "desc": "Prema Rasa was established in December 2015, initially producing, packaging, and selling their own Pie Susu with the best quality ingredients. Now, they have a shop located on Jalan Raya Kuta No. 85 Tuban, Kuta - Bali 80361, and have become one of the centers for Balinese souvenirs. They sell a variety of Balinese food and snacks.\n\nFor those of you who are visiting or vacationing in Bali, don't forget to buy some souvenirs, please come to our shop. Alternatively, they also serve Delivery Orders around the Denpasar - Badung area with a certain minimum order.",
      "avgPrice": "Rp. 12.000 - Rp. 100.000",
      "regency": "Badung"
  },
  {
      "id": "AIGOFOOD-02",
      "name": "Traditional Snack",
      "product": "Jaja Geti Geti",
      "image": "x/images/AIGOFOOD-02.webp",
      "desc": "Jaja Geti-geti is a traditional snack from Bangli Regency. You can only find this snack in traditional markets around the Bangli region. The form of Jaja Geti-Geti is already implied by its name. Jaja means cake, while Geti-geti is something made from sesame and sugar. So, it’s a cake made from sesame and sugar.\n\nThis snack almost resembles Geti Cake from Central Java. But the difference is in the grains used as basic ingredients. Geti cake uses sesame seeds, while Jaja Geti-geti uses godem. Godem is a black mustard seed which is usually used as a feed for a turtle bird. Relax, godem can also be consumed by humans! Because these grains have many health benefits for our body. ",
      "avgPrice": "Rp. 15.000 - 30.000",
      "regency": "Bangli"
  }
]






export default class BudgetManagementController {
  public async index({ view }: HttpContextContract) {
    return view.render("pages.BudgetManagement.index", {tv, hotels});
  }

  public async detail({view, params}: HttpContextContract){
    const {travelId} = params;
    return view.render("pages.BudgetManagement.detail",{
      travelDetail: tv[0],
      foodDetail: foodtv[0],
      hotelDetail: hotels[0],
    })
  }
}
