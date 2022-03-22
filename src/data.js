
let Recipe = class {
    constructor(name, ingredients) {
      this.name = name;
      this.locked = false;
      this.ingredients = ingredients; // Needs to be an array of objects containing: ingriedient, amount and maybe brand?
      
    }
};

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

const Gyros = new Recipe("Gyros", [{ingredient: "Pitabrød", amount: 6, meassurement: "stk"}, {ingredient: "Kyllingebryst", amount: 200, meassurement: "gram"}, {ingredient: "Græsk Yogurt", amount: 1, meassurement: "deciliter"}, {ingredient: "Græsk Yogurt", amount: 1, meassurement: "deciliter"}, {ingredient: "Citron", amount: 1, meassurement: "stk"}, {ingredient: "Tomat", amount: 4, meassurement: "stk"}, {ingredient: "Rødløg", amount: 1, meassurement: "stk"}, {ingredient: "Koriander", amount: 1, meassurement: "tsk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "fed"}, {ingredient: "Røget paprika", amount: 2, meassurement: "spsk"}, {ingredient: "Tørret Timian", amount: 1, meassurement: "spsk"}, {ingredient: "Hjertesalat", amount: 1, meassurement: "stk"}, {ingredient: "Olivenolie", amount: 1, meassurement: "spsk"}])
const Halloumi_Tacos = new Recipe("Halloumi Tacos", [{ingredient: "Halloumi", amount: 200, meassurement: "gram"}, {ingredient: "Rødløg", amount: 2, meassurement: "stk"}, {ingredient: "Tomat", amount: 2, meassurement: "stk"}, {ingredient: "Hjertesalat", amount: 1, meassurement: "stk"}, {ingredient: "Tortilla pandekager", amount: 6, meassurement: "stk"}, {ingredient: "Avocado", amount: 1, meassurement: "stk"}, {ingredient: "Mayonaise", amount: 25, meassurement: "gram"}, {ingredient: "Citron", amount: 1, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "fed"}, {ingredient: "Agurk", amount: 1, meassurement: "stk"}, {ingredient: "Tørret Oregano", amount: 1, meassurement: "spsk"}])
const Pasta_m_ost_bacon = new Recipe("Paste med ost og bacon", [{ingredient: "Frisk Pasta", amount: 2, meassurement: "pakker"}, {ingredient: "Bacon", amount: 150, meassurement: "gram"}, {ingredient: "Creme Fraiche", amount: 3, meassurement: "spsk"}, {ingredient: "Blue Castello", amount: 75, meassurement: "gram"}, {ingredient: "Broccoli", amount: 1, meassurement: "stk"}])
const Middelhavs_Havaborre = new Recipe("Middelhavs Havaborre",[{ingredient: "Aubergine", amount: 1, meassurement: "stk"}, {ingredient: "Olivenolie", amount: 1, meassurement: "spsk"}, {ingredient: "Rødløg", amount: 1, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "stk"}, {ingredient: "Tomat", amount: 2, meassurement: "stk"}, {ingredient: "Citron", amount: 1, meassurement: "stk"}, {ingredient: "Hvidvin", amount: 1, meassurement: "skvt"}, {ingredient: "Grøntsagsbouillon", amount: 2, meassurement: "spsk"}, {ingredient: "Hakket Tomat", amount: 2, meassurement: "spsk"}, {ingredient: "Tørret Oregano", amount: 1, meassurement: "spsk"}, {ingredient: "Havborre", amount: 300, meassurement: "gram"}, {ingredient: "Couscous", amount: 250, meassurement: "gram"}, {ingredient: "Hakkede Oliven", amount: 50, meassurement: "gram"}])
const Spicy_Oksekød_på_Bulgur = new Recipe("Spicy Oksekød på Bulgur",[{ingredient: "Hakket Oksekød", amount: 250, meassurement: "gram"}, {ingredient: "Gulerød", amount: 2, meassurement: "stk"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Ærter", amount: 100, meassurement: "gram"}, {ingredient: "Rødløg", amount: 1, meassurement: "stk"}, {ingredient: "Rosiner", amount: 50, meassurement: "gram"}, {ingredient: "Paprika", amount: 1, meassurement: "tsk"}, {ingredient: "Spidskommen", amount: 2, meassurement: "tsk"}, {ingredient: "Chiliflager", amount: 1, meassurement: "tsk"}, {ingredient: "Citronsaft", amount: 1, meassurement: "spsk"}, {ingredient: "Fuldkornsbulgur", amount: 1.5, meassurement: "deciliter"}, {ingredient: "Boullionterning", amount: 1, meassurement: "stk"}])
const Lasagne = new Recipe("Lasagne",[{ingredient: "Hakket Oksekød", amount: 250, meassurement: "gram"}, {ingredient: "Gulerød", amount: 2, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 3, meassurement: "fed"}, {ingredient: "Bladselleri", amount: 3, meassurement: "stilke"}, {ingredient: "Rødløg", amount: 1, meassurement: "stk"}, {ingredient: "Tomatpure", amount: 35, meassurement: "gram"}, {ingredient: "Hakkede Tomater", amount: 400, meassurement: "gram"}, {ingredient: "Oksebouillonterning", amount: 1, meassurement: "stk"}, {ingredient: "Basilikum", amount: 1, meassurement: "tsk"}, {ingredient: "Paprika", amount: 1, meassurement: "tsk"}, {ingredient: "Mælk", amount: 4, meassurement: "deciliter"}, {ingredient: "Mozerella", amount: 200, meassurement: "gram"}, {ingredient: "Lasagneplader", amount: 200, meassurement: "gram"}])
const Fiskefrikadeller_m_ovn_kartofler_og_gulerodssalat = new Recipe("Fiskefrikadeller m ovn-kartofler og gulerodssalat",[{ingredient: "Rødløg", amount: 1, meassurement: "stk"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Torskefars", amount: 150, meassurement: "gram"}, {ingredient: "Laksefars", amount: 150, meassurement: "gram"}, {ingredient: "Æg", amount: 1, meassurement: "stk"}, {ingredient: "Dild", amount: 1, meassurement: "Håndfuld"}, {ingredient: "Hvedemel", amount: 20, meassurement: "gram"}, {ingredient: "Smør", amount: 1, meassurement: "spsk"}, {ingredient: "Gulerod", amount: 3, meassurement: "stk"}, {ingredient: "Æble", amount: 2, meassurement: "stk"}, {ingredient: "Honning", amount: 1, meassurement: "spsk"}, {ingredient: "Rosiner", amount: 100, meassurement: "gram"}])
const Fajita_Bowl = new Recipe("Fajita Bowl",[{ingredient: "Kyllingefond-terninger", amount: 2, meassurement: "stk"}, {ingredient: "Ris", amount: 200, meassurement: "gram"}, {ingredient: "Kyllingebryst", amount: 200, meassurement: "gram"}, {ingredient: "Pepperfrugt", amount: 2, meassurement: "stk"}, {ingredient: "Løg", amount: 2, meassurement: "stk"}, {ingredient: "Kidneybønner", amount: 1, meassurement: "Dåse"}, {ingredient: "Salsa", amount: 200, meassurement: "gram"}, {ingredient: "Paprika", amount: 1, meassurement: "tsk"}, {ingredient: "Koriander", amount: 1, meassurement: "tsk"}, {ingredient: "Spidskommen", amount: 1, meassurement: "spsk"}, {ingredient: "Hvidløg", amount: 2, meassurement: "fed"}])
const Chili_sin_carne = new Recipe("Chili sin carne",[{ingredient: "Spidskommen", amount: 1, meassurement: "spsk"}, {ingredient: "Kanel", amount: 1, meassurement: "tsk"}, {ingredient: "Koriander", amount: 1, meassurement: "tsk"}, {ingredient: "Chiliflager", amount: 0.5, meassurement: "tsk"}, {ingredient: "Løg", amount: 1, meassurement: "stk"}, {ingredient: "Kidneybønner", amount: 1, meassurement: "Dåse"}, {ingredient: "Salsa", amount: 100, meassurement: "gram"}, {ingredient: "Paprika", amount: 1, meassurement: "tsk"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Bladselleri", amount: 2, meassurement: "stænger"}, {ingredient: "Aubergine", amount: 0.5, meassurement: "stk"}, {ingredient: "Soltørrede Tomater", amount: 2, meassurement: "spsk"}, {ingredient: "Hakkede Tomater", amount: 1, meassurement: "dåse"}, {ingredient: "Grøntsagsbouillon", amount: 1, meassurement: "deciliter"}, {ingredient: "Mørk chokolade", amount: 30, meassurement: "gram"}, {ingredient: "Olivenolie", amount: 1, meassurement: "spsk"}, {ingredient: "Brune ris", amount: 200, meassurement: "gram"}, {ingredient: "Creme fraiche", amount: 50, meassurement: "gram"}, {ingredient: "Cheddarost", amount: 100, meassurement: "gram"}, {ingredient: "Lime", amount: 1, meassurement: "stk"}])
const Sød_chililaks = new Recipe("Sød chililaks",[{ingredient: "Grøntsagsboulion", amount: 1, meassurement: "stk"}, {ingredient: "Ris", amount: 150, meassurement: "gram"}, {ingredient: "Gulerod", amount: 1, meassurement: "stk"}, {ingredient: "Pak Choi", amount: 200, meassurement: "gram"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Ingefær", amount: 0.5, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "stk"}, {ingredient: "Forårsløg", amount: 1, meassurement: "stk"}, {ingredient: "Lime", amount: 1, meassurement: "stk"}, {ingredient: "Soya", amount: 25, meassurement: "milliliter"}, {ingredient: "Sød chilisauce", amount: 40, meassurement: "gram"}, {ingredient: "Laksefilet", amount: 250, meassurement: "gram"}])
const Boller_i_karry = new Recipe("Boller i karry",[{ingredient: "Grøntsagsboulion", amount: 1, meassurement: "stk"}, {ingredient: "Ris", amount: 150, meassurement: "gram"}, {ingredient: "Gulerod", amount: 1, meassurement: "stk"}, {ingredient: "Pak Choi", amount: 200, meassurement: "gram"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Ingefær", amount: 0.5, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "stk"}, {ingredient: "Forårsløg", amount: 1, meassurement: "stk"}, {ingredient: "Lime", amount: 1, meassurement: "stk"}, {ingredient: "Soya", amount: 25, meassurement: "milliliter"}, {ingredient: "Sød chilisauce", amount: 40, meassurement: "gram"}, {ingredient: "Laksefilet", amount: 250, meassurement: "gram"}])
const Mexi_Bowl = new Recipe("Mexi Bowl",[{ingredient: "Grøntsagsboulion", amount: 1, meassurement: "stk"}, {ingredient: "Ris", amount: 150, meassurement: "gram"}, {ingredient: "Gulerod", amount: 1, meassurement: "stk"}, {ingredient: "Pak Choi", amount: 200, meassurement: "gram"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Ingefær", amount: 0.5, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "stk"}, {ingredient: "Forårsløg", amount: 1, meassurement: "stk"}, {ingredient: "Lime", amount: 1, meassurement: "stk"}, {ingredient: "Soya", amount: 25, meassurement: "milliliter"}, {ingredient: "Sød chilisauce", amount: 40, meassurement: "gram"}, {ingredient: "Laksefilet", amount: 250, meassurement: "gram"}])
const Buddha_Bowl = new Recipe("Buddha Bowl",[{ingredient: "Grøntsagsboulion", amount: 1, meassurement: "stk"}, {ingredient: "Ris", amount: 150, meassurement: "gram"}, {ingredient: "Gulerod", amount: 1, meassurement: "stk"}, {ingredient: "Pak Choi", amount: 200, meassurement: "gram"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Ingefær", amount: 0.5, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "stk"}, {ingredient: "Forårsløg", amount: 1, meassurement: "stk"}, {ingredient: "Lime", amount: 1, meassurement: "stk"}, {ingredient: "Soya", amount: 25, meassurement: "milliliter"}, {ingredient: "Sød chilisauce", amount: 40, meassurement: "gram"}, {ingredient: "Laksefilet", amount: 250, meassurement: "gram"}])
const Wienerschnitzel = new Recipe("Wienerschnitzel",[{ingredient: "Grøntsagsboulion", amount: 1, meassurement: "stk"}, {ingredient: "Ris", amount: 150, meassurement: "gram"}, {ingredient: "Gulerod", amount: 1, meassurement: "stk"}, {ingredient: "Pak Choi", amount: 200, meassurement: "gram"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Ingefær", amount: 0.5, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "stk"}, {ingredient: "Forårsløg", amount: 1, meassurement: "stk"}, {ingredient: "Lime", amount: 1, meassurement: "stk"}, {ingredient: "Soya", amount: 25, meassurement: "milliliter"}, {ingredient: "Sød chilisauce", amount: 40, meassurement: "gram"}, {ingredient: "Laksefilet", amount: 250, meassurement: "gram"}])
const Panang_karry = new Recipe("Panang karry",[{ingredient: "Grøntsagsboulion", amount: 1, meassurement: "stk"}, {ingredient: "Ris", amount: 150, meassurement: "gram"}, {ingredient: "Gulerod", amount: 1, meassurement: "stk"}, {ingredient: "Pak Choi", amount: 200, meassurement: "gram"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Ingefær", amount: 0.5, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "stk"}, {ingredient: "Forårsløg", amount: 1, meassurement: "stk"}, {ingredient: "Lime", amount: 1, meassurement: "stk"}, {ingredient: "Soya", amount: 25, meassurement: "milliliter"}, {ingredient: "Sød chilisauce", amount: 40, meassurement: "gram"}, {ingredient: "Laksefilet", amount: 250, meassurement: "gram"}])
const Tikka_Massala = new Recipe("Tikka Massala",[{ingredient: "Grøntsagsboulion", amount: 1, meassurement: "stk"}, {ingredient: "Ris", amount: 150, meassurement: "gram"}, {ingredient: "Gulerod", amount: 1, meassurement: "stk"}, {ingredient: "Pak Choi", amount: 200, meassurement: "gram"}, {ingredient: "Squash", amount: 0.5, meassurement: "stk"}, {ingredient: "Ingefær", amount: 0.5, meassurement: "stk"}, {ingredient: "Hvidløg", amount: 1, meassurement: "stk"}, {ingredient: "Forårsløg", amount: 1, meassurement: "stk"}, {ingredient: "Lime", amount: 1, meassurement: "stk"}, {ingredient: "Soya", amount: 25, meassurement: "milliliter"}, {ingredient: "Sød chilisauce", amount: 40, meassurement: "gram"}, {ingredient: "Laksefilet", amount: 250, meassurement: "gram"}])


let recipeData = [Gyros, Halloumi_Tacos, Pasta_m_ost_bacon, Middelhavs_Havaborre, Spicy_Oksekød_på_Bulgur, Lasagne, Fiskefrikadeller_m_ovn_kartofler_og_gulerodssalat, Fajita_Bowl, Chili_sin_carne, Sød_chililaks, Boller_i_karry, Mexi_Bowl, Buddha_Bowl, Wienerschnitzel, Panang_karry, Tikka_Massala]

export default recipeData;

