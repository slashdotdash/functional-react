require.config({
  paths : {
    bacon: '../vendor/bacon',
    'bacon.model': '../vendor/bacon.model',
    react: '../vendor/react'
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