// Woordkunst Data - 100 Nederlandse begrippen en stijlfiguren
// Geïnspireerd door onzetaal.nl

const woordkunstData = [
  // FORMELE WOORDEN (60 items)
  {
    id: 1,
    type: 'word',
    question: 'Wat betekent "impliceren"?',
    choices: [
      'Indirect suggereren of insluiten',
      'Expliciet en duidelijk vermelden',
      'Verwarring veroorzaken',
      'Ontkennen of tegenspreken'
    ],
    correct: 0,
    explanations: [
      '✓ Correct! "Impliceren" betekent iets indirect suggereren of insluiten zonder het expliciet te zeggen. Bijvoorbeeld: "Zijn toon impliceerde dat hij het niet eens was."',
      '✗ Dit is "expliceren" of "expliciteren" - het tegenovergestelde van impliceren. Bij expliciet maak je iets juist heel duidelijk.',
      '✗ Impliceren heeft niets met verwarring te maken. Het gaat om indirect suggereren, wat juist subtiel en doelbewust is.',
      '✗ Dit zou "weerleggen" of "ontkennen" zijn. Impliceren is het indirect laten doorschemeren van iets, niet het tegenspreken.'
    ]
  },
  {
    id: 2,
    type: 'word',
    question: 'Wat betekent "eclectisch"?',
    choices: [
      'Eenvoudig en simpel',
      'Samengesteld uit verschillende bronnen of stijlen',
      'Chaotisch en ongeorganiseerd',
      'Traditioneel en conservatief'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is juist het tegenovergestelde. Eclectisch betekent gevarieerd en uit meerdere bronnen, niet eenvoudig.',
      '✓ Juist! "Eclectisch" betekent samengesteld uit verschillende bronnen, stijlen of methoden. Een eclectische inrichting combineert bijvoorbeeld moderne en klassieke elementen.',
      '✗ Hoewel eclectisch veel verschillende elementen combineert, is het niet chaotisch. Het is een bewuste keuze om diverse stijlen te mengen.',
      '✗ Eclectisch is juist het tegenovergestelde - het combineert verschillende tradities en stijlen in plaats van één traditie te volgen.'
    ]
  },
  {
    id: 3,
    type: 'word',
    question: 'Wat betekent "pragmatisch"?',
    choices: [
      'Theoretisch en abstract denkend',
      'Praktisch ingesteld en gericht op wat werkt',
      'Emotioneel en gevoelig',
      'Principieel en idealistisch'
    ],
    correct: 1,
    explanations: [
      '✗ Pragmatisch is juist het tegenovergestelde van theoretisch. Het gaat om praktische toepasbaarheid, niet abstracte theorie.',
      '✓ Correct! "Pragmatisch" betekent praktisch ingesteld en gericht op wat in de praktijk werkt. Een pragmatische oplossing kiest voor effectiviteit boven idealen.',
      '✗ Pragmatisch verwijst naar praktische overweging, niet naar emoties. Het is juist rationeel en resultaatgericht.',
      '✗ Pragmatisch kan soms conflicteren met principieel denken. Het kiest voor wat werkt, niet per se voor wat ideaal is.'
    ]
  },
  {
    id: 4,
    type: 'word',
    question: 'Wat betekent "eloquent"?',
    choices: [
      'Stil en terughoudend in spraak',
      'Welsprekend en overtuigend kunnen spreken',
      'Onbegrijpelijk en vaag praten',
      'Luid en agressief spreken'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is het tegenovergestelde. Eloquent betekent juist heel welsprekend en vloeiend kunnen praten.',
      '✓ Juist! "Eloquent" betekent welsprekend, vloeiend en overtuigend kunnen spreken of schrijven. Een eloquente spreker boeit het publiek met mooie taal.',
      '✗ Eloquente spraak is juist heel duidelijk en helder. Vaagheid is het tegenovergestelde van eloquentie.',
      '✗ Eloquentie gaat om schoonheid en overtuigingskracht van taal, niet om volume of agressie.'
    ]
  },
  {
    id: 5,
    type: 'word',
    question: 'Wat betekent "rudimentair"?',
    choices: [
      'Geavanceerd en complex',
      'Eenvoudig en onvolledig ontwikkeld',
      'Perfect en volmaakt',
      'Modern en innovatief'
    ],
    correct: 1,
    explanations: [
      '✗ Rudimentair is juist het tegenovergestelde van geavanceerd. Het betekent basaal en onvolledig.',
      '✓ Correct! "Rudimentair" betekent eenvoudig, primitief of onvolledig ontwikkeld. Rudimentaire kennis is basiskennis, niet diepgaand.',
      '✗ Rudimentair betekent juist onvolmaakt en basaal. Het is het beginstadium, niet de voltooiing.',
      '✗ Rudimentair verwijst vaak naar iets ouds of basaals, niet naar moderne innovatie.'
    ]
  },
  {
    id: 6,
    type: 'word',
    question: 'Wat betekent "ambigue"?',
    choices: [
      'Helder en ondubbelzinnig',
      'Meerduidig en op verschillende manieren te interpreteren',
      'Foutief en incorrect',
      'Formeel en officieel'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "ondubbelzinnig" of "eenduidig" - het tegenovergestelde van ambigue.',
      '✓ Juist! "Ambigue" (of "ambigu") betekent meerduidig, dubbelzinnig, op verschillende manieren te interpreteren. Een ambigue uitspraak kan meerdere betekenissen hebben.',
      '✗ Ambigue betekent niet foutief, maar meerduidig. Het kan opzettelijk of onopzettelijk zijn.',
      '✗ Ambigue heeft niets met formaliteit te maken, maar met meerduidigheid van betekenis.'
    ]
  },
  {
    id: 7,
    type: 'word',
    question: 'Wat betekent "intrinsiek"?',
    choices: [
      'Van buitenaf opgelegd',
      'Inherent en van nature erbij horend',
      'Tijdelijk en voorbijgaand',
      'Oppervlakkig en onbelangrijk'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "extrinsiek" - het tegenovergestelde van intrinsiek. Intrinsiek komt van binnenuit.',
      '✓ Correct! "Intrinsiek" betekent inherent, wezenlijk, van nature erbij horend. Intrinsieke motivatie komt bijvoorbeeld van binnenuit, niet door externe beloningen.',
      '✗ Intrinsiek is juist blijvend en fundamenteel, niet tijdelijk. Het is een wezenlijk kenmerk.',
      '✗ Intrinsiek betekent wezenlijk en fundamenteel, niet oppervlakkig. Het gaat om de kern van iets.'
    ]
  },
  {
    id: 8,
    type: 'word',
    question: 'Wat betekent "tangentieel"?',
    choices: [
      'Centraal en kernachtig',
      'Zijdelings en slechts oppervlakkig gerelateerd',
      'Volledig ongerelateerd',
      'Heel diepgaand verbonden'
    ],
    correct: 1,
    explanations: [
      '✗ Tangentieel is juist het tegenovergestelde van centraal. Het raakt iets slechts zijdelings.',
      '✓ Juist! "Tangentieel" betekent zijdelings, rakelings, slechts oppervlakkig gerelateerd. Een tangentiële opmerking heeft maar weinig met het hoofdonderwerp te maken.',
      '✗ Tangentieel betekent wel gerelateerd, maar dan heel oppervlakkig. Het raakt het onderwerp, maar centraal staat het niet.',
      '✗ Tangentieel is juist oppervlakkig verbonden, niet diepgaand. Het gaat langs de rand van het onderwerp.'
    ]
  },
  {
    id: 9,
    type: 'word',
    question: 'Wat betekent "substantieel"?',
    choices: [
      'Onbelangrijk en klein',
      'Belangrijk in omvang of betekenis',
      'Abstract en theoretisch',
      'Tijdelijk en kortstondig'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is het tegenovergestelde. Substantieel betekent juist aanzienlijk en belangrijk.',
      '✓ Correct! "Substantieel" betekent belangrijk, aanzienlijk, wezenlijk in omvang of betekenis. Een substantiële bijdrage is een belangrijke en grote bijdrage.',
      '✗ Substantieel betekent juist concreet en wezenlijk, niet abstract. Het gaat om substantie, om echte inhoud.',
      '✗ Substantieel verwijst naar iets blijvends en belangrijks, niet naar iets tijdelijks.'
    ]
  },
  {
    id: 10,
    type: 'word',
    question: 'Wat betekent "coherent"?',
    choices: [
      'Verward en chaotisch',
      'Samenhangend en logisch opgebouwd',
      'Onvolledig en gefragmenteerd',
      'Simpel en eenvoudig'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "incoherent" - het tegenovergestelde. Coherent is juist logisch en samenhangend.',
      '✓ Juist! "Coherent" betekent samenhangend, logisch, consistent opgebouwd. Een coherent verhaal heeft duidelijke samenhang tussen alle delen.',
      '✗ Coherent betekent juist compleet en goed samenhangend, niet gefragmenteerd.',
      '✗ Coherentie gaat over samenhang en logica, niet over eenvoud. Iets kan complex zijn en toch coherent.'
    ]
  },

  // Continuing with more words...
  {
    id: 11,
    type: 'word',
    question: 'Wat betekent "proloog"?',
    choices: [
      'Het slot van een verhaal',
      'De inleiding of het voorwoord',
      'Het hoogtepunt van een verhaal',
      'Een bijverhaal'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is een "epiloog" - het tegenovergestelde van proloog. Proloog komt aan het begin.',
      '✓ Correct! Een "proloog" is de inleiding, het voorwoord van een boek of toneelstuk. Het schetst de context voor het eigenlijke verhaal begint.',
      '✗ Het hoogtepunt is de "climax". Een proloog komt juist aan het begin, voor het verhaal echt start.',
      '✗ Dit zou een "subplot" of "nevenverhaallijn" zijn. Een proloog is de opening van het hoofdverhaal.'
    ]
  },
  {
    id: 12,
    type: 'word',
    question: 'Wat betekent "efemeer"?',
    choices: [
      'Eeuwig en blijvend',
      'Kortstondig en voorbijgaand',
      'Zwaar en massief',
      'Helderziend en profetisch'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is juist het tegenovergestelde. Efemeer betekent kortstondig, niet eeuwig.',
      '✓ Juist! "Efemeer" betekent kortstondig, van voorbijgaande aard, niet blijvend. De roem van een virale video is efemeer.',
      '✗ Efemeer heeft niets met gewicht te maken, maar met tijdsduur. Het betekent vluchtig en kortstondig.',
      '✗ Dit heeft geen verband. Efemeer gaat over kortstondigheid, niet over het voorspellen van de toekomst.'
    ]
  },
  {
    id: 13,
    type: 'word',
    question: 'Wat betekent "paradigma"?',
    choices: [
      'Een klein detail',
      'Een denkmodel of patroon dat als norm geldt',
      'Een uitzondering op de regel',
      'Een willekeurige keuze'
    ],
    correct: 1,
    explanations: [
      '✗ Een paradigma is juist een groot, overkoepelend concept, geen klein detail.',
      '✓ Correct! Een "paradigma" is een denkmodel, voorbeeld of patroon dat als norm of kader dient. Een paradigmaverschuiving is een fundamentele verandering in denken.',
      '✗ Een paradigma is juist de regel, het heersende model, niet de uitzondering daarop.',
      '✗ Een paradigma is een bewust gekozen of ontstaan denkmodel, geen willekeur.'
    ]
  },
  {
    id: 14,
    type: 'word',
    question: 'Wat betekent "deduceren"?',
    choices: [
      'Gokken zonder bewijs',
      'Afleiden door logisch redeneren',
      'Verwarren en misleiden',
      'Veronderstellen zonder grond'
    ],
    correct: 1,
    explanations: [
      '✗ Deduceren is het tegenovergestelde van gissen. Het is gebaseerd op logica en bewijs.',
      '✓ Juist! "Deduceren" betekent afleiden, concluderen door logisch redeneren vanuit feiten of premissen. Uit de sporen kun je deduceren dat hier iemand gelopen heeft.',
      '✗ Deduceren is juist helder en logisch, niet verwarrend. Het gaat om het trekken van logische conclusies.',
      '✗ Bij deduceren zijn er wel gronden - logische stappen en bewijs. Het is rationeel afleiden.'
    ]
  },
  {
    id: 15,
    type: 'word',
    question: 'Wat betekent "redundant"?',
    choices: [
      'Essentieel en noodzakelijk',
      'Overbodig en meer dan nodig',
      'Ontbrekend en incompleet',
      'Complex en ingewikkeld'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is het tegenovergestelde. Redundant betekent juist niet nodig, overbodig.',
      '✓ Correct! "Redundant" betekent overbodig, meer dan nodig, niet noodzakelijk. Die opmerking was volledig redundant - hij voegde niets toe.',
      '✗ Redundant betekent juist te veel aanwezig, niet ontbrekend. Het is een overschot, geen tekort.',
      '✗ Redundantie gaat over hoeveelheid (te veel), niet over complexiteit.'
    ]
  },
  {
    id: 16,
    type: 'word',
    question: 'Wat betekent "discrepantie"?',
    choices: [
      'Overeenkomst en harmonie',
      'Verschil of tegenstrijdigheid',
      'Eensgezindheid',
      'Samenwerking'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is juist het tegenovergestelde. Discrepantie duidt op verschil, niet op overeenstemming.',
      '✓ Juist! "Discrepantie" betekent verschil, tegenstrijdigheid, gebrek aan overeenstemming. Er is een discrepantie tussen theorie en praktijk.',
      '✗ Eensgezindheid is het tegenovergestelde van discrepantie. Discrepantie wijst op verschil van mening of feit.',
      '✗ Discrepantie duidt op een verschil of kloof, niet op samenwerking.'
    ]
  },
  {
    id: 17,
    type: 'word',
    question: 'Wat betekent "exponentieel"?',
    choices: [
      'Lineair en gelijkmatig',
      'In snel toenemende mate groeiend',
      'Afnemend en krimpend',
      'Stabiel en constant'
    ],
    correct: 1,
    explanations: [
      '✗ Exponentiële groei is juist niet lineair, maar versneld. Het groeit steeds sneller.',
      '✓ Correct! "Exponentieel" betekent in snel toenemende mate, met steeds grotere snelheid groeiend. Exponentiële groei versnelt steeds meer.',
      '✗ Exponentieel verwijst naar groei, niet krimp. Al kan er ook exponentiële afname zijn, dat is niet de standaard betekenis.',
      '✗ Exponentiële groei is juist het tegenovergestelde van stabiel - het verandert steeds sneller.'
    ]
  },
  {
    id: 18,
    type: 'word',
    question: 'Wat betekent "imminent"?',
    choices: [
      'Ver in de toekomst',
      'Dreigend en op het punt van gebeuren',
      'Al gebeurd in het verleden',
      'Onwaarschijnlijk'
    ],
    correct: 1,
    explanations: [
      '✗ Imminent betekent juist heel dichtbij, niet ver weg. Het staat op het punt te gebeuren.',
      '✓ Juist! "Imminent" betekent dreigend, op het punt staand te gebeuren, aanstaand. Een imminente crisis staat op uitbreken.',
      '✗ Imminent verwijst naar de nabije toekomst, niet naar het verleden.',
      '✗ Als iets imminent is, is het juist heel waarschijnlijk en nabij, niet onwaarschijnlijk.'
    ]
  },
  {
    id: 19,
    type: 'word',
    question: 'Wat betekent "notoir"?',
    choices: [
      'Onbekend en obscuur',
      'Algemeen bekend (vaak negatief)',
      'Geheim en verborgen',
      'Positief en bewonderenswaardig'
    ],
    correct: 1,
    explanations: [
      '✗ Notoir betekent juist heel bekend, niet onbekend. Het is berucht.',
      '✓ Correct! "Notoir" betekent algemeen bekend, berucht (vaak in negatieve zin). Een notoire leugenaar is overal bekend om zijn leugens.',
      '✗ Notoir is juist openlijk bekend, niet geheim. Het is een publiek gegeven.',
      '✗ Notoir heeft meestal een negatieve connotatie. Het is berucht, niet bewonderd.'
    ]
  },
  {
    id: 20,
    type: 'word',
    question: 'Wat betekent "obsoleet"?',
    choices: [
      'Modern en geavanceerd',
      'Verouderd en niet meer in gebruik',
      'Populair en trending',
      'Nieuw uitgevonden'
    ],
    correct: 1,
    explanations: [
      '✗ Obsoleet is het tegenovergestelde van modern - het is verouderd en achterhaald.',
      '✓ Juist! "Obsoleet" betekent verouderd, niet meer in gebruik, achterhaald. Deze technologie is obsoleet geworden.',
      '✗ Obsoleet betekent uit de mode, achterhaald, niet populair of trending.',
      '✗ Obsoleet verwijst naar oude, verouderde dingen, niet naar nieuwe uitvindingen.'
    ]
  },
  {
    id: 21,
    type: 'word',
    question: 'Wat betekent "paradoxaal"?',
    choices: [
      'Logisch en voor de hand liggend',
      'Schijnbaar tegenstrijdig maar toch waar',
      'Volkomen onwaar',
      'Simpel en eenvoudig'
    ],
    correct: 1,
    explanations: [
      '✗ Een paradox lijkt juist niet logisch op het eerste gezicht, al blijkt het dat vaak wel te zijn.',
      '✓ Correct! "Paradoxaal" betekent schijnbaar tegenstrijdig maar toch waar of mogelijk. "Minder is meer" is paradoxaal.',
      '✗ Een paradox is niet onwaar - het lijkt tegenstrijdig maar is vaak wel degelijk waar.',
      '✗ Een paradox is juist complex en schijnbaar tegenstrijdig, niet simpel.'
    ]
  },
  {
    id: 22,
    type: 'word',
    question: 'Wat betekent "provoceren"?',
    choices: [
      'Kalmeren en sussen',
      'Uitlokken of uitdagen',
      'Vermijden en ontwijken',
      'Bevestigen en instemmen'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is juist het tegenovergestelde. Provoceren wekt reacties op, kalmeert niet.',
      '✓ Juist! "Provoceren" betekent uitlokken, uitdagen, opzettelijk een reactie oproepen. Hij probeerde een ruzie te provoceren.',
      '✗ Provoceren is juist confronterend, niet vermijdend. Het zoekt actief de confrontatie.',
      '✗ Provoceren is uitdagen en tegenspreken, niet bevestigen of instemmen.'
    ]
  },
  {
    id: 23,
    type: 'word',
    question: 'Wat betekent "quintessentieel"?',
    choices: [
      'Onbelangrijk en bijkomstig',
      'De zuiverste en meest perfecte vorm',
      'Gemiddeld en alledaags',
      'Onvolledig en fragmentarisch'
    ],
    correct: 1,
    explanations: [
      '✗ Quintessentieel is juist het tegenovergestelde - het is de essentie, het belangrijkste.',
      '✓ Correct! "Quintessentieel" (of "quintessence") betekent de zuiverste, meest perfecte, meest typerende vorm. Het quintessentiële voorbeeld.',
      '✗ Quintessentieel betekent juist buitengewoon en de perfecte belichaming, niet gemiddeld.',
      '✗ Quintessentieel is de volmaakte essentie, compleet en zuiver, niet onvolledig.'
    ]
  },
  {
    id: 24,
    type: 'word',
    question: 'Wat betekent "reciprook"?',
    choices: [
      'Eenzijdig en односторонний',
      'Wederzijds en wederkerig',
      'Oneerlijk verdeeld',
      'Geheim en verborgen'
    ],
    correct: 1,
    explanations: [
      '✗ Reciprook betekent juist tweezijdig, niet eenzijdig. Het gaat beide kanten op.',
      '✓ Juist! "Reciprook" (of "reciproke") betekent wederzijds, wederkerig, elkaar beïnvloedend. Een reciproke relatie werkt twee kanten op.',
      '✗ Bij reciprociteit is er juist gelijkheid en balans, niet ongelijkheid.',
      '✗ Reciprook heeft niets met geheimhouding te maken, maar met wederkerigheid.'
    ]
  },
  {
    id: 25,
    type: 'word',
    question: 'Wat betekent "ubiquiteus"?',
    choices: [
      'Zeldzaam en schaars',
      'Alomtegenwoordig en overal aanwezig',
      'Verborgen en onzichtbaar',
      'Uniek en eenmalig'
    ],
    correct: 1,
    explanations: [
      '✗ Ubiquiteus is het tegenovergestelde van zeldzaam - het is juist overal te vinden.',
      '✓ Correct! "Ubiquiteus" betekent alomtegenwoordig, overal aanwezig. Smartphones zijn tegenwoordig ubiquiteus.',
      '✗ Ubiquiteus betekent juist zeer zichtbaar en overal aanwezig, niet verborgen.',
      '✗ Ubiquiteus betekent algemeen en overal, juist niet uniek of zeldzaam.'
    ]
  },
  {
    id: 26,
    type: 'word',
    question: 'Wat betekent "ambivalent"?',
    choices: [
      'Stellig en zeker',
      'Tegenstrijdige gevoelens hebbend',
      'Onverschillig en niet geïnteresseerd',
      'Eenduidig en helder'
    ],
    correct: 1,
    explanations: [
      '✗ Ambivalent is juist niet stellig - het betekent twijfelend met gemengde gevoelens.',
      '✓ Juist! "Ambivalent" betekent tegenstrijdige gevoelens hebbend, twijfelend tussen twee opties. Ik ben ambivalent over deze keuze.',
      '✗ Ambivalentie betekent juist wel gevoelens hebben (zelfs twee tegelijk), niet onverschilligheid.',
      '✗ Ambivalent is juist meerduidig en verdeeld, niet eenduidig.'
    ]
  },
  {
    id: 27,
    type: 'word',
    question: 'Wat betekent "catharsis"?',
    choices: [
      'Opbouw van spanning',
      'Emotionele reiniging of bevrijding',
      'Verwarring en chaos',
      'Onderdrukking van emoties'
    ],
    correct: 1,
    explanations: [
      '✗ Catharsis is juist het loslaten van spanning, niet het opbouwen ervan.',
      '✓ Correct! "Catharsis" betekent emotionele reiniging, loutering, bevrijding. Een verhaal kan catharsis bieden voor de toeschouwer.',
      '✗ Catharsis is juist klaring en bevrijding, niet verwarring.',
      '✗ Catharsis is het uiten en loslaten van emoties, niet het onderdrukken ervan.'
    ]
  },
  {
    id: 28,
    type: 'word',
    question: 'Wat betekent "dichotomie"?',
    choices: [
      'Verbinding en eenheid',
      'Tweedeling en strikte scheiding',
      'Veelvoud en diversiteit',
      'Geleidelijke overgang'
    ],
    correct: 1,
    explanations: [
      '✗ Dichotomie betekent juist scheiding, niet verbinding. Het benadrukt het verschil.',
      '✓ Juist! "Dichotomie" betekent tweedeling, strikte scheiding in twee (vaak tegengestelde) delen. De dichotomie tussen goed en kwaad.',
      '✗ Dichotomie is specifiek een tweedeling, niet veelvoud. Het splitst in twee categorieën.',
      '✗ Dichotomie impliceert juist een scherpe scheiding, geen geleidelijke overgang.'
    ]
  },
  {
    id: 29,
    type: 'word',
    question: 'Wat betekent "faciliteren"?',
    choices: [
      'Belemmeren en tegenhouden',
      'Vergemakkelijken en mogelijk maken',
      'Compliceren en bemoeilijken',
      'Negeren en vermijden'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is het tegenovergestelde. Faciliteren betekent juist helpen, niet hinderen.',
      '✓ Correct! "Faciliteren" betekent vergemakkelijken, mogelijk maken, bevorderen. De organisatie faciliteert het leerproces.',
      '✗ Faciliteren is juist versimpelen en helpen, niet compliceren.',
      '✗ Faciliteren betekent actief helpen en mogelijk maken, niet negeren.'
    ]
  },
  {
    id: 30,
    type: 'word',
    question: 'Wat betekent "generen"?',
    choices: [
      'Vernietigen en afbreken',
      'Opwekken of voortbrengen',
      'Verbergen en verhullen',
      'Kopiëren en imiteren'
    ],
    correct: 1,
    explanations: [
      '✗ Generen is juist creëren en maken, niet vernietigen.',
      '✓ Juist! "Generen" betekent opwekken, voortbrengen, produceren. Deze methode genereert nieuwe ideeën.',
      '✗ Generen betekent produceren en zichtbaar maken, niet verbergen.',
      '✗ Generen is nieuw creëren en voortbrengen, niet kopiëren van bestaande dingen.'
    ]
  },
  // Continue with more words up to 60...
  {
    id: 31,
    type: 'word',
    question: 'Wat betekent "hypocriet"?',
    choices: [
      'Eerlijk en oprecht',
      'Schijnheilig, anders doen dan zeggen',
      'Beleefd en hoffelijk',
      'Kritisch en analytisch'
    ],
    correct: 1,
    explanations: [
      '✗ Hypocriet is juist onoprecht, niet eerlijk. Het is schijnheiligheid.',
      '✓ Correct! "Hypocriet" betekent schijnheilig, anders doen dan zeggen. Het is hypocriet om milieu te prediken maar zelf veel te vervuilen.',
      '✗ Hypocrisie heeft niets met beleefdheid te maken, maar met inconsistentie tussen woorden en daden.',
      '✗ Kritisch zijn is niet hetzelfde als hypocriet. Hypocrisie is specifiek schijnheiligheid.'
    ]
  },
  {
    id: 32,
    type: 'word',
    question: 'Wat betekent "indolent"?',
    choices: [
      'Energiek en actief',
      'Lui en traag, onverschillig',
      'Agressief en confronterend',
      'Nerveus en gespannen'
    ],
    correct: 1,
    explanations: [
      '✗ Indolent is het tegenovergestelde van energiek - het betekent lui en traag.',
      '✓ Juist! "Indolent" betekent lui, traag, onverschillig, apathisch. Zijn indolente houding frustreerde zijn collega\'s.',
      '✗ Indolentie is juist passief en terughoudend, niet agressief.',
      '✗ Indolent betekent juist ontspannen tot luiheid, niet nerveus.'
    ]
  },
  {
    id: 33,
    type: 'word',
    question: 'Wat betekent "latent"?',
    choices: [
      'Openlijk zichtbaar',
      'Aanwezig maar nog niet zichtbaar, sluimerend',
      'Afwezig en niet aanwezig',
      'Actief en werkzaam'
    ],
    correct: 1,
    explanations: [
      '✗ Latent betekent juist verborgen, niet openlijk zichtbaar. Het is nog niet geactiveerd.',
      '✓ Correct! "Latent" betekent aanwezig maar nog niet zichtbaar, sluimerend, verborgen. Een latent talent kan nog tot ontwikkeling komen.',
      '✗ Latent betekent wel aanwezig, maar verborgen. Het is er, maar nog niet geactiveerd.',
      '✗ Latent is juist nog niet actief, maar wel aanwezig. Het moet nog geactiveerd worden.'
    ]
  },
  {
    id: 34,
    type: 'word',
    question: 'Wat betekent "mediëren"?',
    choices: [
      'Conflict verergeren',
      'Bemiddelen in een conflict',
      'Partij kiezen',
      'Conflict negeren'
    ],
    correct: 1,
    explanations: [
      '✗ Mediëren is juist oplossen van conflict, niet verergeren.',
      '✓ Juist! "Mediëren" betekent bemiddelen, als neutrale partij helpen een conflict op te lossen. Een mediator bemiddelt tussen partijen.',
      '✗ Mediëren vereist juist neutraliteit, niet het kiezen van een kant.',
      '✗ Mediëren is actief ingrijpen en helpen oplossen, niet negeren.'
    ]
  },
  {
    id: 35,
    type: 'word',
    question: 'Wat betekent "nuanceren"?',
    choices: [
      'Versimpelen en generaliseren',
      'Verfijnen door kleine verschillen toe te voegen',
      'Overdrijven en uitvergroten',
      'Verwarren en onduidelijk maken'
    ],
    correct: 1,
    explanations: [
      '✗ Nuanceren is het tegenovergestelde - het voegt juist details en verfijning toe.',
      '✓ Correct! "Nuanceren" betekent verfijnen, kleine verschillen aangeven, kleur en detail toevoegen. Het is belangrijk je mening te nuanceren.',
      '✗ Nuanceren is genuanceerd zijn, met aandacht voor details. Niet overdrijven.',
      '✗ Nuanceren maakt juist helderder door details, niet onduidelijker.'
    ]
  },
  {
    id: 36,
    type: 'word',
    question: 'Wat betekent "oscilleren"?',
    choices: [
      'Stilstaan op één plek',
      'Schommelen, heen en weer bewegen',
      'Vooruitgaan in één richting',
      'Totaal omdraaien'
    ],
    correct: 1,
    explanations: [
      '✗ Oscilleren is juist bewegen, niet stilstaan. Het schommelt tussen twee posities.',
      '✓ Juist! "Oscilleren" betekent schommelen, heen en weer bewegen tussen twee posities of meningen. De beslissing oscilleert tussen ja en nee.',
      '✗ Oscilleren is juist heen en weer gaan, niet één richting uitgaan.',
      '✗ Oscilleren is schommelen tussen twee polen, niet volledig omdraaien naar één kant.'
    ]
  },
  {
    id: 37,
    type: 'word',
    question: 'Wat betekent "stringent"?',
    choices: [
      'Flexibel en soepel',
      'Strikt, nauwkeurig en dwingend',
      'Vaag en onduidelijk',
      'Vriendelijk en toegeeflijk'
    ],
    correct: 1,
    explanations: [
      '✗ Stringent is het tegenovergestelde van flexibel - het is juist strikt en strak.',
      '✓ Correct! "Stringent" betekent strikt, nauwkeurig, precies, dwingend. Stringente regels laten geen ruimte voor interpretatie.',
      '✗ Stringent betekent juist heel duidelijk en precies, niet vaag.',
      '✗ Stringente regels zijn streng en onbuigzaam, niet toegeeflijk.'
    ]
  },
  {
    id: 38,
    type: 'word',
    question: 'Wat betekent "taciet"?',
    choices: [
      'Luidruchtig en openlijk',
      'Stilzwijgend, zonder uitgesproken te worden',
      'Geschreven en gedocumenteerd',
      'Verboden en niet toegestaan'
    ],
    correct: 1,
    explanations: [
      '✗ Taciet is juist het tegenovergestelde - stil en onuitgesproken, niet luidruchtig.',
      '✓ Juist! "Taciet" betekent stilzwijgend, impliciet, zonder dat het uitgesproken wordt. Een taciete afspraak is nooit expliciet gemaakt.',
      '✗ Taciet betekent onuitgesproken en niet geschreven, juist niet gedocumenteerd.',
      '✗ Taciet heeft geen juridische betekenis van verbod, maar betekent onuitgesproken.'
    ]
  },
  {
    id: 39,
    type: 'word',
    question: 'Wat betekent "unanimiteit"?',
    choices: [
      'Verdeeldheid en onenigheid',
      'Volledige overeenstemming',
      'Meerderheid van stemmen',
      'Onverschilligheid'
    ],
    correct: 1,
    explanations: [
      '✗ Unanimiteit is het tegenovergestelde - volledige eenheid, geen verdeeldheid.',
      '✓ Correct! "Unanimiteit" betekent volledige overeenstemming, eensgezindheid, iedereen is het eens. De beslissing werd met unanimiteit genomen.',
      '✗ Unanimiteit is meer dan meerderheid - het is 100% overeenstemming, iedereen zonder uitzondering.',
      '✗ Unanimiteit betekent juist betrokkenheid en overeenstemming, niet onverschilligheid.'
    ]
  },
  {
    id: 40,
    type: 'word',
    question: 'Wat betekent "volatile"?',
    choices: [
      'Stabiel en constant',
      'Wisselvallig en snel veranderend',
      'Voorspelbaar en regelmatig',
      'Permanent en blijvend'
    ],
    correct: 1,
    explanations: [
      '✗ Volatile is het tegenovergestelde van stabiel - het is juist onvoorspelbaar veranderlijk.',
      '✓ Juist! "Volatile" (of "volatiel") betekent wisselvallig, snel veranderend, onbestendig. De markt is zeer volatiel.',
      '✗ Volatile betekent juist onvoorspelbaar en grillig, niet regelmatig.',
      '✗ Volatile is voortdurend veranderend, niet permanent of blijvend.'
    ]
  },

  // Now adding STIJLFIGUREN (40 items starting from id 61)
  {
    id: 61,
    type: 'figure',
    question: 'Wat is een "metafoor"?',
    choices: [
      'Een expliciete vergelijking met "als" of "zoals"',
      'Een verborgen vergelijking zonder "als" of "zoals"',
      'Een overdrijving voor effect',
      'Een herhaling van beginletters'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is een "vergelijking" of "simile". Een metafoor gebruikt geen "als" of "zoals".',
      '✓ Correct! Een metafoor is een verborgen vergelijking zonder "als" of "zoals". Bijvoorbeeld: "Tijd is geld" of "Hij is een rots in de branding".',
      '✗ Dit is een "hyperbool". Een metafoor is een vergelijking, geen overdrijving.',
      '✗ Dit is "alliteratie". Een metafoor is een vergelijking, geen klankfiguur.'
    ]
  },
  {
    id: 62,
    type: 'figure',
    question: 'Wat is "personificatie"?',
    choices: [
      'Een vergelijking tussen twee mensen',
      'Het geven van menselijke eigenschappen aan niet-mensen',
      'Het beschrijven van iemands persoonlijkheid',
      'Het nabootsen van geluid'
    ],
    correct: 1,
    explanations: [
      '✗ Personificatie gaat niet specifiek over mensen vergelijken, maar over menselijke eigenschappen geven aan dingen.',
      '✓ Juist! Personificatie is het geven van menselijke eigenschappen aan niet-menselijke dingen. Bijvoorbeeld: "De wind fluistert door de bomen".',
      '✗ Dit is gewoon beschrijving. Personificatie geeft specifiek menselijke kenmerken aan niet-menselijke dingen.',
      '✗ Dit is "onomatopee". Personificatie gaat over menselijke eigenschappen, niet over geluid.'
    ]
  },
  {
    id: 63,
    type: 'figure',
    question: 'Wat is een "hyperbool"?',
    choices: [
      'Een understatement',
      'Een overdrijving om nadruk te leggen',
      'Een tegenstrijdige uitspraak',
      'Een herhaling aan het begin'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is een "litotes" of understatement. Hyperbool is juist het tegenovergestelde - overdrijven.',
      '✓ Correct! Een hyperbool is een overdrijving voor effect. Bijvoorbeeld: "Ik heb je duizend keer gezegd..." of "Ik sterf van de honger".',
      '✗ Dit is een "paradox" of "oxymoron". Hyperbool is overdrijving, niet tegenstrijdigheid.',
      '✗ Dit is een "anafoor". Hyperbool is een overdrijving, geen herhalingsfiguur.'
    ]
  },
  {
    id: 64,
    type: 'figure',
    question: 'Wat is "ironie"?',
    choices: [
      'Iets letterlijk bedoelen',
      'Het tegenovergestelde bedoelen van wat je zegt',
      'Een vraag zonder antwoord',
      'Een diepe waarheid'
    ],
    correct: 1,
    explanations: [
      '✗ Ironie betekent juist NIET letterlijk bedoelen wat je zegt, maar het tegenovergestelde.',
      '✓ Juist! Ironie is het tegenovergestelde bedoelen van wat je zegt. Bijvoorbeeld: "Wat een prachtig weer!" (terwijl het stortregent).',
      '✗ Dit is een "retorische vraag". Ironie is het tegenovergestelde bedoelen.',
      '✗ Dit zou een "paradox" kunnen zijn. Ironie is specifiek het tegenovergestelde bedoelen.'
    ]
  },
  {
    id: 65,
    type: 'figure',
    question: 'Wat is "alliteratie"?',
    choices: [
      'Herhaling van klinkers',
      'Herhaling van beginmedeklinkers',
      'Herhaling van hele woorden',
      'Herhaling aan het einde van zinnen'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "assonantie". Alliteratie herhaalt medeklinkers, niet klinkers.',
      '✓ Correct! Alliteratie is herhaling van beginmedeklinkers. Bijvoorbeeld: "De kat krabt de krullen van de trap".',
      '✗ Dit is gewoon "herhaling" of "repetitie". Alliteratie is specifiek over beginletters.',
      '✗ Dit is "epistrofe". Alliteratie gaat over beginletters, niet eindwoorden.'
    ]
  },
  {
    id: 66,
    type: 'figure',
    question: 'Wat is een "eufemisme"?',
    choices: [
      'Een grove en directe uitdrukking',
      'Een verzachtende of verhullende uitdrukking',
      'Een letterlijke beschrijving',
      'Een overdreven compliment'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is het tegenovergestelde. Een eufemisme verzacht juist, is niet grof.',
      '✓ Juist! Een eufemisme is een verzachtende uitdrukking voor iets onaangenaams. Bijvoorbeeld: "Hij is van ons heengegaan" (= overleden).',
      '✗ Een eufemisme verhult of verzacht juist, is niet letterlijk en direct.',
      '✗ Een eufemisme verzacht onprettige zaken, het is geen compliment.'
    ]
  },
  {
    id: 67,
    type: 'figure',
    question: 'Wat is een "anafoor"?',
    choices: [
      'Herhaling aan het einde van zinnen',
      'Herhaling aan het begin van opeenvolgende zinnen',
      'Eenmalige vermelding',
      'Variatie in woordkeuze'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "epistrofe". Anafoor herhaalt aan het BEGIN, niet aan het einde.',
      '✓ Correct! Anafoor is herhaling van woord(en) aan het begin van opeenvolgende zinnen. Bijvoorbeeld: "Nooit meer oorlog. Nooit meer geweld."',
      '✗ Anafoor is juist herhaling, niet eenmalige vermelding.',
      '✗ Anafoor is juist herhaling van hetzelfde woord, geen variatie.'
    ]
  },
  {
    id: 68,
    type: 'figure',
    question: 'Wat is een "allegorie"?',
    choices: [
      'Een korte anekdote',
      'Een doorlopende metafoor met verborgen betekenis',
      'Een eenvoudig verhaal',
      'Een historisch feit'
    ],
    correct: 1,
    explanations: [
      '✗ Een anekdote is een kort verhaal. Allegorie is een doorlopend verhaal met symbolische betekenis.',
      '✓ Juist! Allegorie is een doorlopende metafoor; een verhaal met diepere, symbolische betekenis. Bijvoorbeeld: Animal Farm van Orwell over politiek.',
      '✗ Een allegorie heeft juist meerdere lagen en verborgen betekenis, is niet eenvoudig.',
      '✗ Allegorie is fictie met symbolische betekenis, niet een historisch feit.'
    ]
  },
  {
    id: 69,
    type: 'figure',
    question: 'Wat is een "paradox"?',
    choices: [
      'Een voor de hand liggende waarheid',
      'Een schijnbaar tegenstrijdige uitspraak die toch waar is',
      'Een complete leugen',
      'Een simpele vergelijking'
    ],
    correct: 1,
    explanations: [
      '✗ Een paradox is juist NIET voor de hand liggend, maar schijnbaar tegenstrijdig.',
      '✓ Correct! Een paradox is een schijnbare tegenstrijdigheid die toch waar kan zijn. Bijvoorbeeld: "Minder is meer".',
      '✗ Een paradox is niet onwaar - het lijkt tegenstrijdig maar bevat vaak wel waarheid.',
      '✗ Een paradox is complexer dan een vergelijking - het bevat schijnbare tegenstrijdigheid.'
    ]
  },
  {
    id: 70,
    type: 'figure',
    question: 'Wat is "litotes"?',
    choices: [
      'Een grote overdrijving',
      'Bevestigen door het tegenovergestelde te ontkennen',
      'Een directe bevestiging',
      'Een vraag stellen'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "hyperbool". Litotes is juist understatement, niet overdrijving.',
      '✓ Juist! Litotes is bevestigen door het tegenovergestelde te ontkennen (understatement). Bijvoorbeeld: "Dat is niet onverstandig" (= verstandig).',
      '✗ Litotes is juist indirect via ontkenning, niet direct bevestigend.',
      '✗ Litotes is een uitspraak, geen vraag.'
    ]
  },
  {
    id: 71,
    type: 'figure',
    question: 'Wat is "assonantie"?',
    choices: [
      'Herhaling van medeklinkers',
      'Herhaling van klinkers',
      'Herhaling van hele zinnen',
      'Geen enkele herhaling'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "alliteratie". Assonantie herhaalt klinkers (a, e, i, o, u), niet medeklinkers.',
      '✓ Correct! Assonantie is herhaling van klinkers voor muzikaal effect. Bijvoorbeeld: "De regen plensde neer" (e-e-e).',
      '✗ Assonantie gaat over klankh herhaling (klinkers), niet over hele zinnen.',
      '✗ Assonantie is juist een vorm van herhaling, specifiek van klinkers.'
    ]
  },
  {
    id: 72,
    type: 'figure',
    question: 'Wat is "antithese"?',
    choices: [
      'Overeenkomst tussen begrippen',
      'Tegenstelling tussen twee begrippen',
      'Herhaling van hetzelfde',
      'Een vraag zonder antwoord'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is vergelijking of parallel. Antithese benadrukt juist het VERSCHIL, niet de overeenkomst.',
      '✓ Juist! Antithese is een tegenstelling tussen twee begrippen. Bijvoorbeeld: "Groot versus klein, rijk versus arm".',
      '✗ Antithese stelt dingen tegenover elkaar, herhaalt niet hetzelfde.',
      '✗ Dit is een "retorische vraag". Antithese is een tegenstelling.'
    ]
  },
  {
    id: 73,
    type: 'figure',
    question: 'Wat is een "retorische vraag"?',
    choices: [
      'Een vraag die direct beantwoord wordt',
      'Een vraag waarop geen antwoord verwacht wordt',
      'Een complexe wetenschappelijke vraag',
      'Een vraag aan jezelf'
    ],
    correct: 1,
    explanations: [
      '✗ Bij een retorische vraag wordt juist GEEN antwoord verwacht of gegeven.',
      '✓ Correct! Een retorische vraag is een vraag waarop geen antwoord verwacht wordt omdat het antwoord voor de hand ligt. Bijvoorbeeld: "Wie wil er nu niet gelukkig zijn?"',
      '✗ Een retorische vraag kan simpel zijn. Het gaat erom dat het antwoord voor de hand ligt.',
      '✗ Een retorische vraag is gericht aan de toehoorder, niet per se aan jezelf.'
    ]
  },
  {
    id: 74,
    type: 'figure',
    question: 'Wat is een "oxymoron"?',
    choices: [
      'Twee woorden die elkaar versterken',
      'Twee tegenstrijdige woorden gecombineerd',
      'Twee synoniemen',
      'Een lange woordencombinatie'
    ],
    correct: 1,
    explanations: [
      '✗ Bij een oxymoron spreken de woorden elkaar juist TEGEN, ze versterken elkaar niet.',
      '✓ Juist! Een oxymoron combineert twee tegenstrijdige woorden. Bijvoorbeeld: "Oorverdovende stilte" of "Levend dood".',
      '✗ Synoniemen betekenen hetzelfde. Een oxymoron combineert juist tegenstellingen.',
      '✗ Een oxymoron is typisch kort (twee woorden), niet lang.'
    ]
  },
  {
    id: 75,
    type: 'figure',
    question: 'Wat is "metonymie"?',
    choices: [
      'Iets bij de correcte naam noemen',
      'Iets noemen naar iets dat er nauw mee verbonden is',
      'Iets een fantasienaam geven',
      'Iets helemaal niet benoemen'
    ],
    correct: 1,
    explanations: [
      '✗ Metonymie gebruikt juist NIET de directe naam, maar een gerelateerd begrip.',
      '✓ Correct! Metonymie is iets vervangen door iets dat er nauw mee verbonden is. Bijvoorbeeld: "Het Witte Huis besloot..." (= de Amerikaanse president).',
      '✗ Bij metonymie is er wel een logische verbinding, niet zomaar een fantasienaam.',
      '✗ Bij metonymie wordt iets wel benoemd, maar via een gerelateerd begrip.'
    ]
  },
  {
    id: 76,
    type: 'figure',
    question: 'Wat is "synecdoche"?',
    choices: [
      'Het geheel voor het geheel gebruiken',
      'Een deel voor het geheel of geheel voor deel gebruiken',
      'Twee aparte dingen tegelijk noemen',
      'Niets concreets noemen'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is gewoon normale taal. Synecdoche gebruikt juist een deel voor het geheel of omgekeerd.',
      '✓ Juist! Synecdoche is een deel voor het geheel gebruiken of omgekeerd. Bijvoorbeeld: "Alle handen aan dek" (handen = mensen).',
      '✗ Synecdoche gebruikt één term (deel of geheel) om het ander aan te duiden, niet twee aparte dingen.',
      '✗ Synecdoche is juist heel concreet - het benoemt een specifiek deel of geheel.'
    ]
  },
  {
    id: 77,
    type: 'figure',
    question: 'Wat is "chiasme"?',
    choices: [
      'Lineaire herhaling (A-B-A-B)',
      'Kruisgewijze herhaling (A-B-B-A)',
      'Geen enkele herhaling',
      'Willekeurige volgorde'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "parallelisme". Chiasme heeft een kruisstructuur, niet lineair.',
      '✓ Correct! Chiasme is kruisgewijze herhaling van zinsdelen (A-B-B-A). Bijvoorbeeld: "Je moet eten om te leven, niet leven om te eten".',
      '✗ Chiasme is juist een specifieke vorm van herhaling in kruisvorm.',
      '✗ Chiasme heeft een zeer specifieke structuur (kruisvorm), niet willekeurig.'
    ]
  },
  {
    id: 78,
    type: 'figure',
    question: 'Wat is "climax"?',
    choices: [
      'Een dalende reeks',
      'Een oplopende reeks naar een hoogtepunt',
      'Een gelijkblijvende reeks',
      'Een chaotische reeks'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "anticlimax". Climax bouwt juist OP, daalt niet.',
      '✓ Juist! Climax is een oplopende reeks naar een hoogtepunt. Bijvoorbeeld: "Goed, beter, best" of "Hij kwam, hij zag, hij overwon".',
      '✗ Bij climax is er juist opbouw en stijging, niet gelijkblijvend.',
      '✗ Climax heeft een duidelijke opwaartse structuur, is niet chaotisch.'
    ]
  },
  {
    id: 79,
    type: 'figure',
    question: 'Wat is "apostrofe"?',
    choices: [
      'Jezelf aanspreken',
      'Iets of iemand afwezigs direct aanspreken',
      'Een groep mensen toespreken',
      'Een scheldwoord gebruiken'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "soliloquy" of "monoloog". Apostrofe spreekt iets AFWEZIGS aan.',
      '✓ Correct! Apostrofe is het direct aanspreken van iets/iemand afwezigs of dood. Bijvoorbeeld: "O Nederland, land van mijn vaderen!"',
      '✗ Dit is gewoon toespraak. Apostrofe spreekt specifiek iets AFWEZIGS aan alsof het aanwezig is.',
      '✗ Apostrofe heeft niets met schelden te maken, maar met retorisch aanspreken.'
    ]
  },
  {
    id: 80,
    type: 'figure',
    question: 'Wat is "parallelisme"?',
    choices: [
      'Verschillende zinsstructuren door elkaar',
      'Herhaling van dezelfde zinsstructuur',
      'Eenmalige unieke zinsbouw',
      'Onvolledige zinnen'
    ],
    correct: 1,
    explanations: [
      '✗ Parallelisme gebruikt juist DEZELFDE structuur herhaaldelijk, niet verschillende.',
      '✓ Juist! Parallelisme is herhaling van zinsbouw voor ritme. Bijvoorbeeld: "Hij kwam, hij zag, hij overwon" (steeds: onderwerp-werkwoord-object).',
      '✗ Parallelisme is juist herhaling van structuur, niet eenmalig en uniek.',
      '✗ Bij parallelisme zijn de zinnen compleet, ze hebben alleen dezelfde structuur.'
    ]
  },
  {
    id: 81,
    type: 'figure',
    question: 'Wat is "enjambement"?',
    choices: [
      'Een zin die eindigt bij het regeleinde',
      'Een zin die doorloopt over het regeleinde heen',
      'Een zeer korte versregel',
      'Een gebroken woord'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is een normaal regeleinde. Enjambement loopt juist DOOR over de regel.',
      '✓ Correct! Enjambement is doorlopen van een zin over een versregel heen. De zin stopt niet bij het einde van de regel.',
      '✗ Enjambement gaat over zinnen die doorlopen, niet over lengte van regels.',
      '✗ Bij enjambement loopt de ZIN door, niet per se een enkel woord.'
    ]
  },
  {
    id: 82,
    type: 'figure',
    question: 'Wat is "onomatopee"?',
    choices: [
      'Een moeilijk woord',
      'Klanknabootsing',
      'Een vreemde naam',
      'Een technische term'
    ],
    correct: 1,
    explanations: [
      '✗ Onomatopee kan moeilijk zijn om te spellen, maar dat is niet de definitie.',
      '✓ Juist! Onomatopee is klanknabootsing - woorden die geluiden nabootsen. Bijvoorbeeld: "De bij zoemt", "boem", "krak", "tsjilp".',
      '✗ Onomatopee gaat over geluidnabootsing, niet over namen.',
      '✗ Onomatopee is een literaire term, maar het betekent specifiek klanknabootsing.'
    ]
  },
  {
    id: 83,
    type: 'figure',
    question: 'Wat is "ellips"?',
    choices: [
      'Alles volledig uitschrijven',
      'Weglating van woorden die uit context blijken',
      'Toevoegen van extra woorden',
      'Een geometrische vorm gebruiken'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is het tegenovergestelde. Ellips laat juist woorden WEG.',
      '✓ Correct! Ellips is weglating van woorden die uit de context duidelijk zijn. Bijvoorbeeld: "Hoe oud?" "Vijftien." (Hoe oud ben je?)',
      '✗ Ellips is weglaten, niet toevoegen van woorden.',
      '✗ In literatuur is ellips het weglaten van woorden, niet de geometrische vorm (hoewel dezelfde naam).'
    ]
  },
  {
    id: 84,
    type: 'figure',
    question: 'Wat is een "vergelijking" (simile)?',
    choices: [
      'Verborgen vergelijking zonder "als"/"zoals"',
      'Expliciete vergelijking met "als" of "zoals"',
      'Twee dingen die niets gemeen hebben',
      'Iets gelijkstellen aan zichzelf'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is een "metafoor". Een vergelijking gebruikt juist WEL "als" of "zoals".',
      '✓ Juist! Een vergelijking (simile) is een expliciete vergelijking met "als" of "zoals". Bijvoorbeeld: "Zo wit als sneeuw".',
      '✗ Bij een vergelijking is er juist WEL een overeenkomst, dat is het punt.',
      '✗ Een vergelijking vergelijkt twee VERSCHILLENDE dingen, niet iets met zichzelf.'
    ]
  },
  {
    id: 85,
    type: 'figure',
    question: 'Wat is "epistrofe"?',
    choices: [
      'Herhaling aan het begin van zinnen',
      'Herhaling aan het einde van opeenvolgende zinnen',
      'Geen enkele herhaling',
      'Herhaling in het midden'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "anafoor". Epistrofe herhaalt aan het EINDE, niet aan het begin.',
      '✓ Correct! Epistrofe is herhaling van woord(en) aan het einde van opeenvolgende zinnen. Bijvoorbeeld: "Dit moeten we doen. Dit willen we doen. Dit gaan we doen."',
      '✗ Epistrofe is juist een specifieke vorm van herhaling aan het einde.',
      '✗ Epistrofe herhaalt specifiek aan het EINDE, niet in het midden.'
    ]
  },
  {
    id: 86,
    type: 'figure',
    question: 'Wat is "archaïsme"?',
    choices: [
      'Gebruik van moderne slang',
      'Gebruik van verouderde woorden',
      'Gebruik van vreemde talen',
      'Gebruik van nieuwe woorden'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is het tegenovergestelde. Archaïsme gebruikt juist OUDE woorden, niet moderne.',
      '✓ Juist! Archaïsme is gebruik van verouderde woorden of uitdrukkingen. Bijvoorbeeld: "Alzo sprak hij" (= zo sprak hij).',
      '✗ Archaïsme gaat over verouderd Nederlands, niet per se over vreemde talen.',
      '✗ Dit is "neologisme". Archaïsme gebruikt juist oude, niet nieuwe woorden.'
    ]
  },
  {
    id: 87,
    type: 'figure',
    question: 'Wat is "zeugma"?',
    choices: [
      'Twee verschillende werkwoorden voor twee objecten',
      'Eén werkwoord dat op twee verschillende betekenissen slaat',
      'Geen werkwoord gebruiken',
      'Alleen zelfstandige naamwoorden'
    ],
    correct: 1,
    explanations: [
      '✗ Bij zeugma wordt juist ÉÉN werkwoord gebruikt voor beide, niet twee verschillende.',
      '✓ Correct! Zeugma is één werkwoord dat op twee verschillende betekenissen slaat. Bijvoorbeeld: "Hij verloor zijn sleutels en zijn geduld" (verloor = fysiek en figuurlijk).',
      '✗ Zeugma draait juist om het gebruik van één werkwoord, niet het weglaten ervan.',
      '✗ Zeugma is specifiek over werkwoordgebruik, niet over zelfstandige naamwoorden.'
    ]
  },
  {
    id: 88,
    type: 'figure',
    question: 'Wat is "anticlimax"?',
    choices: [
      'Opbouw naar een hoogtepunt',
      'Dalende reeks van belangrijk naar onbelangrijk',
      'Gelijkblijvende spanning',
      'Plotselinge climax'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "climax". Anticlimax is juist het tegenovergestelde - afbouw.',
      '✓ Juist! Anticlimax is een dalende reeks, van belangrijk naar onbelangrijk, vaak voor komisch effect. Bijvoorbeeld: "De keizer, de koning, de voetballer".',
      '✗ Bij anticlimax daalt de spanning of het belang, blijft niet gelijk.',
      '✗ Anticlimax is juist geleidelijke daling, geen plotselinge climax.'
    ]
  },
  {
    id: 89,
    type: 'figure',
    question: 'Wat is "pleonasme"?',
    choices: [
      'Weglaten van woorden',
      'Onnodige herhaling ter versterking',
      'Gebruik van synoniemen',
      'Korte bondige zinnen'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "ellips". Pleonasme voegt juist toe, laat niet weg.',
      '✓ Correct! Pleonasme is onnodige herhaling voor versterking. Bijvoorbeeld: "Hij zag het met eigen ogen" (eigen is overbodig maar versterkt).',
      '✗ Bij pleonasme wordt hetzelfde twee keer gezegd (overbodig), niet alleen synoniemen.',
      '✗ Pleonasme maakt zinnen juist langer door herhaling, niet korter.'
    ]
  },
  {
    id: 90,
    type: 'figure',
    question: 'Wat is "symboliek"?',
    choices: [
      'Letterlijke beschrijving',
      'Object dat voor iets anders staat',
      'Gebruik van cijfers',
      'Abstract denken'
    ],
    correct: 1,
    explanations: [
      '✗ Symboliek is juist NIET letterlijk, maar representeert iets anders.',
      '✓ Juist! Symboliek is wanneer een object voor iets anders staat, een diepere betekenis heeft. Bijvoorbeeld: een duif als symbool voor vrede.',
      '✗ Symboliek kan cijfers bevatten, maar het gaat om betekenisvolle objecten die iets representer representeren.',
      '✗ Symboliek gebruikt concrete objecten met abstracte betekenis, is niet alleen abstract denken.'
    ]
  },
  {
    id: 91,
    type: 'figure',
    question: 'Wat is "tautologie"?',
    choices: [
      'Tegenstrijdige uitspraak',
      'Herhaling van hetzelfde in andere woorden (overbodig)',
      'Logische redenering',
      'Kort en bondig'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is een "contradictie". Tautologie herhaalt juist hetzelfde, niet tegenstrijdig.',
      '✓ Correct! Tautologie is herhaling van hetzelfde in andere woorden (overbodig). Bijvoorbeeld: "Een oude grijsaard" (oud en grijsaard zeggen hetzelfde).',
      '✗ Tautologie is juist een logische fout (onnodige herhaling), niet correcte redenering.',
      '✗ Tautologie is juist omslachtig door herhaling, niet kort en bondig.'
    ]
  },
  {
    id: 92,
    type: 'figure',
    question: 'Wat is "anapodoton"?',
    choices: [
      'Voltooide zin',
      'Onvoltooide zin, bewust afgebroken',
      'Perfecte grammatica',
      'Lange zinnen'
    ],
    correct: 1,
    explanations: [
      '✗ Anapodoton is juist een ONVOLTOOIDE zin, niet voltooid.',
      '✓ Juist! Anapodoton is een bewust onvoltooide of afgebroken zin voor effect. Bijvoorbeeld: "Als ik jou was..." (de zin wordt niet afgemaakt).',
      '✗ Anapodoton breekt grammaticaal af, is dus niet perfect grammaticaal.',
      '✗ Anapodoton breekt af en is vaak juist kort door de onderbreking.'
    ]
  },
  {
    id: 93,
    type: 'figure',
    question: 'Wat is "epizeuxis"?',
    choices: [
      'Variatie in woordkeuze',
      'Directe herhaling van hetzelfde woord',
      'Nooit herhalen',
      'Synoniemen gebruiken'
    ],
    correct: 1,
    explanations: [
      '✗ Epizeuxis is juist het tegenovergestelde - directe herhaling zonder variatie.',
      '✓ Correct! Epizeuxis is directe herhaling van hetzelfde woord voor nadruk. Bijvoorbeeld: "Nooit, nooit, nooit zal ik dat doen!"',
      '✗ Epizeuxis IS herhaling, niet het vermijden ervan.',
      '✗ Epizeuxis herhaalt hetzelfde woord, gebruikt geen synoniemen.'
    ]
  },
  {
    id: 94,
    type: 'figure',
    question: 'Wat is "polysyndeton"?',
    choices: [
      'Weglaten van voegwoorden',
      'Overdadig gebruik van voegwoorden',
      'Geen voegwoorden gebruiken',
      'Eén voegwoord'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "asyndeton". Polysyndeton gebruikt juist VEEL voegwoorden.',
      '✓ Juist! Polysyndeton is overdadig gebruik van voegwoorden. Bijvoorbeeld: "Hij kwam en hij zag en hij overwon en hij vertrok".',
      '✗ Polysyndeton gebruikt juist voegwoorden in overdaad, laat ze niet weg.',
      '✗ Polysyndeton gebruikt juist MEERDERE voegwoorden achter elkaar.'
    ]
  },
  {
    id: 95,
    type: 'figure',
    question: 'Wat is "asyndeton"?',
    choices: [
      'Veel voegwoorden gebruiken',
      'Weglaten van voegwoorden',
      'Alleen voegwoorden',
      'Dubbele voegwoorden'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "polysyndeton". Asyndeton laat voegwoorden juist WEG.',
      '✓ Correct! Asyndeton is weglaten van voegwoorden voor snelheid. Bijvoorbeeld: "Ik kwam, ik zag, ik overwon" (zonder "en").',
      '✗ Asyndeton laat voegwoorden juist weg, gebruikt niet alleen maar die.',
      '✗ Asyndeton vermijdt voegwoorden, gebruikt ze niet dubbel.'
    ]
  },
  {
    id: 96,
    type: 'figure',
    question: 'Wat is "cacofonie"?',
    choices: [
      'Aangename klank',
      'Onaangename, harde klank',
      'Zachte fluistering',
      'Muzikaal ritme'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "eufonie". Cacofonie is juist ONAANGENAAM klinkend.',
      '✓ Juist! Cacofonie is onaangename, harde of schurende klank. Woorden die hard en wanklinkend zijn opzettelijk gebruikt.',
      '✗ Cacofonie is juist hard en grof klinkend, niet zacht.',
      '✗ Cacofonie klinkt wanklinkend en dissonant, niet muzikaal harmonious.'
    ]
  },
  {
    id: 97,
    type: 'figure',
    question: 'Wat is "eufonie"?',
    choices: [
      'Harde, schurende klanken',
      'Aangename, welluidende klanken',
      'Stilte en geen geluid',
      'Dissonante klanken'
    ],
    correct: 1,
    explanations: [
      '✗ Dit is "cacofonie". Eufonie is juist AANGENAAM klinkend.',
      '✓ Correct! Eufonie is aangename, welluidende klank. Woorden die mooi samen klinken voor een harmonious effect.',
      '✗ Eufonie gaat over mooie klanken, niet over de afwezigheid van geluid.',
      '✗ Eufonie is juist harmonieus en aangenaam, niet dissonant.'
    ]
  },
  {
    id: 98,
    type: 'figure',
    question: 'Wat is "inversie"?',
    choices: [
      'Normale woordvolgorde',
      'Omgekeerde woordvolgorde',
      'Alfabetische volgorde',
      'Willekeurige volgorde'
    ],
    correct: 1,
    explanations: [
      '✗ Inversie is juist NIET normaal, maar omgekeerd.',
      '✓ Juist! Inversie is omgekeerde woordvolgorde voor effect. Bijvoorbeeld: "Groot was zijn verdriet" (i.p.v. "Zijn verdriet was groot").',
      '✗ Inversie draait om grammaticale woordvolgorde, niet om alfabetische ordening.',
      '✗ Inversie is bewust omdraaien van normale volgorde, niet willekeurig.'
    ]
  },
  {
    id: 99,
    type: 'figure',
    question: 'Wat is "gradatie"?',
    choices: [
      'Plotselinge verandering',
      'Geleidelijke opbouw of afbouw',
      'Gelijkblijvende intensiteit',
      'Chaotische structuur'
    ],
    correct: 1,
    explanations: [
      '✗ Gradatie is juist geleidelijk, niet plotseling.',
      '✓ Correct! Gradatie is geleidelijke opbouw of afbouw in intensiteit. Bijvoorbeeld: "Hij fluisterde, sprak, riep".',
      '✗ Bij gradatie verandert de intensiteit geleidelijk, blijft niet gelijk.',
      '✗ Gradatie heeft een duidelijke structuur (opbouw/afbouw), niet chaotisch.'
    ]
  },
  {
    id: 100,
    type: 'figure',
    question: 'Wat is "anekdote"?',
    choices: [
      'Een wetenschappelijke verhandeling',
      'Een kort, vaak grappig verhaal ter illustratie',
      'Een lang episch gedicht',
      'Een formele toespraak'
    ],
    correct: 1,
    explanations: [
      '✗ Een anekdote is juist informeel en kort, geen wetenschappelijke verhandeling.',
      '✓ Juist! Een anekdote is een kort, vaak amusant verhaal dat een punt illustreert of een situatie verduidelijkt.',
      '✗ Een anekdote is juist KORT en in proza, geen lang gedicht.',
      '✗ Een anekdote is een informeel verhaaltje, geen formele speech.'
    ]
  }
];
