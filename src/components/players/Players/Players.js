import React, { PropTypes, Component } from 'react';
import Icon from '../../controls/Icon.js';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import PlayerImage from '../PlayerImage.js';
import TabbedContainer from '../../controls/TabbedContainer.js';
import Table from 'react-bootstrap/lib/Table';
import Image from 'react-bootstrap/lib/Image';
import cn from 'classnames';
import TextField from 'material-ui/lib/text-field';
import Telephone from '../../controls/Telephone.js';
import PlayerCard, { PlayerCompetition } from '../PlayerCard.js';

import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import PlayerModel, { createFrenoyLink } from '../../../models/PlayerModel.js';
import TeamModel from '../../../models/TeamModel.js';
import { util as storeUtil } from '../../../store.js';
import http from '../../../utils/httpClient.js';
import moment from 'moment';
import { contextTypes } from '../../../utils/decorators/withContext.js';
import withStyles from '../../../utils/decorators/withStyles.js';
import withViewport from '../../../utils/decorators/withViewport.js';
import styles from './Players.css';

const tabEventKeys = {
  all: 1,
  vttl: 2,
  sporta: 3,
  gallery: 4,
};

@connect(state => {
  return {
    config: state.config,
    players: state.players,
    //clubs: state.clubs,
    //matches: state.matches,
    teams: state.teams,
    user: state.user,
  };
})
@withStyles(styles)
@withViewport
export default class Players extends Component {
  static contextTypes = contextTypes;
  static propTypes = {
    config: PropTypes.object,
    players: ImmutablePropTypes.listOf(PropTypes.instanceOf(PlayerModel).isRequired).isRequired,
    teams: ImmutablePropTypes.listOf(PropTypes.instanceOf(TeamModel).isRequired).isRequired,
    user: PropTypes.object,
    viewport: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {filter: ''};
  }

  _downloadExcel() {
    http.download('/players/ExcelExport').then(res => {
      var link = document.createElement('a');
      link.download = this.context.t('players.downloadExcelFileName', moment().format('YYYY-MM-DD')) + '.xlsx';
      link.href = 'data:application/octet-stream;base64,' + res.body;
      link.click();
    })
    .catch(err => {
      console.error('err', err);
    });
  }

  _renderToolbar(tabKey) {
    return (
      <div style={{marginRight: 5, marginLeft: 5}}>
        <TextField
          hintText={this.context.t('players.search')}
          onChange={e => this.setState({filter: e.target.value.toLowerCase()})}
          style={{width: 150}} />
      </div>
    );
  }
  _renderTabContent(tabKey) {
    var tabContent;
    switch (tabKey) {
    case tabEventKeys.all:
      tabContent = this._renderTabAll();
      break;
    case tabEventKeys.vttl:
      tabContent = this._renderTabVttl();
      break;
    case tabEventKeys.sporta:
      tabContent = this._renderTabSporta();
      break;
    case tabEventKeys.gallery:
      tabContent = this._renderTabGallery();
      break;
    }
    return (
      <div>
        <div>{this._renderToolbar(tabKey)}</div>
        {tabContent}
      </div>
    );
  }

