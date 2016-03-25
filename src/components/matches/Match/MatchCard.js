import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { contextTypes } from '../../../utils/decorators/withContext.js';
import withViewport from '../../../utils/decorators/withViewport.js';
import moment from 'moment';

import UserModel from '../../../models/UserModel.js';
import MatchModel from '../../../models/MatchModel.js';
import * as matchActions from '../../../actions/matchActions.js';
import { setSetting } from '../../../actions/configActions.js';
import { util as storeUtils } from '../../../store.js';

import MatchCardHeader, { BigMatchCardHeader } from './MatchCardHeader.js';
import MatchPlayerResults from './MatchPlayerResults.js';
import IndividualMatches from './IndividualMatches.js';
import OpponentClubLocations from './OpponentClubLocations.js';
import SelectPlayersForm from './SelectPlayersForm.js';
import OpponentsLastMatches from './OpponentsLastMatches.js';
import OpponentsFormation from './OpponentsFormation.js';
import MatchReport from './MatchReport.js';
import MatchForm from './MatchForm.js';
import Scoresheet from './Scoresheet.js';
import Spinner from '../../controls/Spinner.js';

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
    config: state.config,
    user: state.user,
    // players: state.players,
    // clubs: state.clubs,
    readonlyMatches: state.readonlyMatches,
    // teams: state.teams,
  };
}, Object.assign({}, matchActions, {setSetting}))
export default class MatchCard extends Component {
  static contextTypes = contextTypes;
  static propTypes = {
    match: PropTypes.instanceOf(MatchModel).isRequired,
    config: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(UserModel).isRequired,
    viewport: PropTypes.object.isRequired,
    readonlyMatches: PropTypes.object.isRequired,

    viewportWidthContainerCount: PropTypes.number.isRequired,
    big: PropTypes.bool,
    small: PropTypes.bool,
    isOpen: PropTypes.bool,

    getLastOpponentMatches: PropTypes.func.isRequired,
    setSetting: PropTypes.func.isRequired,
  }
  static defaultProps = {
    viewportWidthContainerCount: 1 // The amount of containers next to eachother that display a PlayersImageGallery
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
    return this.props.viewport.width < 700 || this.props.small;
  }

  render() {
    var match = this.props.match;
    const showIndividualMatches = match.games.size !== 0;
    const showOpponentClubLocation = !match.isHomeMatch && !match.isPlayed;
    const showScoresheet = match.scoreType === 'BeingPlayed';

    const HeaderComponent = this.props.big ? BigMatchCardHeader : MatchCardHeader;

    if (this._showAccordion()) {
      return (
        <HeaderComponent {...this.props} backgroundColor="#fafafa" isOpen={this.props.isOpen} style={{margin: 50}} config={this.props.config}>
          <CardText expandable={true} style={{paddingTop: 0, paddingLeft: 5, paddingRight: 5}}>
            <PanelGroup activeKey={this.state.openTabKey} onSelect={::this._onTabSelect} accordion>
              {this._renderNavItem(tabEventKeys.players, 'players', this._getPlayersEditIcon())}
              {this._renderNavItem(tabEventKeys.report, 'report')}
              {showIndividualMatches ? this._renderNavItem(tabEventKeys.individualMatches, 'matches') : null}
              {showScoresheet ? this._renderNavItem(tabEventKeys.scoresheet, 'scoresheet') : null}
              {showOpponentClubLocation ? this._renderNavItem(tabEventKeys.opponentClub, 'club') : null}
              {this._renderNavItem(tabEventKeys.opponentsRanking, 'opponentsRanking')}
              {this._renderNavItem(tabEventKeys.opponentsFormation, 'opponentsFormation')}
              {this.props.user.isDev() ? this._renderNavItem('admin', 'admin') : null}
            </PanelGroup>
          </CardText>
        </HeaderComponent>
      );
    }

    return (
      <HeaderComponent {...this.props} backgroundColor="#fafafa" isOpen={this.props.isOpen} config={this.props.config}>
        <CardText expandable={true} style={{paddingTop: 0}}>
          <Nav bsStyle="tabs" activeKey={this.state.openTabKey} onSelect={::this._onTabSelect}>
            {this._renderNavItem(tabEventKeys.players, 'players', this._getPlayersEditIcon())}
            {this._renderNavItem(tabEventKeys.report, 'report', this._getCommentsIcon())}
            {showIndividualMatches ? this._renderNavItem(tabEventKeys.individualMatches, 'matches') : null}
            {showScoresheet ? this._renderNavItem(tabEventKeys.scoresheet, 'scoresheet') : null}
            {showOpponentClubLocation ? this._renderNavItem(tabEventKeys.opponentClub, 'club') : null}
            {this._renderNavItem(tabEventKeys.opponentsRanking, 'opponentsRanking')}
            {this._renderNavItem(tabEventKeys.opponentsFormation, 'opponentsFormation')}
            {this.props.user.isDev() ? this._renderNavItem('admin', 'admin') : null}
          </Nav>
          <div className="match-card-tab">
            {this._renderTabContent()}
          </div>
        </CardText>
      </HeaderComponent>
    );
  }
  _getCommentsIcon() {
    var hasNewComment = this.props.config.get('newMatchComment' + this.props.match.id);
    if (!hasNewComment) {
      return;
    }
    return <Icon fa="fa fa-comment-o" className="match-card-tab-icon" />;
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
    if (eventKey === tabEventKeys.report) {
      this.props.setSetting('newMatchComment' + this.props.match.id, false);
    }
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
    var matches = storeUtils.matches
      .getFromOpponent(this.props.match.opponent)
      .sort((a, b) => a.date.isBefore(b.date) ? 1 : -1)
      .filter(match => match.isSyncedWithFrenoy);

    return <OpponentsLastMatches match={this.props.match} readonlyMatches={matches} />;
  }
  _renderOpponentFormation() {
    var formations = storeUtils.matches
      .getFormation(this.props.match)
      .sort((a, b) => a.count < b.count ? 1 : -1);

    if (formations.length === 0) {
      return <div className="match-card-tab-content"><h3><Spinner /></h3></div>;
    }

    return <OpponentsFormation formations={formations} />;
  }
  _renderScoreSheet() {
    return (<Scoresheet match={this.props.match} t={this.context.t} viewport={this.props.viewport} />);
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

    if (match.players.size === 0) {
      let standardPlayers = team.getPlayers('standard').map(ply => ply.player);
      return (
        <PlayersImageGallery
          players={standardPlayers}
          user={this.props.user}
          competition={team.competition}
          viewport={this.props.viewport}
          viewportWidthContainerCount={this.props.viewportWidthContainerCount} />
      );
    }

    return (
      <PlayersImageGallery
        players={match.getOwnPlayerModels()}
        user={this.props.user}
        competition={team.competition}
        viewport={this.props.viewport}
        viewportWidthContainerCount={this.props.viewportWidthContainerCount} />
    );
  }
}