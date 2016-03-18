/*eslint-disable */
export default {
  lang: 'nl',
  routes: {
    players: '/spelers',
    login: '/login',
    changePassword: '/changePassword',
    profile: '/profiel',
    links: '/links',
    matches: '/kalender',
    match: '/match/:matchId',
    facts: '/weetjes'
  },
  trans: {
    modal: {
      cancel: 'Annuleren',
      submit: 'Bewaren',
    },
    fullClubName: 'TTC Erembodegem',
    clubName: 'Erembodegem',
    nav: {
      matches: 'Kalender',
      players: 'Spelers',
      login: 'Log in',
      changePassword: 'Verander Paswoord',
      links: 'Links',
      facts: 'TT Weetjes'
    },
    intro: {
      title: 'Tafeltennisclub TTC Erembodegem',
      text: 'Een kleine, toffe club met ${players} leden. Ondanks onze beperkte kern, slagen we er toch in om met ${teamsVttl} ploegen VTTL en ${teamsSporta} Sporta in competitie te treden. Fairplay en gezelligheid staan centraal bij al onze tafeltennis-activiteiten!',
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
      passwordHint: 'Hetzelfde paswoord als de oude site',
      loginButton: 'Login',
      logoutButton: 'Uitloggen',
      fail: 'Incorrect paswoord voor ${}'
    },
    changePassword: {
      title: 'Paswoord Wijzigen',
      introText: '',
      loginName: 'Spelersnaam',
      oldPassword: 'Huidig Paswoord',
      oldPasswordHint: 'Huidig paswoord voor de site',
      newPassword: 'Nieuw Paswoord',
      newPasswordHint: 'Nieuw paswoord voor de site',
      changePasswordButton: 'Wijzig Paswoord',
      NewPasswordButton: 'Paswoord vergeten?',
      logoutButton: 'Uitloggen',
      success: 'Paswoord succesvol gewijzigd',
      fail: 'Paswoord wijzigen is mislukt',
      newPasswordSuccess: 'Nieuw paswoord succesvol verstuurd',
      newPasswordFail: 'Nieuw paswoord versturen is mislukt'
    },
    players: {
      title: 'Spelers overzicht ${a}',
      index: 'Index',
      vttlMemberNumber: 'Lidnummer',
      name: 'Naam',
      vttl: 'VTTL',
      sporta: 'Sporta',
      style: 'Stijl',
      styles: {
        attacker: 'Aanvaller',
        defender: 'Verdediger',
        allRounder: 'All-rounder',
      },
      bestStroke: 'Beste slag',
      ranking: 'Klassement',
      value: 'Waarde',
      editStyle: {
        title: 'Speelstijl ${}',
        bestStroke: 'Beste, meest verassende slag',
        style: 'Speelstijl',
        saved: 'Speelstijl ${ply} aangepast',
        saveFailed: 'Oepsie! Mislukt...',
      },
    },
    match: {
      todayMatches: 'vandaag',
      nextMatches: 'volgende matchen',
      playedMatches: 'gespeelde matchen',
      date: '${}u',
      vs: 'vs',
      previousEncounterScore: 'Uitslag heenronde',
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
        scoresheetTitle: '',
        opponentsRanking: 'Tegenstanders',
        opponentsRankingTitle: 'Hun laatste uitslagen',
        opponentsFormation: 'Opstelling',
        opponentsFormationTitle: 'Hun opstelling',
      },
      report: {
        title: 'Wedstrijdverslag',
        noReport: 'Nog niets te bespeuren...',
        placeHolder: 'Vertel...',
        postReport: 'Bewaren',
        reportPosted: 'Wedstrijdverslag bewaard',
        reportWrittenBy: 'door ${}',
        commentsTitle: 'Opvolging',
        commentsOpenForm: 'Reageren',
        commentPosted: 'Verklarende aantekening toegevoegd',
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
      competitionDays: 'Competitie: ma., wo. en vr. om 20u',
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
    facts: {
      service: 'De Service',
      longpimples: 'Lange noppen versus Anti-top',
      speed: 'Hoe snel verloopt tafeltennis ? "Wij moeten toch rappe mannen zijn"',
      astrology: 'Tafeltennis Astrologie',
      history: 'Tafeltennis Geschiedenis',
      serviceHeaderOne: 'Uitleg over de service bij tafeltennis',
      serviceSectionOneComponentOne: 'De service kan het verschil maken tussen winst of verlies… Stel een willekeurige top tafeltennisser de vraag “welke slag is het belangrijkste bij tafeltennis” en de kans is groot dat het antwoord “de service” is. Ondanks dit feit is de service voor veel spelers geen onderdeel van hun training en daardoor een verwaarloosd onderdeel van hun spel. De meeste spelers geven tijdens trainingen de voorkeur aan het oefenen van andere slagen. In dit document behandel ik zo veel mogelijk alle facetten van de service met daarin de nadruk op de manier waarop je deze kunt trainen. Tenslotte… bij tafeltennis begint ieder punt met een service. We beginnen met een aantal algemene kenmerken die gelden voor iedere service. Later ga ik dieper in op specifieke services',
      serviceSectionOneComponentTwo: 'Waarom is de service zo belangrijk?',
      serviceSectionOneComponentThree: 'Er zijn nogal wat redenen waarom een goede service belangrijk is, een aantal van deze redenen zijn:',
      serviceSectionOneComponentFour: 'Controle',
      serviceSectionOneComponentFive: ' – Het is de enige slag die je bij het tafeltennissen maakt waar je volledige controle hebt over de bal zonder dat je tegenstander er op enige wijze invloed op uit kan oefenen. Jij bepaald dus volledig wat er gebeurt en hier kun je een belangrijk voordeel uit halen.',
      serviceSectionOneComponentSix: 'Frequentie',
      serviceSectionOneComponentSeven: ' – Zoals al eerder gemeld, ieder punt begint met een service en het is daarmee dus een veel voorkomende slag. Afhankelijk van jouw eigen type spel en dat van je tegenstander kan het zijn dat meer dan 20% van de slagen services zijn.',
      serviceSectionOneComponentEight: 'Vervolg',
      serviceSectionOneComponentNine: ' – Met een sterke service kun je behoorlijk wat invloed hebben op de wijze en de plaats waar de return gespeeld wordt. Hierdoor kun je door dit af te stemmen op de rest van je spel de service zo spelen dat je jouw eigen sterke 3e en 5e slag in stelling kan brengen.',
      serviceSectionOneComponentTen: 'Druk',
      serviceSectionOneComponentEleven: ' – Een speler die zich bewust is van het feit dat zijn tegenstander een sterkere service heeft voelt vanaf de start van de rally de druk hiervan, zelfs als hij zelf moet serveren. Omgekeerd geldt dat het hebben van een sterkere service vaak betekend dat je iets meer relaxed achter de tafel staat.',
      serviceSectionOneComponentTwelve: 'Kennis',
      serviceSectionOneComponentThirteen : ' – Het hebben van  een sterke service (liefst verschillende) betekent vaak dat je ook beter in staat bent om de service van je tegenstander te beoordelen en te retourneren.',
      serviceSectionOneComponentFourteen: 'Waaruit bestaat een goede service?',
      serviceSectionOneComponentFifteen: 'Deze vraag is moeilijker te beantwoorden dan de vorige aangezien je te maken hebt met meerdere omstandigheden. Wat in de ene situatie een uitstekende service is kan in een andere situatie waardeloos zijn. In plaats van een directe definitie van een goede service geven we hier een aantal factoren welke belangrijk zijn voor het spelen van een goede service waarmee we rekening houden met verschillende situaties',
      serviceSectionOneComponentSixteen: 'Service met een dubbele stuit',
      serviceSectionOneComponentSeventeen: 'Deze variant van het serveren (zie figuur 1), waar de bal indien deze niet na de eerste stuit geretourneerd wordt een tweede keer op de tafelhelft van de tegenstander zou stuiteren, is er een die zeer belangrijk is. Als je naar video’s van topspelers kijkt zul je zien dat deze wijze van serveren zeer regelmatig voor komt gezien de voordelen die het biedt. Hou er wel rekening mee dat de tweede stuit dicht tegen het einde van de tafel moet zijn voor optimaal effect. Hier geldt dus niet dat nog korter of meer stuiteren beter is, in tegendeel',
      serviceSectionOneComponentEightteen: 'Belangrijke redenen voor de populariteit van deze service zijn:',
      serviceSectionOneComponentNineteen: 'A) Het is moeilijk om een dergelijke service aan te vallen met een sterke return. Aangezien de bal niet over het einde van de tafel gaat is het lastig voor je tegenstander om een normale loop bal te spelen, er is domweg niet genoeg ruimte tussen de tafel en de bal voor een dergelijke slag. Ze kunnen hooguit een aangepaste variant gebruiken welke slechts een fractie van de snelheid en topspin heeft van een normale loop. Wat vaak gebeurt bij een goede uitvoering van een dergelijke service is dat je tegenstander genoodzaakt is de bal terug te duwen of te schuiven. Hierdoor heb je zelf meer tijd om te herstellen na de service.(figuur 2)',
      serviceSectionOneComponentTwenty: 'B) Gezien je de tegenstander dwingt om boven de tafel zijn slag te maken in plaats van er achter verhinderd dit de natuurlijke slagbeweging. Door de afstand tot het net maximaal te houden door de 2e stuit tegen het einde van de tafel te hebben verhoog je het rendement van je effect en wordt de kans groter dat de bal in het net of slecht geretourneerd wordt. Door deze afstand tot het net wordt het ook moeilijker om op een dergelijke service een korte bal terug te spelen. De kans is dus groot dat je als return een bal krijgt die na de stuit de achterlijn van de tafel passeert waardoor je met optimale controle jouw eigen slag kunt uitvoeren',
      serviceSectionOneComponentTwentyOne: 'C) Doordat het contactpunt van de bal relatief diep is (t.o.v. een korte service) beperk je de mogelijkheid van je tegenstander om een grote hoek te creëren. Hierdoor wordt je dus minder snel gedwongen om veel te bewegen en ben je beter in staat om de volgende bal te slaan.',
      serviceSectionOneComponentTwentyTwo: 'D) De afstand zorgt er ook voor dat iedere fout die je tegenstander maakt bij het beoordelen van de spin die je hebt meegegeven aan de service uitvergroot wordt. Een foutieve beoordeling van een service die slechts een klein stuk van het net gespeeld wordt zal minder snel in een fout resulteren dan dezelfde fout bij een diepere service.',
      serviceSectionOneComponentTwentyThree: 'Een diepe service:',
      serviceSectionOneComponentTwentyFour: 'Dit zijn services waarbij de eerste stuit diep op de tafelhelft van de tegenstander land en de bal erna de tafel verlaat. Voordeel van deze servicevariant is vaak het verrassingselement. Door sterk te variëren met de richting waarin je deze service speelt en hem af te wisselen met een kortere variant kun je vaak sneller tot een open spel komen en zorgt de snelheid van de service er voor dat je direct druk kunt zetten. Het nadeel van diepe services is dat indien de tegenstander er op voorbereidt is je direct een aanvalsslag tegen kunt krijgen. Door de hogere basissnelheid van de service is het goed uitvoeren van een loop of spinbal meestal al voldoende voor een return met de nodige druk.',
      serviceSectionOneComponentTwentyFive: 'Plaatsing:',
      serviceSectionOneComponentTwentySix: 'Naast de wijze van serveren en de diepte van de 1e bal is ook de plaatsing van de service van wezenlijk belang. Goede plaatsing hang met name af van je tegenstander. Afhankelijk van zijn positie achter de tafel bevinden zich delen van de tafel binnen zijn natuurlijke bereik. Daarnaast ben je gedeeltelijk afhankelijk van het verschil in retournerend vermogen van je tegenstander met diens voor- en backhand.',
      serviceSectionOneComponentTwentySeven: 'Plaatsing is met name duidelijk zichtbaar als het slecht gebeurt. De volgende twee zaken moet je bij iedere service proberen te voorkomen:',
      serviceSectionOneComponentTwentyEight: '1 – Dat het hoogste punt van de bal na de stuit zich op of net achter de eindlijn bevindt. Je tegenstander heeft dan alle keuze wat hij met de return wil doen',
      serviceSectionOneComponentTwentyNine: '2 – Dat het hoogste punt zich binnen de voor- en backhand “power zones” van je tegenstander bevindt.',
      serviceSectionTwoComponentOne: 'Om het lange noppenspel in grote lijnen eens uit te leggen:',
      serviceSectionTwoComponentTwo: 'Een persoon speelt met lange noppen omdat hij (meestal) een zwakke Backhand heeft en met noppen dit tracht te verdoezelen. Natuurlijk zijn er ook B-spelers die zeer goed noppen hanteren..',
      serviceSectionTwoComponentThree: 'Lange noppen keren altijd het effect om wat jij ernaartoe slaat. Topspinnen naar noppen geeft dus backspin terug. Backspin naar noppen geeft dus Topspin terug',
      serviceSectionTwoComponentFour: 'Een verduidelijking kan je zien op volgende Engelstalige afbeelding:',
      serviceSectionTwoComponentFive: 'Een geduldige aanvaller zal dus topspinnen naar de noppen, de bal die hij terugkrijgt zal hij dan "snijden" naar de noppen, de volgende terug topspinnen enzoverder enzoverder tot de noppenspeler een fout maakt of een te hoge bal terugspeelt die je dan heel hard contra afslaat ...',
      serviceSectionTwoComponentSix: 'Je kan natuurlijk ook altijd blijven spinnen naar de noppen maar je zal zien dat dit niet echt gemakkelijk is omdat je steeds meer effect terugkrijgt... (Bij korte noppen, kun je blijven topspinnen)',
      serviceSectionTwoComponentSeven: 'Ook nuttig om weten is dat bij een gesneden lange noppen opslag, er geen enkel effect meer op de bal zal zitten.  Je kan deze contra afslaan als je wat risico wil nemen.  Beter is echter licht over de bal gaan en contra terugplaatsen, en dan aan het topspin - snij - afslag spelletje beginnen zoals hierboven beschreven..',
      serviceSectionTwoComponentEight: 'Antitop dan, kan je niet vergelijken met noppen. Antitop haalt gewoon het tempo uit het spel en remt het balletje hard af, je krijgt als het ware een "dode" bal terug... Een sterke topspin slag is de beste slag tegen de antitop, en hier mag je blijven topspinnen.',
      serviceSectionTwoComponentNine: 'Tegen lange noppen/antitop spelen is eigenlijk wel een kunst op zich.   Zolang er effect op de bal zit, is het voor een noppenspeler vrij gemakkelijk aangezien hij veel druk legt bij de tegenstander door het weerkerende effect van zijn noppen. Maar wanneer er gewoon contra (=zonder effect) gespeeld wordt is het voor de noppenspeler heel moeilijk om de bal te krijgen zonder er een aanvallende return op te krijgen... Bij antitop is de controle groter dan bij noppen maar je bent er wel veel beperkter mee. Met een noppen kan je een stopblok kort bij de tafel doen, bij antitop is dit al veel moeilijker. Iemand met antitop gaat meestal een topspin "choppen" van ver achter zijn tafel.',
      serviceSectionTwoComponentTen: 'Als je met antitop/lange noppen wilt spelen dan moet je goed weten dat de mensen dan anders tegen jou gaan spelen en dat je de ballen anders gaat krijgen. Ofwel zoeken ze de noppen op of wel gaan ze de andere kant opzoeken/aanvallen...',
      serviceSectionThreeComponentOne: 'Als snelheden van de bal bekeken wordt, is tafeltennis niet de snelste balsport van de wereld.  De vier snelste zijn :',
      serviceSectionThreeComponentTwo: 'Badminton (260,6 km/uur)',
      serviceSectionThreeComponentThree: 'Squash (241,3 km/uur)',
      serviceSectionThreeComponentFour: 'Tennis (241,0 km/uur) (gemiddelde snelheid; services kunnen sneller geslagen worden)',
      serviceSectionThreeComponentFive: 'Tafeltennis (178,5 km/uur)',
      serviceSectionThreeComponentSix: 'Waarom noemen ze dan TOCH tafeltennis de snelste balsport ter wereld ???',
      serviceSectionThreeComponentSeven: 'Het is niet de snelste bal, maar de sport met de snelste balwisseling !',
      serviceSectionThreeComponentEight: 'En zoals je hieronder kan lezen zijn er verschillende punten die je samen moet bekijken',
      serviceSectionThreeComponentNine: 'Bij een keiharde afmaakslag kan de bal een snelheid van 250 km/u bereiken (das dus bij Louis :)) . Bij het duwen komt men slechts tot   25km/u  (das dus bij Gerdo :))',
      serviceSectionThreeComponentTen: 'Als de bal de bat raakt is deze slechts 1/1000 van een seconde in contact.',
      serviceSectionThreeComponentEleven: 'Dat bij de topspinslag de bal per seconde 50 maal om zijn as draait, dit zijn 3000 rotaties per minuut . (das bij Jurgen :))',
      serviceSectionThreeComponentTwelve: 'Dat bij een afmaakslag de bal een druk van 1 ton moet verdragen.',
      serviceSectionThreeComponentThirteen: 'Dat een oranje bal meer stimulerend is en minder vermoeiend is dan de witte bal.',
      serviceSectionThreeComponentFourteen: 'De hoogste snelheid van de arm bij een afmaakslag 35 – 40 km/u kan bedragen ',
      serviceSectionThreeComponentFifteen: 'Bij badminton en squash remt de bal hard af, enkel bij het vertrek zullen dergelijke snelheden behaald worden',
      serviceSectionThreeComponentSixteen: 'Het gaat, als je over de snelheid van een sport spreekt, om de tijd die een sporter krijgt om te reageren. Stel een voetballer neemt een strafschop. Bij een snelheid van 90km/uur zal de bal in 0,45 seconden de hoek bereiken. Bij tafeltennis heb je, omdat de tafel zo klein is, slechts 0,025 tot 0,040 seconden de tijd om de bal te raken.',
      serviceSectionThreeComponentSeventeen: 'In de tijd die een honkbalpitcher nodig heeft om de bal over de thuisplaat te werpen, is het tafeltennisballetje in een topwedstrijd 4 keer over het netje gegaan. Het balletje heeft niet alleen veel snelheid, het draait door het effect ook zeer snel om zijn as. Er is ooit een effect-wedstrijd gehouden, waarbij het aantal omwentelingen van de bal werd gemeten. Een van de broers Mazunov won deze wedstrijd. Het door Mazunov geslagen balletje werd “geklokt” op 9000 omwentelingen per minuut',
      serviceSectionThreeComponentEightteen: 'Als we deze weetjes allemaal op een rij zetten stelt men vast dat tafeltennis een van de snelste en de actiefste sporten is . Bij elke bal moet het lichaam een buitengewone prestatie verrichten . Zo moet er op een fractie van een seconde een beslissing genomen worden , die beslissend is voor het spelverloop. Tafeltennis vereist dan ook een zeer goede conditie. Deze sport is niet alleen zo populair omdat het lichamelijke en geestelijke conditie vereist , maar omdat het zo een leuke sport is . Het is beslist dan ook de moeite waard om tafeltennis te spelen , niet zoals men zegt dat het een zeer gemakkelijke sport is en dat men er niet moet voor bewegen .',
      serviceSectionFourComponentOne: 'Luchttekens bevoordeeld in tafeltennis',
      serviceSectionFourComponentTwo: 'Is het louter hocus-pocus, een handig handeltje dat gebruik maakt van de goedgelovigheid, of een praktische levensgids die aangeboren talenten en zwaktes kan aangeven? Vanzelfsprekend heeft het weinig zin om in horoscopen te gaan schrijven: "De dag heeft voor u enkele prachtige topspins in het vooruitzicht, of: het is een dag om speciaal veel aandacht te besteden aan uw service…"',
      serviceSectionFourComponentThree: 'In de astrologie zijn er vier basiskarakters: het luchttype (de denker), het vuurtype (de levendige), het watertype (de gevoelige) en het aardetype (de praktische). Welk type je bent wordt bepaald door je sterrenbeeld, meer bepaald: VUUR: Ram, Leeuw, Boogschutter, AARDE : Stier, Maagd, Steenbok, LUCHT: Tweelingen, Weegschaal , Waterman. WATER : kreeft, Schorpioen, Vissen. Opvallend voor onze sport is dat veel topspelers ervan geboren worden onder een luchtteken. Dit kan te maken hebben met de finesse die aan tafeltennis eigen is. Bekende voorbeelden: Jurg Rosskopf, Peter Karlsson, Eric Lindh (tweeling), Jan-Ove Waldner, Mikael appelgren, Jean-Philippe Gatien (weegschaal), Verdedigers zijn wel vaker waterman. Hieronder de kenmerken van de diverse sterrenbeelden. Oordeel zelf maar!',
      serviceSectionFourComponentFour: 'Ram',
      serviceSectionFourComponentFive: '(21/03-19/04): hier vinden we de aanvalsspeler bij uitstek. Hij/zij is snel, aggressief en heeft een uitstekende kampgeest. Hij is geen strateeg maar een tacticus. Hij is ook een beter enkel- dan dubbelspeler. Ploegwerk ligt hem niet zo. Bv. Vladimir Samsonov. Bij ons : Dirk VK',
      serviceSectionFourComponentSix: 'Stier',
      serviceSectionFourComponentSeven: '(20/04-20/05): hij is het type dat probeert om het spel te vertragen. Er zijn relatief weinig (top)spelers van dit sterrenbeeld . In principe zijn ze te traag voor het spel. Maar bedenk dat niemand enkel een sterrenbeeld heeft: de ascendant speelt ook een rol. Bv. Zoran Primorac.',
      serviceSectionFourComponentEight: 'Tweeling',
      serviceSectionFourComponentNine: '(21/05-20/06): zonder twijfel het teken met de grootste reactiessnelheid, en dus uitstekend geschikt voor tafeltennis. Tevens een prima dubbelpartner. Vb. Wang Liqin (huidig nr. 1 in de wereld bij de mannen, Jurg Rosskopf, Thierry Cabrera, bij ons: Lieven, verjaart op 20/06. en ook Geert',
      serviceSectionFourComponentTen: 'Kreeft',
      serviceSectionFourComponentEleven: '(21/06-22/07): ook de kreeft zal men niet vaak aantreffen in onze sport. De snelle reacties zijn er voor hem/haar te veel aan. Hij speelt wel graag dubbel. Bv. Philippe Saive. bij ons : Chiel',
      serviceSectionFourComponentTwelve: 'Leeuw',
      serviceSectionFourComponentThirteen: '(23/07-22/08): hij speelt met grote inzet en zegedrift. Enkel al zijn zelfverzekerd optreden kan zijn tegenstander van hun stuk brengen. Hij is zeker geen trainingsgek, en omdat hij veel plaats nodig heeft is hij zeker niet de ideale dubbelpartner: bv. Ryu Seung Min, de Koreaanse Olympische kampioen 2004 bij de mannen, Bettine Vriesekoop. Bij ons : Jean-Pierre',
      serviceSectionFourComponentFourteen: 'Maagd',
      serviceSectionFourComponentFifteen: '(23/08-22/09): de ijverige, leergierige speler die altijd aan zichzelf werkt. Nooit tevreden over zichzelf. Snel en intelligent, maar niet zo stressbestendig als leeuw of schorpioen. Vb. Trinko Keen., bij ons : Jurgen, Willy',
      serviceSectionFourComponentSixteen: 'Weegschaal',
      serviceSectionFourComponentSeventeen: '(23/09-22/10): net als bij alle luchttekens: snelheid en beweeglijkheid. Opvallend bij de weegschaal is de vaak elegante spelstijl. Bv. Jan-Ove Waldner, Werner Schlager, Zhang Yining (de Chinese nummer 1 van de wereld bij de vrouwen, tevens Olympisch kampioen 2004). Bij ons Thijs (17/10) en Dimitri (18/10) en Stefaan',
      serviceSectionFourComponentEightteen: 'Schorpioen',
      serviceSectionFourComponentNineteen: '(23/10-21/11): dit is het type dat zich ten volle aan het spel geeft. Vaak is hij zelfs een slecht verliezer. Vb. Jean-Michel Saive. Bij ons Jan en Gerdo (4/11)',
      serviceSectionFourComponentTwenty: 'Boogschutter',
      serviceSectionFourComponentTwentyOne: '(22/11-21/12): in tegenstelling tot de schorpioen is dit het type dat plezier heeft aan het spel zelf. Hij laat zich graag verleiden tot het meer riskante spel. Vb. Wang Hao (Chn, nummer 3 van de wereld), Patrick Chila.',
      serviceSectionFourComponentTwentyTwo: 'Steenbok',
      serviceSectionFourComponentTwentyThree: '(22/12-19/01): niet de beste, maar steeds bereid tot intensieve trainingen. Hij legt zich meer dan anderen ook toe op conditietraining. Vb. Ding Yi.',
      serviceSectionFourComponentTwentyFour: 'Waterman',
      serviceSectionFourComponentTwentyFive: '(20/01-18/02): Het meest typische luchtteken: snelheid, samen met veel verrassingseffecten in het spel. Erg onberekenbaar type dat zelfs in schijnbaar verloren situaties nog het punt kan winnen: vb. Chen Xinhua.',
      serviceSectionFourComponentTwentySix: 'Vissen',
      serviceSectionFourComponentTwentySeven: '(19/02-20/03): Zet niet alles in op taktiek en techniek, maar vertrouwt sterk op zijn instinct. Laat zich weinig verrassen. Vb. Ma Lin (huidig nr. 2 van de wereld), Timo Bull (nr. 4 en eerste Europeaan).',
      serviceSectionFiveComponentOne: 'Tafeltennis als vermaak',
      serviceSectionFiveComponentTwo: 'De ontstaansgeschiedenis van Tafeltennis is alleen te zien in samenhang met andere takken van sport, vooral tennis. Net als bij vele sporten, begon tafeltennis als een sociaal verzetje; het was vermoedelijk voor het eerst gespeeld - met geïmproviseerd materiaal - in Engeland, ergens in het einde van de 19e eeuw. Tafeltennis is, net als badminton en het huidige tennis, afkomstig van het middeleeuwse tennis. Tafeltennis was al populair in de vorige eeuw. In Engeland werd in 1884 octrooi verleend op de naam "Miniature-Indoor-Tennis-Game". Dit spel werd gespeeld met een kleine gummibal (met lucht gevuld). Het spel was ook al vroeg geïntroduceerd in de Verenigde Staten en het is mogelijk dat het eerste materiaal al in 1887 vervaardigd werd. In 1890 werd de celluloid-bal "uitgevonden" door de Engelse ingenieur James Gibb. Rond 1900 was het spel bekend onder de huidige namen ("Tafeltennis" en "Ping-Pong"), en verschillende merknamen als "Gossima", "Flim-Flam", "Pim-Pam" (Frankrijk) en "Whiff-Whaff" (Amerika). Aanvankelijk werd het spel in speciale clubs en cafés gespeeld. In 1899 werd in Berlijn de "1e Berliner Tennis und Ping-Pong Gesellschaft" opgericht. Er werden zelf al snel "ping-pong"-liedjes en -kleding geïntroduceerd. Het spel bleef echter voorbehouden aan de hogere kringen.',
      serviceSectionFiveComponentThree: 'Ping-Pong',
      serviceSectionFiveComponentFour: 'De naam "Ping-Pong" ontstond door het geluid dat de celluloid-bal maakte op de tafel en de toen gebruikte "rackets". Vroegere rackets werden gemaakt van kurk, perkament, karton en hout bedekt met doek, fluweel, leer of schuurpapier. Als bal werd soms gespeeld met champagne-kurken of bolletjes wol. In 1900 werd in Engeland op de naam "Ping-Pong" octrooi verleend (onder nummer 19070) door "J. Jacques & Son" - hierna werd het spel een echte modegril. Er zijn vele verwijzingen en afbeeldingen van hoe het toen gespeeld werd, meestal in een huiselijke omgeving door de hogere kringen. Toen had het tafeltennis al een paar van zijn hedendaagse complexiteiten verkregen, maar het werd nog steeds gezien als een "after-dinner" amusement in plaats van een sport: "smashes" werden als onsportief beschouwd. In 1902 bedacht de Engelsman Good, dat het rubbermatje wat gebruikt werd voor teruggave van muntgeld, best als bedekking van zijn tafeltennis-batje gebruikt zou kunnen worden - dit zou je kunnen zien als een voorloper van het nu bekende noppen-rubber. In 1903 werd in een artikel gewaarschuwd voor het dragen van een kostuum met een gesteven overhemd en, voor de dames, een satijnen jurk. Maar verder werd ook gedetailleerd advies gegeven over geribbeld rubber, de penhoudergreep en tactieken. Het was populair in Midden-Europa tussen 1905 en 1910, maar reeds daarvoor was een aangepast versie al geïntroduceerd in Japan, waarvan het later verspreidde naar China en Korea. In West-Europa en Amerika kwam er een korte terugval in de populariteit. Pas na de eerste Wereldoorlog groeide de interesse weer. Het spel werd weer herontdekt in Engeland en Wales in de periode na 1920. Toen waren het de tennisverenigingen die hun leden ook in de winter wilden bezighouden en daarom deze wachttijden met tafeltennis bekortten. Bij koude en regen kon in de clublokalen van de tennisverenigingen het "echte" tennisspel worden nagedaan. Hoogte van het net en omvang van de tafels werden aan het toeval overgelaten.',
      serviceSectionFiveComponentFive: 'Tafeltennis als sport',
      serviceSectionFiveComponentSix: 'In Duitsland werd het tafeltennis uitgebouwd tot een echte sport - de twee eerste internationale kampioenschappen vonden daar plaats. In die jaren rond 1925 werden Nationale bonden geformeerd. Ook de standaardisatie van de regels begon, zowel in Europa als in het verre oosten. In 1926 is de ITTF (International Table Tennis Federation) gevormd in Berlijn met Denemarken, Duitsland, Engeland, Hongarije, India, Oostenrijk, Tsjecho-Slowakije, Wales en Zweden als leden. Later dat jaar werd de USA ook lid. Sommige veranderingen - een verlaging van het net, een tijdsregel tegen onaantrekkelijke wedstrijden tussen verdedigende spelers en regels ter voorkoming van extra voordeel voor de serveerder - werden geïntroduceerd in de jaren na 1930. In het seizoen 1931/1932 bepaalde de ITTF, dat er geen onderscheid meer gemaakt mag worden tussen profs en amateurs - er zijn alleen nog maar "spelers". Vanaf ca. 1930 tot 1950 was tafeltennis verboden in de voormalige Sovjet-Unie omdat het spel als onveilig voor de ogen werd beschouwd. De USTTA (United States Table Tennis Association) werd opgericht in 1933 en sloot zich aan bij de ITTF. De in 1930 opgericht Amsterdamse TafeltennisBond sloot zich in 1933 ook aan bij de internationale federatie. In 1935 werd de NTTB (Nederlandse TafelTennisBond) opgericht. In 1936 (nog voor invoering van de tijdsregel) kwam de langste rally tot stand, die bij tafeltennis ooit plaatsvond - bij de WK in Praag werd 2 uur lang gestreden om 1 punt! Tevens werd toen door 2 andere spelers de langste partij ooit gespeeld - na 7 uur werd de partij in de 5e game afgebroken! Hierna werd de tijdsregel ingevoerd. In de jaren 50 was er in de tafeltenniswereld veel ophef over het gebruik van sponsrubber. In 1952 verraste de Japanner Satoh met zijn nieuwe rubber iedereen en werd onbedreigd wereldkampioen. De dikte van het rubber zorgde voor een soort katapult-effect, waardoor er enorme snelheden aan de bal werden gegeven. In defensief opzicht hoefde men alleen de bal tegen te houden, zo groot was de veerkracht. Deze revolutie noopte de Oostenrijkse bond tot het voorstel om twee internationale federaties op te richtten, één voor sponsspelers en één voor de rest. Pas in 1958 besloot de NTTB het sponsrubber te verbieden. In 1959 volgde de ITTF het besluit van veel nationale bonden. In 1957 was de ITTF zodanig gegroeid, dat besloten werd om continentale bonden op te richten - De Europese Tafeltennisbond ontstond; deze naam werd later veranderd in de ETTU (Europese Tafeltennis Unie). In 1961 werd de tijdsregel gewijzigd tot een "versnellingsregel"; na 15 minuten spelen moeten alle volgende punten binnen een serie van 12 slagen behaald worden... In 1971 was de USA-tafeltennis-delegatie naar China voorpaginanieuws onder de kop "Ping-pong diplomatie". Het uitstapje creëerde niet alleen grotere bewustwording voor de sport maar plaveide ook de weg voor betere diplomatieke verhoudingen tussen de Verenigde Staten en China. Gedurende de jaren na 1960, ontwikkelde tafeltennis zich tot een wereldwijde sport, beoefend door ongeveer 40-miljoen spelers in competitieverband en door ontelbaar veel meer spelers die het spel wat minder serieus spelen. Het spel is in essentie niet veranderd sinds de beginjaren, maar is echter wel sneller, subtieler en veeleisender geworden - zelfs in vergelijk met maar twintig jaar geleden. Vanaf 1960 begon China de Wereld Kampioenschappen te domineren. Dit duurde tot 1980, toen tafeltennis in de Olympische Spelen werd geïntroduceerd. Vandaag de dag zijn Europeanen de hoogst gerangschikte spelers bij de mannen; bij de vrouwen domineren de Aziatische landen.',
      serviceFigureCaptionOne: 'Figuur 1',
      serviceFigureCaptionTwo: 'Figuur 2'
    }
  }
};