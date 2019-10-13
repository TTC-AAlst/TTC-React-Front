import {getOpponentFormations, getOpponentMatchesForTeam} from '../../../storeUtil';
import {getPlayerStats} from '../../../models/TeamModel';
import {getRankingDestroyer} from '../../other/EndOfSeason/PlayerAchievements';

export function buildHtml(user, compFilter, matches, prevMatches) {
  // console.log('m', matches.sort((a, b) => a.date - b.date).toArray());

  let html = getEndearment(compFilter);
  html += '<br>';

  // Matches
  html += getMatches(matches.toArray(), compFilter);

  if (prevMatches.size) {
    html += getPrevMatches(prevMatches);
  }

  html += getWhatToExpect(matches);

  // Signature
  // console.log('user', user);
  html += 'Veel succes iedereen!';

  if (compFilter === 'Sporta') {
    html += getRandomQuote();
  }

  html += '<br>';
  html += '<br>';
  html += 'Mvg,';
  html += '<br>';
  html += user.alias;

  return html;
}


const quotes = [
  {text: "I am standing when the ball comes, that's why I don't have to move. I can read the game.", author: 'Jan-Ove Waldner'},
  {text: 'Championships are won at practice.', author: ''},
  {text: 'Being the best is not good enough. Try harder. Just make sure having fun is a central component of striving for excellence.', author: 'Carl Horowitz'},
  {text: 'EVERY BALL COUNTS.', author: 'Sir Matt'},
  {text: 'Table Tennis is like an atom. To the ignorant it is merely microscopic and insignificant in existance, but to the dedicated, it is intricate in design and the building block to everything we know. ', author: 'Matt Hetherington'},
  {text: "I’m an extra dark black belt in ping pong.", author: 'Judah Friedlander'},
  {text: "Only passions. great passions can elevate the soul to great things.", author: 'Zhang Jike'},
  {text: "China needs a table-tennis-like solidity in football.", author: 'Berti Vogts'},
  {text: "Champions keep playing until they get it right.", author: 'Billie Jean King'},
  {text: "I love the winning, I can take the losing, but most of all I love to play.", author: 'Boris Becker'},
  {text: "Happiness is …sometimes no words. just the sound of ball.", author: ''},
  {text: "I like to play table tennis, spend time with my kids.", author: 'Floyd Mayweather'},
  {text: "Table Tennis has given me soul.", author: ''},
  {text: "If you can’t take a punch, you should play table tennis.", author: 'Pierre Berbizier'},
  {text: "Cheer up,Its only Table Tennis.", author: 'Li Fu Jung'},
  {text: "I’m a big Ping-Pong addict. I love it.", author: 'Lisa Ling'},
  {text: "Life is hard, table tennis is harder!", author: 'Azlan'},
  {text: "When you win say nothing. When you loss say less.", author: ''},
  {text: "Don’t stop when you are tired.Stop when you are done.", author: ''},
  {text: "Throwing your racket would not make you any better.", author: ''},
  {text: "Spectacular performances are preceded by spectacular preparation.", author: 'Frank Giampaolo'},
  {text: "“If you want to win in Table Tennis you must hit every ball with a purpose.", author: 'Daniel Ives'},
  {text: "When you do something best in life, you don’t really want to give that up – and for me it’s tennis.", author: 'Roger Federer'},
  {text: "It’s like ping pong with a ball made out of acid and fire. That’s what’s going on inside our screwed up heads.", author: 'Rebecca O’Donnell'},
  {text: "“It’s t 0he fate of most Ping-Pong tables in home basements eventually to serve the ends of other, more desperate games.", author: 'Jonathan Franzen'},
  {text: "All of my activities are so pedestrian. The extreme sport I play is ping pong. And we play it hard. If any of you suckers want to step up to the table, be ready.", author: 'Seth Green'},
  {text: "I know China are very good in table tennis. Let me see what happens in tennis. I am pretty happy with the way I am playing.", author: 'Anastasia Myskina'},
  {text: "It was a good performance. A perfect start is always important at the beginning of any tournament and I am pretty pleased with today’s effort. I lost out on the opportunity last year and I am keen to win.", author: 'Timo Boll'},
  {text: "Keep Calm and Play Ping Pong.", author: ''},
  {text: "If you want a soft serve, go to Dairy Queen", author: ''},
  {text: "Live Long – Play Pong", author: ''},
  {text: "Teamwork makes the dream work.", author: ''},
  {text: "Table Tennis Anyone?", author: ''},
  {text: "Spinnen is Winnen!!", author: ''},
  {text: "It's almost impossible to have fun playing ping pong with someone who doesn't care, won't try or isn't any good.", author: 'Seth Godin'},
  {text: "Learn from your defeat and you'll be a winner", author: 'Azlan'},
  {text: "I'm pretty sure 'ping' in Chines means 'table' and 'pong' means 'tennis'", author: 'John Alejandro King'},
  {text: "Never equate a loser with failure", author: "Timo Boll"},
  {text: "Shake hands with your opponent before and after playing table tennis. Sometimes when I shake hands, my opponent feels that she has lost!", author: "Zhang Yining"},
  {text: "The secret of playing table tennis is: hit the ball through the net and on the table", author: "Anonymous"},
  {text: "The previous point has no meaning, the next point is meaningless as well. The most meaningful is the current point. ", author: "Gold coach Li Wei"},
  {text: "When teaching beginners, ask them to stare at the opponent’s hand when playing in the game. Repeat this for 30 times in an hour.", author: "A coach from Shichahai Valley"},
  {text: "Focus on the current point, maybe this is the key point in this game.", author: "Ochalov"},
  {text: "When the opponent plays the stroke that you are not good at, don't think too much, just hit the ball back.", author: "Li Xiaoxia"},
  {text: "Great champions also make a lot of mistakes like second-rate players, but the time they make mistakes is very different. Champions rarely make mistakes at the most critical times.", author: "Liu Guoliang"},
  {text: "Focus and pay full attention to play in a match is the difference between a champion and a person who almost became a champion.", author: "Malong"},
  {text: "Before you learn the techniques, you must first learn how to control the ball.", author: "Kong Linghui"},
  {text: "Stress is the best polygraph. How well your playing skill will be revealed when you are under pressure.", author: "Liu Chengmin"},
  {text: "The desire to win is buried deep inside you. You must dig it out.", author: "Zhang Jike"},
  {text: "Don't underestimate your opponents, don't overestimate yourself, especially avoid thinking about results in advance.", author: "Wang Liqin"},
  {text: "When you are in trouble, you can't escape. You have to face it. Otherwise, you will lose.", author: "Ma Lin"},
  {text: "Most of the players are usually good at thinking, but not good at running!", author: "He Zhiwen"},
  {text: "The pressure in the table tennis competition is added by yourself.", author: "Dongxie"},
  {text: "Even if you are in good luck and good condition, you may still be losing in the game, then you just accept the failure.", author: "Persson"},
  {text: "The most correct reason for playing table tennis is that I love table tennis.", author: "Waldner"},
  // {text: "", author: ''},
];


