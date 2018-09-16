import React from 'react';
import PropTypes, {connect} from '../PropTypes.js';
import {FullScreenSpinner} from '../controls/controls/Spinner.js';
import App from './App.js';

@connect(state => ({config: state.config}))
export class ComponentWithLayout extends React.Component {
  static propTypes ={
    Component: PropTypes.any.isRequired,
    config: PropTypes.map.isRequired,
  }

  render() {
    const {Component, config, ...props} = this.props;
    return (
      <App {...props}>
        {config.get('initialLoadCompleted') ? <Component {...props}/> : <FullScreenSpinner />}
      </App>
    );
  }
}