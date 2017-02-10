inspired by curry in functional programming

## intro
because react component always contains only one parameter which is props, my curry
function's work is to deep merge two props.

## how to install
```
npm install --save react-curry
```

## use case
when you want write some similar components.

<img style="width: 100px" src="./water.png"/>
<img style="width: 100px" src="./google.png"/>

these component show green border when selected
```
import React from 'react';
import curry from 'react-curry';

// component which will show green border when pass selected = true
const GreenBox = ({selected, InnerComponent, innerProps, size}) => (
	<div 
		style={{
			border: selected ? 'solid 2px #1fbd87' : undefined,
			width: size.width,
			height: size.height,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
		{
			<InnerComponent selected={selected} {...innerProps} />
		}
	</div>
);

// Green box with inner text
const TextGreenBox = curry(GreenBox, {
	InnerComponent: ({text, selected}) => <p style={{color: selected ? '#1fbd87' : '#666666'}}>{text}</p>,
	size: {
		height: '42px',
		width: '123px'
	}
});

// Green box with inner img
const ImgGreenBox = curry(GreenBox, {
	InnerComponent: ({imgSrc}) => <img src={imgSrc} style={{ width: '100px' }} />,,
	size: {
		height: '128px',
		width: '128px'
	}
});
```

## dependencies
using lodash merge function, will remove this dependency if stars more than 200
react

