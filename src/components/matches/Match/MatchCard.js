import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { contextTypes } from '../../../utils/decorators/withContext.js';
import withViewport from '../../../utils/decorators/withViewport.js';

import UserModel from '../../../models/UserModel.js';
import MatchModel from '../../../models/MatchModel.js';
import * as matchActions from '../../../actions/matchActions.js';
import { util as storeUtils } from '../../../store.js';

import MatchCardHeader from './MatchCardHeader.js';
import MatchPlayerResults from './MatchPlayerResults.js';
import IndividualMatches from './IndividualMatches.js';
import OpponentClubLocations from './OpponentClubLocations.js';
import SelectPlayersForm from './SelectPlayersForm.js';
import OpponentsLastMatches from './OpponentsLastMatches.js';
import OpponentsFormation from './OpponentsFormation.js';
import MatchReport from './MatchReport.js';
import Scoresheet from './Scoresheet.js';

import Icon from '../../controls/Icon.js';
import PlayersImageGallery from '../../players/PlayersImageGallery.js';

import CardText from 'material-ui/lib/card/card-text';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel';

const tabEventKeys = {
  players: 1,
  individualMatches: 2,
  report: 3,
  opponentClub: 4,
  scoresheet: 5,
  opponentsRanking: 6,
  opponentsFormation: 7,
};

// TODO: request match if not yet present in store

