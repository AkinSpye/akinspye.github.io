const countries = [
  {
    name: "Japonia",
    region: "Azja Wschodnia",
    lat: 38,
    lon: 138,
    dish: "Okonomiyaki",
    dishText: "Sycący placek z kapustą, jajkiem i dodatkami. Świetny na wieczór, bo łatwo go zrobić wspólnie przy stole.",
    adventure: "Yakushima, szlak przez las cedrowy",
    adventureText: "Wilgotny, filmowy las, kamienie, korzenie i długie podejścia. To bardziej rytuał ruchu niż zwykły spacer.",
    polygon: [[129, 31], [132, 34], [136, 35], [141, 40], [146, 44], [144, 46], [138, 43], [134, 37], [130, 33]]
  },
  {
    name: "Peru",
    region: "Andy i zachodnia Ameryka Południowa",
    lat: -9,
    lon: -75,
    dish: "Ceviche",
    dishText: "Ryba marynowana w limonce z cebulą, kolendrą i chili. Jasne, świeże i bardzo wakacyjne w charakterze.",
    adventure: "Szlak Salkantay do Machu Picchu",
    adventureText: "Wysokość, ostre podejścia i zmienna pogoda. Nagroda to przejście przez Andy, które naprawdę czuć w nogach.",
    polygon: [[-81, -4], [-69, -4], [-69, -18], [-76, -18], [-81, -11]]
  },
  {
    name: "Norwegia",
    region: "Skandynawia",
    lat: 62,
    lon: 10,
    dish: "Fårikål",
    dishText: "Prosty gulasz z jagnięciny i kapusty. Minimalistyczny, rozgrzewający i bardzo północny.",
    adventure: "Romsdalseggen Ridge",
    adventureText: "Graniowa trasa z widokiem na fiordy. Wymaga kondycji, uważnego kroku i odporności na ekspozycję.",
    polygon: [[5, 58], [12, 58], [31, 70], [25, 71], [14, 66], [5, 62]]
  },
  {
    name: "Islandia",
    region: "Północny Atlantyk",
    lat: 65,
    lon: -19,
    dish: "Kjötsúpa",
    dishText: "Jagnięca zupa z warzywami, dobra po zimnym dniu. Smakuje jak ciepły odpoczynek po wietrze.",
    adventure: "Laugavegur Trail",
    adventureText: "Kolorowe góry, pola lawowe, rzeki i długie marsze. Szlak jest surowy, piękny i bardzo ruchowy.",
    polygon: [[-24, 63], [-13, 63], [-13, 67], [-24, 67]]
  },
  {
    name: "Grecja",
    region: "Europa Południowa",
    lat: 39,
    lon: 22,
    dish: "Moussaka",
    dishText: "Warstwy bakłażana, mięsa lub soczewicy i beszamelu. Idealna potrawa na wolniejsze gotowanie.",
    adventure: "Wąwóz Samaria na Krecie",
    adventureText: "Długi marsz przez skalny korytarz, zejścia po kamieniach i gorące powietrze. Ma świetny rytm wyprawy.",
    polygon: [[19, 35], [29, 35], [29, 42], [20, 42]]
  },
  {
    name: "Maroko",
    region: "Afryka Północna",
    lat: 31,
    lon: -7,
    dish: "Tagine z cytryną i oliwkami",
    dishText: "Aromatyczne, wolno duszone danie, które pachnie imbirem, kuminem i kiszoną cytryną.",
    adventure: "Wąwóz Todra",
    adventureText: "Wysokie ściany, ciasne przejścia i okolice dobre na trekking oraz wspinaczkę. Bardzo kinowy teren.",
    polygon: [[-13, 28], [-1, 28], [-1, 36], [-8, 36], [-13, 32]]
  },
  {
    name: "Nepal",
    region: "Himalaje",
    lat: 28,
    lon: 84,
    dish: "Momo",
    dishText: "Pierogi gotowane na parze z ostrym sosem. Są proste, społeczne i świetne do przygotowania w większej porcji.",
    adventure: "Annapurna Circuit",
    adventureText: "Wielodniowa trasa przez przełęcze, mosty i wioski. Wymaga tempa, oddechu i cierpliwości do wysokości.",
    polygon: [[80, 26], [88, 26.5], [88, 30.5], [80, 30]]
  },
  {
    name: "Nowa Zelandia",
    region: "Oceania",
    lat: -41,
    lon: 174,
    dish: "Hangi",
    dishText: "Mięso i warzywa pieczone tradycyjnie w ziemnym piecu. W domowej wersji da się oddać ten dymny, spokojny klimat.",
    adventure: "Tongariro Alpine Crossing",
    adventureText: "Wulkaniczny krajobraz, strome podejścia i jeziora o nienaturalnych kolorach. Szlak ma mocny rytm przygody.",
    polygon: [[166, -47], [179, -47], [179, -35], [170, -34], [166, -40]]
  },
  {
    name: "Kanada",
    region: "Ameryka Północna",
    lat: 56,
    lon: -106,
    dish: "Poutine",
    dishText: "Frytki, sos pieczeniowy i serowe grudki. To comfort food, który robi się bez udawania elegancji.",
    adventure: "West Coast Trail",
    adventureText: "Błoto, drabiny, plaże, las i ocean. Trasa wymaga równowagi, siły i gotowości na kapryśną pogodę.",
    polygon: [[-141, 42], [-53, 42], [-53, 70], [-141, 70]]
  },
  {
    name: "Meksyk",
    region: "Ameryka Północna",
    lat: 23,
    lon: -102,
    dish: "Mole poblano",
    dishText: "Gęsty sos z chili, przypraw i kakao. Ma głębię, która robi wrażenie nawet przy małej porcji.",
    adventure: "Barrancas del Cobre",
    adventureText: "Kaniony, wysokość i trasy, które zmieniają skalę krajobrazu. Dobre dla kogoś, kto lubi teren z charakterem.",
    polygon: [[-117, 14], [-86, 14], [-86, 25], [-100, 32], [-117, 32]]
  },
  {
    name: "Brazylia",
    region: "Ameryka Południowa",
    lat: -10,
    lon: -52,
    dish: "Feijoada",
    dishText: "Fasolowy gulasz z mięsem, pomarańczą i ryżem. Sycący, społeczny i idealny na dłuższe gotowanie.",
    adventure: "Chapada Diamantina",
    adventureText: "Wodospady, jaskinie, strome podejścia i naturalne baseny. Miejsce ma dużo ruchu i tropikalny klimat.",
    polygon: [[-74, -34], [-35, -34], [-35, 5], [-51, 5], [-74, -8]]
  },
  {
    name: "RPA",
    region: "Afryka Południowa",
    lat: -30,
    lon: 25,
    dish: "Bobotie",
    dishText: "Zapiekanka z mięsa, przypraw i jajecznej warstwy. Słodko-pikantna, miękka i bardzo domowa.",
    adventure: "Drakensberg Amphitheatre",
    adventureText: "Górski mur, łańcuchowe drabinki i potężne panoramy. To wyprawa dla nóg oraz głowy.",
    polygon: [[16, -35], [33, -35], [33, -22], [16, -22]]
  },
  {
    name: "Włochy",
    region: "Europa Południowa",
    lat: 42,
    lon: 12,
    dish: "Risotto ai funghi",
    dishText: "Kremowy ryż z grzybami i parmezanem. Wymaga mieszania, ale odwdzięcza się pełnym, leśnym aromatem.",
    adventure: "Via ferrata w Dolomitach",
    adventureText: "Metalowe liny, ekspozycja i skalne przejścia. To miejsce, gdzie koordynacja ruchowa naprawdę ma znaczenie.",
    polygon: [[7, 37], [18, 37], [18, 47], [7, 47]]
  },
  {
    name: "Hiszpania",
    region: "Europa Południowo-Zachodnia",
    lat: 40,
    lon: -4,
    dish: "Tortilla española",
    dishText: "Omlet ziemniaczany z cebulą. Prosty, tani i genialny wtedy, gdy ma miękki środek.",
    adventure: "Caminito del Rey",
    adventureText: "Kładki nad wąwozem, ściany skalne i sporo ekspozycji. Trasa robi wrażenie nawet bez ekstremalnego tempa.",
    polygon: [[-10, 36], [4, 36], [4, 44], [-10, 44]]
  },
  {
    name: "Francja",
    region: "Europa Zachodnia",
    lat: 46,
    lon: 2,
    dish: "Ratatouille",
    dishText: "Warzywa duszone z ziołami. Kolorowe, lekkie i dobre jako danie, które smakuje latem.",
    adventure: "Calanques koło Marsylii",
    adventureText: "Białe skały, zejścia do zatok i ścieżki nad morzem. Dobre połączenie trekkingu, skały i światła.",
    polygon: [[-5, 42], [8, 42], [8, 51], [-5, 51]]
  },
  {
    name: "Turcja",
    region: "Anatolia i pogranicze Europy",
    lat: 39,
    lon: 35,
    dish: "Mantı",
    dishText: "Małe pierożki z jogurtem czosnkowym i masłem z papryką. Dużo pracy, dużo satysfakcji.",
    adventure: "Lycian Way",
    adventureText: "Długie odcinki nad morzem, starożytne ruiny i kamienne ścieżki. Trasa ma tempo wyprawy, nie spaceru.",
    polygon: [[26, 36], [45, 36], [45, 42], [26, 42]]
  },
  {
    name: "Gruzja",
    region: "Kaukaz",
    lat: 42,
    lon: 44,
    dish: "Chaczapuri adżarskie",
    dishText: "Łódka z ciasta, sera, masła i jajka. Efektowna, konkretna i świetna do podania od razu z pieca.",
    adventure: "Kazbek i okolice Stepancmindy",
    adventureText: "Podejścia, lodowcowy klimat i szerokie widoki Kaukazu. Ruch jest tu częścią atmosfery.",
    polygon: [[39, 41], [47, 41], [47, 44], [39, 44]]
  },
  {
    name: "Wietnam",
    region: "Azja Południowo-Wschodnia",
    lat: 16,
    lon: 106,
    dish: "Bún chả",
    dishText: "Grillowana wieprzowina, makaron ryżowy, zioła i sos. Świeże, pachnące i bardzo miejskie.",
    adventure: "Pętla Hà Giang",
    adventureText: "Górskie serpentyny, przełęcze i widoki na tarasy ryżowe. Najlepiej dla osób lubiących aktywny teren.",
    polygon: [[102, 8], [110, 8], [110, 23], [104, 23], [102, 17]]
  },
  {
    name: "Tajlandia",
    region: "Azja Południowo-Wschodnia",
    lat: 15,
    lon: 101,
    dish: "Pad thai",
    dishText: "Makaron ryżowy z jajkiem, tofu lub krewetkami, tamaryndem i orzeszkami. Szybki, jasny i satysfakcjonujący.",
    adventure: "Wspinanie w Railay",
    adventureText: "Wapienne ściany nad wodą, plaża i dużo pracy całym ciałem. Klimat jest mocny od pierwszego kroku.",
    polygon: [[97, 5], [106, 5], [106, 21], [97, 21]]
  },
  {
    name: "Indonezja",
    region: "Archipelag Azji",
    lat: -3,
    lon: 118,
    dish: "Gado-gado",
    dishText: "Warzywa, jajko, tofu i sos orzechowy. Kolorowe, sycące i łatwe do złożenia po swojemu.",
    adventure: "Wejście na Mount Batur",
    adventureText: "Start przed świtem, podejście po wulkanicznym gruncie i wschód słońca nad kalderą. Proste, ale magiczne.",
    polygon: [[95, -11], [141, -11], [141, 6], [95, 6]]
  },
  {
    name: "Indie",
    region: "Azja Południowa",
    lat: 22,
    lon: 78,
    dish: "Masala dosa",
    dishText: "Chrupiący naleśnik z fermentowanego ciasta, ziemniakami i chutneyem. Lekki, ostry i bardzo satysfakcjonujący.",
    adventure: "Dolina Kwiatów w Himalajach",
    adventureText: "Podejścia, wysokość i alpejskie łąki. Trzeba iść uważnie, ale nagroda jest wyjątkowo barwna.",
    polygon: [[68, 8], [89, 8], [89, 35], [68, 35]]
  },
  {
    name: "Kenia",
    region: "Afryka Wschodnia",
    lat: 0,
    lon: 37,
    dish: "Nyama choma",
    dishText: "Grillowane mięso z prostymi dodatkami. Najlepiej działa jako posiłek bez pośpiechu i z dużą porcją świeżości.",
    adventure: "Mount Longonot",
    adventureText: "Podejście na krater i marsz granią. Jest pył, wysokość i mocny widok na Wielki Rów Afrykański.",
    polygon: [[33, -5], [42, -5], [42, 5], [33, 5]]
  },
  {
    name: "Jordania",
    region: "Bliski Wschód",
    lat: 31,
    lon: 36,
    dish: "Mansaf",
    dishText: "Jagnięcina z ryżem i sosem jogurtowym. Potrawa uroczysta, aromatyczna i bardzo konkretna.",
    adventure: "Kanioning w Wadi Mujib",
    adventureText: "Woda, skały, liny i przejścia przez wąski kanion. Tu liczy się koordynacja, chwyt i spokój.",
    polygon: [[34, 29], [40, 29], [40, 34], [34, 34]]
  },
  {
    name: "Chile",
    region: "Ameryka Południowa",
    lat: -30,
    lon: -71,
    dish: "Pastel de choclo",
    dishText: "Zapiekanka z kukurydzy, mięsa, oliwek i jajka. Słodko-słona, domowa i bardzo charakterystyczna.",
    adventure: "Torres del Paine",
    adventureText: "Wiatr, granitowe wieże, mostki i długie odcinki marszu. Patagonia nie udaje, że będzie lekko.",
    polygon: [[-76, -56], [-66, -56], [-66, -17], [-76, -17]]
  },
  {
    name: "Argentyna",
    region: "Ameryka Południowa",
    lat: -35,
    lon: -64,
    dish: "Empanadas",
    dishText: "Pieczone pierożki z mięsem, serem lub warzywami. Dobre do eksperymentowania i podania w serii.",
    adventure: "Laguna de los Tres pod Fitz Roy",
    adventureText: "Długi marsz z mocnym finałowym podejściem. Widok na masyw jest nagrodą za każdy krok.",
    polygon: [[-74, -55], [-53, -55], [-53, -22], [-74, -22]]
  },
  {
    name: "Stany Zjednoczone",
    region: "Ameryka Północna",
    lat: 39,
    lon: -98,
    dish: "Gumbo",
    dishText: "Gęsty gulasz z Luizjany z ciemną zasmażką, warzywami i przyprawami. Wolny ogień robi tu całą robotę.",
    adventure: "The Narrows w Zion",
    adventureText: "Marsz korytem rzeki między ścianami kanionu. Trzeba uważać na równowagę, wodę i tempo.",
    polygon: [[-125, 25], [-66, 25], [-66, 49], [-125, 49]]
  },
  {
    name: "Polska",
    region: "Europa Środkowa",
    lat: 52,
    lon: 19,
    dish: "Pierogi ruskie",
    dishText: "Ciasto, ziemniaki, twaróg i cebula. Klasyk, który nadal potrafi być najlepszym planem na wieczór.",
    adventure: "Orla Perć w Tatrach",
    adventureText: "Łańcuchy, ekspozycja, skała i konieczność skupienia. To propozycja dla doświadczonych, nie spacerowa atrakcja.",
    polygon: [[14, 49], [24, 49], [24, 55], [14, 55]]
  },
  {
    name: "Portugalia",
    region: "Europa Atlantycka",
    lat: 39,
    lon: -8,
    dish: "Bacalhau à Brás",
    dishText: "Dorsz, ziemniaki, jajko i oliwki. Słone, kremowe i świetne, gdy chcesz zrobić coś prostego, ale innego.",
    adventure: "Madeira, szlak PR1",
    adventureText: "Grań między Pico do Arieiro i Pico Ruivo. Są tunele, schody, chmury i mocna praca nóg.",
    polygon: [[-10, 37], [-6, 37], [-6, 42], [-10, 42]]
  },
  {
    name: "Słowenia",
    region: "Alpy Julijskie",
    lat: 46,
    lon: 14.8,
    dish: "Potica",
    dishText: "Zawijane ciasto z orzechowym nadzieniem. Wymaga cierpliwości, ale wygląda jak małe święto na stole.",
    adventure: "Triglav",
    adventureText: "Skalne odcinki, ferratowe elementy i wysokość. Mały kraj, bardzo konkretna górska energia.",
    polygon: [[13, 45], [17, 45], [17, 47], [13, 47]]
  },
  {
    name: "Korea Południowa",
    region: "Azja Wschodnia",
    lat: 36,
    lon: 128,
    dish: "Bibimbap",
    dishText: "Ryż, warzywa, jajko, pasta gochujang i dużo koloru. Idealne danie do składania z tego, co masz pod ręką.",
    adventure: "Seoraksan",
    adventureText: "Granitowe szczyty, schody, świątynie i jesienne kolory. Trasy potrafią dać w kość.",
    polygon: [[126, 34], [130, 34], [130, 39], [126, 39]]
  },
  {
    name: "Egipt",
    region: "Afryka Północno-Wschodnia",
    lat: 27,
    lon: 30,
    dish: "Koshari",
    dishText: "Ryż, makaron, soczewica, ciecierzyca i pikantny sos pomidorowy. Tanie, sycące i pełne kontrastów.",
    adventure: "Sinai Trail",
    adventureText: "Pustynne przejścia, skalne doliny i długie marsze z przewodnikami. Cisza robi tu ogromne wrażenie.",
    polygon: [[25, 22], [36, 22], [36, 32], [25, 32]]
  },
  {
    name: "Australia",
    region: "Oceania",
    lat: -25,
    lon: 134,
    dish: "Meat pie",
    dishText: "Mała wytrawna tarta z mięsnym nadzieniem. Domowa wersja potrafi być świetnie chrupiąca i wygodna w podaniu.",
    adventure: "Blue Mountains canyoning",
    adventureText: "Zjazdy, mokre przejścia i piaskowcowe kaniony. Dobre dla osób, które chcą ruchu całym ciałem.",
    polygon: [[113, -44], [154, -44], [154, -10], [113, -10]]
  }
];

