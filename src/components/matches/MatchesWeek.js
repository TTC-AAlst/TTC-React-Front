import React, { Component } from 'react';
import PropTypes, { connect, browserHistory } from '../PropTypes.js';
import moment from 'moment';
import { Icon, ButtonStack } from '../controls';
import MatchesTable from './MatchesTable.js';

@connect(state => ({matches: state.matches, user: state.user, freeMatches: state.freeMatches}))
export default class MatchesWeek extends Component {
  static contextTypes = PropTypes.contextTypes;
  static propTypes = {
    matches: PropTypes.MatchModelList.isRequired,
    user: PropTypes.UserModel.isRequired,
    params: PropTypes.shape({
      tabKey: PropTypes.string,
      comp: PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      currentWeek: 1,
      lastWeek: 22,
      editMode: false,
    };

    const currentWeek = this.getCurrentWeek(props);
    if (currentWeek) {
      this.state = Object.assign(this.state, currentWeek);
    }
  }

  getCurrentWeek(props) {
    if ((!this.state.fixedWeek || props.params.tabKey !== this.state.currentWeek) && props.matches.size) {
      const today = moment();
      const sortedMatches = props.matches.sort((a, b) => a.date - b.date);
      const currentWeekMatch = sortedMatches.find(x => x.date > today);
      const lastWeekMatch = sortedMatches.last();
      const lastWeek = lastWeekMatch ? lastWeekMatch.week : 22;

      var calcedState = {
        currentWeek: currentWeekMatch ? currentWeekMatch.week : lastWeek,
        lastWeek: lastWeek,
        fixedWeek: true
      };
      if (props.params.tabKey) {
        calcedState.currentWeek = parseInt(props.params.tabKey, 10);
      }
      return calcedState;
    }
  }

  componentWillReceiveProps(props) {
    const currentWeek = this.getCurrentWeek(props);
    if (currentWeek) {
      this.setState(currentWeek);
    }
  }

  _onChangeWeek(weekDiff) {
    const comp = this.props.params.comp;
    const compFilter = comp && comp !== 'all' ? '/' + this.props.params.comp : '';
    browserHistory.push(this.context.t.route('matchesWeek') + '/' + (this.state.currentWeek + weekDiff) + compFilter);
  }
  _onChangeCompetition(comp) {
    browserHistory.push(this.context.t.route('matchesWeek') + '/' + this.state.currentWeek + (comp && comp !== 'all' ? '/' + comp : ''));
  }

  render() {
    const t = this.context.t;

    const selectedWeekMatch = this.props.matches.find(match => match.week === this.state.currentWeek);
    if (!selectedWeekMatch) {
      return null;
    }

    const weekStart = selectedWeekMatch.date.clone().startOf('week');
    const weekEnd = selectedWeekMatch.date.clone().endOf('week');
    const matchFilter = match => match.week === this.state.currentWeek || match.date.isBetween(weekStart, weekEnd);

    var matches = this.props.matches.filter(matchFilter);
    if (this.state.editMode) {
      const freeMatches = this.props.freeMatches.filter(matchFilter);
      matches = matches.concat(freeMatches);
    }

    const viewsConfig = [{
      key: 'all',
      text: this.context.t('players.all')
    }, {
      key: 'Vttl',
      text: 'Vttl'
    }, {
      key: 'Sporta',
      text: 'Sporta'
    }];

    return (
      <div>
        <h3 style={{textAlign: 'center'}}>
          <Icon fa="fa fa-arrow-left" style={{marginRight: 10, visibility: this.state.currentWeek > 1 ? '' : 'hidden'}} onClick={this._onChangeWeek.bind(this, -1)} />
          <WeekTitle t={t} weekNr={this.state.currentWeek} weekStart={weekStart} weekEnd={weekEnd} />
          {this.state.currentWeek < this.state.lastWeek ? (
            <Icon fa="fa fa-arrow-right" style={{marginLeft: 10}} onClick={this._onChangeWeek.bind(this, 1)} />
          ) : null}
        </h3>

        <span className="pull-right">
          <ButtonStack
            config={viewsConfig}
            small={false}
            activeView={this.props.params.comp || 'all'}
            onClick={compFilter => this._onChangeCompetition(compFilter)} />

          {this.props.user.canManageTeams() && matches.some(m => !m.isSyncedWithFrenoy) ? (
            <button onClick={() => this.setState({editMode: !this.state.editMode})} className="btn btn-default" style={{marginLeft: 5}}>
              <Icon fa="fa fa-pencil-square-o" />
            </button>
          ) : null}
        </span>

        {this.props.params.comp !== 'Sporta' ? (
          <div>
            <h4><strong>Vttl</strong></h4>
            <MatchesTable editMode={this.state.editMode} matches={matches.filter(x => x.competition === 'Vttl').sort((a, b) => a.date - b.date)} user={this.props.user} />
            {this.props.params.comp !== 'Vttl' ? <hr style={{marginLeft: '10%', marginRight: '10%', marginTop: 50}} /> : null}
          </div>
        ) : null}

        {this.props.params.comp !== 'Vttl' ? (
          <div>
            <h4><strong>Sporta</strong></h4>
            <MatchesTable editMode={this.state.editMode} matches={matches.filter(x => x.competition === 'Sporta').sort((a, b) => a.date - b.date)} user={this.props.user} />
          </div>
        ) : null}
      </div>
    );
  }
}

const WeekTitle = ({t, weekNr, weekStart, weekEnd}) => (
  <span>
    {t('match.week')}&nbsp;
    {weekNr}
    :&nbsp;
    {weekStart.format('D/M')}
      &nbsp;-&nbsp;
    {weekEnd.format('D/M')}
  </span>
);
