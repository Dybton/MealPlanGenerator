
let Recipe = class {
    constructor(name, image, ingredients, ) {
      this.name = name.toUpperCase();
      this.locked = false;
      this.ingredients = ingredients; // Needs to be an array of objects containing: ingriedient, amount and maybe brand?
      this.image = image;

      // Function that takes every ingredient.ingredient and formats it properly 
      function formatIngredients(ingredients) {

      }
    }




    // function firstLetterCapitalized(input) {
    //     let output = input.toLowerCase();
    //     output = output[0].toUpperCase() + output.substring(1);
    //     output.trim();
    //     return output
    //   }

    
};

console.log("yiss")

// let Ingredient = class {
//     constructor(name) {
//         this.name
//     }
// }


// let Ingredient = class {
//     constructor(name, brand, ingredients) {
//         this.name = name;
//         this.id = id; // here we could also use an id generator
//         this.ingredients = ingredients; // Needs to be an array of objects containing: ingriedient, amount and maybe brand?
//       }
// }

// ingrident could have the same amount in differnet units of meassuremnet


const Gyros = new Recipe("Gyros", "https://img.mummum.dk/wp-content/uploads/2020/06/9DF5C32D-C4AB-455F-8B10-C8A7CEEF7460-1350x1013.jpg", [{ingredient: "Pitabrød", amount: 6, unit: "stk"}, {ingredient: "Kyllingebryst", amount: 200, unit: "gram"}, {ingredient: "Græsk Yogurt", amount: 1, unit: "deciliter"}, {ingredient: "Græsk Yogurt", amount: 1, unit: "deciliter"}, {ingredient: "Citron", amount: 1, unit: "stk"}, {ingredient: "Tomat", amount: 4, unit: "stk"}, {ingredient: "Rødløg", amount: 1, unit: "stk"}, {ingredient: "Koriander", amount: 1, unit: "tsk"}, {ingredient: "Hvidløg", amount: 1, unit: "fed"}, {ingredient: "Røget paprika", amount: 2, unit: "spsk"}, {ingredient: "Tørret Timian", amount: 1, unit: "spsk"}, {ingredient: "Hjertesalat", amount: 1, unit: "stk"}, {ingredient: "Olivenolie", amount: 1, unit: "spsk"}])
const Halloumi_Tacos = new Recipe("Halloumi Tacos", "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/HF191125_R05_W04_SE_C12343603-1_Main_low-f2a950e1.jpg", [{ingredient: "Halloumi", amount: 200, unit: "gram"}, {ingredient: "Rødløg", amount: 2, unit: "stk"}, {ingredient: "Tomat", amount: 2, unit: "stk"}, {ingredient: "Hjertesalat", amount: 1, unit: "stk"}, {ingredient: "Tortilla pandekager", amount: 6, unit: "stk"}, {ingredient: "Avocado", amount: 1, unit: "stk"}, {ingredient: "Mayonaise", amount: 25, unit: "gram"}, {ingredient: "Citron", amount: 1, unit: "stk"}, {ingredient: "Hvidløg", amount: 1, unit: "fed"}, {ingredient: "Agurk", amount: 1, unit: "stk"}, {ingredient: "Tørret Oregano", amount: 1, unit: "spsk"}])
const Pasta_m_ost_bacon = new Recipe("Paste med ost og bacon", "https://www.easypeasyfoodie.com/wp-content/uploads/2016/08/Gargano-Pasta-1-1024x1024.jpg", [{ingredient: "Frisk Pasta", amount: 2, unit: "pakker"}, {ingredient: "Bacon", amount: 150, unit: "gram"}, {ingredient: "Creme Fraiche", amount: 3, unit: "spsk"}, {ingredient: "Blue Castello", amount: 75, unit: "gram"}, {ingredient: "Broccoli", amount: 1, unit: "stk"}])
const Middelhavs_Havaborre = new Recipe("Middelhavs Havaborre", "https://d1yfn1dfres2va.cloudfront.net/001/f4/3c/f43c38f176161cfbc9530c332eeceda2_640m.jpg", [{ingredient: "Aubergine", amount: 1, unit: "stk"}, {ingredient: "Olivenolie", amount: 1, unit: "spsk"}, {ingredient: "Rødløg", amount: 1, unit: "stk"}, {ingredient: "Hvidløg", amount: 1, unit: "stk"}, {ingredient: "Tomat", amount: 2, unit: "stk"}, {ingredient: "Citron", amount: 1, unit: "stk"}, {ingredient: "Hvidvin", amount: 1, unit: "skvt"}, {ingredient: "Grøntsagsbouillon", amount: 2, unit: "spsk"}, {ingredient: "Hakket Tomat", amount: 2, unit: "spsk"}, {ingredient: "Tørret Oregano", amount: 1, unit: "spsk"}, {ingredient: "Havborre", amount: 300, unit: "gram"}, {ingredient: "Couscous", amount: 250, unit: "gram"}, {ingredient: "Hakkede Oliven", amount: 50, unit: "gram"}])
const Spicy_Oksekød_på_Bulgur = new Recipe("Spicy Oksekød på Bulgur", "https://dagenstallerken.dk/wp-content/uploads/2017/04/Orientalsk-oksek%C3%B8d1.jpg",[{ingredient: "Hakket Oksekød", amount: 250, unit: "gram"}, {ingredient: "Gulerød", amount: 2, unit: "stk"}, {ingredient: "Squash", amount: 0.5, unit: "stk"}, {ingredient: "Ærter", amount: 100, unit: "gram"}, {ingredient: "Rødløg", amount: 1, unit: "stk"}, {ingredient: "Rosiner", amount: 50, unit: "gram"}, {ingredient: "Paprika", amount: 1, unit: "tsk"}, {ingredient: "Spidskommen", amount: 2, unit: "tsk"}, {ingredient: "Chiliflager", amount: 1, unit: "tsk"}, {ingredient: "Citronsaft", amount: 1, unit: "spsk"}, {ingredient: "Fuldkornsbulgur", amount: 1.5, unit: "deciliter"}, {ingredient: "Boullionterning", amount: 1, unit: "stk"}])
const Lasagne = new Recipe("Lasagne", "https://www.valdemarsro.dk/wp-content/lasagne3.jpg",[{ingredient: "Hakket Oksekød", amount: 250, unit: "gram"}, {ingredient: "Gulerød", amount: 2, unit: "stk"}, {ingredient: "Hvidløg", amount: 3, unit: "fed"}, {ingredient: "Bladselleri", amount: 3, unit: "stilke"}, {ingredient: "Rødløg", amount: 1, unit: "stk"}, {ingredient: "Tomatpure", amount: 35, unit: "gram"}, {ingredient: "Hakkede Tomater", amount: 400, unit: "gram"}, {ingredient: "Oksebouillonterning", amount: 1, unit: "stk"}, {ingredient: "Basilikum", amount: 1, unit: "tsk"}, {ingredient: "Paprika", amount: 1, unit: "tsk"}, {ingredient: "Mælk", amount: 4, unit: "deciliter"}, {ingredient: "Mozerella", amount: 200, unit: "gram"}, {ingredient: "Lasagneplader", amount: 200, unit: "gram"}])
const Fiskefrikadeller_m_ovn_kartofler_og_gulerodssalat = new Recipe("Fiskefrikadeller m ovn-kartofler og gulerodssalat", "https://www.valdemarsro.dk/wp-content/2012/09/fiskefrikadeller.jpg", [{ingredient: "Rødløg", amount: 1, unit: "stk"}, {ingredient: "Squash", amount: 0.5, unit: "stk"}, {ingredient: "Torskefars", amount: 150, unit: "gram"}, {ingredient: "Laksefars", amount: 150, unit: "gram"}, {ingredient: "Æg", amount: 1, unit: "stk"}, {ingredient: "Dild", amount: 1, unit: "Håndfuld"}, {ingredient: "Hvedemel", amount: 20, unit: "gram"}, {ingredient: "Smør", amount: 1, unit: "spsk"}, {ingredient: "Gulerod", amount: 3, unit: "stk"}, {ingredient: "Æble", amount: 2, unit: "stk"}, {ingredient: "Honning", amount: 1, unit: "spsk"}, {ingredient: "Rosiner", amount: 100, unit: "gram"}])
const Fajita_Bowl = new Recipe("Fajita Bowl", "https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26232527/5633964.jpg", [{ingredient: "Kyllingefond-terninger", amount: 2, unit: "stk"}, {ingredient: "Ris", amount: 200, unit: "gram"}, {ingredient: "Kyllingebryst", amount: 200, unit: "gram"}, {ingredient: "Pepperfrugt", amount: 2, unit: "stk"}, {ingredient: "Løg", amount: 2, unit: "stk"}, {ingredient: "Kidneybønner", amount: 1, unit: "Dåse"}, {ingredient: "Salsa", amount: 200, unit: "gram"}, {ingredient: "Paprika", amount: 1, unit: "tsk"}, {ingredient: "Koriander", amount: 1, unit: "tsk"}, {ingredient: "Spidskommen", amount: 1, unit: "spsk"}, {ingredient: "Hvidløg", amount: 2, unit: "fed"}])
const Chili_sin_carne = new Recipe("Chili sin carne", "https://www.valdemarsro.dk/wp-content/2017/09/chili-sin-carne-1.jpg",[{ingredient: "Spidskommen", amount: 1, unit: "spsk"}, {ingredient: "Kanel", amount: 1, unit: "tsk"}, {ingredient: "Koriander", amount: 1, unit: "tsk"}, {ingredient: "Chiliflager", amount: 0.5, unit: "tsk"}, {ingredient: "Løg", amount: 1, unit: "stk"}, {ingredient: "Kidneybønner", amount: 1, unit: "Dåse"}, {ingredient: "Salsa", amount: 100, unit: "gram"}, {ingredient: "Paprika", amount: 1, unit: "tsk"}, {ingredient: "Squash", amount: 0.5, unit: "stk"}, {ingredient: "Bladselleri", amount: 2, unit: "stænger"}, {ingredient: "Aubergine", amount: 0.5, unit: "stk"}, {ingredient: "Soltørrede Tomater", amount: 2, unit: "spsk"}, {ingredient: "Hakkede Tomater", amount: 1, unit: "dåse"}, {ingredient: "Grøntsagsbouillon", amount: 1, unit: "deciliter"}, {ingredient: "Mørk chokolade", amount: 30, unit: "gram"}, {ingredient: "Olivenolie", amount: 1, unit: "spsk"}, {ingredient: "Brune ris", amount: 200, unit: "gram"}, {ingredient: "Creme fraiche", amount: 50, unit: "gram"}, {ingredient: "Cheddarost", amount: 100, unit: "gram"}, {ingredient: "Lime", amount: 1, unit: "stk"}])
const Sød_chililaks = new Recipe("Sød chililaks", "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/HF210906_R05_W43_SE_C12343992-2_KB_Main_low-f960d661.jpg", [{ingredient: "Grøntsagsboulion", amount: 1, unit: "stk"}, {ingredient: "Ris", amount: 150, unit: "gram"}, {ingredient: "Gulerod", amount: 1, unit: "stk"}, {ingredient: "Pak Choi", amount: 200, unit: "gram"}, {ingredient: "Squash", amount: 0.5, unit: "stk"}, {ingredient: "Ingefær", amount: 0.5, unit: "stk"}, {ingredient: "Hvidløg", amount: 1, unit: "stk"}, {ingredient: "Forårsløg", amount: 1, unit: "stk"}, {ingredient: "Lime", amount: 1, unit: "stk"}, {ingredient: "Soya", amount: 25, unit: "milliliter"}, {ingredient: "Sød chilisauce", amount: 40, unit: "gram"}, {ingredient: "Laksefilet", amount: 250, unit: "gram"}])
const Boller_i_karry = new Recipe("Boller i karry", "https://www.valdemarsro.dk/wp-content/2010/10/boller_karry-1.jpg",[
  {
      "ingredient": "hakket svinekød",
      "amount": 400,
      "unit": "g"
  },
  {
      "ingredient": "løg",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "mælk",
      "amount": 3.5,
      "unit": "dl"
  },
  {
      "ingredient": "æg",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "havregryn",
      "amount": 1,
      "unit": "dl"
  },
  {
      "ingredient": "smør",
      "amount": 2,
      "unit": "spsk"
  },
  {
      "ingredient": "karry",
      "amount": 2,
      "unit": "tsk"
  },
  {
      "ingredient": "spidskommen",
      "amount": 1,
      "unit": "tsk"
  },
  {
      "ingredient": "stødt koriander",
      "amount": 1,
      "unit": "tsk"
  },
  {
      "ingredient": "hvedemel",
      "amount": 3,
      "unit": "spsk"
  },
  {
      "ingredient": "grøntsagsbouillon",
      "amount": 3,
      "unit": "dl"
  },
  {
      "ingredient": "basmati ris",
      "amount": 4,
      "unit": "dl"
  },
  {
      "ingredient": "æble",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "mango",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "persille",
      "amount": 1,
      "unit": "stk"
  }
])
const Orientalsk_risret_med_oksekød
= new Recipe("Orientalsk risret med oksekød", "https://www.valdemarsro.dk/wp-content/2022/02/orientalsk-risret.jpg",[
  {
      "ingredient": "hvidløg",
      "amount": 2,
      "unit": "stk"
  },
  {
      "ingredient": "løg",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "gulerod",
      "amount": 100,
      "unit": "g"
  },
  {
      "ingredient": "karry",
      "amount": 1,
      "unit": "spsk"
  },
  {
      "ingredient": "gurkemeje",
      "amount": 0.5,
      "unit": "tsk"
  },
  {
      "ingredient": "hakket oksekød",
      "amount": 200,
      "unit": "g"
  },
  {
      "ingredient": "squash",
      "amount": 125,
      "unit": "g"
  },
  {
      "ingredient": "pepperfrugt",
      "amount": 1,
      "unit": "tsk"
  },
  {
      "ingredient": "grøntsagsbouillon",
      "amount": 4,
      "unit": "dl"
  },
  {
      "ingredient": "basmati ris",
      "amount": 100,
      "unit": "g"
  },
  {
      "ingredient": "majs",
      "amount": 70,
      "unit": "g"
  },
  {
      "ingredient": "ærter",
      "amount": 90,
      "unit": "g"
  },
  {
      "ingredient": "olivenolie",
      "amount": 0.5,
      "unit": "tsk"
  },
  {
      "ingredient": "persille",
      "amount": 0.5,
      "unit": "håndfuld"
  }
])
const Buddha_Bowl = new Recipe("Buddha Bowl", "https://www.valdemarsro.dk/wp-content/2018/09/buddha-bowl-1.jpg", [
  {
      "ingredient": "brune ris",
      "amount": 1,
      "unit": "dl"
  },
  {
      "ingredient": "squash",
      "amount": 0.5,
      "unit": "stk"
  },
  {
      "ingredient": "cherrytomater",
      "amount": 8,
      "unit": "stk"
  },
  {
      "ingredient": "rødløg",
      "amount": 0.5,
      "unit": "stk"
  },
  {
      "ingredient": "edemanebønner",
      "amount": 25,
      "unit": "g"
  },
  {
      "ingredient": "sorte bønner",
      "amount": 0.5,
      "unit": "dåse"
  },
  {
      "ingredient": "avocado",
      "amount": 0.5,
      "unit": "stk"
  },
  {
      "ingredient": "rucula",
      "amount": 70,
      "unit": "g"
  },
  {
      "ingredient": "sesamfrø",
      "amount": 1,
      "unit": "tsk"
  },
  {
      "ingredient": "frisk mynte",
      "amount": 0.5,
      "unit": "håndfuld"
  },
  {
      "ingredient": "hummus",
      "amount": 1,
      "unit": "dl"
  },
  {
      "ingredient": "olivenolie",
      "amount": 2,
      "unit": "spsk"
  },
  {
      "ingredient": "tahin",
      "amount": 0.5,
      "unit": "spsk"
  },
  {
      "ingredient": "hvidløg",
      "amount": 1,
      "unit": "fed"
  },
  {
      "ingredient": "citronsaft",
      "amount": 1,
      "unit": "spsk"
  },
  {
      "ingredient": "stødt spidskommen",
      "amount": 0.5,
      "unit": "tsk"
  },
  {
      "ingredient": "kikærter",
      "amount": 1,
      "unit": "dåse"
  },
  {
      "ingredient": "paprika",
      "amount": 0.5,
      "unit": "tsk"
  }
])
const Wienerschnitzel = new Recipe("Wienerschnitzel", "https://www.valdemarsro.dk/wp-content/2021/05/wienerschnitzel.jpg",[
  {
      "ingredient": "kalveschnitzel",
      "amount": 300,
      "unit": "g"
  },
  {
      "ingredient": "hvedemel",
      "amount": 0.5,
      "unit": "dl"
  },
  {
      "ingredient": "æg",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "rasp",
      "amount": 1,
      "unit": "dl"
  },
  {
      "ingredient": "olivenolie",
      "amount": 2,
      "unit": "spsk"
  },
  {
      "ingredient": "smør",
      "amount": 15,
      "unit": "g"
  },
  {
      "ingredient": "citron",
      "amount": 0.5,
      "unit": "stk"
  },
  {
      "ingredient": "benfri sild",
      "amount": 0.5,
      "unit": "dåse"
  },
  {
      "ingredient": "pepperrod",
      "amount": 1,
      "unit": "spsk"
  },
  {
      "ingredient": "kapers",
      "amount": 1,
      "unit": "spsk"
  },
  {
      "ingredient": "kartoffel",
      "amount": 0.5,
      "unit": "kg"
  },
  {
      "ingredient": "ærter",
      "amount": 90,
      "unit": "g"
  },
  {
      "ingredient": "olivenolie",
      "amount": 0.5,
      "unit": "tsk"
  },
  {
      "ingredient": "persille",
      "amount": 0.5,
      "unit": "håndfuld"
  },
  {
      "ingredient": "ærter",
      "amount": 150,
      "unit": "g"
  }
])
const Panang_karry = new Recipe("Panang karry", "https://www.valdemarsro.dk/wp-content/2020/01/penang-kylling.jpg",[
  {
      "ingredient": "løg",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "hvidløg",
      "amount": 2,
      "unit": "fed"
  },
  {
      "ingredient": "kyllingefilet",
      "amount": 150,
      "unit": "g"
  },
  {
      "ingredient": "ingefær",
      "amount": 10,
      "unit": "g"
  },
  {
      "ingredient": "rød karrypasta",
      "amount": 1,
      "unit": "spsk"
  },
  {
      "ingredient": "gulerod",
      "amount": "1,5",
      "unit": "stk"
  },
  {
      "ingredient": "broccoli",
      "amount": 100,
      "unit": "g"
  },
  {
      "ingredient": "edemamebønner",
      "amount": 50,
      "unit": "g"
  },
  {
      "ingredient": "kokosmælk",
      "amount": "0.5",
      "unit": "dåse"
  },
  {
      "ingredient": "pepperfrugt",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "peanutbutter",
      "amount": "0.5",
      "unit": "spsk"
  },
  {
      "ingredient": "rørsukker",
      "amount": 0.5,
      "unit": "tsks"
  },
  {
      "ingredient": "soja",
      "amount": 0.5,
      "unit": "spsk"
  },
  {
      "ingredient": "lime",
      "amount": 0.5,
      "unit": "stk"
  },
  {
      "ingredient": "olivenolie",
      "amount": 0.5,
      "unit": "spsk"
  },
  {
      "ingredient": "ris",
      "amount": 1.5,
      "unit": "dl"
  },
  {
      "ingredient": "peanuts",
      "amount": 0.5,
      "unit": "dl"
  },
  {
      "ingredient": "friske koriander",
      "amount": 0.5,
      "unit": "håndfuld"
  }
])
const Tikka_Massala = new Recipe("Tikka Massala","https://www.valdemarsro.dk/wp-content/2013/05/tikka-chicken-masala-1.jpg", [
  {
      "ingredient": "græst yoghurt",
      "amount": 1,
      "unit": "dl"
  },
  {
      "ingredient": "hvidløg",
      "amount": 3,
      "unit": "fed"
  },
  {
      "ingredient": "ingefær",
      "amount": "2,5",
      "unit": "tsk"
  },
  {
      "ingredient": "garam masala",
      "amount": "1,5",
      "unit": "tsk"
  },
  {
      "ingredient": "stødt gurkemeje",
      "amount": "1,75",
      "unit": "tsk"
  },
  {
      "ingredient": "chiliflajer",
      "amount": 0.5,
      "unit": "tsk"
  },
  {
      "ingredient": "stødt nellike",
      "amount": "0.25",
      "unit": "tsk"
  },
  {
      "ingredient": "lime",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "kyllingebryst",
      "amount": 300,
      "unit": "g"
  },
  {
      "ingredient": "løg",
      "amount": 1,
      "unit": "stk"
  },
  {
      "ingredient": "mandler",
      "amount": 25,
      "unit": "g"
  },
  {
      "ingredient": "tumatpuré",
      "amount": 2,
      "unit": "spsk"
  },
  {
      "ingredient": "piskefløde",
      "amount": 2,
      "unit": "spsk"
  },
  {
      "ingredient": "olivenolie",
      "amount": 1,
      "unit": "spsk"
  }
])


let recipeData = [Gyros, Halloumi_Tacos, Pasta_m_ost_bacon, Middelhavs_Havaborre, Spicy_Oksekød_på_Bulgur, Lasagne, Fiskefrikadeller_m_ovn_kartofler_og_gulerodssalat, Fajita_Bowl, Chili_sin_carne, Sød_chililaks, Boller_i_karry, Orientalsk_risret_med_oksekød, Buddha_Bowl, Wienerschnitzel, Panang_karry, Tikka_Massala]

export default recipeData;

