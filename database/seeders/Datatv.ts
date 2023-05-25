import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Datatv from 'App/Models/Datatv'

export default class extends BaseSeeder {
  public async run () {
    await Datatv.createMany([

      {
          "name": "Bukit Campuhan Ridge Walk",
          "image": "/images/imgtravel/1.webp",
          "loc": "Jl. Bangkiang Sidem, Kelusa, Kec. Payangan, Kabupaten Gianyar, Bali 80571",
          "coord": "-8.4993467,115.2550384",
          "desc": "This is a beautiful paved road along Campuhan Hill. Walking here will show the beautiful nature of Ubud.\n\nWith lots of trees and hills, Campuhan Ridge Walk has views of the forest as well as views of rice fields and fields.\n\nThere are rice fields further along the road; You will enjoy all the beautiful green scenery.",
          "tags": "Nature,Hill,Park",
          "imgmark": "/images/imgtravel/1-mark.webp",
          "descmark": "For those interested in taking a walk on Campuhan ridge, one of the things you want to ask is about the travel time, and the distance traveled during the Campuhan ridge walk to Ubud.\n\nThere are two accesses to the Campuhan ridge area, one from the north\n\nand one from the south.\n\nIf you depart from the north side, head to the south side to be precise to the location of the Gunung Lebah temple, then you will cover a distance of about 1.2 kilometers with an estimated walking time of 25 minutes.",
          "nearby": "Hotel,Restaurant,Mart",
          "regency": "Gianyar"
      },
      {   
          "name": "Bali Beach Gampling",
          "image": "/images/imgtravel/2.webp",
          "loc": "Jl. Kebo Iwa Jl. Batu Tampih Kangin No.Banjar, Pangkung Tibah, Kec. Kediri, Kabupaten Tabanan, Bali 82121",
          "coord": "-8.5986396,115.0752368",
          "desc": "Bali Beach Glamping is a stunning resort on Bali’s West Coast with a spectacular outlook over the Indian Ocean, offering breathtaking views, where the ocean and ricefield become one, private luxury tented accommodation, and specialising in weddings and retreats.\n\nLocated just 25 minutes north of Canggu. The resort has a large lawn area ideal for wedding ceremonies, parties, yoga sessions etc.\n\nWith 50 air-conditioned luxury tents we are able to accommodate 120 guests in total. All luxury tents have ensuite bathrooms.",
          "tags": "Nature,Beach,Ocean",
          "imgmark": "/images/imgtravel/2-mark.webp",
          "descmark": "With Pig Stone Beach just a few steps away, Bali Beach Glamping offers accommodation, a restaurant, an outdoor swimming pool, a garden and a terrace. Both Wi-Fi and private parking are accessible in the luxury tents free of charge. Each unit has a private bathroom with a shower, free toiletries, a hairdryer and slippers.\n\nBreakfast is available each morning, and includes buffet, continental and Asian options. Car rental services are available at Bali Beach Glamping.",
          "nearby": "Restaurant,Hotel,Mart",
          "regency":"Tabanan"
      },
      {
          
          "name": "The Flea market Bali",
          "image": "/images/imgtravel/3.webp",
          "loc": "Kayu Aya Square Oberoi, Jl. Kayu Aya No.17, Seminyak, Kec. Kuta, Kabupaten Badung, Bali",
          "coord": "-8.6859085,115.1561829",
          "desc": "We are not a flea-market where there are secondhand stand. Our booths offer a wide range of clothes, local handicrafts and souvenirs. We are compact and popular market with goods you don’t see on every street corner: fab leather goods, fab embroidered dresses, unique sarongs, cute baskets and bags, silver and other jewellery, kids stuff, hats, watches, sunglasses and even a painting. You’re bound to see the same things in nearby shops tagged at a much higher price, but you can pick them up here for a steal with just a little bit of negotiating. Great find.",
          "tags": "Shopping,Traditional,Art",
          "imgmark": "/images/imgtravel/3-mark.webp",
          "descmark": "When visiting the Flea market, you can see a neatly arranged atmosphere. The number of traders selling their products at the Flea market is quite a lot. You can find about 40 outlets with various products. The outlets are built simply, using a tent that can be disassembled.\n\nCalling the Flea market a one stop shopping location in Bali could be very appropriate. What's more, you can find various types of souvenirs while here. Row sellers are ready to offer products in the form of sarongs, t-shorts, hats, bags and the like. All of these items are made from quality materials and are local products.",
          "nearby": "Restaurant,Hotel",
          "regency": "Badung"
      },
      {
          
          "name": "Mount Batur",
          "image": "/images/imgtravel/4.webp",
          "loc": "Batur Sel., Kec. Kintamani, Kabupaten Bangli, Bali",
          "coord": "-8.238897920212061,115.37758014962495",
          "desc": "Sign up for an early morning trek of Mount Batur and stand atop the tall summit for an unforgettable view of the sun rising over the sleeping island of Bali. Before leaving, savour a delicious breakfast cooked with the steam of the volcano!\n\nWhether you’re Hindu or not, a trip to Mount Batur in Bali is a must!. Get picked up from your hotel and embark upon a (super) early morning tour. Brace yourself for a tough climb up steep slopes to reach the 1717-yard summit! All the while being assisted by a professional English-speaking tour guide, pick up interesting facts about this active volcano!",
          "tags": "Nature,Forest,Mountain",
          "imgmark": "/images/imgtravel/4-mark.webp",
          "descmark": "Once at the top, watch the sunrise over the sleeping island of Bali! Offering unmatched views, this experience is a visual treat like none other. But don’t head back already, stick around for a quick breakfast atop Mount Batur, cooked by your mountain guide using the active volcano’s steam! On your way back to the hotel, get off at a traditional Bali coffee processing plant to witness how Balinese coffee is made. Gaze out at the tropical plantations, sample some of the local herbal tea, coffee and the unusually-processed Coffee Luwak, the most expensive coffee in the world!",
          "nearby": "Hotel",
          "regency": "Bangli"
      },
      {
          
          "name": "Munduk Waterfalls",
          "image": "/images/imgtravel/5.webp",
          "loc": "Jl. Raya Pancasari, Gobleg, Kec. Banjar, Kabupaten Buleleng, Bali",
          "coord": "-8.248215322176257,115.09580811440308",
          "desc": "Munduk Bali Waterfall is one of the gems in Bali that is a must to visit. It’s going to be nice to escape the hectic and crowded Kuta or Seminyak. Sure, it’s easy to get around to find entertainment there as they are the touristic districts in Bali. However, you might need to detach yourself from people, noise, and crowd. North Bali is the answer and Munduk Waterfall is going to be a great destination for you to refresh and recharge. It is easier for you to have a tour like Munduk Bali Waterfall Tour booked in advance, even just a day before because it will be a long drive from the city if you are staying in Kuta or South Kuta. It’ll be nice to have a local guide that will pick you up at 8:00 am at your hotel, no matter where you are staying in the city. This is what we are doing the best for our guests. So, this tour will start at 8:00 am and the first place that you will visit is Pacung Rice Terrace. Unlike the other rice terrace, this one is not yet too touristy and that’s just very rare in Bali nowadays.",
          "tags": "Nature,Forest,Mountain",
          "imgmark": "/images/imgtravel/5-mark.webp",
          "descmark": "After the Munduk Waterfall trip, we will take you for a lunch in Lovina. It’s unlike the city like, it will be more calm and relaxing before we head to the Buddhist Temple in Banjar.  The Buddhist temple is quite popular for those who enjoy yoga as they like to meditate. This is like a miniature of Borobudur Temple and it is used to meditate. It is so serene that you can feel it’s so peaceful to be there at the Temple. And before we head back to your hotel, we will take you to a hot spring in Banjar, called Banjar Hot Spring. This is an epic ending for your trip after a very productive day during the whole trip. You can enjoy the warm water and relax before another car trip to the city. This is one of a day trip that will enrich your soul. Some nice memories with Munduk Bali Waterfall Tour to experience in Bali for sure.",
          "nearby": "Mart,Hotel,Hill",
          "regency": "Buleleng"
      },
      {
          
          "name": "Melanting Waterfall",
          "image": "/images/imgtravel/6.webp",
          "loc": "Gobleg, Kabupaten Buleleng, Bali",
          "coord": "-8.26060811504539,115.06263630601111",
          "desc": "are among Bali’s most scenic, located within Bali’s lush and forested central-northern highland region. The falls are a highlight feature of the namesake village of Munduk in Buleleng, North Bali, reachable after a 300m walk from the main road on which trekkers can enjoy soothing nature sights and sounds along a forest route. Only a short trek north from Munduk is Melanting waterfall, which offers similar features. Cool mists and the rushing sound of water greet you upon reaching the Munduk waterfall. Here you can wade into the rocky pool for a cold dip. A further (often dirt to slightly muddy) trek towards the Melanting waterfall leads you through a lush forest with rivers and nature calls before a bridge that actually traverses over the fall’s peak. Definitely for nature lovers, it’s all about venturing into Bali’s ‘wilde side’ and these two falls serving as your prize.",
          "tags": "Nature,Forest,Hill",
          "imgmark": "/images/imgtravel/6-mark.webp",
          "descmark": "Melanting Waterfall is seen as one of the most tourist destinations in the city, and if you are a big fan of nature, you have to visit it because of the unimaginable sights, and views along with the many activities.\n\nThe road going to the waterfall area is hard, thus it is strongly encouraged to be careful and wear proper boots for such routes before discovering the things offered in the region.",
          "nearby": "Hotel,Restaurant,SPBU",
          "regency": "Buleleng"
      },
      {
          
          "name": "Ubud Palace",
          "image": "/images/imgtravel/7.webp",
          "loc": "Jl. Raya Ubud No.8, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
          "coord": "-8.506549618642286,115.26272219484576",
          "desc": "The Ubud Palace is an old building complex in Bali with some fantastic carvings and courtyards. Also known as Puri Saren Agung, this is an important historical landmark for the Balinese and it’s also very accessible, with some great spots for taking ‘Bali-esque’ cultural photos.",
          "tags": "Education,Culture,History",
          "imgmark": "AGTV-07-mark.webp",
          "descmark": "The palace has a temple too (of course), but they don’t let tourists go inside, so you’ll have to settle with taking pics of the doorway from the outside. Morning is the best time to visit Ubud Palace, because it gets pretty crowded with tourists by noon. The whole place is free to visit.",
          "nearby": "Hotel,Restaurant,Mart",
          "regency": "Gianyar"
      },
      {
          
          "name": "Pura Pasar Agung",
          "image": "/images/imgtravel/8.webp",
          "loc": "Sebudi, Kabupaten Karangasem, Bali",
          "coord": "-8.369018396033418,115.50304381573162",
          "desc": "Pura Pasar Agung Sebudi stands on the southern slopes of Mt. Agung at approximately 1,620 meters altitude. Roughly halfway to the summit, the temple is among Bali's highest and is frequently swaddled in dense fog. Destroyed in the 1963 eruption of Mt. Agung, it was reconstructed from the late 1970s onward with financial assistance from the government. The name Pura Pasar Agung means the Temple of the Great market. As Agung is the name of the volcano itself, it may also be described as the Temple of the (Mount) Agung market. According to the historian David J. Stuart-Fox, Pura Pasar Agung is both a place to request the gods to bestow the necessities of life as found in the market, and as a 'way station' between the abode of the gods on the summit of the mountain and Pura Besakih. He notes that the temple's own charter, or purana, mentions that after the gods remain in residence for forty-two days at Pura Besakih (on the southwest side of the mountain), they ascend to the middle slopes of Mt. Agung and hold a grand market; subsequently, they return to the summit of the volcano—an often smoldering crater. The nature of the gods' commercial activities is unknown and unknowable.",
          "tags": "Education,Culture,History",
          "imgmark": "/images/imgtravel/8-mark.webp",
          "descmark": "At least one photograph of the temple from the early 20th century survives, shown on the link here. Taken in 1912, it provides a view of multiple standing but dilapidated structures, with several bale (pavilions) and a few damaged merus with partially collapsed roofs. Then as now, the heavy fog that often surrounds the temple is readily apparent. The antiquity of the temple is not known, but Stuart-Fox suggests that it is commonly associated with Pura Besakih and is sometimes thought of as one of its branch temples. The purana mentioned above describes the temple's ownership in the sixteenth and seventeenth centuries, when the Selat and Sebudi area (the nearest villages) were under the control of the Arya Bang Sidemen family. At minimum, this suggests the temple is at least 300 years old, but given the importance of Mount Agung to the Balinese, it is more likely than not of much older vintage.",
          "nearby": "Hotel",
          "regency": "Karangasem"
      },
      {
          
          "name": "Pasar Seni Sukawati",
          "image": "/images/imgtravel/9.webp",
          "loc": "Jalan Raya Sukawati, Sukawati, Kec. Sukawati, Kabupaten Gianyar, Bali 80582",
          "coord": "-8.596329133645838,115.28261622368284",
          "desc": "Sukawati Art market is Bali’s most distinguished and long-standing art market. Known as 'Pasar Seni Sukawati' to locals, it’s where you can find and buy distinctively Balinese art items such as paintings and sculpted wooden figures, curios, handicrafts and traditional handmade products. The 2-storey Sukawati Art market was established in the 1980s and is located on the Jalan Raya Sukawati main road in Gianyar, approximately 20 km northeast of the main tourism hubs of Kuta and Denpasar.",
          "tags": "Shopping,Traditional,Art",
          "imgmark": "/images/imgtravel/9-mark.webp",
          "descmark": "At ground level, there are many stalls offering clothes, sarongs and fabrics of different sizes, colours and patterns. These can be seen hanging from the ceilings and stacked neatly in piles. As turnover is relatively high, produced motifs are rarely the same from one time to the next. Aromatic and aromatherapy items such as sandalwood oil-infused fans, incense sticks and colourful jelly candles can be found in the back areas of the art market. Bedcovers are available in abstract designs and splashes of colours as well as in creative forms of artistry, depicting birds and wildlife or portraits of famous figures such as Gandhi and Lennon. Such eye-catching bedding is usually found on the front stalls of the art market.",
          "nearby": "Hotel,Mart,Restaurant",
          "regency": "Gianyar"
      },
      {
          
          "name": "Pasar Badung - Smart Heritage market",
          "image": "/images/imgtravel/10.webp",
          "loc": "Jalan Gajah Mada, Pemecutan, Dauh Puri Kangin, Denpasar Barat, Denpasar City, Bali 80111",
          "coord": "-8.655620791777466,115.21253676601272",
          "desc": "Shopping for souvenirs and daily necessities in the Island of Gods doesn't always have to be done at malls. In fact, to both locals and tourists, traditional markets are more attractive because they offer affordable prices and a chance to fully experience the Balinese culture. The largest market, also known as a cultural heritage site, in Denpasar is Pasar Badung Bali which is worth a visit. It offers various items for sale ranging from daily necessities to Bali's signature souvenirs.",
          "tags": "Shopping,Traditional,Mart",
          "imgmark": "/images/imgtravel/10-mark.webp",
          "descmark": "After a devastating fire in 2016, Pasar Badung Bali was renovated and transformed into a Smart Heritage market, equipped with modern technology to facilitate shoppers. Despite these modern touches, the market still maintains its authenticity and uniqueness as a traditional market in Bali. Pasar Badung Bali is open every day from 5 AM to 5 PM, except for the Nyepi Day holiday where it remains closed. It is recommended for tourists to visit the market in the morning to get cheaper prices. Additionally, bargaining is a tradition in Balinese markets, so don't forget to negotiate the prices of items you want to purchase.",
          "nearby": "Hotel,Mart,Restaurant,Fitness",
          "regency": "Denpasar"
      },
      {
          
          "name": "Pasar Seni Guwang",
          "image": "/images/imgtravel/11.webp",
          "loc": "Guwang, Kec. Sukawati, Kabupaten Gianyar, Bali 80582",
          "coord": "-8.6046614,115.2803416",
          "desc": "Traveling to a tourist destination is not complete without buying souvenirs that are typical of the region. Especially if the area we visit is known for its art and culture. Guwang Art market in Gianyar Regency, Bali, is an example of a traditional market that brings together tourists and art traders. Various types of art objects can be found here, ranging from carvings, weavings, t-shirts to paintings. Unlike modern souvenir shops, the items here are sold at various prices. The more skilled you are in bargaining, the seller will eventually give in to a price up to 1/3 of the offered price.",
          "tags": "Shopping,Traditional,Art",
          "imgmark": "/images/imgtravel/11-mark.webp",
          "descmark": "As an affordable shopping destination for tourists, this market is visited by various domestic and international tourists. Tourists from mainland China and Taiwan are known to be generous in spending their money. Language barriers are not a problem as some traders are proficient in basic Mandarin. Others still enthusiastically offer their goods using sign language or the universal language of numbers. Calculators serve as a 'translator' between sellers and buyers.\n\nRecently, traders in this traditional market have complained about the decline in the number of buyers. The cause is the proliferation of large-scale modern souvenir shops in the city center. Tour guides also tend to bring their tourists there. Government intervention is needed to ensure the interests of small traders and large investors can coexist.",
          "nearby": "Mart,Hotel,Restaurant",
          "regency": "Gianyar"
      },
      {
          
          "name": "Pasar Kumbasari",
          "image": "/images/imgtravel/12.webp",
          "loc": "Pemecutan, Kec. Denpasar Bar., Kota Denpasar, Bali",
          "coord": "-8.656152485378849,115.21188082368386",
          "desc": "Bali has many tourism potentials that are worth visiting, such as natural attractions, educational tours, maritime tourism, historical tours, culinary tours, health tours, and shopping tours. Buying various souvenirs for yourself, relatives, or family is always a part of your vacation. Some popular places for shopping tours in Bali are Krisna, Erlangga, Hawaii Bali stores, Sukawati Art market, Ubud, Guwang, Kuta, and Kumbasari Art market, located in the middle of Denpasar city.\n\nWith the availability of art markets and modern souvenir shops, you can choose the shopping destination that suits your desires and preferences. Modern souvenir shops like Krisna and Erlangga offer a wide variety of local handicrafts and other products characterized by Bali's traditional crafts at reasonable prices. However, in traditional markets like Sukawati Art market and Kumbasari Art market, bargaining skills are necessary to get the best price for the unique and authentic souvenirs.",
          "tags": "Shopping,Traditional,Mart",
          "imgmark": "/images/imgtravel/12-mark.webp",
          "descmark": "Kumbasari Art market is located in the heart of Denpasar city, precisely on Gajah Mada Street, and sells various kinds of handicrafts and souvenirs that are unique to Bali. Its location is across from Badung market, separated by a river called Tukad Badung. This river was used as a transportation route for the Dutch army during the Badung war invasion, and now Tukad Badung has been well-arranged and become a tourist destination and recreation area in the middle of Denpasar city. The market operates 24 hours a day, making this area always crowded, especially during busy hours. The locals tend to choose this market as it is the most complete and largest traditional market on the island of Bali.",
          "nearby": "Mart,Hotel,Restaurant",
          "regency": "Denpasar"
      },
      {
          
          "name": "Pasar Tradisional Bedugul",
          "image": "/images/imgtravel/13.webp",
          "loc": "Jl. Kebun Raya No.7, Candikuning, Kec. Baturiti, Kabupaten Tabanan, Bali 82191",
          "coord": "-8.282368454667498,115.16226382367745",
          "desc": "Bedugul Traditional market, also known as Pasar Candi Gunung Bedugul Bali, is the name of a traditional vegetable and fruit market located in the Bedugul mountain area, Tabanan Regency, Bali. You can make this market a tourist destination in Bali if you want to experience a slightly different kind of tourism sensation.\n\nIts strategic location on the Denpasar-Singaraja main road makes Bedugul Traditional market visited by many foreign tourists and local residents passing by. The vegetables and fruits displayed in the market look very fresh because they are supplied directly from the surrounding agricultural areas.",
          "tags": "Shopping,Traditional,Mart",
          "imgmark": "/images/imgtravel/13-mark.webp",
          "descmark": "As Bedugul Traditional market is included in the list of tourist destinations in Bali, you don't need to worry about the availability of facilities there. Moreover, its location is considered strategic, so public facilities are easily accessible. Around the market, there is a place of worship, such as a mosque.\n\nSeveral restaurants can also be found near the market location, so there's no need to worry about getting hungry. Not only restaurants, but also small food stalls or street vendors are available for tourists who want to have a casual meal. Of course, with more affordable prices compared to restaurants, but the taste is equally delicious.",
          "nearby": "Hotel,Restaurant,Mart",
          "regency": "Tabanan"
      },
      {
          
          "name": "Pura Luhur Uluwatu",
          "image": "/images/imgtravel/14.webp",
          "loc": "Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali",
          "coord": "-8.8291432,115.0849069",
          "desc": "Uluwatu Temple is a place of significant spiritual and cultural importance for the Balinese people, as it is one of Bali's nine directional temples, which are believed to safeguard the island from evil spirits. The temple complex comprises numerous shrines, a hallowed banyan tree, and an authentic Balinese gateway.\n\nVisitors to the temple can explore the temple grounds and revel in the mesmerizing ocean views, but must comply with the temple's stringent dress code and regulations, which require the wearing of a sarong and sash, and the utmost reverence and respect for the temple's sanctity.",
          "tags": "Education,Culture,History",
          "imgmark": "/images/imgtravel/14-mark.webp",
          "descmark": "It is recommended to arrive early in the morning or late in the afternoon to avoid the crowds and the heat of the day. Additionally, visitors should allow enough time to explore the temple complex and enjoy the stunning ocean views, as well as to witness traditional Balinese ceremonies and performances, which take place at various times throughout the day.\n\nVisitors should also be aware that the temple may be closed during Balinese holidays and ceremonies, so it is advisable to check ahead before planning a visit. As a sacred site, it is important to respect the temple's rules and regulations, including appropriate dress and behavior, and to refrain from touching or feeding the resident monkeys.",
          "nearby": "Hotel,Mart,Restaurant",
          "regency": "Badung"
      },
      {
          
          "name": "Monumen Bajra Sandhi",
          "image": "/images/imgtravel/15.webp",
          "loc": "Jl. Raya Puputan No.142, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80234",
          "coord": "-8.6717348,115.233902",
          "desc": "Bajra Sandhi Monument in Renon is located in the heart of Denpasar city and was built with a very profound meaning and philosophy. The number of steps from the main gate to the tourist attraction is 17 steps, symbolizing the date of Indonesia's independence.\n\nThe month of Indonesia's independence is symbolized by 8 pillars of the building, and the year 1945 is symbolized by the height of the Bajra Sandhi Monument, which is 45 meters tall. The monument was inaugurated on June 14, 2003 by President Megawati.",
          "tags": "Education,Culture,History",
          "imgmark": "/images/imgtravel/15-mark.webp",
          "descmark": "Bajra Sandhi was designed by Ir. Ida Gede Yadnya in 1981 and construction began in 1987. The building was only inaugurated 16 years later, on June 14, 2003. If you visit here, when you enter the monument area, you will be immediately spoiled by the typical Balinese architecture that is full of Hindu philosophical teachings and symbols of independence.",
          "nearby": "Fitness,Hotel,Mart",
          "regency": "Denpasar Selatan"
      },
      {
          
          "name": "Pura Tirta Empul",
          "image": "/images/imgtravel/16.webp",
          "loc": "Tampaksiring, Kec. Tampaksiring, Kabupaten Gianyar, Bali 80552",
          "coord": "-8.4156589,115.3153284",
          "desc": "Tirta Empul is the name of a Hindu temple located in the village of Manukaya, Tampak Siring district, Gianyar regency, Bali. The unique architecture and the presence of springs in the temple's inner area make Tirta Empul temple attract many visitors, both foreign and domestic tourists. If you are planning a vacation to Bali and interested in visiting Hindu temple tourist attractions, then Tirta Empul temple is one of the must-visit vacation spots in Bali.",
          "tags": "Education,Culture,History",
          "imgmark": "/images/imgtravel/16-mark.webp",
          "descmark": "For non-Hindu tourists, it is allowed to perform pelukatan (purification in the spring) but must follow the rules that apply in the temple, such as entering the Tirta Empul temple area, using a sarong to cover the lower part of the body, and wearing a scarf tied at the waist. Women are not allowed to enter during menstruation. To make it easier for visitors, a booth is provided at the front of the temple for renting clothing equipment. The best time to visit Tirta Empul temple is during the full moon when many Hindus perform prayers. And if you want to experience the sensation of pelukatan, it is better to visit in the morning and avoid holidays or weekends.",
          "nearby": "Restaurant,Hotel,Fitness,SPBU",
          "regency": "Gianyar"
      },
      {
          
          "name": "Bali Safari Park",
          "image": "/images/imgtravel/17.webp",
          "loc": "Jl. Prof. Dr. Ida Bagus Mantra No.Km. 19, Serongga, Kec. Gianyar, Kabupaten Gianyar, Bali 80551",
          "coord": "-8.5769106,115.3329621",
          "desc": "Your Safari Journey starts here. Before experiencing the adventure in our park to get close to our wildlife animals such as lions, tigers, and rhinos, please read the information below. You will find anything you need about Bali Safari Park. Learn more about our attractions, activities & amenities below. Drop us a message for other inquiries! \n\nEnjoy FREE entrance for kids under 3 years old. Guests in wheelchairs are also welcomed; Our park is wheelchair friendly. For your comfort and convenience, strollers and wheelchairs are available for daily rental. For more information, please do not hesitate to contact us directly",
          "tags": "Family,Park,Entertainment",
          "imgmark": "/images/imgtravel/17-mark.webp",
          "descmark": "Bali Safari Park have hundreds of animals in our park from over 100 species, including some of the rarest and endangered. Not only are we one of the leading wildlife conservations in Indonesia, we are devoted to caring for the animals in our own safari. We ensure the highest standards of wellbeing is given to all our animals. Browse below to see the animals that we have given a loving home to.",
          "nearby": "Mart,Hotel,SPBU,Restaurant",
          "regency": "Gianyar"
      },
      {
          
          "name": "Bali Bird Park",
          "image": "/images/imgtravel/18.webp",
          "loc": "Jl. Serma Cok Ngurah Gambir Singapadu, Batubulan, Kec. Sukawati, Kabupaten Gianyar, Bali 80582",
          "coord": "-8.5998496,115.2497388",
          "desc": "Travelers who are curious to see various birds in this park can travel for an hour from Ngurai Rai Airport via the By Pass Prof Ida Bagus Mantra road, with the exact location on Jalan Serma Cok Ngurah Gambir, Singapadu, Batubulan, Gianyar Regency or 12 km to the east of Denpasar.\n\nYou won't have difficulty finding this place, especially if you've been to Bali before. Heading towards Bali Bird Park is in the same direction as the famous woodworking and statue crafting village of Batubulan and the Celuk Gianyar Bali, which is the center of gold and silver handicrafts.",
          "tags": "Family,Park,Entertainment",
          "imgmark": "/images/imgtravel/18-mark.webp",
          "descmark": "Bali Bird Park aka Taman Burung Bali dibuka pada Oktober 1995 dengan tujuan menjadi rumah bagi aneka spesies burung, termasuk yang dilindungi. Berdiri di atas lahan seluas dua hektar, Bali Bird Park menambah daftar wisata yang bisa kamu kunjungi di Bali. Jadi, traveler nggak akan bosan dengan hanya disuguhkan pemandangan pantai atau pegunungan yang indah saat plesiran ke Pulau Dewata, tapi juga melihat bagaimana aneka unggas unik hidup di alam terbuka.\n\nSaat ini, Bali Bird Park menjadi rumah bagi sekitar 1.000 hewan unggas dari 250 species, baik dari lokal maupun mancanegara. Burung-burung cantik seperti cendrawasih, kaswari, pelican, bangau hingga kakak tua bisa kamu saksikan di sini. Koleksi burung dari luar negeri pun tak kalah cantik, taman ini memiliki Makawa Skarlet dan Hyacinth Macaw dari Amerika Selatan atau burung khas Afrika yang pandai meniru suara manusia, yakni beo abu-abu.",
          "nearby": "Mart,Hotel,Restaurant",
          "regency": "Gianyar"
      },
      {
          
          "name": "Bali Hot Air Balloon - Ubud",
          "image": "/images/imgtravel/19.webp",
          "loc": "Tanah Gajah, a resort by Hadiprana, Jl. Raya Goa Gajah, Tengkulak Kaja, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
          "coord": "-8.5230947,115.2828525",
          "desc": "Heaven is a place on Earth, especially in Bali - or at least you'll catch a glimpse of heaven as you soar high into Bali's skies with a hot air balloon! Experience the first and only hot air balloon ride in the Island of the Gods when you visit Ubud. Witness spectacular panoramic views of the Tanah Gajah area, the lush tropical forests of Ubud, and the beautiful sacred Mount Agung on the eastern horizon as you climb 50 meters thrillingly above vast rice fields. The best part of this trip is that you can choose whether to take the flight at sunrise, sunset, or at night to gaze at the enchanting stars and moonlight - just pick your preference from packages equipped with breakfast, afternoon tea, or dinner! Embark on an exciting adventure amidst the calming rice field atmosphere and natural scenery when you book this hot air balloon experience.",
          "tags": "Family,Park,Entertainment",
          "imgmark": "/images/imgtravel/19-mark.webp",
          "descmark": "If you’ve seen Ubud from the ground, you’ll know just how beautiful it is from the inside out. As such, you shouldn’t be surprised to know that it’s equally as stunning from an aerial perspective. By embarking on a Bali hot air balloon journey and taking the vista in for yourself, you’ll remember exactly what prompted you to come to Bali in the first place.\n\nThe experience itself includes up to 12 minutes in a hot air balloon as well as a 50-meter ascent. This rise, which is secured with a tether, occurs over scenic rice fields in majestic Ubud. Peering above Tanah Gajah, you’ll feel exhilarated as if your experience has been amplified to make it even better. Whether you choose to fly in the morning, afternoon or evening is up to you, but the scene from the sky will be one-of-a-kind during each embarkation.",
          "nearby": "Hotel,Restaurant,Mart,Fitness",
          "regency": "Gianyar"
      },
      {
          
          "name": "Picheaven Bali Swing",
          "image": "/images/imgtravel/20.webp",
          "loc": "Jl. Dewi Saraswati No.8, Bongkasa Pertiwi, Kec. Abiansemal, Kabupaten Badung, Bali 80352",
          "coord": "-8.4896278,115.2402645",
          "desc": "Have you ever dreamed of swinging off the edge of a cliff face, high above a jungle of cascading rivers and palm trees? Picheaven Bali features three different levels of spectacular swings. Single Swing features a swing with a height around 15 meters from the ground. Couple Swing: a bit higher than the single swing and it can carry two people side by side, it stands around 20 meters from the ground. Extreme single Swing is the highest swing around 80 meters from the ground. An adrenaline ride that blends well with Bali’s scenic beauty.",
          "tags": "Family,Park,Entertainment",
          "imgmark": "/images/imgtravel/20-mark.webp",
          "descmark": "Spend your day in Bali at this picturesque spot, Picheaven Bali have more than 10 type Amazing photo spots,The Giant birdnest, Volkswagen,heaven road, huge stone, hanging bed, Jungle Bubble, floating Jacuzzi, hideaway house, and triangle house with hammock bed, you can’t find in another place, Strike your best poses and share every beautiful moment you spend on your social media",
          "nearby": "Restaurant,Hotel,Mart",
          "regency": "Badung"
      },
      {
          
          "name": "Duta Orchid Garden",
          "image": "/images/imgtravel/21.webp",
          "loc": "Jl. Bypass Ngurah Rai No.mor 21X, Tohpati, Kec. Denpasar Tim., Kota Denpasar, Bali 80237",
          "coord": "-8.644659,115.2564268",
          "desc": "Duta Orchid Garden merupakan wisata alam berupa perkebunan bunga anggrek yang sudah populer di kalangan wisatawan. Selain dikenal sebagai destinasi favorit keluarga, Duta Orchid Garden juga digemari oleh couple, rekreasi bersama teman, turis, dan grup yang gemar mencari tempat untuk healing time.\n\nSecara garis besar tempat ini dibagi menjadi beberapa areal yang terdiri dari area penerima tamu (resepsionis) yang terletak pada bagian paling depan, taman bunga anggrek, taman bunga tropis, taman buah-buahan, shading house yang menirukan habitat anggrek hutan dengan berbagai tanaman tropis di dalamnya, kawasan air terjun, toko souvenir, serta tak ketinggalan restoran yang menawarkan hidangan khas Bali dengan cita rasa otentik.",
          "tags": "Family,Park,Entertainment",
          "imgmark": "/images/imgtravel/21-mark.webp",
          "descmark": "Duta Orchid Garden is more than just a tourist destination. Here the tourist will spend their holiday with such a good experience and get more knowledge especially about orchids and tropical plants in general. Duta Orchid Garden serves the tourist with a good quality garden view as well as a good education or information, especially about plants. During the tour in Duta Orchid Garden the tourist accompanied by a local guide with a good knowledge who helps to take a picture in a good spot, the guide also explains the way of looking after the orchids in the garden. We treat the tourist not as a guest, but as a good friend in order to share the correct information about taking care of the orchids and also promoting that Indonesia has many unique rare orchids.",
          "nearby": "Restaurant,Hotel,Mart",
          "regency": "Denpasar Timur"
      }
  
  ])
  }
}
