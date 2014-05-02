/**
 * @jsx React.DOM
 */

define([
  'underscore',
  'react'
], function(_, React) {
  'use strict';

  return React.createClass({
    getInitialState: function() {
      return { value: 0 };
    },

    componentDidMount: function() {
    },

    componentWillUnmount: function() {
    },

    render: function() {
      return (
        React.DOM.input( {value:this.state.value} )
      );
    }
  });
});