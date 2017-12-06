(function(){
    var app=angular.module("contactApp");
    
    app.service("contactDatasvc",function (AppNameSvc){
        this.contacts =
        [

            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "oscar",
                    "last": "johansen"
                },
                "location": {
                    "street": "9196 padborgvej",
                    "city": "ølstykke",
                    "state": "danmark",
                    "postcode": 21888
                },
                "email": "oscar.johansen@example.com",
                "login": {
                    "username": "organicduck118",
                    "password": "lander",
                    "salt": "VMGXczGw",
                    "md5": "1d27fbb9f47338b601fbc3268c053dae",
                    "sha1": "cab7ecded1c8c1ace21bde3c3f252c4b73ddcd9e",
                    "sha256": "5706e601a4f527fa8a7db5b84ead3b230df4693d1ce3e5185647f620a536025c"
                },
                "dob": "1967-07-30 12:02:24",
                "registered": "2009-12-22 21:58:21",
                "phone": "90334714",
                "cell": "95609196",
                "id": {
                    "name": "CPR",
                    "value": "508091-1025"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/41.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
                },
                "nat": "DK"
            }
            ,
            {
                "gender": "female",
                "name": {
                    "title": "mrs",
                    "first": "maria",
                    "last": "graf"
                },
                "location": {
                    "street": "8055 parkstraße",
                    "city": "dresden",
                    "state": "berlin",
                    "postcode": 29304
                },
                "email": "maria.graf@example.com",
                "login": {
                    "username": "ticklishfrog437",
                    "password": "rockie",
                    "salt": "w2Gv4ZBW",
                    "md5": "1802827553fd91b5e6fb338e5134a665",
                    "sha1": "8dd33cfb93607c3994f3684cbfaefb379e54726c",
                    "sha256": "d00400e8968b7d6334f460daabd6090519c053259b525fc223f4e38f51e2a9d3"
                },
                "dob": "1994-09-19 01:35:52",
                "registered": "2014-02-19 16:08:56",
                "phone": "0461-6523134",
                "cell": "0178-3912526",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/17.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
                },
                "nat": "DE"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "carter",
                    "last": "addy"
                },
                "location": {
                    "street": "7708 dufferin st",
                    "city": "st. george",
                    "state": "prince edward island",
                    "postcode": 90943
                },
                "email": "carter.addy@example.com",
                "login": {
                    "username": "yellowostrich803",
                    "password": "records",
                    "salt": "Kcg6guRo",
                    "md5": "3714ea8e076045808e2cbba1f6de9b02",
                    "sha1": "61c1e04afafb133219768b53279b17ba6fe2ed90",
                    "sha256": "faf94cc29ffca464bd1e5519382def2d8bd83ebcc3f892ed8d3387a6e799d074"
                },
                "dob": "1977-04-08 18:59:42",
                "registered": "2009-10-16 18:18:22",
                "phone": "523-725-2706",
                "cell": "514-396-0892",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/32.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
                },
                "nat": "CA"
            },

            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "noelia",
                    "last": "carmona"
                },
                "location": {
                    "street": "9798 calle de toledo",
                    "city": "palma de mallorca",
                    "state": "galicia",
                    "postcode": 64459
                },
                "email": "noelia.carmona@example.com",
                "login": {
                    "username": "blackgorilla950",
                    "password": "123abc",
                    "salt": "g1hXvZPI",
                    "md5": "67b2d370ce925762cbb0bb7578ef4a53",
                    "sha1": "64ecbec2c1f073a6937d2d76e4bc2c5c904ec17b",
                    "sha256": "16012de9cab17fc6b2a269d37c0c20c7c19b25d874691442d9b504da9ad94ad7"
                },
                "dob": "1970-09-23 16:30:28",
                "registered": "2008-04-10 06:18:59",
                "phone": "937-812-002",
                "cell": "693-880-891",
                "id": {
                    "name": "DNI",
                    "value": "11369042-X"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/35.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/35.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
                },
                "nat": "ES"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "daniel",
                    "last": "maki"
                },
                "location": {
                    "street": "3640 hämeenkatu",
                    "city": "kyyjärvi",
                    "state": "satakunta",
                    "postcode": 31391
                },
                "email": "daniel.maki@example.com",
                "login": {
                    "username": "yellowelephant315",
                    "password": "hiziad",
                    "salt": "Yg5cOg0C",
                    "md5": "f666a31aac17f977bc4edae2dec00448",
                    "sha1": "51dca8126c2756956ddf477e80f2c2d969eb0dce",
                    "sha256": "0ed0e7772d8eccd08cd9700f75d5aeb2d3c6c337477d67c9221fd05235602785"
                },
                "dob": "1949-11-20 12:19:58",
                "registered": "2011-01-25 21:45:01",
                "phone": "06-317-848",
                "cell": "044-584-48-33",
                "id": {
                    "name": "HETU",
                    "value": "1049-563V"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/55.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/55.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/55.jpg"
                },
                "nat": "FI"
            },

            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "sofia",
                    "last": "wang"
                },
                "location": {
                    "street": "9941 karangahape road",
                    "city": "new plymouth",
                    "state": "auckland",
                    "postcode": 38586
                },
                "email": "sofia.wang@example.com",
                "login": {
                    "username": "redgoose728",
                    "password": "johnny5",
                    "salt": "8kxQzGcN",
                    "md5": "08d1750d1ff2a1b53dfdcc1c1c93f600",
                    "sha1": "0a66c575e0df70f10af9dbc0d3adb99c656a5466",
                    "sha256": "1433f7b677e61724e23c08576bef1a8ba7d5107056942321034ce1c557443902"
                },
                "dob": "1988-09-29 06:27:02",
                "registered": "2002-04-09 19:53:39",
                "phone": "(257)-901-4950",
                "cell": "(264)-945-6875",
                "id": {
                    "name": "",
                    "value": null
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/17.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
                },
                "nat": "NZ"
            },
            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "benjamin",
                    "last": "perry"
                },
                "location": {
                    "street": "5767 victoria road",
                    "city": "sallins",
                    "state": "roscommon",
                    "postcode": 29195
                },
                "email": "benjamin.perry@example.com",
                "login": {
                    "username": "orangeswan853",
                    "password": "753951",
                    "salt": "9cGgCXGY",
                    "md5": "64dc937b7903c9a106f63547708952ee",
                    "sha1": "907edd3c44dc0d616a7a3f5f7a23ec2fff1fb948",
                    "sha256": "48439535b9f9d15db1690596c6f312f48af74f0cf7f0edc5dcd92dd382c670ce"
                },
                "dob": "1969-04-28 20:51:11",
                "registered": "2005-05-18 12:03:11",
                "phone": "071-990-1367",
                "cell": "081-703-5018",
                "id": {
                    "name": "PPS",
                    "value": "0459748T"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/50.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
                },
                "nat": "IE"
            }

        ]  
    })
    })();
    