const countryPlanVariants = {};

function addPlanVariants(countryName, dishes, adventures) {
  countryPlanVariants[countryName] = {
    dishes: dishes.map(toPlanItem),
    adventures: adventures.map(toPlanItem)
  };
}

function toPlanItem([name, text]) {
  return { name, text };
}

addPlanVariants("Japonia", [
  ["Okonomiyaki", "Sycący placek z kapustą, jajkiem i dodatkami. Świetny na wieczór, bo łatwo go zrobić wspólnie przy stole."],
  ["Ramen shoyu", "Bulion sojowy, sprężysty makaron i dodatki, które można układać po swojemu. Daje dużo klimatu nawet w domowej wersji."],
  ["Katsudon", "Ryż, panierowany kotlet, jajko i słodko-słony sos. Konkretne, ciepłe i bardzo dobre po aktywnym dniu."],
  ["Onigiri z łososiem", "Ryżowe trójkąty z prostym farszem. Idealne, jeśli plan dnia ma mieć w sobie coś lekkiego i podróżnego."],
  ["Japońskie curry rice", "Gęsty sos curry z warzywami i ryżem. Łagodne, domowe i bardzo wdzięczne do przygotowania w większej porcji."]
], [
  ["Yakushima, szlak przez las cedrowy", "Wilgotny, filmowy las, kamienie, korzenie i długie podejścia. To bardziej rytuał ruchu niż zwykły spacer."],
  ["Kumano Kodo", "Stare pielgrzymkowe ścieżki, schody, las i małe świątynie. Trasa jest spokojna, ale nogi pracują cały dzień."],
  ["Fuji, szlak Yoshida", "Nocne podejście, wysokość i kamienisty rytm kroku. Największą nagrodą jest świt nad chmurami."],
  ["Shimanami Kaido", "Rowerowa przeprawa przez mosty i wyspy. Dużo ruchu, powietrza i poczucia drogi."],
  ["Kamikochi i dolina Azusa", "Górskie ścieżki, mosty i alpejski krajobraz. Dobre miejsce na długi, jasny dzień w terenie."]
]);

addPlanVariants("Peru", [
  ["Ceviche", "Ryba marynowana w limonce z cebulą, kolendrą i chili. Jasne, świeże i bardzo wakacyjne w charakterze."],
  ["Lomo saltado", "Wołowina smażona z cebulą, pomidorami i frytkami. Szybkie, mocne w smaku i świetne z ryżem."],
  ["Ají de gallina", "Kremowy sos z chili ají amarillo, kurczak i ryż. Ma miękkość comfort foodu, ale z wyraźnym charakterem."],
  ["Papa a la huancaína", "Ziemniaki z żółtym, pikantnym sosem serowym. Proste danie, które wygląda słonecznie na talerzu."],
  ["Anticuchos", "Marynowane szaszłyki z mocną przyprawą. Dobre, gdy chcesz zrobić coś ulicznego i konkretnego."]
], [
  ["Szlak Salkantay do Machu Picchu", "Wysokość, ostre podejścia i zmienna pogoda. Nagroda to przejście przez Andy, które naprawdę czuć w nogach."],
  ["Kanion Colca", "Zejścia, podejścia i ogromna skala krajobrazu. Kondory nad głową robią z tego wyprawę z rozmachem."],
  ["Ausangate Trek", "Kolorowe góry, wysokość i surowy teren. Trzeba pilnować tempa i oddechu."],
  ["Rainbow Mountain", "Krótkie, intensywne podejście na wysokości i bardzo cienkie powietrze. Widok jest efektowny, ale zasłużony."],
  ["Cordillera Huayhuash", "Wielodniowy trekking przez przełęcze i lodowcowe jeziora. Dla osób, które lubią mocny teren."]
]);

addPlanVariants("Norwegia", [
  ["Fårikål", "Prosty gulasz z jagnięciny i kapusty. Minimalistyczny, rozgrzewający i bardzo północny."],
  ["Fiskesuppe", "Kremowa zupa rybna z warzywami. Delikatna, morska i idealna po chłodnym spacerze."],
  ["Raspeballer", "Ziemniaczane kluski z wytrawnymi dodatkami. Bardzo sycące, bardzo proste i bardzo górskie w nastroju."],
  ["Kjøttkaker", "Mięsne klopsiki z sosem i ziemniakami. Domowa klasyka, która dobrze znosi deszczowy dzień."],
  ["Lefse z cynamonem", "Miękki placek z masłem, cukrem i cynamonem. Dobry jako słodki akcent po północnym obiedzie."]
], [
  ["Romsdalseggen Ridge", "Graniowa trasa z widokiem na fiordy. Wymaga kondycji, uważnego kroku i odporności na ekspozycję."],
  ["Trolltunga", "Długi podejście do skalnej półki nad jeziorem. To dzień dla cierpliwych nóg i dobrej pogody."],
  ["Besseggen", "Grań między jeziorami o różnych kolorach. Jest stromo, wysoko i bardzo norwesko."],
  ["Kjeragbolten", "Podejście nad Lysefjord i słynny głaz między skałami. Miejsce wymaga skupienia, nie tylko aparatu."],
  ["Preikestolen o świcie", "Kamienny płaskowyż nad fiordem. Najlepiej ruszyć wcześnie, zanim zrobi się tłoczno."]
]);

addPlanVariants("Islandia", [
  ["Kjötsúpa", "Jagnięca zupa z warzywami, dobra po zimnym dniu. Smakuje jak ciepły odpoczynek po wietrze."],
  ["Plokkfiskur", "Ryba z ziemniakami w kremowej wersji. Proste, sycące i bardzo dobre po dni spędzonych na zimnie."],
  ["Skyr z jagodami", "Gęsty skyr, owoce i chrupiące dodatki. Lekki plan na śniadanie przed marszem."],
  ["Zupa z langustynki", "Morska, aromatyczna i rozgrzewająca. Ma w sobie portowy klimat islandzkich miasteczek."],
  ["Rúgbrauð z wędzoną rybą", "Ciemny, lekko słodki chleb i słona ryba. Mały talerz, a bardzo wyrazisty północny smak."]
], [
  ["Laugavegur Trail", "Kolorowe góry, pola lawowe, rzeki i długie marsze. Szlak jest surowy, piękny i bardzo ruchowy."],
  ["Fimmvörðuháls", "Przejście między lodowcami, wodospadami i świeżą lawą. Daje poczucie marszu przez żywą ziemię."],
  ["Glymur", "Podejście do wysokiego wodospadu z przejściami przez rzekę i skały. Krótkie, ale treściwe."],
  ["Reykjadalur", "Dolina pary, gorąca rzeka i lekki trekking. Klimat robi się magiczny nawet przy prostym tempie."],
  ["Landmannalaugar", "Kolorowe ryolitowe wzgórza, lawowe pola i gorące źródła. Idealne na aktywny dzień z surrealnym tłem."]
]);

addPlanVariants("Grecja", [
  ["Moussaka", "Warstwy bakłażana, mięsa lub soczewicy i beszamelu. Idealna potrawa na wolniejsze gotowanie."],
  ["Souvlaki", "Marynowane kawałki mięsa lub warzyw z pitą i sosem tzatziki. Proste, szybkie i wakacyjne."],
  ["Spanakopita", "Chrupiące ciasto filo ze szpinakiem i fetą. Dobre, gdy chcesz coś kruchego i słonego."],
  ["Gemista", "Papryki lub pomidory faszerowane ryżem, ziołami i oliwą. Lekkie, domowe i bardzo śródziemnomorskie."],
  ["Fasolada", "Biała fasola w pomidorach z warzywami i oliwą. Skromna zupa, ale zaskakująco głęboka."]
], [
  ["Wąwóz Samaria na Krecie", "Długi marsz przez skalny korytarz, zejścia po kamieniach i gorące powietrze. Ma świetny rytm wyprawy."],
  ["Olimp, podejście na Skolio", "Górskie ścieżki, kamień i mitologiczny ciężar miejsca. To Grecja w wersji wysokiej i aktywnej."],
  ["Wąwóz Vikos", "Głęboki kanion, kamienne wioski i długie zejścia. Bardzo klimatyczne miejsce dla mocniejszych nóg."],
  ["Meteory, szlaki między klasztorami", "Skalne wieże, schody i widoki jak z innego świata. Ruch miesza się tu z ciszą."],
  ["Menalon Trail", "Peloponeskie góry, lasy i kamienne osady. Mniej oczywisty, bardzo dobry plan na aktywny dzień."]
]);

addPlanVariants("Maroko", [
  ["Tagine z cytryną i oliwkami", "Aromatyczne, wolno duszone danie, które pachnie imbirem, kuminem i kiszoną cytryną."],
  ["Harira", "Zupa z pomidorów, soczewicy i ciecierzycy. Gęsta, ciepła i bardzo dobra na wieczór."],
  ["Kuskus tfaya", "Kuskus z karmelizowaną cebulą, rodzynkami i przyprawami. Ma słodko-słony, świąteczny charakter."],
  ["Zaalouk", "Bakłażan z pomidorami, czosnkiem i kuminem. Prosty dodatek, który potrafi grać pierwsze skrzypce."],
  ["Bastilla z kurczakiem", "Kruche ciasto, przyprawione mięso i migdały. Efektowne, nieoczywiste i bardzo aromatyczne."]
], [
  ["Wąwóz Todra", "Wysokie ściany, ciasne przejścia i okolice dobre na trekking oraz wspinaczkę. Bardzo kinowy teren."],
  ["Jebel Toubkal", "Najwyższy szczyt Atlasu, kamienne podejścia i wysokość. Prosty pomysł, konkretne wykonanie."],
  ["Mgoun Traverse", "Dolina, przełęcze i czerwone góry. Mniej oczywista wyprawa, bardzo dużo marszu."],
  ["Aït Bouguemez", "Zielona dolina w Atlasie, wioski i długie przejścia między grzbietami. Spokojne, ale aktywne."],
  ["Wodospady Akchour", "Ścieżki, kamienie i chłodna woda w górach Rif. Dobry wybór na ruch z oddechem."]
]);

addPlanVariants("Nepal", [
  ["Momo", "Pierogi gotowane na parze z ostrym sosem. Są proste, społeczne i świetne do przygotowania w większej porcji."],
  ["Dal bhat", "Ryż, soczewica, warzywa i pikle. Klasyczne paliwo trekkingowe, które nie udaje niczego skomplikowanego."],
  ["Thukpa", "Rozgrzewająca zupa z makaronem, warzywami i przyprawami. Dobra, gdy dzień ma być górski."],
  ["Sel roti", "Słodki, ryżowy krążek smażony na chrupko. Świetny jako nietypowy deser lub przekąska."],
  ["Aloo tama", "Ziemniaki, pędy bambusa i fasola w kwaśno-pikantnym sosie. Ma bardzo wyraźny, domowy smak."]
], [
  ["Annapurna Circuit", "Wielodniowa trasa przez przełęcze, mosty i wioski. Wymaga tempa, oddechu i cierpliwości do wysokości."],
  ["Everest Base Camp", "Długie dni marszu przez doliny Khumbu i morenowy teren. Sama droga jest tu największym wydarzeniem."],
  ["Langtang Valley", "Las, jakowe pastwiska i szeroka dolina pod lodowcami. Piękne, mocne i trochę spokojniejsze niż klasyki."],
  ["Mardi Himal", "Graniowe podejścia i bliski widok na Machapuchare. Krótsze, ale pełne wrażeń."],
  ["Upper Mustang", "Pustynny krajobraz Himalajów, klify i stare osady. Miejsce ma zupełnie inny rytm niż zielone doliny."]
]);

addPlanVariants("Nowa Zelandia", [
  ["Hangi", "Mięso i warzywa pieczone tradycyjnie w ziemnym piecu. W domowej wersji da się oddać ten dymny, spokojny klimat."],
  ["Seafood chowder", "Kremowa zupa z owocami morza i warzywami. Pachnie wybrzeżem i dobrze pasuje po wietrznym spacerze."],
  ["Kumara wedges", "Pieczone słodkie ziemniaki z przyprawami. Proste, kolorowe i świetne jako baza większego posiłku."],
  ["Pavlova z owocami", "Chrupiąca beza, krem i świeże owoce. Lekki finał dnia, który wygląda bardzo odświętnie."],
  ["Kiwi meat pie", "Mała wytrawna tarta z mięsnym nadzieniem. Wygodna, konkretna i bardzo lokalna w duchu."]
], [
  ["Tongariro Alpine Crossing", "Wulkaniczny krajobraz, strome podejścia i jeziora o nienaturalnych kolorach. Szlak ma mocny rytm przygody."],
  ["Routeburn Track", "Mosty, jeziora i alpejskie przełęcze. Trasa ma filmowy rozmach bez poczucia pośpiechu."],
  ["Abel Tasman kajakiem", "Zatoki, złoty piasek i wiosłowanie między plażami. Ruch jest spokojniejszy, ale bardzo pełny."],
  ["Mueller Hut Route", "Strome schody, skały i widok na lodowce. Krótkie, mocne i z alpejskim finałem."],
  ["Roys Peak", "Długi podejście nad Wanaką i szerokie panoramy jeziora. Prosta trasa, ale uczciwie pracuje w nogach."]
]);

addPlanVariants("Kanada", [
  ["Poutine", "Frytki, sos pieczeniowy i serowe grudki. To comfort food, który robi się bez udawania elegancji."],
  ["Tourtière", "Mięsna tarta z przyprawami. Domowa, sycąca i dobra na chłodniejszy wieczór."],
  ["Butter tarts", "Małe kruche tartaletki z maślanym nadzieniem. Słodkie, proste i bardzo kanadyjskie."],
  ["Bannock", "Prosty chlebek smażony lub pieczony. Działa jako baza do wytrawnych i słodkich dodatków."],
  ["Nanaimo bars", "Warstwowy deser z kremem i czekoladą. Bez pieczenia, ale z dużą porcją przyjemności."]
], [
  ["West Coast Trail", "Błoto, drabiny, plaże, las i ocean. Trasa wymaga równowagi, siły i gotowości na kapryśną pogodę."],
  ["Skyline Trail w Jasper", "Grzbiet ponad lasem, dalekie widoki i alpejska pogoda. Długi marsz w dobrym sensie."],
  ["Garibaldi Lake", "Podejście przez las do turkusowego jeziora pod górami. Klasyk, który broni się sam."],
  ["Gros Morne", "Fiordy, skały i surowy krajobraz Nowej Fundlandii. Dobre dla kogoś, kto lubi pustą przestrzeń."],
  ["Bruce Trail nad klifami", "Wapienne krawędzie, las i jezioro Ontario w tle. Mniej dzikie, ale bardzo ruchowe."]
]);

addPlanVariants("Meksyk", [
  ["Mole poblano", "Gęsty sos z chili, przypraw i kakao. Ma głębię, która robi wrażenie nawet przy małej porcji."],
  ["Tacos al pastor", "Marynowane mięso, ananas, kolendra i cebula. Prosto z ulicznego nastroju, bardzo szybkie do złożenia."],
  ["Chilaquiles", "Tortilla w sosie, jajko lub kurczak i świeże dodatki. Śniadanie, które ma dużo charakteru."],
  ["Pozole rojo", "Gęsta zupa z kukurydzą hominy, chili i dodatkami. Sycąca, świąteczna i mocno aromatyczna."],
  ["Cochinita pibil", "Wolno pieczona wieprzowina z achiote i cytrusami. Najlepsza w tortilli z cebulą."]
], [
  ["Barrancas del Cobre", "Kaniony, wysokość i trasy, które zmieniają skalę krajobrazu. Dobre dla kogoś, kto lubi teren z charakterem."],
  ["Nevado de Toluca", "Krater, jeziora i podejścia na wysokości. Krótkie, mocne i z chłodnym górskim klimatem."],
  ["Pico de Orizaba", "Wulkaniczna wysokość i lodowcowy teren. To już poważna przygoda, wymagająca przygotowania."],
  ["Kanion Sumidero kajakiem", "Strome ściany, woda i dużo pracy ramion. Miejsce robi wrażenie skalą."],
  ["Hierve el Agua", "Kamienne tarasy, ścieżki i suche góry Oaxaca. Aktywny plan z bardzo nietypowym krajobrazem."]
]);

addPlanVariants("Brazylia", [
  ["Feijoada", "Fasolowy gulasz z mięsem, pomarańczą i ryżem. Sycący, społeczny i idealny na dłuższe gotowanie."],
  ["Moqueca", "Ryba lub owoce morza duszone z mlekiem kokosowym i kolendrą. Pachnie wybrzeżem i słońcem."],
  ["Pão de queijo", "Małe serowe bułeczki z manioku. Chrupiące z zewnątrz, miękkie w środku i bardzo łatwe do lubienia."],
  ["Acarajé", "Smażone kulki z fasoli z pikantnym nadzieniem. Bahia w wersji ulicznej i bardzo wyrazistej."],
  ["Brigadeiro", "Czekoladowe kulki z mleka skondensowanego. Mały deser, który znika szybciej."]
], [
  ["Chapada Diamantina", "Wodospady, jaskinie, strome podejścia i naturalne baseny. Miejsce ma dużo ruchu i tropikalny klimat."],
  ["Lençóis Maranhenses", "Wydmy, laguny i marsz przez jasny, falujący krajobraz. Wygląda jak sen po deszczu."],
  ["Pedra da Gávea", "Strome podejście nad Rio i fragmenty wymagające pewności ruchu. Widok ma wielką scenę."],
  ["Ilha Grande do Lopes Mendes", "Leśny szlak do jednej z najpiękniejszych plaż. Prosto, ale z przyjemnym wysiłkiem."],
  ["Park Itatiaia", "Górskie granie, kamienie i mgły. Mniej oczywista Brazylia, bardzo dobra dla aktywnych."]
]);

