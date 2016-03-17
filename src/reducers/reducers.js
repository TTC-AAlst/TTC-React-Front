import Immutable from 'immutable';
import * as immutableHelpers from './immutableHelpers.js';
import * as ActionTypes from '../actions/ActionTypes.js';
//import _ from 'lodash';

import PlayerModel from '../models/PlayerModel.js';
import TeamModel from '../models/TeamModel.js';
import ClubModel from '../models/ClubModel.js';
import MatchModel from '../models/MatchModel.js';

export function config(state = Immutable.Map({initialLoadCompleted: false}), action = null) {
  const {type, payload} = action;
  switch (type) {
  case ActionTypes.INITIAL_LOADED:
    return state.set('initialLoadCompleted', true);
  case ActionTypes.LOGIN_FAIL:
  case ActionTypes.SHOW_SNACKBAR:
    return state.set('snackbar', payload);
  case ActionTypes.CLEAR_SNACKBAR:
    return state.remove('snackbar');
  default:
    return state;
  }
}

export function readonlyMatches(state = Immutable.List([]), action = null) {
  const {type, payload} = action;
  switch (type) {
  case ActionTypes.READONLY_MATCHES_LOADED:
    return immutableHelpers.merge(state, payload, x => new MatchModel(x));
  default:
    return state;
  }
}

export function players(state = Immutable.List([]), action = null) {
  const {type, payload} = action;
  switch (type) {
  case ActionTypes.PLAYERS_LOADED:
    return immutableHelpers.merge(state, payload, x => new PlayerModel(x));
  default:
    return state;
  }
}

export function clubs(state = Immutable.List([]), action = null) {
  const {type, payload} = action;
  switch (type) {
  case ActionTypes.CLUBS_LOADED:
    return immutableHelpers.merge(state, payload, x => new ClubModel(x));
  default:
    return state;
  }
}

export function teams(state = Immutable.List([]), action = null) {
  const {type, payload} = action;
  switch (type) {
  case ActionTypes.TEAMS_LOADED:
    return immutableHelpers.merge(state, payload, x => new TeamModel(x));
  default:
    return state;
  }
}