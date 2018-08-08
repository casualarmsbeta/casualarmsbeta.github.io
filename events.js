
// Lobby events
var eventsJSON = [
	'{"titleText":"Custom Party Lobby","type":0,"theme":"undefined","date":"2018-08-02T18:00:00.000Z","duration":120,"timeZone":"GMT","hosts":[{"name":"Rashiko","tag":"CC","code":"6822-5055-2423","tier":2}]}',
	'{"titleText":"Standard Party Lobby","type":0,"theme":"everything","date":"2018-08-04T18:00:00.000Z","duration":120,"timeZone":"EDT","hosts":[{"name":"Programmability","tag":"","code":"4898-5196-4000","tier":1},{"name":"Literary","tag":"","code":"4704-7597-7783","tier":2},{"name":"Ackus","tag":"CC","code":"4014-0482-4441","tier":3}]}',
	'{"titleText":"Fights Only Lobby","type":4,"theme":"cote","date":"2018-08-05T20:45:00.000Z","duration":60,"timeZone":"EDT","hosts":[{"name":"Literary","tag":"","code":"4704-7597-7783","tier":0},{"name":"Program","tag":"","code":"4898-5196-4000","tier":0}]}',
	'{"titleText":"Fights Only Lobby","type":3,"theme":"mlm","date":"2018-08-06T20:45:00.000Z","duration":60,"timeZone":"EDT","hosts":[{"name":"Fang","tag":"CC","code":"8434-0819-1597","tier":1},{"name":"Program","tag":"","code":"4898-5196-4000","tier":2}]}',
	'{"titleText":"Wildcard Wednesday!","type":0,"theme":"teambuilding-near-far","date":"2018-08-08T22:00:00.000Z","duration":120,"timeZone":"EDT","hosts":[{"name":"Program","tag":"","code":"4898-5196-4000","tier":1},{"name":"Rashiko","tag":"CC","code":"6822-5055-2423","tier":3}]}',
	
	
	
];

var leaderboardData = [
	'{"Rashiko ":6326,"Literary":5072,"Bogalizard":4105,"Program":3007,"Marie":2661,"Simango":2622,"Ackus":2415,"Sadaly":2243,"Buster":2225,"Fang":2005,"Cosmos":1724,"Spinning":1684,"Orinetta":1509,"Eevee":1489,"CheezLuigi":1452,"Kat":1380,"fidget":1141,"Main Main":1131,"Kreniz":1002,"big daddy (baddadjoke)":999,"ToxicGamer":893,"taste! ":889,"LandFrog":868,"Spenjo":839,"Horrible":826,"ai-chan":796,"Becca":781,"SlosherWailord":773,"Dendrimer":768,"Panthermon":764,"Arkrynath":754,"Levi":743,"Rune":724,"brixi (juices)":676,"Comet":660,"Mellax":657,"Flesheater":652,"Reis":647,"Ak":633,"Lucario":565,"Zeredder":556,"PhoenixNTS":414,"JDR61100 (Archangel-Vakarian)":390,"Piper":389,"Josepho":387,"Pawl":386,"Mel":385,"Nyxatron":380,"BB!!":364,"Schmuff":354,"Xander (Poncachoca)":351,"Luis":342,"Mitsaras":341,"Antlion":325,"GM-Tom":323,"Sora":317,"GlitchWork (ABowlOfCereal)":296,"Tuturoopa":295,"Summerwind":292,"Anomika":286,"Jolibon (Angie)":278,"Kosen":266,"Paradox":264,"Ferny":256,"Will (tugboat)":249,"おおワーム (DL)":240,"jefjay":225,"Beamer":223,"East":223,"Craig (eliminatr1)":215,"MrSchmidt":210,"TameDame":206,"Defionus":202,"Reese":195,"M.J. LIU":191,"T.J.":184,"Camryn":178,"E.P.Silon":174,"Goofy1013":173,"Jake":172,"Jak":170,"JoyJaz":168,"Iloria":167,"TechnoPuff":152,"Radio":148,"Ouen":145,"Glenn (Eon)":139,"Azhul":138,"Huck":137,"Landi":137,"Para":136,"RickHardslab":135,"HOLV1N":133,"Raidong":125,"Ruction":125,"Gominola":123,"h15c0r3r":117,"Bea (Beams)":115,"TrofyKMB":115,"Fireshark":109,"Ale":106,"Sam":104,"TheDell":104,"Mileve":102,"ShortBloom":101,"Dan Samx":99,"JJ":98,"it\'s ogre":97,"Dendy":92,"RoxTheFox":92,"hickknight":91,"ali a pro":89,"wasabi":89,"S. Fruitman":87,"DaddyDave":84,"Hamma":84,"Sleepy":83,"Chubaca Cl":82,"Speedmeans":81,"wutdoeyedo":81,"shovel":80,"Hannah":79,"Jon.img":78,"Schkrimps":78,"ChAos":77,"Mario119":77,"tj":77,"CCB":76,"Will (Moose)":76,"Dime":75,"amikwe*":71,"Paperwings":71,"Juice":70,"Daddy":69,"tehbs":69,"Nkc90":68,"Lucifer+":67,"Geeligan *":66,"RossBoss":66,"Summer (707)":65,"Dr. Nowak *":64,"Floria":64,"PittySplat":64,"Thesauce1":64,"becks":63,"KSaito":63,"M.D. Geist *":63,"Patzen":62,"Ze Daddy":62,"Ditto":61,"Martian":60,"SharaHeart":60,"Yakwaffle":60,"CAB":59,"Claro0602 *":57,"WUT-WS-Twi (Blue)":56,"Zeta":56,"Phalve *":52,"Pokeball35":52,"オーウェン":52,"Gryff":51,"Sagitta":51,"potatohats":48,"Sunny":48,"nrfq":47,"Spicy DX":47,"Mike":45,"Texan":44,"Astronauto":43,"Hennessey *":43,"Jsnak":42,"Mikey":42,"Goodbar":41,"Omar":41,"Astro":40,"Croco":40,"La Iguana":40,"Andy":37,"James":37,"Mf Chem":37,"Milk":37,"Mr.MGamer":37,"ailo":36,"Bread Hole (metaphor cow)":36,"Reinsfeld ":36,"NepSmug":35,"Roo (Chaaqoti)":35,"SushiSox *":35,"Hatninja":34,"Mana":34,"NasiDe *":34,"Shadow":34,"viwor":34,"BloodyKit":33,"J. Begame":33,"Lui":33,"Matthew":33,"Pipin":33,"Saniclove4":33,"Soapy":33,"Emmanuel *":32,"Era Wolf":32,"Boop":31,"Lola *":31,"Tyler":31,"Chombomann":29,"James B":29,"pbub1":29,"!?":28,"Roadsign":28,"Tastefan":28,"Brad":27,"Evan (waddledee)":27,"Gaddishack":27,"https://":27,"ZackWeen":27,"ribbngrill (Minimonstr620)":26,"bumi_jr.":23,"Bonlino":22,"Gabs":22,"Hunter":22,"§6§|Max":21,"Oswald":21,"Chickens (Bouncy Chickens)":20,"DatShyguy *":20,"Xenos360":20,"InfiniteM *":19,"LesFleur":19,"pcd":18,"Kitty":17,"Pepper":16,"Squid kid":16,"a fine lad":15,"Mikey6369":15,"NX Glitch":15,"Popstar":12,"Squiggy":12,"Dragan":11,"Katie V.":11,"NintenDaan":11,"squid rock":11,"Reesetheninja":11,"bread":10,"eXTeeGi":9,"Nintendo64 ( ) ":9,"Gator67":7,"pipito 500 *":7,"Sumaya":7,"トリavita":7,"*NJ*":6,"ice cube":6,"Shadowwolf":6,"MedicPRN *":5,"Steelers":5,"Tree":5,"Patrick":4,"Darth Game":3,"gitan123 (nigloboy)":3,"Hato":2,"Crown":1,"Smash54 *":1,"Big llama":0}'
];

