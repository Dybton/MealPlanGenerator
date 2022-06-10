
let Recipe = class {
    constructor(name, image, ingredients) {
      this.name = name.toUpperCase();
      this.image = image;
      this.ingredients = ingredients.map(element => ({ ...element, ingredient: firstLetterCapitalized(element.ingredient) }));

    // Function that properly formats ingredient names
    function firstLetterCapitalized(input) {
            let output = input.toLowerCase()
            output = output[0].toUpperCase() + output.substring(1);
            output.trim();
            return output;
        };
    }}

const Gyros = new Recipe("Græsk gyros med kyllingekebab", "https://img.mummum.dk/wp-content/uploads/2020/06/9DF5C32D-C4AB-455F-8B10-C8A7CEEF7460-1350x1013.jpg", [{ingredient: "Pitabrød", amount: 3, unit: "stk"}, {ingredient: "Kyllingebryst", amount: 225, unit: "g"}, {ingredient: "Græsk Yogurt", amount: 0.8, unit: "dl"}, {ingredient: "Citron", amount: 1, unit: "stk"}, {ingredient: "Tomat", amount: 4, unit: "stk"}, {ingredient: "Rødløg", amount: 1, unit: "stk"}, {ingredient: "Koriander", amount: 1, unit: "tsk"}, {ingredient: "Hvidløg", amount: 1, unit: "fed"}, {ingredient: "Røget paprika", amount: 2, unit: "spsk"}, {ingredient: "Tørret Timian", amount: 1, unit: "spsk"}, {ingredient: "Hjertesalat", amount: 1, unit: "stk"}, {ingredient: "Olivenolie", amount: 1, unit: "spsk"}])

// const Halloumi_Tacos = new Recipe("Halloumi Tacos", "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/HF191125_R05_W04_SE_C12343603-1_Main_low-f2a950e1.jpg", [{ingredient: "Halloumi", amount: 200, unit: "g"}, {ingredient: "Rødløg", amount: 2, unit: "stk"}, {ingredient: "Tomat", amount: 2, unit: "stk"}, {ingredient: "Hjertesalat", amount: 1, unit: "stk"}, {ingredient: "Tortilla pandekager", amount: 6, unit: "stk"}, {ingredient: "Avocado", amount: 1, unit: "stk"}, {ingredient: "Mayonaise", amount: 25, unit: "g"}, {ingredient: "Citron", amount: 1, unit: "stk"}, {ingredient: "Hvidløg", amount: 1, unit: "fed"}, {ingredient: "Agurk", amount: 1, unit: "stk"}, {ingredient: "Tørret Oregano", amount: 1, unit: "spsk"}])
// const Pasta_m_ost_bacon = new Recipe("Paste med ost og bacon", "https://www.easypeasyfoodie.com/wp-content/uploads/2016/08/Gargano-Pasta-1-1024x1024.jpg", [{ingredient: "Frisk Pasta", amount: 2, unit: "pakker"}, {ingredient: "Bacon", amount: 150, unit: "g"}, {ingredient: "Creme Fraiche", amount: 3, unit: "spsk"}, {ingredient: "Blue Castello", amount: 75, unit: "g"}, {ingredient: "Broccoli", amount: 1, unit: "stk"}])
// const Middelhavs_Havaborre = new Recipe("Middelhavs Havaborre", "https://d1yfn1dfres2va.cloudfront.net/001/f4/3c/f43c38f176161cfbc9530c332eeceda2_640m.jpg", [{ingredient: "Aubergine", amount: 1, unit: "stk"}, {ingredient: "Olivenolie", amount: 1, unit: "spsk"}, {ingredient: "Rødløg", amount: 1, unit: "stk"}, {ingredient: "Hvidløg", amount: 1, unit: "stk"}, {ingredient: "Tomat", amount: 2, unit: "stk"}, {ingredient: "Citron", amount: 1, unit: "stk"}, {ingredient: "Hvidvin", amount: 1, unit: "skvt"}, {ingredient: "Grøntsagsbouillon", amount: 2, unit: "spsk"}, {ingredient: "Hakket Tomat", amount: 2, unit: "spsk"}, {ingredient: "Tørret Oregano", amount: 1, unit: "spsk"}, {ingredient: "Havborre", amount: 300, unit: "g"}, {ingredient: "Couscous", amount: 250, unit: "g"}, {ingredient: "Hakkede Oliven", amount: 50, unit: "g"}])
// const Spicy_Oksekød_på_Bulgur = new Recipe("Spicy Oksekød på Bulgur", "https://dagenstallerken.dk/wp-content/uploads/2017/04/Orientalsk-oksek%C3%B8d1.jpg",[{ingredient: "Hakket Oksekød", amount: 250, unit: "g"}, {ingredient: "Gulerod", amount: 2, unit: "stk"}, {ingredient: "Squash", amount: 0.5, unit: "stk"}, {ingredient: "Ærter", amount: 100, unit: "g"}, {ingredient: "Rødløg", amount: 1, unit: "stk"}, {ingredient: "Rosiner", amount: 50, unit: "g"}, {ingredient: "Paprika", amount: 1, unit: "tsk"}, {ingredient: "Spidskommen", amount: 2, unit: "tsk"}, {ingredient: "Chiliflager", amount: 1, unit: "tsk"}, {ingredient: "Citronsaft", amount: 1, unit: "spsk"}, {ingredient: "Fuldkornsbulgur", amount: 1.5, unit: "dl"}, {ingredient: "Boullionterning", amount: 1, unit: "stk"}])
// const greek_chicken_and_potatoes_recipe = new Recipe("Greek Chicken and Totatoes Recipe", "https://www.themediterraneandish.com/wp-content/uploads/2020/04/greek-chicken-recipe-8.jpg", [
    //     {
    //         "ingredient": "Kyllingelår",
    //         "amount": 200,
    //         "unit": "gram"
    //     },
    //     {
    //         "ingredient": "Kartofler",
    //         "amount": 4,
    //         "unit": "Stk"
    //     },
    //     {
    //         "ingredient": "Løg",
    //         "amount": 1,
    //         "unit": "stk"
    //     },
    //     {
    //         "ingredient": "Pepper",
    //         "amount": 0.5,
    //         "unit": "tsk"
    //     },
    //     {
    //         "ingredient": "Citron",
    //         "amount": 0.5,
    //         "unit": "stk"
    //     },
    //     {
    //         "ingredient": "Kyllingefond",
    //         "amount": 1,
    //         "unit": "deciliter"
    //     },
    //     {
    //         "ingredient": "Kalamata Oliven",
    //         "amount": 6,
    //         "unit": "stk"
    //     },
    //     {
    //         "ingredient": "Persille",
    //         "amount": 0.5,
    //         "unit": "Håndfuld"
    //     },
    //     {
    //         "ingredient": "Olivenolie",
    //         "amount": 2,
    //         "unit": "spsk"
    //     },
    //     {
    //         "ingredient": "Citronsaft",
    //         "amount": 1,
    //         "unit": "spsk"
    //     },
    //     {
    //         "ingredient": "Tørret Rosmarin",
    //         "amount": 0.25,
    //         "unit": "spsk"
    //     },
    //     {
    //         "ingredient": "Muskatnød",
    //         "amount": 0.25,
    //         "unit": "tsk"
    //     }
    // ])

