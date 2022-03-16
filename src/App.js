import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useKey } from "rooks";
import Grid from '@mui/material/Grid';


// TODO: Implement some check that ensures there's enough mock data / recipes
let data = [
  {
      val: 0,
      locked: false,
      image:"./recipeImages/pexels-alexy-almond-3756498.jpg"
  },
  {
      val: 1,
      locked: false,
      image: "./recipeImages/pexels-alexy-almond-3756523.jpg"
  },
  {
      val: 2,
      locked: false,
      image: "./recipeImages/pexels-ana-madeleine-uribe-2762942.jpg"
  }
]

function App() {
  const [dataObjects, setDataObjects] = useState(data)
  const [objectArray, setObjectArray] = useState([{val: "A", locked: false}, {val: "A", locked: false}, {val: "C", locked: false}, {val: "C", locked: false}, {val: "C", locked: false}])
  // COMPONENT THAT GENERATES MOCK DATA - START // Note, later this will be generated via a query to a db
  const [mockdata, setMockData] = useState([]);



  useEffect(() => {
    MockDataGenerator(25)
    console.log(dataObjects)
  },[])

    const MockDataGenerator = (n) => {
      const arr = [];
      for (let i = 0; i < n; i++) {
        const object = 
        {
          // Generates random string
          val: Math.random().toString(36).substring(2,5),
          locked: false
        }
        arr.push(object)
      };
      setMockData(arr)
    }
// COMPONENT THAT GENERATES MOCK DATA - END

// FUNCTIONS THAT CHANGES THE SIZE OF THE OBJECTS ARR - START

// Function that adds new object to the array via index
  const increaseArraySize = (index) => {
    const recipeSize = mockdata.length - 1;
    let temp_arr = [...objectArray];
      if(objectArray.length < 10) {
        let uniqueArrayAdded = false;
        while(uniqueArrayAdded == false) {
          let randomNum = Math.floor(Math.random()*recipeSize) +1;
          let newValue = mockdata[randomNum];
          if(!in_array(newValue, temp_arr)) {
            temp_arr.splice(index, 0, newValue);
            uniqueArrayAdded = true;
          }
        }
        setObjectArray(temp_arr)
      }
  }

  const removeObj = (index) => {
    if(objectArray.length > 3) {
      let temp_arr = [...objectArray];
      let removed = temp_arr.splice(index, 1)
      setObjectArray(temp_arr)
    }
  }
// FUNCTIONS THAT CHANGES THE SIZE OF THE OBJECTS ARR - END


// Function that checks whether an object is in an array
function in_array(obj, array) {
  for(var i = 0 ; i < array.length; i++) 
      if(array[i].val == obj.val) return true;
  return false;
}

  const changeObject = () => {
    // TODO: Currently the mockData.length needs to be arraySize.length * 2, because I do not allow any values from the prev array
    // in the newly generated array. Currently it's not that big of an issue, but if I decide to add filters the mockdata.length might get
    // quite small. An if the arraySize is large, at the same time, it will be problematic.
    // One option would be to dynamically change the size of the arraySize, or to make sure that the mockdata.lengt is always >= arraySize *2
    
    let arraySize = objectArray.length; // How many objects we need to generate
    let recipeSize = mockdata.length - 1; // How many objects there is to choose from (affects the random num gen)
    let newObjectArr = []; // Instantiate the new arr
    let index = 0;

    while(newObjectArr.length < arraySize) {
      // Keep running until array is filled
      const object = objectArray[index];
      // if object from old array is locked, add to array
      if (object.locked) {
         newObjectArr.push(object)
         index++;
       } else {
      // if object is not locked, check if the random object exist in newObjectArr
      // if not add to array and increment the value
      let randomNum = Math.floor(Math.random()*recipeSize) +1;
      let randomObject = mockdata[randomNum];
        if(!in_array(randomObject, newObjectArr) && !in_array(randomObject, objectArray)) {
          newObjectArr.push(randomObject)
          index++;
        }
      }
    }
    setObjectArray(newObjectArr)
  }

  // A function that specifies an object to lock by index
  const lockObject = (index) => {
    objectArray[index].locked = true;
  }

  // SPACE BAR START
  // Triggers the changeNum by pressing space. UseKey is a custom hook downloaded from: https://react-hooks.org/docs/useKey
  function spacePress(e) {
    changeObject();
  }
  useKey(["Space"], spacePress);

  // This snippet prevents the space bar from triggering the the buttons when they are in focus/selected
  window.onkeydown = function (event) {
    if (event.keyCode === 32) {
      event.preventDefault(); // Basically states that space's default action should not be taken as it usually is.
    }
  // SPACE BAR END

  
}; //function App end

// COMPONENTS START

// This needs to take the objects to be shown. It then need to loop through them and show the differnet components. 
// it also needs to calculate the spacing. 
const RecipeGrid = () => {
  return (
    <div className="RecipeGrid">
    <Grid container spacing={1.5}>
      <Grid item xs={2.4}>
        <RecipeComponent/>
      </Grid>
      <Grid item xs={2.4}>
        <RecipeComponent/>
      </Grid>
      <Grid item xs={2.4}>
        <RecipeComponent/>
      </Grid>
      <Grid item xs={2.4}>
        <RecipeComponent/>
      </Grid>
      <Grid item xs={2.4}>
        <RecipeComponent/>
      </Grid>
    </Grid>
    </div>
  )
}

const RecipeComponent = (image) => {
  return (
  <div className="RecipeComponent">
    <RecipeImage/>
  </div>
  )
}


const RecipeImage = () => {
  return (
    <div className="RecipeImage">
    <p>Lasagne</p>
      {/* This image also needs to contain the two button components */} 
    </div>
  )
}

  return (
    <div className="App">
      <div>
        <h1> Hello Foodpreppers</h1>
      </div>
      <div> 
        <p> Press space to generate new objects</p>
      </div>
      <div>
        {/* TODO: Disable focus on the buttons after click. Also this should be a component */} 
        <button onClick={() => increaseArraySize(0)}>Left</button> 
        <button onClick={() => increaseArraySize(objectArray.length)}>Right</button> 
        <button onClick={() => increaseArraySize(Math.ceil(objectArray.length / 2))}>Middle</button>
        <button onClick={() => removeObj(0)}>Remove from left</button> 
        <button onClick={() => lockObject(Math.floor(objectArray.length / 2))}>Lock middle</button>
      </div>
      <div>
      {objectArray.map(object => (
        <span> {object.val} </span>
      ))}
      </div>
      <div>
        <RecipeGrid/>
      </div>
    </div>
  );
}



export default App;