function getRandomQuote() {
  if (Math.random() < 0.8) {
    return '';
  }

  let html = '<br><br>Inspirational Quote:<br>';
  const quote = getRandom(quotes);
  html += `<i>${quote.text}</i>`
  html += `<br>- ${quote.author || 'Unknown'}`;
  return html;
}



function getWhatToExpect(matches) {
  let html = '';
  html += '<br><br><br>';
  html += '<b>😂 Wat deze week te verwachten 😱</b>';
  html += '<br><br>';

  matches.sort((a, b) => a.getTeam().teamCode.localeCompare(b.getTeam().teamCode)).forEach(match => {
    const opponent = match.opponent;
    const theirMatches = getOpponentMatchesForTeam(match.competition, opponent.clubId, opponent.teamCode);
    const formations = getOpponentFormations(theirMatches, opponent);

    if (formations.length) {
      const ownTitle = `<b>${match.competition} ${match.getTeam().teamCode}</b>`;
      const theirTitle = match.renderOpponentTitle();
      if (match.isHomeMatch) {
        html += `${ownTitle} vs ${theirTitle}`;
      } else {
        html += `${theirTitle} vs ${ownTitle}`;
      }
      html += ':<br>';

      // const maxValue = Math.max.apply(null, formations.map(f => f.value));
      html += 'Waarde Opstellingen: ';

      html += formations.sort((a, b) => b.value - a.value).map(formation => {
        const klassementen = formation.details.map(f => {
          return (f.amount > 1 ? f.amount + 'x' : '') + f.ranking;
        }).join(', ');

        return `${formation.amount}x[<small>${klassementen}</small>]`;
      }).join(' — ');

      // console.log('formz', formations);

      html += '<br><br>';
    }
  });

  return html;
}