addPlanVariants("RPA", [
  ["Bobotie", "Zapiekanka z mięsa, przypraw i jajecznej warstwy. Słodko-pikantna, miękka i bardzo domowa."],
  ["Bunny chow", "Chleb wypełniony aromatycznym curry. Konkretne, uliczne i bez zbędnej elegancji."],
  ["Braai", "Grill w południowoafrykańskim stylu. Najlepiej działa z prostymi dodatkami i spokojnym tempem."],
  ["Chakalaka", "Pikantne warzywa z fasolą, dobre jako dodatek albo baza posiłku. Kolorowe i energetyczne."],
  ["Malva pudding", "Ciepły, miękki deser z sosem. Słodki finał po aktywnym dniu."]
], [
  ["Drakensberg Amphitheatre", "Górski mur, łańcuchowe drabinki i potężne panoramy. To wyprawa dla nóg oraz głowy."],
  ["Table Mountain, India Venster", "Skalne odcinki i widok na Kapsztad. Trasa wymaga rąk, nóg i rozsądku."],
  ["Cederberg, Wolfberg Arch", "Piaskowcowe formacje, suchy teren i dużo marszu. Bardzo klimatyczne miejsce."],
  ["Otter Trail", "Wybrzeże, las, rzeki i skały. Wielodniowy klasyk, który naprawdę angażuje ciało."],
  ["Blyde River Canyon", "Zielony kanion, punkty widokowe i ścieżki po krawędziach. Dobry plan na aktywny dzień."]
]);

addPlanVariants("Włochy", [
  ["Risotto ai funghi", "Kremowy ryż z grzybami i parmezanem. Wymaga mieszania, ale odwdzięcza się pełnym, leśnym aromatem."],
  ["Pasta alla Norma", "Makaron z bakłażanem, pomidorami i ricottą salata. Sycylijski smak bez przesady."],
  ["Ribollita", "Toskańska zupa z chleba, fasoli i warzyw. Skromna, gęsta i bardzo dobra następnego dnia."],
  ["Polenta con funghi", "Kremowa polenta z grzybami. Prosta, górska i idealna na chłodniejsze popołudnie."],
  ["Focaccia genovese", "Puszyste ciasto z oliwą i solą. Dobra sama, a jeszcze lepsza jako baza do dodatków."]
], [
  ["Via ferrata w Dolomitach", "Metalowe liny, ekspozycja i skalne przejścia. To miejsce, gdzie koordynacja ruchowa naprawdę ma znaczenie."],
  ["Sentiero degli Dei", "Ścieżka nad Amalfi z widokiem na morze i skały. Nie jest ekstremalna, ale pięknie pracuje w nogach."],
  ["Gran Paradiso", "Alpejski teren, wysokość i lodowcowy klimat. Wymaga przygotowania i szacunku do pogody."],
  ["Cinque Terre pieszo", "Schody, winnice, klify i małe miasteczka. Ruch z widokiem na morze."],
  ["Stromboli po zmroku", "Podejście na wulkan i noc w ruchomym pyle. Miejsce ma surowy, żywy charakter."]
]);

addPlanVariants("Hiszpania", [
  ["Tortilla española", "Omlet ziemniaczany z cebulą. Prosty, tani i genialny wtedy, gdy ma miękki środek."],
  ["Paella valenciana", "Ryż, szafran, warzywa i mięso lub owoce morza. Najlepiej gotowana spokojnie, bez pośpiechu."],
  ["Gazpacho", "Chłodnik z pomidorów, papryki i oliwy. Lekki, świeży i idealny na gorący dzień."],
  ["Patatas bravas", "Ziemniaki z pikantnym sosem i aioli. Proste tapas, które łatwo zrobić dla kilku osób."],
  ["Fabada asturiana", "Gęsty gulasz z fasoli i wędlin. Północna, cięższa Hiszpania w najlepszym wydaniu."]
], [
  ["Caminito del Rey", "Kładki nad wąwozem, ściany skalne i sporo ekspozycji. Trasa robi wrażenie nawet bez ekstremalnego tempa."],
  ["Ruta del Cares", "Wąwóz w Picos de Europa, półki skalne i długi marsz z panoramami. Bardzo dobry aktywny klasyk."],
  ["Montserrat", "Zębate skały, schody i ścieżki między formacjami. Blisko miasta, ale klimat jest górski."],
  ["Teide", "Wulkaniczny krajobraz Teneryfy i wysokość, którą czuć w oddechu. Dobre miejsce na mocny dzień."],
  ["GR221 na Majorce", "Kamienne ścieżki, góry Tramuntana i widoki na morze. Bardzo przyjemna, dłuższa wyprawa."]
]);

addPlanVariants("Francja", [
  ["Ratatouille", "Warzywa duszone z ziołami. Kolorowe, lekkie i dobre jako danie, które smakuje latem."],
  ["Quiche Lorraine", "Kruchy spód, jajeczny krem i boczek lub warzywa. Dobra potrawa do podania na ciepło albo zimno."],
  ["Tartiflette", "Ziemniaki, ser reblochon, cebula i boczek. Alpejska, cięższa i bardzo dobra po wysiłku."],
  ["Galettes bretonnes", "Gryczane naleśniki z wytrawnym nadzieniem. Proste, eleganckie i bardzo elastyczne."],
  ["Bouillabaisse", "Zupa rybna z Prowansji, pełna ziół i morskiego aromatu. Wymaga czasu, ale robi wrażenie."]
], [
  ["Calanques koło Marsylii", "Białe skały, zejścia do zatok i ścieżki nad morzem. Dobre połączenie trekkingu, skały i światła."],
  ["Tour du Mont Blanc", "Długa pętla przez alpejskie przełęcze i doliny. Klasyk, który naprawdę wymaga regularnego kroku."],
  ["GR20 na Korsyce", "Skalny, wymagający szlak przez góry wyspy. To jedna z mocniejszych europejskich propozycji."],
  ["Wąwóz Verdon", "Turkusowa rzeka, ściany skalne i ścieżki z ekspozycją. Bardzo filmowy teren."],
  ["Mer de Glace i Montenvers", "Alpejskie schody, lód i wysokogórski klimat. Aktywny dzień z dużym widokiem."]
]);

addPlanVariants("Turcja", [
  ["Mantı", "Małe pierożki z jogurtem czosnkowym i masłem z papryką. Dużo pracy, dużo satysfakcji."],
  ["Lahmacun", "Cienki placek z przyprawionym mięsem, ziołami i cytryną. Szybki, aromatyczny i świetny do zawijania."],
  ["Menemen", "Jajka z pomidorami, papryką i przyprawami. Proste śniadanie, które może być całym planem."],
  ["İmam bayıldı", "Bakłażan duszony z cebulą, pomidorami i oliwą. Miękki, aromatyczny i bardzo śródziemnomorski."],
  ["Mercimek çorbası", "Zupa z czerwonej soczewicy, cytryny i przypraw. Szybka, ciepła i bardzo wdzięczna."]
], [
  ["Lycian Way", "Długie odcinki nad morzem, starożytne ruiny i kamienne ścieżki. Trasa ma tempo wyprawy, nie spaceru."],
  ["Dolinami Kapadocji", "Tufowe formacje, tunele i falujące ścieżki. Ruch miesza się z krajobrazem jak z baśni."],
  ["Kaçkar Mountains", "Zielone doliny, wysokie przełęcze i wilgotne góry nad Morzem Czarnym. Bardzo aktywna Turcja."],
  ["Ararat", "Wysokość, długie podejście i surowy wulkaniczny teren. To plan dla przygotowanych."],
  ["Wąwóz Saklıkent", "Woda, kamienie i wąski kanion. Dobre miejsce na ruch, równowagę i chłód w upale."]
]);

addPlanVariants("Gruzja", [
  ["Chaczapuri adżarskie", "Łódka z ciasta, sera, masła i jajka. Efektowna, konkretna i świetna do podania od razu z pieca."],
  ["Chinkali", "Duże pierogi z bulionem w środku. Jedzenie wymaga techniki, więc jest w tym trochę zabawy."],
  ["Lobio", "Gęsta fasola z przyprawami i ziołami. Skromna, rozgrzewająca i świetna z chlebem."],
  ["Chakhokhbili", "Kurczak duszony z pomidorami, cebulą i ziołami. Aromatyczny domowy klasyk."],
  ["Ajapsandali", "Warzywny gulasz z bakłażanem, papryką i kolendrą. Lekki, ale pełny smaku."]
], [
  ["Kazbek i okolice Stepancmindy", "Podejścia, lodowcowy klimat i szerokie widoki Kaukazu. Ruch jest tu częścią atmosfery."],
  ["Mestia do Ushguli", "Kilka marszu przez swańskie wioski, wieże i góry. Jeden z piękniejszych trekkingów Kaukazu."],
  ["Borjomi-Kharagauli", "Leśne ścieżki, grzbiety i spokojniejsze góry. Dobry wybór na aktywny, mniej oczywisty dzień."],
  ["Tuszetia", "Surowe drogi, kamienne osady i dzikie przełęcze. Klimat mocno wyprawowy."],
  ["Kanion Okatse", "Kładki, wysokość i zielony kanion. Krótsze, ale z fajną porcją ekspozycji."]
]);

addPlanVariants("Wietnam", [
  ["Bún chả", "Grillowana wieprzowina, makaron ryżowy, zioła i sos. Świeże, pachnące i bardzo miejskie."],
  ["Phở bò", "Aromatyczny bulion, makaron ryżowy, wołowina i zioła. Klasyk, który robi dzień od pierwszej łyżki."],
  ["Gỏi cuốn", "Świeże spring rolls z ziołami, makaronem i sosem. Lekkie, chrupiące i dobre do składania przy stole."],
  ["Bánh xèo", "Chrupiący naleśnik z kurkumą, kiełkami i dodatkami. Ma świetny kontrast tekstur."],
  ["Cao lầu", "Makaron z Hội An z mięsem, ziołami i chrupiącymi dodatkami. Mniej oczywisty, bardzo lokalny smak."]
], [
  ["Pętla Hà Giang", "Górskie serpentyny, przełęcze i widoki na tarasy ryżowe. Najlepiej dla osób lubiących aktywny teren."],
  ["Fansipan", "Strome podejścia i wilgotny górski las. Najwyższy punkt Wietnamu potrafi dać w kość."],
  ["Jaskinia Hang En", "Trekking przez dżunglę, rzeki i ogromną jaskinię. Miejsce ma przygodowy rozmach."],
  ["Cat Ba kajakiem", "Wiosłowanie między wapiennymi skałami i zatokami. Ruch jest płynny, a widoki bardzo filmowe."],
  ["Pu Luong", "Tarasy ryżowe, kładki i zielone doliny. Spokojniejszy, ale bardzo klimatyczny aktywny dzień."]
]);

addPlanVariants("Tajlandia", [
  ["Pad thai", "Makaron ryżowy z jajkiem, tofu lub krewetkami, tamaryndem i orzeszkami. Szybki, jasny i satysfakcjonujący."],
  ["Tom yum", "Ostra, kwaśna zupa z trawą cytrynową i chili. Pobudza lepiej niż mocna kawa."],
  ["Khao soi", "Kremowe curry z makaronem i chrupiącą posypką. Północna Tajlandia w bardzo przytulnej wersji."],
  ["Som tam", "Sałatka z zielonej papai, limonki i chili. Świeża, ostra i bardzo energetyczna."],
  ["Massaman curry", "Łagodne curry z ziemniakami, orzeszkami i przyprawami. Gęste, aromatyczne i domowe."]
], [
  ["Wspinanie w Railay", "Wapienne ściany nad wodą, plaża i dużo pracy całym ciałem. Klimat jest mocny od pierwszego kroku."],
  ["Doi Inthanon", "Górskie ścieżki, wodospady i chłodniejsze powietrze. Dobry aktywny plan na północ kraju."],
  ["Wodospady Erawan", "Kaskady, kamienie i przejścia między poziomami. Ruch jest przyjemny, ale trzeba uważać na śliskie miejsca."],
  ["Khao Sok", "Dżungla, jezioro i ścieżki w wilgotnym lesie. Bardzo klimatyczne, bardzo zielone."],
  ["Rowerem wokół Chiang Mai", "Podjazdy, świątynie i drogi poza miastem. Daje ruch bez tracenia lokalnego nastroju."]
]);

addPlanVariants("Indonezja", [
  ["Gado-gado", "Warzywa, jajko, tofu i sos orzechowy. Kolorowe, sycące i łatwe do złożenia po swojemu."],
  ["Nasi goreng", "Smażony ryż z jajkiem, warzywami i słodkim sosem sojowym. Szybkie, konkretne i bardzo wdzięczne."],
  ["Rendang", "Wolno gotowane mięso w mleku kokosowym i przyprawach. Głębokie, intensywne i warte cierpliwości."],
  ["Soto ayam", "Żółta zupa z kurczakiem, ryżem i ziołami. Lekka, ale rozgrzewająca."],
  ["Sate lilit", "Balijskie szaszłyki z mielonego mięsa lub ryby i przypraw. Dobre na grillowy klimat."]
], [
  ["Wejście na Mount Batur", "Start przed świtem, podejście po wulkanicznym gruncie i wschód słońca nad kalderą. Proste, ale magiczne."],
  ["Rinjani", "Wielodniowy trekking na wulkanie Lomboku, jezioro w kraterze i mocne podejścia. Bardzo konkretny wysiłek."],
  ["Ijen o świcie", "Noc na siarkowy krater i niebieski ogień. Surowe miejsce, wymagające ostrożności."],
  ["Komodo trekking", "Suchy krajobraz, wzgórza i widoki na wyspy. Krótsze, ale z mocnym charakterem."],
  ["Raja Ampat kajakiem", "Wiosłowanie między wyspami, laguny i rafy. Ruch jest spokojny, krajobraz spektakularny."]
]);

addPlanVariants("Indie", [
  ["Masala dosa", "Chrupiący naleśnik z fermentowanego ciasta, ziemniakami i chutneyem. Lekki, ostry i bardzo satysfakcjonujący."],
  ["Chole bhature", "Ciecierzyca w gęstym sosie i puszyste smażone pieczywo. Konkretne, uliczne i bardzo sycące."],
  ["Biryani", "Ryż z przyprawami, mięsem lub warzywami i ziołami. Wymaga uwagi, ale pachnie niesamowicie."],
  ["Palak paneer", "Ser paneer w kremowym szpinakowym sosie. Zielone, łagodne i świetne z ryżem."],
  ["Poha", "Płatki ryżowe z kurkumą, orzeszkami i limonką. Lekkie śniadanie z dużą ilością smaku."]
], [
  ["Dolina Kwiatów w Himalajach", "Podejścia, wysokość i alpejskie łąki. Trzeba iść uważnie, ale nagroda jest wyjątkowo barwna."],
  ["Markha Valley", "Suchy Ladakh, klasztory i wysokie przełęcze. Długie marsze i wiele panoram."],
  ["Hampta Pass", "Zielone doliny, kamienne podejścia i nagła zmiana krajobrazu za przełęczą. Bardzo ruchowy plan."],
  ["Mosty korzeniowe Meghalaya", "Wilgotny las, schody i żywe mosty z korzeni. Miejsce wygląda jak naturalna architektura."],
  ["Sandakphu", "Graniowy trekking z widokiem na najwyższe góry świata. Wymaga tempa i pogody."]
]);

addPlanVariants("Kenia", [
  ["Nyama choma", "Grillowane mięso z prostymi dodatkami. Najlepiej działa jako posiłek bez pośpiechu i z dużą porcją świeżości."],
  ["Ugali z sukuma wiki", "Kukurydziana baza i duszona zielenina. Proste paliwo na aktywny dzień."],
  ["Githeri", "Kukurydza, fasola i warzywa w sycącej wersji. Domowe, tanie i bardzo konkretne."],
  ["Pilau", "Ryż z przyprawami i mięsem lub warzywami. Pachnący, ciepły i dobry do większego garnka."],
  ["Mandazi", "Lekko słodkie smażone ciastka. Dobre jako przekąska przed ruchem albo po nim."]
], [
  ["Mount Longonot", "Podejście na krater i marsz granią. Jest pył, wysokość i mocny widok na Wielki Rów Afrykański."],
  ["Mount Kenya", "Wysokogórskie podejścia, doliny i techniczniejsze fragmenty. To już poważniejsza przygoda."],
  ["Hell's Gate rowerem", "Rower między skałami i sawanną, z pieszymi fragmentami w wąwozie. Bardzo aktywne i nietypowe."],
  ["Aberdare waterfalls", "Leśne ścieżki, wodospady i wilgotne podejścia. Zielony kontrast dla sawanny."],
  ["Ngong Hills", "Grzbiet nad Nairobi, wiatr i seria podejść. Prosty, ale bardzo ruchowy plan."]
]);

addPlanVariants("Jordania", [
  ["Mansaf", "Jagnięcina z ryżem i sosem jogurtowym. Potrawa uroczysta, aromatyczna i bardzo konkretna."],
  ["Maqluba", "Ryż, warzywa i mięso odwracane z garnka na półmisek. Efektowne, domowe i sycące."],
  ["Falafel", "Chrupiące kulki z ciecierzycy lub bobu. Proste, świetne z tahiną i świeżymi dodatkami."],
  ["Mujadara", "Soczewica, ryż i karmelizowana cebula. Skromna potrawa, która ma zaskakująco dużo głębi."],
  ["Shorbat adas", "Zupa z czerwonej soczewicy z cytryną i kuminem. Szybka, ciepła i bardzo kojąca."]
], [
  ["Kanioning w Wadi Mujib", "Woda, skały, liny i przejścia przez wąski kanion. Tu liczy się koordynacja, chwyt i spokój."],
  ["Petra Back Trail", "Schody, skały i wejście do Petry od mniej oczywistej strony. Miejsce buduje napięcie krokiem po kroku."],
  ["Dana Biosphere Reserve", "Pustynne ścieżki, wąwozy i zmienne kolory skał. Bardzo dobry aktywny dzień."],
  ["Wadi Rum scrambling", "Piaskowiec, łuki skalne i krótk wspinania po formacjach. Klimat jest filmowy i surowy."],
  ["Jordan Trail", "Długie odcinki przez pustynię, kaniony i wioski. To propozycja w trybie wyprawowym."]
]);

