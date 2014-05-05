/**
 * @jsx React.DOM
 */

define([
  'react',
  'bacon',
  'bacon.model',
  'underscore',
  './inputs/text-input',
  './outputs/label-output'
], function(React, Bacon, Model, _, TextInput, LabelOutput) {
  'use strict';

  var data = {

  };

  var levers = [
    { name: 'a', value: 1.0 },
    { name: 'b', value: 1.0 },
    { name: 'c', value: 1.0 },
    { name: 'd', value: 1.0 }
  ];  

  var model = Bacon.Model({
    a: 1.0,
    b: 1.0,
    c: 1.0,
    d: 1.0
  })

  model.onValue(function(v) {
    console.log('model.onValue', v);
  });

  var sum = model.map(function(m) {
    return parseFloat(m.a, 10) + parseFloat(m.b, 10) + parseFloat(m.c, 10) + parseFloat(m.d, 10);
  });

  function toFloat(value) {
    return parseFloat(value, 10);
  }

  function proportion(value, total) {
    console.log('value', value, 'total', total);
    return value / total;
  }

  function toPercentage(value) {
    return value * 100;
  }

  function toOutput(lever) {
    var output = model.lens(lever).map(toFloat)
      .combine(sum, proportion)
      .map(toPercentage)
      .map(Math.round);

    output.onValue(function(v) { 
      console.log(lever, v + '%'); 
    });
    
    return output;
  }
  
  var inputs = [
    TextInput( {model:model.lens('a')} ),
    TextInput( {model:model.lens('b')} ),
    TextInput( {model:model.lens('c')} ),
    TextInput( {model:model.lens('d')} ),
  ];

  var outputs = [
    LabelOutput( {stream:toOutput('a')} ),
    LabelOutput( {stream:toOutput('b')} ),
    LabelOutput( {stream:toOutput('c')} ),
    LabelOutput( {stream:toOutput('d')} )
  ]

  var Application = React.createClass({displayName: 'Application',
    render: function() {
      return (
        React.DOM.div(null, 
          React.DOM.h1(null, "React FRP"),
          React.DOM.p(null, inputs),
          React.DOM.p(null, outputs)
        )
      );
    }
  });

  return Application;
});