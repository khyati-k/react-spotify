// import React from 'react';
// import { JSDOM } from 'jsdom';
// import { expect } from 'chai';


// const doc = new JSDOM('<!doctype html><html><body></body></html>');
// const win = window.defaultView;


// global.window = win;
// global.document = doc;

// Object.keys(window).forEach((key) => {
//   if (!(key in global)) {
//     global[key] = window[key];
//   }
// });

// global.React = React;
// global.expect = expect;
import React from 'react';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';

const doc = new JSDOM('<html><body></body></html>');
const { window } = doc;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

global.React = React;
global.expect = expect;
