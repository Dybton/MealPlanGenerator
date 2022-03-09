import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useKey } from "rooks";


function App() {

  const [numArray, setNumArray] = useState([1,2,3,4,5])

  const [objectArray, setObjectArray] = useState([{val: "A", locked: false}, {val: "A", locked: false}, {val: "C", locked: false}])

// COMPONENT THAT GENERATES MOCK DATA - START // Note, later this will be generated via a query to a db
  const [mockdata, setMockData] = useState([]);

  useEffect(() => {
    MockDataGenerator(10)
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
    if(objectArray.length < 10) {
      const recipeSize = mockdata.length - 1;
      let randomNum = Math.floor(Math.random()*recipeSize) +1;
      let newValue = mockdata[randomNum];
      let temp_arr = [...objectArray];
      console.log(temp_arr)
      temp_arr.splice(index, 0, newValue);
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

// function adds a new number either to the left or the right of the array. 
  const increaseArrSize = (direction) => {
    let recipeSize = 100; //Note this is a placeholder until I find a better val - TODO, find a better val
    // TODO add the functionality that lets me add to specific indices 
    if(numArray.length < 10) {
      let newValue = Math.floor(Math.random()*recipeSize) +1;
    if(direction === "right") {
      setNumArray(numArray => [...numArray, newValue]);
    } else if(direction === "left") {
      setNumArray(numArray => [newValue,...numArray] );
    }
    // This part of the function can insert a random number to a specified index
    if(direction === "middle") {
      // If the random number appear at the index specified by indexNum
      let indexNum = Math.ceil(numArray.length / 2);
      let temp_arr = [...numArray];
      temp_arr.splice(indexNum, 0, newValue);
      setNumArray(temp_arr)
    }
  }}

// Removes item at specified index
  const decreaseArrSize = (index) => {
    if(numArray.length > 3) {
      let temp_arr = [...numArray];
      let removed = temp_arr.splice(index, 1)
      setNumArray(temp_arr)
    }
  }
  
  const changeObject3 = () => {
    let arraySize = objectArray.length // Determines the number of objects we need to generate
    let recipeSize = mockdata.length -1; // -1 bc we use this number to generate a random index
    let oldObjectArr = [...objectArray] // we'll use this for locked values
    let newObjectArr = []; // we instantiate a new arr
    let index = 0;
    fillArray();
    function fillArray() {
      // Check if the first element in the array is locked
      const object = objectArray[index]
      if (object.locked) {
        console.log(object + " is locked")
        
      }
      let randomNum = Math.floor(Math.random()*recipeSize) +1;
      let randomObject = mockdata[randomNum]
      if(newObjectArr.length < arraySize) {
        if(!in_array(randomObject, newObjectArr)) {
          newObjectArr.push(randomObject)
        }
        fillArray()
      }
      
    }
    setObjectArray(newObjectArr)
    // while(newObjectArr.length < arraySize) {
    //   timesRun++;
    //   let randomNum = Math.floor(Math.random()*recipeSize) +1;
    //   let randomObject = mockdata[randomNum]
    //   newObjectArr.push(randomObject)
    //   console.log(timesRun)
    //   console.log(newObjectArr)
    // }


    // while(newObjectArr.length < arraySize) {
    //   console.log("fun")
    //   newObjectArr.push("fun")
    // }
  }
  


  const changeObject2 = () => {
    // TODO: Currently the mockData.length needs to be arraySize.length * 2, because I do not allow any values from the prev array
    // in the newly generated array. Currently it's not that big of an issue, but if I decide to add filters the mockdata.length might get
    // quite small. An if the arraySize is large, at the same time, it will be problematic.
    // One option would be to dynamically change the size of the arraySize, or to make sure that the mockdata.lengt is always >= arraySize *2
    // But finding a better way to keep track of the locked objects, would def be start. I could ask Lukas, or try Stackoverflow

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

  const changeObject = () => {
    let recipeSize = mockdata.length - 1;
    let objectArr = [];
    // Builds a new object array. It goes through every object in the objectArray and checks whether locked is true. 
    // If locked that element should be used in the Array, else a random object from the mock data will be used.
    for (let index = 0; index < objectArray.length; index++) {
      const element = objectArray[index];
      if(element.locked) {
        objectArr.push(element)
      } else {
        let randomNum = Math.floor(Math.random()*recipeSize) +1;
        let randomObject = mockdata[randomNum];
        objectArr.push(randomObject)
        // Gets a single random object from the mockdata
        // Keep trying adding the object until a unique value has been added
      }
    }
    setObjectArray(objectArr)
  }

  // A function that specifies an object to lock by index
  const lockObject = (index) => {
    objectArray[index].locked = true;
  }

  // THIS IS NOT LONGER USED 
  const changeNum = (event) => {
      // Generates an array of size arraySize, consisting of random unique numbers
      let arraySize = numArray.length;
      let recipeSize = 100; // TODO find a better val
      let numArr = [];
      // checks if num is already in Array. If not add it. 
      while(numArr.length < arraySize) {
        let num = Math.floor(Math.random()*recipeSize) +1;
        if(numArr.indexOf(num) === -1)  numArr.push(num)
      }
      setNumArray(numArr)
    }

    // SPACE BAR START
    // Triggers the changeNum by pressing space. UseKey is a custom hook downloaded from: https://react-hooks.org/docs/useKey
    function spacePress(e) {
      changeObject2();
    }
    useKey(["Space"], spacePress);

    // This snippet prevents the space bar from triggering the the buttons when they are in focus/selected
    window.onkeydown = function (event) {
      if (event.keyCode === 32) {
        event.preventDefault(); // Basically states that space's default action should not be taken as it usually is.
      }
    // SPACE BAR END
  };

  return (
    <div className="App">
      <div>
        <h1> Hello Foodpreppers</h1>
      </div>
      <div> 
        <p> Press space to generate new objects</p>
      </div>
      <div>
        {/* TODO: Disable focus on the buttons after click */}
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
    </div>
  );
}

export default App;
