'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ComponentOrElementName, preProps) {

  return typeof ComponentOrElementName === 'string' ? function (props) {
    return _react2.default.createElement(ComponentOrElementName, (0, _lodash.merge)(preProps, props));
  } : function (props) {
    return _react2.default.createElement(ComponentOrElementName, (0, _lodash.merge)(preProps, props));
  };
};
