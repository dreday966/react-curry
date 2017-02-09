import React from 'react';
import {merge} from 'lodash';

export default (Component, obj) => (
  (props) => <Component {...merge(obj, props)}/>
);
