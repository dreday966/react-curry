import React from 'react';
import { merge } from 'lodash';

export default (ComponentOrElementName, preProps) => {

  return (typeof ComponentOrElementName === 'string')
    ? (props) => React.createElement(ComponentOrElementName, merge(preProps, props))
    : (props) => <ComponentOrElementName {...merge(preProps, props)} />
};