const opponentBeatings = [
  {fromSporta: 8, fromVttl: 16, words: [
    'verplettert', 'vernietigt', 'vermorzelt', 'liquideert',
    '{ere} slacht {opp} af met {score}',
    '{ere} maakt {opp} kapot met {score}',
    'decimeert', 'kraakt', 'overdondert',
    '{ere} richt {opp} met {score} ten gronde',
    'butchert', // TODO: {withPlayerId: 'patrick', text: 'butchert'}
    'verbrijzelt', 'verwoest', 'sloopt',
    '{ere} vaagt {opp} met de grond gelijk ({score})',
    'vernielt', 'termineert', 'verbouwt',
    '{ere} maakt {opp} koud met {score}',
    'verdelgt', 'onthoofd',
    '👞 👞 👞', '🔪 🔪 🔪', '💣 💣 💣', '🍗 🍖 🍗',
    '🍻 🍺 🍻', '🎯 🎯 🎯', '💥 💥 💥', '✨ ✨ ✨',
    '🔥 🔥 🔥', '🌠 🌠 🌠', '🎉 🎉 🎉', '💰 💰 💰',
    '💸 💸 💸', '🔨 🔨 🔨', '⚔ ⚔ ⚔', '🏆 🏆 🏆',
    '🔫 🔫 🔫', '✂ ✂ ✂', '📯 📯 📯', '🔔 🔔 🔔',
  ]},
  {fromSporta: 6, fromVttl: 9, firstWordChance: 90, words: [
    'verslaat',
    '{ere} doet wat het moet tegen {opp} ({score})',
  ]},
  {fromSporta: 5, fromVttl: 8, words: [
    '{ere} speelt gelijk tegen {opp}',
    '{ere} met de hakken over de sloot tegen {opp}',
    '{ere} haalt een puntje binnen tegen {opp}',
    '💓',
  ]},
  // {fromSporta: 1, fromVttl: 1, words: ['verliest van']},
  // De man met de hamer tegenkomen.
];

const scoreZero = ['💉', '⚰', '⚱', '🚬', '💊', '🔒', '💔', '💢', '💤', '💭', '🔇', '☢', '☣', '🔃'];

/**
 * Vorige speelweek:
 * Sporta C (Martijn, Andy, Guy) verplettert Lokomotiv B (10-0)
 * Sporta E wint van Teneramonda C (Daniel wint 3x)
 * Sporta D vs Bernardus E: Bart wint 3x
 */
function getPrevMatches(matches) {
  let html = '';
  html += '<br><br>';
  html += '<b>Vorige Speelweek</b>';
  html += '<br>';

  const sortOnOwnScore = (a, b) => {
    const aWon = a.isHomeMatch ? a.score.home : a.score.out;
    const bWon = b.isHomeMatch ? b.score.home : b.score.out;
    return bWon - aWon;
  };


  // How did the teams perform:
  matches.sort(sortOnOwnScore).forEach(match => {
    const ownTeamUrl = getFullUrl(`/match/${match.id}`);
    const ownTeam = `<a href="${ownTeamUrl}">${match.competition} ${match.getTeam().teamCode}</a>`;
    const theirTeam = match.renderOpponentTitle();

    let scorePrinted = false;

    const ourScore = match.isHomeMatch ? match.score.home : match.score.out;
    if (ourScore === 0) {
      html += `${theirTeam} ${(getRandom(scoreZero) + ' ').repeat(3)} arm ${ownTeam}`;

    } else if (ourScore < match.getTeam().getScoreCount() / 2) {
      html += `<small>${ownTeam} verliest van ${theirTeam} (${match.renderScore()})</small>`;
      scorePrinted = true;

    } else {
      if (ourScore === match.getTeam().getScoreCount()) {
        html += '💯 ';
      }

      const beatings = opponentBeatings.find(b => ourScore >= b['from' + match.competition]);
      let beating = getRandom(beatings.words);
      if (beatings.firstWordChance && (Math.random() * 100) <= beatings.firstWordChance) {
        beating = beatings.words[0];
      }

      if (!beating.includes('{ere}')) {
        html += `${ownTeam} ${beating} ${theirTeam}`;
      } else {
        if (beating.includes('{score}')) {
          scorePrinted = true;
        }
        html += beating.replace('{ere}', ownTeam).replace('{opp}', theirTeam).replace('{score}', match.renderScore());
      }
    }

    if (!scorePrinted) {
      html += ` (${match.renderScore()})`;
    }
    html += '<br>';
  });


  // How did the players perform?
  html += '<br>';
  html += '<b>Individueel</b>';
  html += '<br>';

  const stats = getPlayerStats(matches);
  // console.log('stats', stats);

  // Players that won all matches
  const gamesToBePlayed = matches.first().getTeam().getTeamPlayerCount();
  const allWon = stats.filter(s => s.victories === gamesToBePlayed).map(s => s.ply.alias);
  if (allWon.length) {
    html += '👍 ' + allWon.join(', ');
  }


  // Players that beat a higher ranked player
  const competition = matches.first().competition;
  const beaten = getRankingDestroyer(competition, stats);
  if (beaten.players.length) {
    html += '<br>';
    html += 'Mooiste overwinning: ';
    html += beaten.players.map(ply => `${getPlayerLink(ply.player, competition)} ${ply.throphy.replace(/\w+ (?=vs)/, '')}`).join(', ');
  }
  // console.log('uhoh', beaten);

  return html;
}