  _renderTabVttl() {
    var players = this.props.players.filter(x => x.vttl);
    if (this.state.filter) {
      players = players.filter(x => x.name.toLowerCase().includes(this.state.filter));
    }
    players = players.sort((a, b) => a.vttl.position - b.vttl.position);
    return (
      <Table condensed hover>
        <thead>
          <tr>
            <th>{this.context.t('comp.index')}</th>
            <th>{this.context.t('comp.vttl.uniqueIndex')}</th>
            <th>{this.context.t('player.name')}</th>
            <th><span className="hidden-xs">{this.context.t('comp.ranking')}</span></th>
            <th className="hidden-xs">{this.context.t('player.style')}</th>
            <th className="hidden-xs">{this.context.t('player.bestStroke')}</th>
          </tr>
        </thead>
        <tbody>
          {players.map(ply => (
            <tr key={ply.id} className={cn({'match-won': ply.isMe()})}>
              <td>{ply.vttl.rankingIndex}</td>
              <td>{ply.vttl.uniqueIndex}</td>
              <td className="hidden-xs">{ply.name}</td>
              <td className="visible-xs">{ply.alias}</td>
              <td>{this._renderPlayerCompetitionRanking(ply.vttl)}</td>
              <td className="hidden-xs">{ply.style.name}</td>
              <td className="hidden-xs">{ply.style.bestStroke}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  _renderTabSporta() {
     var players = this.props.players.filter(x => x.sporta);
     if (this.state.filter) {
       players = players.filter(x => x.name.toLowerCase().includes(this.state.filter));
     }
     players = players.sort((a, b) => a.sporta.position - b.sporta.position);
    return (
      <Table condensed hover>
        <thead>
          <tr>
            <th>{this.context.t('comp.index')}</th>
            <th>{this.context.t('comp.sporta.uniqueIndex')}</th>
            <th>{this.context.t('player.name')}</th>
            <th><span className="hidden-xs">{this.context.t('comp.ranking')}</span></th>
            <th>{this.context.t('comp.sporta.rankingValue')}</th>
            <th className="hidden-xs">{this.context.t('player.style')}</th>
            <th className="hidden-xs">{this.context.t('player.bestStroke')}</th>
          </tr>
        </thead>
        <tbody>
          {players.map(ply => (
            <tr key={ply.id} className={cn({'match-won': ply.isMe()})}>
              <td>{ply.sporta.rankingIndex}</td>
              <td>{ply.sporta.uniqueIndex}</td>
              <td className="hidden-xs">{ply.name}</td>
              <td className="visible-xs">{ply.alias}</td>
              <td>{this._renderPlayerCompetitionRanking(ply.sporta)}</td>
              <td>{ply.sporta.rankingValue}</td>
              <td className="hidden-xs">{ply.style.name}</td>
              <td className="hidden-xs">{ply.style.bestStroke}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  _renderPlayerCompetitionRanking(comp) {
    return (
      <span>
        {comp.ranking}
        &nbsp;
        <a href={createFrenoyLink(comp)} target="_blank">
          <Icon fa="fa fa-search" />
        </a>
      </span>
    );
  }

  render() {
    const tabConfig = [{
      key: tabEventKeys.all,
      title: this.context.t('players.all'),
    }, {
      key: tabEventKeys.vttl,
      title: 'Vttl',
    }, {
      key: tabEventKeys.sporta,
      title: 'Sporta',
    }, {
      key: tabEventKeys.gallery,
      title: this.context.t('players.gallery'),
    }];

    return (
      <div style={{marginTop: 20, marginBottom: 10}}>
        {this.props.user.playerId ? (
          <a
            onClick={::this._downloadExcel}
            title={this.context.t('players.downloadExcel')}
            className="clickable pull-right"
            style={{marginTop: 5}}>
            <Icon fa="fa fa-file-excel-o fa-2x" />
          </a>
        ) : null}

        <TabbedContainer
          openTabKey={tabEventKeys.all}
          tabKeys={tabConfig}
          tabRenderer={::this._renderTabContent}
          forceTabs />
      </div>
    );
  }

  _getAllPlayers() {
    const players = this.props.players;
    if (this.state.filter) {
      return players.filter(x => x.name.toLowerCase().includes(this.state.filter));
    }
    return players.sort((a, b) => a.name.localeCompare(b.name));
  }

  _renderTabGallery() {
    const players = this._getAllPlayers();
    if (this.props.viewport.width > 450) {
      return (
        <div style={{marginLeft: 10, marginRight: 10}} className="row">
          {players.map(player => {
            return (
              <div className="col-lg-4 col-md-6" key={player.id} style={{paddingBottom: 10}}>
                <PlayerCard player={player} />
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div style={{marginLeft: 10, marginRight: 10}}>
        {players.map(player => {
          return (
            <div key={player.id} style={{paddingBottom: 10, textAlign: 'center'}}>
              <Card>
                <h4>{player.name}</h4>
                <PlayerImage playerId={player.id} center={true} />
                <br />
              </Card>
            </div>
          );
        })}
      </div>
    );
  }

  _renderTabAll() {
    const players = this._getAllPlayers();
    return (
      <Table condensed hover>
        <thead>
          <tr>
            <th>{this.context.t('player.name')}</th>
            {this.props.user.playerId ? <th>{this.context.t('player.address')}</th> : null}
            <th className="hidden-xs">{this.context.t('common.competition')}</th>
            <th className="hidden-xs">{this.context.t('player.style')}</th>
          </tr>
        </thead>
        <tbody>
          {players.map(ply => {
            return (
              <tr key={ply.id} className={cn({'match-won': ply.isMe()})}>
                <td className="hidden-xs">
                  <strong>{ply.name}</strong>
                  {this.props.user.playerId ? <div>{ply.formattedMobile()}</div> : null}
                </td>
                <td className="visible-xs">
                  <strong>{ply.alias}</strong>
                  <br />
                  <Telephone number={ply.contact.mobile} hideIcon style={{fontSize: 10}} />
                </td>
                {this.props.user.playerId ? (
                  <td>
                    {ply.contact.address}
                    <br />
                    {ply.contact.city}
                  </td>
                ) : null}
                <td className="hidden-xs">
                  <PlayerCompetition comp="Vttl" player={ply} />
                  {ply.sporta && ply.vttl ? <br /> : null}
                  <PlayerCompetition comp="Sporta" player={ply} />
                </td>
                <td className="hidden-xs">
                  {ply.style.name}
                  <br />
                  <small>{ply.style.bestStroke}</small>
                </td>
              </tr>
            )}
          )}
        </tbody>
      </Table>
    );
  }
}