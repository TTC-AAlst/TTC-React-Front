/*eslint-disable */
export default {
  lang: 'nl',
  routes: {
    players: '/spelers',
    login: '/login',
    forgotPassword: '/login/nieuw-paswoord',
    profile: '/profiel',
    links: '/links',
    matches: '/kalender',
    match: '/match/:matchId',
    matchesToday: '/vandaag',
    matchesWeek: '/speelweek',
    facts: '/weetjes',
    teamsVttl: '/ploegen/vttl',
    teamsSporta: '/ploegen/sporta',
    admin: '/admin',
  },
  trans: {
    fullClubName: 'TTC Erembodegem',
    clubName: 'Erembodegem',
    systemUserAlias: 'Clublokaal',
    modal: {
      cancel: 'Annuleren',
    },
    common: {
      apiSuccess: 'Greato success',
      apiFail: 'Oepsie! Mislukt...',
      save: 'Bewaren',
      frenoy: 'Frenoy',
      teamFormation: 'Opstelling',
      competitie: 'Competitie',
    },
    system: {
      playerSelect: 'Wie ben je?',
    },
    nav: {
      matches: 'Kalender',
      matchesToday: 'Vandaag',
      matchesWeek: 'Speelweek',
      teamsVttl: 'Ploegkalender Vttl',
      teamsSporta: 'Ploegkalender Sporta',
      players: 'Spelers',
      login: 'Log in',
      links: 'Links',
      facts: 'TT Weetjes',
      help: 'Help',
      closeMenu: 'Menu sluiten',
      admin: 'Admin',
    },
    profile: {
      main: 'Profiel',
      editPassword: 'Wijzig Paswoord',
      editDetails: 'Wijzig Gegevens',
      editPicture: 'Wijzig Foto',
      editAvatar: 'Wijzig Avatar',
      editHolidays: 'Ploegopstelling',
      play: {
        tableTitle: 'Kan je spelen?',
        canPlay: 'SPELEN',
        canNotPlay: 'Kan niet',
        canMaybe: 'Misschien',
        canDontKnow: 'Weet niet',
      },
    },
    intro: {
      title: 'Tafeltennisclub TTC Erembodegem',
      text: 'Een kleine, toffe club met ${players} leden. Ondanks onze beperkte kern, ' +
        'slagen we er toch in om met ${teamsVttl} ploegen VTTL en ${teamsSporta} Sporta in competitie te treden. ' +
        'Fairplay en gezelligheid staan centraal bij al onze tafeltennis-activiteiten!',
      matchesToday: 'matchen vandaag',
      trainingToday: 'vandaag training vanaf 20u',
      playedMatches: 'laatst gespeelde matchen',
      loading: 'Laden...',
      ourSponsors: 'onze sponsers',
    },
    login: {
      title: 'Aanmelden',
      introText: '',
      loginName: 'Spelersnaam',
      password: 'Paswoord',
      passwordHint: 'Geen email ontvangen? Email wouter...',
      loginButton: 'Login',
      logoutButton: 'Uitloggen',
      fail: 'Incorrect paswoord voor ${}',
      loggedIn: '${} aangelogd',
    },
    password: {
      forgotLink: 'Paswoord vergeten?',
      fogotMailSent: 'Een email met je nieuw paswoord is verzonden',
      sendNewButton: 'Nieuw paswoord sturen',
      passwordChangedSuccess: 'Paswoord succesvol gewijzigd',
      passwordChangedFail: 'Paswoord wijzigen is mislukt'
    },
    photos: {
      uploadNewTitle: 'Nieuwe foto opladen',
      uploadNewInstructions: 'Sleep een foto of klik om een foto te kiezen',
      adjustTitle: 'Foto bijsnijden',
      preview: 'Preview',
      save: 'Bijsnijden opslaan',
    },
    player: {
      email: 'Email',
      gsm: 'Gsm',
      address: 'Adres',
      city: 'Gemeente',
      alias: 'Alias',
    },
    changePassword: {
      title: 'Paswoord wijzigen',
      oldPassword: 'Huidig paswoord',
      newPassword: 'Nieuw paswoord',
    },
    updatePlayer: {
      updatePlayerSuccess: 'Speler gegevens succesvol gewijzigd',
      updatePlayerFail: 'Speler gegevens wijzigen is mislukt'
    },
    players: {
      title: 'Spelers overzicht ${a}',
      search: 'Speler zoeken',
      index: 'Index',
      memberNumber: 'Lidnr',
      name: 'Naam',
      vttl: 'VTTL',
      sporta: 'Sporta',
      style: 'Stijl',
      all: 'Alle',
      team: 'ploeg',
      styleAll: 'Stijl:',
      styles: {
        attacker: 'Aanvaller',
        defender: 'Verdediger',
        allRounder: 'All-rounder',
      },
      bestStroke: 'Beste slag',
      bestStrokeAll: 'Beste slag:',
      ranking: 'Klassement',
      value: 'Waarde',
      editStyle: {
        title: 'Speelstijl ${}',
        tooltip: 'Speelstijl ${} wijzigen',
        bestStroke: 'Beste, meest verrassende slag',
        style: 'Speelstijl',
        saved: 'Speelstijl ${ply} aangepast door ${by}: ${newStyle}',
      },
      downloadExcel: 'Excel export',
      downloadExcelFileName: 'Spelerslijst_${}',
    },
    match: {
      week: 'Week',
      todayMatches: 'vandaag',
      nextMatches: 'volgende matchen',
      playedMatches: 'gespeelde matchen',
      date: '${}u',
      vs: 'vs',
      topMatch: 'TOPPER',
      degradationMatch: 'THRILLER',
      previousEncounterScore: 'Uitslag heenronde',
      gotoPreviousEncounter: 'Details heenronde',
      gotoNextEncounter: 'Details terugronde',
      scoresheetSporta: {
        uniqueIndex: 'LIDK. nr.',
        ranking: 'Klassement',
        rankingValue: 'Waarde',
        teamValue: 'Ploegwaarde',
      },
      scoresheetVttl: {
        uniqueIndex: 'Computer nummer',
        rankingIndex: 'Volgnummer',
        index: 'Index',
        ranking: 'Klassement',
      },
      tabs: {
        players: 'Spelers',
        playersTitle: 'Onze opstelling',
        matches: 'Individueel',
        matchesTitle: 'Individuele matchuitslagen',
        report: 'Verslag',
        reportTitle: 'Het wedstrijdverslag',
        club: 'Lokaal',
        clubTitle: 'Hun clublokaal',
        scoresheet: 'Wedstrijdblad',
        opponentsRanking: 'Tegenstanders',
        opponentsRankingTitle: 'Hun laatste uitslagen',
        opponentsFormationTitle: 'Hun opstelling',
        admin: 'Dev',
      },
      report: {
        title: 'Wedstrijdverslag',
        editTooltip: 'Wedstrijdverslag wijzigen',
        noReport: 'Nog niets te bespeuren...',
        placeHolder: 'Vertel...',
        reportPosted: 'Wedstrijdverslag bewaard',
        reportWrittenBy: 'door ${}',
        commentsTitle: 'Opvolging',
        commentsOpenForm: 'Reageren',
        commentsPhoto: 'Foto plaatsen',
        commentPosted: 'Verklarende aantekening toegevoegd',
        commentDeleted: 'Verklarende aantekening verwijderd',
        commentVisible: 'Voor iedereen zichtbaar',
      },
      playersVictoryTitle: 'Overwinningen',
      playersOpponentsTitle: 'Tegenstanders',
      individual: {
        matchTitle: 'Match',
        setsTitle: 'Sets',
        resultTitle: 'Uitslag',
      },
      opponents: {
        date: 'Datum',
        homeTeam: 'Thuis',
        awayTeam: 'Uit',
        vsTeam: 'Tegen',
        outcome: 'Uitslag',
        timesPlayed: 'Aantredingen',
        player: 'Speler',
        playerRanking: '',
        victories: 'Overwinningen / Nederlagen',
        formation: 'Opstelling'
      },
      enemyVictory: '${}ov.',
      club: {
        locationTitle: 'Clublokaal',
        locationUnknown: 'Niet gekend',
        websiteKnown: 'Ga naar website'
      },
      chooseOtherPlayer: 'Andere speler opstellen'
    },
    footer: {
      location: 'Groeneweg 28, 9300 Erembodegem',
      trainingDays: 'Training: di. en do. vanaf 20u',
      competitionDays: 'Competitie: ma., wo. en vr. 20u', //  'en za. om 14u' --> niet meer goed op mobile :(
      telephoneNumber: '0495/24 94 20',
      adultMembership: '€90 voor volwassenen',
      youthMembership: '€50 voor -18 jarigen',
      contact: 'Contacteer ons'
    },
    links: {
      federations: 'De bonden & hun uitslagenborden',
      vttl: 'VTTL',
      vttlovl: 'VTTL Oost-Vlaanderen',
      sporta: 'Sporta',
      ittf: 'ITTF',
      vttlResults: 'Resultaten VTTL',
      sportaResults: 'Resultaten Sporta',
      varia: 'Varia',
      vttlCalculation: 'Klassementsberekening VTTL',
      sportaCalculation: 'Klassementsberekening Sporta',
      francis: 'Francis tafeltennisshop',
      ttactua: 'Tafeltennisactua',
    },
    teamCalendar: {
      date: 'Datum',
      hour: 'Uur',
      match: 'Wedstrijd',
      score: 'Score',
      position: 'Plaats',
      name: 'Clubnaam',
      matchesWon: 'Gewonnen',
      matchesLost: 'Verloren',
      matchesDraw: 'Gelijk',
      points: 'Punten'
    },
    facts: require('./locales-nl-facts.js')
  },
  timeAgo: {
    prefixAgo: null,
    prefixFromNow: "over",
    suffixAgo: "geleden",
    suffixFromNow: null,
    seconds: "minder dan een minuut",
    minute: "ongeveer een minuut",
    minutes: "%d minuten",
    hour: "ongeveer een uur",
    hours: "ongeveer %d uur",
    day: "een dag",
    days: "%d dagen",
    month: "ongeveer een maand",
    months: "%d maanden",
    year: "ongeveer een jaar",
    years: "%d jaar",
    wordSeparator: " ",
    numbers: []
  }
};