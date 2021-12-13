// import the react and reactDom  libraries

// Creat a react component

// Take the react component and shoe it on the screen




// Import the react and reactDom  libraries
import React from 'react';
import ReactDOM from 'react-dom';

const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";

// Creat a react component
const App = () => {
  return (
    <div> 
    <div> {data[0] + ' ' + data[1]}</div>
    <div> {`${number1} + ${number2} = ${number1+number2}`} </div>
    <div> {`The string's length is ${string.length}`}</div>
    </div>
  
  )
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
  document.querySelector('#root')
);
