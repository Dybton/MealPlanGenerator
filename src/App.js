import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useKey } from "rooks";

function App() {
  const [numArray, setNumArray] = useState([1,2,3,4,5])
  const [lockedValues, setLockedValues] = useState([]);


  // The useEffect below is only used to test. 
  useEffect(() => console.log(lockedValues, [lockedValues]));

  // function adds a new number either to the left or the right of the array. 
  const increaseArrSize = (direction) => {
    let recipeSize = 100; //Note this is a placeholder until I find a better val - TODO, find a better val
    // TODO add the functionality that lets me add to specifc indices 
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

  const updateLockedElementPositions = () => {
    // TODO
    // If we add a new value to our num array, which has smaller or equal index value as the elements in the locked array.
    // we need to increment the pos value of our locked arrays

    // Question: Where should this be called?
    // I guess whenever we add to array?
  }

  // TODO: Lock arrayElement, so that it doesn't get changed on space
  // NOTE THIS IS NOT DONE
  const lockElement = (index) => {
    // const tempSet = lockedValues
    // tempSet.put([1,3]);
    // tempSet.put([1,4]);
    // console.log(tempSet)
    // setLockedValues(tempSet);
    const lockedElement = {"value": numArray[index], "position": index}
    // If there is not already en element with the same value, then add a new object.
    setLockedValues(lockedValues => [...lockedValues, lockedElement])
    for(const x of lockedValues) {
      console.log(lockedValues.value)
  }


    // setLockedArray(lockedArray => [...lockedArray, lockedElement])
    // console.log(lockedArray)
    
    // TODO: Add locked items to the array. Duplicates are not allowed

    
  }
  
  // This snippet prevents the spacebar from triggering the the buttons when they are in focus/selected
  window.onkeydown = function (event) {
    if (event.keyCode === 32) {
      event.preventDefault(); // Basically states that space's default action should not be taken as it usually is.
    }
};
  
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
      // TODO check if any locked values exists. If so override the arr with them
      // 1. Go through array of locked values and print values and array out
      setNumArray(numArr)
    }
    // Triggers the changeNum by pressing space. UseKey is a custom hook downloaded from: https://react-hooks.org/docs/useKey
    function spacePress(e) {
      changeNum();
    }
    useKey(["Space"], spacePress);

  return (
    <div className="App">
      <div >
        <h1> Hello Foodpreppers</h1>
      </div>
      <div> 
        <p> Press space to generate new numbers</p>
      </div>
      <div> 
      {numArray.map(number => (
        <span> {number} </span>
      ))}
      </div>
      <div>
        {/* TODO: Disable focus on the buttons after click */}
        <button onClick={() => increaseArrSize("left")}>Left</button> 
        <button onClick={() => increaseArrSize("right")}>Right</button> 
        <button onClick={() => increaseArrSize("middle")}>Middle</button>
        <button onClick={() => decreaseArrSize(0)}>Remove</button> 
        <button onClick={() => lockElement(2)}>Lock middle</button> 
      </div>

    </div>
  );
}

export default App;
