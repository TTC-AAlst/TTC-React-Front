import React from 'react';

export const PercentageLabel = ({won, lost, decimals = 0}) => { // eslint-disable-line
  if (!won && !lost) {
    return null;
  }

  let percentage = (won / (lost + won) * 100).toFixed(decimals);
  if (decimals && percentage.substr(percentage.indexOf('.')) === '.00') {
    percentage = percentage.substr(0, percentage.indexOf('.'));
  }

  return (
    <div className="pull-right">
      {percentage.replace('.', ',')}%
    </div>
  );
};
