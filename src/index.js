import React from 'react';
import { merge } from 'lodash';

export default (ComponentOrElementName, preProps) => {
  const merged = { ...merge(preProps, props) };

  return (typeof ComponentOrElementName === 'string')
    ? (props) => React.createElement(ComponentOrElementName, merged)
    : (props) => <Component {...merged} />
};
