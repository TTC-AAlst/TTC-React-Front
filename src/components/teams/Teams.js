import React, {Component} from 'react';
import PropTypes, {connect, withViewport, storeUtil} from '../PropTypes.js';
import moment from 'moment';
import cn from 'classnames';
import Immutable from 'immutable';
import http from '../../utils/httpClient.js';

import {TabbedContainer} from '../controls/TabbedContainer.js';

import {OwnClubId} from '../../models/ClubModel.js';
import {editMatchPlayers} from '../../actions/matchActions.js';

import {DivisionRanking} from './DivisionRanking.js';
import {TeamOverview} from './TeamOverview.js';
import {TeamHeader, TeamTabTitle} from './TeamHeader.js';
import {Icon, TrophyIcon, Badgy, SaveButton, FrenoyButton, ExcelButton, ButtonStack, EditButton} from '../controls.js';
import {SwitchBetweenFirstAndLastRoundButton} from './SwitchBetweenFirstAndLastRoundButton.js';
import PlayersCardGallery from '../players/PlayersCardGallery.js';
import MatchesTable from '../matches/MatchesTable.js';

export function getFirstOrLastMatches(allMatchesToCome, filter) {
  if (filter === 'all') {
    return {
      matches: allMatchesToCome,
      hasMore: false
    };
  }

  const firstMatches = allMatchesToCome.filter(x => x.date.month() >= 7);
  const lastMatches = allMatchesToCome.filter(x => x.date.month() < 7);
  if (filter === 'first' && firstMatches.length !== 0) {
    return {
      matches: firstMatches,
      hasMore: lastMatches.length !== 0
    };
  }
  return {
    matches: lastMatches,
    hasMore: firstMatches.length !== 0
  };
}
export function getFirstOrLast() {
  const today = moment();
  return today.month() >= 7 && !(today.month() === 11 && today.date() > 20) ? 'first' : 'last';
}

