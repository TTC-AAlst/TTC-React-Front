import React from 'react';

import OpponentPlayer from './OpponentPlayer.js';
import OwnPlayer from './OwnPlayer.js';

const MatchPlayerResults = ({match, team, t}) => (
  <div className="match-card-tab-content">
    <div>
      <h3>{t('match.playersVictoryTitle')}</h3>
      {match.getOwnPlayers().map(ply => (
        <OwnPlayer match={match} ply={ply} key={ply.position} playerAsBadge={true} />
      ))}
    </div>
    <div>
      <h3>{t('match.playersOpponentsTitle')}</h3>
      {match.getTheirPlayers().map(ply => <OpponentPlayer ply={ply} key={ply.position} t={t} competition={match.competition} />)}
    </div>
  </div>
);

export default MatchPlayerResults;