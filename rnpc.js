var gen_data = {};

  gen_data['main'] = [
    '{title}{first_name}{middle_name}{second_name} - ({align}). A {gender} {race} {profession}/{class}. They wear {armor}, and wield a {weapon}, both are of {quality} quality. They beleive in {god} They seek {goal}.\n'
  ];
  gen_data['gender'] = [
    'male', 'female'
  ];
  gen_data['race'] = {
    '1': 'Human',
    '2': 'Dwarf',
    '3': 'Elf',
    '4': 'Orc',
    '5': 'Halfling',
    '6': 'Tiefling',
    '7': 'Gnome',
    '8': 'Dragonborn'
  };
  gen_data['align'] = {
    '01-05': 'LE',
    '06-16': 'LN',
    '17-37': 'LG',
    '38-45': 'NE',
    '46-66': 'NN',
    '67-87': 'NG',
    '88-92': 'CE',
    '93-96': 'CN',
    '97-00': 'CG'
  };
  gen_data['armor'] = {
    '01-50': 'leather armor',
    '51-90': 'chainmail',
    '91-00': 'plate armor'
  };
  gen_data['quality'] = {
    '01-50': 'common',
    '51-90': 'finest',
    '91-00': 'masterwork'
  };
  gen_data['weapon'] = [
    '{melee_weapon}',
    '{melee_weapon} and a shield',
    '{dual_weapons}',
    '{ranged_weapon}'
  ];
  gen_data['melee_weapon'] = [
    'battleaxe', 'mace', 'spear', 'sword', 'dagger', 'maul', 'shortsword', 'longsword', 'greatsword', 'staff', 'quartestaff'
  ];
  gen_data['ranged_weapon'] = [
    'longbow and arrows', 'heavy crossbow', 'light crossbow', 'shortbow', 'shuriken', 'throwing axe', 'blowpipe'
  ];
  gen_data['dual_weapons'] = [
    'dual blades', 'dual handaxes', 'dual shortswords', 'nunchucks',
  ];
  gen_data['first_name'] = [
'Dalker','Lintto','Maydey','Danon','Wankende','Lynchal','Mckend','Joviuss','Gancir','Hachad','Qunell','Ellb','Coleryt','Gasent','Conde','Hanten','Brobyt','Werden','Nolmi','Dodintt','Issan','Dinant','Wydike','Dicton','Chenk','Danken','Haston','Wyden','Wirent','Qusal','Montte','Donnth','Confan','Sthal','Vandet','Mam','Auntol','Honc','Dastolli','Manisc','Wentelve','Danfard','Donke','Gasen','Benttonc','Mettto','Darllde','Dobya','Derento','Alerrke','Heldin','Arincor','Brld','Erieri','Brerk','Arydend','Arrilb','Elttontu','Arincha','Hasap','Styay','Donl','Elkente','Merdie','Ponder','Dalmic','Corwt','Geto','Macenw','Damalli','Lustoll','Bendo','Chap','Dolorl','Dintttha','Dorariu','Arrina','Coontei','Genen','Antorm','Covewo','Dantha','Dacolt','Kewoon','Gantonto','Gananc','Grindel','Wenten','Hanwo','Harice','Elden','Hand','HascKe','Vaph','Varw','Daten','Janwit','Ranken','Brentors','Arisale','Conde','Danonte','Gariren','Alldewi','Elllb','Arde','Mande','Galor','Hanton','Liusal','Isonen','Dolalto','Kecte','Wyal','Wentyn','Lelll','Shas','Dadwon','Renannt','Wari','Edetond','Malbyth','Jaeran','Roney','Cont','Betol','Alende','Chant','Diust','Garon','Ditoro','Wydinell','Steni','Jariton','Donder','Tryto','Arorsa','Darmen','Mentend','Dodel','Coreri','Mandenl','Donwic','Jalonc','Isasct','Dallll','Kenitt','Honct','Arici','Mirama','Trrl','Chano','Handel','Wiene','Brddey','Werteg','Conona','Mewen','Bretonde','Broneri','Kentol','Donttan','Aldic','Arerr','Austha','Horici','Gacicha','Hareri','Dorsch','Marrin','Jantall','Dantto','Brinf','Ardent','Masator','Anaro','Austenn','Brrolt','Dartor','Lustob','Lydwin','Vamiante','Brrobyn','Lintto','Auston','Hedenent','Hesene','Noyte','Bryde','Elckewi','Nond','Brondwt','Torretto','Dondet','Cooto','Daric','Generoto','Conto','Hondde','Dadert','Chented','Tovite','Brsad','Cottom','Jarkeni','Sten','Aricor','Wenlmi','Dill','Joreral','Meranw','Brinto','Dontod','Haltord','Scorichas','Welenif','Stharin','Corme','Meguint','Mastyt','Mardelt','Conddo','Contt','Garrr','Dicol','Dork','Dellel','Jalln','Shariel','Lusan','Danwt','Tonikel','Aldori','Cascha','Mento','Sharyno','Denfa','Keytes','Alll','Trmaril','Rarmide','Aronwic','Elmeve','Brerrk','Valbya','Herr','Kelvic','Raster','Quston','Gaston','Linad','Ront','Ganeron',"Aaron","Abraham","Adam","Adolph","Albert","Alex","Alexander","Alfred","Allen","Alonzo","Alva","Alvin","Amos","Andrew","Anthony","Anton","Archie","Arnold","Arthur","August","Ben","Benjamin","Bennie","Bernard","Bert","Bill","Calvin","Carl","Cecil","Charles","Charley","Charlie","Chester","Christopher","Clarence","Claud","Claude","Clayton","Cleveland","Clifford","Clifton","Clinton","Clyde","Cornelius","Curtis","Dan","Daniel","Dave","David","Dennis","Dewey","Donald","Earl","Earnest","Ed","Eddie","Edgar","Edmund","Edward","Edwin","Elbert","Eli","Elijah","Ellis","Elmer","Emil","Emmett","Ernest","Eugene","Everett","Felix","Floyd","Francis","Frank","Franklin","Fred","Frederick","Fredrick","George","Gerald","Gilbert","Glen","Glenn","Gordon","Grover","Gus","Guy","Harley","Harold","Harrison","Harry","Harvey","Henry","Herbert","Herman","Hiram","Homer","Horace","Howard","Hubert","Hugh","Ira","Irvin","Irving","Isaac","Jack","Jacob","Jake","James","Jasper","Jay","Jeff","Jerry","Jess","Jesse","Jessie","Jim","Joe","John","Johnnie","Jose","Joseph","Julius","Kenneth","Lawrence","Lee","Leo","Leon","Leonard","Leroy","Leslie","Lester","Levi","Lewis","Lloyd","Lonnie","Louis","Luther","Mack","Manuel","Marion","Mark","Marshall","Martin","Marvin","Matthew","Maurice","Max","Melvin","Michael","Mike","Milton","Morris","Moses","Nathan","Nelson","Nicholas","Noah","Norman","Oliver","Ollie","Orville","Oscar","Otis","Otto","Owen","Patrick","Paul","Percy","Perry","Peter","Philip","Phillip","Ralph","Ray","Raymond","Reuben","Richard","Robert","Roland","Roscoe","Ross","Roy","Rudolph","Rufus","Russell","Sam","Samuel","Sherman","Sidney","Silas","Simon","Stanley","Stephen","Steve","Sylvester","Theodore","Thomas","Timothy","Tom","Vernon","Victor","Vincent","Virgil","Wallace","Walter","Warren","Wesley","Wilbur","Wiley","Will","Willard","William","Willie","Willis","Wilson",

  ];
  gen_data['second_name'] = [
'Mildash','Plainstrider','Greatbreath','Twospell','Misttalon','Summerbrow','Horsewoods','Crestwalker','Mildmight','Mountainglory','Icegaze','Crowsplitter','Twosurge','Shadowtalon','Barleyforge','Glowrock','Fallenbone','Darkmane','Coldwhisk','Nightroar','Freebringer','Twilightbraid','Hazerock','Hawkmaul','Icebranch','Prideswallow','Singlesnarl','Thunderless','Hallowbrace','Mildhammer','Snakeshield','Pinetide','Regalwoods','Grassrunner','Moonbluff','Proudbranch','Warrage','Fernpunch','Sharpmaw','Humblebrooke','Ravenbrow','Downshot','Silverlash','Hallowcrag','Hazeforge','Palewoods','Nosesprinter','Wyvernhide','Marshdew','Bladeroar','Hardflow','Fourwhisk','Whisperforest','Sacredwhisper','Snowreaver','Dirgebough','Hawkroot','Hallowpike','Voidthorne','Cinderdrifter','Distantwound','Sageglide','Cloudshard','Nickleshield','Flameshadow','Pridebeard','Deathsworn','Holygazer','Glorystone','Forestswift',

  ];

  gen_data['middle_name'] = {
    '01-96': '\0',
    '97-98': ' Banlie ',
    '99-00': ' Kurgoon '
  };

  gen_data['title'] = {
    '01-96': 'Ser ',
    '97-98': 'Praetor ',
    '99-00': 'Justicar '
  };


  gen_data['profession'] = [
'Actor', 'Animal Handler','Archer','Armorer','Astrologer','Barbarian','Barkeep','Beer Seller','Boatman','Brewer','Brigand','Builder','Carpenter','Charioteer','Chieftain','Clerk','Cobbler','Cook','Costermonger','Courtier','Cutler','Dancer','Distiller','Doctor','Eunuch','Fighter','Footman','Gardener','Gladiator','Grocer','Guildmaster','Hay merchant','Herald','Hermit','Housemaid','Infantryman','Inventor','Jeweler','King','Laborer','Leatherworker','Locksmith','Lord','Man at Arms','Mayor','Messenger','Miner','Monk','Musician','Nun','Page','Pastry cook','Philosopher','Pilgrim','Potter','Privateer','Pursemaker','Ratcatcher','Roofer','Rugmaker','Sailor','Sculptor','Scrivener','Shaman','Shoemaker','Slaver','Sorcerer','Stablehand','Storyteller','Street seller','Surgeon','Sycophant','Tavernkeeper','Teamster','Tinker','Toymaker','Vermin catcher','Vintner','Warrior','Wetnurse','Wizard','Wood seller','Advocate','Apothecary','Archivist','Artisan','Baker','Barber','Barmaid','Beggar','Bookbinder','Bricklayer','Brothel Keeper','Butcher','Cartographer','Chatelaine','Chirurgeon','Clock Maker','Commander','Cooper','Counselor','Cowherd','Daimyo','Dictator','Diver','Domestic Servant','Explorer','Fisherman','Furrier','Geisha','Glovemaker','Groom','Harness maker','Healer','Herbalist','Highwayman','Hunter','Innkeeper','Jailer','Jongleur','Kitchen drudge','Lady','Librarian','Longbowman','Maidservant','Mason','Mercer','Midwife','Minister','Mortician','Necromancer','Nurse','Painter','Peasant','Physician','Pirate','Priest','Professor','Queen','Reeve','Ropemaker','Ruler','Samurai','Scavenger','Seamstress','Shepherd','Silversmith','Smith','Spice Merchant','Stevedore','Steward','Street sweeper','Surveyor','Tailor','Tax collector','Thatcher','Torturer','Trapper','Veterinarian','Viking','Water carrier','Wine seller','Woodcarver','Wrestler','Alchemist','Architect','Aristocrat','Artist','Banker','Bard','Beekeeper','Blacksmith','Bookseller','Brick Maker','Buckle Maker','Caravan Leader','Chandler','Chef','Clergyman','Clothworker','Concubine','Copyist','Courtesan','Crossbowman','Dairymaid','Diplomat','Diviner','Emperor/Empress','Farmer','Fishmonger','Galley Slave','General','Goldsmith','Guardsman','Hatmaker','Hearthwitch','Herder','Historian','Illuminator','Interpreter','Jester','Judge','Knight','Lady in Waiting','Linguist','Longshoreman','Majordomo','Masseur','Merchant','Miller','Minstrel','Mourner','Noble','Old-clothes seller','Pariah','Perfumer','Pigkeeper','Plasterer','Prostitute','Ranger','Ronin','Royal Adviser','Saddler','Scabbard maker','Scholar','Servant','Ship captain','Slave','Soldier','Squire','Stonemason','Street kid','Student','Swordsman','Tanner','Teacher','Thief','Town crier','Vendor','Village chief','Warlock','Weaver','Witch','Woodcutter','Writer'

  ];
  gen_data['goal'] = [
    'a loving partner', 'an establishment for their business', 'revenge', 'redemption'
  ];
  gen_data['class'] = [
    'Fighter', 'Cleric', 'Rogue', 'Wizard', 'Sorcerer', 'Paladin', 'Warlock'
  ];
  gen_data['god'] = [
'Auril: Neutral evil goddess of winter. Aurils symbol is a six:pointed snowflake.','Azuth: Lawful neutral god of wizards. Azuths symbol is a left hand pointing upward, outlined in fire.','Bane: Lawful evil god of tyranny. Banes symbol is a black right hand, thumb and fingers together.','Beshaba: Chaotic evil  goddess of misfortune. Beshabas symbol is a pair of black antlers.','Bhaal: Neutral evil god of murder. Bhaals symbol is a skull surrounded by a ring of blood droplets.','Chauntea: Neutral good goddess of agriculture. Chaunteas symbol is a sheaf of grain, or a blooming rose over grain.','Cyric: Chaotic evil god of lies. Cyrics symbol is a jaw:less white skull on a purple or black sunburst.','Deneir: Neutral good god of writing. Deneirs symbol is a lit candle above an open eye.','Eldath: Neutral good goddess of peace. Eldaths symbol is a waterfall plunging into a still pool.','Gond: True neutral god of craft. Gonds symbol is a cog with four spokes.','Helm: Lawful neutral god of protection. Helms symbol is a staring eye on an upright left gauntlet.','Ilmater: Lawful good god of endurance. Ilmaters symbol is two hands bound at the wrist by a red cord.','Kelemvor: Lawful neutral god of the dead. Kelemvors symbol is an upright skeletal arm holding balanced scales.','Lathander: Neutral good god of birth and renewal. Lathanders symbol is a road travelling into a sunrise.','Liera: Chaotic neutral goddess of illusion. Lieras symbol is a triangle, pointing down, containing a swirl of mist.','Lliira: Chaotic good goddess of joy. Lliiras symbol is a triangle of three six:pointed stars.','Loviatar: Lawful evil goddess of pain. Loviatars symbol is a nine:tailed barbed scourge.','Malar: Chaotic evil god of the hunt. Malars symbol is a clawed paw.','Mask: Chaotic neutral god of thieves. Masks symbol is a black mask.','Mielikki: Neutral good goddess of forests. Mielikkis symbol is a unicorn s head.','Myrkul: Neutral evil god of death. Myrkuls symbol is a white human skull.','Mystra: Neutral good goddess of magic. Mystras symbol is a circle of seven stars, or nine stars encircling a flowing red mist, or a single star.','Oghma: True neutral god of knowledge. Oghmas symbol is a blank scroll.','Savras: Lawful neutral god of divination and fate. Savras symbol is a crystal ball containing many kinds of eyes.','Selune: Chaotic good goddess of the moon. Selûnes symbol is a pair of eyes surrounded by seven stars.','Shar: Neutral evil goddess of darkness and loss. Shars symbol is a black disk encircled with a border.','Silvanus: True neutral god of wild nature. Silvanuses symbol is an oak leaf.','Sune: Chaotic good goddess of love and beauty. Sunes symbol is the face of a beautiful red:haired woman.','Talona: Chaotic evil goddess of disease and poison. Talonas symbol is three tear drops on a triangle.','Talos: Chaotic evil god of storms. Taloses  symbol is three lightning bolts radiating from a central point.','Tempus: True neutral god of war. Tempuses symbol is an upright flaming sword.','Torm: Lawful good god of courage and self:sacrifice. Torms symbol is a white right gauntlet.','Tymora: Chaotic good  goddess of good fortune and adventure. Tymoras symbol is a face:up coin.','Tyr: Lawful good god of justice. Tyrs symbol is a pair of balanced scales resting on a warhammer.','Umberlee: Chaotic evil goddess of the sea. Umberlees symbol is a wave curling left and right.','Waukeen: True neutral goddess of trade. Waukeens symbol is an upright coin with Waukeens profile facing left.',


  ];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -