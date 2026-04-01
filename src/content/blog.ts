import type { Language } from "@/i18n/types";
import { BLOG_POSTS_EN } from "./blog-en";
import { BLOG_POSTS_FR } from "./blog-fr";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "wat-is-een-epc-certificaat",
    title: "Wat is een EPC-certificaat? Alles wat u moet weten",
    excerpt:
      "Een EPC-certificaat (energieprestatiecertificaat) is een officieel document dat de energiezuinigheid van een woning of gebouw in Vlaanderen beoordeelt op een schaal van A+ tot F. Ontdek hier alles over het EPC: wat het is, waarom u het nodig heeft en hoe u er een aanvraagt.",
    date: "2026-03-15",
    author: "EPC Expert",
    readingTime: 6,
    category: "Basiskennis",
    content: `
<p>Een EPC-certificaat (energieprestatiecertificaat) is een officieel document dat de energiezuinigheid van een woning of gebouw in Vlaanderen beoordeelt op een schaal van A+ (energieneutraal) tot F (zeer slecht presterend). Het wordt opgesteld door een VEKA-erkend energiedeskundige en is wettelijk verplicht bij de verkoop of verhuur van een woning.</p>

<h2>Hoe werkt een EPC?</h2>
<p>Het EPC meet het berekende energieverbruik van een gebouw, uitgedrukt in kWh/m&sup2; per jaar. Een erkend energiedeskundige type A komt ter plaatse voor een inspectie van gemiddeld 1 tot 2 uur. Tijdens dit bezoek worden alle energetisch relevante elementen van de woning onderzocht:</p>
<ul>
  <li><strong>Gebouwschil:</strong> isolatie van muren, dak, vloer en ramen</li>
  <li><strong>Verwarmingsinstallatie:</strong> type ketel, rendement, leeftijd</li>
  <li><strong>Sanitair warm water:</strong> productiesysteem en opslag</li>
  <li><strong>Ventilatie:</strong> type A, B, C of D</li>
  <li><strong>Hernieuwbare energie:</strong> zonnepanelen, zonneboiler, warmtepomp</li>
</ul>

<h2>De EPC-labels uitgelegd</h2>
<p>Na de inspectie berekent de VEKA-certificatiesoftware de energiescore en kent een label toe:</p>
<table>
  <thead><tr><th>Label</th><th>kWh/m&sup2;/jaar</th><th>Omschrijving</th></tr></thead>
  <tbody>
    <tr><td><strong>A+</strong></td><td>&le; 0</td><td>Energieneutraal</td></tr>
    <tr><td><strong>A</strong></td><td>1 &ndash; 100</td><td>Zeer energiezuinig</td></tr>
    <tr><td><strong>B</strong></td><td>101 &ndash; 200</td><td>Goed ge&iuml;soleerd</td></tr>
    <tr><td><strong>C</strong></td><td>201 &ndash; 300</td><td>Gemiddeld Vlaams</td></tr>
    <tr><td><strong>D</strong></td><td>301 &ndash; 400</td><td>Ondergemiddeld</td></tr>
    <tr><td><strong>E</strong></td><td>401 &ndash; 500</td><td>Slecht presterend</td></tr>
    <tr><td><strong>F</strong></td><td>&ge; 501</td><td>Zeer slecht presterend</td></tr>
  </tbody>
</table>
<p>In onze ervaring valt het merendeel van de bestaande Vlaamse woningen in label C tot E. Een woning met label A of B heeft doorgaans al significante renovaties ondergaan.</p>

<h2>Waarom is het EPC belangrijk?</h2>
<p>Het EPC is meer dan een administratieve verplichting. Het geeft potenti&euml;le kopers of huurders een objectief beeld van de energiekosten. Daarnaast is het EPC-label gekoppeld aan de <a href="/blog/renovatieverplichting-2050">renovatieverplichting 2050</a>: wie een woning koopt met label D, E of F moet binnen een bepaalde termijn renoveren naar minstens label D (tegen 2032) en uiteindelijk label A of B (tegen 2050).</p>

<h2>Hoelang is een EPC geldig?</h2>
<p>Een EPC-certificaat is <strong>10 jaar geldig</strong> vanaf de datum van opmaak. Na het verstrijken van deze termijn moet een nieuw certificaat worden aangevraagd als u de woning wilt verkopen of verhuren. Bij ingrijpende renovaties raden wij aan om een nieuw EPC te laten opmaken, ook als het bestaande certificaat nog geldig is &mdash; een betere score kan de waarde van uw woning verhogen.</p>

<h2>Sinds juli 2025: verplichte fotodocumentatie</h2>
<p>Met het nieuwe inspectieprotocol IP2025 (van kracht sinds 1 juli 2025) zijn foto&rsquo;s nu <strong>verplicht</strong> als bewijsmateriaal bij elk EPC-dossier. Dit betekent dat de energiedeskundige tijdens het bezoek foto&rsquo;s neemt van isolatie, ramen, verwarmingsinstallaties en andere relevante elementen. Bij onze inspecties werken we al langer met uitgebreide fotodocumentatie, waardoor onze klanten altijd een volledig en transparant dossier ontvangen.</p>

<h2>Een EPC aanvragen bij EPC Expert</h2>
<p>Bij <strong>EPC Expert</strong> kunt u snel en eenvoudig een EPC-certificaat aanvragen. Onze erkende energiedeskundigen (erkenningsnummers EP18784 en EP18782) komen bij u langs voor een grondige inspectie. U ontvangt uw certificaat doorgaans binnen 48 uur na het bezoek.</p>
<p>Benieuwd naar onze tarieven? Bekijk onze <a href="/prijzen">prijzenpagina</a> of <a href="/offerte">vraag direct een vrijblijvende offerte aan</a>.</p>

<div class="cta-block">
  <p><strong>Heeft u een EPC nodig?</strong> Vraag vandaag nog een <a href="/offerte">gratis offerte</a> aan of bel ons op <a href="tel:+32475651005">0475 65 10 05</a>.</p>
</div>
`,
  },
  {
    slug: "epc-kosten-vlaanderen",
    title: "Hoeveel kost een EPC-certificaat in Vlaanderen?",
    excerpt:
      "Een EPC-certificaat kost in Vlaanderen gemiddeld tussen \u20AC195 en \u20AC350, afhankelijk van het type woning en de oppervlakte. Ontdek de exacte prijzen, wat er inbegrepen is en hoe u de beste prijs-kwaliteitverhouding vindt.",
    date: "2026-03-10",
    author: "EPC Expert",
    readingTime: 5,
    category: "Kosten",
    content: `
<p>Een EPC-certificaat kost in Vlaanderen gemiddeld tussen &euro;195 en &euro;350, afhankelijk van het type woning, de oppervlakte en de complexiteit van het gebouw. Deze prijs omvat de volledige inspectie ter plaatse, de berekening en de registratie van het certificaat in de Energieprestatiedatabank van VEKA.</p>

<h2>Onze EPC-tarieven</h2>
<p>Bij EPC Expert hanteren we transparante, vaste prijzen zonder verborgen kosten:</p>
<ul>
  <li><strong>Appartement:</strong> vanaf &euro;195 (incl. btw)</li>
  <li><strong>Rijwoning:</strong> vanaf &euro;260 (incl. btw)</li>
  <li><strong>Vrijstaande woning:</strong> vanaf &euro;295 (incl. btw)</li>
</ul>
<p>Deze prijzen zijn all-in: inspectie, certificaat, registratie en verplaatsingskosten binnen ons werkgebied zijn inbegrepen. Bekijk onze volledige <a href="/prijzen">prijzenpagina</a> voor meer details.</p>

<h2>Wat bepaalt de prijs van een EPC?</h2>
<p>De kostprijs van een EPC wordt be&iuml;nvloed door verschillende factoren:</p>
<ul>
  <li><strong>Type woning:</strong> een appartement is doorgaans goedkoper dan een grote vrijstaande villa, omdat er minder oppervlakte en minder gebouwonderdelen te inspecteren zijn</li>
  <li><strong>Oppervlakte:</strong> een grotere woning vereist meer meettijd en meer berekeningen</li>
  <li><strong>Complexiteit:</strong> woningen met meerdere verwarmingszones, bijgebouwen of gemengd gebruik zijn complexer</li>
  <li><strong>Regio:</strong> sommige bureaus rekenen extra verplaatsingskosten aan</li>
  <li><strong>Beschikbare documentatie:</strong> als er plannen, facturen of een EPB-aangifte beschikbaar zijn, kan de inspectie effici&euml;nter verlopen</li>
</ul>

<h2>Waarom variëren de prijzen zo sterk?</h2>
<p>Op de Vlaamse markt zien we prijzen variëren van &euro;150 tot meer dan &euro;500. Bij onze inspecties zien we vaak dat goedkopere aanbiedingen gepaard gaan met minder grondige inspecties. Een EPC-deskundige die te snel werkt, riskeert fouten die u later duur komen te staan &mdash; bijvoorbeeld een slechtere score dan uw woning verdient, wat de verkoopprijs kan drukken.</p>
<p>In onze ervaring is het beter om te kiezen voor een ervaren deskundige die grondig te werk gaat. Enkele tientallen euro&rsquo;s meer betalen voor een correct EPC kan duizenden euro&rsquo;s verschil maken bij de verkoop.</p>

<h2>Is een EPC fiscaal aftrekbaar?</h2>
<p>De kosten voor een EPC zijn <strong>niet rechtstreeks fiscaal aftrekbaar</strong> voor particulieren. Voor verhuurders en vastgoedinvesteerders kan het EPC wel als beroepskost worden ingebracht. Raadpleeg uw boekhouder voor uw specifieke situatie.</p>

<h2>Tips om te besparen op uw EPC</h2>
<ul>
  <li><strong>Meerdere eenheden tegelijk:</strong> heeft u meerdere appartementen of woningen? Vraag korting aan voor bundelprijzen</li>
  <li><strong>Documentatie klaarzetten:</strong> bereid uw <a href="/voorbereiding">inspectie goed voor</a> met facturen en plannen &mdash; dit bespaart tijd en kan de score verbeteren</li>
  <li><strong>Kies een lokale deskundige:</strong> minder verplaatsingskosten bij een bureau in uw regio</li>
</ul>

<h2>Vraag uw offerte aan</h2>
<p>Wilt u exact weten hoeveel uw EPC kost? Bij EPC Expert ontvangt u een <strong>vrijblijvende offerte op maat</strong> met een vaste prijs, zodat u nooit voor verrassingen staat.</p>

<div class="cta-block">
  <p><strong>Ontvang uw vaste prijs:</strong> <a href="/offerte">Vraag nu een gratis offerte aan</a> of bel <a href="tel:+32475651005">0475 65 10 05</a>.</p>
</div>
`,
  },
  {
    slug: "epc-verplicht-wanneer",
    title: "Wanneer is een EPC verplicht? De regels uitgelegd",
    excerpt:
      "Een EPC is verplicht bij de verkoop of verhuur van een woning of appartement in Vlaanderen. Sinds 2022 geldt deze verplichting ook voor kleine niet-residenti\u00eble eenheden. Lees hier wanneer u wel en niet een EPC nodig heeft.",
    date: "2026-03-05",
    author: "EPC Expert",
    readingTime: 6,
    category: "Wetgeving",
    content: `
<p>Een EPC is verplicht bij de verkoop of verhuur van een woning of appartement in Vlaanderen. Sinds 2022 geldt deze verplichting ook voor kleine niet-residenti&euml;le eenheden. De Vlaamse overheid legt via het Energiedecreet en het Energiebesluit duidelijke regels vast over wanneer een energieprestatiecertificaat vereist is.</p>

<h2>Verplicht bij verkoop</h2>
<p>Bij de <strong>verkoop</strong> van een woning of appartement in het Vlaamse Gewest moet de verkoper beschikken over een geldig EPC v&oacute;&oacute;r de woning te koop wordt gesteld. Dit betekent:</p>
<ul>
  <li>Het EPC-label moet vermeld worden in elke publiciteit (immobili&euml;nwebsites, raamaffiches, advertenties)</li>
  <li>Het EPC moet beschikbaar zijn bij het eerste bezoek van kandidaat-kopers</li>
  <li>Bij de notari&euml;le akte wordt het EPC-certificaatnummer opgenomen</li>
</ul>
<p>In onze ervaring vergeten verkopers soms dat het EPC al klaar moet zijn v&oacute;&oacute;r de eerste publicatie. Wacht dus niet tot het laatste moment &mdash; plan uw inspectie minstens 2 weken voor de publicatie.</p>

<h2>Verplicht bij verhuur</h2>
<p>Ook bij het <strong>verhuren</strong> van een woning, appartement of studentenkamer is een EPC verplicht. De verhuurder moet:</p>
<ul>
  <li>Het EPC-label vermelden in alle huuradvertenties</li>
  <li>Een kopie van het EPC overhandigen aan de nieuwe huurder bij ondertekening van het huurcontract</li>
</ul>

<h2>Niet-residenti&euml;le gebouwen</h2>
<p>Sinds 2022 zijn ook <strong>kleine niet-residenti&euml;le eenheden</strong> (kantoren, winkels, praktijkruimtes) verplicht om over een EPC te beschikken bij verkoop of verhuur. Voor grote niet-residenti&euml;le gebouwen (> 500 m&sup2;) geldt een apart EPC-type opgemaakt door een energiedeskundige type B.</p>

<h2>Wanneer is een EPC NIET verplicht?</h2>
<p>Er bestaan enkele uitzonderingen:</p>
<ul>
  <li><strong>Nieuwbouw met EPB-aangifte:</strong> als de woning minder dan 10 jaar geleden een EPB-aangifte heeft gekregen, geldt die als EPC</li>
  <li><strong>Beschermde monumenten:</strong> gebouwen beschermd als monument zijn vrijgesteld</li>
  <li><strong>Gebouwen voor eredienst:</strong> kerken, moskee&euml;n en andere religieuze gebouwen</li>
  <li><strong>Tijdelijke gebouwen:</strong> constructies met een geplande gebruiksduur van minder dan 2 jaar</li>
  <li><strong>Niet-verwarmde gebouwen:</strong> bijvoorbeeld onverwarmde loodsen of garages (mits ze niet apart verkocht of verhuurd worden als bewoonbare ruimte)</li>
</ul>

<h2>Wat zijn de boetes?</h2>
<p>Wie verkoopt of verhuurt zonder geldig EPC riskeert een <strong>boete van &euro;500 tot &euro;5.000</strong> opgelegd door het Vlaams Energie- en Klimaatagentschap (VEKA). Bij onze inspecties zien we helaas regelmatig dat eigenaars pas na een waarschuwing van de notaris een EPC aanvragen &mdash; dit zorgt voor onnodige stress en haast.</p>

<h2>En bij renovatie?</h2>
<p>Een EPC is <strong>niet verplicht bij renovatie</strong> als u niet verkoopt of verhuurt. Maar het kan w&eacute;l zeer nuttig zijn: het EPC geeft inzicht in de energetische zwakke punten van uw woning en helpt bij het plannen van renovaties. Bovendien is het EPC-label gekoppeld aan de <a href="/blog/renovatieverplichting-2050">renovatieverplichting</a>: bij aankoop van een woning met label E of F moet u binnen 5 jaar renoveren naar minstens label D.</p>

<h2>EPC snel nodig?</h2>
<p>Bij EPC Expert plannen we uw inspectie doorgaans <strong>binnen 5 werkdagen</strong>. Heeft u het dringend nodig? Neem dan direct contact met ons op &mdash; wij doen ons best om u zo snel mogelijk te helpen.</p>

<div class="cta-block">
  <p><strong>Verkoop of verhuur gepland?</strong> <a href="/offerte">Vraag nu uw EPC aan</a> of bekijk onze <a href="/diensten">diensten</a> voor meer informatie.</p>
</div>
`,
  },
  {
    slug: "renovatieverplichting-2050",
    title: "Renovatieverplichting 2050: wat betekent dit voor uw woning?",
    excerpt:
      "De Vlaamse renovatieverplichting verplicht nieuwe eigenaars om hun woning stapsgewijs energiezuiniger te maken. Tegen 2032 moet elke woning minstens label D halen, tegen 2050 label A of B. Lees hier wat dit concreet voor u betekent.",
    date: "2026-02-28",
    author: "EPC Expert",
    readingTime: 7,
    category: "Wetgeving",
    content: `
<p>De Vlaamse renovatieverplichting verplicht nieuwe eigenaars om hun woning stapsgewijs energiezuiniger te maken. Sinds 2023 moeten kopers van woningen met een slecht EPC-label (E of F) binnen 5 jaar na aankoop renoveren naar minstens label D. Tegen 2050 moet elke Vlaamse woning label A of B bereiken.</p>

<h2>De tijdslijn in detail</h2>
<p>De Vlaamse overheid heeft een duidelijk stappenplan uitgetekend:</p>
<ul>
  <li><strong>Vanaf 2023:</strong> bij aankoop van een woning met label E of F moet u binnen 5 jaar renoveren naar minstens label D</li>
  <li><strong>Tegen 2032:</strong> alle woningen moeten minstens label D bereiken (EPC-score &le; 400 kWh/m&sup2;/jaar)</li>
  <li><strong>Tegen 2040:</strong> alle woningen moeten minstens label C bereiken (EPC-score &le; 300 kWh/m&sup2;/jaar)</li>
  <li><strong>Tegen 2050:</strong> alle woningen moeten minstens label B bereiken (EPC-score &le; 200 kWh/m&sup2;/jaar), of bij voorkeur label A</li>
</ul>
<p>Deze verplichting wordt gekoppeld aan het <strong>moment van eigendomsoverdracht</strong>: de renovatietermijn start bij de aankoop van de woning.</p>

<h2>Wat als uw woning al label D heeft?</h2>
<p>Als uw woning vandaag label D heeft, hoeft u op korte termijn niets te doen. Maar tegen 2040 moet u w&eacute;l naar label C renoveren, en tegen 2050 naar label B. In onze ervaring is het financieel voordeliger om renovaties stapsgewijs te plannen dan alles op het laatste moment te moeten uitvoeren.</p>

<h2>Welke renovaties hebben het meeste impact?</h2>
<p>Bij onze inspecties zien we duidelijk welke ingrepen de grootste verbetering opleveren:</p>
<ol>
  <li><strong>Dakisolatie:</strong> vaak de snelste en meest kosteneffici&euml;nte maatregel. Een onge&iuml;soleerd dak kan 30% warmteverlies veroorzaken</li>
  <li><strong>Muurisolatie:</strong> spouwmuurisolatie (indien mogelijk) of buitenisolatie brengt grote verbeteringen</li>
  <li><strong>Hoogrendements verwarmingsketel of warmtepomp:</strong> vervanging van een oude ketel (>15 jaar) door een condensatieketel of warmtepomp heeft een significant effect</li>
  <li><strong>Hoogrendementsbeglazing:</strong> vervanging van enkel of dubbel glas door driedubbel HR-glas</li>
  <li><strong>Vloerisolatie:</strong> vaak vergeten, maar kan een merkbare verbetering opleveren</li>
</ol>
<p>Bekijk onze <a href="/blog/epc-verbeteren-tips">10 tips om uw EPC-score te verbeteren</a> voor een compleet overzicht.</p>

<h2>Financi&euml;le ondersteuning</h2>
<p>De Vlaamse overheid voorziet verschillende premies en voordelen:</p>
<ul>
  <li><strong>Mijn VerbouwPremie:</strong> premies voor isolatie, verwarming, beglazing en ventilatie</li>
  <li><strong>Mijn VerbouwLening:</strong> renteloze lening tot &euro;60.000 voor energetische renovaties</li>
  <li><strong>EPC-labelpremie:</strong> extra premie als u meerdere EPC-labels verbetert in &eacute;&eacute;n renovatie</li>
  <li><strong>Verlaagd btw-tarief:</strong> 6% btw op renovatiewerken voor woningen ouder dan 10 jaar</li>
</ul>

<h2>Wat als u niet renoveert?</h2>
<p>Momenteel zijn er nog geen boetes voor het niet naleven van de langetermijndoelstellingen (2040, 2050). Maar bij aankoop van een woning met label E of F is de 5-jarige renovatieplicht w&eacute;l afdwingbaar. Bovendien voorspellen vastgoedexperts dat woningen met een slecht EPC-label steeds moeilijker verkoopbaar zullen worden en sneller in waarde zullen dalen.</p>

<h2>Uw EPC als startpunt</h2>
<p>Het EPC-certificaat is het vertrekpunt voor elke renovatiestrategie. Het geeft niet alleen uw huidige score, maar ook concrete <strong>aanbevelingen</strong> voor verbeteringen en hun verwachte impact op de score. Laat een actueel EPC opmaken om te weten waar u staat.</p>

<div class="cta-block">
  <p><strong>Wilt u weten waar uw woning staat?</strong> <a href="/offerte">Vraag een EPC aan</a> en ontvang een helder rapport met renovatieadvies. Bel ons op <a href="tel:+32475651005">0475 65 10 05</a>.</p>
</div>
`,
  },
  {
    slug: "epc-verbeteren-tips",
    title: "10 tips om uw EPC-score te verbeteren",
    excerpt:
      "Wilt u uw EPC-score verbeteren? Van dakisolatie tot zonnepanelen: ontdek 10 concrete tips waarmee u uw energielabel verbetert, uw energiefactuur verlaagt en uw woning klaarstoomt voor de renovatieverplichting.",
    date: "2026-02-20",
    author: "EPC Expert",
    readingTime: 8,
    category: "Tips",
    content: `
<p>Wilt u uw EPC-score verbeteren? Van dakisolatie tot zonnepanelen: met deze 10 concrete tips verbetert u uw energielabel, verlaagt u uw energiefactuur en maakt u uw woning klaar voor de <a href="/blog/renovatieverplichting-2050">renovatieverplichting 2050</a>. In onze ervaring als erkende energiedeskundigen zien we dat een combinatie van maatregelen het grootste effect heeft.</p>

<h2>1. Isoleer uw dak of zoldervloer</h2>
<p>Dakisolatie is veruit de <strong>meest kosteneffici&euml;nte</strong> maatregel. Een onge&iuml;soleerd dak is verantwoordelijk voor tot 30% van het warmteverlies. Kies voor minstens 18 cm isolatiemateriaal (Rd-waarde &ge; 4,5 m&sup2;K/W) voor een optimaal resultaat op uw EPC-score.</p>

<h2>2. Vervang enkel glas door hoogrendementsbeglazing</h2>
<p>Enkel glas heeft een U-waarde van ongeveer 5,8 W/m&sup2;K. Driedubbel HR-glas haalt 0,5 tot 0,7 W/m&sup2;K &mdash; een enorme verbetering. Bij onze inspecties zien we dat ramen met enkel glas de EPC-score drastisch naar beneden halen. Zelfs het vervangen van gewoon dubbel glas door HR++-glas maakt een merkbaar verschil.</p>

<h2>3. Isoleer uw gevelmuren</h2>
<p>Muurisolatie kan via drie methoden: <strong>spouwmuurisolatie</strong> (navulling, vaak de goedkoopste optie als er een spouw aanwezig is), <strong>buitenisolatie</strong> (meest effectief maar duurder) of <strong>binnenisolatie</strong> (als andere opties niet mogelijk zijn). Elke methode verbetert uw EPC-score significant.</p>

<h2>4. Isoleer uw vloer</h2>
<p>Vloerisolatie wordt vaak over het hoofd gezien, maar kan 7 tot 10% warmteverlies voorkomen. Als er een kruipkelder aanwezig is, kan isolatie relatief eenvoudig worden aangebracht aan de onderzijde van de vloerplaat.</p>

<h2>5. Vervang uw oude verwarmingsketel</h2>
<p>Een verwarmingsketel ouder dan 15 jaar werkt met een rendement van soms minder dan 80%. Een moderne <strong>condensatieketel</strong> haalt meer dan 98% rendement. Dit is een van de maatregelen met de snelste terugverdientijd, zeker bij stijgende gasprijzen.</p>

<h2>6. Overweeg een warmtepomp</h2>
<p>Een warmtepomp (lucht-water of grondgebonden) is de toekomst van verwarming. Het EPC-berekeningssysteem waardeert warmtepompen zeer positief. In combinatie met vloerverwarming en goede isolatie kunt u hiermee label A bereiken. De investering is hoger, maar de <strong>Mijn VerbouwPremie</strong> kan een deel van de kosten dekken.</p>

<h2>7. Installeer zonnepanelen</h2>
<p>Zonnepanelen (PV-installatie) verlagen uw EPC-score doordat ze hernieuwbare energie opwekken. Een typische installatie van 10 panelen (&plusmn; 4 kWp) kan uw score met 30 tot 50 kWh/m&sup2;/jaar verbeteren, afhankelijk van de grootte van uw woning.</p>

<h2>8. Installeer een zonneboiler</h2>
<p>Een zonneboiler voor sanitair warm water wordt positief meegenomen in de EPC-berekening. De combinatie van zonnepanelen &eacute;n een zonneboiler levert een cumulatief voordeel op uw score.</p>

<h2>9. Verbeter uw ventilatie</h2>
<p>Het ventilatiesysteem heeft invloed op de EPC-score. Systeem D (mechanische aan- en afvoer met warmteterugwinning) scoort het best. Een upgrade van systeem A (natuurlijke ventilatie) naar systeem C of D kan uw score verbeteren, al is de impact kleiner dan bij isolatie.</p>

<h2>10. Verzamel bewijsstukken voor uw inspectie</h2>
<p>Dit is een tip die <strong>geen extra investering</strong> vraagt: zorg ervoor dat u alle facturen, plannen en attesten van eerdere renovaties kunt voorleggen bij de EPC-inspectie. Zonder bewijsstukken moet de energiedeskundige uitgaan van ongunstige standaardwaarden, wat uw score onnodig verlaagt. Bekijk onze <a href="/voorbereiding">voorbereidingspagina</a> voor een complete checklist.</p>

<h2>Prioriteiten stellen</h2>
<p>Niet elke maatregel is even rendabel voor elke woning. De juiste volgorde hangt af van uw huidige situatie. In onze ervaring is de vuistregel:</p>
<ol>
  <li>Eerst de gebouwschil isoleren (dak &rarr; muren &rarr; vloer &rarr; ramen)</li>
  <li>Dan de verwarmingsinstallatie aanpakken</li>
  <li>Tot slot hernieuwbare energie toevoegen</li>
</ol>
<p>Een actueel EPC-certificaat geeft u de roadmap: het bevat concrete aanbevelingen met de verwachte impact van elke maatregel.</p>

<h2>Start met een actueel EPC</h2>
<p>Wilt u weten welke maatregelen het meeste effect hebben voor &uacute;w woning? Laat een <a href="/offerte">actueel EPC opmaken</a> en ontvang een rapport met gerichte renovatieaanbevelingen.</p>

<div class="cta-block">
  <p><strong>Klaar om uw EPC-score te verbeteren?</strong> <a href="/offerte">Vraag uw EPC aan</a> of bel <a href="tel:+32475651005">0475 65 10 05</a> voor persoonlijk advies.</p>
</div>
`,
  },
] as const;

const BLOG_POSTS_MAP: Record<Language, readonly BlogPost[]> = {
  nl: BLOG_POSTS,
  en: BLOG_POSTS_EN,
  fr: BLOG_POSTS_FR,
};

export function getBlogPosts(language: Language): readonly BlogPost[] {
  return BLOG_POSTS_MAP[language];
}
