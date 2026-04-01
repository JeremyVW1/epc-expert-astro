import type { BlogPost } from "./blog";

export const BLOG_POSTS_FR: readonly BlogPost[] = [
  {
    slug: "wat-is-een-epc-certificaat",
    title: "Qu'est-ce qu'un certificat PEB ? Tout ce que vous devez savoir",
    excerpt:
      "Un certificat PEB (certificat de performance \u00e9nerg\u00e9tique) est un document officiel qui \u00e9value l'efficacit\u00e9 \u00e9nerg\u00e9tique d'un logement ou d'un b\u00e2timent en Flandre sur une \u00e9chelle de A+ \u00e0 F. D\u00e9couvrez tout sur le PEB : ce que c'est, pourquoi vous en avez besoin et comment en demander un.",
    date: "2026-03-15",
    author: "EPC Expert",
    readingTime: 6,
    category: "Connaissances de base",
    content: `
<p>Un certificat PEB (certificat de performance \u00e9nerg\u00e9tique) est un document officiel qui \u00e9value l'efficacit\u00e9 \u00e9nerg\u00e9tique d'un logement ou d'un b\u00e2timent en Flandre sur une \u00e9chelle de A+ (\u00e9nergie neutre) \u00e0 F (tr\u00e8s mauvaise performance). Il est \u00e9tabli par un expert \u00e9nerg\u00e9tique agr\u00e9\u00e9 VEKA et est l\u00e9galement obligatoire lors de la vente ou de la location d'un bien immobilier.</p>

<h2>Comment fonctionne un PEB ?</h2>
<p>Le PEB mesure la consommation \u00e9nerg\u00e9tique calcul\u00e9e d'un b\u00e2timent, exprim\u00e9e en kWh/m&sup2; par an. Un expert \u00e9nerg\u00e9tique agr\u00e9\u00e9 de type A se rend sur place pour une inspection d'une dur\u00e9e moyenne de 1 \u00e0 2 heures. Lors de cette visite, tous les \u00e9l\u00e9ments \u00e9nerg\u00e9tiques pertinents du logement sont examin\u00e9s :</p>
<ul>
  <li><strong>Enveloppe du b\u00e2timent :</strong> isolation des murs, du toit, du sol et des fen\u00eatres</li>
  <li><strong>Installation de chauffage :</strong> type de chaudi\u00e8re, rendement, \u00e2ge</li>
  <li><strong>Eau chaude sanitaire :</strong> syst\u00e8me de production et stockage</li>
  <li><strong>Ventilation :</strong> type A, B, C ou D</li>
  <li><strong>\u00c9nergie renouvelable :</strong> panneaux solaires, chauffe-eau solaire, pompe \u00e0 chaleur</li>
</ul>

<h2>Les labels PEB expliqu\u00e9s</h2>
<p>Apr\u00e8s l'inspection, le logiciel de certification VEKA calcule le score \u00e9nerg\u00e9tique et attribue un label :</p>
<table>
  <thead><tr><th>Label</th><th>kWh/m&sup2;/an</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>A+</strong></td><td>&le; 0</td><td>\u00c9nergie neutre</td></tr>
    <tr><td><strong>A</strong></td><td>1 &ndash; 100</td><td>Tr\u00e8s \u00e9conome en \u00e9nergie</td></tr>
    <tr><td><strong>B</strong></td><td>101 &ndash; 200</td><td>Bien isol\u00e9</td></tr>
    <tr><td><strong>C</strong></td><td>201 &ndash; 300</td><td>Moyenne flamande</td></tr>
    <tr><td><strong>D</strong></td><td>301 &ndash; 400</td><td>En dessous de la moyenne</td></tr>
    <tr><td><strong>E</strong></td><td>401 &ndash; 500</td><td>Mauvaise performance</td></tr>
    <tr><td><strong>F</strong></td><td>&ge; 501</td><td>Tr\u00e8s mauvaise performance</td></tr>
  </tbody>
</table>
<p>D'apr\u00e8s notre exp\u00e9rience, la majorit\u00e9 des logements flamands existants se situent entre les labels C et E. Un logement avec le label A ou B a g\u00e9n\u00e9ralement d\u00e9j\u00e0 subi des r\u00e9novations importantes.</p>

<h2>Pourquoi le PEB est-il important ?</h2>
<p>Le PEB est plus qu'une obligation administrative. Il donne aux acheteurs ou locataires potentiels une image objective des co\u00fbts \u00e9nerg\u00e9tiques. De plus, le label PEB est li\u00e9 \u00e0 l'<a href="/blog/renovatieverplichting-2050">obligation de r\u00e9novation 2050</a> : quiconque ach\u00e8te un logement avec le label D, E ou F doit r\u00e9nover dans un d\u00e9lai d\u00e9termin\u00e9 pour atteindre au moins le label D (d'ici 2032) et finalement le label A ou B (d'ici 2050).</p>

<h2>Quelle est la dur\u00e9e de validit\u00e9 d'un PEB ?</h2>
<p>Un certificat PEB est <strong>valable 10 ans</strong> \u00e0 compter de la date d'\u00e9tablissement. Apr\u00e8s cette p\u00e9riode, un nouveau certificat doit \u00eatre demand\u00e9 si vous souhaitez vendre ou louer le bien. En cas de r\u00e9novations majeures, nous recommandons de faire \u00e9tablir un nouveau PEB, m\u00eame si le certificat existant est encore valide &mdash; un meilleur score peut augmenter la valeur de votre bien.</p>

<h2>Depuis juillet 2025 : documentation photographique obligatoire</h2>
<p>Avec le nouveau protocole d'inspection IP2025 (en vigueur depuis le 1er juillet 2025), les photos sont d\u00e9sormais <strong>obligatoires</strong> comme pi\u00e8ces justificatives pour chaque dossier PEB. Cela signifie que l'expert \u00e9nerg\u00e9tique prend des photos de l'isolation, des fen\u00eatres, des installations de chauffage et d'autres \u00e9l\u00e9ments pertinents lors de la visite. Lors de nos inspections, nous travaillons depuis longtemps avec une documentation photographique compl\u00e8te, garantissant \u00e0 nos clients un dossier toujours complet et transparent.</p>

<h2>Demander un PEB chez EPC Expert</h2>
<p>Chez <strong>EPC Expert</strong>, vous pouvez demander rapidement et facilement un certificat PEB. Nos experts \u00e9nerg\u00e9tiques agr\u00e9\u00e9s (num\u00e9ros d'agr\u00e9ment EP18784 et EP18782) se rendent chez vous pour une inspection approfondie. Vous recevez g\u00e9n\u00e9ralement votre certificat dans les 48 heures suivant la visite.</p>
<p>Curieux de conna\u00eetre nos tarifs ? Consultez notre <a href="/prijzen">page de tarifs</a> ou <a href="/offerte">demandez un devis gratuit et sans engagement</a>.</p>

<div class="cta-block">
  <p><strong>Besoin d'un PEB ?</strong> Demandez un <a href="/offerte">devis gratuit</a> d\u00e8s aujourd'hui ou appelez-nous au <a href="tel:+32475651005">0475 65 10 05</a>.</p>
</div>
`,
  },
  {
    slug: "epc-kosten-vlaanderen",
    title: "Combien co\u00fbte un certificat PEB en Flandre ?",
    excerpt:
      "Un certificat PEB en Flandre co\u00fbte en moyenne entre 195\u20ac et 350\u20ac, selon le type de bien et la superficie. D\u00e9couvrez les prix exacts, ce qui est inclus et comment trouver le meilleur rapport qualit\u00e9-prix.",
    date: "2026-03-10",
    author: "EPC Expert",
    readingTime: 5,
    category: "Co\u00fbts",
    content: `
<p>Un certificat PEB en Flandre co\u00fbte en moyenne entre &euro;195 et &euro;350, selon le type de bien, la superficie et la complexit\u00e9 du b\u00e2timent. Ce prix comprend l'inspection compl\u00e8te sur place, le calcul et l'enregistrement du certificat dans la base de donn\u00e9es de performance \u00e9nerg\u00e9tique de VEKA.</p>

<h2>Nos tarifs PEB</h2>
<p>Chez EPC Expert, nous proposons des prix fixes et transparents, sans frais cach\u00e9s :</p>
<ul>
  <li><strong>Appartement :</strong> \u00e0 partir de &euro;195 (TVA incluse)</li>
  <li><strong>Maison mitoyenne :</strong> \u00e0 partir de &euro;260 (TVA incluse)</li>
  <li><strong>Maison individuelle :</strong> \u00e0 partir de &euro;295 (TVA incluse)</li>
</ul>
<p>Ces prix sont tout compris : inspection, certificat, enregistrement et frais de d\u00e9placement dans notre zone de service sont inclus. Consultez notre <a href="/prijzen">page de tarifs compl\u00e8te</a> pour plus de d\u00e9tails.</p>

<h2>Qu'est-ce qui d\u00e9termine le prix d'un PEB ?</h2>
<p>Le co\u00fbt d'un PEB est influenc\u00e9 par plusieurs facteurs :</p>
<ul>
  <li><strong>Type de bien :</strong> un appartement est g\u00e9n\u00e9ralement moins cher qu'une grande villa individuelle, car il y a moins de surface et moins de composants \u00e0 inspecter</li>
  <li><strong>Superficie :</strong> un bien plus grand n\u00e9cessite plus de temps de mesure et plus de calculs</li>
  <li><strong>Complexit\u00e9 :</strong> les biens avec plusieurs zones de chauffage, des d\u00e9pendances ou un usage mixte sont plus complexes</li>
  <li><strong>R\u00e9gion :</strong> certains bureaux facturent des frais de d\u00e9placement suppl\u00e9mentaires</li>
  <li><strong>Documentation disponible :</strong> si des plans, des factures ou une d\u00e9claration PEB sont disponibles, l'inspection peut se d\u00e9rouler plus efficacement</li>
</ul>

<h2>Pourquoi les prix varient-ils autant ?</h2>
<p>Sur le march\u00e9 flamand, nous constatons des prix allant de &euro;150 \u00e0 plus de &euro;500. Lors de nos inspections, nous voyons souvent que les offres moins ch\u00e8res s'accompagnent d'inspections moins approfondies. Un expert PEB qui travaille trop vite risque de commettre des erreurs qui vous co\u00fbteront cher plus tard &mdash; par exemple, un score plus mauvais que ce que votre bien m\u00e9rite, ce qui peut faire baisser le prix de vente.</p>
<p>D'apr\u00e8s notre exp\u00e9rience, il vaut mieux choisir un expert exp\u00e9riment\u00e9 qui travaille de mani\u00e8re approfondie. Payer quelques dizaines d'euros de plus pour un PEB correct peut faire des milliers d'euros de diff\u00e9rence lors de la vente.</p>

<h2>Un PEB est-il d\u00e9ductible fiscalement ?</h2>
<p>Les co\u00fbts d'un PEB ne sont <strong>pas directement d\u00e9ductibles fiscalement</strong> pour les particuliers. Pour les propri\u00e9taires bailleurs et les investisseurs immobiliers, le PEB peut \u00eatre d\u00e9duit en tant que charge professionnelle. Consultez votre comptable pour votre situation sp\u00e9cifique.</p>

<h2>Conseils pour \u00e9conomiser sur votre PEB</h2>
<ul>
  <li><strong>Plusieurs unit\u00e9s en m\u00eame temps :</strong> vous avez plusieurs appartements ou biens ? Demandez une r\u00e9duction pour un lot</li>
  <li><strong>Pr\u00e9parez la documentation :</strong> pr\u00e9parez bien votre <a href="/voorbereiding">inspection</a> avec les factures et les plans &mdash; cela fait gagner du temps et peut am\u00e9liorer le score</li>
  <li><strong>Choisissez un expert local :</strong> moins de frais de d\u00e9placement avec un bureau dans votre r\u00e9gion</li>
</ul>

<h2>Demandez votre devis</h2>
<p>Vous voulez savoir exactement combien co\u00fbte votre PEB ? Chez EPC Expert, vous recevez un <strong>devis gratuit et personnalis\u00e9</strong> avec un prix fixe, pour que vous ne soyez jamais surpris.</p>

<div class="cta-block">
  <p><strong>Obtenez votre prix fixe :</strong> <a href="/offerte">Demandez un devis gratuit maintenant</a> ou appelez le <a href="tel:+32475651005">0475 65 10 05</a>.</p>
</div>
`,
  },
  {
    slug: "epc-verplicht-wanneer",
    title: "Quand un PEB est-il obligatoire ? Les r\u00e8gles expliqu\u00e9es",
    excerpt:
      "Un PEB est obligatoire lors de la vente ou de la location d'un logement ou d'un appartement en Flandre. Depuis 2022, cette obligation s'applique \u00e9galement aux petites unit\u00e9s non r\u00e9sidentielles. D\u00e9couvrez ici quand vous avez besoin ou non d'un PEB.",
    date: "2026-03-05",
    author: "EPC Expert",
    readingTime: 6,
    category: "L\u00e9gislation",
    content: `
<p>Un PEB est obligatoire lors de la vente ou de la location d'un logement ou d'un appartement en Flandre. Depuis 2022, cette obligation s'applique \u00e9galement aux petites unit\u00e9s non r\u00e9sidentielles. Le gouvernement flamand \u00e9tablit des r\u00e8gles claires via le D\u00e9cret \u00c9nergie et l'Arr\u00eat\u00e9 \u00c9nergie sur les cas o\u00f9 un certificat de performance \u00e9nerg\u00e9tique est requis.</p>

<h2>Obligatoire lors de la vente</h2>
<p>Lors de la <strong>vente</strong> d'un logement ou d'un appartement en R\u00e9gion flamande, le vendeur doit disposer d'un PEB valide avant que le bien ne soit mis en vente. Cela signifie :</p>
<ul>
  <li>Le label PEB doit \u00eatre mentionn\u00e9 dans toute publicit\u00e9 (sites immobiliers, affiches, annonces)</li>
  <li>Le PEB doit \u00eatre disponible lors de la premi\u00e8re visite des acheteurs potentiels</li>
  <li>Le num\u00e9ro du certificat PEB est inclus dans l'acte notari\u00e9</li>
</ul>
<p>D'apr\u00e8s notre exp\u00e9rience, les vendeurs oublient parfois que le PEB doit \u00eatre pr\u00eat avant la premi\u00e8re publication. N'attendez donc pas le dernier moment &mdash; planifiez votre inspection au moins 2 semaines avant la publication.</p>

<h2>Obligatoire lors de la location</h2>
<p>Un PEB est \u00e9galement obligatoire lors de la <strong>location</strong> d'un logement, d'un appartement ou d'un kot \u00e9tudiant. Le propri\u00e9taire doit :</p>
<ul>
  <li>Mentionner le label PEB dans toutes les annonces de location</li>
  <li>Remettre une copie du PEB au nouveau locataire lors de la signature du contrat de bail</li>
</ul>

<h2>B\u00e2timents non r\u00e9sidentiels</h2>
<p>Depuis 2022, les <strong>petites unit\u00e9s non r\u00e9sidentielles</strong> (bureaux, commerces, cabinets) sont \u00e9galement tenues de disposer d'un PEB lors de la vente ou de la location. Pour les grands b\u00e2timents non r\u00e9sidentiels (> 500 m&sup2;), un type de PEB distinct \u00e9tabli par un expert \u00e9nerg\u00e9tique de type B s'applique.</p>

<h2>Quand un PEB n'est-il PAS obligatoire ?</h2>
<p>Il existe quelques exceptions :</p>
<ul>
  <li><strong>Construction neuve avec d\u00e9claration PEB :</strong> si le bien a re\u00e7u une d\u00e9claration PEB il y a moins de 10 ans, celle-ci tient lieu de PEB</li>
  <li><strong>Monuments prot\u00e9g\u00e9s :</strong> les b\u00e2timents class\u00e9s comme monuments sont exempt\u00e9s</li>
  <li><strong>B\u00e2timents religieux :</strong> \u00e9glises, mosqu\u00e9es et autres b\u00e2timents religieux</li>
  <li><strong>B\u00e2timents temporaires :</strong> constructions avec une dur\u00e9e d'utilisation pr\u00e9vue de moins de 2 ans</li>
  <li><strong>B\u00e2timents non chauff\u00e9s :</strong> par exemple, des entrep\u00f4ts ou garages non chauff\u00e9s (s'ils ne sont pas vendus ou lou\u00e9s s\u00e9par\u00e9ment comme espace habitable)</li>
</ul>

<h2>Quelles sont les amendes ?</h2>
<p>Vendre ou louer sans PEB valide risque une <strong>amende de 500\u20ac \u00e0 5 000\u20ac</strong> impos\u00e9e par l'Agence flamande de l'\u00c9nergie et du Climat (VEKA). Lors de nos inspections, nous constatons malheureusement r\u00e9guli\u00e8rement que des propri\u00e9taires ne demandent un PEB qu'apr\u00e8s un avertissement du notaire &mdash; cela cr\u00e9e un stress et une pr\u00e9cipitation inutiles.</p>

<h2>Et lors d'une r\u00e9novation ?</h2>
<p>Un PEB n'est <strong>pas obligatoire lors d'une r\u00e9novation</strong> si vous ne vendez ni ne louez. Mais il peut \u00eatre tr\u00e8s utile : le PEB donne un aper\u00e7u des points faibles \u00e9nerg\u00e9tiques de votre logement et aide \u00e0 planifier les r\u00e9novations. De plus, le label PEB est li\u00e9 \u00e0 l'<a href="/blog/renovatieverplichting-2050">obligation de r\u00e9novation</a> : lors de l'achat d'un logement avec le label E ou F, vous devez r\u00e9nover pour atteindre au moins le label D dans les 5 ans.</p>

<h2>Besoin d'un PEB rapidement ?</h2>
<p>Chez EPC Expert, nous planifions g\u00e9n\u00e9ralement votre inspection <strong>dans les 5 jours ouvrables</strong>. Vous en avez besoin de toute urgence ? Contactez-nous directement &mdash; nous faisons de notre mieux pour vous aider le plus rapidement possible.</p>

<div class="cta-block">
  <p><strong>Vente ou location pr\u00e9vue ?</strong> <a href="/offerte">Demandez votre PEB maintenant</a> ou consultez nos <a href="/diensten">services</a> pour plus d'informations.</p>
</div>
`,
  },
  {
    slug: "renovatieverplichting-2050",
    title: "Obligation de r\u00e9novation 2050 : qu'est-ce que cela signifie pour votre logement ?",
    excerpt:
      "L'obligation de r\u00e9novation flamande oblige les nouveaux propri\u00e9taires \u00e0 rendre progressivement leur logement plus \u00e9conome en \u00e9nergie. D'ici 2032, chaque logement doit atteindre au moins le label D, d'ici 2050 le label A ou B.",
    date: "2026-02-28",
    author: "EPC Expert",
    readingTime: 7,
    category: "L\u00e9gislation",
    content: `
<p>L'obligation de r\u00e9novation flamande oblige les nouveaux propri\u00e9taires \u00e0 rendre progressivement leur logement plus \u00e9conome en \u00e9nergie. Depuis 2023, les acheteurs de logements avec un mauvais label PEB (E ou F) doivent r\u00e9nover pour atteindre au moins le label D dans les 5 ans suivant l'achat. D'ici 2050, chaque logement flamand doit atteindre le label A ou B.</p>

<h2>Le calendrier en d\u00e9tail</h2>
<p>Le gouvernement flamand a \u00e9tabli un plan d'action clair :</p>
<ul>
  <li><strong>\u00c0 partir de 2023 :</strong> lors de l'achat d'un logement avec le label E ou F, vous devez r\u00e9nover pour atteindre au moins le label D dans les 5 ans</li>
  <li><strong>D'ici 2032 :</strong> tous les logements doivent atteindre au moins le label D (score PEB &le; 400 kWh/m&sup2;/an)</li>
  <li><strong>D'ici 2040 :</strong> tous les logements doivent atteindre au moins le label C (score PEB &le; 300 kWh/m&sup2;/an)</li>
  <li><strong>D'ici 2050 :</strong> tous les logements doivent atteindre au moins le label B (score PEB &le; 200 kWh/m&sup2;/an), ou de pr\u00e9f\u00e9rence le label A</li>
</ul>
<p>Cette obligation est li\u00e9e au <strong>moment du transfert de propri\u00e9t\u00e9</strong> : le d\u00e9lai de r\u00e9novation commence \u00e0 l'achat du logement.</p>

<h2>Et si votre logement a d\u00e9j\u00e0 le label D ?</h2>
<p>Si votre logement a actuellement le label D, vous n'avez rien \u00e0 faire \u00e0 court terme. Mais d'ici 2040, vous devrez r\u00e9nover pour atteindre le label C, et d'ici 2050 le label B. D'apr\u00e8s notre exp\u00e9rience, il est financi\u00e8rement plus avantageux de planifier les r\u00e9novations progressivement plut\u00f4t que de tout faire au dernier moment.</p>

<h2>Quelles r\u00e9novations ont le plus d'impact ?</h2>
<p>Lors de nos inspections, nous voyons clairement quelles mesures apportent la plus grande am\u00e9lioration :</p>
<ol>
  <li><strong>Isolation du toit :</strong> souvent la mesure la plus rapide et la plus rentable. Un toit non isol\u00e9 peut causer 30% de perte de chaleur</li>
  <li><strong>Isolation des murs :</strong> l'isolation des murs creux (si possible) ou l'isolation ext\u00e9rieure apporte de grandes am\u00e9liorations</li>
  <li><strong>Chaudi\u00e8re \u00e0 haut rendement ou pompe \u00e0 chaleur :</strong> le remplacement d'une ancienne chaudi\u00e8re (>15 ans) par une chaudi\u00e8re \u00e0 condensation ou une pompe \u00e0 chaleur a un effet significatif</li>
  <li><strong>Vitrage haute performance :</strong> remplacement du simple ou double vitrage par du triple vitrage HR</li>
  <li><strong>Isolation du sol :</strong> souvent oubli\u00e9e, mais peut apporter une am\u00e9lioration notable</li>
</ol>
<p>Consultez nos <a href="/blog/epc-verbeteren-tips">10 conseils pour am\u00e9liorer votre score PEB</a> pour un aper\u00e7u complet.</p>

<h2>Soutien financier</h2>
<p>Le gouvernement flamand pr\u00e9voit diverses primes et avantages :</p>
<ul>
  <li><strong>Mijn VerbouwPremie :</strong> primes pour l'isolation, le chauffage, le vitrage et la ventilation</li>
  <li><strong>Mijn VerbouwLening :</strong> pr\u00eat sans int\u00e9r\u00eat jusqu'\u00e0 &euro;60 000 pour les r\u00e9novations \u00e9nerg\u00e9tiques</li>
  <li><strong>Prime label PEB :</strong> prime suppl\u00e9mentaire si vous am\u00e9liorez plusieurs labels PEB en une seule r\u00e9novation</li>
  <li><strong>Taux de TVA r\u00e9duit :</strong> 6% de TVA sur les travaux de r\u00e9novation pour les logements de plus de 10 ans</li>
</ul>

<h2>Et si vous ne r\u00e9novez pas ?</h2>
<p>Actuellement, il n'y a pas d'amendes pour le non-respect des objectifs \u00e0 long terme (2040, 2050). Cependant, lors de l'achat d'un logement avec le label E ou F, l'obligation de r\u00e9novation de 5 ans est bien ex\u00e9cutoire. De plus, les experts immobiliers pr\u00e9disent que les logements avec un mauvais label PEB seront de plus en plus difficiles \u00e0 vendre et perdront de la valeur plus rapidement.</p>

<h2>Votre PEB comme point de d\u00e9part</h2>
<p>Le certificat PEB est le point de d\u00e9part de toute strat\u00e9gie de r\u00e9novation. Il fournit non seulement votre score actuel, mais aussi des <strong>recommandations</strong> concr\u00e8tes d'am\u00e9lioration et leur impact attendu sur le score. Faites \u00e9tablir un PEB actuel pour savoir o\u00f9 vous en \u00eates.</p>

<div class="cta-block">
  <p><strong>Vous voulez savoir o\u00f9 en est votre logement ?</strong> <a href="/offerte">Demandez un PEB</a> et recevez un rapport clair avec des conseils de r\u00e9novation. Appelez-nous au <a href="tel:+32475651005">0475 65 10 05</a>.</p>
</div>
`,
  },
  {
    slug: "epc-verbeteren-tips",
    title: "10 conseils pour am\u00e9liorer votre score PEB",
    excerpt:
      "Vous voulez am\u00e9liorer votre score PEB ? De l'isolation du toit aux panneaux solaires : d\u00e9couvrez 10 conseils concrets pour am\u00e9liorer votre label \u00e9nerg\u00e9tique, r\u00e9duire votre facture d'\u00e9nergie et pr\u00e9parer votre logement \u00e0 l'obligation de r\u00e9novation.",
    date: "2026-02-20",
    author: "EPC Expert",
    readingTime: 8,
    category: "Conseils",
    content: `
<p>Vous voulez am\u00e9liorer votre score PEB ? De l'isolation du toit aux panneaux solaires : avec ces 10 conseils concrets, vous am\u00e9liorez votre label \u00e9nerg\u00e9tique, r\u00e9duisez votre facture d'\u00e9nergie et pr\u00e9parez votre logement \u00e0 l'<a href="/blog/renovatieverplichting-2050">obligation de r\u00e9novation 2050</a>. D'apr\u00e8s notre exp\u00e9rience en tant qu'experts \u00e9nerg\u00e9tiques agr\u00e9\u00e9s, nous constatons qu'une combinaison de mesures produit le plus grand effet.</p>

<h2>1. Isolez votre toit ou plancher de grenier</h2>
<p>L'isolation du toit est de loin la mesure la <strong>plus rentable</strong>. Un toit non isol\u00e9 est responsable de jusqu'\u00e0 30% des pertes de chaleur. Choisissez au moins 18 cm de mat\u00e9riau isolant (valeur Rd &ge; 4,5 m&sup2;K/W) pour un r\u00e9sultat optimal sur votre score PEB.</p>

<h2>2. Remplacez le simple vitrage par du vitrage haute performance</h2>
<p>Le simple vitrage a une valeur U d'environ 5,8 W/m&sup2;K. Le triple vitrage HR atteint 0,5 \u00e0 0,7 W/m&sup2;K &mdash; une \u00e9norme am\u00e9lioration. Lors de nos inspections, nous constatons que les fen\u00eatres \u00e0 simple vitrage font chuter drastiquement le score PEB. M\u00eame le remplacement du double vitrage ordinaire par du verre HR++ fait une diff\u00e9rence notable.</p>

<h2>3. Isolez vos murs ext\u00e9rieurs</h2>
<p>L'isolation des murs peut se faire par trois m\u00e9thodes : <strong>isolation des murs creux</strong> (injection, souvent l'option la moins ch\u00e8re si une cavit\u00e9 est pr\u00e9sente), <strong>isolation ext\u00e9rieure</strong> (la plus efficace mais plus co\u00fbteuse) ou <strong>isolation int\u00e9rieure</strong> (quand les autres options ne sont pas possibles). Chaque m\u00e9thode am\u00e9liore significativement votre score PEB.</p>

<h2>4. Isolez votre sol</h2>
<p>L'isolation du sol est souvent n\u00e9glig\u00e9e, mais peut pr\u00e9venir 7 \u00e0 10% de perte de chaleur. S'il y a un vide sanitaire, l'isolation peut \u00eatre relativement facilement appliqu\u00e9e sous la dalle de sol.</p>

<h2>5. Remplacez votre ancienne chaudi\u00e8re</h2>
<p>Une chaudi\u00e8re de plus de 15 ans fonctionne avec un rendement parfois inf\u00e9rieur \u00e0 80%. Une <strong>chaudi\u00e8re \u00e0 condensation</strong> moderne atteint plus de 98% de rendement. C'est l'une des mesures avec le temps de retour sur investissement le plus rapide, surtout avec la hausse des prix du gaz.</p>

<h2>6. Envisagez une pompe \u00e0 chaleur</h2>
<p>Une pompe \u00e0 chaleur (air-eau ou g\u00e9othermique) est l'avenir du chauffage. Le syst\u00e8me de calcul PEB valorise tr\u00e8s positivement les pompes \u00e0 chaleur. En combinaison avec un chauffage par le sol et une bonne isolation, vous pouvez atteindre le label A. L'investissement est plus \u00e9lev\u00e9, mais la <strong>Mijn VerbouwPremie</strong> peut couvrir une partie des co\u00fbts.</p>

<h2>7. Installez des panneaux solaires</h2>
<p>Les panneaux solaires (installation PV) r\u00e9duisent votre score PEB car ils produisent de l'\u00e9nergie renouvelable. Une installation typique de 10 panneaux (&plusmn; 4 kWc) peut am\u00e9liorer votre score de 30 \u00e0 50 kWh/m&sup2;/an, selon la taille de votre logement.</p>

<h2>8. Installez un chauffe-eau solaire</h2>
<p>Un chauffe-eau solaire pour l'eau chaude sanitaire est pris en compte positivement dans le calcul PEB. La combinaison de panneaux solaires et d'un chauffe-eau solaire offre un avantage cumulatif sur votre score.</p>

<h2>9. Am\u00e9liorez votre ventilation</h2>
<p>Le syst\u00e8me de ventilation influence le score PEB. Le syst\u00e8me D (alimentation et extraction m\u00e9caniques avec r\u00e9cup\u00e9ration de chaleur) obtient le meilleur score. Une mise \u00e0 niveau du syst\u00e8me A (ventilation naturelle) vers le syst\u00e8me C ou D peut am\u00e9liorer votre score, bien que l'impact soit moindre qu'avec l'isolation.</p>

<h2>10. Rassemblez les justificatifs pour votre inspection</h2>
<p>C'est un conseil qui ne n\u00e9cessite <strong>aucun investissement suppl\u00e9mentaire</strong> : assurez-vous de pouvoir pr\u00e9senter toutes les factures, plans et attestations de r\u00e9novations ant\u00e9rieures lors de l'inspection PEB. Sans justificatifs, l'expert \u00e9nerg\u00e9tique doit utiliser des valeurs par d\u00e9faut d\u00e9favorables, ce qui abaisse inutilement votre score. Consultez notre <a href="/voorbereiding">page de pr\u00e9paration</a> pour une liste de contr\u00f4le compl\u00e8te.</p>

<h2>\u00c9tablir les priorit\u00e9s</h2>
<p>Toutes les mesures ne sont pas \u00e9galement rentables pour chaque logement. Le bon ordre d\u00e9pend de votre situation actuelle. D'apr\u00e8s notre exp\u00e9rience, la r\u00e8gle de base est :</p>
<ol>
  <li>D'abord isoler l'enveloppe du b\u00e2timent (toit &rarr; murs &rarr; sol &rarr; fen\u00eatres)</li>
  <li>Ensuite s'occuper de l'installation de chauffage</li>
  <li>Enfin ajouter l'\u00e9nergie renouvelable</li>
</ol>
<p>Un certificat PEB actuel vous donne la feuille de route : il contient des recommandations concr\u00e8tes avec l'impact attendu de chaque mesure.</p>

<h2>Commencez par un PEB actuel</h2>
<p>Vous voulez savoir quelles mesures ont le plus d'effet pour votre logement ? Faites \u00e9tablir un <a href="/offerte">PEB actuel</a> et recevez un rapport avec des recommandations de r\u00e9novation cibl\u00e9es.</p>

<div class="cta-block">
  <p><strong>Pr\u00eat \u00e0 am\u00e9liorer votre score PEB ?</strong> <a href="/offerte">Demandez votre PEB</a> ou appelez le <a href="tel:+32475651005">0475 65 10 05</a> pour un conseil personnalis\u00e9.</p>
</div>
`,
  },
] as const;
