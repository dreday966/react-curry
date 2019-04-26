Inspired by curry in functional programming

## Idea
In react, we deal all view elements as components. And these components are like functions which recieves props and return a view (dom or html). props => html. Most of our time is to write some convinient function that have some fixed prop so that we make a new component. For example, I want to make a div whose backgroud is always blue. We may write code like this:
```
const BlueDiv = ({style, ...otherProps}) => {
  <div style={{background: blue, ...style}} {...otherProps}/>
}
```
Now you can just write like below.
```
const BlueDiv = curry('div', {style: {backgroundColor: 'blue'}});
```

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

### use with your own component

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
const SqureImageAndText = curry(ImageAndText, {
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
Now using ramda merge function, will remove this dependency if get more than 50 stars.

