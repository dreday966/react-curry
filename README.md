inspired by curry in functional programming

## intro
because react component always contains only one parameter which is props, my curry
function's work is to deep merge two props.

## how to install
```
npm install --save react-curry
```

## how to use
```
import React from 'react';
import curry from 'react-curry'; // just a function
const Div = (props) => <div {...props}/>;

const GreenDiv = curry(Div, {style: {backgroundColor: 'green'}});

React.render(
  <GreenDiv>Hello world</GreenDiv>,
  document.getElementById('root')
);
```