addPlanVariants("Chile", [
  ["Pastel de choclo", "Zapiekanka z kukurydzy, mięsa, oliwek i jajka. Słodko-słona, domowa i bardzo charakterystyczna."],
  ["Cazuela", "Bulion z mięsem, dynią, kukurydzą i ziemniakami. Prosta zupa, dobra po chłodnym dniu."],
  ["Chorrillana", "Frytki, mięso, cebula i jajko. Bez udawania lekkości, za to z pełną energią."],
  ["Curanto", "Mięso, owoce morza i ziemniaki w wyspiarskim stylu. Najlepiej smakuje jako wspólny, duży posiłek."],
  ["Sopaipillas", "Smażone placki z dynią, dobre na słono lub słodko. Mały, ciepły akcent dnia."]
], [
  ["Torres del Paine", "Wiatr, granitowe wieże, mostki i długie odcinki marszu. Patagonia nie udaje, że będzie lekko."],
  ["Wulkan Villarrica", "Podejście po śniegu i wulkanicznym terenie. Wymaga przewodnika, sprzętu i gotowości na pogodę."],
  ["Valle de la Luna rowerem", "Pustynne formacje, sól i zachód słońca nad Atacamą. Ruch w krajobrazie jak z innej planety."],
  ["Cerro Castillo", "Strome podejścia, laguny i ostre patagońskie szczyty. Mniej znane, bardzo mocne."],
  ["Cochamó", "Granitowe ściany, las i długie podejścia. Klimat trochę jak Yosemite, ale bardziej dziki."]
]);

addPlanVariants("Argentyna", [
  ["Empanadas", "Pieczone pierożki z mięsem, serem lub warzywami. Dobre do eksperymentowania i podania w serii."],
  ["Asado", "Powolne grillowanie mięsa z prostymi dodatkami. To bardziej rytuał niż szybki obiad."],
  ["Locro", "Gęsty gulasz z kukurydzy, fasoli i mięsa. Rozgrzewający i bardzo południowoamerykański."],
  ["Milanesa", "Panierowany kotlet w argentyńskim stylu. Prosty, rodzinny i świetny z cytryną."],
  ["Humita", "Kukurydziana masa z serem i przyprawami, często zawijana w liście. Miękka, słodkawa i domowa."]
], [
  ["Laguna de los Tres pod Fitz Roy", "Długi marsz z mocnym finałowym podejściem. Widok na masyw jest nagrodą za każdy krok."],
  ["Aconcagua Base Camp", "Wysokość, pusty krajobraz i długie podejście w stronę najwyższego szczytu Ameryk. Mocny plan bez szczytowej presji."],
  ["Quebrada de Humahuaca", "Kolorowe góry, suche powietrze i ścieżki między formacjami. Bardzo inna Argentyna."],
  ["Nahuel Huapi", "Jeziora, lasy i grzbiety wokół Bariloche. Aktywny dzień z alpejskim nastrojem."],
  ["Iguazú, górne i dolne ścieżki", "Mostki, para wodna i huk wodospadów. Dużo chodzenia w bardzo intensywnej scenerii."]
]);

addPlanVariants("Stany Zjednoczone", [
  ["Gumbo", "Gęsty gulasz z Luizjany z ciemną zasmażką, warzywami i przyprawami. Wolny ogień robi tu całą robotę."],
  ["Chili con carne", "Fasola, mięso lub warzywa, chili i długie duszenie. Konkretne, rozgrzewające i łatwe do doprawienia."],
  ["Jambalaya", "Ryż z przyprawami, warzywami i mięsem lub owocami morza. Luizjana w jednym garnku."],
  ["Clam chowder", "Kremowa zupa z małżami i ziemniakami. Nadmorski comfort food w białej, gęstej wersji."],
  ["BBQ pulled pork", "Wolno pieczona wieprzowina z sosem i surówką. Dobra, gdy jedzenie ma mieć dymny charakter."]
], [
  ["The Narrows w Zion", "Marsz korytem rzeki między ścianami kanionu. Trzeba uważać na równowagę, wodę i tempo."],
  ["Half Dome w Yosemite", "Długie podejście, granit i finał przy linach. Wymaga pozwolenia, kondycji i chłodnej głowy."],
  ["Grand Canyon rim-to-rim", "Ogromny kanion, wielka różnica wysokości i brutalna zmiana wysokości. Klasyk dla mocnych nóg."],
  ["Angels Landing", "Grzbiet, ekspozycja i odcinki z łańcuchami. Krótsze, ale bardzo intensywne."],
  ["Beehive Trail w Acadii", "Drabinki, skały i widok na ocean. Małe miejsce z dużą dawką koordynacji."]
]);

addPlanVariants("Polska", [
  ["Pierogi ruskie", "Ciasto, ziemniaki, twaróg i cebula. Klasyk, który nadal potrafi być najlepszym planem na wieczór."],
  ["Żurek", "Kwaśna zupa na zakwasie z jajkiem i kiełbasą albo grzybami. Rozgrzewająca i bardzo swojska."],
  ["Placki ziemniaczane", "Chrupiące brzegi, miękki środek i dodatki według nastroju. Proste, ale wciągające."],
  ["Gołąbki", "Kapusta, farsz i sos pomidorowy. Domowy klasyk, który najlepiej działa w większej porcji."],
  ["Bigos", "Kapusta, grzyby, przyprawy i długie gotowanie. Danie, które lubi cierpliwość."]
], [
  ["Orla Perć w Tatrach", "Łańcuchy, ekspozycja, skała i konieczność skupienia. To propozycja dla doświadczonych, nie spacerowa atrakcja."],
  ["Błędne Skały", "Wąskie przejścia, labirynt skalny i dużo skrętów ciałem. Krótsze, ale bardzo klimatyczne."],
  ["Sokole Góry", "Wapienne skały, ścieżki i miejsca dobre do wspinania. Aktywny plan blisko Jury."],
  ["Babia Góra przez Perć Akademików", "Strome podejście, łańcuchy i zmienna pogoda. Mały sprawdzian kondycji i rozsądku."],
  ["Spływ przełomem Dunajca", "Ruch na wodzie, skały Pienin i spokojniejszy rytm przygody. Mniej wspinania, więcej koordynacji."]
]);

addPlanVariants("Portugalia", [
  ["Bacalhau à Brás", "Dorsz, ziemniaki, jajko i oliwki. Słone, kremowe i świetne, gdy chcesz zrobić coś prostego, ale innego."],
  ["Caldo verde", "Zupa z jarmużu, ziemniaków i oliwy. Skromna, zielona i bardzo kojąca."],
  ["Francesinha", "Kanapka z mięsem, serem i gęstym sosem. Porto w wersji bez kompromisów."],
  ["Arroz de marisco", "Ryż z owocami morza w wilgotnej, aromatycznej wersji. Pachnie oceanem."],
  ["Pastéis de nata", "Kruche babeczki z kremem budyniowym. Mały deser, który robi bardzo dużo."]
], [
  ["Madeira, szlak PR1", "Grań między Pico do Arieiro i Pico Ruivo. Są tunele, schody, chmury i mocna praca nóg."],
  ["Fishermen's Trail", "Klify, piasek i atlantycki wiatr. Długi marsz z morzem cały czas obok."],
  ["Peneda-Gerês", "Granity, wodospady i stare ścieżki pasterskie. Bardzo dobry teren na aktywny dzień."],
  ["Cabo da Roca i klify", "Krawędź kontynentu, ścieżki nad oceanem i wiatr. Prosto, ale z wielkim nastrojem."],
  ["São Miguel, Lagoa do Fogo", "Wulkaniczne jezioro, zielone zbocza i wilgotne podejścia. Azory w pełnej formie."]
]);

addPlanVariants("Słowenia", [
  ["Potica", "Zawijane ciasto z orzechowym nadzieniem. Wymaga cierpliwości, ale wygląda jak małe święto na stole."],
  ["Jota", "Kwaśna zupa z fasolą, ziemniakami i kapustą. Górska, prosta i bardzo rozgrzewająca."],
  ["Štruklji", "Roladki z ciasta z twarogowym lub słodkim nadzieniem. Delikatne, domowe i wdzięczne."],
  ["Idrijski žlikrofi", "Małe pierożki ziemniaczane z charakterystycznym kształtem. Dobry plan na coś lokalnego i ręcznego."],
  ["Kranjska klobasa", "Kiełbasa z prostymi dodatkami. Konkretna klasyka po aktywnym dniu."]
], [
  ["Triglav", "Skalne odcinki, ferratowe elementy i wysokość. Mały kraj, bardzo konkretna górska energia."],
  ["Soča kajakiem", "Turkusowa rzeka, prąd i praca całym ciałem. Daje dużo ruchu i świetny kolor w głowie."],
  ["Przełęcz Vršič", "Serpentyny, ścieżki i alpejskie widoki. Dobre miejsce na marsz lub rowerowy wysiłek."],
  ["Jaskinie Škocjan", "Podziemny kanion, mosty i ogromna przestrzeń. Mniej sportowe, ale bardzo ruchowe i klimatyczne."],
  ["Velika Planina", "Pastwiska, drewniane chaty i miękkie górskie podejścia. Łagodniejszy, piękny dzień."]
]);

addPlanVariants("Korea Południowa", [
  ["Bibimbap", "Ryż, warzywa, jajko, pasta gochujang i dużo koloru. Idealne danie do składania z tego, co masz pod ręką."],
  ["Kimchi jjigae", "Ostry gulasz z kimchi, tofu i wieprzowiną albo grzybami. Rozgrzewa od pierws łyżki."],
  ["Bulgogi", "Marynowana wołowina smażona szybko z warzywami. Słodko-słona, bardzo wdzięczna i efektowna."],
  ["Tteokbokki", "Ryżowe kluski w pikantnym sosie gochujang. Uliczne, sprężyste i mocno energetyczne."],
  ["Japchae", "Szklany makaron z warzywami i sezamem. Lekki, kolorowy i dobry na wspólne gotowanie."]
], [
  ["Seoraksan", "Granitowe szczyty, schody, świątynie i jesienne kolory. Trasy potrafią dać w kość."],
  ["Hallasan", "Wulkan na Jeju, długie podejścia i zmienna pogoda. Widok z krateru jest nagrodą."],
  ["Bukhansan", "Skały nad Seulem, stopnie i krótkie fragmenty ekspozycji. Górski wysiłek praktycznie przy metrze."],
  ["Jirisan ridge", "Długi grzbiet, lasy i schroniska. Bardzo dobry plan dla kogoś, kto chce wejść głębiej w góry."],
  ["Jeju Olle Trail", "Wybrzeże, lawowe skały i spokojny marsz między wioskami. Mniej ostro, bardzo klimatycznie."]
]);

addPlanVariants("Egipt", [
  ["Koshari", "Ryż, makaron, soczewica, ciecierzyca i pikantny sos pomidorowy. Tanie, sycące i pełne kontrastów."],
  ["Ful medames", "Bób z oliwą, cytryną i przyprawami. Proste śniadanie, które trzyma energię długo."],
  ["Molokhia", "Zielona zupa z liści molokhii, czosnku i bulionu. Nietypowa tekstura, bardzo lokalny smak."],
  ["Hawawshi", "Chleb wypełniony przyprawionym mięsem i pieczony na chrupko. Konkretny uliczny klimat."],
  ["Taameya", "Egipska wersja falafela z bobu. Chrupiąca, zielona i świetna z tahiną."]
], [
  ["Sinai Trail", "Pustynne przejścia, skalne doliny i długie marsze z przewodnikami. Cisza robi tu ogromne wrażenie."],
  ["Góra Synaj o świcie", "Noc podejścia pod gwiazdami i chłodny finał na szczycie. Proste, ale bardzo nastrojowe."],
  ["Biała Pustynia", "Kredowe formacje, marsz i noc pod niebem. Miejsce wygląda jak inna planeta."],
  ["Wadi Degla", "Wąwóz blisko Kairu, skały i suche ścieżki. Dobry szybki plan na ruch."],
  ["Kolorowy Kanion", "Wąskie przejścia, barwne ściany i piasek pod stopami. Kró, ale z fajnym poczuciem odkrywania."]
]);

addPlanVariants("Australia", [
  ["Meat pie", "Mała wytrawna tarta z mięsnym nadzieniem. Domowa wersja potrafi być świetnie chrupiąca i wygodna w podaniu."],
  ["Lamington", "Biszkopt w czekoladzie i kokosie. Słodki, prosty i bardzo dobry do kawy."],
  ["Barramundi z limonką", "Ryba o delikatnym mięsie, dobra z cytrusem i świeżymi dodatkami. Lekki plan po ciepłym dniu."],
  ["Chicken parmigiana", "Panierowany kurczak z sosem pomidorowym i serem. Pubowy klasyk w domowej wersji."],
  ["Damper", "Prosty chleb pieczony z kilku składników. Dobrze pasuje do ogniska, zupy albo masła."]
], [
  ["Blue Mountains canyoning", "Zjazdy, mokre przejścia i piaskowcowe kaniony. Dobre dla osób, które chcą ruchu całym ciałem."],
  ["Overland Track", "Tasmania, bagna, góry i długie odcinki marszu. Szlak ma dziki, surowy rytm."],
  ["Larapinta Trail", "Czerwone góry, pustynny marsz i ogrom przestrzeni. Wymaga wody, planu i dobrego tempa."],
  ["Grampians scrambling", "Skalne ścieżki, punkty widokowe i fragmenty wymagające rąk. Bardzo aktywny dzień."],
  ["Cradle Mountain", "Górskie jeziora, skały i zmienna pogoda. Tasmania w kompaktowej, mocnej formie."]
]);

const refinedCountryShapes = {
  "Japonia": [[129.5, 31.2], [131.4, 33.1], [133.4, 34.1], [135.9, 34.4], [138.5, 36.2], [140.7, 38.8], [142.6, 41.4], [145.3, 43.6], [144.1, 45.2], [140.8, 43.4], [138.5, 39.8], [136.2, 36.1], [133.1, 34.6], [130.2, 32.4]],
  "Peru": [[-81.3, -4.2], [-76.4, -2.8], [-70.2, -3.7], [-69.1, -8.2], [-70.5, -13.7], [-69.7, -17.8], [-73.7, -18.3], [-77.8, -13.1], [-80.8, -8.5]],
  "Norwegia": [[5.0, 58.0], [7.6, 59.1], [6.1, 61.2], [8.7, 63.1], [11.8, 64.8], [13.5, 67.2], [18.2, 68.6], [21.8, 70.8], [26.4, 71.1], [30.6, 69.8], [25.1, 68.2], [20.4, 66.1], [16.3, 63.4], [12.3, 60.2], [10.8, 58.4]],
  "Islandia": [[-24.5, 64.0], [-22.2, 65.2], [-18.7, 66.5], [-14.3, 65.8], [-13.4, 64.4], [-16.4, 63.4], [-20.4, 63.1], [-23.3, 63.5]],
  "Grecja": [[19.4, 40.1], [20.7, 39.0], [22.8, 40.4], [24.2, 41.4], [26.6, 41.0], [28.0, 39.2], [26.0, 38.3], [24.6, 36.2], [22.8, 37.1], [21.2, 36.4], [20.2, 38.1]],
  "Maroko": [[-13.1, 27.7], [-9.7, 29.0], [-6.8, 29.2], [-2.0, 31.0], [-1.1, 34.7], [-5.2, 35.9], [-8.8, 34.7], [-10.9, 31.8], [-13.0, 29.8]],
  "Nepal": [[80.1, 28.0], [81.9, 29.2], [84.0, 28.8], [86.1, 29.5], [88.2, 27.9], [87.2, 26.6], [84.7, 27.0], [82.0, 26.5], [80.1, 27.1]],
  "Nowa Zelandia": [[166.5, -46.8], [168.6, -44.2], [171.2, -43.5], [173.0, -41.4], [174.5, -39.6], [176.8, -37.4], [178.5, -36.2], [177.2, -38.8], [175.0, -41.0], [173.4, -43.8], [170.8, -45.7], [168.2, -47.2]],
  "Kanada": [[-141.0, 59.7], [-132.0, 54.8], [-124.8, 49.0], [-111.0, 49.1], [-96.0, 49.0], [-83.0, 46.7], [-68.5, 47.7], [-54.8, 52.2], [-59.8, 58.0], [-78.0, 62.0], [-94.0, 68.3], [-113.0, 70.3], [-132.0, 69.0], [-141.0, 64.0]],
  "Meksyk": [[-117.1, 32.5], [-111.0, 31.4], [-106.0, 28.2], [-101.0, 25.5], [-96.5, 22.5], [-91.0, 20.8], [-86.7, 21.2], [-88.7, 17.2], [-94.0, 15.0], [-99.8, 16.0], [-105.0, 18.8], [-110.5, 23.8], [-114.4, 27.8]],
  "Brazylia": [[-73.8, -7.6], [-66.0, 1.3], [-52.4, 4.4], [-42.0, 1.0], [-34.8, -7.0], [-39.0, -17.0], [-44.5, -23.0], [-50.2, -30.2], [-57.5, -33.9], [-64.3, -23.6], [-70.0, -15.0]],
  "RPA": [[16.4, -28.5], [19.5, -34.7], [25.6, -34.8], [30.8, -31.4], [32.9, -26.3], [29.2, -22.3], [24.2, -25.0], [20.3, -24.8]],
  "Włochy": [[7.1, 44.4], [9.7, 46.5], [13.2, 46.0], [15.2, 43.0], [13.5, 41.2], [16.3, 39.7], [17.2, 37.2], [15.0, 37.8], [12.7, 41.6], [10.5, 43.0], [8.1, 43.7]],
  "Hiszpania": [[-9.5, 43.2], [-7.0, 36.9], [-1.7, 36.1], [3.1, 41.6], [0.6, 43.6], [-4.4, 43.8]],
  "Francja": [[-5.0, 48.5], [-1.6, 43.1], [3.2, 42.5], [7.7, 44.1], [7.4, 49.3], [2.0, 51.1]],
  "Turcja": [[26.0, 40.2], [29.3, 41.4], [35.2, 41.0], [42.8, 39.7], [44.7, 37.4], [39.8, 36.2], [33.8, 36.8], [28.1, 36.1], [26.1, 38.4]],
  "Gruzja": [[39.9, 42.0], [42.2, 43.5], [46.4, 42.8], [46.7, 41.4], [44.0, 41.1], [41.2, 41.4]],
  "Wietnam": [[102.2, 22.4], [105.2, 22.8], [107.8, 20.4], [106.0, 17.2], [108.9, 13.1], [109.4, 10.4], [106.4, 8.4], [104.3, 10.6], [105.6, 15.4], [103.9, 19.0]],
  "Tajlandia": [[97.4, 19.8], [100.1, 20.8], [104.7, 17.8], [103.4, 14.2], [100.7, 12.4], [100.2, 6.3], [98.5, 8.2], [99.3, 13.5], [97.8, 16.7]],
  "Indonezja": [[95.0, 5.5], [101.5, 1.2], [106.5, -6.1], [114.8, -8.7], [122.0, -4.6], [132.0, -3.0], [141.0, -7.9], [137.5, -1.2], [127.6, 1.6], [118.0, 0.3], [108.4, 2.0], [99.0, 4.8]],
  "Indie": [[68.2, 23.8], [72.8, 8.1], [78.3, 8.6], [82.2, 16.8], [88.7, 21.9], [88.0, 26.9], [81.8, 31.2], [75.0, 34.8], [70.2, 29.2]],
  "Kenia": [[33.9, 4.6], [41.8, 3.8], [41.0, -2.0], [39.2, -4.7], [36.2, -4.2], [34.0, -1.2]],
  "Jordania": [[34.9, 32.5], [36.9, 33.4], [39.2, 32.0], [38.6, 29.6], [36.0, 29.2], [35.0, 30.7]],
  "Chile": [[-70.3, -17.5], [-68.4, -24.2], [-70.0, -33.6], [-71.6, -41.5], [-73.5, -52.5], [-75.6, -55.8], [-72.1, -33.4], [-69.0, -18.2]],
  "Argentyna": [[-73.5, -22.0], [-66.8, -24.0], [-61.8, -31.6], [-58.0, -39.5], [-66.0, -54.8], [-72.0, -51.2], [-70.4, -38.4], [-68.8, -29.0]],
  "Stany Zjednoczone": [[-124.8, 48.8], [-122.2, 37.8], [-117.0, 32.5], [-106.0, 31.8], [-97.0, 26.0], [-82.5, 25.0], [-80.0, 32.0], [-67.0, 45.0], [-76.0, 49.0], [-95.0, 49.0], [-111.0, 48.7]],
  "Polska": [[14.2, 53.9], [16.0, 50.0], [19.0, 49.0], [22.8, 49.4], [24.1, 51.6], [23.3, 54.2], [18.7, 54.8]],
  "Portugalia": [[-9.5, 41.9], [-8.7, 37.0], [-7.1, 37.2], [-6.2, 40.2], [-6.9, 42.0]],
  "Słowenia": [[13.4, 46.4], [14.5, 45.4], [16.5, 45.6], [16.7, 46.4], [15.0, 46.9]],
  "Korea Południowa": [[126.1, 38.2], [128.0, 38.6], [130.1, 37.4], [129.3, 35.0], [127.5, 34.2], [126.0, 35.5]],
  "Egipt": [[25.0, 31.5], [34.2, 31.4], [35.8, 29.2], [32.8, 24.5], [31.2, 22.0], [25.1, 22.0]],
  "Australia": [[113.0, -22.0], [115.2, -34.5], [122.8, -34.8], [131.0, -31.8], [138.2, -35.4], [151.0, -33.8], [154.0, -25.0], [146.0, -17.0], [138.0, -12.0], [128.0, -14.0], [120.0, -18.2]]
};