@withViewport
@connect(state => {
  return {
    //config: state.config,
    user: state.user,
    // players: state.players,
    // clubs: state.clubs,
    // matches: state.matches,
    // teams: state.teams,
  };
}, matchActions)
export default class MatchCard extends Component {
  static contextTypes = contextTypes;
  static propTypes = {
    match: PropTypes.instanceOf(MatchModel).isRequired,
    user: PropTypes.instanceOf(UserModel).isRequired,
    getLastOpponentMatches: PropTypes.func.isRequired,
    viewport: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      openTabKey: tabEventKeys.players,
      forceEditPlayers: false
    };
  }

  componentDidMount() {
    // TODO: here check for matches using storeUtils - http request only if matches not yet present in state...
    this.props.getLastOpponentMatches(this.props.match.teamId, this.props.match.opponent);
  }

  _showAccordion() {
    // Otherwise show tabs
    return this.props.viewport.width < 600;
  }

  render() {
    var match = this.props.match;
    const showIndividualMatches = match.games.size !== 0;
    const showOpponentClubLocation = !match.isHomeMatch && !match.isPlayed;
    const showScoresheet = match.scoreType === 'BeingPlayed';

    if (this._showAccordion()) {
      return (
        <MatchCardHeader {...this.props} backgroundColor="#fafafa" isOpen={true} style={{margin: 50}}>
          <CardText expandable={true} style={{paddingTop: 0, paddingLeft: 5, paddingRight: 5}}>
            <PanelGroup activeKey={this.state.openTabKey} onSelect={::this._onTabSelect} accordion>
              {this._renderNavItem(tabEventKeys.players, 'players', this._getPlayersEditIcon())}
              {showIndividualMatches ? this._renderNavItem(tabEventKeys.individualMatches, 'matches') : null}
              {showOpponentClubLocation ? this._renderNavItem(tabEventKeys.opponentClub, 'club') : null}
              {showScoresheet ? this._renderNavItem(tabEventKeys.scoresheet, 'scoresheet') : null}
              {this._renderNavItem(tabEventKeys.opponentsRanking, 'opponentsRanking')}
              {this._renderNavItem(tabEventKeys.opponentsFormation, 'opponentsFormation')}
              {this._renderNavItem(tabEventKeys.report, 'report')}
              {this.props.user.isDev() ? this._renderNavItem('admin', 'admin') : null}
            </PanelGroup>
          </CardText>
        </MatchCardHeader>
      );
    }

    return (
      <MatchCardHeader {...this.props} backgroundColor="#fafafa" isOpen={true}>
        <CardText expandable={true} style={{paddingTop: 0}}>
          <Nav bsStyle="tabs" activeKey={this.state.openTabKey} onSelect={::this._onTabSelect}>
            {this._renderNavItem(tabEventKeys.players, 'players', this._getPlayersEditIcon())}
            {showIndividualMatches ? this._renderNavItem(tabEventKeys.individualMatches, 'matches') : null}
            {showOpponentClubLocation ? this._renderNavItem(tabEventKeys.opponentClub, 'club') : null}
            {showScoresheet ? this._renderNavItem(tabEventKeys.scoresheet, 'scoresheet') : null}
            {this._renderNavItem(tabEventKeys.opponentsRanking, 'opponentsRanking')}
            {this._renderNavItem(tabEventKeys.opponentsFormation, 'opponentsFormation')}
            {this._renderNavItem(tabEventKeys.report, 'report')}
            {this.props.user.isDev() ? this._renderNavItem('admin', 'admin') : null}
          </Nav>
          <div className="match-card-tab">
            {this._renderTabContent()}
          </div>
        </CardText>
      </MatchCardHeader>
    );
  }
  _getPlayersEditIcon() {
    var match = this.props.match;
    var isAllowedToEdit = this.props.user.canManageTeam(match.teamId);
    return isAllowedToEdit && !match.isSyncedWithFrenoy ? (
      <Icon fa="fa fa-pencil-square-o" onClick={::this._onStartEditPlayers} className="match-card-tab-icon" />) : null;
  }
  _onStartEditPlayers() {
    this.setState({forceEditPlayers: !this.state.forceEditPlayers});
  }
  _renderNavItem(eventKey, transKey, headerChildren = null) {
    if (!this._showAccordion()) {
      // Tabs
      return (
        <NavItem eventKey={eventKey} title={this.context.t(`match.tabs.${transKey}Title`)}>
          {this.context.t(`match.tabs.${transKey}`)} {headerChildren}
        </NavItem>
      );
    }

    // Accordion
    var header = <div>{this.context.t(`match.tabs.${transKey}Title`)} {headerChildren}</div>;
    return (
      <Panel header={header} eventKey={eventKey} className="match-card-panel clickable" onClick={this._onTabSelect.bind(this, eventKey)}>
        {this._renderTabContent(eventKey)}
      </Panel>
    );
  }
  _onTabSelect(eventKey) {
    this.setState({openTabKey: eventKey});
  }
  _renderTabContent(eventKey) {
    switch (eventKey || this.state.openTabKey) {
    case tabEventKeys.players:
      return this._renderPlayers();
    case tabEventKeys.individualMatches:
      return this._renderIndividualMatches();
    case tabEventKeys.report:
      return this._renderReport();
    case tabEventKeys.opponentClub:
      return this._renderOpponentClub();
    case tabEventKeys.scoresheet:
      return this._renderScoreSheet();
    case tabEventKeys.opponentsRanking:
      return this._renderOpponentsRanking();
    case tabEventKeys.opponentsFormation:
      return this._renderOpponentFormation();
    case 'admin':
      return <div>ID={this.props.match.id}<br />FrenoyId={this.props.match.frenoyMatchId}</div>;
    }
    return 'Unknown';
  }

  _renderOpponentClub() {
    return <OpponentClubLocations club={this.props.match.getOpponentClub()} t={this.context.t} />;
  }
  _renderIndividualMatches() {
    return <IndividualMatches match={this.props.match} ownPlayerId={this.props.user.playerId} t={this.context.t} />;
  }
  _renderOpponentsRanking() {
    return <OpponentsLastMatches match={this.props.match} />;
  }
  _renderOpponentFormation() {
    var formations = storeUtils.matches
      .getFormation(this.props.match)
      .sort((a, b) => a.count < b.count ? 1 : -1);
    return <OpponentsFormation formations={formations} />;
  }
  _renderScoreSheet() {
    return (<Scoresheet match={this.props.match} t={this.context.t} />);
  }
  _renderReport() {
    return <MatchReport match={this.props.match} t={this.context.t} user={this.props.user} />;
  }


  _renderPlayers() {
    var match = this.props.match;
    var team = match.getTeam();

    if (match.isSyncedWithFrenoy) {
      return <MatchPlayerResults match={match} team={match.getTeam()} t={this.context.t} />;
    }

    if (this.state.forceEditPlayers || (this.props.user.canManageTeam(match.teamId) && match.players.size < team.getTeamPlayerCount())) {
      return <SelectPlayersForm match={match} user={this.props.user} />;
    }

    if (match.players.size === 0 || !this.props.user.playerId) {
      let standardPlayers = team.getPlayers('standard').map(ply => ply.player);
      return <PlayersImageGallery players={standardPlayers} user={this.props.user} competition={team.competition} viewport={this.props.viewport} />;
    }

    return (
      <PlayersImageGallery
        players={match.getOwnPlayerModels()}
        user={this.props.user}
        competition={team.competition}
        viewport={this.props.viewport} />
    );
  }
}