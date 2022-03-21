
let Recipe = class {
    constructor(name, id, ingredients) {
      this.name = name;
      this.id = id; // here we could also use an id generator
      this.ingredients = ingredients; // Needs to be an array of objects containing: ingriedient, amount and maybe brand?
    }
};

// let Ingredient = class {
//     constructor(name, brand, ingredients) {
//         this.name = name;
//         this.id = id; // here we could also use an id generator
//         this.ingredients = ingredients; // Needs to be an array of objects containing: ingriedient, amount and maybe brand?
//       }

// }

// const Lasagne = new Recipe('Lasagne', 0, [{ingredient: "Tomater", amount: 2}, {ingredient: "Løg", amount: 1}, {ingredient: "Hvidløg", amount: 2}, {ingredient: "Hakket Oksekød", amount: z},])





// export default Lasagne;

