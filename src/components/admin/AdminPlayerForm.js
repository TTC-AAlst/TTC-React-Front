import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { contextTypes } from '../../utils/decorators/withContext.js';

import * as playerActions from '../../actions/playerActions.js';
import { userRoles } from '../../models/UserModel.js';
import PlayerModel from '../../models/PlayerModel.js';

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Panel from 'react-bootstrap/lib/Panel';
import PlayerStyleAutocomplete from '../players/PlayerStyleAutocomplete.js';

@connect(() => ({}), playerActions)
export default class AdminPlayerForm extends Component {
  static contextTypes = contextTypes;
  static propTypes = {
    player: PropTypes.object,
    updatePlayer: PropTypes.func.isRequired,
    onEnd: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    if (!props.player) {
      this.state = new PlayerModel();
    } else {
      this.state = props.player;
    }
  }

  render() {
    const player = this.state;
    const fieldMargin = 30;
    return (
      <div>
        <h3>{player.name || 'Nieuw lid'}</h3>
        <div>
          <Paper style={{padding: 15}}>
            <h4>Persoonlijk</h4>
            <TextField
              floatingLabelText={this.context.t('login.loginName')}
              defaultValue={player.name}
              onChange={e => this.setState({name: e.target.value})} />

            <TextField
              floatingLabelText={this.context.t('player.alias')}
              defaultValue={player.alias} style={{marginLeft: fieldMargin}}
              onChange={e => this.setState({alias: e.target.value})} />

            <br />

            <PlayerStyleAutocomplete t={this.context.t}
              value={player.style.name || ''}
              onChange={text => this.setState({style: Object.assign({}, player.style, {name: text})})}
              style={{marginTop: -25}} />

            <TextField
              floatingLabelText={this.context.t('players.editStyle.bestStroke')}
              defaultValue={player.style.bestStroke} style={{marginLeft: fieldMargin}}
              onChange={e => this.setState({style: Object.assign({}, player.style, {bestStroke: e.target.value})})} />

            <br />

            <PlayerSecuritySelectField value={player.security} onChange={(event, index, value) => this.setState({security: value})} />
          </Paper>


          <Panel style={{marginTop: 20}}>
            <h4>Contact</h4>
            <TextField
              floatingLabelText={this.context.t('player.email')}
              defaultValue={player.contact.email}
              onChange={e => this.setState({contact: Object.assign({}, player.contact, {email: e.target.value})})} />

            <TextField
              floatingLabelText={this.context.t('player.gsm')}
              defaultValue={player.contact.mobile} style={{marginLeft: fieldMargin}}
              onChange={e => this.setState({contact: Object.assign({}, player.contact, {mobile: e.target.value})})} />

            <br />

            <TextField
              floatingLabelText={this.context.t('player.address')}
              defaultValue={player.contact.address}
              onChange={e => this.setState({contact: Object.assign({}, player.contact, {address: e.target.value})})} />

            <TextField
              floatingLabelText={this.context.t('player.city')}
              defaultValue={player.contact.city} style={{marginLeft: fieldMargin}}
              onChange={e => this.setState({contact: Object.assign({}, player.contact, {city: e.target.value})})} />

          </Panel>
        </div>
        <RaisedButton
          label={this.context.t('common.save')}
          primary={true}
          style={{marginTop: 5}}
          onClick={() => {
            this.props.updatePlayer(this.state);
            this.props.onEnd();
          }} />
      </div>
    );
  }
}



class PlayerSecuritySelectField extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <SelectField value={this.props.value} onChange={this.props.onChange} floatingLabelText="Toegang">
        {userRoles.map(role => <MenuItem key={role} value={role} primaryText={role} />)}
      </SelectField>
    );
  }
}