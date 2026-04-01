export interface Region {
  name: string;
  slug: string;
  distanceKm: number;
  /** Show in the visual region grid on the homepage (≤20 km). All regions still have SEO pages. */
  showOnSite?: boolean;
  /** Unique Dutch text about local housing stock, EPC issues, and context (min 150 words for showOnSite regions). */
  uniqueContent?: string;
  /** 3-4 quick facts about the municipality relevant to EPC. */
  highlights?: string[];
}

export const REGIONS: Region[] = [
  {
    name: "Tervuren",
    slug: "tervuren",
    distanceKm: 0,
    showOnSite: true,
    uniqueContent:
      "Tervuren is een residentiële gemeente aan de rand van het Zoniënwoud, bekend om zijn villawijken uit de jaren '50 tot '70 en de nabijheid van Europese instellingen. Het woningbestand bestaat grotendeels uit vrijstaande en halfopen bebouwingen met ruime tuinen, vaak gebouwd in een periode waarin isolatienormen nog niet bestonden. Veel van deze woningen hebben nog enkele beglazing of verouderde spouwmuurisolatie die thermische bruggen veroorzaakt. De aanwezigheid van een grote internationale gemeenschap — diplomaten en EU-medewerkers — zorgt voor een dynamische huurmarkt waar een goed EPC-label een doorslaggevend verkoopargument is. Recente renovatiegolven in wijken zoals De Rode Leeuw en Moorsel richten zich op dakisolatie en condensatieketels, maar veel eigenaars onderschatten de impact van ongeïsoleerde kelders en kruipruimtes. Tervuren valt onder het Vlaams Gewest, wat betekent dat het Vlaamse renovatiepremiestelsel van toepassing is — inclusief de EPC-labelpremie voor woningen die na renovatie minstens twee labelsprongen maken. Als thuisbasis van EPC Expert kennen wij elke wijk en elk bouwtype in Tervuren door en door.",
    highlights: [
      "Veel villawijken uit jaren '50-'70 met hoog renovatiepotentieel",
      "Internationale huurmarkt waar EPC-label kopers en huurders overtuigt",
      "Vlaamse renovatiepremie tot €5.000 bij minstens 2 labelsprongen",
      "Thuisbasis van EPC Expert — snelste service, geen verplaatsingskosten",
    ],
  },
  {
    name: "Sterrebeek",
    slug: "sterrebeek",
    distanceKm: 4,
    showOnSite: true,
    uniqueContent:
      "Sterrebeek, een deelgemeente van Zaventem, combineert een dorps karakter met de nabijheid van de luchthaven en de E40 richting Brussel. Het woningbestand is opvallend gevarieerd: naast naoorlogse rijwoningen langs de Mechelsesteenweg vindt men er ook recente verkavelingen met BEN-woningen (Bijna-EnergieNeutrale woningen) in wijken als Sterrebeek-Zuid. De oudere woningen uit de jaren '60 kampen vaak met gebrekkige dakisolatie en verouderde verwarmingsinstallaties op stookolie. Door de ligging onder de aanvliegroute van Brussels Airport is geluidsisolatie een bijkomende factor — dubbele of driedubbele beglazing is hier niet alleen energetisch maar ook akoestisch een must. Veel eigenaars hebben de voorbije jaren geïnvesteerd in zonnepanelen, maar vergeten daarbij de basisschil van hun woning aan te pakken. Een EPC-keuring brengt deze zwakke punten objectief in kaart. De gemeente Zaventem biedt via het Lokaal Energie- en Klimaatpact aanvullende begeleiding voor renovatietrajecten, bovenop de Vlaamse premies.",
    highlights: [
      "Mix van naoorlogse rijwoningen en recente BEN-verkavelingen",
      "Geluidsisolatie door luchthaven maakt driedubbele beglazing dubbel waardevol",
      "Veel stookolieketels nog in gebruik — grote EPC-winst bij vervanging",
      "Lokaal Energie- en Klimaatpact biedt extra renovatiebegeleiding",
    ],
  },
  {
    name: "Kraainem",
    slug: "kraainem",
    distanceKm: 5,
    showOnSite: true,
    uniqueContent:
      "Kraainem is een faciliteitengemeente op de grens met het Brussels Hoofdstedelijk Gewest, met een sterke mix van Nederlandstalige en Franstalige bewoners. De residentiële kern bestaat vooral uit halfopen en gesloten bebouwingen uit de jaren '60 en '70, gebouwd in een periode van snelle suburbanisatie rond Brussel. Typisch voor Kraainem zijn de karakteristieke bakstenen woningen met platte daken of lage hellingsgraden — daktypes die extra aandacht vragen bij isolatie wegens vochtgevoeligheid. Veel woningen hebben nog originele aluminium schrijnwerk zonder thermische onderbreking, wat leidt tot aanzienlijk warmteverlies. De nabijheid van metro Kraainem en het Woluwe Shopping Center maakt de gemeente bijzonder gewild bij jonge gezinnen en investeerders, waardoor een sterk EPC-label direct de waarde van het vastgoed beïnvloedt. Let op: als Vlaamse gemeente gelden hier de Vlaamse EPC-normen, niet de Brusselse — een belangrijk verschil voor eigenaars die vastgoed aan beide zijden van de gewestgrens bezitten.",
    highlights: [
      "Faciliteitengemeente met Vlaamse EPC-normen (niet Brussels!)",
      "Veel platte daken uit jaren '60 — vochtgevoelig bij na-isolatie",
      "Aluminium schrijnwerk zonder thermische onderbreking wijdverspreid",
      "Nabijheid metro Kraainem verhoogt impact van goed EPC-label op vastgoedwaarde",
    ],
  },
  {
    name: "Wezembeek-Oppem",
    slug: "wezembeek-oppem",
    distanceKm: 5,
    showOnSite: true,
    uniqueContent:
      "Wezembeek-Oppem is, net als buurgemeeente Kraainem, een faciliteitengemeente in de Vlaamse Rand rond Brussel. De gemeente telt relatief veel alleenstaande woningen op ruime percelen, gebouwd tussen 1955 en 1980. Deze woningen hebben typisch een groot dakoppervlak en uitgestrekte gevels — ideaal voor isolatieverbetering, maar ook kostelijk als het niet strategisch wordt aangepakt. Veel eigenaars in Wezembeek-Oppem zijn gepensioneerden die al decennia in hun woning wonen en nog nooit een grondige energierenovatie hebben uitgevoerd. De verwarmingsinstallaties draaien vaak nog op atmosferische gasketels van meer dan 25 jaar oud. Het EPC-attest maakt in zo'n situatie pijnlijk duidelijk waar de grootste energieverliezen zitten, maar biedt tegelijk een routekaart voor een gefaseerde aanpak. De gemeente participeert actief in het Burgemeestersconvenant en stimuleert inwoners via infosessies en groepsaankopen voor isolatiemateriaal. Woningen met label E of F zijn hier geen uitzondering — precies daar ligt het grootste renovatie- en waardepotentieel.",
    highlights: [
      "Veel vrijstaande woningen uit 1955-1980 met groot dakoppervlak",
      "Hoog aandeel gepensioneerde eigenaars — gefaseerde renovatie is de sleutel",
      "Gemeente actief in Burgemeestersconvenant met groepsaankopen isolatie",
      "Labels E en F komen frequent voor — groot waardepotentieel na renovatie",
    ],
  },
  {
    name: "Overijse",
    slug: "overijse",
    distanceKm: 7,
    showOnSite: true,
    uniqueContent:
      "Overijse, de druivengemeente in de groene Rand, combineert een landelijk karakter met een welvarende woningmarkt. De serrecultuur heeft het straatbeeld decennialang bepaald, en veel voormalige druivenserres zijn intussen omgebouwd tot residentiële projecten — met wisselend resultaat op energetisch vlak. Het klassieke woningbestand bestaat uit ruime fermettes en villa's op grote percelen, maar ook uit sociale woonwijken uit de jaren '70 in deelgemeenten als Jezus-Eik en Maleizen. Typische EPC-knelpunten in Overijse zijn ongeïsoleerde hellende daken met enkel onderdak, massieve muren zonder spouwmuurisolatie, en verouderde stookolieketels. De heuvelige topografie van de gemeente betekent dat veel woningen halfondergrondse kelders hebben die als leefruimte worden gebruikt — deze ruimtes worden bij een EPC-keuring meegeteld als beschermd volume, wat het label negatief beïnvloedt als ze niet geïsoleerd zijn. Het gemeentebestuur zet via het Lokaal Klimaatactieplan in op ontzorgingstrajecten voor eigenaars die hun woning stap voor stap willen verduurzamen.",
    highlights: [
      "Druivengemeente met veel omgebouwde serres — wisselende isolatiekwaliteit",
      "Halfondergrondse kelders als leefruimte beïnvloeden EPC-berekening",
      "Stookolieketels nog veel in gebruik in landelijker deelgemeenten",
      "Gemeentelijk ontzorgingstraject voor gefaseerde renovatie beschikbaar",
    ],
  },
  {
    name: "Nossegem",
    slug: "nossegem",
    distanceKm: 7,
    showOnSite: true,
    uniqueContent:
      "Nossegem is een deelgemeente van Zaventem, gelegen tussen de E40 en de luchthaven, met een compact dorpscentrum omringd door verkavelingen uit de jaren '70 en '80. Het woningbestand bestaat vooral uit gesloten en halfopen rijwoningen, een bouwtype dat in de EPC-methodiek relatief gunstig scoort door het gedeelde muuroppervlak met buren — mits de dak- en vloerisolatie in orde zijn. In de praktijk zien we in Nossegem echter veel woningen waar enkel de voorgevel is gerenoveerd (nieuwe ramen, crepi) terwijl het dak en de achtergevel onaangeroerd bleven. Dit leidt tot een vals gevoel van energie-efficiëntie dat het EPC-attest genadeloos blootlegt. De nabijheid van de luchthaven brengt, net als in Sterrebeek, geluidsoverlast met zich mee waardoor eigenaars die investeren in isolatie een dubbel voordeel behalen. Recente nieuwbouwappartementen langs de Leuvensesteenweg scoren doorgaans label A of B, maar het merendeel van de bestaande voorraad zit rond label D. Een professioneel EPC-attest is hier de eerste stap naar een doordacht renovatieplan.",
    highlights: [
      "Compact dorp met veel halfopen rijwoningen uit jaren '70-'80",
      "Gedeelde muren gunstig voor EPC, maar dak en achtergevel vaak vergeten",
      "Dubbelwinst bij isolatie: energiebesparing én geluidsreductie (luchthaven)",
      "Bestaande voorraad gemiddeld rond EPC-label D",
    ],
  },
  {
    name: "Hoeilaart",
    slug: "hoeilaart",
    distanceKm: 9,
    showOnSite: true,
    uniqueContent:
      "Hoeilaart, gelegen in het hart van het Zoniënwoud, is een gemeente met een uitgesproken groen en residentieel karakter. De historische druiventeelt heeft, net als in buurgemeeente Overijse, geleid tot een typisch bebouwingspatroon met lage, langgerekte woningen die oorspronkelijk verbonden waren met serres. Veel van deze woningen zijn intussen verbouwd, maar de originele structuur — lage plafonds, enkelvoudige muren, beperkte kruipruimtes — maakt energetische renovatie uitdagend. In de villawijken rond het Kapucijnenbos staan grotere woningen uit de jaren '60 die vaak nog originele houten raamkaders hebben, charmant maar energetisch problematisch. De ligging in een beschermd bosgebied brengt bijkomende beperkingen mee voor zonnepanelen en gevelisolatie aan de buitenzijde, waardoor binnenisolatie soms de enige optie is — met alle vochtrisico's van dien. Het EPC-attest houdt rekening met deze beperkingen en geeft een realistisch beeld van de energieprestatie. De gemeente Hoeilaart werkt samen met het Regionaal Energiehuis voor begeleiding bij renovatietrajecten.",
    highlights: [
      "Beschermd bosgebied beperkt mogelijkheden voor buitenisolatie en zonnepanelen",
      "Veel lage, langgerekte ex-druiventeeltwoningen met specifieke isolatie-uitdagingen",
      "Houten raamkaders in villawijken jaren '60 — charmant maar energetisch zwak",
      "Samenwerking met Regionaal Energiehuis voor renovatiebegeleiding",
    ],
  },
  {
    name: "Bertem",
    slug: "bertem",
    distanceKm: 10,
    showOnSite: true,
    uniqueContent:
      "Bertem is een landelijke gemeente tussen Leuven en Tervuren, verdeeld over de deelgemeenten Bertem, Leefdaal en Korbeek-Dijle. Het woningbestand is een interessante mix van historische hoevewoniningen, naoorlogse lintbebouwing langs de steenwegen, en recentere verkavelingen. De oudere hoeves en pastoriewoningen hebben massieve natuurstenen of bakstenen muren die weliswaar thermische massa bieden maar zonder isolatie toch slecht scoren op het EPC. Spouwmuurisolatie is bij deze massieve muren vaak technisch onmogelijk, waardoor buitengevelisolatie of binnenisolatie moet worden overwogen — elk met eigen voor- en nadelen. In de deelgemeente Leefdaal vinden we concentraties van woningen uit de jaren '80 met reeds een eerste generatie dubbele beglazing die intussen aan vervanging toe is. Bertem valt onder het werkingsgebied van Energiehuis Oost-Brabant, dat gratis energiescans en renovatieadvies aanbiedt als aanvulling op het EPC-attest. De relatief lage vastgoedprijzen vergeleken met Tervuren en Overijse maken Bertem aantrekkelijk voor kopers die bewust een woning met renovatiepotentieel zoeken.",
    highlights: [
      "Mix van historische hoeves, lintbebouwing en recente verkavelingen",
      "Massieve muren zonder spouw — buitenisolatie vaak enige optie",
      "Eerste generatie dubbel glas uit jaren '80 aan vervanging toe",
      "Gratis energiescan via Energiehuis Oost-Brabant als aanvulling op EPC",
    ],
  },
  {
    name: "Huldenberg",
    slug: "huldenberg",
    distanceKm: 10,
    showOnSite: true,
    uniqueContent:
      "Huldenberg, bekend van de Brabantse Pijl wielerwedstrijd, is een uitgestrekte landelijke gemeente met verspreide bewoning over deelgemeenten als Ottenburg, Neerijse en Sint-Agatha-Rode. Het woningbestand weerspiegelt de agrarische geschiedenis: veel vierkantshoeves, langgevelmwoningen en vrijstaande fermettes op grote percelen. Deze woningen hebben doorgaans een groot verliesoppervlak ten opzichte van het vloeroppervlak — een ongunstige compactheidsfactor die het EPC-label negatief beïnvloedt. Veel woningen worden verwarmd via individuele stookolieketels, soms gecombineerd met houtgestookte inzet- of pellethaarden. De afgelegen ligging maakt aansluiting op het aardgasnet in sommige gehuchten onmogelijk, waardoor warmtepompen een steeds populairder alternatief worden. Bij een EPC-keuring in Huldenberg zien we regelmatig dat eigenaars het dak al geïsoleerd hebben maar de vloer en muren vergeten — terwijl juist die combinatie het label significant kan verbeteren. Het gemeentebestuur zet actief in op het Lokaal Energie- en Klimaatpact en organiseert jaarlijks informatiesessies over renovatiepremies.",
    highlights: [
      "Uitgestrekte gemeente met veel fermettes en vierkantshoeves",
      "Ongunstige compactheidsfactor door groot verliesoppervlak",
      "Geen aardgas in sommige gehuchten — warmtepompen in opmars",
      "Veel deelrenovaties: dak wel, maar vloer en muren niet geïsoleerd",
    ],
  },
  {
    name: "Kortenberg",
    slug: "kortenberg",
    distanceKm: 11,
    showOnSite: true,
    uniqueContent:
      "Kortenberg, gelegen langs de E40 tussen Brussel en Leuven, is een forensengemeente met goede verbindingen naar beide steden. Het woningbestand is sterk gegroeid in de jaren '60 en '70, met uitgebreide verkavelingen in deelgemeenten als Erps-Kwerps, Everberg en Meerbeek. Typisch voor Kortenberg zijn de halfopen bebouwingen met een inpandige garage — een constructie waarbij de garage vaak ongeïsoleerd is en als kouderug fungeert voor de aangrenzende leefruimtes. Dit is een veelvoorkomend EPC-knelpunt dat eigenaars zelden op de radar hebben. De recentere wijken uit de jaren '90 en 2000 scoren doorgaans beter, met spouwmuurisolatie en HR-beglazing, maar ook hier zien we dat ventilatie vaak ontbreekt — wat in de huidige EPC-methodiek steeds zwaarder wordt bestraft. Kortenberg heeft een actief duurzaamheidsbeleid met een gemeentelijke energieconsulent die inwoners gratis adviseert over renovatiestappen en beschikbare premies. Het Regionaal Energiehuis Vlaams-Brabant biedt aanvullend begeleide renovatietrajecten aan voor eigenaars die een volledige woningrenovatie plannen.",
    highlights: [
      "Veel halfopen bebouwingen met ongeïsoleerde inpandige garage als kouderug",
      "Woningen jaren '90-2000 scoren beter maar missen vaak ventilatie",
      "Gemeentelijke energieconsulent biedt gratis renovatieadvies",
      "Regionaal Energiehuis begeleidt volledige renovatietrajecten",
    ],
  },
  {
    name: "Zaventem",
    slug: "zaventem",
    distanceKm: 12,
    showOnSite: true,
    uniqueContent:
      "Zaventem is de thuisgemeente van Brussels Airport en een economische hub met een zeer divers woningbestand. Van sociale appartementsblokken in Sint-Stevens-Woluwe tot villawijken in Sterrebeek en Nossegem — de EPC-uitdagingen variëren sterk per deelgemeente. In het centrum van Zaventem vinden we veel rijwoningen uit het interbellum (1920-1940) met karakteristieke gevelstenen, lage plafonds en smalle perceelbreedte. Deze woningen zijn vaak moeilijk te isoleren aan de buitenzijde wegens erfgoedwaarde of rooilijnbeperkingen, waardoor binnenisolatie de voorkeur krijgt. De industriezone Zaventem-Noord heeft de voorbije jaren een transformatie ondergaan naar residentieel gebruik, met loftappartementen in voormalige bedrijfspanden — een type vastgoed met specifieke EPC-aandachtspunten zoals grote glasoppervlaktes en beperkte buitengevelisolatie. Door de geluidscontouren van de luchthaven gelden er in bepaalde zones recht op geluidsisolatiepremies die gecombineerd kunnen worden met energierenovatie. Het gemeentebestuur van Zaventem heeft een ambitieus klimaatplan met doelstellingen voor CO₂-reductie in de residentiële sector.",
    highlights: [
      "Zeer divers woningbestand: van interbellum rijwoningen tot loftappartementen",
      "Geluidsisolatiepremies luchthaven combineerbaar met energierenovatie",
      "Interbellumwoningen lastig te isoleren aan buitenzijde (erfgoed/rooilijn)",
      "Ambitieus gemeentelijk klimaatplan met residentiële doelstellingen",
    ],
  },
  {
    name: "Leuven",
    slug: "leuven",
    distanceKm: 18,
    showOnSite: true,
    uniqueContent:
      "Leuven, de Vlaamse universiteitsstad bij uitstek, heeft een uniek woningbestand dat sterk beïnvloed is door de KU Leuven en de bijhorende studentenpopulatie. De binnenstad telt honderden studentenkoten — zowel kamers in opgedeelde herenhuizen als nieuwbouw studentenresidenties — die elk een apart EPC-attest nodig hebben bij verhuur. Dit maakt Leuven tot een van de gemeenten met de hoogste EPC-dichtheid in Vlaanderen. Naast studentenhuisvesting kent Leuven een rijke historische kern met gildehhuizen, patriciërswoningen en arbeidersrijtjeshuizen uit de 19de eeuw, die stuk voor stuk specifieke isolatie-uitdagingen stellen. De beschermde stadskern legt beperkingen op aan gevelwijzigingen, waardoor binnenisolatie en dakisolatie de voornaamste hefbomen zijn. In de 20ste-eeuwse gordel (Heverlee, Kessel-Lo, Wilsele) domineren halfopen en gesloten bebouwingen met spouwmuren die relatief eenvoudig na te isoleren zijn. De stad Leuven is pioniergemeente op vlak van duurzaamheid met het befaamde Leuven 2030-initiatief, een breed gedragen klimaatneutraliteitsprogramma. Eigenaars-verhuurders moeten er rekening mee houden dat de Vlaamse minimale EPC-eisen voor huurwoningen steeds strenger worden: vanaf 2030 is label D het absolute minimum.",
    highlights: [
      "Studentenkoten vereisen elk een apart EPC-attest — groot volume",
      "Beschermde stadskern beperkt gevelisolatie, focus op dak en binnenisolatie",
      "Leuven 2030: ambitieus klimaatneutraliteitsprogramma",
      "Vlaamse minimale EPC-eis voor huurwoningen: label D vanaf 2030",
    ],
  },
  // SEO-only: removed from visual grid but routes still exist
  {
    name: "Sint-Pieters-Woluwe",
    slug: "sint-pieters-woluwe",
    distanceKm: 8,
    uniqueContent:
      "Sint-Pieters-Woluwe is een welvarende Brusselse gemeente met art-deco-herenhuizen en naoorlogse appartementsgebouwen. Let op: hier gelden Brusselse EPB-normen, niet de Vlaamse EPC-regelgeving. EPC Expert kan u adviseren over de verschillen en u doorverwijzen naar de juiste instanties.",
    highlights: [
      "Brusselse EPB-normen van toepassing (niet Vlaamse EPC)",
      "Veel art-deco-patrimonium met specifieke isolatiebeperkingen",
      "Hoge vastgoedprijzen maken energielabel extra impactvol",
    ],
  },
  {
    name: "Erps-Kwerps",
    slug: "erps-kwerps",
    distanceKm: 11,
    uniqueContent:
      "Erps-Kwerps is een deelgemeente van Kortenberg met een dorps karakter en uitgebreide verkavelingen uit de jaren '70-'80. Veel halfopen bebouwingen met spouwmuren die geschikt zijn voor na-isolatie via inblazing. De nabijheid van de E40 maakt het een populaire forensengemeente.",
    highlights: [
      "Verkavelingen jaren '70-'80 ideaal voor spouwmuurinblazing",
      "Forensengemeente langs E40 met stijgende vastgoedvraag",
      "Valt onder Vlaamse renovatiepremies via gemeente Kortenberg",
    ],
  },
  {
    name: "Diegem",
    slug: "diegem",
    distanceKm: 13,
    uniqueContent:
      "Diegem, deelgemeente van Machelen, is een zakendistrict met een groeiend residentieel aanbod. Naast kantoorgebouwen vindt men er steeds meer appartementsprojecten. Oudere woningen langs de Haachtsesteenweg hebben vaak verouderde installaties die het EPC-label drukken.",
    highlights: [
      "Groeiend residentieel aanbod naast zakenwijk",
      "Oudere woningen langs steenwegen met verouderde installaties",
      "Geluidsisolatie relevant door nabijheid luchthaven",
    ],
  },
  {
    name: "Brussel",
    slug: "brussel",
    distanceKm: 14,
    uniqueContent:
      "Het Brussels Hoofdstedelijk Gewest hanteert eigen EPB-regels die afwijken van het Vlaamse EPC-systeem. De berekenmethode, labelsysteem en verplichtingen bij verkoop of verhuur zijn anders. EPC Expert opereert vanuit het Vlaams Gewest maar kan u informeren over de belangrijkste verschillen.",
    highlights: [
      "Brusselse EPB-certificaten, niet Vlaamse EPC-attesten",
      "Andere berekenmethode en labelklassen dan Vlaanderen",
      "Strengere renovatieverplichtingen voor verhuurders sinds 2023",
    ],
  },
  {
    name: "Machelen",
    slug: "machelen",
    distanceKm: 15,
    uniqueContent:
      "Machelen is een gemeente in volle transformatie, met grote reconversieprojecten van industriële sites naar woongebied. Het oudere woningbestand bestaat uit compacte rijwoningen uit de jaren '50-'60 die vaak nog niet energetisch gerenoveerd zijn. Nieuwbouwprojecten langs het kanaal scoren doorgaans goed op EPC.",
    highlights: [
      "Reconversie industriële sites naar residentieel",
      "Compacte rijwoningen jaren '50-'60 met renovatiepotentieel",
      "Vlaamse premies van toepassing (Vlaams Gewest)",
    ],
  },
  {
    name: "Herent",
    slug: "herent",
    distanceKm: 16,
    uniqueContent:
      "Herent ligt ten noorden van Leuven en heeft een mix van oude dorpskernen en recente verkavelingen. De woningen in Winksele en Veltem-Beisem zijn vaak vrijstaande fermettes met een hoog energieverbruik. De nabijheid van Leuven drijft de vastgoedprijzen, waardoor een goed EPC-label steeds belangrijker wordt.",
    highlights: [
      "Mix van dorpskernen en recente verkavelingen",
      "Vrijstaande fermettes met hoog energieverbruik in deelgemeenten",
      "Stijgende vastgoedprijzen door nabijheid Leuven",
    ],
  },
  {
    name: "Steenokkerzeel",
    slug: "steenokkerzeel",
    distanceKm: 14,
    uniqueContent:
      "Steenokkerzeel is een landelijke gemeente ten noordoosten van de luchthaven met voornamelijk vrijstaande en halfopen bebouwing. Veel woningen uit de jaren '70 hebben nog originele enkele beglazing en ongeïsoleerde daken. De gemeente participeert actief in het Lokaal Energie- en Klimaatpact.",
    highlights: [
      "Landelijke gemeente met veel vrijstaande bebouwing",
      "Originele enkele beglazing nog aanwezig in jaren '70 woningen",
      "Actieve deelname aan Lokaal Energie- en Klimaatpact",
    ],
  },
  {
    name: "Kampenhout",
    slug: "kampenhout",
    distanceKm: 16,
    uniqueContent:
      "Kampenhout is een groene, residentiële gemeente met veel vrijstaande villa's en fermettes op ruime percelen. De lage bebouwingsdichtheid resulteert in woningen met een groot verliesoppervlak. Stookolieketels komen hier nog frequent voor, en het aardgasnet dekt niet alle deelgemeenten.",
    highlights: [
      "Veel vrijstaande villa's met groot verliesoppervlak",
      "Stookolieketels frequent — aardgasnet niet overal beschikbaar",
      "Warmtepompen als alternatief steeds populairder",
    ],
  },
  {
    name: "Vilvoorde",
    slug: "vilvoorde",
    distanceKm: 17,
    uniqueContent:
      "Vilvoorde ondergaat een stedelijke renaissance met grote reconversieprojecten zoals Vilvoorde Watersite. Het oudere woningbestand in het centrum bestaat uit 19de-eeuwse arbeiderswoningen en interbellumbebouwing. Deze smalle, diepe rijwoningen zijn energetisch uitdagend maar bieden door hun compactheid toch potentieel voor verbetering.",
    highlights: [
      "Stedelijke reconversie met Vilvoorde Watersite als vlaggenschip",
      "19de-eeuwse arbeiderswoningen met specifieke renovatie-uitdagingen",
      "Compacte rijwoningen bieden potentieel ondanks beperkte isolatiemogelijkheden",
    ],
  },
  {
    name: "Grimbergen",
    slug: "grimbergen",
    distanceKm: 18,
    uniqueContent:
      "Grimbergen, bekend van zijn abdij en bier, is een uitgestrekte gemeente met sterke contrasten: van het verstedelijkte zuiden (Strombeek-Bever) tot het landelijke noorden. Het woningbestand varieert van appartementsgebouwen tot historische hoeves. De gemeente heeft een actief renovatiebeleid met ondersteuning via het Energiehuis.",
    highlights: [
      "Sterk contrast tussen verstedelijkt zuiden en landelijk noorden",
      "Divers woningbestand van appartementen tot historische hoeves",
      "Actief renovatiebeleid met Energiehuis-ondersteuning",
    ],
  },
  {
    name: "Meise",
    slug: "meise",
    distanceKm: 20,
    uniqueContent:
      "Meise, thuisgemeente van de Plantentuin, is een groene residentiële gemeente met veel vrijstaande woningen uit de jaren '70-'90. De ruime percelen en grote woningen resulteren in een hoog energieverbruik. Veel eigenaars hebben al gedeeltelijk gerenoveerd maar missen een totaalvisie die een EPC-attest kan bieden.",
    highlights: [
      "Veel vrijstaande woningen jaren '70-'90 op ruime percelen",
      "Deelrenovaties zonder totaalvisie — EPC brengt structuur",
      "Plantentuin-gemeente met groen, residentieel karakter",
    ],
  },
  // SEO-only: routes + structured data exist, but not shown in the visual grid
  {
    name: "Zemst",
    slug: "zemst",
    distanceKm: 22,
    uniqueContent:
      "Zemst is een uitgestrekte gemeente aan de samenvloeiing van Zenne en Dijle, met een mix van lintbebouwing en verkavelingen. Veel woningen uit de jaren '60-'70 hebben een beperkte isolatiegraad. De gemeente werkt samen met Fluvius voor energiepremies.",
    highlights: [
      "Uitgestrekte gemeente met lintbebouwing en verkavelingen",
      "Woningen jaren '60-'70 met beperkte isolatiegraad",
      "Samenwerking met Fluvius voor energiepremies",
    ],
  },
  {
    name: "Boortmeerbeek",
    slug: "boortmeerbeek",
    distanceKm: 20,
    uniqueContent:
      "Boortmeerbeek is een kleine landelijke gemeente tussen Mechelen en Leuven met voornamelijk halfopen en vrijstaande bebouwing. De dorpskernen van Boortmeerbeek en Hever tellen veel woningen uit de jaren '70 die rijp zijn voor een grondige energierenovatie.",
    highlights: [
      "Kleine landelijke gemeente tussen Mechelen en Leuven",
      "Veel woningen jaren '70 rijp voor energierenovatie",
      "Voornamelijk halfopen en vrijstaande bebouwing",
    ],
  },
  {
    name: "Haacht",
    slug: "haacht",
    distanceKm: 22,
    uniqueContent:
      "Haacht, gelegen langs de Dijle, combineert een landelijk karakter met goede verbindingen naar Leuven en Mechelen. Het woningbestand in de deelgemeenten Wespelaar en Tildonk bestaat grotendeels uit vrijstaande woningen met een hoge energievraag. De gemeente stimuleert renovatie via het Lokaal Energie- en Klimaatpact.",
    highlights: [
      "Landelijke gemeente langs de Dijle",
      "Vrijstaande woningen met hoge energievraag in deelgemeenten",
      "Renovatiestimulansen via Lokaal Energie- en Klimaatpact",
    ],
  },
  {
    name: "Rotselaar",
    slug: "rotselaar",
    distanceKm: 25,
    uniqueContent:
      "Rotselaar is een groene gemeente ten noorden van Leuven met deelgemeenten Wezemaal, Werchter (bekend van Rock Werchter) en Heikant. Het woningbestand is overwegend vrijstaand met veel bouwjaar jaren '70-'80. De afstand tot het aardgasnet maakt warmtepompen een interessant alternatief.",
    highlights: [
      "Groene gemeente bekend van Rock Werchter",
      "Overwegend vrijstaande bebouwing jaren '70-'80",
      "Warmtepompen interessant alternatief waar geen aardgas beschikbaar",
    ],
  },
  {
    name: "Asse",
    slug: "asse",
    distanceKm: 22,
    uniqueContent:
      "Asse is een centrumgemeente in het Pajottenland met een diverse woningmarkt. Het centrum kent verdichting met appartementen, terwijl deelgemeenten als Zellik en Mollem meer vrijstaande woningen tellen. De nabijheid van Brussel en de ring maakt een goed EPC-label een belangrijk verkoopargument.",
    highlights: [
      "Centrumgemeente Pajottenland met diverse woningmarkt",
      "Verdichting in centrum, vrijstaande bebouwing in deelgemeenten",
      "Nabijheid Brusselse ring maakt EPC-label extra waardevol",
    ],
  },
];