const refinedCountryMultiShapes = {
  "Indonezja": [
    [[95.0, 5.8], [98.4, 3.2], [101.5, 0.8], [104.8, -2.6], [106.1, -5.6], [103.5, -5.8], [100.1, -3.5], [96.7, 0.3], [94.9, 4.4]],
    [[105.0, -5.7], [108.2, -6.2], [111.6, -6.9], [114.9, -8.0], [113.7, -8.8], [109.7, -8.1], [106.2, -7.0]],
    [[108.7, 1.4], [113.4, 2.3], [118.8, 1.2], [117.5, -3.8], [113.5, -4.2], [109.5, -1.8]],
    [[119.2, 1.7], [122.0, 0.8], [124.5, 1.8], [125.2, 0.3], [123.1, -1.7], [123.8, -5.2], [121.5, -4.3], [120.2, -2.0], [118.7, -3.8], [117.8, -2.1], [119.1, -0.2]],
    [[130.4, -0.8], [136.2, -1.4], [141.0, -2.6], [141.0, -9.1], [136.2, -7.8], [131.5, -4.8]],
    [[115.0, -8.1], [116.6, -8.0], [116.7, -8.8], [115.1, -8.8]],
    [[118.0, -8.2], [120.6, -8.4], [120.6, -9.0], [118.0, -8.8]],
    [[121.0, -8.2], [124.8, -8.6], [124.6, -9.4], [121.0, -9.0]],
    [[124.2, -9.0], [127.4, -9.3], [127.3, -10.2], [124.1, -9.8]]
  ],
  "Japonia": [
    [[130.0, 31.0], [132.1, 33.0], [131.3, 34.3], [129.7, 32.6]],
    [[133.1, 33.4], [135.0, 34.3], [134.4, 35.0], [132.8, 34.2]],
    [[135.0, 34.0], [138.5, 35.4], [141.2, 38.9], [142.0, 41.0], [140.1, 40.6], [137.8, 37.8], [135.2, 35.0]],
    [[140.4, 41.4], [143.8, 42.6], [145.4, 44.2], [143.2, 45.4], [140.8, 43.7]]
  ],
  "Nowa Zelandia": [
    [[172.2, -34.5], [176.4, -37.5], [177.8, -39.0], [175.2, -41.4], [173.2, -40.1], [172.0, -37.0]],
    [[166.4, -46.8], [169.8, -44.7], [172.9, -42.4], [173.6, -40.7], [171.0, -41.7], [168.1, -43.9], [166.2, -45.7]]
  ],
  "Chile": [
    [[-70.3, -17.5], [-68.4, -24.2], [-70.0, -33.6], [-71.6, -41.5], [-73.5, -52.5], [-75.6, -55.8], [-72.1, -33.4], [-69.0, -18.2]]
  ]
};

const countryIsoCodes = {
  "Japonia": "JP",
  "Peru": "PE",
  "Norwegia": "NO",
  "Islandia": "IS",
  "Grecja": "GR",
  "Maroko": "MA",
  "Nepal": "NP",
  "Nowa Zelandia": "NZ",
  "Kanada": "CA",
  "Meksyk": "MX",
  "Brazylia": "BR",
  "RPA": "ZA",
  "Włochy": "IT",
  "Hiszpania": "ES",
  "Francja": "FR",
  "Turcja": "TR",
  "Gruzja": "GE",
  "Wietnam": "VN",
  "Tajlandia": "TH",
  "Indonezja": "ID",
  "Indie": "IN",
  "Kenia": "KE",
  "Jordania": "JO",
  "Chile": "CL",
  "Argentyna": "AR",
  "Stany Zjednoczone": "US",
  "Polska": "PL",
  "Portugalia": "PT",
  "Słowenia": "SI",
  "Korea Południowa": "KR",
  "Egipt": "EG",
  "Australia": "AU"
};

countries.forEach((country) => {
  country.polygon = refinedCountryShapes[country.name] || country.polygon;
  country.polygons = refinedCountryMultiShapes[country.name] || [country.polygon];
  country.iso2 = countryIsoCodes[country.name] || "";
});

const landmasses = [
  [[-168, 69], [-150, 70], [-136, 60], [-127, 50], [-124, 39], [-116, 32], [-108, 23], [-96, 18], [-86, 21], [-80, 30], [-67, 45], [-56, 52], [-61, 59], [-78, 63], [-95, 68], [-117, 72], [-142, 71]],
  [[-52, 59], [-42, 67], [-25, 73], [-18, 66], [-30, 60], [-44, 58]],
  [[-82, 10], [-72, 7], [-62, 3], [-50, -8], [-41, -21], [-48, -36], [-58, -53], [-69, -55], [-75, -43], [-78, -25]],
  [[-10, 36], [1, 44], [18, 55], [35, 56], [50, 47], [71, 52], [96, 58], [124, 52], [145, 45], [139, 29], [121, 19], [106, 7], [84, 8], [64, 20], [43, 29], [27, 35], [13, 36], [5, 43], [-5, 43]],
  [[-17, 35], [7, 37], [31, 31], [43, 13], [40, -5], [31, -30], [18, -35], [4, -30], [-10, -15], [-17, 6]],
  [[94, 6], [104, 1], [114, -8], [126, -5], [141, -7], [135, 2], [120, 4], [106, 5]],
  [[113, -22], [116, -35], [127, -36], [138, -35], [152, -31], [154, -22], [146, -14], [132, -12], [119, -17]],
  [[166, -46], [171, -44], [174, -40], [178, -37], [176, -42], [171, -46]]
];

const localPlaces = [
  { name: "Zion Narrows", country: "USA", lat: 37.3, lon: -113.0, type: "marsz w wodzie", note: "Kanion, rzeka i praca nad równowagą." },
  { name: "Half Dome Trail", country: "USA", lat: 37.75, lon: -119.53, type: "trekking z ekspozycją", note: "Długi dzień i mocny finał na granicie." },
  { name: "Manitou Incline", country: "USA", lat: 38.86, lon: -104.93, type: "strome schody", note: "Krótko, intensywnie i bez udawania." },
  { name: "Mount Katahdin Knife Edge", country: "USA", lat: 45.9, lon: -68.92, type: "grań", note: "Miejsce dla osób pewnych kroku." },
  { name: "Orla Perć", country: "Polska", lat: 49.22, lon: 20.02, type: "łańcuchy i skała", note: "Techniczny klasyk Tatr dla doświadczonych." },
  { name: "Jura Krakowsko-Częstochowska", country: "Polska", lat: 50.46, lon: 19.55, type: "wspinanie i skałki", note: "Dobre na ruch, chwyt i krótkie wypady." },
  { name: "Crib Goch", country: "Walia", lat: 53.08, lon: -4.05, type: "grań", note: "Ekspozycja i bardzo uważny krok." },
  { name: "Aonach Eagach", country: "Szkocja", lat: 56.68, lon: -5.0, type: "scrambling", note: "Skalna grań z mocnym klimatem." },
  { name: "Caminito del Rey", country: "Hiszpania", lat: 36.91, lon: -4.76, type: "kładki nad wąwozem", note: "Dużo przestrzeni pod stopami." },
  { name: "Madeira PR1", country: "Portugalia", lat: 32.76, lon: -16.93, type: "grań i schody", note: "Chmury, tunele i bardzo aktywna trasa." },
  { name: "Via ferrata Ivano Dibona", country: "Włochy", lat: 46.55, lon: 12.15, type: "via ferrata", note: "Koordynacja, ekspozycja i Dolomity." },
  { name: "Triglav", country: "Słowenia", lat: 46.38, lon: 13.84, type: "góra z ferratą", note: "Mały kraj, duży wysiłek." },
  { name: "Calanques", country: "Francja", lat: 43.21, lon: 5.45, type: "skały nad morzem", note: "Trekking i wspinaczkowy charakter." },
  { name: "Romsdalseggen Ridge", country: "Norwegia", lat: 62.56, lon: 7.75, type: "górska grań", note: "Fiordy i długi dzień w nogach." },
  { name: "Laugavegur Trail", country: "Islandia", lat: 63.99, lon: -19.06, type: "wielodniowy trekking", note: "Lawa, rzeki i surowy krajobraz." },
  { name: "Wadi Mujib", country: "Jordania", lat: 31.47, lon: 35.57, type: "kanioning", note: "Woda, skały i pełne skupienie." },
  { name: "Mount Batur", country: "Indonezja", lat: -8.24, lon: 115.38, type: "wulkan o świcie", note: "Krótko, stromo i bardzo atmosferycznie." },
  { name: "Yakushima", country: "Japonia", lat: 30.34, lon: 130.53, type: "leśny trekking", note: "Korzenie, wilgoć i baśniowy rytm marszu." },
  { name: "Seoraksan", country: "Korea Południowa", lat: 38.12, lon: 128.47, type: "górski trekking", note: "Schody, granit i mocny finał." },
  { name: "Tongariro Alpine Crossing", country: "Nowa Zelandia", lat: -39.13, lon: 175.64, type: "wulkaniczny trekking", note: "Kolorowe jeziora i długie podejście." },
  { name: "Blue Mountains", country: "Australia", lat: -33.72, lon: 150.31, type: "kanioning", note: "Piaskowiec, zjazdy i wodne przejścia." }
];

const ui = {
  todayLabel: document.querySelector("#todayLabel"),
  countryName: document.querySelector("#countryName"),
  countryRegion: document.querySelector("#countryRegion"),
  dishName: document.querySelector("#dishName"),
  dishDescription: document.querySelector("#dishDescription"),
  adventureName: document.querySelector("#adventureName"),
  adventureDescription: document.querySelector("#adventureDescription"),
  activeDestination: document.querySelector("#activeDestination"),
  mainDish: document.querySelector("#mainDish"),
  mainDishText: document.querySelector("#mainDishText"),
  mainAdventure: document.querySelector("#mainAdventure"),
  mainAdventureText: document.querySelector("#mainAdventureText"),
  futureLockCard: document.querySelector("#futureLockCard"),
  futureLockTitle: document.querySelector("#futureLockTitle"),
  futureLockText: document.querySelector("#futureLockText"),
  planRevealItems: document.querySelectorAll("#panel-today .plan-reveal"),
  monthLabel: document.querySelector("#monthLabel"),
  calendarGrid: document.querySelector("#calendarGrid"),
  localTitle: document.querySelector("#localTitle"),
  localStatus: document.querySelector("#localStatus"),
  localResults: document.querySelector("#localResults"),
  mainLocal: document.querySelector("#mainLocal"),
  mainLocalText: document.querySelector("#mainLocalText"),
  mobileMenuShell: document.querySelector("#mobileMenuShell"),
  mobileMenuHandle: document.querySelector("#mobileMenuHandle"),
  sidebar: document.querySelector(".sidebar"),
  detailDrawer: document.querySelector("#detailDrawer"),
  leafletMap: document.querySelector("#leafletMap"),
  mapLoader: document.querySelector("#mapLoader"),
  layerToggle: document.querySelector("#layerToggle"),
  layerMenu: document.querySelector("#layerMenu"),
  layerOptions: document.querySelectorAll(".layer-option"),
  canvas: document.querySelector("#globeCanvas")
};

const ctx = ui.canvas.getContext("2d");
const today = startOfDay(new Date());
const planVariantAnchor = new Date(2026, 0, 1);
const initialCountry = getCountryForDate(today);
const mapTypeStorageKey = "travelmap.preferredMapType";
const allowedMapTypes = new Set(["light", "dark"]);
const mobileMenuQuery = window.matchMedia("(max-width: 760px)");

const state = {
  selectedDate: today,
  monthCursor: new Date(today.getFullYear(), today.getMonth(), 1),
  selectedCountry: initialCountry,
  selectedPlan: getPlanForDate(initialCountry, today),
  centerLon: -25,
  centerLat: 8,
  targetLon: 0,
  targetLat: 0,
  zoom: 1.65,
  isFocusing: true,
  dragging: false,
  dragStartX: 0,
  dragStartY: 0,
  dragLon: 0,
  dragLat: 0,
  lastFrame: performance.now(),
  localSuggestion: null,
  localResults: [],
  userPosition: null,
  leafletMap: null,
  activeTileLayer: null,
  selectedMarker: null,
  hoverInfoWindow: null,
  localMapMarkers: [],
  leafletReady: false,
  preferredMapType: getStoredMapType()
};

const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

const monthFormatter = new Intl.DateTimeFormat("pl-PL", {
  month: "long",
  year: "numeric"
});

init();

function init() {
  setMapType(state.preferredMapType);
  bindTabs();
  bindMobileMenu();
  bindControls();
  selectDate(today, { animate: true });
  locateUser();
  loadLeafletMap();
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  requestAnimationFrame(animate);
}

function bindTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const tab = button.dataset.tab;
      const isSameOpenTab = ui.detailDrawer.classList.contains("open") && button.classList.contains("active");

      if (isSameOpenTab) {
        if (isMobileMenuMode()) {
          closeMobileMenu();
          return;
        }
        closeDetailDrawer();
        return;
      }

      openDetailDrawer(tab, button);
    });
  });

  ui.detailDrawer.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!ui.detailDrawer.classList.contains("open")) return;
    if (event.target.closest(".sidebar")) return;
    if (event.target.closest(".map-controls")) return;
    if (isMobileMenuMode()) {
      closeMobileMenu();
      return;
    }
    closeDetailDrawer();
  });
}

function activateDetailTab(tab, button) {
  document.querySelectorAll(".tab-button").forEach((item) => item.classList.toggle("active", item === button));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `panel-${tab}`));
  ui.detailDrawer.classList.add("open");
  ui.detailDrawer.setAttribute("aria-hidden", "false");
}

function openDetailDrawer(tab, button) {
  activateDetailTab(tab, button);
  openMobileMenu({ ensureContent: false });
}

function closeDetailDrawer() {
  if (isMobileMenuMode()) {
    closeMobileMenu();
    return;
  }
  ui.detailDrawer.classList.remove("open");
  ui.detailDrawer.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
  closeMobileMenu();
}

