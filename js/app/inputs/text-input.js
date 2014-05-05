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
      return { value: this.props.model.get() };
    },

    componentDidMount: function() {
    },

    componentWillUnmount: function() {
    },

    onChange: function(e) {
      this.setState({ value: e.target.value }, this.notifyModel);
    },

    notifyModel: function() {
      this.props.model.set(this.state.value);
    },

    render: function() {
      return (
        React.DOM.input( {value:this.state.value, onChange:this.onChange} )
      );
    }
  });
});