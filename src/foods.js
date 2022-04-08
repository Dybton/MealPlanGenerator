import recipeData from './data.js'

// // Function 


const generateFoodList = () => {
  let list = [];
recipeData.forEach(recipe => 
  (recipe.ingredients).forEach(function (ingredient) 
    {
      // Properly formats all ingredients
      ingredient.ingredient = firstLetterCapitalized(ingredient.ingredient)

      delete ingredient['amount'];
      delete ingredient['unit'];
      
      // For every object we need to add empty fields for preferred unit, type and ratios.
      // TODO: This is not good database design, but it will do for now
      ingredient.type = "";
      ingredient.prefferedUnit= "";
      ingredient.gram = 0;
      ingredient.deciliter = 0;
      ingredient.mililiter = 0;
      ingredient.liter = 0;
      ingredient.spsk = 0;
      ingredient.tsk = 0;
      ingredient.pakker = 0;
      ingredient.skvt = 0;
      ingredient.flasker = 0;
      ingredient.håndfuld = 0;
      ingredient.dåse = 0;

      // If it doesn't already exist in list, add it. 
      if(!in_array(ingredient, list))
        list.push(ingredient)
    })
)
}


// // TODO: THESE TWO ALSO EXIST IN APPS.JS. WE SHOULD HAVE ONE PLACE FOR THEM.

// Helper function to generateFoodList
function in_array(obj, array) {
  for (var i = 0; i < array.length; i++)
    if (array[i].ingredient == obj.ingredient) return true;
  return false;
}

// Helper function to generateFoodList
function firstLetterCapitalized(input) {
        let output = input.toLowerCase();
        output = output[0].toUpperCase() + output.substring(1);
        output.trim();
        return output
}

// Create an array of unique ingredients. Fill out type. Fill out conversion

let foodObjects = 
[{
    "ingredient": "Græsk yogurt",
    "type": "mejeri",
    "prefferedUnit": "deciliter", // Maybe make some check that ensures they are one of these?
    "gram": 100,
    "deciliter": 1,
    "mililiter": 100,
    "liter": 0.1,
    "spsk": 0.07,
    "tsk": 0.3,
},
{
  "ingredient": "Kyllingebryst",
  "type": "",
  "prefferedUnit": "g",
  "g": 0,
  "dl": null,
  "mililiter": null,
  "spsk": null,
  "tsk": null,
  "skvt": null,
  "flasker": null,
  "håndfuld": null,
  "dåse": null
}]

  
const findIngridientByName = (name) => {
  let formattedName = firstLetterCapitalized(name)
  const filteredResult = foodObjects.find((e) => e.ingredient == formattedName);
  return filteredResult
}

const converter = (foodName, currAmount, currUnit) => {
    let ingridentObject = findIngridientByName(foodName)
    let prefferedUnit = ingridentObject.prefferedUnit
    let currUnitBaseUnitRatio = ingridentObject[currUnit]
    let preferredUnitValue = ingridentObject[ingridentObject.prefferedUnit]

    let output = currUnitBaseUnitRatio / preferredUnitValue * currAmount
    // let output = currAmount / preferredUnitValue * currUnitBaseUnitRatio
}