function bindMobileMenu() {
  if (!ui.mobileMenuShell || !ui.mobileMenuHandle) return;

  let dragStartY = 0;
  let dragDeltaY = 0;
  let dragWasOpen = false;
  let isPointerTracking = false;
  let isDragging = false;
  let suppressNextClick = false;
  const visibleStrip = 72;

  const syncMobileState = () => {
    ui.mobileMenuShell.style.removeProperty("--mobile-menu-drag");
    ui.mobileMenuShell.classList.remove("dragging");

    if (!isMobileMenuMode()) {
      ui.mobileMenuShell.classList.remove("open");
      ui.mobileMenuShell.removeAttribute("aria-expanded");
      ui.mobileMenuHandle.setAttribute("aria-label", "Otworz menu");
      return;
    }

    ensureMobileMenuContent();
    updateMobileMenuA11y();
  };

  const getClosedOffset = () => Math.max(0, ui.mobileMenuShell.getBoundingClientRect().height - visibleStrip);

  ui.mobileMenuHandle.addEventListener("pointerdown", (event) => {
    if (!isMobileMenuMode()) return;

    dragStartY = event.clientY;
    dragDeltaY = 0;
    dragWasOpen = ui.mobileMenuShell.classList.contains("open");
    isPointerTracking = true;
    isDragging = false;
    ui.mobileMenuHandle.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  });

  ui.mobileMenuHandle.addEventListener("pointermove", (event) => {
    if (!isPointerTracking) return;

    dragDeltaY = event.clientY - dragStartY;
    if (!isDragging && Math.abs(dragDeltaY) < 4) return;

    if (!isDragging) {
      isDragging = true;
      ui.mobileMenuShell.classList.add("dragging");
    }

    const closedOffset = getClosedOffset();
    const nextOffset = dragWasOpen
      ? clamp(dragDeltaY, 0, closedOffset)
      : clamp(closedOffset + dragDeltaY, 0, closedOffset);

    ui.mobileMenuShell.style.setProperty("--mobile-menu-drag", `${nextOffset}px`);
    event.preventDefault();
  });

  const finishDrag = (event) => {
    if (!isPointerTracking) return;

    isPointerTracking = false;
    ui.mobileMenuHandle.releasePointerCapture?.(event.pointerId);

    if (!isDragging) {
      dragDeltaY = 0;
      return;
    }

    const movedEnough = Math.abs(dragDeltaY) > 8;
    suppressNextClick = movedEnough;
    isDragging = false;
    ui.mobileMenuShell.classList.remove("dragging");
    ui.mobileMenuShell.style.removeProperty("--mobile-menu-drag");

    if (dragDeltaY < -38) {
      openMobileMenu();
    } else if (dragDeltaY > 38) {
      closeMobileMenu();
    } else if (dragWasOpen) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  };

  ui.mobileMenuHandle.addEventListener("pointerup", finishDrag);
  ui.mobileMenuHandle.addEventListener("pointercancel", finishDrag);

  ui.mobileMenuHandle.addEventListener("click", () => {
    if (!isMobileMenuMode()) return;
    if (suppressNextClick) {
      suppressNextClick = false;
      return;
    }
    toggleMobileMenu();
  });

  ui.sidebar?.addEventListener("click", (event) => {
    if (!isMobileMenuMode()) return;
    if (!ui.mobileMenuShell.classList.contains("open")) return;
    if (event.target.closest(".mobile-menu-handle, .tab-button, .brand-link")) return;
    closeMobileMenu();
  });

  if (mobileMenuQuery.addEventListener) {
    mobileMenuQuery.addEventListener("change", syncMobileState);
  } else {
    mobileMenuQuery.addListener(syncMobileState);
  }

  syncMobileState();
}

function isMobileMenuMode() {
  return Boolean(ui.mobileMenuShell && mobileMenuQuery.matches);
}

function ensureMobileMenuContent() {
  if (!isMobileMenuMode()) return;
  if (ui.detailDrawer.classList.contains("open")) return;

  const defaultButton = document.querySelector('.tab-button[data-tab="today"]');
  if (!defaultButton) return;

  activateDetailTab("today", defaultButton);
}

function openMobileMenu(options = {}) {
  if (!isMobileMenuMode()) return;
  if (options.ensureContent !== false) ensureMobileMenuContent();
  ui.mobileMenuShell.classList.add("open");
  updateMobileMenuA11y();
}

function closeMobileMenu() {
  if (!isMobileMenuMode()) return;
  ui.mobileMenuShell.classList.remove("open");
  updateMobileMenuA11y();
}

function toggleMobileMenu() {
  if (!isMobileMenuMode()) return;
  if (ui.mobileMenuShell.classList.contains("open")) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function updateMobileMenuA11y() {
  const isOpen = ui.mobileMenuShell.classList.contains("open");
  ui.mobileMenuShell.setAttribute("aria-expanded", String(isOpen));
  ui.mobileMenuHandle?.setAttribute("aria-label", isOpen ? "Schowaj menu" : "Otworz menu");
}

function bindControls() {
  document.querySelector("#prevMonth").addEventListener("click", () => {
    state.monthCursor = new Date(state.monthCursor.getFullYear(), state.monthCursor.getMonth() - 1, 1);
    renderCalendar();
  });

  document.querySelector("#nextMonth").addEventListener("click", () => {
    state.monthCursor = new Date(state.monthCursor.getFullYear(), state.monthCursor.getMonth() + 1, 1);
    renderCalendar();
  });

  document.querySelector("#focusCountry").addEventListener("click", () => {
    if (!isFutureSelection()) focusOnCountry(state.selectedCountry);
  });
  document.querySelector("#resetView")?.addEventListener("click", () => {
    state.zoom = 1.65;
    if (!isFutureSelection()) focusOnCountry(state.selectedCountry);
  });

  document.querySelector("#locateMe")?.addEventListener("click", locateUser);

  ui.canvas.addEventListener("pointerdown", (event) => {
    state.dragging = true;
    state.isFocusing = false;
    state.dragStartX = event.clientX;
    state.dragStartY = event.clientY;
    state.dragLon = state.centerLon;
    state.dragLat = state.centerLat;
    state.dragScale = getMapLayout(ui.canvas.clientWidth, ui.canvas.clientHeight).scale;
    ui.canvas.setPointerCapture(event.pointerId);
  });

  ui.canvas.addEventListener("pointermove", (event) => {
    if (!state.dragging) return;
    const dx = event.clientX - state.dragStartX;
    const dy = event.clientY - state.dragStartY;
    const scale = state.dragScale || getMapLayout(ui.canvas.clientWidth, ui.canvas.clientHeight).scale;
    state.centerLon = normalizeLon(state.dragLon - dx / scale);
    state.centerLat = clamp(state.dragLat + dy / scale, -72, 72);
  });

  ui.canvas.addEventListener("pointerup", (event) => {
    state.dragging = false;
    ui.canvas.releasePointerCapture(event.pointerId);
  });

  ui.canvas.addEventListener("pointercancel", () => {
    state.dragging = false;
  });

  ui.canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    const factor = event.deltaY > 0 ? 0.9 : 1.1;
    state.zoom = clamp(state.zoom * factor, 0.9, 4.4);
  }, { passive: false });

  ui.layerToggle?.addEventListener("click", () => {
    const isOpen = !ui.layerMenu.hidden;
    ui.layerMenu.hidden = isOpen;
    ui.layerToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  ui.layerOptions.forEach((button) => {
    button.addEventListener("click", () => {
      setMapType(button.dataset.mapType);
      ui.layerMenu.hidden = true;
      ui.layerToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!ui.layerMenu || ui.layerMenu.hidden) return;
    if (event.target.closest("#layerPicker")) return;
    ui.layerMenu.hidden = true;
    ui.layerToggle?.setAttribute("aria-expanded", "false");
  });
}

function selectDate(date, options = {}) {
  state.selectedDate = startOfDay(date);
  state.selectedCountry = getCountryForDate(state.selectedDate);
  state.selectedPlan = getPlanForDate(state.selectedCountry, state.selectedDate);
  const locked = isFutureSelection();
  renderSelectedCountry();
  renderCalendar();
  renderLocalSuggestions();
  if (locked) {
    clearLeafletMarkers();
    return;
  }
  focusOnCountry(state.selectedCountry, options.animate !== false);
  syncLeafletMapToSelection(options.animate !== false);
}

function renderSelectedCountry() {
  const country = state.selectedCountry;
  const plan = state.selectedPlan;
  const selectedDateLabel = capitalize(dateFormatter.format(state.selectedDate));

  ui.todayLabel.textContent = selectedDateLabel;

  if (isFutureSelection()) {
    const waitMessage = getFutureWaitMessage(state.selectedDate);
    ui.planRevealItems.forEach((item) => { item.hidden = true; });
    if (ui.futureLockCard) ui.futureLockCard.hidden = false;
    if (ui.futureLockTitle) ui.futureLockTitle.textContent = waitMessage.title;
    if (ui.futureLockText) ui.futureLockText.textContent = waitMessage.text;
    ui.activeDestination.textContent = `Niespodzianka - ${selectedDateLabel}`;
    ui.mainDish.textContent = "Niespodzianka";
    ui.mainDishText.textContent = waitMessage.text;
    ui.mainAdventure.textContent = "Niespodzianka";
    ui.mainAdventureText.textContent = waitMessage.text;
    return;
  }

  ui.planRevealItems.forEach((item) => { item.hidden = false; });
  if (ui.futureLockCard) ui.futureLockCard.hidden = true;
  ui.countryName.textContent = country.name;
  ui.countryRegion.textContent = country.region;
  ui.dishName.textContent = plan.dish.name;
  ui.dishDescription.textContent = plan.dish.text;
  ui.adventureName.textContent = plan.adventure.name;
  ui.adventureDescription.textContent = plan.adventure.text;
  ui.activeDestination.textContent = `${country.name} - ${selectedDateLabel}`;
  ui.mainDish.textContent = plan.dish.name;
  ui.mainDishText.textContent = plan.dish.text;
  ui.mainAdventure.textContent = plan.adventure.name;
  ui.mainAdventureText.textContent = plan.adventure.text;
}

function renderCalendar() {
  ui.monthLabel.textContent = capitalize(monthFormatter.format(state.monthCursor));
  ui.calendarGrid.replaceChildren();

  const year = state.monthCursor.getFullYear();
  const month = state.monthCursor.getMonth();
  const firstDay = new Date(year, month, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstWeekday; i += 1) {
    const blank = document.createElement("span");
    blank.className = "calendar-day blank";
    ui.calendarGrid.append(blank);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const country = getCountryForDate(date);
    const locked = isFutureDate(date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.classList.toggle("today", isSameDay(date, today));
    button.classList.toggle("selected", isSameDay(date, state.selectedDate));
    button.classList.toggle("locked", locked);
    button.setAttribute("aria-label", locked ? `${day} niespodzianka` : `${day} ${country.name}`);

    const dayNumber = document.createElement("span");
    dayNumber.textContent = String(day);
    const countryLabel = document.createElement("small");
    countryLabel.textContent = locked ? "Niespodzianka" : country.name;
    button.append(dayNumber, countryLabel);
    button.addEventListener("click", () => {
      selectDate(date, { animate: true });
      closeMobileMenu();
    });
    ui.calendarGrid.append(button);
  }
}

function focusOnCountry(country, animate = true) {
  if (isFutureSelection()) return;

  state.targetLon = country.lon;
  state.targetLat = clamp(country.lat, -72, 72);
  state.isFocusing = animate;

  if (state.leafletMap) {
    state.leafletMap.setView(
      [country.lat, country.lon],
      getMapZoomForCountry(country),
      { animate, duration: animate ? 0.55 : 0 }
    );
  }

  if (!animate) {
    state.centerLon = country.lon;
    state.centerLat = clamp(country.lat, -72, 72);
  }
}

function focusOnLocalPlace(place, animate = true) {
  if (!place || isFutureSelection()) return;

  state.targetLon = place.lon;
  state.targetLat = clamp(place.lat, -72, 72);
  state.isFocusing = animate;

  if (state.leafletMap) {
    state.leafletMap.setView([place.lat, place.lon], 6, {
      animate,
      duration: animate ? 0.55 : 0
    });
  }

  if (!animate) {
    state.centerLon = place.lon;
    state.centerLat = clamp(place.lat, -72, 72);
  }
}

function loadLeafletMap() {
  if (state.leafletMap || !ui.leafletMap) return;

  if (!window.L) {
    ui.mapLoader?.classList.remove("hidden");
    if (ui.mapLoader) {
      const title = ui.mapLoader.querySelector("strong");
      const message = ui.mapLoader.querySelector("span");
      if (title) title.textContent = "Nie udalo sie zaladowac Leaflet";
      if (message) message.textContent = "Sprawdz polaczenie z CDN Leaflet albo odswiez strone.";
    }
    return;
  }

  initLeafletTravelMap();
}

function initLeafletTravelMap() {
  const L = window.L;
  const country = state.selectedCountry;

  state.leafletMap = L.map(ui.leafletMap, {
    zoomControl: false,
    attributionControl: true,
    worldCopyJump: true,
    scrollWheelZoom: true,
    minZoom: 2,
    maxZoom: 19,
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 80,
    maxBounds: [[-85, -180], [85, 180]],
    maxBoundsViscosity: 0.35
  }).setView([country.lat, country.lon], getMapZoomForCountry(country));

  setMapType(state.preferredMapType);

  state.leafletReady = true;
  ui.leafletMap.classList.add("ready");
  ui.canvas.classList.add("map-active");
  ui.mapLoader?.classList.add("hidden");
  syncLeafletMapToSelection(false);
  syncLeafletLocalMarkers();
  setTimeout(() => state.leafletMap.invalidateSize(), 0);
}

function syncLeafletMapToSelection(animate = true) {
  if (!state.leafletMap || !window.L) return;

  if (isFutureSelection()) {
    clearLeafletSelectedMarker();
    return;
  }

  const country = state.selectedCountry;
  const plan = state.selectedPlan;
  const center = [country.lat, country.lon];

  closeHoverInfoWindow();
  if (state.selectedMarker) state.selectedMarker.remove();

  state.selectedMarker = window.L.marker(center, {
    title: `${country.name} - ${plan.adventure.name}`,
    icon: getSelectedLeafletMarkerIcon(),
    keyboard: false,
    riseOnHover: true,
    zIndexOffset: 1000
  }).addTo(state.leafletMap);

  attachMarkerHover(state.selectedMarker, {
    title: country.name,
    subtitle: plan.adventure.name,
    country: country.name,
    lat: country.lat,
    lon: country.lon
  });

  state.leafletMap.setView(center, getMapZoomForCountry(country), {
    animate,
    duration: animate ? 0.55 : 0
  });
}

function syncLeafletLocalMarkers() {
  if (!state.leafletMap || !window.L) return;

  closeHoverInfoWindow();
  state.localMapMarkers.forEach((marker) => marker.remove());
  if (isFutureSelection()) {
    state.localMapMarkers = [];
    return;
  }

  state.localMapMarkers = state.localResults.slice(0, 5).map((place, index) => {
    const marker = window.L.marker([place.lat, place.lon], {
      title: `${place.name}, ${place.country}`,
      icon: getLocalLeafletMarkerIcon(index),
      keyboard: false,
      riseOnHover: true,
      zIndexOffset: 700 - index
    }).addTo(state.leafletMap);

    attachMarkerHover(marker, {
      title: place.name,
      subtitle: place.country,
      detail: place.type,
      country: place.country,
      lat: place.lat,
      lon: place.lon
    });

    return marker;
  });
}

function clearLeafletSelectedMarker() {
  closeHoverInfoWindow();
  if (state.selectedMarker) {
    state.selectedMarker.remove();
    state.selectedMarker = null;
  }
}

function clearLeafletMarkers() {
  clearLeafletSelectedMarker();
  closeHoverInfoWindow();
  state.localMapMarkers.forEach((marker) => marker.remove());
  state.localMapMarkers = [];
}

function setMapType(mapType) {
  const normalizedMapType = normalizeMapType(mapType);
  state.preferredMapType = normalizedMapType;
  document.documentElement.dataset.mapType = normalizedMapType;
  ui.leafletMap?.classList.remove("tile-theme-light", "tile-theme-dark");
  ui.leafletMap?.classList.add(`tile-theme-${normalizedMapType}`);
  storeMapType(normalizedMapType);

  if (state.leafletMap && window.L) {
    const tileLayer = getLeafletTileLayer(normalizedMapType);
    if (state.activeTileLayer) state.leafletMap.removeLayer(state.activeTileLayer);
    state.activeTileLayer = tileLayer.addTo(state.leafletMap);
    state.activeTileLayer.bringToBack();
    updateLeafletMarkerStyles();
  }

  ui.layerOptions.forEach((button) => {
    button.classList.toggle("active", button.dataset.mapType === normalizedMapType);
  });
}

function getLeafletTileLayer(mapType) {
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  const tileLayers = {
    light: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  };

  return window.L.tileLayer(tileLayers[mapType] || tileLayers.light, {
    attribution,
    className: `leaflet-tiles-${mapType}`,
    detectRetina: true,
    maxNativeZoom: 20,
    maxZoom: 20,
    subdomains: "abcd",
    updateWhenIdle: true
  });
}

function getSelectedLeafletMarkerIcon() {
  const palette = getMapMarkerPalette();
  return getFlagLeafletMarkerIcon({
    fill: palette.selectedFill,
    stroke: palette.selectedStroke,
    size: 46
  });
}

function getLocalLeafletMarkerIcon(index) {
  const palette = getMapMarkerPalette();
  return getFlagLeafletMarkerIcon({
    fill: index === 0 ? palette.localFirstFill : palette.localFill,
    stroke: palette.localStroke,
    size: index === 0 ? 38 : 32
  });
}

function updateLeafletMarkerStyles() {
  state.selectedMarker?.setIcon(getSelectedLeafletMarkerIcon());
  state.localMapMarkers.forEach((marker, index) => {
    marker.setIcon(getLocalLeafletMarkerIcon(index));
  });
}

function getFlagLeafletMarkerIcon({ fill, stroke, size }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48">
      <path d="M15 40V9" stroke="${stroke}" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M15 9H39.5L35.5 17L39.5 25H15Z" fill="${fill}" stroke="${stroke}" stroke-width="2.45" stroke-linejoin="round"/>
      <circle cx="15" cy="40" r="3.6" fill="${fill}" stroke="${stroke}" stroke-width="1.65"/>
    </svg>
  `;

  return window.L.divIcon({
    className: "leaflet-flag-marker",
    html: svg.trim(),
    iconSize: [size, size],
    iconAnchor: [Math.round(size * 0.31), Math.round(size * 0.84)],
    popupAnchor: [Math.round(size * 0.18), -Math.round(size * 0.78)]
  });
}

function attachMarkerHover(marker, info) {
  marker.on("mouseover", () => showMarkerInfoWindow(marker, info));
  marker.on("mouseout", closeHoverInfoWindow);
}

function showMarkerInfoWindow(marker, info) {
  const infoWindow = getHoverInfoWindow();
  const iconSize = marker.options.icon?.options?.iconSize;
  const iconHeight = Array.isArray(iconSize) ? iconSize[1] : iconSize?.y || 40;
  infoWindow.options.offset = window.L.point(0, -Math.round(iconHeight * 1.28));
  infoWindow.setContent(renderMarkerInfoContent(info));
  infoWindow.setLatLng(marker.getLatLng());
  infoWindow.openOn(state.leafletMap);
}

function closeHoverInfoWindow() {
  if (state.hoverInfoWindow && state.leafletMap) {
    state.leafletMap.closePopup(state.hoverInfoWindow);
  }
}

function getHoverInfoWindow() {
  if (!state.hoverInfoWindow) {
    state.hoverInfoWindow = window.L.popup({
      disableAutoPan: true,
      autoPan: false,
      closeButton: false,
      closeOnClick: false,
      offset: window.L.point(0, -52),
      className: "map-hover-popup"
    });
  }

  return state.hoverInfoWindow;
}

function renderMarkerInfoContent(info) {
  const timeZone = getTimeZoneInfo(info);
  const detail = info.detail ? `<span class="map-info-detail">${escapeHtml(info.detail)}</span>` : "";

  return `
    <div class="map-info-window">
      <strong>${escapeHtml(info.title)}</strong>
      <span>${escapeHtml(info.subtitle)}</span>
      ${detail}
      <span class="map-info-time">Strefa czasowa: ${escapeHtml(timeZone)}</span>
    </div>
  `;
}

function getTimeZoneInfo(location) {
  const timeZone = inferIanaTimeZone(location);

  if (timeZone) {
    return `${formatUtcOffsetForTimeZone(timeZone)} · ${timeZone}`;
  }

  return `${formatOffsetMinutes(getApproxOffsetMinutes(location.lon))} · według położenia`;
}

function inferIanaTimeZone({ country, lat, lon }) {
  const normalizedCountry = normalizeCountryName(country);

  if (normalizedCountry === "Stany Zjednoczone") {
    if (lon <= -115) return "America/Los_Angeles";
    if (lon <= -100) return "America/Denver";
    if (lon <= -85) return "America/Chicago";
    return "America/New_York";
  }

  if (normalizedCountry === "Kanada") {
    if (lon <= -120) return "America/Vancouver";
    if (lon <= -105) return "America/Edmonton";
    if (lon <= -90) return "America/Winnipeg";
    return "America/Toronto";
  }

  if (normalizedCountry === "Australia") {
    if (lon >= 140) return "Australia/Sydney";
    if (lon >= 129) return "Australia/Adelaide";
    return "Australia/Perth";
  }

  if (normalizedCountry === "Indonezja") {
    if (lon >= 130) return "Asia/Jayapura";
    if (lon >= 110) return "Asia/Makassar";
    return "Asia/Jakarta";
  }

  if (normalizedCountry === "Portugalia" && lon < -12) return "Atlantic/Madeira";

  return countryTimeZones[normalizedCountry] || inferTimeZoneFromCoordinates(lat, lon);
}

function normalizeCountryName(country) {
  const aliases = {
    USA: "Stany Zjednoczone",
    Walia: "Wielka Brytania",
    Szkocja: "Wielka Brytania"
  };

  return aliases[country] || country;
}

const countryTimeZones = {
  "Japonia": "Asia/Tokyo",
  "Peru": "America/Lima",
  "Norwegia": "Europe/Oslo",
  "Islandia": "Atlantic/Reykjavik",
  "Grecja": "Europe/Athens",
  "Maroko": "Africa/Casablanca",
  "Nepal": "Asia/Kathmandu",
  "Nowa Zelandia": "Pacific/Auckland",
  "Meksyk": "America/Mexico_City",
  "Brazylia": "America/Sao_Paulo",
  "RPA": "Africa/Johannesburg",
  "Włochy": "Europe/Rome",
  "Hiszpania": "Europe/Madrid",
  "Francja": "Europe/Paris",
  "Turcja": "Europe/Istanbul",
  "Gruzja": "Asia/Tbilisi",
  "Wietnam": "Asia/Ho_Chi_Minh",
  "Tajlandia": "Asia/Bangkok",
  "Indie": "Asia/Kolkata",
  "Kenia": "Africa/Nairobi",
  "Jordania": "Asia/Amman",
  "Chile": "America/Santiago",
  "Argentyna": "America/Argentina/Buenos_Aires",
  "Polska": "Europe/Warsaw",
  "Portugalia": "Europe/Lisbon",
  "Słowenia": "Europe/Ljubljana",
  "Korea Południowa": "Asia/Seoul",
  "Egipt": "Africa/Cairo",
  "Wielka Brytania": "Europe/London"
};

function inferTimeZoneFromCoordinates(lat, lon) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return "";
  if (lat > 49 && lon >= -8 && lon <= 2) return "Europe/London";
  return "";
}

function formatUtcOffsetForTimeZone(timeZone) {
  try {
    return formatOffsetMinutes(getTimeZoneOffsetMinutes(timeZone));
  } catch {
    return "UTC";
  }
}

function getTimeZoneOffsetMinutes(timeZone, date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date).reduce((values, part) => {
    values[part.type] = part.value;
    return values;
  }, {});
  const utcTime = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );

  return Math.round((utcTime - date.getTime()) / 60000);
}

function getApproxOffsetMinutes(lon) {
  if (!Number.isFinite(lon)) return 0;
  return clamp(Math.round(lon / 15), -12, 14) * 60;
}

function formatOffsetMinutes(offsetMinutes) {
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const absolute = Math.abs(offsetMinutes);
  const hours = String(Math.floor(absolute / 60)).padStart(2, "0");
  const minutes = String(absolute % 60).padStart(2, "0");

  return `UTC${sign}${hours}:${minutes}`;
}

function getMapMarkerPalette(mapType = state.preferredMapType) {
  if (mapType === "dark") {
    return {
      selectedFill: "#b000ff",
      selectedStroke: "#050505",
      localFirstFill: "#c026ff",
      localFill: "#d66bff",
      localStroke: "#ffffff",
      selectedFillRgb: "176, 0, 255",
      selectedStrokeRgb: "244, 232, 255",
      selectedShadowRgb: "190, 132, 255",
      selectedRingRgb: "216, 180, 254",
      selectedShadow: "#c084fc"
    };
  }

  return {
    selectedFill: "#ff1238",
    selectedStroke: "#ffffff",
    localFirstFill: "#ff2448",
    localFill: "#ff6179",
    localStroke: "#050505",
    selectedFillRgb: "255, 18, 56",
    selectedStrokeRgb: "255, 238, 241",
    selectedShadowRgb: "255, 64, 85",
    selectedRingRgb: "255, 112, 126",
    selectedShadow: "#ff4055"
  };
}

function getStoredMapType() {
  try {
    return normalizeMapType(localStorage.getItem(mapTypeStorageKey));
  } catch {
    return "light";
  }
}

function storeMapType(mapType) {
  try {
    localStorage.setItem(mapTypeStorageKey, mapType);
  } catch {
    // localStorage can be unavailable in private or restricted browser contexts.
  }
}

function normalizeMapType(mapType) {
  if (mapType === "roadmap" || mapType === "satellite" || mapType === "hybrid") {
    return "light";
  }

  return allowedMapTypes.has(mapType) ? mapType : "light";
}

function getMapZoomForCountry(country) {
  const bounds = getCountryBounds(country);
  const span = Math.max(bounds.maxLon - bounds.minLon, bounds.maxLat - bounds.minLat);

  if (span > 45) return 3;
  if (span > 24) return 4;
  if (span > 12) return 5;
  if (span > 7) return 6;
  return 7;
}

function getLonLatBounds(polygon) {
  return polygon.reduce((bounds, [lon, lat]) => ({
    minLon: Math.min(bounds.minLon, lon),
    maxLon: Math.max(bounds.maxLon, lon),
    minLat: Math.min(bounds.minLat, lat),
    maxLat: Math.max(bounds.maxLat, lat)
  }), {
    minLon: Infinity,
    maxLon: -Infinity,
    minLat: Infinity,
    maxLat: -Infinity
  });
}

function getCountryPolygons(country) {
  return country.polygons || [country.polygon];
}

function getCountryBounds(country) {
  return getCountryPolygons(country).flat().reduce((bounds, [lon, lat]) => ({
    minLon: Math.min(bounds.minLon, lon),
    maxLon: Math.max(bounds.maxLon, lon),
    minLat: Math.min(bounds.minLat, lat),
    maxLat: Math.max(bounds.maxLat, lat)
  }), {
    minLon: Infinity,
    maxLon: -Infinity,
    minLat: Infinity,
    maxLat: -Infinity
  });
}

function locateUser() {
  if (!navigator.geolocation) {
    ui.localTitle.textContent = "Brak obsługi";
    ui.localStatus.textContent = "Ta przeglądarka nie udostępnia geolokalizacji, więc pokazuję losowe aktywne miejsca na dziś.";
    renderLocalSuggestions();
    return;
  }

  ui.localTitle.textContent = "Wykrywam automatycznie";
  ui.localStatus.textContent = "Jeśli przeglądarka poprosi o zgodę, wykorzystam pozycję tylko do policzenia najbliższych miejsc.";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      state.userPosition = { latitude, longitude };
      renderLocalSuggestions();
    },
    () => {
      state.userPosition = null;
      ui.localTitle.textContent = "Losowe miejsca na dziś";
      ui.localStatus.textContent = "Nie mam dostępu do lokalizacji, więc zamiast najbliższych pokazuję losowe propozycje z klimatem ruchowym.";
      renderLocalSuggestions();
    },
    {
      enableHighAccuracy: false,
      timeout: 9000,
      maximumAge: 600000
    }
  );
}

function renderLocalSuggestions() {
  if (isFutureSelection()) {
    renderFutureLocalLock();
    return;
  }

  const randomPlaces = getRandomLocalPlaces(3)
    .map((place) => getDailyLocalPlace(place, { mode: "Losowo" }));

  if (!state.userPosition) {
    renderLocalResults(randomPlaces);
    return;
  }

  const { latitude, longitude } = state.userPosition;
  const nearest = localPlaces
    .map((place) => getDailyLocalPlace(place, {
      distance: haversine(latitude, longitude, place.lat, place.lon),
      mode: "Najbliżej"
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  const usedNames = new Set(nearest.map((place) => place.name));
  const randomFill = getRandomLocalPlaces(2, usedNames)
    .map((place) => getDailyLocalPlace(place, { mode: "Losowo" }));
  const results = [...nearest, ...randomFill];

  state.localSuggestion = nearest[0];
  ui.localTitle.textContent = "Najbliżej plus losowo";
  ui.localStatus.textContent = `Pozycja przybliżona: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}. Obok najbliższych miejsc dorzucam losowe propozycje na dziś.`;
  renderLocalResults(results);
}

function renderLocalResults(results) {
  state.localResults = results;
  ui.localResults.replaceChildren();

  results.forEach((place) => {
    const card = document.createElement("article");
    card.className = "local-result";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Pokaz ${place.name} na mapie`);

    const title = document.createElement("strong");
    title.textContent = `${place.name}, ${place.country}`;
    const meta = document.createElement("p");
    meta.textContent = place.distance == null
      ? `${place.mode} - ${place.type}. ${place.note}`
      : `${place.mode}: około ${Math.round(place.distance)} km od Ciebie - ${place.type}. ${place.note}`;

    const selectLocalPlace = () => {
      focusOnLocalPlace(place);
      closeMobileMenu();
    };

    card.addEventListener("click", selectLocalPlace);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectLocalPlace();
    });

    card.append(title, meta);
    ui.localResults.append(card);
  });

  const first = results[0];
  ui.mainLocal.textContent = `${first.name}, ${first.country}`;
  ui.mainLocalText.textContent = first.distance == null
    ? `${first.mode} - ${first.type}. ${first.note}`
    : `${first.mode}: około ${Math.round(first.distance)} km. ${first.type}. ${first.note}`;

  syncLeafletLocalMarkers();
}