const Lasagne = {
  name: 'LASAGNE',
  image: 'https://www.valdemarsro.dk/wp-content/lasagne3.jpg',
  link: 'https://www.valdemarsro.dk/lasagne/?antal=1',
  estTime: '3 timer',
  ingredients: [
    { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
    { amount: '1', unit: 'fed', ingredient: 'Hvidløg' },
    { amount: '100', unit: 'g', ingredient: 'Hakket Oksekød' },
    { amount: '0.50', unit: 'tsk', ingredient: 'Oregano' },
    { amount: '0.25', unit: 'tsk', ingredient: 'Timian' },
    { amount: '1', unit: 'stk', ingredient: 'Gulerod' },
    { amount: '1.25', unit: 'stængler', ingredient: 'Bladselleri' },
    { amount: '0.25', unit: 'stk', ingredient: 'Squash' },
    { amount: '0.25', unit: 'dl', ingredient: 'Tomatpuré' },
    { amount: '0.50', unit: 'dåser', ingredient: 'Hakkede Tomater' },
    { amount: '0.25', unit: 'dl', ingredient: 'Rødvin' },
    { amount: '0.50', unit: 'spsk', ingredient: 'Olivenolie' },
    { amount: '0.50', unit: 'spsk', ingredient: 'Smør' },
    { amount: '0.50', unit: 'spsk', ingredient: 'Hvedemel' },
    { amount: '0.75', unit: 'dl', ingredient: 'Mælk' },
    { amount: '0.25', unit: 'knivspids', ingredient: 'Muskatnød' },
    { amount: '31.25', unit: 'g', ingredient: 'Frisk' },
    { amount: '50', unit: 'g', ingredient: 'Lasagneplader' },
    { amount: '31.25', unit: 'g', ingredient: 'Frisk' }
  ]
}


const Chili_sin_carne = {
  name: 'CHILI SIN CARNE',
  image: 'https://www.valdemarsro.dk/wp-content/2017/09/chili-sin-carne-1.jpg',
  link: 'https://www.valdemarsro.dk/chili-sin-carne/?antal=1',
  estTime: '45 min.',
  ingredients: [
    { amount: '0.38', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
    { amount: '0.25', unit: 'tsk', ingredient: 'Kanel' },
    { amount: '0.38', unit: 'tsk', ingredient: 'Stødt Koriander' },
    { amount: '0.25', unit: 'tsk', ingredient: 'Røget Paprika' },
    { amount: '0.13', unit: 'tsk', ingredient: 'Chiliflager' },
    { amount: '0.50', unit: 'stk', ingredient: 'Rødløg' },
    { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
    { amount: '0.25', unit: 'stk', ingredient: 'Squash' },
    { amount: '0.50', unit: 'stængler', ingredient: 'Bladselleri' },
    { amount: '0.25', unit: 'stk', ingredient: 'Aubergine' },
    { amount: '0.75', unit: 'spsk', ingredient: 'Soltørrede Tomater' },
    { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede Tomater' },
    { amount: '0.25', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
    { amount: '0.50', unit: 'dåser', ingredient: 'Kidneybønner' },
    { amount: '7.50', unit: 'g', ingredient: 'Mørk' },
    { amount: '0.75', unit: 'spsk', ingredient: 'Olivenolie' },
    { amount: '31.25', unit: 'g', ingredient: 'Nachos' },
    { amount: '100', unit: 'g', ingredient: 'Ris' },
    { amount: '25', unit: 'g', ingredient: 'Cremefraiche' },
    { amount: '25', unit: 'g', ingredient: 'Cheddar' },
    { amount: '0.13', unit: 'stk', ingredient: 'Rød Chili' },
    { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
    { amount: '0.25', unit: 'stk', ingredient: 'Lime' }
  ]
}



const Boller_i_karry = {
    name: 'BOLLER I KARRY',
    image: 'https://www.valdemarsro.dk/wp-content/2010/10/boller_karry-1.jpg',
    link: 'https://www.valdemarsro.dk/boller-i-karry/?antal=1',
    estTime: '35 min.',
    ingredients: [
      { amount: '100', unit: 'g', ingredient: 'Hakket' },
      { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
      { amount: '0.13', unit: 'dl', ingredient: 'Mælk' },
      { amount: '0.25', unit: 'stk', ingredient: 'Æg' },
      { amount: '0.25', unit: 'dl', ingredient: 'Havregryn' },
      { amount: '0.50', unit: 'spsk', ingredient: 'Smør' },
      { amount: '0.50', unit: 'tsk', ingredient: 'Karry' },
      { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
      { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Koriander' },
      { amount: '0.75', unit: 'spsk', ingredient: 'Hvedemel' },
      { amount: '0.75', unit: 'dl', ingredient: 'Mælk' },
      { amount: '0.75', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
      { amount: '1', unit: 'dl', ingredient: 'Ris' },
      { amount: '0.25', unit: 'stk', ingredient: 'Æble' },
      { amount: '0.25', unit: 'stk', ingredient: 'Mango' },
      { amount: '0.25', unit: 'håndfuld', ingredient: 'Bredbladet Persille' }
    ]
  }
const Orientalsk_risret_med_oksekød
= {
    name: 'ORIENTALSK RISRET MED OKSEKØD',
    image: 'https://www.valdemarsro.dk/wp-content/2022/02/orientalsk-risret.jpg',
    link: 'https://www.valdemarsro.dk/orientalsk-risret/?antal=1',
    estTime: '45 min.',
    ingredients: [
      { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
      { amount: '0.75', unit: 'fed', ingredient: 'Hvidløg' },
      { amount: '50', unit: 'g', ingredient: 'Gulerod' },
      { amount: '0.50', unit: 'spsk', ingredient: 'Karry' },
      { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
      { amount: '0.13', unit: 'tsk', ingredient: 'Stødt Gurkemeje' },
      { amount: '100', unit: 'g', ingredient: 'Hakket' },
      { amount: '62.50', unit: 'g', ingredient: 'Squash' },
      { amount: '0.25', unit: 'stk', ingredient: 'Rød Peberfrugt' },
      { amount: '75', unit: 'g', ingredient: 'Ris' },
      { amount: '1.75', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
      { amount: '35', unit: 'g', ingredient: 'Majs' },
      { amount: '43.75', unit: 'g', ingredient: 'Ærter' },
      { amount: '0.25', unit: 'tsk', ingredient: 'Olivenolie' },
      { amount: '0.25', unit: 'håndfuld', ingredient: 'Bredbladet Persille' }
    ]
  }

const Buddha_Bowl = {
    name: 'BUDDHA BOWL',
    image: 'https://www.valdemarsro.dk/wp-content/2018/09/buddha-bowl-1.jpg',
    link: 'https://www.valdemarsro.dk/buddha-bowl/?antal=1',
    estTime: '40 min.',
    ingredients: [
      { amount: '0.50', unit: 'dl', ingredient: 'Brune Ris' },
      { amount: '75', unit: 'g', ingredient: 'Sød Kartoffel' },
      { amount: '0.25', unit: 'stk', ingredient: 'Squash' },
      { amount: '3.75', unit: 'stk', ingredient: 'Cherrytomater' },
      { amount: '0.25', unit: 'stk', ingredient: 'Rødløg' },
      { amount: '12.50', unit: 'g', ingredient: 'Edemamebønner' },
      { amount: '0.25', unit: 'dåse', ingredient: 'Sorte Bønner' },
      { amount: '0.25', unit: 'stk', ingredient: 'Avocado' },
      { amount: '31.25', unit: 'g', ingredient: 'Rucola' },
      { amount: '0.50', unit: 'tsk', ingredient: 'Sesamfrø' },
      { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
      { amount: '0.50', unit: 'dl', ingredient: 'Hummus' },
      { amount: '0.75', unit: 'spsk', ingredient: 'Olivenolie' },
      { amount: '0.25', unit: 'tsk', ingredient: 'Flagesalt' },
      { amount: '0.25', unit: 'spsk', ingredient: 'Tahin' },
      { amount: '0.25', unit: 'fed', ingredient: 'Hvidløg' },
      { amount: '0.13', unit: 'stk', ingredient: 'Citron' },
      { amount: '0.75', unit: 'spsk', ingredient: 'Vand' },
      { amount: '0.13', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
      { amount: '0.25', unit: 'dåse', ingredient: 'Kikærter' },
      { amount: '0.13', unit: 'tsk', ingredient: 'Røget Paprika' },
      { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
    ]
  }

const Panang_karry = {
    name: 'PANANG KARRY MED KYLLING',
    image: 'https://www.valdemarsro.dk/wp-content/2020/01/penang-kylling.jpg',
    link: 'https://www.valdemarsro.dk/panang-karry-med-kylling/?antal=1',
    estTime: '35 min.',
    ingredients: [
      { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
      { amount: '1', unit: 'fed', ingredient: 'Hvidløg' },
      { amount: '75', unit: 'g', ingredient: 'Kyllingefilet' },
      { amount: '5', unit: 'g', ingredient: 'Ingefær' },
      { amount: '0.50', unit: 'spsk', ingredient: 'Rød Karrypasta' },
      { amount: '0.75', unit: 'stk', ingredient: 'Gulerod' },
      { amount: '50', unit: 'g', ingredient: 'Broccoli' },
      { amount: '25', unit: 'g', ingredient: 'Edamamebønner' },
      { amount: '0.25', unit: 'dåse', ingredient: 'Kokosmælk' },
      { amount: '0.50', unit: 'gul', ingredient: 'Peberfrugt' },
      { amount: '0.25', unit: 'spsk', ingredient: 'Peanutbutter' },
      { amount: '0.25', unit: 'tsk', ingredient: 'Kokossukker' },
      { amount: '0.25', unit: 'spsk', ingredient: 'Soja' },
      { amount: '0.25', unit: 'stk', ingredient: 'Øko Lime' },
      { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
      { amount: '0.75', unit: 'dl', ingredient: 'Ris' },
      { amount: '0.25', unit: 'dl', ingredient: 'Saltede Peanuts' },
      { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' }
    ]
  }

    

    const recipe1 = {
        name: 'KYLLING MED CASHEW',
        image: 'https://www.valdemarsro.dk/wp-content/2022/02/kylling-med-cashew.jpg',
        link: 'https://www.valdemarsro.dk/kylling-med-cashew/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '15', unit: 'g', ingredient: 'Cashewnødder' },
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '100', unit: 'g', ingredient: 'Kyllingefilet' },
          { amount: '0.75', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Ingefær' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Soja' },
          { amount: '0.50', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '6.25', unit: 'g', ingredient: 'Brun Farin' },
          { amount: '5', unit: 'g', ingredient: 'Majsstivelse' },
          { amount: '75', unit: 'g', ingredient: 'Broccoli' },
          { amount: '0.25', unit: 'stk', ingredient: 'Øko Lime' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Olivenolie' },
          { amount: '0.75', unit: 'dl', ingredient: 'Ris' },
          { amount: '0.75', unit: 'stk', ingredient: 'Forårsløg' }
        ]
      }
    

      const recipe2 = {
        name: 'MEXICANSK RISRET',
        image: 'https://www.valdemarsro.dk/wp-content/2020/01/mexicansk-risret.jpg',
        link: 'https://www.valdemarsro.dk/mexicansk-risret/?antal=1',
        estTime: '45 min.',
        ingredients: [
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '1', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.50', unit: 'stk', ingredient: 'Gulerod' },
          { amount: '0.25', unit: 'stk', ingredient: 'Squash' },
          { amount: '0.13', unit: 'stk', ingredient: 'Rød Chili' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Koriander' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Kanel' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Røget Paprika' },
          { amount: '75', unit: 'g', ingredient: 'Ris' },
          { amount: '1.50', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede Tomater' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Sorte Bønner' },
          { amount: '35', unit: 'g', ingredient: 'Majs' },
          { amount: '0.50', unit: 'stk', ingredient: 'Peberfrugt' },
          { amount: '31.25', unit: 'g', ingredient: 'Cherrytomater' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'stk', ingredient: 'Avocado' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '31.25', unit: 'g', ingredient: 'Cheddar' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Sriracha' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' }
        ]
      }

      const recipe3 = {
        name: 'CHILI CON CARNE',
        image: 'https://www.valdemarsro.dk/wp-content/2013/04/chili-con-carne-2.jpg',
        link: 'https://www.valdemarsro.dk/chili-con-carne/?antal=1',
        estTime: '50 min.',
        ingredients: [
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Kanel' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Koriander' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Chiliflager' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '87.50', unit: 'g', ingredient: 'Hakket Oksekød' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede Tomater' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Soltørrede Tomater' },
          { amount: '0.25', unit: 'dl', ingredient: 'Oksebouillon' },
          { amount: '0.50', unit: 'dåse', ingredient: 'Kidneybønner' },
          { amount: '10', unit: 'g', ingredient: 'Mørk Chokolade' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '31.25', unit: 'g', ingredient: 'Nachos' },
          { amount: '0.75', unit: 'dl', ingredient: 'Ris' },
          { amount: '0.50', unit: 'dl', ingredient: 'Cremefraiche' },
          { amount: '37.50', unit: 'g', ingredient: 'Cheddar' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '0.25', unit: 'stk', ingredient: 'Rød Chili' }
        ]
      }

      const recipe4 = {
        name: 'TORTELLINI I FAD',
        image: 'https://www.valdemarsro.dk/wp-content/2022/02/tortellini-fad.jpg',
        link: 'https://www.valdemarsro.dk/tortellini-i-fad/?antal=1',
        estTime: '35 min.',
        ingredients: [
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.75', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '12.50', unit: 'g', ingredient: 'Soltørrede Tomater' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Basilikum' },
          { amount: '50', unit: 'g', ingredient: 'Squash' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Chiliflager' },
          { amount: '1', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede' },
          { amount: '0.25', unit: 'dl', ingredient: 'Piskefløde' },
          { amount: '125', unit: 'g', ingredient: 'Frisk Mozzarella' },
          { amount: '18.75', unit: 'g', ingredient: 'Parmesan' },
          { amount: '31.25', unit: 'g', ingredient: 'Frisk' },
          { amount: '7.50', unit: 'g', ingredient: 'Rasp' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Tortelinni' }
        ]
      }

    const recipe5 = {
        name: 'TACO MED TORSK OG MANGOSALSA',
        image: 'https://www.valdemarsro.dk/wp-content/2022/02/tacos-torsk-mangosalsa.jpg',
        link: 'https://www.valdemarsro.dk/tacos-med-torsk/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '0.25', unit: 'stk', ingredient: 'Mango' },
          { amount: '1.25', unit: 'stk', ingredient: 'Cherrytomater' },
          { amount: '0.13', unit: 'stk', ingredient: 'Agurk' },
          { amount: '0.25', unit: 'stk', ingredient: 'Forårsløg' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '0.13', unit: 'stk', ingredient: 'Chili' },
          { amount: '0.25', unit: 'stk', ingredient: 'Øko Lime' },
          { amount: '200', unit: 'g', ingredient: 'Torskefilet' },
          { amount: '6.25', unit: 'g', ingredient: 'Rasp' },
          { amount: '0.13', unit: 'stk', ingredient: 'Citron' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Frisk Mynte' },
          { amount: '2', unit: 'tortillas', ingredient: 'Pandekager' },
          { amount: '15', unit: 'g', ingredient: 'Baby Spinat' },
          { amount: '0.50', unit: 'stk', ingredient: 'Avocado' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk' }
        ]
      }
    
    const recipe6 = {
        name: 'FISKELASAGNE',
        image: 'https://www.valdemarsro.dk/wp-content/2016/06/fiskelasagne-3.jpg',
        link: 'https://www.valdemarsro.dk/fiskelasagne/?antal=1',
        estTime: '1 time 30 min.',
        ingredients: [
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Oregano' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede Tomater' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.25', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '125', unit: 'g', ingredient: 'Spinat' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk' },
          { amount: '0.38', unit: 'dl', ingredient: 'Piskefløde' },
          { amount: '0.25', unit: 'knivspids', ingredient: 'Muskatnød' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Olivenolie' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Smør' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Hvedemel' },
          { amount: '1.25', unit: 'dl', ingredient: 'Mælk' },
          { amount: '31.25', unit: 'g', ingredient: 'Frisk Mozzarella' },
          { amount: '0.25', unit: 'drys', ingredient: 'Muskatnød' },
          { amount: '62.50', unit: 'g', ingredient: 'Laks' },
          { amount: '62.50', unit: 'g', ingredient: 'Torskefilet' },
          { amount: '18.75', unit: 'g', ingredient: 'Rejer' },
          { amount: '2.25', unit: 'stk', ingredient: 'Lasagneplader' },
          { amount: '6.25', unit: 'g', ingredient: 'Rasp' },
          { amount: '7.50', unit: 'g', ingredient: 'Parmesan' }
        ]
      }

    const recipe7 = {
        name: 'LAKSELASAGNE MED SPINAT',
        image: 'https://www.valdemarsro.dk/wp-content/2011/08/lakselasagne-spinat-opskrift-1.jpg',
        link: 'https://www.valdemarsro.dk/lakselasagne/?antal=1',
        estTime: '60 min.',
        ingredients: [
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '125', unit: 'g', ingredient: 'Spinat' },
          { amount: '0.25', unit: 'knivspids', ingredient: 'Muskatnød' },
          { amount: '43.75', unit: 'g', ingredient: 'Mascarpone' },
          { amount: '0.25', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede Tomater' },
          { amount: '0.13', unit: 'dl', ingredient: 'Piskefløde' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Oregano' },
          { amount: '125', unit: 'g', ingredient: 'Laks' },
          { amount: '2.50', unit: 'stk', ingredient: 'Lasagneplader' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
        ]
      }

    const recipe8 = {
        name: 'BYGOTTO MED VARMRØGET LAKS OG PERSILLE',
        image: 'https://www.valdemarsro.dk/wp-content/2013/09/bygotto-med-laks.jpg',
        link: 'https://www.valdemarsro.dk/bygotto-med-varmroget-laks/?antal=1',
        estTime: '40 min.',
        ingredients: [
          { amount: '52.50', unit: 'g', ingredient: 'Bygkerner' },
          { amount: '0.25', unit: 'stk', ingredient: 'Rødløg' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.13', unit: 'liter', ingredient: 'Kyllingefond' },
          { amount: '0.13', unit: 'liter', ingredient: 'Grøntsagsbouillon' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Flødeost' },
          { amount: '7.50', unit: 'g', ingredient: 'Parmesan' },
          { amount: '0.25', unit: 'dl', ingredient: 'Hvidvin' },
          { amount: '0.25', unit: 'stk', ingredient: 'Varmrøget Laks' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Bredbladet Persille' }
        ]
      }

    const recipe9 = {
        name: 'VIKINGEGRYDE',
        image: 'https://www.valdemarsro.dk/wp-content/2019/09/vikingegryde-1.jpg',
        link: 'https://www.valdemarsro.dk/vikingegryde/?antal=1',
        estTime: '50 min.',
        ingredients: [
          { amount: '1.25', unit: 'skiver', ingredient: 'Bacon' },
          { amount: '62.50', unit: 'g', ingredient: 'Champignon' },
          { amount: '100', unit: 'g', ingredient: 'Kyllingefilet' },
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.75', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '75', unit: 'g', ingredient: 'Squash' },
          { amount: '37.50', unit: 'g', ingredient: 'Wienerpølser' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Røget Paprika' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Sød Paprika' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Oregano' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Hvedemel' },
          { amount: '0.50', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '25', unit: 'g', ingredient: 'Tomatpuré' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede Tomater' },
          { amount: '0.50', unit: 'stk', ingredient: 'Peberfrugt' },
          { amount: '0.38', unit: 'dl', ingredient: 'Piskefløde' },
          { amount: '0.75', unit: 'dl', ingredient: 'Ris' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Bredbladet Persille' }
        ]
      }

    const recipe10 = {
        name: 'KYLLING MED PARMESAN, SALVIE OG TOMATER I FAD',
        image: 'https://www.valdemarsro.dk/wp-content/2019/10/kylling-salvie-linser.jpg',
        link: 'https://www.valdemarsro.dk/kylling-med-parmesan/?antal=1',
        estTime: '45 min.',
        ingredients: [
          { amount: '0.50', unit: 'dl', ingredient: 'Grønne Linser' },
          { amount: '0.50', unit: 'dl', ingredient: 'Kyllingebouillon' },
          { amount: '0.25', unit: 'kg', ingredient: 'Kyllingebryst' },
          { amount: '3.75', unit: 'frisk', ingredient: 'Salvie' },
          { amount: '12.50', unit: 'g', ingredient: 'Parmesan' },
          { amount: '18.75', unit: 'g', ingredient: 'Cherrytomater' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Smør' },
        ]
      }

    const recipe11 = {
        name: 'KYLLINGEQUESADILLAS MED KRYDRET TOMATSAUCE OG SPINAT',
        image: 'https://www.valdemarsro.dk/wp-content/2018/11/quesadillas-kylling.jpg',
        link: 'https://www.valdemarsro.dk/kylling-quesadillas/?antal=1',
        estTime: '40 min.',
        ingredients: [
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '1', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.50', unit: 'stk', ingredient: 'Kyllingebryst' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Koriander' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
          { amount: '0.13', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede' },
          { amount: '0.26', unit: 'stk', ingredient: 'Chili' },
          { amount: '0.25', unit: 'pakke', ingredient: 'Tortillas' },
          { amount: '50', unit: 'g', ingredient: 'Cheddar' },
          { amount: '31.25', unit: 'g', ingredient: 'Baby Spinat' },
          { amount: '0.25', unit: 'stk', ingredient: 'Avocado' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Cremefraiche' },
          { amount: '0.25', unit: 'dryp', ingredient: 'Sriracha' },
          { amount: '0.50', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.50', unit: 'håndfulde', ingredient: 'Frisk Koriander' }
        ]
      }

    const recipe12 = {
        name: 'JAMBALAYA',
        image: 'https://www.valdemarsro.dk/wp-content/2017/09/jambalaya-1.jpg',
        link: 'https://www.valdemarsro.dk/jambalaya/?antal=1',
        estTime: '40 min.',
        ingredients: [
          { amount: '62.50', unit: 'g', ingredient: 'Kyllingebryst' },
          { amount: '25', unit: 'g', ingredient: 'Chorizo' },
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.75', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Chiliflager' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Stødt Nellike' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Sød Paprika' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Timian' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Oregano' },
          { amount: '0.25', unit: 'stk', ingredient: 'Rød Peberfrugt' },
          { amount: '0.75', unit: 'stængler', ingredient: 'Bladselleri' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Tomatpuré' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede Tomater' },
          { amount: '75', unit: 'g', ingredient: 'Ris' },
          { amount: '1.50', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '31.25', unit: 'g', ingredient: 'Rejer' },
          { amount: '0.25', unit: 'stk', ingredient: 'Øko Lime' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Tabasco' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Persille' },
          { amount: '0.50', unit: 'stk', ingredient: 'Forårsløg' }
        ]
      }

    const recipe13 = {
        name: 'GRÆSK FARSBRØD',
        image: 'https://www.valdemarsro.dk/wp-content/2016/10/graesk-farsbroed.jpg',
        link: 'https://www.valdemarsro.dk/graesk-farsbroed/?antal=1',
        estTime: '60 min.',
        ingredients: [
          { amount: '125', unit: 'g', ingredient: 'Hakket' },
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'dl', ingredient: 'Mælk' },
          { amount: '0.13', unit: 'dl', ingredient: 'Piskefløde' },
          { amount: '0.50', unit: 'stk', ingredient: 'Æg' },
          { amount: '0.25', unit: 'dl', ingredient: 'Havregryn' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Frisk Timian' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Frisk Rosmarin' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Soltørrede' },
          { amount: '2.50', unit: 'stk', ingredient: 'Sorte Oliven' },
          { amount: '18.75', unit: 'g', ingredient: 'Feta' },
          { amount: '200', unit: 'g', ingredient: 'Babykartofler' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Smør' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Timian' }
        ]
      }

      const recipe14 = {
        name: 'PAD THAI MED KYLLING',
        image: 'https://www.valdemarsro.dk/wp-content/2019/05/pad-thai.jpg',
        link: 'https://www.valdemarsro.dk/pad-thai/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '0.75', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.50', unit: 'stk', ingredient: 'Skalotteløg' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Ingefær' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Chiliflager' },
          { amount: '62.50', unit: 'g', ingredient: 'Kyllingefilet' },
          { amount: '100', unit: 'g', ingredient: 'Nudler' },
          { amount: '1', unit: 'stk', ingredient: 'Æg' },
          { amount: '1', unit: 'stk', ingredient: 'Forårsløg' },
          { amount: '50', unit: 'g', ingredient: 'Bønnespirer' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Æblecidereddike' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Sukker' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Soja' },
          { amount: '1.25', unit: 'spsk', ingredient: 'Tamarind Paste' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '0.50', unit: 'stk', ingredient: 'Lime' },
          { amount: '12.50', unit: 'g', ingredient: 'Peanuts' },
          { amount: '0.25', unit: 'stk', ingredient: 'Chili' }
        ]
      }

      const recipe15 = {
        name: 'ONE POT PASTA MED CHORIZO',
        image: 'https://www.valdemarsro.dk/wp-content/2017/03/one-pot-pasta-4.jpg',
        link: 'https://www.valdemarsro.dk/one-pot-pasta/?antal=1',
        estTime: '25 min.',
        ingredients: [
          { amount: '100', unit: 'g', ingredient: 'Spaghetti' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Hakkede Tomater' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Basilikum' },
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '5', unit: 'stk', ingredient: 'Cherrytomater' },
          { amount: '0.13', unit: 'stk', ingredient: 'Squash' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Oregano' },
          { amount: '12.50', unit: 'g', ingredient: 'Chorizo' },
          { amount: '1.25', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Chiliflager' },
          { amount: '12.50', unit: 'g', ingredient: 'Parmesan' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' }
        ]
      }

      const recipe16 = {
        name: 'FAJITAS',
        image: 'https://www.valdemarsro.dk/wp-content/2021/04/fajitas.jpg',
        link: 'https://www.valdemarsro.dk/fajitas/?antal=1',
        estTime: '60 min.',
        ingredients: [
          { amount: '0.50', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Sukker' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Koriander' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Røget Paprika' },
          { amount: '112.50', unit: 'g', ingredient: 'Kyllingebryst' },
          { amount: '0.75', unit: 'stk', ingredient: 'Peberfrugt' },
          { amount: '0.75', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '2', unit: 'tortillas', ingredient: 'Pandekager' },
          { amount: '0.50', unit: 'håndfulde', ingredient: 'Frisk Koriander' },
          { amount: '1', unit: 'spsk', ingredient: 'Sriracha' },
          { amount: '0.25', unit: 'stk', ingredient: 'Avocado' }
        ]
      }

      const recipe17 = {
        name: 'VEGETAR PANANG KARRY MED KIKÆRTER OG GRØNTSAGER',
        image: 'https://www.valdemarsro.dk/wp-content/2020/05/panang-curry-vegetar.jpg',
        link: 'https://www.valdemarsro.dk/vegetar-panang-karry/?antal=1',
        estTime: '40 min.',
        ingredients: [
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '1', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '5', unit: 'g', ingredient: 'Ingefær' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Rød Karrypasta' },
          { amount: '0.75', unit: 'stk', ingredient: 'Gulerod' },
          { amount: '50', unit: 'g', ingredient: 'Broccoli' },
          { amount: '25', unit: 'g', ingredient: 'Edamamebønner' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Kokosmælk' },
          { amount: '0.50', unit: 'stk', ingredient: 'Peberfrugt' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Kikærter' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Peanutbutter' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Sukker' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Soja' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.75', unit: 'dl', ingredient: 'Ris' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '0.25', unit: 'dl', ingredient: 'Saltede Peanuts' }
        ]
      }

      const recipe18 = {
        name: 'STEGTE RIS MED ÆG',
        image: 'https://www.valdemarsro.dk/wp-content/2020/01/stegte-ris.jpg',
        link: 'https://www.valdemarsro.dk/stegte-ris/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '1', unit: 'stk', ingredient: 'Æg' },
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Karry' },
          { amount: '75', unit: 'g', ingredient: 'Ris' },
          { amount: '0.75', unit: 'stk', ingredient: 'Gulerod' },
          { amount: '37.50', unit: 'g', ingredient: 'Edemamebønner' },
          { amount: '0.25', unit: 'stk', ingredient: 'Peberfrugt' },
          { amount: '0.50', unit: 'stk', ingredient: 'Forårsløg' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Sukker' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Soja' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Cashewnødder' },
          { amount: '0.13', unit: 'stk', ingredient: 'Chili' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' }
        ]
      }

    const recipe19 = {
        name: 'CHANA MASALA',
        image: 'https://www.valdemarsro.dk/wp-content/2020/02/chana-masala.jpg',
        link: 'https://www.valdemarsro.dk/chana-masala/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
          { amount: '1.25', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Ingefær' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Koriander' },
          { amount: '0.13', unit: 'stk', ingredient: 'Chili' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Stødt Kardemomme' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Gurkemeje' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Garam Masala' },
          { amount: '0.50', unit: 'dåser', ingredient: 'Hakkede Tomater' },
          { amount: '0.50', unit: 'dåser', ingredient: 'Kikærter' },
          { amount: '0.25', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Sukker' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.75', unit: 'dl', ingredient: 'Ris' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' }
        ]
      }

      const recipe20 = {
        name: 'RED THAI CURRY',
        image: 'https://www.valdemarsro.dk/wp-content/2019/11/red-thai-curry.jpg',
        link: 'https://www.valdemarsro.dk/red-thai-curry/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Ingefær' },
          { amount: '0.38', unit: 'tsk', ingredient: 'Karry' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Rød Karrypasta' },
          { amount: '0.50', unit: 'dåser', ingredient: 'Kokosmælk' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Brun Farin' },
          { amount: '0.50', unit: 'stk', ingredient: 'Gulerod' },
          { amount: '0.50', unit: 'stk', ingredient: 'Kartoffel' },
          { amount: '0.25', unit: 'stk', ingredient: 'Broccoli' },
          { amount: '0.25', unit: 'stk', ingredient: 'Squash' },
          { amount: '25', unit: 'g', ingredient: 'Blomkål' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.75', unit: 'dl', ingredient: 'Ris' },
          { amount: '0.25', unit: 'dl', ingredient: 'Saltede Peanuts' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' }
        ]
      }

    const recipe21 = {
        name: 'TOM YUM SUPPE',
        image: 'https://www.valdemarsro.dk/wp-content/2017/01/Tom-yum-suppe-opskrift.jpg',
        link: 'https://www.valdemarsro.dk/tom-yum-suppe/?antal=1',
        estTime: '40 min.',
        ingredients: [
          { amount: '37.50', unit: 'g', ingredient: 'Rejer' },
          { amount: '0.25', unit: 'liter', ingredient: 'Grøntsagsbouillon' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Tom Yum Pasta' },
          { amount: '37.50', unit: 'g', ingredient: 'Champignon' },
          { amount: '1.25', unit: 'stk', ingredient: 'Skalotteløg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'stængel', ingredient: 'Citrongræs' },
          { amount: '0.75', unit: 'stk', ingredient: 'Kaffirblade' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Galangarod' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Ingefær' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Sukker' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.75', unit: 'stk', ingredient: 'Chili' },
          { amount: '1.25', unit: 'stk', ingredient: 'Cherrytomater' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Kokosmælk' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.50', unit: 'håndfuld', ingredient: 'Frisk Koriander' }
        ]
      }

      const recipe22 = {
        name: 'CITRONGRÆS MARINERET MØRBRAD MED NUDLER',
        image: 'https://www.valdemarsro.dk/wp-content/2022/03/citrongraes-moerbrad-nudler.jpg',
        link: 'https://www.valdemarsro.dk/citrongraes-moerbrad/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '0.25', unit: 'stk', ingredient: 'Svinemørbrad' },
          { amount: '0.25', unit: 'stk', ingredient: 'Citrongræs' },
          { amount: '3.75', unit: 'g', ingredient: 'Ingefær' },
          { amount: '0.50', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Sukker' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '50', unit: 'g', ingredient: 'Nudler' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '50', unit: 'g', ingredient: 'Spidskål' },
          { amount: '0.13', unit: 'stk', ingredient: 'Agurk' },
          { amount: '0.25', unit: 'stk', ingredient: 'Avocado' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Mynte' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Basilikum' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '10', unit: 'g', ingredient: 'Saltede' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Chiliflager' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' }
        ]
      }

      const recipe23 = {
        name: 'TACOSALAT MED KYLLING',
        image: 'https://www.valdemarsro.dk/wp-content/2019/05/tacosalat_kylling.jpg',
        link: 'https://www.valdemarsro.dk/taco-salat/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '125', unit: 'g', ingredient: 'Kyllingefilet' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Koriander' },
          { amount: '0.50', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Sød Paprika' },
          { amount: '75', unit: 'g', ingredient: 'Majs' },
          { amount: '0.50', unit: 'stk', ingredient: 'Avocado' },
          { amount: '0.50', unit: 'stk', ingredient: 'Rødløg' },
          { amount: '60', unit: 'g', ingredient: 'Blandet' },
          { amount: '1', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '5', unit: 'stk', ingredient: 'Cherrytomater' },
          { amount: '0.25', unit: 'stk', ingredient: 'Agurk' },
          { amount: '37.50', unit: 'g', ingredient: 'Cheddar' },
          { amount: '50', unit: 'g', ingredient: 'Nachos' },
          { amount: '0.50', unit: 'stk', ingredient: 'Chili' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Smør' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.50', unit: 'dl', ingredient: 'Cremefraiche' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
          { amount: '0.50', unit: 'stk', ingredient: 'Lime' },
        ]
      }

    const recipe24 = {
        name: 'FRITTATA MED SQUASH OG CHORIZO',
        image: 'https://www.valdemarsro.dk/wp-content/2018/06/frittata-squash.jpg',
        link: 'https://www.valdemarsro.dk/frittata/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '12.50', unit: 'g', ingredient: 'Chorizo' },
          { amount: '2', unit: 'stk', ingredient: 'Æg' },
          { amount: '0.25', unit: 'dl', ingredient: 'Mælk' },
          { amount: '12.50', unit: 'g', ingredient: 'Ost' },
          { amount: '0.50', unit: 'stk', ingredient: 'Squash' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Purløg' }
        ]
      }
    
    const recipe25 = {
        name: 'TANDOORI KYLLING',
        image: 'https://www.valdemarsro.dk/wp-content/2017/04/tandoori-kylling.jpg',
        link: 'https://www.valdemarsro.dk/tandoori-kylling/?antal=1',
        estTime: '4 timer',
        ingredients: [
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Kardemomme' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Kanel' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Stødt Nellike' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Stødt Spidskommen' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Stødt Koriander' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Sød Paprika' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Gurkemeje' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Ingefær' },
          { amount: '0.75', unit: 'dl', ingredient: 'Yoghurt' },
          { amount: '0.06', unit: 'stk', ingredient: 'Citron' },
          { amount: '0.13', unit: 'dl', ingredient: 'Olivenolie' },
          { amount: '0.75', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '12.50', unit: 'g', ingredient: 'Tomatpuré' },
          { amount: '1', unit: 'stk', ingredient: 'Kyllingelår' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' }
        ]
      }

    const recipe26 = {
        name: 'FRISKE FORÅRSRULLER MED NAKKEKOTELETTER',
        image: 'https://www.valdemarsro.dk/wp-content/2016/08/friske-foraarsruller.jpg',
        link: 'https://www.valdemarsro.dk/friske-foraarsruller/?antal=1',
        estTime: '1 time 30 min.',
        ingredients: [
          { amount: '0.75', unit: 'stk', ingredient: 'Nakkekoteletter' },
          { amount: '0.25', unit: 'stængel', ingredient: 'Citrongræs' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Honning' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Ingefær' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '3', unit: 'stk', ingredient: 'Rispapir' },
          { amount: '0.50', unit: 'stk', ingredient: 'Nektarin' },
          { amount: '0.25', unit: 'stk', ingredient: 'Hjertesalat' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Mynte' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Basilikum' },
          { amount: '0.25', unit: 'stk', ingredient: 'Chili' },
          { amount: '0.13', unit: 'dl', ingredient: 'Saltede Peanuts' },
          { amount: '0.13', unit: 'dl', ingredient: 'Hoisin' },
          { amount: '0.13', unit: 'dl', ingredient: 'Vand' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Kokossukker' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Saltede' }
        ]
      }

    const recipe27 = {
        name: 'PHO GA - VIETNAMESISK NUDELSUPPE MED KYLLING',
        image: 'https://www.valdemarsro.dk/wp-content/2016/08/pho-ga-vietnamesisk-kyllingesuppe.jpg',
        link: 'https://www.valdemarsro.dk/pho-ga-vietnamesisk-nudelsuppe/?antal=1',
        estTime: '3 timer',
        ingredients: [
          { amount: '0.25', unit: 'stk', ingredient: 'Suppehøne' },
          { amount: '0.25', unit: 'liter', ingredient: 'Hønsebouillon' },
          { amount: '0.50', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'stk', ingredient: 'Gulerod' },
          { amount: '0.25', unit: 'stk', ingredient: 'Kanelstang' },
          { amount: '1.50', unit: 'hele', ingredient: 'Nelliker' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Ingefær' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Sukker' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Æblecidereddike' },
          { amount: '0.25', unit: 'pakke', ingredient: 'Nudler' },
          { amount: '0.50', unit: 'tsk', ingredient: 'Sukker' },
          { amount: '1', unit: 'stk', ingredient: 'Forårsløg' },
          { amount: '0.25', unit: 'stk', ingredient: 'Chili' },
          { amount: '0.25', unit: 'pakke', ingredient: 'Bønnespirer' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Mynte' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Thaibasilikum' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' }
        ]
      }

    const recipe28 = {
        name: 'WRAPS MED RISTEDE KIKÆRTER, BLOMKÅL OG SUMAK',
        image: 'https://www.valdemarsro.dk/wp-content/2017/01/blomkaal_kikaerter.jpg',
        link: 'https://www.valdemarsro.dk/wraps-med-ristede-kikaerter-og-blomkaal-med-sumak/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '31.25', unit: 'g', ingredient: 'Kikærter' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.13', unit: 'stk', ingredient: 'Blomkål' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Bredbladet Persille' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Kapers' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Sumak' },
          { amount: '0.25', unit: 'stk', ingredient: 'Citron' },
          { amount: '7.50', unit: 'g', ingredient: 'Rucola' },
          { amount: '0.13', unit: 'stk', ingredient: 'Agurk' },
          { amount: '0.75', unit: 'stk', ingredient: 'Tomat' },
          { amount: '1.50', unit: 'stk', ingredient: 'Tortillas' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Græskarkerner' }
        ]
      }

    const recipe29 = {
        name: 'KOTELETTER MED CHAMPIGNON OG FLØDE',
        image: 'https://www.valdemarsro.dk/wp-content/2016/04/koteletter-champignon.jpg',
        link: 'https://www.valdemarsro.dk/koteletter/?antal=1',
        estTime: '50 min.',
        ingredients: [
          { amount: '0.75', unit: 'stk', ingredient: 'Koteletter' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'stk', ingredient: 'Løg' },
          { amount: '62.50', unit: 'g', ingredient: 'Champignon' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Smør' },
          { amount: '62.50', unit: 'g', ingredient: 'Kartoffel' },
          { amount: '62.50', unit: 'g', ingredient: 'Jordskokker' },
          { amount: '0.06', unit: 'liter', ingredient: 'Piskefløde' },
          { amount: '0.25', unit: 'knivspids', ingredient: 'Muskatnød' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Bredbladet Persille' }
        ]
      }

    const recipe30 = {
        name: 'FRIED RICE MED KYLLING',
        image: 'https://www.valdemarsro.dk/wp-content/2016/08/fried-rice.jpg',
        link: 'https://www.valdemarsro.dk/fried-rice-med-kylling/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '0.25', unit: 'stk', ingredient: 'Rødløg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.25', unit: 'stk', ingredient: 'Kyllingebryst' },
          { amount: '1.50', unit: 'dl', ingredient: 'Ris' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Sukker' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Soja' },
          { amount: '0.75', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.50', unit: 'stk', ingredient: 'Gulerod' },
          { amount: '0.25', unit: 'stk', ingredient: 'Tomat' },
          { amount: '0.25', unit: 'stk', ingredient: 'Peberfrugt' },
          { amount: '0.50', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.50', unit: 'stk', ingredient: 'Forårsløg' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Cashewnødder' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Frisk Koriander' },
          { amount: '0.25', unit: 'stk', ingredient: 'Chili' }
        ]
      }

      const recipe31 = {
        name: 'GRØNTSAGSGRYDE MED KIKÆRTER',
        image: 'https://www.valdemarsro.dk/wp-content/2016/03/groentsagsgryde_opskrift.jpg',
        link: 'https://www.valdemarsro.dk/varmende-nem-og-krydret-groentsagsgryde-med-kikaerter/?antal=1',
        estTime: '30 min.',
        ingredients: [
          { amount: '0.50', unit: 'tsk', ingredient: 'Stødt Spidskommen' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Ingefær' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Kardemomme' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Stødt Koriander' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Cayenne Peber' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Kanel' },
          { amount: '0.25', unit: 'stk', ingredient: 'Rødløg' },
          { amount: '0.50', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '100', unit: 'g', ingredient: 'Butternut Squash' },
          { amount: '1', unit: 'stk', ingredient: 'Gulerod' },
          { amount: '0.50', unit: 'dåser', ingredient: 'Hakkede Tomater' },
          { amount: '0.75', unit: 'dl', ingredient: 'Grøntsagsbouillon' },
          { amount: '0.25', unit: 'stk', ingredient: 'Broccoli' },
          { amount: '0.25', unit: 'stk', ingredient: 'Squash' },
          { amount: '0.25', unit: 'dåse', ingredient: 'Kikærter' },
          { amount: '0.13', unit: 'stk', ingredient: 'Citron' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Olivenolie' },
          { amount: '0.25', unit: 'dl', ingredient: 'Cremefraiche' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Bredbladet Persille' },
          { amount: '0.75', unit: 'dl', ingredient: 'Ris' }
        ]
      }

    const recipe32 = {
        name: 'BANH MI BURGER',
        image: 'https://www.valdemarsro.dk/wp-content/2014/08/burger-banh-mi.jpg',
        link: 'https://www.valdemarsro.dk/banh-mi-burger/?antal=1',
        estTime: '1 time 30 min.',
        ingredients: [
          { amount: '1', unit: 'stk', ingredient: 'Burgerboller' },
          { amount: '75', unit: 'g', ingredient: 'Culottesteg' },
          { amount: '0.75', unit: 'stk', ingredient: 'Gulerod' },
          { amount: '0.13', unit: 'stk', ingredient: 'Agurk' },
          { amount: '0.25', unit: 'håndfuld', ingredient: 'Bredbladet Persille' },
          { amount: '0.25', unit: 'dl', ingredient: 'Mayonnaise' },
          { amount: '0.25', unit: 'dl', ingredient: 'Græsk Yoghurt' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Tabasco' },
          { amount: '0.25', unit: 'fed', ingredient: 'Hvidløg' },
          { amount: '0.13', unit: 'tsk', ingredient: 'Røget' },
          { amount: '0.25', unit: 'spsk', ingredient: 'Fishsauce' },
          { amount: '0.25', unit: 'stk', ingredient: 'Lime' },
          { amount: '0.25', unit: 'tsk', ingredient: 'Ingefær' },
        ]
      }
  
//    Halloumi_Tacos, Pasta_m_ost_bacon, Middelhavs_Havaborre, Spicy_Oksekød_på_Bulgur, , Fiskefrikadeller_m_ovn_kartofler_og_gulerodssalat, Fajita_Bowl, , Sød_chililaks, greek_chicken_and_potatoes_recipe

let recipeData = [Gyros, Lasagne, Chili_sin_carne, Boller_i_karry, Orientalsk_risret_med_oksekød, Buddha_Bowl, Panang_karry, recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8, recipe9, recipe10, recipe11, recipe12, recipe13, recipe14, recipe15, recipe16, recipe17, recipe18, recipe19, recipe20, recipe21, recipe22, recipe23, recipe24, recipe25, recipe26, recipe27, recipe28, recipe29, recipe30, recipe31, recipe32]

export default recipeData;