/**
 * Eexample:
 *
 * maa 16/9
 * Sporta A vs St Niklase A (Jorn, Wouter, Arne)
 * Sporta B vs St Niklase B (Patrick, Dirk DS, ???)
 * Hamme D vs Sporta C (Dries, Andy, Martijn)
 * Teneramonda B vs Sporta D (Jean-Pierre, Dirk VK, Thierry) - om 20u15 (match.isStandardStartTime())
 * don 19/9
 * St Pauwels B vs Sporta E (Daniel, Kenneth, Willem-Jan)
 */
function getMatches(matches, compFilter) {
  let html = '';
  let lastMatch = matches[0].date.clone().subtract(1, 'day');

  matches.forEach(match => {
    if (!lastMatch.isSame(match.date, 'day')) {
      html += '<br>';
      html += match.date.format('ddd D/M');
      html += '<br>';
      lastMatch = match.date;
    }

    const ownTitle = `<b>${getTeamLink(match)}</b>`;
    const theirTitle = getOpponentLink(match);
    if (match.isHomeMatch) {
      html += `${ownTitle} vs ${theirTitle}`;
    } else {
      html += `${theirTitle} vs ${ownTitle}`;
    }

    html += ' (';
    const formation = match.getPlayerFormation();
    formation.forEach((plyInfo, index) => {
      if (index > 0) {
        html += ', ';
      }
      html += getPlayerLink(plyInfo.player, compFilter);
    });
    html += ')';

    if (!match.isStandardStartTime()) {
      html += ` om ${match.date.format('HHumm')}`;
    }

    html += '<br>';
  });

  return html;
}

function getFullUrl(pathname) {
  return 'http://ttc-erembodegem.be' + pathname;
}

function getLink(url, label) {
  return `<a href="${url}">${label}</a>`;
}


function getPlayerLink(player, compFilter) {
  const label = `${player.alias} <small>${player.getCompetition(compFilter).ranking}</small>`;
  return getLink(getFullUrl('/speler/' + encodeURI(player.slug)), label);
}

function getOpponentLink(match) {
  const url = getFullUrl(`/tegenstander/${match.competition}/${match.opponent.clubId}/${match.opponent.teamCode}`);
  const divisionRanking = match.getTeam().getDivisionRanking(match.opponent);
  const label = `${match.renderOpponentTitle()}`;
  return `<small>#${divisionRanking.position}</small> ` + getLink(url, label);
}

function getTeamLink(match) {
  const url = getFullUrl(`/ploegen/${match.competition}/${match.getTeam().teamCode}`);
  const divisionRanking = match.getTeam().getDivisionRanking('our-ranking');
  return `<small>#${divisionRanking.position}</small> ` + getLink(url, `${match.competition} ${match.getTeam().teamCode}`);
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// TODO: Forest Gump’s Instructor. ?

const endearments = [
  'Sporstars',
  'Sportars',
  'Sportaners',
  'Spartas',
  'Sportanezen',
  'Sportas',
  'undefined', // oh noes, off by one!
  '🐺, 🐯, 🐅, 🐘, 🐻, 🐉 en 🦖',
  'Ping Pong Ninjas',
  'Ping Pong Black Belts',
];

function getEndearment(compFilter) {
  if (compFilter === 'Vttl') {
    return 'Besten,';
  }

  let endearment = getRandom(endearments);
  return 'Beste ' + endearment + ',';
}
