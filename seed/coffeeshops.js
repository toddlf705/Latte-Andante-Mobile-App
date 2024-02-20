const db = require('../db')
const Coffeeshops =require('../models/coffeeshop')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const coffeeshops = 
        [
            {
                store_name: "Cafe Blue",
                category: ["premium coffee"],
                address: {
                    "street": "2005 Boggs Rd NW Suite 100",
                    "city": "Duluth",
                    "state": "GA",
                    "zipcode": "30096"
                },
                phone: "678-226-9985",
                rating: 4.7, 
                img: [
                    "../image/Cafe Blue Duluth/Cafe Blue 1iced black sesame latte.jpeg",
                    "../image/Cafe Blue Duluth/CafeBlue exterior.png",
                    "../image/Cafe Blue Duluth/CafeBlue iced blue latte.jpeg",
                    "../image/Cafe Blue Duluth/CafeBlue iced butterfly pea flower tea.jpeg",
                    "../image/Cafe Blue Duluth/CafeBlue black sesame latte.jpeg",
                    "../image/Cafe Blue Duluth/Cafe Blue tiramisu latte.png",
                    "../image/Cafe Blue Duluth/CafeBlue interior.png",
                    "../image/Cafe Blue Duluth/Cafe Blue brunch.png",
                    "../image/Cafe Blue Duluth/CafeBlue salmon bagel.png",
                    "../image/Cafe Blue Duluth/Cafe Blue cookies.png",
                    "../image/Cafe Blue Duluth/Cafe Blue pastry.png",
                    "../image/Cafe Blue Duluth/Cafe Blue drink menus.png",
                ],
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8878988858223!2d-84.0968248!3d33.969720699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5bda128efaf07%3A0x390fbbe5b67ddbb2!2sCafe%20Blue!5e0!3m2!1sen!2sus!4v1708461857002!5m2!1sen!2sus"
            },
            {
                store_name: "Alchemist Trading Co.",
                category: ["premium coffee","dessert", "brunch"],
                address: {
                    "street": "9700 Medlock Bridge Rd #138",
                    "city": "Johns Creek",
                    "state": "GA",
                    "zipcode": "30022"
                },
                phone: "770-687-2677",
                rating: 4.7, 
                img: [
                    "../image/Alchemist/1dessert.png",
                    "../image/Alchemist/interior.png",
                    "../image/Alchemist/dalgona_coffee.png",
                    "../image/Alchemist/capuccino_toast.png",
                    "../image/Alchemist/mango_shaved.png",
                    "../image/Alchemist/drink_and_dessert.png",
                    "../image/Alchemist/icecream.png",
                    "../image/Alchemist/waffle.png",
                    "../image/Alchemist/brunch.png",
                    "../image/Alchemist/bagel_sandwhich.png",
                ],
                map: "https://www.google.com/maps/place/Alchemist+Trading+Co./@34.0169598,-84.1956706,17z/data=!3m1!4b1!4m6!3m5!1s0x88f59f829b7a0759:0xf2a785f9b19fdcc1!8m2!3d34.0169598!4d-84.1930957!16s%2Fg%2F11h0mprlxf?hl=en&entry=ttu"
            },
            {
                store_name: "Divine Coffee",
                category: ["premium coffee", "study", "brunch"],
                address: {
                    "street": "7725 McGinnis Ferry Rd",
                    "city": "Johns Creek",
                    "state": "GA",
                    "zipcode": "30024"
                },
                phone: "770-417-8759",
                rating: 4.4, 
                img: [
                    "../image/Divine Coffee/1main.png",
                    "../image/Divine Coffee/exterior.png",
                    "../image/Divine Coffee/coffee_art.png",
                    "../image/Divine Coffee/strawberry matcha latte.png",
                    "../image/Divine Coffee/drink_and_pie.png",
                    "../image/Divine Coffee/brunch.png",
                    "../image/Divine Coffee/interior.png",
                    "../image/Divine Coffee/icecream.png",
                    "../image/Divine Coffee/sandwhich.png",
                    "../image/Divine Coffee/scone.png"
                ],
                map: "https://www.google.com/maps/place/Divine+Coffee/@34.0556417,-84.13369,17z/data=!3m1!4b1!4m6!3m5!1s0x88f599dbc6e286b3:0x68b684e2cc291570!8m2!3d34.0556417!4d-84.1311151!16s%2Fg%2F11h5rlr4r0?hl=en&entry=ttu"
            },
            {
                store_name: "Break Coffee Roasters",
                category: ["premium coffee", "study"],
                address: {
                    "street": "3122 Hill St NW",
                    "city": "Duluth",
                    "state": "GA",
                    "zipcode": "30096"
                },
                phone: null,
                rating: 4.5, 
                img: [
                    "../image/Break Coffee Roasters/1main.png",
                    "../image/Break Coffee Roasters/beans.png",
                    "../image/Break Coffee Roasters/coffee.png",
                    "../image/Break Coffee Roasters/matcha.png",
                    "../image/Break Coffee Roasters/menu.png",
                    "../image/Break Coffee Roasters/interior.png",
                    "../image/Break Coffee Roasters/interior2.png",
                    "../image/Break Coffee Roasters/full interior.png"
                ],
                map: "https://www.google.com/maps/place/Break+Coffee+Roasters/@34.0033586,-84.1509801,16z/data=!4m10!1m2!2m1!1sbreak+coffee+roasters!3m6!1s0x88f5a3ca83711e21:0x6a550f3c1a66269d!8m2!3d34.0033586!4d-84.1458303!15sChVicmVhayBjb2ZmZWUgcm9hc3RlcnNaFyIVYnJlYWsgY29mZmVlIHJvYXN0ZXJzkgELY29mZmVlX3Nob3DgAQA!16s%2Fg%2F11tf23wm0j?hl=en&entry=ttu"
            },
            {
                store_name: "Cafe Amico",
                category: ["premium coffee", "brunch"],
                address: {
                    "street": "320 Town Center Ave #9A",
                    "city": "Suwanee",
                    "state": "GA",
                    "zipcode": "30024"
                },
                phone: "678-765-8499",
                rating: 4.6, 
                img: [
                    "../image/Cafe Amico/1main.png",
                    "../image/Cafe Amico/interior.png",
                    "../image/Cafe Amico/marshmellow.png",
                    "../image/Cafe Amico/coffee.png",
                    "../image/Cafe Amico/brunch and tea.png",
                    "../image/Cafe Amico/brunch sandwhich.png",
                    "../image/Cafe Amico/brunch.png",
                    "../image/Cafe Amico/crossaint sandwhich.png",
                    "../image/Cafe Amico/dessert.png",
                    "../image/Cafe Amico/honey bread.png",
                    "../image/Cafe Amico/cake.png"
                ],
                map: "https://www.google.com/maps/place/Cafe+Amico/@34.0557606,-84.104397,13z/data=!4m10!1m2!2m1!1sCafe+Amico!3m6!1s0x88f5972e4c171b97:0x2cb0959aa3c6db0d!8m2!3d34.0557606!4d-84.0631983!15sCgpDYWZlIEFtaWNvWgwiCmNhZmUgYW1pY2-SAQRjYWZl4AEA!16s%2Fg%2F11gv0tf2jd?hl=en&entry=ttu"
            },
            {
                store_name: "Orange Coffee Bar",
                category: ["premium coffee", "dessert"],
                address: {
                    "street": "3473 Old Norcross Rd #107",
                    "city": "Duluth",
                    "state": "GA",
                    "zipcode": "30096"
                },
                phone: "678-691-1646",
                rating: 4.4, 
                img: [
                    "../image/Orange Coffee/1main.png",
                    "../image/Orange Coffee/exterior.png",
                    "../image/Orange Coffee/coffee and cake.png",
                    "../image/Orange Coffee/coffee drizzle.png",
                    "../image/Orange Coffee/crossaint and juice.png",
                    "../image/Orange Coffee/dalgona.png",
                    "../image/Orange Coffee/hot coffees.png",
                    "../image/Orange Coffee/mango shaved.png",
                    "../image/Orange Coffee/melon shaved.png"
                ],
                map: "https://www.google.com/maps/place/Orange+Coffee+Bar/@33.9660421,-84.137004,17z/data=!3m2!4b1!5s0x88f5a30326c18797:0x65fd7cb1dd513332!4m6!3m5!1s0x88f5a3031e4717a7:0xcfbb09a01eca644f!8m2!3d33.9660421!4d-84.1344291!16s%2Fg%2F11b7ck8vv0?hl=en&entry=ttu"
            }
        ]
    await Coffeeshops.insertMany(coffeeshops)
    console.log('Seeded Coffee Shops!')
}

    const run = async () => {
        try {
            await main();
        } catch (error) {
            console.error('Error running the seed script:', error);
        } finally {
            db.close();
        }
    }

run()
         