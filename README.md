inspired by curry in functional programming


## 1.how to use
```
import React from 'react';
import curry from 'react-curry';
const Div = (props) => <div {...props}/>;

const GreenDiv = curry(Div, {style: {backgroundColor: 'green'}});

React.render(
  <GreenDiv>Hello world</GreenDiv>,
  document.getElementById('root')
);
```