import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useKey } from "rooks";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import IconButton from '@mui/material/IconButton';
import recipeData from './data';

function App() {
  // Initial dummy variables
  const [objectArray, setObjectArray] = useState([{ val: "A", locked: false }, { val: "A", locked: false }, { val: "C", locked: false }, { val: "C", locked: false }, { val: "C", locked: false }])

  // TODO: Implement some check that ensures there's enough mock data / recipes. Especially important before 
  useEffect(() => {
    changeObject();
  }, [])


  const changeObject = () => {
    // TODO: Currently the mockData.length /RecipeSize needs to be arraySize.length * 2, because I do not allow any values from the prev array
    // in the newly generated array. Currently it's not that big of an issue, but if I decide to add filters the mockdata.length might get
    // quite small. An if the arraySize is large, at the same time, it will be problematic.
    // One option would be to dynamically change the size of the arraySize, or to make sure that the mockdata.lengt is always >= arraySize *2

    let arraySize = objectArray.length; // How many objects we need to generate
    let recipeSize = recipeData.length - 1; // How many objects there is to choose from (affects the random num gen)
    let newObjectArr = []; // Instantiate the new arr
    let index = 0;
    while (newObjectArr.length < arraySize) {
      // Keep running until array is filled
      const object = objectArray[index];
      // if object from old array is locked, add to array
      if (object.locked) {
        newObjectArr.push(object)
        index++;
      } else {
        // if object is not locked, check if the random object exist in newObjectArr
        // if not add to array and increment the value
        let randomNum = Math.floor(Math.random() * recipeSize) + 1;
        let randomObject = recipeData[randomNum];
        if (!in_array(randomObject, newObjectArr) && !in_array(randomObject, objectArray)) {
          newObjectArr.push(randomObject)
          index++;
        }
      }
    }
    setObjectArray(newObjectArr)
  }

  // Helper function that checks whether an object is in an array
  function in_array(obj, array) {
    for (var i = 0; i < array.length; i++)
      if (array[i].name == obj.name) return true;
    return false;
  }

  // A function that specifies an object to lock by index
  const lockObjectByIndex = (index) => {
    if(objectArray[index].locked) {
      objectArray[index].locked = false;
    }
    else {
      objectArray[index].locked = true;
    }
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
              <RecipeComponent recipe={object} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }

  const RecipeComponent = (props) => {
    return (
      <div className="RecipeComponent">
        <RecipeImage recipe={props} />
        <p> {props.recipe.name} </p>
      </div>
    )
  }

  const RecipeImage = (props) => { // rename this!
    const index = objectArray.indexOf(props.recipe.recipe)
    function lockObject() {
      lockObjectByIndex(index)
    }
    return (
      <div className="RecipeImage" style={{backgroundImage: "url(" + objectArray[index].image +")"}}>      
        <Button onClick={lockObject}>Lock recipe</Button>
      </div>
    )
  }
  // GROCERY LIST COMPONENT START

  const GroceryListComponent = () => {
    const [open, setOpen] = useState(false);
    const [groceries, setGroceries] = useState();
    const handleOpen = () => {
      generateGroceryList();
      setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const generateGroceryList = () => { // Find a better way to update groceries
      const list = [];
      objectArray.forEach(recipe =>
      (recipe.ingredients).forEach(ingredient =>
      list.push(ingredient)))
      setGroceries(list)
      
    }

   const copyToClipBoard = () => {
    navigator.clipboard.writeText(getGroceryItems());
    getGroceryItems();
   }

   // Function that creates a  multi-lined string of all the ingredients, their amount and their unit of unit
   function getGroceryItems(){
     let output = "";
     groceries.forEach(ingredient => {
        output += ingredient.ingredient + " " + ingredient.amount + " " + ingredient.unit + "\n"
       
     })
     return output
  }

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
            <Grid container>
              <Grid item xs={8}>
                <Typography id="modal-modal-title" variant="h5" component="h2" mt={3} ml={4} > Indkøbsseddel </Typography>
              </Grid>
              <Grid item xs={3.5} mt={3} align="right">
                <Tooltip title="Kopier ingredienser">
                  <IconButton onClick={() => copyToClipBoard()}>
                    <ContentCopyRoundedIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={10.7} mt={2} ml={4} align="center">
                <Divider />
              </Grid>
              <Grid item xs={8}>
                <GroceryList list={groceries}/>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }

  // Function that displays a list of ingredients. 
  const GroceryList = (props) => { // Refactor 
    return (
      (props.list).map(ingredient => {
        return (
          <Typography ml={4} mt={1.5}> {ingredient.ingredient + " " + ingredient.amount + " " + ingredient.unit} </Typography>
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
          <GroceryListComponent />
        </Grid>
      </Grid>
      <div>
        <RecipeGrid array={objectArray} />
      </div>

    </div>
  );
}
export default App;
