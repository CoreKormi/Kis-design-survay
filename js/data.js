var categories = [
    {   
        name: "Grocery Stores", 
        description:"Because of the fact that Kongsberg is a medium sized city in norway there are a lot of different types of grocery stores, even from the same brand. That's why here I will only list of the different kinds of stores rather than all of the locations, but I will mention for each one how many is in Kongsberg.",
    },

    { name: "Restaurants" },
    { name: "Hotels"},
    { 
        name: "Schools",
        description: "Kongsberg's population is around 30 thousand and it has a lot of different schools. According to Norwagian schooling system children have to go to 3 different schools until graduation which are Barneskole grade 1-7 (primary school), Ungdomskole 8-10 (Middle school) and Videregåendeskole 11-13(High school). Kongsberg has many primary and middle schools but only one Highschool and one University. That's why I will only list of a few from the first two. There is also a special opportunity in Kongsberg to go to an Internationa school called KIS. More information can be found on the Kongsberg commune's website: <a href=https://kongsberg.kommune.no/ id=white >Kommune</a>",
    },
    { name: "Museums" },
    { name: "Churches" },
];

var places = [
    {
        "name": "Kiwi",
        "category": "Grocery Stores",
        "link": "https://kiwi.no",
        "description": "Kiwi is one of the most popular stores in Kongsberg, having 6 locations all throughout, from the top to the bottom, but most at the centre. You can always find one near you and ask someone were it is. The many places are thanks to its Scandinavian nature and it is also one of the cheapest in the city.",
        "image": "images/kiwi.jpg"
    },
    {
        "name": "Meny",
        "category": "Grocery Stores",
        "link": "https://meny.no",
        "description": "With it's two locations, one at the southern-west gate of Kongsberg and the other at it's very heart of it at Stortorvet, Meny is also a loved by many. Other than it's ominous red sign, it is a very well lit store with a wide selection and quality items, however it usually costs a bit more than it's competitors.",
        "image": "images/Meny.jpg"
    },
    {
        "name": "Kongens Restaurant and bar",
        "category": "Restaurants",
        "link": "https://www.kongensbar.no/",
        "description": "Found in the middle of the city on the Storgata and is loved by many. Italian pizza, greek gyros, turkish kebab and american hamburger are all on the menu for this place. You can eat this city's biggest pizza as well!",
        "image": "https://static.flickr.com/5480/10756388046_8df069ace1.jpg"
    },
    {
        "name": "1624 Restaurant and bar",
        "category": "Restaurants",
        "link": "https://1624.no/restaurant/",
        "description": "1624 is found on the roof of the Clarion Collection Hotel and offers a unique dining experience all year around. It's glass walls gives you an incredible view from the top of Kongsberg. Furthermore their menu is insipired by Italian cousine with many pizzas and pastas.",
        "image":"https://www.strawberry.no/globalassets/global/hotel-pictures/clarion-hotel/clarion-collection-hotel-kongsberg/the-hotel/inside/lobby-sofa-chairs-clarion-collection-kongsberg.jpg?t=SmartScale%7C1024x570"
    },
    {
        "name": "NILA Restaurant",
        "category": "Restaurants",
        "link": "https://www.nilarestaurant.no/en/index.html",
        "description": "At the end of Storgata the NILA Restaurant can also be found. The letter N and I represents the fusion of Norwegian and Indian dining experience. Guests can experience ancient Indian recipes here with Norwegian ingredients.",
        "image":"images/NILA.jpg"
    },          
    {
        "name": "Gyldenløve",
        "category": "Restaurants",
        "link": "https://www.gyldenlove.no/en/restaurant",
        "description": "The Gyldenløve restaurant is a beloved place in Kongsberg near the buss station. Here you can enjoy tasty dishes from a la carte menu. They offer traditional Norwegian dishes, as well as new exciting taste experiences.",
        "image":"images/gyldenlove.webp"
    },
    {
        "name": "Extra",
        "category": "Grocery Stores",
        "link": "https://coop.no/extra/",
        "description": "Thanks to it's two locations in the middle, one on the left, the other at the right side of the river it is also a store with many visitors. It is also placed in Norway's 'affordable' category because of its prices next to Kiwi and Rema. Extra is a variation of Coop which is exclusive to Norway.",
        "image": "https://premium.vgc.no/v2/images/b83da90f-6ad3-454d-b678-4cc85e7e1e59?fit=crop&format=auto&h=1267&w=1900&s=4fc6a83626998a8d9d7febb26a5463f3e1c6c41b"
    },  
    {
        "name": "Rema 1000",
        "category": "Grocery Stores",
        "link": "https://rema.no",
        "description": "One of the Norwegians most known grocery store, known for its low prices and good quality products. It is found nearly every norwegian town and even in Kongsberg there is two of them, both near the middle of the city.",
        "image": "https://netthandel.no/wp-content/uploads/sites/4/2019/11/rema1000fauske.jpg"
    },
    {
        "name": "Spar",
        "category": "Grocery Stores",
        "link": "https://spar.no",
        "description": "SPAR is the world's largest supermarket chain with more than 12,000 stores in over 40 countries. In Norway, we have SPAR stores distributed throughout the country, and one in Kongsberg at the gate to Drammen. It offers a wide variety and quality goods but for an increased price.",
        "image": "images/spar.jpg"
    },   
    {
        "name": "Silver mines",
        "category": "Museums",
        "link": "https://norskbergverksmuseum.no/solvgruvene",
        "description": "In Saggrenda, 8km from the center of Kongsberg are the old silver mines. We access the mines by a small railway where they show us how they mined, extracted silver and how they traversed through the place. Its is an interesting and entertaining activity for the whole family. It can only be visited from spring to fall.",
        "image":"https://tellusdmsmedia.newmindmedia.com/wsimgs/2E0B9BB92EA0FAF45FE0A668C73E155ED2D8A6E7.jpg[ProductImage]" 
    },
    {
        "name": "Norvegian mining museum",
        "category": "Museums",
        "link": "https://norskbergverksmuseum.no/museet-i-smeltehytta",
        "description": "After the visit of the silver mines a good activity is to also visit this museum as well. In the museum you can see the different kinds of ores from the mines as well as how they extracted them. Furhtermore we can also find an exhibition for the different uses of silver such as coins as well as the Norwegian skiing museum. At the very end we can find the Geolab which is an interactive place for kids and adults alike.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Norsk_bergverksmuseum.jpg/1200px-Norsk_bergverksmuseum.jpg"
    },
    {
        "name": "Lågdalsmuseum",
        "category": "Museums",
        "link": "https://buskerudmuseet.com/lagdalsmuseet/",
        "description": "This is a cultural history museum near the center of Kongsberg. The museum consists of 32 buildings which have several different themes. Here you can find Norway's only preserved tower barn and in the summer traditional lifestock can be seen as well. It has a number of activities, events and tours all throughout the year.",
        "image": "images/logdals.jpg"
    },
    {
        "name": "Clarion Collection Hotel",
        "category": "Hotels",
        "link": "https://1624.no",
        "description": "Found in the middle of Kongsberg, in front of the Stortorvet. One of the newest Hotel in Kongsberg, opened in 2022. The hotel has 121 rooms and a roof terrace restaurant. It also has a wellness and fitness center although their prices are way higher compared to the others.",
        "image": "https://www.strawberry.no/globalassets/global/hotel-pictures/clarion-hotel/clarion-collection-hotel-kongsberg/the-hotel/outside/facade-clarion-collection-kongsberg.jpg?t=SmartScale%7C1024x570"
    },   
    {
        "name": "Best Western Plus Gyldenløve Hotel",
        "category": "Hotels",
        "link": "https://gyldenlove.no",
        "description": "It is a homely and family run hotel in the heart of Kongsberg right next to the train and buss station. It has 63 well equiped rooms and Kongsberg's one of the most well rated restaurants. It is perfectly suited for both a bussiness trip and a family vacation as well.",
        "image": "https://www.bestwestern.no/images/803f9d5b-6ecd-4d8b-92e5-10667498cbee__bwimages__large__26434205.webp"
    },   
    {
        "name": "Quality Grand Hotel",
        "category": "Hotels",
        "link": "https://www.strawberry.no/hotell/norge/kongsberg/quality-hotel-grand-kongsberg/",
        "description": "It is a hotel for businesses, ideal for conferences because of its rooms capable of having 500 participants. It is located in the center of Kongsberg next to the Storgata and also has its very own restaurant. It is ideal for everyday people who just wants to visit Kongsberg and it is the cheapest out of the three.",
        "image": "https://www.strawberry.no/globalassets/global/hotel-pictures/quality-hotel/quality-hotel-grand-kongsberg/the-hotel/outdoor/facade-main-entrance-quality-hotel-grand-kongsberg.jpg"
    },   
    {
        "name": "Kongsberg Church",
        "category": "Churches",
        "link": "https://www.kirken.no/nb-NO/fellesrad/kongsberg/menigheter/kongsbergogjondalen/om-oss/kongsbergkirke/kongsberg-church/",
        "description": "Kongsberg church is the largest baroque-church in Norway.  The church has a modest exterior with a rich rococo. The building works started in 1740 by Joachim Andreas Stukenbrock a German architect, and was finished in 1761. During the war, in 1944, the chandeliers and the church silver were stored in the silver mines in Kongsberg. They host a lot of concerts here all throughout the year.",
        "image": "images/Kongsbergchurch.jpg"
    },
    {
        "name": "St. Barbara church",
        "category": "Churches",
        "link": "https://kongsberg.katolsk.no/",
        "description": "The St Barbara church is Kongsberg's catolic church. The number of catolics have increased in the last few years because of the immagration. Kongsberg needed a church and in 2020 they pruchased the neo-Gothic long church the Methodist which was built in 1887. Today it has 2573 members of the congregation",
        "image": "images/Barara.jpg"
    },
    {
        "name": "Credo church",
        "category": "Churches",
        "link": "https://www.bibelsenteret.no/",
        "description": "It is an independent and local evangelist congregation in Kongsberg. This community includes from young people to the elderly. The church is a few streets away from Stortorvet. ",
        "image": "images/crecre.jpg"
    },
    {
        "name": "Advent church",
        "category": "Churches",
        "link": "https://kongsberg.adventkirken.no/",
        "description": "Their community is a Christian Protestant congregation associated with the Seventh-day Adventist Church in Norway. Their church is found on the left side of the river.",
        "image": "images/advent.jpg"
    },
    {
        "name": "Gamlegrendåsen School",
        "category": "Schools",
        "link": "https://www.kongsberg.kommune.no/artikkel/gamlegrendaasen-skole",
        "description": "The school is located in Gamlegrendåsen part of Kongsberg. The school has 471 students from 1st to 7th grade. In this school they try to encurage confidence in the children, in their own abilities as well as helping with their development as a person.",
        "image": "images/Gammel.jpg"
    },
    {
        "name": "Tislegård Ungdomsskole",
        "category": "Schools",
        "link": "https://www.kongsberg.kommune.no/artikkel/tislegaard-ungdomsskole",
        "description": "Tislegård secondary school is one of four secondary schools in Kongsberg. The school is located on the south-east side of the center of Kongsberg. Tislegård secondary school has per today 402 pupils divided into three levels. It is a safe and good school environment as well as a good and inclusive class environment are important for promoting good learning processes.",
        "image": "https://res.cloudinary.com/ssp/image/fetch/w_1200,h_630,c_fill,f_jpg/https://aimblob.blob.core.windows.net/aimfiles/b3e5e848-5531-49a0-b159-17edd188bd1f.jpg"
    },
    {
        "name": "Vestsiden Ungdomsskole",
        "category": "Schools",
        "link": "http://vestsidenungdomsskole.no/",
        "description": "Vestsiden Ungdomsskole is the newest school in Kongsberg built in 2019. The schools aim is to prepare students for further schooling and life. The school is very enviromently friendly, having solar panels and hydrogen energy as well as their very own green house. They have currently 390 students and 56 employees.",
        "image": "https://res.cloudinary.com/ssp/image/fetch/w_1200,h_630,c_fill,f_jpg/https://aimblob.blob.core.windows.net/aimfiles/ec9a25b2-c1a9-4d0d-9966-d2b2cd1c66a1.jpg"
    },
    {
        "name": "Kongsberg International School (KIS)",
        "category": "Schools",
        "link": "https://www.kischool.org/",
        "description": "KIS is an International School where children can study from 1st grade to 10th grade (from 1st to 6th it is called PYP from 7th to 10th it is MYP) internationally (in english). It has been established in 2003 and it is very popular among foreign families. With its small class count of only 20 people the students have an easier time to know each other. People come here from all around the world having more than 39 nationalities in the school. It is a private school so it has a uniform. Because it is a private school it has to be paid for but their prices are really affordable.",
        "image": "images/KIS.jpg"
    },
    {
        "name": "Kongsberg Vidregående School (VGS)",
        "category": "Schools",
        "link": "https://viken.no/kongsberg-vgs/",
        "description": "Kongsberg VGS is the only Vidregående school within Kongsberg that's why it has a lot of courses and students as well. It is located in the middle of Kongsberg. VGS has 17 main courses which has a lot of specializations. They also offer IB (International Baccalaureate) course which is the same all throughout the world and recognized by a lot of countries. Some courses offer professions which will allow you to work immidiatly after school, others prepare you better for university. It has around 1300 students.",
        "image": "https://smooth-storage.aptoma.no/users/drp-bygg/images/76908945.jpg?t%5Bquality%5D=80&t%5Bresize%5D%5Bwidth%5D=1200&t%5Bresize%5D%5Bheight%5D=1200&accessToken=cbb84d52231f7d51c7d26f99f182c4665ee8bb89ae6f05818ba3aedb8315c181"
    },
    {
        "name": "University of South-Eastern Norway (USN)",
        "category": "Schools",
        "link": "https://www.usn.no/english/about/campuses/kongsberg/",
        "description": "USN campus Kongsberg is located in KRONA, a short distance form the city center. Special engineering courses are available which can give you an opportunity to find a job in Kongsberg big industrial companies. ",
        "image": "images/unniversitz.jpg"
    },
];