var eventStages = {
	 0 : "Spring Stadium",
	 1 : "Ribbon Ring",
	 2 : "Ninja College",
	 3 : "Mausoleum",
	 4 : "Ramen Bowl",
	 5 : "Scrapyard",
	 6 : "Cinema Deux",
	 7 : "Buster Beach",
	 8 : "Snake Park",
	 9 : "DNA Lab",
	10 : "Sky Arena",
	11 : "Via Dolce",
	12 : "Temple Grounds",
	13 : "Sparring Ring",
	14 : "[NAME REDACTED]"
};

var eventThemes = [
	{
		"key"             : "everything",
		"name"            : "Anything Goes",
		"description"     : "",
		"solo-fight"      : [2, 3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [2],
		"skillshot"       : [2, 4],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : true,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
	{
		"key"             : "breakable-bits",
		"name"            : "Breakable Bits",
		"description"     : "",
		"solo-fight"      : [2],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [2, 4],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [1, 3, 5, 9, 11, 12, 14],
	},
	{
		"key"             : "teambuilding",
		"name"            : "Teambuilding",
		"description"     : "",
		"solo-fight"      : [],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [4],
		"v-ball"          : [4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 3, 4, 8, 9, 10, 12],
	},
	{
		"key"             : "bane-of-ranked",
		"name"            : "Bane of Ranked",
		"description"     : "",
		"solo-fight"      : [3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [3, 4],
		"hoops"           : [2],
		"skillshot"       : [2, 4],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [2, 4, 6, 8, 14],
	},
	{
		"key"             : "teambuilding-near-far",
		"name"            : "Teambuilding: Near & Far",
		"description"     : "",
		"solo-fight"      : [],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [4],
		"v-ball"          : [4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 4, 8, 11, 13],
	},
	{
		"key"             : "barrier-bonanza",
		"name"            : "Barrier Bonanza",
		"description"     : "",
		"solo-fight"      : [2, 3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [1, 5, 6, 7, 8, 9, 12, 14],
	},
	{
		"key"             : "corner-chaos",
		"name"            : "Corner Chaos",
		"description"     : "",
		"solo-fight"      : [2],
		"team-fight"      : [4],
		"vs-hedlok"       : [3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 7, 10, 11, 13, 14],
	},
	{
		"key"             : "mlm",
		"name"            : "Restricted Competitive (MLM style)",
		"description"     : "This theme is used for the Mega League Mondays warmup lobbies.",
		"solo-fight"      : [2],
		"team-fight"      : [],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : false,
		"streak-bonouses" : false,
		"stages"          : [3, 7, 9, 12, 13],
	},
	{
		"key"             : "cote",
		"name"            : "Extended Competitive (Era style)",
		"description"     : "This theme is used for the Champions of the Era warmup lobbies.",
		"solo-fight"      : [2],
		"team-fight"      : [],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : false,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 3, 5, 7, 9, 11, 12, 13],
	},
];
