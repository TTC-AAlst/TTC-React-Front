import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { contextTypes } from '../../utils/decorators/withContext.js';

import * as loginActions from '../../actions/userActions.js';
import PlayerAutoComplete from '../players/PlayerAutoComplete.js';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';

@connect(() => ({}), loginActions)
export class ForgotPassword extends Component {
  static contextTypes = contextTypes;
  static propTypes = {
    requestNewPassword: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      playerId: null,
      email: null,
    };
  }

  render() {
    const t = this.context.t;
    const paperStyle = {
      height: 270,
      width: 290,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <Paper zDepth={1} style={paperStyle}>
        <h3>{t('changePassword.newPassword')}</h3>
        <PlayerAutoComplete
          selectPlayer={id => this.setState({playerId: id})}
          floatingLabelText={t('login.loginName')} />

        <TextField
          floatingLabelText={this.context.t('player.email')}
          onChange={e => this.setState({email: e.target.value})} />

        <RaisedButton
          label={t('password.sendNewButton')}
          primary={true}
          style={{marginTop: 15}}
          onClick={() => this.props.requestNewPassword(this.state)}
          disabled={!this.state.playerId && !this.state.email} />

      </Paper>
    );
  }
}




@connect(() => ({}), loginActions)
export default class Login extends Component {
  static contextTypes = contextTypes;
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      playerId: null,
      password: null,
    };
  }

  render() {
    const t = this.context.t;
    const paperStyle = {
      height: 320,
      width: 290,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <Paper zDepth={1} style={paperStyle}>
        <h3>{t('login.title')}</h3>
        <span>{t('login.introText')}</span>
        <PlayerAutoComplete
          selectPlayer={id => this.setState({playerId: id})}
          floatingLabelText={t('login.loginName')} />

        <TextField
          floatingLabelText={t('login.password')}
          hintText={t('login.passwordHint')}
          hintStyle={{fontSize: 14}}
          type="password"
          onChange={e => this.setState({password: e.target.value})} />

        <RaisedButton
          label={t('login.loginButton')}
          primary={true}
          style={{marginTop: 15}}
          onClick={() => this.props.login(this.state)}
          disabled={!this.state.playerId} />

        <br />
        <br />
        <Link to={t.route('forgotPassword')} className="pull-right" style={{margin: 20, fontSize: 18}}>
          {t('password.forgotLink')}
        </Link>
      </Paper>
    );
  }
}