@connect(state => {
  return {
    config: state.config,
    user: state.user,
    players: state.players,
    clubs: state.clubs,
    matches: state.matches,
    teams: state.teams,
  };
}, {editMatchPlayers})
@withViewport
export default class Teams extends Component {
  static contextTypes = PropTypes.contextTypes;
  static propTypes = {
    config: PropTypes.object.isRequired,
    user: PropTypes.UserModel.isRequired,
    matches: PropTypes.MatchModelList.isRequired,
    teams: PropTypes.TeamModelList.isRequired,
    viewport: PropTypes.viewport,
    editMatchPlayers: PropTypes.func.isRequired,

    params: PropTypes.shape({
      tabKey: PropTypes.string,
      competition: PropTypes.oneOf(['vttl', 'sporta']).isRequired
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      view: 'main',
      matchesFilter: getFirstOrLast(),
      editMode: false,
      tablePlayers: this._getAlreadyPicked(props),
      tableMatches: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    // TODO: BUG: if you resize the screen (or something else happens like a broadcast), already picked players are lost
    this.setState({tablePlayers: this._getAlreadyPicked(nextProps)});
  }
  _getAlreadyPicked(props) {
    if (props.user.canEditMatchesOrIsCaptain()) {
      var alreadyPicked = [];
      props.matches.forEach(match => {
        const team = match.getTeam();
        const formation = match.getPlayerFormation(this._getPlayerStatus());
        const matchPicked = formation.map(frm => Object.assign({}, frm, {matchId: match.id})).toArray();
        Array.prototype.push.apply(alreadyPicked, matchPicked);
      });
      return alreadyPicked;
    }
    return [];
  }

  _getCompetition() {
    return this.props.params.competition[0].toUpperCase() + this.props.params.competition.substr(1);
  }
  getDefaultTeam() {
    if (this.props.user.playerId) {
      const yourTeams = this.props.user.getTeams().filter(team => team.competition === this._getCompetition());
      if (yourTeams.length === 0) {
        return 'A';
      }
      if (yourTeams.length === 1) {
        return yourTeams[0].teamCode;
      }
      const notReserve = yourTeams.find(t => t.getPlayers('standard').some(p => p.player.id === this.props.user.playerId));
      return notReserve ? notReserve.teamCode : yourTeams[0].teamCode;
    }
    return 'A';
  }

  _isSmall() {
    return this.props.viewport.width < 700;
  }

  _renderTabContent(teamCode) {
    const team = this.props.teams.find(t => t.teamCode === teamCode && t.competition === this._getCompetition());
    if (!team) {
      return null;
    }

    var viewsConfig = [{
      key: 'main',
      text: this.context.t('teamCalendar.viewMain'),
    }, {
      key: 'matches',
      text: this.context.t('teamCalendar.viewMatches')
    }, {
      key: 'ranking',
      text: this.context.t('teamCalendar.viewRanking')
    }, {
      key: 'players',
      text: this.context.t('match.tabs.players')
    }];
    if (this.props.user.playerId && this.props.viewport.width > 1100) {
      viewsConfig.splice(2, 0, {
        key: 'matchesTable',
        text: this.context.t('teamCalendar.playersPicked')
      });
    }

    const {matches} = getFirstOrLastMatches(team.getMatches(), this.state.matchesFilter);
    return (
      <div>
        <div className="btn-toolbar" style={{padding: 10}}>
          <ButtonStack
            config={viewsConfig}
            small={this._isSmall()}
            activeView={this.state.view}
            onClick={view => this.setState({view})}
          />

          {this.state.view.startsWith('matches') && this.props.user.canEditMatchesOrIsCaptain() && matches.some(m => !m.isSyncedWithFrenoy) ? (
            <div className="pull-right" style={{marginLeft: 5}}>
              {this.state.editMode && this.state.view != 'matches' ? (
                <div style={{display: 'inline'}}>
                  <button className="btn btn-danger" style={{marginRight: 5}} onClick={this._saveAndBlockAll.bind(this, true)}>
                    {this.context.t('match.plys.saveAndBlockAll')}
                  </button>
                  {this.props.user.canManageTeams() ? (
                    <SaveButton onClick={this._saveAndBlockAll.bind(this, false)} title={this.context.t('match.plys.tooltipSave')} style={{marginRight: 5}} />
                  ) : null}
                </div>
              ) : null}
              <EditButton
                onClick={() => this.setState({editMode: !this.state.editMode})}
                fa="fa-2x"
                title={this.context.t('match.plys.tooltipOpenForm')}
              />
            </div>
          ) : null}

          <div className="button-bar-right">
            <ExcelButton
              onClick={() => http.download.teamsExcel(this.context.t('teamCalendar.downloadExcelFileName'))}
              tooltip={this.context.t('teamCalendar.downloadExcel')}
            />
            <FrenoyButton team={team} linkTo="results" />
            <FrenoyButton team={team} linkTo="ranking" />
          </div>
        </div>
        <TeamHeader team={team} t={this.context.t} showRanking={!this._isSmall()} />
        {this._renderTabViewContent(team, matches)}
      </div>
    );
  }

  _getPlayerStatus() {
    return this.props.user.canManageTeams() ? 'Major' : 'Captain';
  }
  _saveAndBlockAll(majorBlock) {
    if (!this.state.tableMatches.length) {
      return;
    }

    _(this.state.tablePlayers)
    .filter(tb => this.state.tableMatches.indexOf(tb.matchId) !== -1)
    .groupBy('matchId')
    .forOwn((plyInfos, matchId) => {
      this.props.editMatchPlayers({
        matchId: matchId,
        playerIds: plyInfos.map(x => x.id),
        blockAlso: true,
        newStatus: !majorBlock ? 'Captain' : this._getPlayerStatus()
      }, false)
      .catch(e => console.error('saveAndBlockAll', e));
    });
    this.setState({tableMatches: []});
  }
  _renderTabViewContent(team, matches) {
    switch (this.state.view) {
    case 'main':
      return <TeamOverview team={team} t={this.context.t} user={this.props.user} small={this._isSmall()} />;
    case 'matches':
    case 'matchesTable':
      return (
        <div>
          <MatchesTable
            matches={matches}
            allowOpponentOnly
            striped
            editMode={this.state.editMode}

            tableForm={this.state.view === 'matchesTable'}
            team={team}
            tablePlayers={this.state.tablePlayers}
            onTablePlayerSelect={(plyInfos, match) => this.setState({tablePlayers: plyInfos, tableMatches: this.state.tableMatches.concat([match.id])})}
          />

          <SwitchBetweenFirstAndLastRoundButton setState={::this.setState} matchesFilter={this.state.matchesFilter} t={this.context.t} />
        </div>
      );
    case 'ranking':
      return <DivisionRanking team={team} t={this.context.t} />;
    case 'players':
      return <PlayersCardGallery players={Immutable.List(team.getPlayers().map(x => x.player))} />;
    default:
      return <div />;
    }
  }

  render() {
    const t = this.context.t;
    const tabConfig = this.props.teams.filter(team => team.competition === this._getCompetition()).toArray().map(team => {
      return {
        key: team.teamCode,
        title: '',
        headerChildren: <TeamTabTitle team={team} t={t} showRanking={this._isSmall()} />,
      };
    });

    return (
      <div style={{marginTop: 20, marginBottom: 20}}>
        <TabbedContainer
          params={this.props.params}
          defaultTabKey={this.getDefaultTeam()}
          tabKeys={tabConfig}
          tabRenderer={::this._renderTabContent}
          route={{base: t.route('teams', {competition: this.props.params.competition})}}
          widthTreshold={750} />
      </div>
    );
  }
}
