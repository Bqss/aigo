import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

const hotels = [
  {
    id: "AGHOTEL-01",
    name: "The Mansion Resort Hotel & Spa",
    price: "Rp. 1.150.000",
    imgHotel: "/images/baliview.jpg",
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
    image: "x/images/AIGOFOOD-02.webp",
    desc: "Jaja Geti-geti is a traditional snack from Bangli Regency. You can only find this snack in traditional markets around the Bangli region. The form of Jaja Geti-Geti is already implied by its name. Jaja means cake, while Geti-geti is something made from sesame and sugar. So, it’s a cake made from sesame and sugar.\n\nThis snack almost resembles Geti Cake from Central Java. But the difference is in the grains used as basic ingredients. Geti cake uses sesame seeds, while Jaja Geti-geti uses godem. Godem is a black mustard seed which is usually used as a feed for a turtle bird. Relax, godem can also be consumed by humans! Because these grains have many health benefits for our body. ",
    avgPrice: "Rp. 15.000 - 30.000",
    regency: "Bangli",
  },
];

const tabNav = [
  {
    
    label: "Food",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="w-10 h-10" id="food">
            <path
              d="M32,13A19,19,0,1,0,51,32,19.021,19.021,0,0,0,32,13Zm0,36A17,17,0,1,1,49,32,17.019,17.019,0,0,1,32,49Z">
            </path>
            <path
              d="M13 21V11H11v9H10V11H8v9H7V11H5v9H4V11H2V26a3.006 3.006 0 0 0 2 2.829V52a3 3 0 0 0 3 3H8a3 3 0 0 0 3-3V28.829A3.006 3.006 0 0 0 13 26zm-2 5a1 1 0 0 1-1 1 1 1 0 0 0-1 1V52a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V28a1 1 0 0 0-1-1 1 1 0 0 1-1-1V22h7zM61 10a9.01 9.01 0 0 0-9 9V32a3 3 0 0 0 3 3V54a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V11A1 1 0 0 0 61 10zM60 53H57V34a1 1 0 0 0-1-1H55a1 1 0 0 1-1-1V19a7.011 7.011 0 0 1 6-6.929z">
            </path>
            <rect width="2" height="15" x="55" y="16"></rect>
            <path d="M32,22A10,10,0,1,0,42,32,10.011,10.011,0,0,0,32,22Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,32,40Z">
            </path>
          </svg>
        `,
  },
  {
   
    label: "Hotel",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>
        `,
  },
  {
    
    label: "Transport",
    icon: `
    <svg class="w-10 h-10 fill-white " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path
          d="M120,340c-4.418,0-8,3.582-8,8c0,6.617-5.383,12-12,12s-12-5.383-12-12s5.383-12,12-12c4.418,0,8-3.582,8-8s-3.582-8-8-8 c-15.439,0-28,12.561-28,28s12.561,28,28,28s28-12.561,28-28C128,343.582,124.418,340,120,340z">
        </path>
        <path
          d="M432,340c-4.418,0-8,3.582-8,8c0,6.617-5.383,12-12,12s-12-5.383-12-12s5.383-12,12-12c4.418,0,8-3.582,8-8s-3.582-8-8-8 c-15.439,0-28,12.561-28,28s12.561,28,28,28s28-12.561,28-28C440,343.582,436.418,340,432,340z">
        </path>
        <path d="M432,264H64c-4.418,0-8,3.582-8,8s3.582,8,8,8h368c4.418,0,8-3.582,8-8S436.418,264,432,264z">
        </path>
        <path
          d="M512,288c0-1.525-0.435-2.946-1.176-4.159c-3.004-15.259-11.806-28.002-25.933-37.279C470.796,237.308,451.519,232,432,232 h-72.145l-29.716-55.188c-7.053-13.098-19.734-21.928-34.139-24.208V136c0-17.645-14.355-32-32-32h-64c-17.645,0-32,14.355-32,32 v16h-10.106c-16.085,0-31.324,8.418-39.901,22.004l-34.298,42.588c-5.609,0.898-10.947,1.705-16.135,2.489 c-19.514,2.951-34.927,5.281-46.223,9.662C16.059,230.789,0,237.018,0,256v64c0,22.056,17.944,40,40,40 c0.406,0,0.801-0.04,1.19-0.098C46.727,387.304,70.99,408,100,408c28.975,0,53.218-20.647,58.792-48h194.415 c5.575,27.353,29.817,48,58.792,48s53.218-20.647,58.792-48H504c4.418,0,8-3.582,8-8v-56c0-2.003-0.115-3.961-0.289-5.895 C511.894,289.434,512,288.73,512,288z M480,264c0.464,0,0.915-0.048,1.357-0.124c5.412,4.609,9.345,9.992,11.758,16.124H480 c-4.411,0-8-3.589-8-8S475.589,264,480,264z M341.683,232H153.532c-3.492,0-6.593-1.82-8.297-4.868 c-1.703-3.048-1.627-6.643,0.203-9.617l13.599-22.098c1.297-2.107,3.64-3.417,6.115-3.417H320c0.047,0,0.093-0.006,0.141-0.007 L341.683,232z M184,136c0-8.822,7.178-16,16-16h64c8.822,0,16,7.178,16,16v16h-96V136z M16,256c4.411,0,8,3.589,8,8s-3.589,8-8,8 V256z M100,392c-24.262,0-44-19.738-44-44s19.738-44,44-44s44,19.738,44,44S124.262,392,100,392z M412,392 c-24.262,0-44-19.738-44-44s19.738-44,44-44s44,19.738,44,44S436.262,392,412,392z M496,344h-24.148 c-2.067-31.224-28.113-56-59.852-56s-57.785,24.776-59.852,56H159.852c-2.067-31.224-28.113-56-59.852-56 c-31.741,0-57.789,24.78-59.852,56.007C40.098,344.007,40.05,344,40,344c-13.234,0-24-10.767-24-24v-32c13.234,0,24-10.767,24-24 c0-8.813-4.778-16.527-11.877-20.7c8.585-3.087,22.117-5.418,41.827-8.398c6.156-0.931,12.522-1.893,19.338-3.006 c1.945-0.317,3.705-1.343,4.941-2.878l36.525-45.354c0.211-0.262,0.406-0.538,0.583-0.825c5.632-9.152,15.808-14.839,26.555-14.839 h130.703c7.838,0,15.222,2.929,20.855,8h-144.3c-7.99,0-15.554,4.228-19.742,11.032l-13.598,22.097 c-4.911,7.98-5.114,17.628-0.544,25.808c4.571,8.18,12.894,13.063,22.264,13.063H352c0.542,0,1.071-0.055,1.583-0.158 c0.489,0.093,0.985,0.158,1.494,0.158H432c11.409,0,22.623,2.088,32.278,5.889C459.212,258.293,456,264.776,456,272 c0,13.233,10.766,24,24,24h16V344z">
        </path>
        <path
          d="M208,128c-2.1,0-4.17,0.85-5.66,2.34c-1.49,1.49-2.34,3.56-2.34,5.66c0,2.1,0.85,4.17,2.34,5.66 c1.49,1.489,3.55,2.34,5.66,2.34c2.11,0,4.17-0.851,5.66-2.34c1.49-1.49,2.34-3.561,2.34-5.66c0-2.101-0.85-4.17-2.34-5.66 C212.17,128.85,210.1,128,208,128z">
        </path>
        <path
          d="M232,128c-2.1,0-4.17,0.85-5.66,2.34c-1.49,1.49-2.34,3.56-2.34,5.66c0,2.1,0.85,4.17,2.34,5.66 c1.49,1.489,3.55,2.34,5.66,2.34c2.11,0,4.17-0.851,5.66-2.34c1.49-1.49,2.34-3.561,2.34-5.66c0-2.101-0.85-4.17-2.34-5.66 C236.17,128.85,234.1,128,232,128z">
        </path>
        <path
          d="M256,128c-2.1,0-4.17,0.85-5.66,2.34c-1.49,1.49-2.34,3.56-2.34,5.66c0,2.1,0.85,4.17,2.34,5.66 c1.49,1.489,3.55,2.34,5.66,2.34c2.11,0,4.17-0.851,5.66-2.34c1.49-1.49,2.34-3.561,2.34-5.66c0-2.101-0.85-4.17-2.34-5.66 C260.17,128.85,258.1,128,256,128z">
        </path> 
      </g> 
    </g>
  </svg>
        `,
  },
  {
   
    label: "Total",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" class="w-10 h-10">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
        `,
  },
];

// const total = {
//   "15000-30000","1000000","12000","total"
// }

export default class BudgetManagementController {
  public async index({ view }: HttpContextContract) {
    return view.render("pages.BudgetManagement.index", { tv, hotels });
  }

  public async detail({ view, params }: HttpContextContract) {
    const { travelId } = params;
    return view.render("pages.BudgetManagement.detail", {
      travelDetail : tv[0],
      data : [foodtv[0], hotels[0],tv[0],{}],
      tabNav
    });
  }
}
