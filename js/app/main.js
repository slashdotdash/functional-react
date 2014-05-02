require.config({
  paths : {
    'backbone.babysitter': '../vendor/backbone.babysitter',
    backbone: '../vendor/backbone',
    'backbone.wreqr': '../vendor/backbone.wreqr',
    bacon: '../vendor/Bacon',
    d3 : '../vendor/d3',
    jquery : '../vendor/jquery',
    marionette : '../vendor/backbone.marionette',
    nvd3: '../vendor/nv.d3',
    react: '../vendor/react',
    tpl: '../vendor/tpl',
    underscore : '../vendor/underscore'
  },
  shim : {
    d3 : {
      exports: 'd3'
    },
    jquery : {
      exports : 'jquery'
    },
    nvd3 : {
      deps : ['d3'],
      exports: 'nv'
    },
    underscore : {
      exports : '_'
    }
  }
});

require([
  'react',
  'application'
], function(React, Application) {
  'use strict';
  
  React.renderComponent(
    new Application(),
    document.getElementById('application')
  );
});