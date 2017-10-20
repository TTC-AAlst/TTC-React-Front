import React, {Component} from 'react';
import PropTypes, {connect, keyMirror} from '../PropTypes.js';

import {TabbedContainer} from '../controls/TabbedContainer.js';
import AdminPlayers from './AdminPlayers.js';
import AdminTeams from './AdminTeams.js';
import AdminDev from './AdminDev.js';
import AdminPlayerLineup from './AdminPlayerLineup.js';
import ProfilePhotoForm, {ProfilePhotoAvatarForm} from '../users/ProfilePhotoForm.js';
import {AdminEmail} from './AdminEmail.js';
import {AdminMatches} from './AdminMatches.js';

const tabEventKeys = keyMirror({
  players: '',
  teams: '',
  formation: '',
  pictures: '',
  emails: '',
  matches: '',
  dev: '',
});

@connect(state => {
  return {
    config: state.config,
    user: state.user,
    players: state.players,
    clubs: state.clubs,
    matches: state.matches,
    teams: state.teams,
    admin: state.admin,
  };
})
export default class Admin extends Component {
  static contextTypes = PropTypes.contextTypes;
  static propTypes = {
    config: PropTypes.object.isRequired,
    user: PropTypes.UserModel.isRequired,
    matches: PropTypes.MatchModelList.isRequired,
    teams: PropTypes.TeamModelList.isRequired,
    players: PropTypes.PlayerModelList.isRequired,
    admin: PropTypes.shape({
      players: PropTypes.object.isRequired, // = gestopte spelers
    }).isRequired,
    params: PropTypes.shape({
      tabKey: PropTypes.string
    }),
  }

  _renderSection(eventKey) {
    switch (eventKey) {
    case tabEventKeys.teams:
      return <AdminTeams teams={this.props.teams} />;
    case tabEventKeys.players:
      return <AdminPlayers players={this.props.players} recreantAndQuitters={this.props.admin.players} />;
    case tabEventKeys.formation:
      return <AdminPlayerLineup />;
    case tabEventKeys.pictures:
      return (
        <div>
          <h1 style={{marginLeft: 25}}>Foto</h1>
          <ProfilePhotoForm admin={true} />
          <hr style={{marginTop: 50}} />
          <h1 style={{marginLeft: 25}}>Avatar</h1>
          <ProfilePhotoAvatarForm admin={true} />
        </div>
      );
    case tabEventKeys.emails:
      return <AdminEmail />;
    case tabEventKeys.dev:
      return <AdminDev />;
    case tabEventKeys.matches:
      return <AdminMatches />;
    }
  }

  render() {
    if (!this.props.user.isAdmin()) {
      return null;
    }

    const tabConfig = [{
      key: tabEventKeys.players,
      title: 'Spelers',
    }, {
      key: tabEventKeys.teams,
      title: 'Teams',
    }, {
      key: tabEventKeys.formation,
      title: 'Opstellingen',
    }, {
      key: tabEventKeys.matches,
      title: 'Matches',
    }, {
      key: tabEventKeys.pictures,
      title: 'Foto\'s',
    }, {
      key: tabEventKeys.emails,
      title: 'Email',
    }, {
      key: tabEventKeys.dev,
      title: 'Dev',
    }];

    return (
      <TabbedContainer
        params={this.props.params}
        style={{marginTop: 10, marginBottom: 20}}
        defaultTabKey={tabEventKeys.players}
        route={{base: this.context.t.route('admin')}}
        tabKeys={tabConfig}
        tabRenderer={::this._renderSection} />
    );
  }
}
