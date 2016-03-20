import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { contextTypes } from '../../utils/decorators/withContext.js';

import * as userActions from '../../actions/userActions.js';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';

@connect(state => {
  return {
    user: state.user,
  };
}, userActions)
export default class ChangePassword extends Component {
  static contextTypes = contextTypes;
  static propTypes = {
    user: PropTypes.object.isRequired,
    changePassword: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      oldpassword: null,
      newpassword: null,
    };
  }

  render() {
    const paperStyle = {
      height: 280,
      width: 290,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <Paper zDepth={1} style={paperStyle}>
        <h3>{this.context.t('changePassword.title')}</h3>

        <TextField
          floatingLabelText={this.context.t('changePassword.oldPassword')}
          type="password"
          onChange={::this._onOldPasswordChange} />

        <TextField
          floatingLabelText={this.context.t('changePassword.newPassword')}
          type="password"
          onChange={::this._onNewPasswordChange} />

        <RaisedButton
          label={this.context.t('changePassword.changePasswordButton')}
          primary={true}
          style={{marginTop: 15}}
          onClick={::this._onChangePassword}
          disabled={!this.state.oldpassword && !this.state.newpassword} />

      </Paper>
    );
  }
  _onOldPasswordChange(e) {
    this.setState({oldpassword: e.target.value});
  }
  _onNewPasswordChange(e) {
    this.setState({newpassword: e.target.value});
  }
  _onChangePassword() {
    this.props.changePassword(this.props.user.playerId, this.state);
  }
}