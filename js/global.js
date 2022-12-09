const search_results = [
  { id: 1, from: "تهران", to: "شیراز", trip: "return", depart: 1670664600000, return: 1671190200000 },
  { id: 2, from: "تهران", to: "مشهد", trip: "oneway", depart: 1670671800000 },
  { id: 3, from: "مشهد", to: "اصفهان", trip: "return", depart: 1670824800000, return: 1671469200000 },
  { id: 4, from: "شیراز", to: "تبریز", trip: "return", depart: 1670776200000, return: 1671195600000 },
  { id: 5, from: "بندرعباس", to: "تهران", trip: "oneway", depart: 1671512400000 },
  { id: 6, from: "اهواز", to: "مشهد", trip: "oneway", depart: 1671348600000 },
  { id: 7, from: "تبریز", to: "زاهدان", trip: "return", depart: 1671187500000, return: 1671632100000 },
  { id: 8, from: "رشت", to: "اصفهان", trip: "oneway", depart: 1671810600000 },
  { id: 9, from: "کرمان", to: "بندرعباس", trip: "oneway", depart: 1671978600000 },
  { id: 10, from: "رشت", to: "مشهد", trip: "return", depart: 1672254900000, return: 1672851600000 },
  { id: 11, from: "کرج", to: "بوشهر", trip: "oneway", depart: 1672056000000 },
  { id: 12, from: "بندرعباس", to: "مشهد", trip: "oneway", depart: 1672318800000 },
  { id: 13, from: "شیراز", to: "تهران", trip: "return", depart: 1672561800000, return: 1672914600000 },
  { id: 14, from: "مشهد", to: "شیراز", trip: "return", depart: 1672662600000, return: 1673274600000 },
  { id: 15, from: "تبریز", to: "تهران", trip: "oneway", depart: 1672830000000 },
  { id: 16, from: "تبریز", to: "اصفهان", trip: "return", depart: 1672830000000, return: 1673107200000 },
  { id: 17, from: "اهواز", to: "رشت", trip: "oneway", depart: 1673107200000 },
  { id: 18, from: "تهران", to: "مشهد", trip: "oneway", depart: 1672922700000 },
  { id: 19, from: "زاهدان", to: "بوشهر", trip: "return", depart: 1672922700000, return: 1673256600000 },
  { id: 20, from: "شیراز", to: "تهران", trip: "oneway", depart: 1673206200000 },
  { id: 21, from: "تهران", to: "شیراز", trip: "return", depart: 1673206200000, return: 1673631000000 },
  { id: 22, from: "رشت", to: "بندرعباس", trip: "oneway", depart: 1673256600000 },
  { id: 23, from: "ساری", to: "تهران", trip: "oneway", depart: 1673361000000 },
  { id: 24, from: "کردستان", to: "رشت", trip: "return", depart: 1673620200000, return: 1674120600000 },
  { id: 25, from: "کرمان", to: "تبریز", trip: "return", depart: 1673710200000, return: 1674120600000 },
  { id: 26, from: "شیراز", to: "مشهد", trip: "oneway", depart: 1673620200000 },
  { id: 27, from: "اصفهان", to: "اهواز", trip: "oneway", depart: 1674919800000 },
  { id: 28, from: "مشهد", to: "زاهدان", trip: "oneway", depart: 1675594800000 },
  { id: 29, from: "رشت", to: "تهران", trip: "return", depart: 1675314000000, return: 1676010600000 },
  { id: 30, from: "تبریز", to: "کرمان", trip: "oneway", depart: 1676010600000 },
  { id: 31, from: "مشهد", to: "شیراز", trip: "return", depart: 1675603800000, return: 1676305800000 },
  { id: 32, from: "بوشهر", to: "مشهد", trip: "oneway", depart: 1676552400000 },
  { id: 33, from: "شیراز", to: "ساری", trip: "return", depart: 1676552400000, return: 1677423600000 },
  { id: 34, from: "ساری", to: "اصفهان", trip: "oneway", depart: 1677423600000 },
  { id: 35, from: "اهواز", to: "تبریز", trip: "oneway", depart: 1677092400000 },
  { id: 36, from: "بوشهر", to: "تهران", trip: "return", depart: 1676352600000, return: 1677092400000 },
  { id: 37, from: "ارومیه", to: "تبریز", trip: "oneway", depart: 1677142800000 },
  { id: 38, from: "مشهد", to: "کرمان", trip: "return", depart: 1676795400000, return: 1677684600000 },
  { id: 39, from: "تبریز", to: "تهران", trip: "oneway", depart: 1676352600000 },
  { id: 40, from: "شیراز", to: "زاهدان", trip: "oneway", depart: 1676795400000 },
  { id: 41, from: "تهران", to: "شیراز", trip: "oneway", depart: 1677933000000 },
  { id: 42, from: "کرمان", to: "ساری", trip: "oneway", depart: 1677684600000 },
  { id: 43, from: "اصفهان", to: "شیراز", trip: "return", depart: 1677933000000, return: 1678354200000 },
  { id: 44, from: "تبریز", to: "مشهد", trip: "oneway", depart: 1677843000000 },
  { id: 45, from: "بندرعباس", to: "اهواز", trip: "oneway", depart: 1678368600000 },
  { id: 46, from: "زاهدان", to: "ارومیه", trip: "return", depart: 1677843000000, return: 1678368600000 },
  { id: 47, from: "مشهد", to: "رشت", trip: "oneway", depart: 1677934800000 },
  { id: 48, from: "ارومیه", to: "تهران", trip: "oneway", depart: 1677956400000 },
  { id: 49, from: "رشت", to: "اصفهان", trip: "oneway", depart: 1677661200000 },
  { id: 50, from: "شیراز", to: "تبریز", trip: "oneway", depart: 1677956400000 },
  { id: 51, from: "تهران", to: "شیراز", trip: "return", depart: 1677661200000, return: 1678462200000 },
  { id: 52, from: "اصفهان", to: "اهواز", trip: "oneway", depart: 1678303800000 },
  { id: 53, from: "بوشهر", to: "تهران", trip: "oneway", depart: 1678462200000 },
  { id: 54, from: "کرمان", to: "اصفهان", trip: "return", depart: 1678303800000, return: 1678987800000 },
  { id: 55, from: "اهواز", to: "ساری", trip: "return", depart: 1678811400000, return: 1680107400000 },
  { id: 56, from: "تهران", to: "بندرعباس", trip: "oneway", depart: 1678987800000 },
  { id: 57, from: "بوشهر", to: "شیراز", trip: "return", depart: 1678251600000, return: 1678987800000 },
  { id: 58, from: "بندرعباس", to: "مشهد", trip: "oneway", depart: 1678251600000 },
  { id: 59, from: "شیراز", to: "تهران", trip: "return", depart: 1678525200000, return: 1679070600000 },
  { id: 60, from: "اهواز", to: "ارومیه", trip: "oneway", depart: 1678649400000 },
  { id: 61, from: "مشهد", to: "ساری", trip: "oneway", depart: 1678894200000 },
  { id: 62, from: "بوشهر", to: "اصفهان", trip: "return", depart: 1678649400000, return: 1678894200000 },
  { id: 63, from: "تبریز", to: "کرمان", trip: "oneway", depart: 1678894200000 },
  { id: 64, from: "تهران", to: "مشهد", trip: "oneway", depart: 1678761000000 },
  { id: 65, from: "مشهد", to: "رشت", trip: "oneway", depart: 1678935600000 },
  { id: 66, from: "تهران", to: "اصفهان", trip: "return", depart: 1678935600000, return: 1679551200000 },
  { id: 67, from: "ارومیه", to: "بوشهر", trip: "return", depart: 1678932000000, return: 1679571000000 },
  { id: 68, from: "ساری", to: "تهران", trip: "oneway", depart: 1679551200000 },
  { id: 69, from: "تهران", to: "شیراز", trip: "oneway", depart: 1679571000000 },
  { id: 70, from: "بندرعباس", to: "رشت", trip: "return", depart: 1679272200000, return: 1679819400000 },
  { id: 71, from: "ساری", to: "اهواز", trip: "oneway", depart: 1679819400000 },
  { id: 72, from: "بندرعباس", to: "مشهد", trip: "oneway", depart: 1679371200000 },
  { id: 73, from: "رشت", to: "بوشهر", trip: "return", depart: 1679371200000, return: 1680087600000 },
  { id: 74, from: "تهران", to: "اهواز", trip: "oneway", depart: 1679450400000 },
  { id: 75, from: "رشت", to: "بوشهر", trip: "return", depart: 1679643000000, return: 1680186600000 },
  { id: 76, from: "زاهدان", to: "تبریز", trip: "oneway", depart: 1680186600000 },
  { id: 77, from: "مشهد", to: "ارومیه", trip: "oneway", depart: 1679629500000 },
  { id: 78, from: "اصفهان", to: "رشت", trip: "oneway", depart: 1680183000000 },
  { id: 79, from: "تبریز", to: "اصفهان", trip: "return", depart: 1679629500000, return: 1680183000000 },
  { id: 80, from: "اصفهان", to: "تهران", trip: "oneway", depart: 1679887800000 },
  { id: 81, from: "اصفهان", to: "مشهد", trip: "oneway", depart: 1680096600000 },
  { id: 82, from: "مشهد", to: "ارومیه", trip: "oneway", depart: 1680341400000 },
  { id: 83, from: "اهواز", to: "کرمان", trip: "return", depart: 1680467400000, return: 1680708600000 },
  { id: 84, from: "تبریز", to: "تهران", trip: "return", depart: 1680341400000, return: 1680708600000 },
  { id: 85, from: "رشت", to: "زاهدان", trip: "oneway", depart: 1680708600000 },
  { id: 86, from: "مشهد", to: "تبریز", trip: "oneway", depart: 1680467400000 },
  { id: 87, from: "شیراز", to: "بوشهر", trip: "return", depart: 1680777000000, return: 1681093800000 },
  { id: 88, from: "ساری", to: "تهران", trip: "oneway", depart: 1681093800000 },
  { id: 89, from: "رشت", to: "کرمان", trip: "return", depart: 1680611400000, return: 1681093800000 },
  { id: 90, from: "بندرعباس", to: "تهران", trip: "oneway", depart: 1680777000000 },
  { id: 91, from: "تهران", to: "بندرعباس", trip: "oneway", depart: 1680611400000 },
  { id: 92, from: "ارومیه", to: "مشهد", trip: "oneway", depart: 1680766200000 },
  { id: 93, from: "زاهدان", to: "رشت", trip: "oneway", depart: 1681131600000 },
  { id: 94, from: "تهران", to: "اصفهان", trip: "return", depart: 1680766200000, return: 1681475400000 },
  { id: 95, from: "تبریز", to: "اهواز", trip: "oneway", depart: 1671764400000 },
  { id: 96, from: "مشهد", to: "تهران", trip: "return", depart: 1671309000000, return: 1672309800000 },
  { id: 97, from: "رشت", to: "شیراز", trip: "oneway", depart: 1681475400000 },
  { id: 98, from: "اهواز", to: "اصفهان", trip: "oneway", depart: 1671309000000 },
  { id: 99, from: "تهران", to: "مشهد", trip: "return", depart: 1671764400000, return: 1672380000000 },
  { id: 100, from: "بوشهر", to: "تبریز", trip: "oneway", depart: 1672380000000 },
];
