/**
 * @jsx React.DOM
 */

define([
  'underscore',
  'react',
  'bacon',
  './inputs/text-input'
], function(_, React, Bacon, TextInput) {
  'use strict';

  var Application = React.createClass({displayName: 'Application',
    render: function() {
      return (
        React.DOM.div(null, 
          React.DOM.h1(null, "React FRP"),

          React.DOM.div(null, 
            TextInput(null ),
            TextInput(null ),
            TextInput(null ),
            TextInput(null )
          )

        )
      );
    }
  });

  return Application;
});