import React from 'react';
import { mergeDeepRight } from 'ramda';

export default (ComponentOrElementName, preProps) => props =>
  (typeof ComponentOrElementName === 'string')
    ? React.createElement(ComponentOrElementName, mergeDeepRight(preProps, props))
    : <ComponentOrElementName {...mergeDeepRight(preProps, props)} />
