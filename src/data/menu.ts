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

/** ===== УСІ ПОЗИЦІЇ ===== */
export const items: MenuItem[] = [
  // ——— Сніданки (10:00–13:00)
  { id: "br1", name: "Яйця Бенедикт з прошуто та міксом салата", price: "200грн", categoryId: "breakfast", image: "/img/yaicayebuchi.webp",noPower: true },
  { id: "br2", name: "Скрембел з лососем та авокадо", price: "250грн", categoryId: "breakfast", image: "/img/skrembl.webp",noPower: true },
  { id: "br3", name: "Англійський сніданок", price: "180грн", categoryId: "breakfast", image: "/img/engsnidanok.webp",noPower: true },
  { id: "br5", name: "Шакшука", price: "160грн", categoryId: "breakfast", image: "/img/shakshuka.webp",noPower: true },

  // ——— Закуски до пива
  { id: "beer1", name: "Креветки (смажені або відварені у травах) 230г", price: "265грн", weight: "230г", categoryId: "beer", image: "/img/krevetky.webp" },
  { id: "beer2", name: "Кільця кальмарів фрі з соусом 150г", price: "155грн", weight: "150г", categoryId: "beer" },
  { id: "beer3", name: "Грінки житні із часниковим соусом 100/50г", price: "80грн", weight: "100/50г", categoryId: "beer" },
  { id: "beer4", name: "Свинячі вушка", price: "105/120грн", categoryId: "beer" },
  { id: "beer5", name: "Крильця в медово-імбирній глазурі 220г", price: "110грн", weight: "220г", categoryId: "beer", image: "/img/krylca-medovo.webp" },
  { id: "beer6", name: "Крильця баффало 220г", price: "115грн", weight: "220г", categoryId: "beer", image: "/img/bafalo.webp" },
  { id: "beer8", name: "Хрумкі крильця з соусом блю чіз 250г", price: "150грн", weight: "250г", categoryId: "beer", image: "/img/krylca.webp" },
  { id: "beer9", name: "Рисові чипси", price: "70грн", categoryId: "beer" },
  { id: "beer10", name: "Цибулеві кільця 150г", price: "130грн", weight: "150г", categoryId: "beer" },
  { id: "beer10", name: "Креветки Панко", price: "220грн", categoryId: "beer" },

  // ——— Холодні закуски
  { id: "cold1", name: "Оселедчик під горілку 100/150/30/50г", price: "170грн", weight: "100/150/30/50г", categoryId: "cold-apps", image: "/img/oseledec.jpg",noPower: true },
  { id: "cold2", name: "Лосось с/с 80г", price: "190грн", weight: "80г", categoryId: "cold-apps",noPower: true },
  { id: "cold3", name: "Домашні соління", price: "150грн", categoryId: "cold-apps", image: "/img/solinnia.webp",noPower: true },
  { id: "cold4", name: "М’ясна нарізка 250г", price: "220грн", weight: "250г", categoryId: "cold-apps",noPower: true },
  { id: "cold5", name: "Овочева нарізка 250г", price: "120грн", weight: "250г", categoryId: "cold-apps",noPower: true },
  { id: "cold6", name: "А по 50 400г", price: "200грн", weight: "400г", categoryId: "cold-apps", image: "/img/apo50.webp",noPower: true },
  { id: "cold7", name: "Сирна нарізка 200г", price: "240грн", weight: "200г", categoryId: "cold-apps", image: "/img/syrnanarizka.webp",noPower: true },
  { id: "cold8", name: "Форшмак з оселедця 150г", price: "150грн", weight: "150г", categoryId: "cold-apps", image: "/img/farshmak.webp",noPower: true },
  { id: "cold9", name: "Брускети (з червоною рибою, хамоном та креветкою) 9шт", price: "350грн", weight: "9шт", categoryId: "cold-apps", image: "/img/bruskety.webp",noPower: true },
  { id: "cold10", name: "Огірковий рол з лососем та авокадо", price: "210грн", categoryId: "cold-apps", image: "/img/vogurok-roll.webp",noPower: true },
  { id: "cold10", name: "Тартар з лосося та авокадо", price: "250грн", categoryId: "cold-apps", image: "/img/tartar.webp",noPower: true },

  // ——— Салати
  { id: "sal1", name: "Грузинський", price: "150грн", weight: "250г", categoryId: "salads", image: "/img/gruzynskyi.jpg",noPower: true },
  { id: "sal2", name: "Карамелізовані баклажани з крем-сиром", price: "190грн", weight: "220г", categoryId: "salads",image: "/img/baklazany.webp",noPower: true },
  { id: "sal3", name: "Грецький", price: "160грн", weight: "280г", categoryId: "salads", image: "/img/grec-salad.JPG",noPower: true },
  { id: "sal4", name: "Цезар з куркою гриль", price: "180грн", weight: "250г", categoryId: "salads",image: "/img/cezar.webp",noPower: true },
  { id: "sal5", name: "Цезар з морепродуктами", price: "250грн", weight: "250г", categoryId: "salads" },
  { id: "sal6", name: "Мікс салата з карамелізованою грушею та прошуто", price: "250грн", categoryId: "salads",image: "/img/grusha-salad.webp",noPower: true },
  { id: "sal7", name: "Теплий салат з телятиною", price: "190грн", weight: "250г", categoryId: "salads",image: "/img/teplyi-salad.webp",noPower: true },
  { id: "sal8", name: "Провінційний", price: "100грн", weight: "250г", categoryId: "salads", image: "/img/provinziynyi.jpg",noPower: true },
  { id: "sal9", name: "Олів’є з язиком та домашнім майонезом", price: "140грн", weight: "180г", categoryId: "salads",image: "/img/olivie.webp",noPower: true },
  { id: "sal10", name: "З куркою та овочами гриль", price: "180грн", weight: "250г", categoryId: "salads" },
  { id: "sal11", name: "Нісуаз (з тунцем та артишоком)", price: "220грн", weight: "250г", categoryId: "salads",image: "/img/nisuaz.webp",noPower: true },
  { id: "sal12", name: "Салат з креветкою та крутоном", price: "190грн", categoryId: "salads",noPower: true },
  { id: "sal12", name: "Хріновий", price: "160грн", categoryId: "salads",image: "/img/hrinovyi.jpg",noPower: true },
  { id: "sal12", name: "Боул з креветкою та лососем", price: "390грн", categoryId: "salads",image: "/img/boul.webp",noPower: true },
  { id: "sal12", name: "Салат з креветкою гриль та авокадо", price: "250грн", categoryId: "salads",noPower: true},
  { id: "sal12", name: "Пряний салат з телятиною", price: "190грн", categoryId: "salads",image: "/img/pryanyi-salad.jpg",noPower: true },

  // ——— Гарячі закуски
  { id: "hot1", name: "Сулугуні в лаваші із зеленню та томатом", price: "190грн", categoryId: "hot-apps",noPower: true },
  { id: "hot2", name: "Хрумкий сулугуні з журавлинним соусом", price: "165грн", categoryId: "hot-apps" },
  { id: "hot3", name: "Мексиканські начосі з телятиною", price: "190грн", categoryId: "hot-apps",image: "/img/nachos.jpg" },
  { id: "hot4", name: "Фіш & Чіпс", price: "190грн", categoryId: "hot-apps" },
  { id: "hot3", name: "Хрустка моцарела з яйцем пашот", price: "185грн", categoryId: "hot-apps",image: "/img/mocarela.webp" },
  { id: "hot4", name: "Овочі темпура", price: "190грн", categoryId: "hot-apps" },

  // ——— Супи
  { id: "sou1", name: "Борщ з телячим ребром та справжні українські закуски", price: "170грн", categoryId: "soups",image: "/img/borsh.jpg",noPower: true },
  { id: "sou2", name: "Солянка збірна м’ясна", price: "125грн", categoryId: "soups",noPower: true },
  { id: "sou3", name: "Суп з фрікадельками", price: "110грн", categoryId: "soups",noPower: true },
  { id: "sou4", name: "Окрошка (курка/телятина/сьомга)", price: "100/140/185грн", categoryId: "soups",noPower: true },
  { id: "sou5", name: "Суп Рамен", price: "140грн", categoryId: "soups",image: "/img/ramen.webp",noPower: true },
  { id: "sou6", name: "Том ям", price: "250грн", categoryId: "soups",image: "/img/tomyam.jpg",noPower: true },
  { id: "sou3", name: "Бограч", price: "195грн", categoryId: "soups" },
  { id: "sou6", name: "Грибна юшка", price: "185грн", categoryId: "soups",image: "/img/ushka.jpg",noPower: true },

  // ——— Риба та морепродукти
  { id: "fish1", name: "Тарілка мідій", price: "340грн", categoryId: "fish",image: "/img/midii.jpg",noPower: true },
  { id: "fish2", name: "Стейк лосося", price: "270грн/100г", weight: "100г", categoryId: "fish",image: "/img/losos.webp" },
  { id: "fish3", name: "Три Карасі", price: "195грн", categoryId: "fish", image: "/img/3karaki.jpg"},
  { id: "fish4", name: "Скумбрія", price: "80грн", weight:"100г", categoryId: "fish",noPower: true },
  { id: "fish5", name: "Соте з морепродуктів", price: "260грн", categoryId: "fish", image: "/img/sote.webp",noPower: true },
  { id: "fish6", name: "Дорадо на мангалі", price: "150грн", weight:"100г", categoryId: "fish", image: "/img/dorado.jpg",noPower: true },

  // ——— Страви з м’яса та птиці
  { id: "meat1", name: "Свинячі реберця томлені у вишневому соку", price: "220грн", weight: "350/100г", categoryId: "meat", image: "/img/reberca-tomleni.jpg" },
  { id: "meat2", name: "Свинячі медальйони з грибним соусом", price: "270грн", weight: "150г", categoryId: "meat",image: "/img/medaliony.webp",noPower: true },
  { id: "meat3", name: "Кисло-солодка свинина з овочами", price: "185грн", categoryId: "meat",image: "/img/svynyna.webp",noPower: true },
  { id: "meat4", name: "Куряче філе в вершковому соусі зі шпинатом та чері", price: "200грн", categoryId: "meat",image: "/img/file.webp",noPower: true },
  { id: "meat5", name: "Телячий стейк Томагавк", price: "180грн / 100г", weight: "100г", categoryId: "meat",noPower: true },
  { id: "meat6", name: "Стейк Рібай", price: "220грн / 100г", weight: "100г", categoryId: "meat",image: "/img/ribai.webp",noPower: true },
  { id: "meat5", name: "Курча кокле", price: "300грн / 100г", weight: "100г", categoryId: "meat" },

  // ——— Піца (30см)
  { id: "pz1", name: "Збірна (курка, шинка, гриби, сир)", price: "230грн", weight: "30см", categoryId: "pizza" },
  { id: "pz2", name: "Пепероні (салямі, томати, сир)", price: "160грн", weight: "30см", categoryId: "pizza" },
  { id: "pz3", name: "Гаваї", price: "170грн", weight: "30см", categoryId: "pizza", image: "/img/hawai.jpg" },
  { id: "pz4", name: "Цезарь (соус \"Цезарь\", курка, пармезан, томати)", price: "200грн", weight: "30см", categoryId: "pizza" },
  { id: "pz5", name: "Маргарита (сир, помідори)", price: "150грн", weight: "30см", categoryId: "pizza" },
  { id: "pz6", name: "4 сира (моцарела, радомер, дорблю, голандський)", price: "230грн", weight: "30см", categoryId: "pizza", image: "/img/syrpizza.jpg" },
  { id: "pz7", name: "З морепродуктами", price: "250грн", weight: "30см", categoryId: "pizza", image: "/img/moreprodukty-pizza.jpg" },
  { id: "pz7", name: "Мисливська", price: "220грн", weight: "30см", categoryId: "pizza", image: "/img/myslyvska.webp" },

  // ——— Паста
  { id: "ps1", name: "Карбонара", price: "180грн", categoryId: "pasta", image: "/img/karbonara.webp",noPower: true },
  { 
  id: "ps2", 
  name: "4 сира", 
  price: "180грн", 
  categoryId: "pasta",
  image: "/img/pasta-syr.webp",
  noPower: true
},
  { id: "ps3", name: "Удон з телятиною та овочами", price: "210грн", categoryId: "pasta",image: "/img/udon.JPG",noPower: true },

  // ——— Фішки Карасів (стріт-фуд)
  { id: "st1", name: "Чебурек з м’ясом", price: "110грн", categoryId: "street",image: "/img/cheburek.JPG" },
  { id: "st2", name: "Чебурек фірмовий (м’ясо, сир, гриби)", price: "140грн", categoryId: "street",image: "/img/cheburek.JPG" },
  { id: "st3", name: "Чебурек з сиром (бринза)", price: "120грн", categoryId: "street",image: "/img/cheburek.JPG" },
  { id: "st4", name: "Чебурек телятина", price: "140грн", categoryId: "street",image: "/img/cheburek.JPG" },
  { id: "st5", name: "Бургер з куркою", price: "200грн", categoryId: "street" },
  { id: "st6", name: "Бургер 'Три Карася' з телятиною, картопляними діпами та соусом", price: "220грн", categoryId: "street",image: "/img/burger.jpg" },
  { id: "st7", name: "Шаурма", price: "150грн", categoryId: "street",image: "/img/shaurma.jpg",noPower: true },
  { id: "st8", name: "Пельмені з телятиною 380г", price: "135грн", weight: "380г", categoryId: "street",image: "/img/pelmeni.jpg",noPower: true },
  { id: "st9", name: "Вареники з картоплею та грибами 380г", price: "120грн", weight: "380г", categoryId: "street",image: "/img/varenyky.webp",noPower: true },
  { id: "st10", name: "Курочка спайсі", price: "160грн", categoryId: "street",image: "/img/kurochka.webp" },
  { id: "st11", name: "Нагетси+фрі", price: "200грн", categoryId: "street" },
  { id: "st12", name: "Деруни", price: "150грн", categoryId: "street",image: "/img/dezuny.jpg",noPower: true },

  // ——— Страви на мангалі
  { id: "gr1", name: "Люля-кебаб м’ясний 200/50/50г", price: "170грн", weight: "200/50/50г", categoryId: "mangal",noPower: true },
  { id: "gr2", name: "Шашлик зі свинячого ошийка 100г", price: "115грн / 100г", weight: "100г", categoryId: "mangal",noPower: true },
  { id: "gr3", name: "Шашлик зі свинячої вирізки 100г", price: "115грн / 100г", weight: "100г", categoryId: "mangal",noPower: true },
  { id: "gr4", name: "Челогач", price: "115грн / 100г", weight: "100г", categoryId: "mangal",image: "/img/chelohach.webp",noPower: true },
  { id: "gr5", name: "Овочі на мангалі", price: "150грн", weight: "250г", categoryId: "mangal",noPower: true },
  { id: "gr6", name: "Кукурудза на мангалі", price: "80грн", weight: "350г", categoryId: "mangal", image: "/img/kykyryza.jpg",noPower: true },
  { id: "gr7", name: "Реберця на мангалі", price: "100грн / 100г", weight: "100г", categoryId: "mangal",noPower: true },

  // ——— Страви на компанію
  { id: "cmp1", name: "Асорті на мангалі", price: "850грн", weight: "600/250/100г", categoryId: "company",image: "/img/asortinamangali.jpg",noPower: true },
  { id: "cmp2", name: "М’ясний розгуляй", price: "900грн", weight: "1000/200г", categoryId: "company"},
  { id: "cmp3", name: "Дошка пивних закусок", price: "530грн", weight: "1000г", categoryId: "company" },
  { id: "cmp4", name: "Сковорідка ‘Три карасі’", price: "700грн", weight: "1000г", categoryId: "company" },
  { id: "cmp5", name: "Рулька", price: "500грн", weight: "1300г", categoryId: "company",image: "/img/rulka.JPG" },
  { id: "cmp6", name: "Каре ягняти", price: "560грн", categoryId: "company" },
  { id: "cmp7", name: "Телячі карамелізовані кістки з тостами", price: "250грн", categoryId: "company" },

  // ——— Гарніри
  { id: "sd1", name: "Картопля фрі", price: "70грн", weight: "150г", categoryId: "sides" },
  { id: "sd2", name: "Картопля по-селянськи", price: "75грн", weight: "150г", categoryId: "sides" },
  { id: "sd3", name: "Картопля смажена з грибами та цибулею", price: "100грн", weight: "150г", categoryId: "sides" },
  { id: "sd4", name: "Картопляні діпи", price: "70грн", weight: "150г", categoryId: "sides" },
  { id: "sd5", name: "Картопля-бургер з беконом", price: "120грн", categoryId: "sides" },

  // ——— Соуси
  { id: "sauce1", name: "Гірчиця; хрін; тар-тар; часниковий; аджика; сацебелі; барбекю; солодкий чилі", price: "25грн", weight: "50г", categoryId: "sauces" },
  { id: "sauce2", name: "Йогуртовий", price: "30грн", weight: "50г", categoryId: "sauces" },

  // ——— Десерти
  { id: "ds1", name: "Штрудель з вишнею", price: "160грн", categoryId: "deserts",image: "/img/shtrudel.jpg" },
  { id: "ds2", name: "Мигдально-шоколадний торт з морозивом", price: "170грн", categoryId: "deserts",image: "/img/tort.jpg",noPower: true },
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
