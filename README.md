inspired by curry in functional programming

## intro
because react component always contains only one parameter which is props, my curry
function's work is to deep merge props.

## how to install
```
npm install --save react-curry
```

## usage

### use with native element
```
import React from 'react';
import curry from 'react-curry';

const BlueDiv = curry('div', {style: {backgroundColor: 'blue'}});

// Now you get a blue div component;
React.render(
  <BlueDiv>
    I am a blue div
  </BlueDiv>,
  document.getElementById('root')
);
```

### use with your component

```
import React from 'react';
import curry from 'react-curry';

// let us create a simple component which compose img and span
const ImageAndText = ({size, text, imgSrc}) => (
  <div style={{width: size.width, height: size.height}}>
    <img src={imgSrc}/>
    <span>{text}</span>
  </div>
);

// Now you get a size fixed ImageAndText component
const SqureImageAndText curry(ImageAndText, {
  size: {
    width: '100px',
    height: '100px'
  }
});

// u can use it;
React.render(
  <SqureImageAndText imgSrc="https://www.google.com.hk/search?safe=strict&site=&q=%E5%85%83%E5%AE%B5%E8%8A%82&oi=ddle&ct=lantern-festival-2017-china-hong-kong-5653647470886912-hp&hl=zh-CN&sa=X&ved=0ahUKEwixx7mn0YfSAhVIoZQKHTzEAR0QPQgE" text="hello world" />,
  document.getElementById('root')
);
```

## dependencies
using lodash merge function, will remove this dependency if stars more than 200
react

