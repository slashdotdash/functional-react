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
      return { value: null };
    },

    componentDidMount: function() {
      this.unsubscribe = this.props.stream.onValue(function(v) {
        this.setState({ value: v });
      }.bind(this));
    },

    componentWillUnmount: function() {
      return unsubscribe && unsubscribe();
    },

    render: function() {
      return (
        React.DOM.label( {style:{width: '5em', display: 'inline-block'}}, this.state.value,"%")
      );
    }
  });
});