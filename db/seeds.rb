# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mangas = Manga.create([
    {
        name: "Kingdom",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Kingdom_volume_1.jpg/220px-Kingdom_volume_1.jpg"
    },
    {
        name: "Dragon Ball",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/DB_Tank%C5%8Dbon.png/220px-DB_Tank%C5%8Dbon.png"
    },
    {
        name: "Vagabond",
        image_url: "https://d3fa68hw0m2vcc.cloudfront.net/ab3/92130877.jpeg"
    },
    {
        name: "Slam Dunk",
        image_url: "https://www.planetebd.com/dynamicImages/album/cover/large/41/43/album-cover-large-41439.jpg"
    },
    {
        name: "Samurai Deeper Kyo",
        image_url: "https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/9/5/3/9782505003359/tsp20120929085256/Samurai-deeper-Kyo.jpg"
    },
    {
        name: "Noritaka",
        image_url: "https://pm1.narvii.com/6499/65380787c7a716f7b40f524aa807677be422b5e3_00.jpg"
    }
])

reviews = Review.create([
    {
        title: 'Super Manga',
        description: 'Manga épique, inspiré de faits réels, des personnages fabuleux et un dessin à coupé le souffle',
        score: 5,
        manga: mangas.first
    },
    {
        title: 'Superbe histoire',
        description: 'Superbe histoire, malheuresement parfois un peu trop violent et redondant pour moi',
        score: 2,
        manga: mangas.first
    }
])