function renderFutureLocalLock() {
  const waitMessage = getFutureWaitMessage(state.selectedDate);
  state.localSuggestion = null;
  state.localResults = [];
  ui.localTitle.textContent = "Niespodzianka";
  ui.localStatus.textContent = waitMessage.text;
  ui.localResults.replaceChildren();

  const card = document.createElement("article");
  card.className = "local-result future-local-lock";

  const title = document.createElement("strong");
  title.textContent = waitMessage.title;
  const meta = document.createElement("p");
  meta.textContent = "Lokalne propozycje dla tego dnia też odblokują się dopiero wtedy.";

  card.append(title, meta);
  ui.localResults.append(card);
  ui.mainLocal.textContent = "Niespodzianka";
  ui.mainLocalText.textContent = waitMessage.text;
  syncLeafletLocalMarkers();
}

function getRandomLocalPlaces(count, excludedNames = new Set()) {
  const dateKey = getSelectedDateKey();
  return localPlaces
    .filter((place) => !excludedNames.has(place.name))
    .map((place) => ({
      ...place,
      score: hashText(`${dateKey}-${place.name}-${place.country}`)
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, count)
    .map(({ score, ...place }) => place);
}

function getDailyLocalPlace(place, overrides = {}) {
  const dailyAngles = [
    { label: "tempo dnia", note: "Dzisiaj potraktuj to jako zmianę rytmu i krótkie wyjście z autopilota." },
    { label: "mocniejszy akcent", note: "Na ten dzień pasuje wariant z trochę większą intensywnością i konkretnym finiszem." },
    { label: "uważny ruch", note: "Dzisiaj najważniejsze są spokojny start, obserwacja terenu i dobra kontrola tempa." },
    { label: "mikroprzygoda", note: "Ten wariant ma działać jak krótka wyprawa, nawet jeśli masz tylko mały kawałek dnia." },
    { label: "reset głowy", note: "Dzisiaj wybierz wersję, która bardziej czyści głowę niż dobija zmęczeniem." },
    { label: "kontakt z miejscem", note: "Najlepiej zagra, jeśli dasz sobie chwilę na rozejrzenie się zamiast tylko zaliczyć trasę." },
    { label: "prosty start", note: "Dobry dzień na wejście bez wielkich przygotowań, ale z jasnym małym celem." }
  ];
  const dailyPaces = [
    "Zrób krótką pętlę i zakończ ją jednym wyraźnym punktem widokowym.",
    "Dodaj spokojny odcinek na rozgrzewkę i mocniejszy fragment w środku.",
    "Wybierz wariant, w którym łatwo zawrócić, jeśli dzień okaże się cięższy.",
    "Spróbuj zrobić to przed wieczorem, kiedy światło bardziej podbija klimat miejsca.",
    "Potraktuj pierwsze 20 minut jako rozpoznanie, a dopiero potem przyspiesz.",
    "Zostaw miejsce na krótki postój, bo ten dzień ma bardziej eksploracyjny charakter."
  ];
  const dateKey = getSelectedDateKey();
  const seed = hashText(`${dateKey}-${place.name}-${place.country}-${place.type}`);
  const angle = dailyAngles[seed % dailyAngles.length];
  const pace = dailyPaces[Math.floor(seed / dailyAngles.length) % dailyPaces.length];

  return {
    ...place,
    ...overrides,
    type: `${place.type} · ${angle.label}`,
    note: `${place.note} ${angle.note} ${pace}`
  };
}

function getSelectedDateKey() {
  return `${state.selectedDate.getFullYear()}-${state.selectedDate.getMonth() + 1}-${state.selectedDate.getDate()}`;
}

function resizeCanvas() {
  const rect = ui.canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  ui.canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  ui.canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function animate(now) {
  const dt = Math.min(48, now - state.lastFrame);
  state.lastFrame = now;

  if (state.isFocusing && !state.dragging) {
    const ease = 0.045;
    state.centerLon = normalizeLon(state.centerLon + shortestLonDelta(state.centerLon, state.targetLon) * ease);
    state.centerLat += (state.targetLat - state.centerLat) * ease;

    if (Math.abs(shortestLonDelta(state.centerLon, state.targetLon)) < 0.1 && Math.abs(state.centerLat - state.targetLat) < 0.1) {
      state.centerLon = state.targetLon;
      state.centerLat = state.targetLat;
      state.isFocusing = false;
    }
  }

  drawGlobe(now);
  requestAnimationFrame(animate);
}

function drawGlobe(time) {
  const width = ui.canvas.clientWidth;
  const height = ui.canvas.clientHeight;
  const layout = getMapLayout(width, height);

  ctx.clearRect(0, 0, width, height);

  drawFlatMapBackground(layout, time);
  drawFlatMapGrid(layout);
  drawFlatLandmasses(layout);
  drawFlatLocalMarkers(layout);
  drawFlatSelectedPlace(layout, time);
  drawFlatMapOverlay(layout);
}

function getMapLayout(width, height) {
  const baseScale = Math.max(width / 360, height / 158) * 1.12;
  const scale = baseScale * state.zoom;

  return {
    width,
    height,
    cx: width / 2,
    cy: height / 2,
    scale
  };
}

function drawFlatMapBackground(layout, time) {
  const gradient = ctx.createLinearGradient(0, 0, layout.width, layout.height);
  gradient.addColorStop(0, "#0a0803");
  gradient.addColorStop(0.42, "#201606");
  gradient.addColorStop(0.72, "#553708");
  gradient.addColorStop(1, "#100d07");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, layout.width, layout.height);

  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = "rgba(255, 211, 89, 0.45)";
  ctx.lineWidth = 2;

  for (let i = -2; i <= 5; i += 1) {
    const y = layout.height * (0.1 + i * 0.18) + Math.sin(time / 1800 + i) * 8;
    ctx.beginPath();
    ctx.moveTo(-80, y);
    ctx.bezierCurveTo(layout.width * 0.28, y + 80, layout.width * 0.58, y - 110, layout.width + 90, y + 35);
    ctx.stroke();
  }

  ctx.globalAlpha = 0.26;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(layout.width * 0.08, layout.height * 0.92);
  ctx.lineTo(layout.width * 0.42, layout.height * 0.36);
  ctx.lineTo(layout.width * 0.86, -80);
  ctx.stroke();
  ctx.restore();
}

function drawFlatMapGrid(layout) {
  ctx.save();
  ctx.strokeStyle = "rgba(255, 232, 166, 0.13)";
  ctx.lineWidth = 1;

  for (let lat = -75; lat <= 75; lat += 15) {
    const start = projectMapPoint(-540, lat, layout);
    const end = projectMapPoint(540, lat, layout);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  for (let lon = -540; lon <= 540; lon += 15) {
    const start = projectMapPoint(lon, -78, layout);
    const end = projectMapPoint(lon, 82, layout);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  ctx.restore();
}

function drawFlatLandmasses(layout) {
  ctx.save();
  landmasses.forEach((polygon) => {
    drawMapPolygonCopies(polygon, layout, () => {
      ctx.fillStyle = "rgba(126, 91, 22, 0.5)";
      ctx.strokeStyle = "rgba(255, 211, 89, 0.24)";
      ctx.lineWidth = 1.2;
      ctx.fill();
      ctx.stroke();
    });
  });
  ctx.restore();
}

function drawFlatCountries(layout, time) {
  const locked = isFutureSelection();
  const selectedName = locked ? "" : state.selectedCountry.name;
  const palette = getMapMarkerPalette();

  countries.forEach((country) => {
    if (country.name === selectedName) return;

    getCountryPolygons(country).forEach((polygon) => {
      drawMapPolygonCopies(polygon, layout, () => {
        ctx.fillStyle = "rgba(255, 224, 150, 0.07)";
        ctx.strokeStyle = "rgba(255, 224, 150, 0.16)";
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
      });
    });
  });

  const pulse = 0.58 + Math.sin(time / 170) * 0.27;
  if (locked) return;

  getCountryPolygons(state.selectedCountry).forEach((polygon) => {
    drawMapPolygonCopies(polygon, layout, () => {
      ctx.fillStyle = `rgba(${palette.selectedFillRgb}, ${pulse})`;
      ctx.strokeStyle = `rgba(${palette.selectedStrokeRgb}, ${Math.min(1, pulse + 0.2)})`;
      ctx.lineWidth = 2.4;
      ctx.shadowColor = `rgba(${palette.selectedShadowRgb}, ${pulse})`;
      ctx.shadowBlur = 28 + pulse * 35;
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;
    });
  });
}

function drawFlatLocalMarkers(layout) {
  const palette = getMapMarkerPalette();

  ctx.save();
  state.localResults.slice(0, 5).forEach((place, index) => {
    const point = projectWrappedMapPoint(place.lon, place.lat, layout);
    if (!pointIsNearViewport(point, layout, 80)) return;

    drawCanvasFlagMarker(
      point.x,
      point.y,
      index === 0 ? palette.localFirstFill : palette.localFill,
      palette.localStroke,
      index === 0 ? 0.86 : 0.72
    );
  });
  ctx.restore();
}

function drawFlatSelectedPlace(layout, time) {
  if (isFutureSelection()) return;

  const country = state.selectedCountry;
  const plan = state.selectedPlan;
  const point = projectWrappedMapPoint(country.lon, country.lat, layout);
  const pulse = 0.55 + Math.sin(time / 190) * 0.45;
  const palette = getMapMarkerPalette();

  ctx.save();
  ctx.beginPath();
  ctx.arc(point.x, point.y, 11 + pulse * 13, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${palette.selectedRingRgb}, ${0.42 + pulse * 0.28})`;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.shadowColor = palette.selectedShadow;
  ctx.shadowBlur = 18;
  drawCanvasFlagMarker(point.x, point.y + 4, palette.selectedFill, palette.selectedStroke, 1.08);
  ctx.shadowBlur = 0;

  drawMapLabel(point.x + 20, point.y - 50, country.name, plan.adventure.name);
  ctx.restore();
}

function drawCanvasFlagMarker(x, y, fill, stroke, scale = 1) {
  const poleHeight = 28 * scale;
  const flagWidth = 22 * scale;
  const flagHeight = 14 * scale;
  const notch = 4 * scale;
  const top = y - poleHeight;

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.lineWidth = 2.8 * scale;
  ctx.strokeStyle = stroke;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, top);
  ctx.stroke();

  ctx.lineWidth = 2.45 * scale;
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(x, top);
  ctx.lineTo(x + flagWidth, top);
  ctx.lineTo(x + flagWidth - notch, top + flagHeight * 0.5);
  ctx.lineTo(x + flagWidth, top + flagHeight);
  ctx.lineTo(x, top + flagHeight);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.45 * scale;
  ctx.beginPath();
  ctx.arc(x, y, 3.6 * scale, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawFlatMapOverlay(layout) {
  const vignette = ctx.createRadialGradient(
    layout.width * 0.52,
    layout.height * 0.46,
    layout.height * 0.08,
    layout.width * 0.52,
    layout.height * 0.46,
    Math.max(layout.width, layout.height) * 0.75
  );
  vignette.addColorStop(0, "rgba(255, 255, 255, 0.06)");
  vignette.addColorStop(0.55, "rgba(0, 0, 0, 0)");
  vignette.addColorStop(1, "rgba(0, 0, 0, 0.3)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, layout.width, layout.height);
}

function drawMapPolygonCopies(polygon, layout, paint) {
  [-360, 0, 360].forEach((shift) => {
    const points = polygon.map(([lon, lat]) => projectMapPoint(lon + shift, lat, layout));
    const bounds = getBounds(points);

    if (!boundsIntersectViewport(bounds, layout, 160)) return;

    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.closePath();
    paint();
  });
}

function drawMapLabel(x, y, title, subtitle) {
  ctx.save();
  ctx.font = "800 15px system-ui, -apple-system, Segoe UI, sans-serif";
  const titleWidth = ctx.measureText(title).width;
  ctx.font = "600 11px system-ui, -apple-system, Segoe UI, sans-serif";
  const subtitleWidth = ctx.measureText(subtitle).width;
  const width = Math.min(300, Math.max(titleWidth, subtitleWidth) + 24);
  const height = 52;

  ctx.fillStyle = "rgba(10, 8, 5, 0.84)";
  ctx.strokeStyle = "rgba(255, 211, 89, 0.18)";
  ctx.lineWidth = 1;
  roundedRect(ctx, x, y, width, height, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#fff4cf";
  ctx.font = "800 15px system-ui, -apple-system, Segoe UI, sans-serif";
  ctx.fillText(title, x + 12, y + 21);
  ctx.fillStyle = "rgba(255, 239, 184, 0.7)";
  ctx.font = "600 11px system-ui, -apple-system, Segoe UI, sans-serif";
  ctx.fillText(truncateText(subtitle, 34), x + 12, y + 39);
  ctx.restore();
}

function roundedRect(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function projectWrappedMapPoint(lon, lat, layout) {
  return projectMapPoint(lon + getClosestWorldShift(lon), lat, layout);
}

function projectMapPoint(lon, lat, layout) {
  return {
    x: layout.cx + (lon - state.centerLon) * layout.scale,
    y: layout.cy - (lat - state.centerLat) * layout.scale
  };
}

function getClosestWorldShift(lon) {
  return Math.round((state.centerLon - lon) / 360) * 360;
}

function getBounds(points) {
  return points.reduce((bounds, point) => ({
    minX: Math.min(bounds.minX, point.x),
    maxX: Math.max(bounds.maxX, point.x),
    minY: Math.min(bounds.minY, point.y),
    maxY: Math.max(bounds.maxY, point.y)
  }), {
    minX: Infinity,
    maxX: -Infinity,
    minY: Infinity,
    maxY: -Infinity
  });
}

function boundsIntersectViewport(bounds, layout, padding = 0) {
  return bounds.maxX >= -padding
    && bounds.minX <= layout.width + padding
    && bounds.maxY >= -padding
    && bounds.minY <= layout.height + padding;
}

function pointIsNearViewport(point, layout, padding = 0) {
  return point.x >= -padding
    && point.x <= layout.width + padding
    && point.y >= -padding
    && point.y <= layout.height + padding;
}

function truncateText(value, maxLength) {
  return value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;
}

function getGlobeLayout(width, height) {
  const aspect = width / Math.max(height, 1);
  const shortSide = Math.min(width, height);
  const margin = Math.max(18, shortSide * 0.024);
  const wide = clamp((aspect - 1.25) / 0.85, 0, 1);
  const narrow = clamp((1.05 - aspect) / 0.45, 0, 1);

  const widthLimit = width * (0.3 + narrow * 0.09);
  const heightLimit = height * (0.365 + wide * 0.035);
  const baseRadius = Math.min(widthLimit, heightLimit);
  const maxRadius = Math.min(width * 0.47, height * (0.475 + wide * 0.025));
  const radius = Math.min(baseRadius * state.zoom, maxRadius);

  const cx = width * (0.5 + wide * 0.015);
  const baseY = height * (0.515 - wide * 0.035 + narrow * 0.035);
  const zoomYCompensation = Math.max(0, state.zoom - 1) * height * (0.055 + wide * 0.025);
  let cy = baseY - zoomYCompensation;

  if (radius * 2 + margin * 2 <= height) {
    cy = clamp(cy, radius + margin, height - radius - margin);
  } else {
    cy = height / 2 - Math.max(0, state.zoom - 1) * height * 0.02;
  }

  return { cx, cy, radius };
}

function drawOceanTexture(cx, cy, radius, time) {
  ctx.save();
  ctx.globalAlpha = 0.16;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
  ctx.lineWidth = 1;

  for (let i = -5; i <= 5; i += 1) {
    const y = cy + i * radius * 0.16 + Math.sin(time / 1200 + i) * 5;
    ctx.beginPath();
    ctx.ellipse(cx, y, radius * (0.85 - Math.abs(i) * 0.045), radius * 0.035, Math.sin(i) * 0.18, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();
}

function drawLandmasses(cx, cy, radius) {
  ctx.save();

  landmasses.forEach((polygon) => {
    const points = polygon.map(([lon, lat]) => project(lon, lat, cx, cy, radius));
    const visible = points.filter((point) => point.visible).length / points.length;

    if (visible <= 0.2) return;

    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = `rgba(126, 91, 22, ${0.22 + visible * 0.18})`;
    ctx.strokeStyle = `rgba(255, 211, 89, ${0.1 + visible * 0.18})`;
    ctx.lineWidth = 1.1;
    ctx.fill();
    ctx.stroke();
  });

  ctx.restore();
}

function drawGraticule(cx, cy, radius) {
  ctx.save();
  ctx.strokeStyle = "rgba(255, 232, 166, 0.16)";
  ctx.lineWidth = 1;

  for (let lat = -60; lat <= 60; lat += 30) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 4) {
      points.push(project(lon, lat, cx, cy, radius));
    }
    strokeVisiblePath(points);
  }

  for (let lon = -180; lon < 180; lon += 30) {
    const points = [];
    for (let lat = -80; lat <= 80; lat += 4) {
      points.push(project(lon, lat, cx, cy, radius));
    }
    strokeVisiblePath(points);
  }

  ctx.restore();
}

function drawCountries(cx, cy, radius, time) {
  const selectedName = isFutureSelection() ? "" : state.selectedCountry.name;
  const projected = countries
    .map((country) => {
      const points = country.polygon.map(([lon, lat]) => project(lon, lat, cx, cy, radius));
      const visible = points.filter((point) => point.visible).length / points.length;
      const depth = points.reduce((sum, point) => sum + point.z, 0) / points.length;
      return { country, points, visible, depth };
    })
    .filter((item) => item.visible > 0.35)
    .sort((a, b) => a.depth - b.depth);

  projected.forEach(({ country, points, visible }) => {
    const isSelected = country.name === selectedName;
    drawCountryShape(points, isSelected, visible, time);
  });
}

function drawCountryShape(points, isSelected, visible, time) {
  const palette = getMapMarkerPalette();

  ctx.save();
  ctx.beginPath();

  points.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.closePath();

  if (isSelected) {
    const pulse = 0.55 + Math.sin(time / 170) * 0.28;
    ctx.fillStyle = `rgba(${palette.selectedFillRgb}, ${pulse})`;
    ctx.strokeStyle = `rgba(${palette.selectedStrokeRgb}, ${Math.min(1, pulse + 0.18)})`;
    ctx.lineWidth = 2.2;
    ctx.shadowColor = `rgba(${palette.selectedShadowRgb}, ${pulse})`;
    ctx.shadowBlur = 34 + pulse * 44;
  } else {
    ctx.fillStyle = `rgba(255, 224, 150, ${0.05 + visible * 0.08})`;
    ctx.strokeStyle = `rgba(255, 224, 150, ${0.12 + visible * 0.12})`;
    ctx.lineWidth = 1;
    ctx.shadowBlur = 0;
  }

  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawCountryMarker(cx, cy, radius, time) {
  if (isFutureSelection()) return;

  const point = project(state.selectedCountry.lon, state.selectedCountry.lat, cx, cy, radius);
  if (!point.visible) return;

  const pulse = 0.5 + Math.sin(time / 190) * 0.5;
  const palette = getMapMarkerPalette();
  ctx.save();
  ctx.beginPath();
  ctx.arc(point.x, point.y, 9 + pulse * 12, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${palette.selectedRingRgb}, ${0.44 + pulse * 0.28})`;
  ctx.lineWidth = 1.4;
  ctx.stroke();

  ctx.shadowColor = palette.selectedShadow;
  ctx.shadowBlur = 18;
  drawCanvasFlagMarker(point.x, point.y + 4, palette.selectedFill, palette.selectedStroke, 1);
  ctx.restore();
}

function drawTerminator(cx, cy, radius) {
  const gradient = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.16)");
  gradient.addColorStop(0.46, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.36)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
}

function strokeVisiblePath(points) {
  let drawing = false;

  ctx.beginPath();
  points.forEach((point) => {
    if (!point.visible) {
      drawing = false;
      return;
    }

    if (!drawing) {
      ctx.moveTo(point.x, point.y);
      drawing = true;
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.stroke();
}

function project(lon, lat, cx, cy, radius) {
  const dLon = toRad(normalizeLon(lon - state.centerLon));
  const phi = toRad(lat);
  const centerPhi = toRad(state.centerLat);

  const cosPhi = Math.cos(phi);
  const x = cosPhi * Math.sin(dLon);
  const y = Math.sin(phi);
  const z = cosPhi * Math.cos(dLon);

  const y2 = y * Math.cos(centerPhi) - z * Math.sin(centerPhi);
  const z2 = y * Math.sin(centerPhi) + z * Math.cos(centerPhi);

  return {
    x: cx + radius * x,
    y: cy - radius * y2,
    z: z2,
    visible: z2 > -0.08
  };
}

function getCountryForDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateNumber = year * 10000 + month * 100 + day;
  const mixed = Math.imul(dateNumber ^ 0x9e3779b9, 2654435761) >>> 0;
  return countries[mixed % countries.length];
}

function getPlanForDate(country, date) {
  const variants = getCountryPlanVariants(country);
  const occurrenceIndex = getCountryOccurrenceIndex(country, date);
  const dishIndex = occurrenceIndex % variants.dishes.length;
  const adventureIndex = (occurrenceIndex + Math.floor(occurrenceIndex / variants.dishes.length)) % variants.adventures.length;

  return {
    dish: variants.dishes[dishIndex],
    adventure: variants.adventures[adventureIndex]
  };
}

function getCountryPlanVariants(country) {
  return countryPlanVariants[country.name] || {
    dishes: [
      { name: country.dish, text: country.dishText },
      { name: `Kolacja regionalna: ${country.name}`, text: `Plan kulinarny zmienia się razem z datą, więc ${country.name} nie powtarza stale tego samego dania.` }
    ],
    adventures: [
      { name: country.adventure, text: country.adventureText },
      { name: `Aktywny szlak: ${country.name}`, text: `Alternatywna propozycja na dzień, gdy ten kraj wróci w kalendarzu.` }
    ]
  };
}

function getCountryOccurrenceIndex(country, date) {
  const target = startOfDay(date);
  const direction = target >= planVariantAnchor ? 1 : -1;
  const cursor = startOfDay(planVariantAnchor);
  let occurrenceIndex = 0;

  while (direction > 0 ? cursor <= target : cursor >= target) {
    if (getCountryForDate(cursor).name === country.name) {
      if (isSameDay(cursor, target)) return Math.max(0, occurrenceIndex);
      occurrenceIndex += 1;
    }
    cursor.setDate(cursor.getDate() + direction);
  }

  const dateSeed = hashText(`${country.name}-${target.getFullYear()}-${target.getMonth()}-${target.getDate()}`);
  return dateSeed;
}

function hashText(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return hash;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isFutureDate(date) {
  return startOfDay(date).getTime() > today.getTime();
}

function isFutureSelection() {
  return isFutureDate(state.selectedDate);
}

function getFutureWaitMessage(date) {
  const target = startOfDay(date);
  const dayDiff = Math.max(1, Math.round((target.getTime() - today.getTime()) / 86400000));
  const selectedDateLabel = capitalize(dateFormatter.format(target));
  const waitText = dayDiff <= 1
    ? formatPolishCount(Math.max(1, Math.ceil((target.getTime() - Date.now()) / 3600000)), "godzinę", "godziny", "godzin")
    : formatPolishCount(dayDiff, "dzień", "dni", "dni");

  return {
    title: `Wróć za ${waitText}`,
    text: `${selectedDateLabel} odblokuje się dopiero w wybranym dniu. Do tego czasu plan zostaje niespodzianką.`
  };
}

function formatPolishCount(value, one, few, many) {
  const absolute = Math.abs(value);
  const mod10 = absolute % 10;
  const mod100 = absolute % 100;
  const unit = absolute === 1
    ? one
    : mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)
      ? few
      : many;

  return `${value} ${unit}`;
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();
}

function toRad(value) {
  return value * Math.PI / 180;
}

function normalizeLon(lon) {
  return ((lon + 540) % 360) - 180;
}

function shortestLonDelta(from, to) {
  return normalizeLon(to - from);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function haversine(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
