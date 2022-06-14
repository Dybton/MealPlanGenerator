import './App.css';
import './foods'
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClearIcon from '@mui/icons-material/Clear';
import LockIcon from '@mui/icons-material/LockRounded';
import LockOpenIcon from '@mui/icons-material/LockOpenRounded';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import useScrollBlock from './useScrollBlock';
import { Handyman } from '@mui/icons-material';


function App() {
  
  // Initial dummy variables

  // Todo: Both of these should be dynamic
  const [recipeArray, setRecipeArray] = useState([{ val: "A" }, { val: "B"}, { val: "C"}, { val: "C" }, { val: "C"}])
  // Todo: Persons per day should depend on the number of elements in the recipeArray
  const [personsPerDay, setPersonsPerDay] = useState([2, 2,  2, 2, 2])

  // TODO: Implement some check that ensures there's enough mock data / recipes. Especially important before 
  useEffect(() => {
    changeObject();
  }, [])

  // TODO MAKE THIS A CONTEXT STATE?
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  if(matches)
    document.body.style = 'background: white;';
  else 
    document.body.style = 'background-color: rgba(229, 234, 240, 1)';

  const changeObject = () => {
    // TODO: Currently the mockData.length /RecipeSize needs to be arraySize.length * 2, because I do not allow any values from the prev array
    // in the newly generated array. Currently it's not that big of an issue, but if I decide to add filters the mockdata.length might get
    // quite small. An if the arraySize is large, at the same time, it will be problematic.
    // One option would be to dynamically change the size of the arraySize, or to make sure that the mockdata.lengt is always >= arraySize *2

    let arraySize = recipeArray.length; // How many objects we need to generate
    let recipeSize = recipeData.length - 1; // How many objects there is to choose from (affects the random num gen)
    let newObjectArr = []; // Instantiate the new arr
    let index = 0;
    while (newObjectArr.length < arraySize) {
      // Keep running until array is filled
      const object = recipeArray[index];
      // if object from old array is locked, add to array
      if (object.locked) {
        newObjectArr.push(object)
        index++;
      } else {
        // if object is not locked, check if the random object exist in newObjectArr
        // if not add to array and increment the value
        let randomNum = Math.floor(Math.random() * recipeSize) + 1;
        let randomObject = recipeData[randomNum];
        if (!in_array(randomObject, newObjectArr) && !in_array(randomObject, recipeArray)) {
          newObjectArr.push(randomObject)
          index++;
        }
      }
    }
    setRecipeArray(newObjectArr)
  }

  // Helper function that checks whether an object is in an array
  function in_array(obj, array) {
    for (var i = 0; i < array.length; i++)
      if (array[i].name == obj.name) return true;
    return false;
  }

  // A function that specifies an object to lock by index. It is also here the locked property is set
  const lockObjectByIndex = (index) => {
    if(recipeArray[index].locked) {
      recipeArray[index].locked = false;
    }
    else {
      recipeArray[index].locked = true;
    }
  }

  // SPACE BAR START
  // Triggers the changeObject by pressing space. UseKey is a custom hook downloaded from: https://react-hooks.org/docs/useKey
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

  const ref = useRef(null);


  // COMPONENTS START
  const UpperContent = (props) => {
    return (
    <div>
      <h1> Velkommen Foodpreppers</h1>
      
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <div> <p> Tryk på spaceknappen for at generere madplan</p></div>
        </Grid>
        {/* TODO move this down. It's not a child of upperContnet */}
        <Grid item xs>
          <Button variant="contained" color="success" onClick={() => {props.callB(); }}>Generer Indkøbsliste</Button>
        </Grid>
    </Grid>
    </div>
    )
  }

  const FooterComponent = (props) => {
    return (
      <div>
        <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <Grid container>
              <Grid item xs={6}>
                <Button variant="outlined" onClick={() => { props.changeObject()}}>Generer</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="success" onClick={() => {props.callB(); }}>Skab Liste</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      )
  }

  // GROCERY LIST COMPONENT START
  const GroceryListComponent = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [groceries, setGroceries] = useState();

    useImperativeHandle(ref, () => ({
      f() {
        handleOpen();
      }
    }))

    const handleOpen = () => {
      generateGroceryList();
      setOpen(true);
    }
    const handleClose = () => setOpen(false);

    // Function that removes item from groceries
    function removeItemFromGroceryList(input){
        let index = groceries.indexOf(input)
        let temp_arr = [...groceries];
        temp_arr.splice(index, 1)
        setGroceries(temp_arr)
    }

    function generateGroceryList(){ // Find a better way to update groceries
      const temp_arr = JSON.parse(JSON.stringify(recipeArray))
      console.log(Object.is(temp_arr, recipeArray))
      const list = []; 
      
      // Based on the recipe and it's place in the recipeArray we need to cross check the persons array to see how many people
      // We are cooking for. We then need to use this to adjust the amount for each ingridients - do this is in union with update groceries

      for (let i = 0; i < temp_arr.length; i++) {
        const persons = personsPerDay[i]
        const recipe = temp_arr[i];
        const ingredients = recipe.ingredients
        
        for (let j = 0; j < ingredients.length; j++) {
          let ingredient = ingredients[j]
          ingredient.amount = ingredient.amount * persons
          list.push(ingredient)
        }
      }

      // We sort the list
      function SortArray(x, y){
        return x.ingredient.localeCompare(y.ingredient);
      }
      const sortedArray = list.sort(SortArray);

      // TODO: REFACTOR THIS SO THAT WE'RE NOT GOING THROUGH THE ARRAY TWO TIMES 
      const output = sortedArray.reduce((accumulator, cur) => {
        let ingredient = cur.ingredient;
        let unit = cur.unit;
        let found = accumulator.find(elem => elem.ingredient === ingredient && elem.unit === unit)
        if (found) found.amount += cur.amount;
        else accumulator.push(cur);
        return accumulator; 
      }, []);
      setGroceries(output)
    }

   function copyToClipBoard(){
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={matches ? "GroceryListSmall" : "GroceryList"}>
            {/* Grocery list top start */}
            <GroceryListHeader copyToClipBoard={copyToClipBoard}/>
            {/* Grocery list top end */}
            
            {/* Grocery list middle start */}
            <Grid container className='groceryListMiddle'>
              <Grid item xs={12} >
                  <IngredientTable list={groceries} func={removeItemFromGroceryList}/>
              </Grid>
            </Grid>
            <Grid container className='groceryListBottom'>
              <Grid item xs={12} >
              </Grid>
            </Grid>
            {/* Grocery list middle end */}
          </Box>
        </Modal>
      </div>
    );
  })

  const GroceryListHeader = (props) => {
    return (
    <Grid container className='groceryListTop'>
        <Grid item xs={8}>
          <Typography id="modal-modal-title" variant="h5" component="h2" mt={3} ml={4} > Indkøbsliste </Typography>
        </Grid>
        <Grid item xs={3.5} mt={3} align="right">
          <Tooltip title="Kopier ingredienser">
            <IconButton onClick={() => props.copyToClipBoard()}>
              <ContentCopyRoundedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={10.7} mt={2} ml={4} align="center">
          <Divider />
        </Grid>
    </Grid>
    )
  }

  // TODO Add the ability to add stuff to the list
  const GroceryListBottom = () => {
  }

  // This is the main container for the recipes. 
  // TODO: We need to dynamically calculate spacing
  const RecipeGrid = (pers) => {
    // conditional logic to determine whether we should create the recipeButton or not. 
    // if less than max recipes then show. Else don't show
    let status = false;
    if(recipeArray.length < 5) {
      status = true;
    }

    let condtionalClassName = "RecipeGrid"
    if (matches) {
      condtionalClassName = "RecipeGridSmall"
    }
          
    return (
        <Grid container className={`${condtionalClassName }`}>
          {status ? (
            <div className="AddRecipeButtonLeft">
           <AddRecipeButton index={0}/>
          </div>
          ) : (
            null
          )}
          
          {recipeArray.map(object => (
            <Grid item sm={2.4} xs={12}>
              <RecipeComponent recipe={object} pers={pers}/>
            </Grid>
          ))}
          
          {status ? (
            <div className="AddRecipeButtonRight">
            <AddRecipeButton index={recipeArray.length}/>
          </div>
          ) : (
            null
          )}
        </Grid>
    )
  }

  const AddRecipeButton = (props) => {
    
    function handleClick(){
      // Add a new recipe
      addRecipe(props.index)
    }

    const addRecipe = (index) => {
      const recipeSize = recipeData.length - 1;
      let temp_arr = [...recipeArray];
        if(recipeArray.length < 10) {
          let uniqueArrayAdded = false;
          while(uniqueArrayAdded == false) {
            let randomNum = Math.floor(Math.random()*recipeSize) +1;
            let newValue = recipeData[randomNum];
            if(!in_array(newValue, temp_arr)) {
              temp_arr.splice(index, 0, newValue);
              uniqueArrayAdded = true;
            }
          }
          let personsPerDayCopy = [... personsPerDay]
          if(index == 0) {
            personsPerDayCopy.unshift(2)
          } else {
            personsPerDayCopy.push(2)
          }
          setPersonsPerDay(personsPerDayCopy)
          setRecipeArray(temp_arr)
        }
    }
    
    
    return (
      <div>
      {
        (recipeArray.length < 5) ? (
        <IconButton onClick={handleClick}> <AddCircleOutlineOutlinedIcon sx={{ fontSize: 33 }}/> </IconButton>
        ) : null
      }
      </div>
    )
  }

  const RecipeComponent = (props) => {
    // This locked state is used for the icon illustration only
    const [locked, setLocked] = useState(props.recipe.locked)

    // TODO: Move this up to recipe grid and then pass down prop
    // Boolean that tells whether we've reached the sm breakpoint. I may want to move this up.
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const index = recipeArray.indexOf(props.recipe)
    function changeLockStatus() {
      if(locked) 
        setLocked(false);
      else
        setLocked(true)
      lockObjectByIndex(index)
    }
    

    const removeObj = () => {
      if(recipeArray.length !== 1) {
        let tempRecipeArr = [...recipeArray];
        let tempPersArray = [...personsPerDay];
        if(locked)
          changeLockStatus(); // Call the changeLockStatus funtion to unlock the object if we delete it. 
        tempRecipeArr.splice(index, 1)
        tempPersArray.splice(index, 1)
        setRecipeArray(tempRecipeArr)
        setPersonsPerDay(tempPersArray)
      }
    }

    if(!matches)
      return (
      // <Box className="RecipeComponent" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}}>
      <Box className="RecipeComponent" >
        
          <RecipeImage recipe={props}/>
            <div>
              <p className="LockedElement" > {props.recipe.name} </p>
            </div>
            <div id="låsOpskriftKnap">
            <SelectSmall pers={props.pers.pers} index={index}/>
            </div>
            <div>
            <p>Est. tid {props.recipe.estTime}</p>
            </div>
            <div> 
              <IconButton onClick={changeLockStatus}>
                {locked ? <LockIcon/> : <LockOpenIcon/> }
              </IconButton>
            </div>
            <div>
            <IconButton  onClick={removeObj}> <ClearIcon /> </IconButton>
            </div>
            
      </Box>
      ) 
    else 
        return (
          <div>
            <Grid container className="RecipeComponentSmall">
              <Grid item xs={4}>
                <RecipeImage recipe={props} />
              </Grid>
              <Grid container item xs={4} className="RecipeComponentSmallTextBox">
              <p className='RecipeComponentSmallText'>{props.recipe.name}</p>
              </Grid>
              <Grid container item xs={4} className="RecipeComponentSmallLogo">
              <IconButton onClick={changeLockStatus}>
                  {locked ? <LockIcon/> : <LockOpenIcon/> }
              </IconButton>
              </Grid>
            </Grid>
          </div>
        )
  }

    // Cont from here
    const SelectSmall = (props) => {

  
    const handleClick = (event) => {
      let temp_arr = [... personsPerDay]
      temp_arr.splice((props.index), 1, event.target.value)
      setPersonsPerDay(temp_arr);
    }

    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <Select
          // Todo: Find a way to avoid propdrilling - Maybe context?
          defaultValue={props.pers[props.index]}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={handleClick}
        >
          <MenuItem value={1}>1 pers</MenuItem>
          <MenuItem value={2}>2 pers</MenuItem>
          <MenuItem value={3}>3 pers</MenuItem>
          <MenuItem value={4}>4 pers</MenuItem>
          <MenuItem value={5}>5 pers</MenuItem>
          <MenuItem value={6}>6 pers</MenuItem>
          <MenuItem value={7}>7 pers</MenuItem>
          <MenuItem value={8}>8 pers</MenuItem>
          <MenuItem value={9}>9 pers</MenuItem>
          <MenuItem value={10}>10 pers</MenuItem>
        </Select>
      </FormControl>
    );
  }

  const RecipeImage = (props) => { // rename this!
    const index = recipeArray.indexOf(props.recipe.recipe)

    const handleClick = () => {
      const recipeClone = {... props.recipe}
      const link = recipeClone.recipe.link
      const numberOfPeople = "antal=" + personsPerDay[index]
      const modifiedLink = link.replace('antal=1', numberOfPeople)
      window.open(modifiedLink, '_blank');
    } 

    return (
      // <a href={(props.recipe.recipe.link)} target="_blank">
        <div onClick={handleClick} className={matches ? "RecipeImageSmall" : "RecipeImage"} style={{backgroundImage: "url(" + recipeArray[index].image +")"}}>      
        </div>
      // </a>
    )
  }
  
  // Function that displays a list of ingredients.
  const IngredientTable = (props) => { // Refactor 
    return (  
      (props.list).map(ingredient => {
        return (
          <Grid container>
            <Grid item xs={8}>
              <Typography className="groceryItem" ml={4} mt={1.5}> {ingredient.ingredient + " " + ingredient.amount + " " + ingredient.unit} </Typography>
            </Grid>       
            <Grid item xs={3.45} align="right">
              <IconButton  onClick={() => props.func(ingredient)}> <ClearIcon /> </IconButton>
            </Grid>
          </Grid>
        )
      })
    )
  }

  // This grid controls the entirety of the app
  return (
    
    <div className="App">
      {/* <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Hushovmester
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div style={{display: matches ? 'none' : 'block' }}>
        <UpperContent callB={() => {ref.current.f();}}/>
      </div>
      <div>
      <GroceryListComponent ref={ref}/>
      <RecipeGrid array={recipeArray} pers={personsPerDay}/>
      </div>
      <div style={{display: matches ? 'block' : 'none' }}>
        <FooterComponent changeObject={changeObject}  callB={() => {ref.current.f();}} />
      </div>
    </div>
  );
}
export default App;

