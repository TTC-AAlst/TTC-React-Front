import React, { Component } from 'react';
import PropTypes, { connect, withViewport, withContext, withStyles } from '../PropTypes.js';

import Header from '../skeleton/Header';
import Footer from '../skeleton/Footer';
import Intro from './Intro.js';
import Grid from 'react-bootstrap/lib/Grid';
import { FullScreenSpinner } from '../controls.js';

import Snackbar from 'material-ui/Snackbar';
import * as configActions from '../../actions/configActions.js';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

@connect(state => {
  return {
    config: state.config,
    user: state.user,
  };
}, configActions)
@withContext
@withViewport
@withStyles(require('./App.css'))
export default class App extends Component {
  static propTypes = {
    config: PropTypes.map.isRequired,
    user: PropTypes.UserModel,
    children: PropTypes.element,
    clearSnackbar: PropTypes.func.isRequired,
    viewport: PropTypes.viewport,
  };

  render() {
    var containerStyle = {
      // TODO: idea was to show more of the match cards when <600 but the padding:5 creates a horizontal scrollbar?
      //paddingLeft: this.props.viewport.width < 600 ? 5 : undefined,
      //paddingRight: this.props.viewport.width < 600 ? 5 : undefined,
    };

    const isBigTodayMatches = this.props.config.get('container100PerWidth');
    if (isBigTodayMatches) {
      containerStyle.width = '100%';
    }

    return (
      <div id="react">
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div style={{height: '100%'}}>
            <div className="wrapper">
              <Header user={this.props.user} />
              <Grid style={containerStyle}>
                {this.props.children ?
                  (!this.props.config.get('initialLoadCompleted') ? <FullScreenSpinner /> : this.props.children) :
                  <Intro />
                }
              </Grid>
              <div className="push"></div>
            </div>
            {!isBigTodayMatches ? <Footer /> : null}
            <Snackbar
              open={!!this.props.config.get('snackbar')}
              message={this.props.config.get('snackbar') || ''}
              autoHideDuration={4000}
              onRequestClose={::this._onCloseSnackbar} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
  _onCloseSnackbar() {
    this.props.clearSnackbar();
  }
}