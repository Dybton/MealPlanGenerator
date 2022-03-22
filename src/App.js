import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useKey } from "rooks";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Gyros from './data';


function App() {

  // console.log(JSON.stringify(Gyros, null, 4));
  console.log(Gyros.ingredients)
  console.log(Gyros.name)

  const [objectArray, setObjectArray] = useState([{val: "A", locked: false}, {val: "A", locked: false}, {val: "C", locked: false}, {val: "C", locked: false}, {val: "C", locked: false}])
  // COMPONENT THAT GENERATES MOCK DATA - START // Note, later this will be generated via a query to a db
  const [mockdata, setMockData] = useState([]);
  const [groceries, setGroceries] = useState()

// TODO: Implement some check that ensures there's enough mock data / recipes. Especially important before 
  useEffect(() => {
    MockDataGenerator(25)
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
  const lockObjectByIndex = (index) => {
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
      {objectArray.map(object => (
        <Grid item xs={2.4}>
          <RecipeComponent recipe={object}/>
        </Grid>
      ))}
      </Grid>
    </div>
  )
}

const RecipeComponent = (props) => {
  return (
  <div className="RecipeComponent">
    <RecipeImage recipe={props}/>
    <p> {props.recipe.val} </p>
  </div>
  )
}

const RecipeImage = (props) => {
  function lockObject() {
    const index = objectArray.indexOf(props.recipe.recipe)
    lockObjectByIndex(index)
  }
  return (
    <div className="RecipeImage">
    <Button onClick={lockObject}>Lock recipe</Button>
      {/* This image also needs to contain the two button components */}
    </div>
  )
}

// GROCERY LIST COMPONENT START

const GroceryListComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={() => { handleOpen()}}>Generate grocery list</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Modalbox">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Indkøbsseddel
            <GroceryList/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const GroceryList = () => {
  return(
      (objectArray).map(groceryItem => {
        return (
          <li>{groceryItem.val}</li>
        )
      })
  )
}


  return (
    <div className="App">
      <div>
        <h1> Hello Foodpreppers</h1>
      </div>
      <Grid container spacing={3}
      >
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <div> <p> Press space to generate new objects</p></div>
        </Grid>
        <Grid item xs>
          {/* I need to replace this with a component */}
          <GroceryListComponent/>
        </Grid>
      </Grid>
      <div>
        <RecipeGrid array={objectArray}/>
      </div>
      {/* <BasicModal/> */}
    </div>
  );
}
export default App;
