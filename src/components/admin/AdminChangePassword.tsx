import React, {Component} from 'react';
import TextField from '@mui/material/TextField';
import PropTypes, {connect} from '../PropTypes';
import * as userActions from '../../actions/userActions';

import PlayerAutoComplete from '../players/PlayerAutoComplete';
import {MaterialButton} from '../controls/Buttons/MaterialButton';

type AdminChangePasswordProps = {
  adminSetNewPassword: Function;
  onEnd: Function;
}

type AdminChangePasswordState = {
  playerId: null | number;
  newPassword: null | string;
}

class AdminChangePassword extends Component<AdminChangePasswordProps, AdminChangePasswordState> {
  static contextTypes = PropTypes.contextTypes;

  constructor(props) {
    super(props);
    this.state = {
      playerId: null,
      newPassword: null,
    };
  }

  render() {
    const paperStyle: React.CSSProperties = {
      marginLeft: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <div style={paperStyle}>
        <h3>{this.context.t('password.changeTitle')}</h3>

        <PlayerAutoComplete
          selectPlayer={playerId => this.setState({playerId})}
          placeholder={this.context.t('login.loginName')}
        />

        <br />

        <TextField
          label={this.context.t('password.newPassword')}
          type="password"
          onChange={e => this.setState({newPassword: e.target.value})}
        />

        <br />

        <MaterialButton
          variant="contained"
          label={this.context.t('profile.editPassword')}
          primary
          style={{marginTop: 15}}
          onClick={() => {
            this.props.adminSetNewPassword(this.state);
            this.props.onEnd();
          }}
          disabled={!this.state.playerId && !this.state.newPassword}
        />
      </div>
    );
  }
}

export default connect(() => ({}), userActions)(AdminChangePassword);
