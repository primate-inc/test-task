import StyleDictionary from 'style-dictionary';
import config from '../../examples/mono.config.js';

import hexToHSL from './hexToHSL.js';
import deepMapSearch from './deepMapSearch.js';

// Transform px values to rem
StyleDictionary.registerTransform({
  name: 'dimension/pxToRem',
  type: 'value',
  matcher: token => {
    return (token.unit === 'pixel' || token.type === 'dimension') && token.value !== 0
  },
  transformer: token => {
    // Load Base Font Size from Config
    const fontBasePx = config.basePxFontSize || 16
    return `${token.value/fontBasePx}rem`
  }
})

// Convert HEX color to HSLA
StyleDictionary.registerTransform({
  name: 'color/hsla',
  type: 'value',
  matcher: token => {
    return token.type === 'color' && token.value !== 0
  },
  transformer: token => {
    return `${hexToHSL(token.value)}`
  }
})

StyleDictionary.registerTransform({
  name: 'font/fluid',
  type: 'value',
  matcher: token => {
    if (token.attributes != undefined) {
      if (token.attributes.category != undefined) {
        const description = typeof(token.description) == 'string' ? token.description : ''
        return ['font'].includes(token.attributes.category) && description.includes('fluid-')
      }
    }
    return false;
  },
  transformer: token => {
    if (token.description != undefined) return `("${token.description}": ${token.value})`;

    return token.value;
  }
})

// Create SCSS map if value is an object
StyleDictionary.registerTransform({
  name: 'scss/deepMap',
  type: 'value',
  matcher: token => {
    return typeof(token.value) == 'object' //  token.type === 'custom-fontStyle' || token.type === 'custom-grid'
  },
  transformer: token => {
    return deepMapSearch(token.value);
  }
})

// Filter out typography to prevent double font tokens
StyleDictionary.registerFilter({
  name: 'noTypography',
  matcher: function(token) {
    if (token.attributes != undefined) {
      if (token.attributes.category != undefined) {
        return !['typography'].includes(token.attributes.category)
      }
    }
    return true;

    // return !['typography'].includes(token.attributes.category)
  }
})

// Generic filtering
StyleDictionary.registerFilter({
  name: 'validToken',
  matcher: function(token) {
    return ['dimension', 'string', 'number', 'color'].includes(token.type)
  }
})

