// src/data/menu.ts

export interface MenuItem {
  id: string;
  name: string;
  price: number | string; // дозволяє "100грн", "180грн / 100г", "100/115грн" тощо
  weight?: string;
  image?: string;
  categoryId: string;
  note?: string;
  noPower?: boolean;
}

export interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}
// Після інтерфейсів:
export const asset = (p: string) => {
  const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/+$/, ""); // "/my-restaurant"
  const rel  = String(p).replace(/^\/+/, "");                          // "img/benedict.jpg"
  return `${base}/${rel}`;                                             // "/my-restaurant/img/benedict.jpg"
};




/** ===== УСІ ПОЗИЦІЇ ===== */
export const items: MenuItem[] = [
  // ——— Сніданки (10:00–13:00)
  { id: "br1", name: "Яйця Бенедикт з прошуто та міксом салата", price: "245грн", categoryId: "breakfast", image: asset('/img/benedict.jpg')},
  { id: "br2", name: "Скрембел з лососем та авокадо", price: "280грн", categoryId: "breakfast", image: asset('/img/skrembl.webp'),noPower: true },
  { id: "br3", name: "Англійський сніданок", price: "245грн", categoryId: "breakfast", image: asset('/img/engsnidanok.webp'),noPower: true },
  { id: "br5", name: "Шакшука", price: "220грн", categoryId: "breakfast", image: asset('/img/shakshuka.webp'),noPower: true },

  // ——— Закуски до пива
  { id: "beer1", name: "Креветки (смажені або відварені у травах)", price: "280грн", weight: "230г", categoryId: "beer", image: asset('/img/krevetky.webp') },
  { id: "beer2", name: "Кільця кальмарів фрі з соусом", price: "165грн", weight: "150г", categoryId: "beer", image: asset('/img/kalmar.jpg') },
  { id: "beer3", name: "Грінки житні із часниковим соусом", price: "95грн", weight: "100/50г", categoryId: "beer", image: asset('/img/grinky.JPG') },
  { id: "beer4", name: "Свинячі вушка", price: "120/140грн", categoryId: "beer", image: asset('/img/vooha.webp') },
  { id: "beer5", name: "Крильця в медово-імбирній глазурі", price: "145грн", weight: "220г", categoryId: "beer", image: asset('/img/krylca-medovo.webp') },
  { id: "beer6", name: "Крильця баффало", price: "135грн", weight: "220г", categoryId: "beer", image: asset('/img/bafalo.webp') },
  { id: "beer8", name: "Хрумкі крильця з соусом блю чіз", price: "180грн", weight: "250г", categoryId: "beer", image: asset('/img/krylca.webp') },
  { id: "beer9", name: "Рисові чипси", price: "80грн", categoryId: "beer", image: asset('/img/rys.jpg') },
  { id: "beer10", name: "Цибулеві кільця", price: "145грн", weight: "150г", categoryId: "beer", image: asset('/img/cibulya.JPG') },
  { id: "beer10", name: "Креветки Панко", price: "245грн", categoryId: "beer" },

  // ——— Холодні закуски
  { id: "cold1", name: "Оселедчик під горілку", price: "195грн", weight: "100/150/30/50г", categoryId: "cold-apps", image: asset('/img/oseledec.jpg'),noPower: true },
  { id: "cold2", name: "Лосось с/с 80г", price: "190грн", weight: "80г", categoryId: "cold-apps",noPower: true },
  { id: "cold3", name: "Домашні соління", price: "180грн", categoryId: "cold-apps", image: asset('/img/solinnia.webp'),noPower: true },
  { id: "cold4", name: "М’ясна нарізка 250г", price: "250грн", weight: "250г", categoryId: "cold-apps",noPower: true },
  { id: "cold5", name: "Овочева нарізка 250г", price: "150грн", weight: "250г", categoryId: "cold-apps",noPower: true },
  { id: "cold6", name: "А по 50 400г", price: "245грн", weight: "400г", categoryId: "cold-apps", image: asset('/img/apo50.webp'),noPower: true },
  { id: "cold7", name: "Сирна нарізка 200г", price: "250грн", weight: "200г", categoryId: "cold-apps", image: asset('/img/syrnanarizka.webp'),noPower: true },
  { id: "cold8", name: "Форшмак з оселедця 150г", price: "180грн", weight: "150г", categoryId: "cold-apps", image: asset('/img/farshmak.webp'),noPower: true },
  { id: "cold9", name: "Брускети (з червоною рибою, хамоном та креветкою)", price: "380грн", weight: "9шт", categoryId: "cold-apps", image: asset('/img/bruskety.webp'),noPower: true },
  { id: "cold9", name: "Брускети (з камамбером та грушею)", price: "330грн", weight: "9шт", categoryId: "cold-apps",noPower: true },
  { id: "cold10", name: "Огірковий рол з лососем та авокадо", price: "245грн", categoryId: "cold-apps", image: asset('/img/vogurok-roll.webp'),noPower: true },
  { id: "cold10", name: "Тартар з лосося та авокадо", price: "265грн", categoryId: "cold-apps", image: asset('/img/tartar.webp'),noPower: true },
  { id: "cold10", name: "Гуакамоле", price: "200грн", categoryId: "cold-apps", noPower: true },

  // ——— Салати
  { id: "sal1", name: "Грузинський", price: "180грн", weight: "250г", categoryId: "salads", image: asset('/img/georgian.jpg'),noPower: true },
  { id: "sal2", name: "Карамелізовані баклажани з крем-сиром", price: "200грн", weight: "220г", categoryId: "salads",image: asset('/img/baklazany.webp'),noPower: true },
  { id: "sal3", name: "Грецький", price: "180грн", weight: "280г", categoryId: "salads", image: asset('/img/grec-salad.JPG'),noPower: true },
  { id: "sal4", name: "Цезар з куркою гриль", price: "195грн", weight: "250г", categoryId: "salads",image: asset('/img/cezar.webp'),noPower: true },
  { id: "sal5", name: "Цезар з морепродуктами", price: "270грн", weight: "250г", categoryId: "salads" },
  { id: "sal6", name: "Мікс салата з карамелізованою грушею та прошуто", price: "270грн", categoryId: "salads",image: asset('/img/grusha.JPG'),noPower: true },
  { id: "sal7", name: "Теплий салат з телятиною", price: "210грн", weight: "250г", categoryId: "salads",image: asset('/img/hot.jpg'),noPower: true },
  { id: "sal8", name: "Провінційний", price: "130грн", weight: "250г", categoryId: "salads", image: asset('/img/provinziynyi.jpg'),noPower: true },
  { id: "sal9", name: "Олів’є з язиком та домашнім майонезом", price: "160грн", weight: "180г", categoryId: "salads",image: asset('/img/olivie.webp'),noPower: true },
  { id: "sal10", name: "З куркою та овочами гриль", price: "200грн", weight: "250г", categoryId: "salads",image: asset('/img/grilsalad.JPG') },
  { id: "sal11", name: "Нісуаз (з тунцем та артишоком)", price: "250грн", weight: "250г", categoryId: "salads",image: asset('/img/nisuaz.webp'),noPower: true },
  { id: "sal12", name: "Салат з креветкою та крутоном", price: "190грн", categoryId: "salads",noPower: true },
  { id: "sal12", name: "Хріновий", price: "170грн", categoryId: "salads",image: asset('/img/hrinovyi.jpg'),noPower: true },
  { id: "sal12", name: "Боул з креветкою та лососем", price: "390грн", categoryId: "salads",image: asset('/img/boul.webp'),noPower: true },
  { id: "sal12", name: "Салат з креветкою гриль та авокадо", price: "250грн", categoryId: "salads",image: asset('/img/krev-salad.JPG'),noPower: true},
  { id: "sal12", name: "Пряний салат з телятиною", price: "190грн", categoryId: "salads",image: asset('/img/pryanyi-salad.jpg'),noPower: true },

  // ——— Гарячі закуски
  { id: "hot1", name: "Сулугуні в лаваші із зеленню та томатом", price: "210грн", categoryId: "hot-apps",noPower: true },
  { id: "hot2", name: "Хрумкий сулугуні з журавлинним соусом", price: "180грн", categoryId: "hot-apps", image: asset('/img/suluguni.JPG') },
  { id: "hot3", name: "Мексиканські начосі з телятиною", price: "210грн", categoryId: "hot-apps",image: asset('/img/nachos.jpg') },
  { id: "hot4", name: "Фіш & Чіпс", price: "200грн", categoryId: "hot-apps" },

  // ——— Супи
  { id: "sou1", name: "Борщ з телячим ребром та справжні українські закуски", price: "180грн", categoryId: "soups",image: asset('/img/borsh.jpg'),noPower: true },
  { id: "sou2", name: "Солянка збірна м’ясна", price: "145грн", categoryId: "soups",image: asset('/img/solyanka.jpg'),noPower: true },
  { id: "sou3", name: "Суп з фрікадельками", price: "130грн", categoryId: "soups",image: asset('/img/frik.jpg'),noPower: true },
  { id: "sou4", name: "Окрошка (курка/телятина/сьомга)", price: "130/160/190грн", categoryId: "soups",noPower: true },
  { id: "sou5", name: "Суп Рамен", price: "180грн", categoryId: "soups",image: asset('/img/ramen.webp'),noPower: true },
  { id: "sou6", name: "Том ям", price: "280грн", categoryId: "soups",image: asset('/img/tomyam.jpg'),noPower: true },
  { id: "sou3", name: "Бограч", price: "230грн", categoryId: "soups" },
  { id: "sou6", name: "Грибна юшка", price: "230грн", categoryId: "soups",image: asset('/img/ushka.jpg'),noPower: true },

  // ——— Риба та морепродукти
  { id: "fish1", name: "Тарілка мідій", price: "350грн", categoryId: "fish",image: asset('/img/midii.jpg'),noPower: true },
  { id: "fish2", name: "Стейк лосося", price: "270грн/100г", weight: "100г", categoryId: "fish",image: asset('/img/losos.webp') },
  { id: "fish3", name: "Три Карася", price: "210грн", weight: "вихід 350 грам (1,2 або 3 штуки)", categoryId: "fish", image: asset('/img/3karaki.jpg')},
  { id: "fish4", name: "Скумбрія", price: "90грн", weight:"100г", categoryId: "fish",noPower: true },
  { id: "fish5", name: "Соте з морепродуктів", price: "280грн", categoryId: "fish", image: asset('/img/sote.webp'),noPower: true },
  { id: "fish6", name: "Дорадо на мангалі", price: "150грн", weight:"100г", categoryId: "fish", image: asset('/img/dorado.jpg'),noPower: true },

  // ——— Страви з м’яса та птиці
  { id: "meat1", name: "Свинячі реберця томлені у вишневому соку", price: "260грн", weight: "350/100г", categoryId: "meat", image: asset('/img/reberca-tomleni.jpg') },
  { id: "meat2", name: "Медальйони з грибним соусом", price: "275грн", weight: "150г", categoryId: "meat",image: asset('/img/medaliony.webp'),noPower: true },
  { id: "meat3", name: "Кисло-солодка свинина з овочами", price: "230грн", categoryId: "meat",image: asset('/img/svynyna.webp'),noPower: true },
  { id: "meat4", name: "Куряче філе в вершковому соусі зі шпинатом та чері", price: "220грн", categoryId: "meat",image: asset('/img/file.webp'),noPower: true },
  { id: "meat5", name: "Телячий стейк Томагавк", price: "195грн / 100г", weight: "100г", categoryId: "meat",image: asset('/img/tomahavk.JPG'),noPower: true },
  { id: "meat6", name: "Стейк Рібай", price: "235грн / 100г", weight: "100г", categoryId: "meat",image: asset('/img/ribai.webp'),noPower: true },
  { id: "meat5", name: "Курча кокле", price: "300грн / 100г", weight: "100г", categoryId: "meat" },

  // ——— Піца (30см)
  { id: "pz1", name: "Збірна (курка, шинка, гриби, сир)", price: "230грн", weight: "30см", categoryId: "pizza",image: asset('/img/piza.jpg') },
  { id: "pz2", name: "Пепероні (салямі, томати, сир)", price: "165грн", weight: "30см", categoryId: "pizza",image: asset('/img/peperoni.JPG') },
  { id: "pz3", name: "Гаваї", price: "185грн", weight: "30см", categoryId: "pizza", image: asset('/img/hawai.jpg') },
  { id: "pz4", name: "Цезарь (соус \"Цезарь\", курка, пармезан, томати)", price: "210грн", weight: "30см", categoryId: "pizza" },
  { id: "pz5", name: "Маргарита (сир, помідори)", price: "150грн", weight: "30см", categoryId: "pizza" },
  { id: "pz6", name: "4 сира (моцарела, радомер, дорблю, голандський)", price: "250грн", weight: "30см", categoryId: "pizza", image: asset('/img/syrpizza.jpg') },
  { id: "pz7", name: "З морепродуктами", price: "250грн", weight: "30см", categoryId: "pizza", image: asset('/img/moreprodukty-pizza.jpg') },
  { id: "pz7", name: "Мисливська", price: "250грн", weight: "30см", categoryId: "pizza", image: asset('/img/myslyvska.webp') },

  // ——— Паста
  { id: "ps1", name: "Карбонара", price: "200грн", categoryId: "pasta", image: asset('/img/karbonara.webp'),noPower: true },
  { 
  id: "ps2", 
  name: "4 сира", 
  price: "180грн", 
  categoryId: "pasta",
  image: asset('/img/pasta-syr.webp'),
  noPower: true
},
  { id: "ps3", name: "Удон з телятиною та овочами", price: "220грн", categoryId: "pasta",image: asset('/img/udon.JPG'),noPower: true },

  // ——— Фішки Карасів (стріт-фуд)
  { id: "st1", name: "Чебурек з м’ясом", price: "135грн", categoryId: "street",image: asset('/img/cheburek.JPG') },
  { id: "st2", name: "Чебурек фірмовий (м’ясо, сир, гриби)", price: "165грн", categoryId: "street",image: asset('/img/cheburek.JPG') },
  { id: "st3", name: "Чебурек з сиром (бринза)", price: "140грн", categoryId: "street",image: asset('/img/cheburek.JPG') },
  { id: "st4", name: "Чебурек телятина", price: "165грн", categoryId: "street",image: asset('/img/cheburek.JPG') },
  { id: "st5", name: "Бургер з куркою", price: "210грн", categoryId: "street",image: asset('/img/burg.webp') },
  { id: "st5", name: "Бургер 'Цезар'", price: "235грн", categoryId: "street" },
  { id: "st6", name: "Бургер 'Три Карася' з телятиною, картопляними діпами та соусом", price: "250грн", categoryId: "street",image: asset('/img/burger.jpg') },
  { id: "st7", name: "Шаурма", price: "180грн", categoryId: "street",image: asset('/img/shaurma.jpg'),noPower: true },
  { id: "st8", name: "Пельмені з телятиною", price: "150грн", weight: "380г", categoryId: "street",image: asset('/img/pelmeni.jpg'),noPower: true },
  { id: "st9", name: "Вареники з картоплею та грибами", price: "140грн", weight: "380г", categoryId: "street",image: asset('/img/varenyky.webp'),noPower: true },
  { id: "st9", name: "Вареники з вишнею", price: "200грн", weight: "5шт", categoryId: "street",image: asset('/img/varenyky-vyshnya.jpg'),noPower: true },
  { id: "st10", name: "Курочка спайсі", price: "180грн", categoryId: "street",image: asset('/img/kurochka.webp') },
  { id: "st11", name: "Нагетси+фрі", price: "210грн", categoryId: "street" },
  { id: "st12", name: "Деруни", price: "180грн", categoryId: "street",image: asset('/img/dezuny.jpg'),noPower: true },
  { id: "st9", name: "Грінки по-гуцульські", price: "230грн", weight: "3шт", categoryId: "street",image: asset('/img/gutsul.jpg'),noPower: true },

  // ——— Страви на мангалі
  { id: "gr1", name: "Люля-кебаб м’ясний ", price: "175грн", weight: "200/50/50г", categoryId: "mangal",noPower: true },
  { id: "gr2", name: "Шашлик зі свинячого ошийка", price: "120грн / 100г", weight: "100г", categoryId: "mangal",noPower: true },
  { id: "gr3", name: "Шашлик зі свинячої вирізки", price: "120грн / 100г", weight: "100г", categoryId: "mangal",noPower: true },
  { id: "gr3", name: "Шашлик з курячого філе", price: "80грн / 100г", weight: "100г", categoryId: "mangal",image: asset('/img/kur-shash.webp'),noPower: true },
  { id: "gr4", name: "Челогач", price: "140грн / 100г", weight: "100г", categoryId: "mangal",image: asset('/img/chelogach.jpg'),noPower: true },
  { id: "gr3", name: "Курячий стейк", price: "70грн / 100г", weight: "100г", categoryId: "mangal",noPower: true },
  { id: "gr4", name: "Ковбаски Гриль", price: "80грн / 100г", weight: "100г", categoryId: "mangal",image: asset('/img/kovbasky.webp'),noPower: true },
  { id: "gr5", name: "Овочі на мангалі", price: "170грн", weight: "250г", categoryId: "mangal",noPower: true },
  { id: "gr6", name: "Кукурудза на мангалі", price: "100грн", weight: "350г", categoryId: "mangal", image: asset('/img/kykyryza.jpg'),noPower: true },
  { id: "gr7", name: "Реберця на мангалі", price: "115грн / 100г", weight: "100г", categoryId: "mangal",noPower: true },

  // ——— Страви на компанію
  { id: "cmp1", name: "Асорті на мангалі", price: "880грн", weight: "600/250/100г", categoryId: "company",image: asset('/img/asortinamangali.jpg'),noPower: true },
  { id: "cmp2", name: "М’ясний розгуляй", price: "920грн", weight: "1000/200г", categoryId: "company"},
  { id: "cmp3", name: "Дошка пивних закусок", price: "590грн", weight: "1000г", categoryId: "company" },
  { id: "cmp4", name: "Сковорідка ‘Три карасі’", price: "750грн", weight: "1000г", categoryId: "company",image: asset('/img/skovoridka.jpg') },
  { id: "cmp5", name: "Рулька", price: "500грн", weight: "1300г", categoryId: "company",image: asset('/img/rulka.JPG') },

  // ——— Гарніри
  { id: "sd1", name: "Картопля фрі", price: "80грн", weight: "150г", categoryId: "sides" },
  { id: "sd2", name: "Картопля по-селянськи", price: "85грн", weight: "150г", categoryId: "sides" },
  { id: "sd3", name: "Картопля смажена з грибами та цибулею", price: "135грн", weight: "150г", categoryId: "sides", image: asset('/img/kartoshkagryby.jpg') },
  { id: "sd4", name: "Картопляні діпи", price: "80грн", weight: "150г", categoryId: "sides" },
  { id: "sd5", name: "Картопля-бургер з беконом", price: "120грн", categoryId: "sides" },

  // ——— Соуси
  { id: "sauce1", name: "Гірчиця; хрін; тар-тар; часниковий; аджика; сацебелі; барбекю; солодкий чилі", price: "25грн", weight: "50г", categoryId: "sauces" },
  { id: "sauce2", name: "Йогуртовий", price: "30грн", weight: "50г", categoryId: "sauces" },

  // ——— Десерти
  { id: "ds1", name: "Штрудель з вишнею", price: "220грн", categoryId: "deserts",image: asset('/img/shtrudel.jpg') },
  { id: "ds2", name: "Мигдально-шоколадний торт з морозивом", price: "190грн", categoryId: "deserts",image: asset('/img/tort.jpg'),noPower: true },
];

/** ===== КАТЕГОРІЇ ===== */
export const categories = [
  { id: "breakfast", name: "Сніданки (10:00–13:00)" },
  { id: "beer", name: "Закуски до пива" },
  { id: "cold-apps", name: "Холодні закуски" },
  { id: "salads", name: "Салати" },
  { id: "hot-apps", name: "Гарячі закуски" },
  { id: "soups", name: "Супи" },
  { id: "fish", name: "Риба та морепродукти" },
  { id: "meat", name: "Страви з м’яса та птиці" },
  { id: "pizza", name: "Піца (30см)" },
  { id: "pasta", name: "Паста" },
  { id: "street", name: "Фішки Карасів" },
  { id: "mangal", name: "Страви на мангалі" },
  { id: "company", name: "Страви на компанію" },
  { id: "sides", name: "Гарніри" },
  { id: "sauces", name: "Соуси" },
  { id: "deserts", name: "Десерти" },
];

/** Для рендера секцій */
export const categoriesWithItems: Category[] = categories.map((c) => ({
  ...c,
  items: items.filter((i) => i.categoryId === c.id),
}));

export const allItems: MenuItem[] = items;
