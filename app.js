"use strict";

const RI_DEFAULT = { latitude: 41.824, longitude: -71.4128 };
const AUTO_REFRESH_MS = 30 * 60 * 1000;

const I18N = {
  zh: {
    appSettings: "应用设置",
    language: "语言",
    spot: "调整地点",
    useLocation: "使用当前位置",
    refresh: "刷新",
    score: "评分",
    thisWeek: "未来 7 天",
    nextWeek: "下周",
    loadingStatus: "正在读取天气和潮汐...",
    readyStatus: "准备读取天气和潮汐",
    updatedStatus: "实时天气和潮汐已更新。",
    fallbackStatus: "实时数据暂时无法读取，当前展示离线规划。",
    lastUpdated: "最后更新",
    autoRefresh: "每 30 分钟自动刷新。",
    noLocation: "这个浏览器无法读取定位，已使用 Providence 默认位置。",
    readingLocation: "正在读取当前位置...",
    sortedByLocation: "已按当前位置重新排序钓点。",
    locationDenied: "定位没有开启，当前使用 Providence 默认位置。",
    weather: "天气",
    temperature: "温度",
    wind: "风",
    rain: "降雨",
    bestTime: "最佳时间",
    forecastTitle: "未来 7 天钓况",
    nextForecastTitle: "下周钓况",
    weeklyTitle: "未来 7 天时间表",
    nextWeeklyTitle: "下周时间表",
    speciesMatch: "适合目标鱼",
    todaySchedule: "今日各鱼种时间表",
    spotFinder: "附近钓点",
    tideWindow: "潮汐窗口",
    noTideTitle: "潮汐数据暂不可用",
    noTideBody: "正式出钓前请再确认 NOAA 潮汐表。",
    timePrefix: "时间：",
    mainTime: "主时间",
    tide: "潮水",
    fixedTime: "按固定时段优先",
    todayFixedTime: "今天按固定时段优先",
    points: "分",
    speciesCount: "种",
    scoreExplain: "评分怎么算",
    scoreRuleBase: "基础分",
    scoreRuleBaseText: "每个鱼种从 45 分开始；每天整体钓况从 62 分开始。",
    scoreRuleSeason: "季节",
    scoreRuleSeasonText: "如果当前月份是该鱼常见季节，鱼种评分 +22。",
    scoreRuleWater: "钓点地形",
    scoreRuleWaterText: "鱼种习性匹配海湾、礁石、入海口等地形时 +18；该钓点常见目标再 +12。",
    scoreRuleTemp: "温度",
    scoreRuleTempText: "当天平均气温落在该鱼舒服区间时 +14；偏冷或偏热会扣分。",
    scoreRuleWeather: "天气/风雨",
    scoreRuleWeatherText: "风小、雨少、阴天小雨会加分；大风、雷雨、强降雨会扣分。",
    scoreRuleTide: "潮汐",
    scoreRuleTideText: "有可用 NOAA 潮汐转折点时，当天整体钓况 +6，并生成转潮前后时间窗。",
    seasonGood: "季节合适",
    waterMatch: "地形匹配",
    spotCommon: "该钓点常见目标",
    tempGood: "气温区间舒服",
    tempCold: "水温可能偏凉",
    tempHot: "白天可能偏热",
    windHigh: "风偏大",
    clear: "晴朗",
    cloudy: "多云",
    fog: "有雾",
    drizzle: "小雨",
    weatherRain: "降雨",
    storm: "雷雨",
    snow: "寒冷",
    highTide: "高潮",
    lowTide: "低潮",
    dawnDusk: "清晨/黄昏",
    dawnDuskNote: "低光、流水和 baitfish 最重要。",
    bluefishNote: "有小鱼跳水或鸟追饵时随时加分。",
    morning: "上午",
    morningNote: "慢拖或顺流漂，沙底和通道边更稳。",
    midDay: "上午到午后",
    seaBassNote: "靠硬底、礁石和结构。",
    daytime: "白天",
    tautogNote: "结构边、风小更好，蟹饵更适合。",
    scupNote: "码头、贝壳底、小钩小饵更稳定。",
    afterDark: "天黑后",
    squidNote: "找港口灯光、桥影和清水，慢抽慢停。",
    defaultNote: "跟着潮水和饵鱼走。",
    tideAround: "{type}前后 {time}",
    goodHeadline: "好窗口，优先冲 {fish}",
    okHeadline: "可以钓，选对潮水更关键",
    fairHeadline: "条件一般，适合短时间探点",
    poorHeadline: "谨慎安排，天气不太友好"
  },
  en: {
    appSettings: "App settings",
    language: "Language",
    spot: "Change spot",
    useLocation: "Use current location",
    refresh: "Refresh",
    score: "Score",
    thisWeek: "Next 7 days",
    nextWeek: "Next week",
    loadingStatus: "Loading weather and tides...",
    readyStatus: "Ready to load weather and tides",
    updatedStatus: "Live weather and tides updated.",
    fallbackStatus: "Live data is unavailable; showing offline planning data.",
    lastUpdated: "Last updated",
    autoRefresh: "Auto-refreshes every 30 minutes.",
    noLocation: "This browser cannot read location; using Providence as default.",
    readingLocation: "Reading current location...",
    sortedByLocation: "Spots sorted by your current location.",
    locationDenied: "Location is off; using Providence as default.",
    weather: "Weather",
    temperature: "Temp",
    wind: "Wind",
    rain: "Rain",
    bestTime: "Best time",
    forecastTitle: "Next 7 days",
    nextForecastTitle: "Next week",
    weeklyTitle: "7-day time schedule",
    nextWeeklyTitle: "Next week schedule",
    speciesMatch: "Best targets",
    todaySchedule: "Today by species",
    spotFinder: "Nearby spots",
    tideWindow: "Tide windows",
    noTideTitle: "Tide data unavailable",
    noTideBody: "Check NOAA tides again before heading out.",
    timePrefix: "Time: ",
    mainTime: "Main time",
    tide: "Tide",
    fixedTime: "Use fixed time window",
    todayFixedTime: "Use today's fixed time window",
    points: "pts",
    speciesCount: "species",
    scoreExplain: "How scoring works",
    scoreRuleBase: "Base",
    scoreRuleBaseText: "Each species starts at 45; the daily fishing score starts at 62.",
    scoreRuleSeason: "Season",
    scoreRuleSeasonText: "If the month is in that species' prime season, species score gets +22.",
    scoreRuleWater: "Spot type",
    scoreRuleWaterText: "Matching bay, rocky shore, breachway, or surf habitat adds +18; common targets for the spot add +12.",
    scoreRuleTemp: "Temperature",
    scoreRuleTempText: "Average daily air temperature inside the comfort range adds +14; too cold or hot subtracts points.",
    scoreRuleWeather: "Weather/wind",
    scoreRuleWeatherText: "Light wind, low rain, cloud cover, or drizzle can help; strong wind, storms, and heavy rain hurt.",
    scoreRuleTide: "Tides",
    scoreRuleTideText: "When NOAA tide turns are available, daily score gets +6 and tide windows are generated around them.",
    seasonGood: "good season",
    waterMatch: "habitat match",
    spotCommon: "common at this spot",
    tempGood: "comfortable temperature",
    tempCold: "water may be cool",
    tempHot: "daytime may be hot",
    windHigh: "windy",
    clear: "Clear",
    cloudy: "Cloudy",
    fog: "Fog",
    drizzle: "Drizzle",
    weatherRain: "Rain",
    storm: "Storms",
    snow: "Cold",
    highTide: "high tide",
    lowTide: "low tide",
    dawnDusk: "Dawn/dusk",
    dawnDuskNote: "Low light, moving water, and baitfish matter most.",
    bluefishNote: "Birds, bait, and surface action can turn it on anytime.",
    morning: "Morning",
    morningNote: "Slow drifts over sand and channel edges are steadier.",
    midDay: "Late morning",
    seaBassNote: "Focus on hard bottom, rocks, and structure.",
    daytime: "Daytime",
    tautogNote: "Fish tight to structure; lighter wind and crab baits help.",
    scupNote: "Piers, shell bottom, small hooks, and small baits are steadier.",
    afterDark: "After dark",
    squidNote: "Work lights, bridge shadow lines, and clear water with slow pauses.",
    defaultNote: "Follow moving water and bait.",
    tideAround: "{type} window {time}",
    goodHeadline: "Good window for {fish}",
    okHeadline: "Fishable; tide timing matters",
    fairHeadline: "Fair; better for a short scouting trip",
    poorHeadline: "Tough conditions; plan carefully"
  },
  es: {
    appSettings: "Ajustes",
    language: "Idioma",
    spot: "Cambiar lugar",
    useLocation: "Usar ubicación",
    refresh: "Actualizar",
    score: "Puntaje",
    thisWeek: "Próximos 7 días",
    nextWeek: "Próxima semana",
    loadingStatus: "Cargando clima y mareas...",
    readyStatus: "Listo para cargar clima y mareas",
    updatedStatus: "Clima y mareas actualizados.",
    fallbackStatus: "No hay datos en vivo; mostrando datos sin conexión.",
    lastUpdated: "Actualizado",
    autoRefresh: "Se actualiza cada 30 minutos.",
    noLocation: "Este navegador no puede leer ubicación; se usa Providence.",
    readingLocation: "Leyendo ubicación actual...",
    sortedByLocation: "Lugares ordenados por tu ubicación.",
    locationDenied: "Ubicación desactivada; se usa Providence.",
    weather: "Clima",
    temperature: "Temp.",
    wind: "Viento",
    rain: "Lluvia",
    bestTime: "Mejor hora",
    forecastTitle: "Próximos 7 días",
    nextForecastTitle: "Próxima semana",
    weeklyTitle: "Horario de 7 días",
    nextWeeklyTitle: "Horario próxima semana",
    speciesMatch: "Mejores especies",
    todaySchedule: "Hoy por especie",
    spotFinder: "Lugares cercanos",
    tideWindow: "Ventanas de marea",
    noTideTitle: "Mareas no disponibles",
    noTideBody: "Revisa NOAA antes de salir.",
    timePrefix: "Hora: ",
    mainTime: "Hora principal",
    tide: "Marea",
    fixedTime: "Usar horario fijo",
    todayFixedTime: "Usar horario fijo de hoy",
    points: "pts",
    speciesCount: "especies",
    scoreExplain: "Cómo se calcula",
    scoreRuleBase: "Base",
    scoreRuleBaseText: "Cada especie empieza en 45; el puntaje diario empieza en 62.",
    scoreRuleSeason: "Temporada",
    scoreRuleSeasonText: "Si el mes es bueno para esa especie, suma +22.",
    scoreRuleWater: "Tipo de lugar",
    scoreRuleWaterText: "Si el hábitat coincide, suma +18; si es común en el lugar, suma +12.",
    scoreRuleTemp: "Temperatura",
    scoreRuleTempText: "Temperatura promedio dentro del rango cómodo suma +14; frío o calor resta puntos.",
    scoreRuleWeather: "Clima/viento",
    scoreRuleWeatherText: "Poco viento y poca lluvia ayudan; viento fuerte, tormentas y lluvia fuerte restan.",
    scoreRuleTide: "Mareas",
    scoreRuleTideText: "Con cambios de marea NOAA disponibles, el día suma +6 y se crean ventanas alrededor de la marea.",
    seasonGood: "buena temporada",
    waterMatch: "hábitat compatible",
    spotCommon: "común en este lugar",
    tempGood: "temperatura cómoda",
    tempCold: "agua algo fría",
    tempHot: "día caluroso",
    windHigh: "mucho viento",
    clear: "Despejado",
    cloudy: "Nublado",
    fog: "Niebla",
    drizzle: "Llovizna",
    weatherRain: "Lluvia",
    storm: "Tormentas",
    snow: "Frío",
    highTide: "marea alta",
    lowTide: "marea baja",
    dawnDusk: "Amanecer/atardecer",
    dawnDuskNote: "Luz baja, agua en movimiento y carnada son clave.",
    bluefishNote: "Aves, carnada y actividad en superficie pueden activar la pesca.",
    morning: "Mañana",
    morningNote: "Derivas lentas sobre arena y bordes de canal son mejores.",
    midDay: "Media mañana",
    seaBassNote: "Busca fondo duro, rocas y estructura.",
    daytime: "Día",
    tautogNote: "Pesca pegado a estructura; menos viento y cangrejo ayudan.",
    scupNote: "Muelles, fondo de conchas, anzuelos pequeños y carnada chica.",
    afterDark: "Después de oscurecer",
    squidNote: "Luces, sombras de puentes y agua clara; pausa el señuelo.",
    defaultNote: "Sigue el agua en movimiento y la carnada.",
    tideAround: "ventana de {type} {time}",
    goodHeadline: "Buena ventana para {fish}",
    okHeadline: "Se puede pescar; importa la marea",
    fairHeadline: "Regular; mejor salida corta",
    poorHeadline: "Condiciones difíciles; planea con cuidado"
  }
};

const WATER_LABELS = {
  zh: { bay: "海湾", surf: "冲浪海岸", breachway: "入海口", rocky: "礁石岸", pond: "盐水塘" },
  en: { bay: "Bay", surf: "Surf", breachway: "Breachway", rocky: "Rocky shore", pond: "Salt pond" },
  es: { bay: "Bahía", surf: "Costa abierta", breachway: "Bocana", rocky: "Costa rocosa", pond: "Laguna salada" }
};

const SPOTS = [
  {
    id: "conimicut-point",
    name: "Conimicut Point",
    town: "Warwick",
    latitude: 41.7169,
    longitude: -71.3458,
    waterType: "bay",
    waterLabel: "海湾",
    tideStationID: "8452944",
    tideStationName: "Conimicut Light",
    notes: "海湾岸钓点，适合看风向和潮水转折后下竿。",
    bestFor: ["stripedBass", "bluefish", "scup"],
    tactics: ["潮水开始流动时抛软饵", "清晨用 topwater 搜索", "风大时改用金属亮片"]
  },
  {
    id: "beavertail",
    name: "Beavertail State Park",
    town: "Jamestown",
    latitude: 41.4491,
    longitude: -71.3992,
    waterType: "rocky",
    waterLabel: "礁石岸",
    tideStationID: "8452660",
    tideStationName: "Newport",
    notes: "礁石岸线，浪高和湿滑风险要优先评估。",
    bestFor: ["stripedBass", "bluefish", "tautog", "blackSeaBass"],
    tactics: ["礁边用 bucktail 或软饵慢跳", "涨退潮流速明显时找白水边", "钓 tautog 时靠结构下蟹饵"]
  },
  {
    id: "point-judith",
    name: "Point Judith Breachway",
    town: "Narragansett",
    latitude: 41.3612,
    longitude: -71.4984,
    waterType: "breachway",
    waterLabel: "入海口",
    tideStationID: "8452660",
    tideStationName: "Newport",
    notes: "入海口流急，夜钓和大潮时需要更谨慎。",
    bestFor: ["stripedBass", "bluefish", "summerFlounder"],
    tactics: ["退潮口用铅头软饵顺流漂", "水清时减小饵型", "找 baitfish 活动区"]
  },
  {
    id: "brenton-point",
    name: "Brenton Point",
    town: "Newport",
    latitude: 41.45,
    longitude: -71.3568,
    waterType: "surf",
    waterLabel: "冲浪海岸",
    tideStationID: "8452660",
    tideStationName: "Newport",
    notes: "外海岸线开阔，风向决定可钓性。",
    bestFor: ["stripedBass", "bluefish", "blackSeaBass"],
    tactics: ["顺风时远投金属饵", "黄昏用游泳饵扫浪边", "水温低时放慢收线"]
  },
  {
    id: "quonochontaug",
    name: "Quonochontaug Breachway",
    town: "Charlestown",
    latitude: 41.3316,
    longitude: -71.7166,
    waterType: "breachway",
    waterLabel: "入海口",
    tideStationID: "8452660",
    tideStationName: "Newport",
    notes: "盐水塘和外海交界，适合按潮水窗口计划。",
    bestFor: ["stripedBass", "bluefish", "summerFlounder", "scup"],
    tactics: ["入海口两侧搜索流缝", "fluke 用 bucktail 加 Gulp", "低光时段尝试铅笔波扒"]
  },
  {
    id: "rocky-point",
    name: "Rocky Point",
    town: "Warwick",
    latitude: 41.694,
    longitude: -71.3917,
    waterType: "bay",
    waterLabel: "海湾",
    tideStationID: "8452944",
    tideStationName: "Conimicut Light",
    notes: "近 Providence 的轻松岸钓点，适合短时间探钓。",
    bestFor: ["scup", "bluefish", "stripedBass"],
    tactics: ["小钩饵钓 scup", "有鸟或 bait 时换金属亮片", "傍晚沿岸慢搜 striped bass"]
  },
  {
    id: "quonset-point",
    name: "Quonset Point",
    town: "North Kingstown",
    latitude: 41.5868,
    longitude: -71.411,
    waterType: "bay",
    waterLabel: "海湾",
    tideStationID: "8454049",
    tideStationName: "Quonset Point",
    notes: "中湾位置，潮差和风会明显影响漂流和抛投。",
    bestFor: ["summerFlounder", "scup", "bluefish", "blackSeaBass"],
    tactics: ["船钓或码头边找底部结构", "fluke 使用慢拖", "风浪增大时转内湾避风面"]
  },
  {
    id: "colt-state-park-pier",
    name: "Colt State Park Fishing Pier",
    town: "Bristol",
    latitude: 41.6728,
    longitude: -71.2774,
    waterType: "bay",
    waterLabel: "海湾码头",
    tideStationID: "8451552",
    tideStationName: "Bristol Ferry",
    notes: "Bristol 近岸码头和海湾岸线，适合家庭式岸钓和傍晚短窗口。",
    bestFor: ["scup", "stripedBass", "bluefish", "squid"],
    tactics: ["小钩饵钓 scup", "傍晚沿岸慢搜 striped bass", "夜间有灯光时试 1.8-2.5 号鱿鱼木虾"]
  },
  {
    id: "bristol-harbor",
    name: "Bristol Harbor / Independence Park",
    town: "Bristol",
    latitude: 41.6688,
    longitude: -71.2792,
    waterType: "bay",
    waterLabel: "海港岸线",
    tideStationID: "8451552",
    tideStationName: "Bristol Ferry",
    notes: "Bristol 市中心海港岸线，适合看 baitfish、灯光和小潮流变化。",
    bestFor: ["squid", "scup", "stripedBass", "bluefish"],
    tactics: ["夜晚靠灯光边缘慢抽鱿鱼 jig", "清晨用小软饵扫岸边", "有小鱼跳水时换金属亮片"]
  },
  {
    id: "mount-hope-bridge",
    name: "Bristol Ferry / Mount Hope Bridge",
    town: "Bristol",
    latitude: 41.6367,
    longitude: -71.2550,
    waterType: "bay",
    waterLabel: "桥边海峡",
    tideStationID: "8451552",
    tideStationName: "Bristol Ferry",
    notes: "Mount Hope Bay 入口附近水流明显，适合围绕转潮前后计划。",
    bestFor: ["stripedBass", "bluefish", "tautog", "squid"],
    tactics: ["潮水开始动时找流缝", "夜间灯光和桥影边可试鱿鱼", "结构边注意挂底并优先安全站位"]
  },
  {
    id: "fort-adams",
    name: "Fort Adams State Park",
    town: "Newport",
    latitude: 41.4787,
    longitude: -71.3404,
    waterType: "rocky",
    waterLabel: "海港口岸线",
    tideStationID: "8452660",
    tideStationName: "Newport",
    notes: "Newport Harbor 口附近，适合条纹鲈、蓝鱼，也可以在灯光和码头边尝试鱿鱼。",
    bestFor: ["stripedBass", "bluefish", "squid", "tautog"],
    tactics: ["低光时段沿岸搜 striped bass", "夜晚港口灯光附近试鱿鱼 jig", "礁石边钓 tautog 要小心湿滑"]
  },
  {
    id: "goat-island-causeway",
    name: "Goat Island Causeway",
    town: "Newport",
    latitude: 41.4935,
    longitude: -71.3263,
    waterType: "bay",
    waterLabel: "港口桥堤",
    tideStationID: "8452660",
    tideStationName: "Newport",
    notes: "Newport Harbor 经典夜钓环境，灯光、水流和小饵鱼活动都值得观察。",
    bestFor: ["squid", "stripedBass", "bluefish", "scup"],
    tactics: ["夜间用小号鱿鱼木虾慢抽", "灯光暗边找 squid 和 baitfish", "涨退潮开始流动时再加密抛投"]
  }
];

const SPECIES = [
  {
    id: "stripedBass",
    name: "条纹鲈 Striped Bass",
    names: { zh: "条纹鲈 Striped Bass", en: "Striped Bass", es: "Lubina rayada" },
    months: [5, 6, 7, 9, 10, 11],
    water: ["bay", "surf", "breachway", "rocky"],
    temp: [50, 72],
    tip: "低光、潮水流动、有 baitfish 时优先。",
    tips: {
      zh: "低光、潮水流动、有 baitfish 时优先。",
      en: "Prioritize low light, moving water, and baitfish.",
      es: "Prioriza poca luz, agua en movimiento y carnada."
    }
  },
  {
    id: "bluefish",
    name: "蓝鱼 Bluefish",
    names: { zh: "蓝鱼 Bluefish", en: "Bluefish", es: "Anjova" },
    months: [6, 7, 8, 9, 10],
    water: ["bay", "surf", "breachway"],
    temp: [58, 76],
    tip: "风浪和水面追饵时很积极，金属亮片效率高。",
    tips: {
      zh: "风浪和水面追饵时很积极，金属亮片效率高。",
      en: "They feed hard around chop and surface bait; metals work well.",
      es: "Ataca con oleaje y carnada en superficie; los metales funcionan bien."
    }
  },
  {
    id: "summerFlounder",
    name: "夏比目鱼 Fluke",
    names: { zh: "夏比目鱼 Fluke", en: "Fluke", es: "Lenguado de verano" },
    months: [5, 6, 7, 8, 9],
    water: ["bay", "breachway", "pond"],
    temp: [55, 74],
    tip: "沙底、通道边和缓慢漂流更适合。",
    tips: {
      zh: "沙底、通道边和缓慢漂流更适合。",
      en: "Sand bottom, channel edges, and slow drifts are best.",
      es: "Fondo de arena, bordes de canal y derivas lentas son mejores."
    }
  },
  {
    id: "blackSeaBass",
    name: "黑海鲈 Black Sea Bass",
    names: { zh: "黑海鲈 Black Sea Bass", en: "Black Sea Bass", es: "Lubina negra" },
    months: [6, 7, 8, 9, 10],
    water: ["rocky", "surf", "bay"],
    temp: [58, 75],
    tip: "礁石、wreck、硬底结构附近更有机会。",
    tips: {
      zh: "礁石、wreck、硬底结构附近更有机会。",
      en: "Rock, wrecks, and hard-bottom structure are best.",
      es: "Rocas, naufragios y estructura de fondo duro son mejores."
    }
  },
  {
    id: "tautog",
    name: "黑鲷 Tautog",
    names: { zh: "黑鲷 Tautog", en: "Tautog", es: "Tautog" },
    months: [4, 5, 10, 11],
    water: ["rocky", "bay"],
    temp: [45, 62],
    tip: "冷水季节贴结构，蟹饵和耐心更重要。",
    tips: {
      zh: "冷水季节贴结构，蟹饵和耐心更重要。",
      en: "Fish tight to structure; crab baits and patience matter.",
      es: "Pesca pegado a estructura; cangrejo y paciencia importan."
    }
  },
  {
    id: "scup",
    name: "海鲷 Scup",
    names: { zh: "海鲷 Scup", en: "Scup", es: "Porgy" },
    months: [6, 7, 8, 9, 10],
    water: ["bay", "breachway", "pond"],
    temp: [58, 76],
    tip: "码头、礁边、贝壳底，小钩小饵更稳定。",
    tips: {
      zh: "码头、礁边、贝壳底，小钩小饵更稳定。",
      en: "Piers, rock edges, shell bottom, small hooks, and small baits are steady.",
      es: "Muelles, rocas, conchas, anzuelos pequeños y carnada chica son constantes."
    }
  },
  {
    id: "squid",
    name: "鱿鱼 Squid",
    names: { zh: "鱿鱼 Squid", en: "Squid", es: "Calamar" },
    months: [4, 5, 6, 10, 11],
    water: ["bay", "rocky", "breachway"],
    temp: [48, 62],
    tip: "夜间灯光、港口、桥边和清水更值得试，木虾要慢抽慢停。",
    tips: {
      zh: "夜间灯光、港口、桥边和清水更值得试，木虾要慢抽慢停。",
      en: "Night lights, harbors, bridge edges, and clear water are best; pause the jig.",
      es: "Luces nocturnas, puertos, puentes y agua clara son mejores; pausa el jig."
    }
  }
];

const state = {
  selectedSpotId: "colt-state-park-pier",
  location: null,
  rangeStart: 0,
  weather: [],
  tides: [],
  forecasts: [],
  usedFallback: false,
  lastUpdatedAt: null,
  autoRefreshTimer: null,
  language: localStorage.getItem("rhodeCatchLanguage") || "zh"
};

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  registerServiceWorker();
  applyLanguage();
  renderSpotControls();
  renderSpotShell();
  loadForecast();
  startAutoRefresh();
});

function cacheElements() {
  [
    "locateButton",
    "refreshButton",
    "installButton",
    "installDialog",
    "thisWeekButton",
    "nextWeekButton",
    "languageLabel",
    "languageSelect",
    "spotSelectLabel",
    "spotSelect",
    "statusLine",
    "spotTown",
    "spotType",
    "spotName",
    "spotNotes",
    "scoreBox",
    "scoreValue",
    "scoreLabel",
    "todayMetrics",
    "scoreExplainTitle",
    "scoreRules",
    "spotMap",
    "forecastTitle",
    "forecastList",
    "weeklyScheduleTitle",
    "weeklySchedule",
    "speciesMatchTitle",
    "speciesList",
    "todayScheduleTitle",
    "speciesSchedule",
    "spotFinderTitle",
    "spotList",
    "tideTitle",
    "tideList"
  ].forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function bindEvents() {
  elements.locateButton.addEventListener("click", requestLocation);
  elements.refreshButton.addEventListener("click", loadForecast);
  elements.installButton.addEventListener("click", () => elements.installDialog.showModal());
  elements.thisWeekButton.addEventListener("click", () => setRange(0));
  elements.nextWeekButton.addEventListener("click", () => setRange(7));
  elements.languageSelect.addEventListener("change", () => {
    state.language = elements.languageSelect.value;
    localStorage.setItem("rhodeCatchLanguage", state.language);
    applyLanguage();
    renderSpotControls();
    renderSpotShell();
    renderForecasts();
    renderSpots();
    if (state.lastUpdatedAt) {
      setStatus(updatedStatus(state.usedFallback ? t("fallbackStatus") : t("updatedStatus")));
    }
  });
  elements.spotSelect.addEventListener("change", () => {
    state.selectedSpotId = elements.spotSelect.value;
    loadForecast();
  });
  document.addEventListener("visibilitychange", refreshIfStale);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

function applyLanguage() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
  elements.languageSelect.value = state.language;
  elements.languageLabel.textContent = t("language");
  elements.spotSelectLabel.textContent = t("spot");
  elements.locateButton.setAttribute("aria-label", t("useLocation"));
  elements.locateButton.setAttribute("title", t("useLocation"));
  elements.refreshButton.setAttribute("aria-label", t("refresh"));
  elements.refreshButton.setAttribute("title", t("refresh"));
  elements.scoreLabel.textContent = t("score");
  elements.thisWeekButton.textContent = t("thisWeek");
  elements.nextWeekButton.textContent = t("nextWeek");
  elements.speciesMatchTitle.textContent = t("speciesMatch");
  elements.todayScheduleTitle.textContent = t("todaySchedule");
  elements.spotFinderTitle.textContent = t("spotFinder");
  if (!state.lastUpdatedAt) {
    setStatus(t("readyStatus"));
  }
  renderScoreRules();
}

function renderScoreRules() {
  const rules = [
    ["scoreRuleBase", "scoreRuleBaseText"],
    ["scoreRuleSeason", "scoreRuleSeasonText"],
    ["scoreRuleWater", "scoreRuleWaterText"],
    ["scoreRuleTemp", "scoreRuleTempText"],
    ["scoreRuleWeather", "scoreRuleWeatherText"],
    ["scoreRuleTide", "scoreRuleTideText"]
  ];

  elements.scoreExplainTitle.textContent = t("scoreExplain");
  elements.scoreRules.innerHTML = rules.map(([title, body]) => `
    <article class="score-rule">
      <strong>${t(title)}</strong>
      <span>${t(body)}</span>
    </article>
  `).join("");
}

function renderSpotControls() {
  elements.spotSelect.innerHTML = sortedSpots().map((spot) => `
    <option value="${spot.id}" ${spot.id === state.selectedSpotId ? "selected" : ""}>
      ${spot.name} · ${spot.town}
    </option>
  `).join("");
}

function selectedSpot() {
  return SPOTS.find((spot) => spot.id === state.selectedSpotId) || SPOTS[0];
}

function setRange(start) {
  state.rangeStart = start;
  elements.thisWeekButton.classList.toggle("active", start === 0);
  elements.nextWeekButton.classList.toggle("active", start === 7);
  elements.thisWeekButton.setAttribute("aria-selected", String(start === 0));
  elements.nextWeekButton.setAttribute("aria-selected", String(start === 7));
  renderForecasts();
  loadForecast();
}

function requestLocation() {
  if (!navigator.geolocation) {
    setStatus(t("noLocation"));
    return;
  }

  setStatus(t("readingLocation"));
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      setStatus(t("sortedByLocation"));
      renderSpotControls();
      renderSpots();
    },
    () => {
      setStatus(t("locationDenied"));
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 600000 }
  );
}

async function loadForecast() {
  const spot = selectedSpot();
  renderSpotShell();
  setStatus(t("loadingStatus"));

  try {
    const [weather, tides] = await Promise.all([
      fetchWeather(spot),
      fetchTides(spot, state.rangeStart)
    ]);

    state.weather = weather;
    state.tides = tides;
    state.usedFallback = false;
    state.lastUpdatedAt = new Date();
    setStatus(updatedStatus(t("updatedStatus")));
  } catch (error) {
    state.weather = fallbackWeather();
    state.tides = [];
    state.usedFallback = true;
    state.lastUpdatedAt = new Date();
    setStatus(updatedStatus(t("fallbackStatus")));
  }

  renderSpotControls();
  renderForecasts();
  renderSpots();
}

function startAutoRefresh() {
  if (state.autoRefreshTimer) {
    clearInterval(state.autoRefreshTimer);
  }

  state.autoRefreshTimer = setInterval(() => {
    if (document.visibilityState === "visible") {
      loadForecast();
    }
  }, AUTO_REFRESH_MS);
}

function refreshIfStale() {
  if (document.visibilityState !== "visible") {
    return;
  }

  if (!state.lastUpdatedAt || Date.now() - state.lastUpdatedAt.getTime() >= AUTO_REFRESH_MS) {
    loadForecast();
  }
}

function updatedStatus(message) {
  return `${message} ${t("lastUpdated")} ${formatTime(new Date())}; ${t("autoRefresh")}`;
}

async function fetchWeather(spot) {
  const params = new URLSearchParams({
    latitude: spot.latitude,
    longitude: spot.longitude,
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,sunrise,sunset",
    temperature_unit: "fahrenheit",
    wind_speed_unit: "mph",
    precipitation_unit: "inch",
    timezone: "auto",
    forecast_days: "14"
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) throw new Error("Weather request failed");
  const payload = await response.json();
  return payload.daily.time.map((date, index) => ({
    date: parseLocalDate(date),
    code: payload.daily.weather_code[index],
    highF: payload.daily.temperature_2m_max[index],
    lowF: payload.daily.temperature_2m_min[index],
    windMph: payload.daily.wind_speed_10m_max[index],
    rainChance: payload.daily.precipitation_probability_max[index] ?? 0,
    sunrise: parseLocalDateTime(payload.daily.sunrise[index]),
    sunset: parseLocalDateTime(payload.daily.sunset[index])
  }));
}

async function fetchTides(spot, startOffset) {
  const begin = formatNOAADate(addDays(new Date(), startOffset));
  const params = new URLSearchParams({
    begin_date: begin,
    range: "168",
    station: spot.tideStationID,
    product: "predictions",
    datum: "MLLW",
    time_zone: "lst_ldt",
    units: "english",
    interval: "hilo",
    format: "json",
    application: "RhodeCatchPWA"
  });
  const response = await fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?${params}`);
  if (!response.ok) throw new Error("Tide request failed");
  const payload = await response.json();
  return (payload.predictions || []).map((item) => ({
    time: parseNOAADate(item.t),
    type: item.type === "H" ? "high" : "low",
    heightFeet: Number(item.v)
  }));
}

function renderSpotShell() {
  const spot = selectedSpot();
  elements.spotTown.textContent = spot.town;
  elements.spotType.textContent = waterLabel(spot);
  elements.spotName.textContent = spot.name;
  elements.spotNotes.textContent = state.forecasts[0]?.headline || t("readyStatus");
  elements.spotMap.src = mapURL(spot);
  elements.tideTitle.textContent = `${t("tideWindow")} · ${spot.tideStationName}`;
}

function renderForecasts() {
  const spot = selectedSpot();
  const start = state.rangeStart;
  const weekWeather = state.weather.slice(start, start + 7);
  const forecasts = weekWeather.map((weather) => buildForecast(weather, spot, state.tides));
  state.forecasts = forecasts;

  elements.forecastTitle.textContent = start === 0 ? t("forecastTitle") : t("nextForecastTitle");
  elements.weeklyScheduleTitle.textContent = start === 0 ? t("weeklyTitle") : t("nextWeeklyTitle");
  elements.forecastList.innerHTML = forecasts.map(renderForecastCard).join("");
  renderWeeklySchedule(forecasts);

  const today = forecasts[0];
  if (today) {
    renderHero(today);
    renderMetrics(today);
    renderSpecies(today);
    renderSpeciesSchedule(today);
    renderTides(today);
  }
}

function renderWeeklySchedule(forecasts) {
  elements.weeklySchedule.innerHTML = forecasts.map((forecast, index) => `
    <details class="week-card" ${index === 0 ? "open" : ""}>
      <summary>
        <span>
          <strong>${weekday(forecast.weather.date)} ${monthDay(forecast.weather.date)}</strong>
          <small>${weatherCondition(forecast.weather.code).label} · ${Math.round(forecast.weather.windMph)} mph · ${forecast.score} ${t("points")}</small>
        </span>
        <b>${forecast.species[0]?.name.split(" ")[0] || t("speciesMatch")}</b>
      </summary>
      <div class="week-fish-list">
        ${forecast.speciesSchedule.map((species) => `
          <article class="week-fish-row">
            <div class="week-fish-head">
              <h4>${species.name}</h4>
              <span class="schedule-score ${scoreClass(species.score)}">${species.score}</span>
            </div>
            <div class="week-fish-times">
              <div>
                <span>${t("mainTime")}</span>
                <strong>${species.timing.mainLabel} ${species.timing.mainWindow}</strong>
              </div>
              <div>
                <span>${t("tide")}</span>
                <strong>${species.timing.tideWindow || t("fixedTime")}</strong>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </details>
  `).join("");
}

function renderHero(forecast) {
  elements.scoreValue.textContent = forecast.score;
  elements.scoreBox.className = `score-box ${scoreClass(forecast.score)}`;
  elements.spotNotes.textContent = forecast.headline;
}

function renderMetrics(forecast) {
  const weather = forecast.weather;
  elements.todayMetrics.innerHTML = [
    metricCard(t("weather"), weatherCondition(weather.code).label),
    metricCard(t("temperature"), `${Math.round(weather.lowF)}-${Math.round(weather.highF)}°F`),
    metricCard(t("wind"), `${Math.round(weather.windMph)} mph`),
    metricCard(t("rain"), `${weather.rainChance}%`),
    metricCard(t("bestTime"), forecast.species[0]?.time || t("fixedTime"))
  ].join("");
}

function renderSpecies(forecast) {
  elements.speciesList.innerHTML = forecast.species.map((species) => `
    <article class="species-card">
      <div>
        <h4>${species.name}</h4>
        <strong class="time-window">${species.time}</strong>
        <p>${species.reason}</p>
      </div>
      <span class="pill">${species.score}</span>
    </article>
  `).join("");
}

function renderSpeciesSchedule(forecast) {
  elements.speciesSchedule.innerHTML = forecast.speciesSchedule.map((species) => `
    <article class="schedule-card">
      <div class="schedule-main">
        <div>
          <h4>${species.name}</h4>
          <p>${species.timing.secondary}</p>
        </div>
        <span class="schedule-score ${scoreClass(species.score)}">${species.score}</span>
      </div>
      <div class="schedule-details">
        <div>
          <span>${t("mainTime")}</span>
          <strong>${species.timing.mainLabel} ${species.timing.mainWindow}</strong>
        </div>
        <div>
          <span>${t("tide")}</span>
          <strong>${species.timing.tideWindow || t("todayFixedTime")}</strong>
        </div>
      </div>
    </article>
  `).join("");
}

function renderTides(forecast) {
  if (!forecast.tides.length) {
    elements.tideList.innerHTML = `
      <article class="tide-card">
        <div>
          <h4>${t("noTideTitle")}</h4>
          <p>${t("noTideBody")}</p>
        </div>
      </article>
    `;
    return;
  }

  elements.tideList.innerHTML = forecast.tides.slice(0, 5).map((tide) => `
    <article class="tide-card">
      <div>
        <h4>${tideLabel(tide.type)}</h4>
        <p>${formatTime(tide.time)}</p>
      </div>
      <span class="pill">${tide.heightFeet.toFixed(1)} ft</span>
    </article>
  `).join("");
}

function renderSpots() {
  const spots = sortedSpots();
  elements.spotList.innerHTML = spots.map((spot) => {
    const distance = distanceText(spot);
    const active = spot.id === state.selectedSpotId ? " active" : "";
    return `
      <button class="spot-card${active}" type="button" data-spot-id="${spot.id}">
        <div>
          <h4>${spot.name}</h4>
          <p>${spot.town} · ${waterLabel(spot)} · ${distance}</p>
        </div>
        <span class="pill">${spot.bestFor.length} ${t("speciesCount")}</span>
      </button>
    `;
  }).join("");

  elements.spotList.querySelectorAll("[data-spot-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSpotId = button.dataset.spotId;
      loadForecast();
    });
  });
}

function renderForecastCard(forecast) {
  const weather = forecast.weather;
  const condition = weatherCondition(weather.code);
  const topSpecies = forecast.species.map((species) => species.name.split(" ")[0]).slice(0, 2).join(" / ");
  const topTime = forecast.species[0]?.time || t("fixedTime");
  return `
    <article class="forecast-card">
      <div class="day-block">
        <strong>${weekday(weather.date)}</strong>
        <span>${monthDay(weather.date)}</span>
      </div>
      <div class="forecast-main">
        <h4>${forecast.headline}</h4>
        <p>${condition.label} · ${Math.round(weather.windMph)} mph · ${topSpecies}</p>
        <p class="forecast-time">${t("timePrefix")}${topTime}</p>
      </div>
      <div class="mini-score ${scoreClass(forecast.score)}">${forecast.score}</div>
    </article>
  `;
}

function metricCard(label, value) {
  return `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function buildForecast(weather, spot, tides) {
  const dayTides = tides.filter((tide) => sameDay(tide.time, weather.date));
  const speciesSchedule = recommendations(weather, spot, dayTides);
  const species = speciesSchedule.slice(0, 3);
  const score = dayScore(weather, species, dayTides);
  const headlineText = headlineForScore(score, species[0]);

  return {
    weather,
    score,
    headline: headlineText,
    species,
    speciesSchedule,
    tides: dayTides
  };
}

function recommendations(weather, spot, tides = []) {
  const month = weather.date.getMonth() + 1;
  const averageTemp = (weather.highF + weather.lowF) / 2;

  return SPECIES.map((profile) => {
    let score = 45;
    const reasons = [];

    if (profile.months.includes(month)) {
      score += 22;
      reasons.push(t("seasonGood"));
    }

    if (profile.water.includes(spot.waterType)) {
      score += 18;
      reasons.push(`${waterLabel(spot)} ${t("waterMatch")}`);
    }

    if (spot.bestFor.includes(profile.id)) {
      score += 12;
      reasons.push(t("spotCommon"));
    }

    if (averageTemp >= profile.temp[0] && averageTemp <= profile.temp[1]) {
      score += 14;
      reasons.push(t("tempGood"));
    } else if (averageTemp < profile.temp[0]) {
      score -= 8;
      reasons.push(t("tempCold"));
    } else {
      score -= 5;
      reasons.push(t("tempHot"));
    }

    if (weather.windMph > 20) {
      score -= 10;
      reasons.push(t("windHigh"));
    }

    const timing = speciesTimeWindows(profile, weather, spot, tides);

    return {
      id: profile.id,
      name: speciesName(profile),
      score: clamp(score, 20, 98),
      time: timing.primary,
      timing,
      reason: `${reasons.slice(0, 3).join(" · ")}. ${speciesTip(profile)}`
    };
  }).sort((a, b) => b.score - a.score);
}

function speciesTimeWindows(profile, weather, spot, tides) {
  const sunrise = weather.sunrise || atTime(weather.date, 5, 30);
  const sunset = weather.sunset || atTime(weather.date, 20, 0);
  const dawn = formatTimeRange(shiftMinutes(sunrise, -45), shiftMinutes(sunrise, 90));
  const dusk = formatTimeRange(shiftMinutes(sunset, -90), shiftMinutes(sunset, 60));
  const morning = formatTimeRange(atTime(weather.date, 8, 0), atTime(weather.date, 12, 0));
  const lateMorning = formatTimeRange(atTime(weather.date, 9, 0), atTime(weather.date, 14, 0));
  const afternoon = formatTimeRange(atTime(weather.date, 12, 0), atTime(weather.date, 16, 0));
  const night = formatTimeRange(shiftMinutes(sunset, 30), shiftMinutes(sunset, 240));
  const tideText = tideWindowText(tides, profile.id, sunset);
  const withTide = (mainLabel, mainWindow, secondary) => ({
    mainLabel,
    mainWindow,
    tideWindow: tideText,
    primary: tideText ? `${mainLabel} ${mainWindow}; ${tideText}` : `${mainLabel} ${mainWindow}`,
    secondary
  });

  switch (profile.id) {
    case "squid":
      return withTide(t("afterDark"), night, t("squidNote"));
    case "stripedBass":
      return withTide(t("dawnDusk"), `${dawn} / ${dusk}`, t("dawnDuskNote"));
    case "bluefish":
      return withTide(t("dawnDusk"), `${dawn} / ${dusk}`, t("bluefishNote"));
    case "summerFlounder":
      return withTide(t("morning"), morning, t("morningNote"));
    case "blackSeaBass":
      return withTide(t("midDay"), lateMorning, t("seaBassNote"));
    case "tautog":
      return withTide(t("daytime"), lateMorning, t("tautogNote"));
    case "scup":
      return withTide(t("daytime"), `${lateMorning} / ${afternoon}`, t("scupNote"));
    default:
      return withTide(t("dawnDusk"), `${dawn} / ${dusk}`, t("defaultNote"));
  }
}

function tideWindowText(tides, speciesId, sunset) {
  if (!tides.length) {
    return null;
  }

  const target = speciesId === "squid" ? shiftMinutes(sunset, 90) : null;
  const tide = target
    ? tides.slice().sort((a, b) => Math.abs(a.time - target) - Math.abs(b.time - target))[0]
    : tides[0];
  const before = speciesId === "tautog" ? 60 : 90;
  const after = speciesId === "summerFlounder" ? 120 : 90;

  return t("tideAround")
    .replace("{type}", tideLabel(tide.type))
    .replace("{time}", formatTimeRange(shiftMinutes(tide.time, -before), shiftMinutes(tide.time, after)));
}

function dayScore(weather, species, tides) {
  let score = 62;
  const condition = weatherCondition(weather.code).type;

  if (weather.windMph <= 8) score += 10;
  else if (weather.windMph <= 15) score += 4;
  else if (weather.windMph >= 22) score -= 18;
  else score -= 8;

  if (weather.rainChance <= 20) score += 8;
  else if (weather.rainChance >= 65) score -= 14;
  else if (weather.rainChance >= 45) score -= 6;

  if (condition === "storm" || condition === "snow") score -= 20;
  if (condition === "cloudy" || condition === "drizzle") score += 4;
  if (tides.length) score += 6;
  if ((species[0]?.score || 0) > 74) score += 8;

  return clamp(score, 20, 96);
}

function headlineForScore(score, topSpecies) {
  const fish = topSpecies ? topSpecies.name.split(" ")[0] : t("speciesMatch");
  if (score >= 80) return t("goodHeadline").replace("{fish}", fish);
  if (score >= 65) return t("okHeadline");
  if (score >= 50) return t("fairHeadline");
  return t("poorHeadline");
}

function weatherCondition(code) {
  if (code <= 1) return { type: "clear", label: t("clear") };
  if (code <= 3) return { type: "cloudy", label: t("cloudy") };
  if ([45, 48].includes(code)) return { type: "fog", label: t("fog") };
  if ([51, 53, 55, 56, 57].includes(code)) return { type: "drizzle", label: t("drizzle") };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { type: "rain", label: t("weatherRain") };
  if ([95, 96, 99].includes(code)) return { type: "storm", label: t("storm") };
  return { type: "snow", label: t("snow") };
}

function fallbackWeather() {
  const codes = [2, 3, 61, 1, 0, 51, 2, 3, 1, 2, 61, 0, 51, 2];
  const highs = [66, 68, 64, 71, 73, 70, 67, 69, 72, 74, 65, 70, 68, 66];
  const lows = [54, 55, 52, 57, 60, 58, 54, 56, 57, 61, 53, 55, 54, 52];
  const winds = [9, 13, 18, 7, 6, 11, 15, 10, 8, 17, 19, 7, 12, 14];
  const rain = [18, 34, 61, 12, 8, 28, 42, 20, 12, 35, 58, 10, 25, 30];

  return codes.map((code, index) => ({
    date: addDays(new Date(), index),
    code,
    highF: highs[index],
    lowF: lows[index],
    windMph: winds[index],
    rainChance: rain[index],
    sunrise: atTime(addDays(new Date(), index), 5, 25),
    sunset: atTime(addDays(new Date(), index), 20, 10)
  }));
}

function sortedSpots() {
  return SPOTS.slice().sort((a, b) => distanceMiles(a) - distanceMiles(b));
}

function distanceText(spot) {
  const miles = distanceMiles(spot);
  return Number.isFinite(miles) ? `${miles.toFixed(1)} mi` : "RI";
}

function distanceMiles(spot) {
  const origin = state.location || RI_DEFAULT;
  const toRad = (value) => value * Math.PI / 180;
  const earthRadiusMiles = 3958.8;
  const dLat = toRad(spot.latitude - origin.latitude);
  const dLon = toRad(spot.longitude - origin.longitude);
  const lat1 = toRad(origin.latitude);
  const lat2 = toRad(spot.latitude);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return earthRadiusMiles * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function mapURL(spot) {
  const delta = 0.08;
  const left = spot.longitude - delta;
  const right = spot.longitude + delta;
  const bottom = spot.latitude - delta;
  const top = spot.latitude + delta;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${spot.latitude}%2C${spot.longitude}`;
}

function t(key) {
  return I18N[state.language]?.[key] || I18N.zh[key] || key;
}

function waterLabel(spot) {
  if (state.language === "zh") {
    return spot.waterLabel;
  }

  return WATER_LABELS[state.language]?.[spot.waterType] || spot.waterLabel;
}

function speciesName(profile) {
  return profile.names?.[state.language] || profile.name;
}

function speciesTip(profile) {
  return profile.tips?.[state.language] || profile.tip;
}

function tideLabel(type) {
  if (type === "high" || type === "高潮") {
    return t("highTide");
  }

  return t("lowTide");
}

function setStatus(message) {
  elements.statusLine.textContent = message;
}

function scoreClass(score) {
  if (score >= 78) return "";
  if (score >= 62) return "mid";
  return "low";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Math.round(value)));
}

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function parseLocalDateTime(value) {
  const [datePart, timePart] = value.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute);
}

function parseNOAADate(value) {
  const [datePart, timePart] = value.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute);
}

function formatNOAADate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function atTime(date, hour, minute) {
  const copy = new Date(date);
  copy.setHours(hour, minute, 0, 0);
  return copy;
}

function shiftMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function weekday(date) {
  return new Intl.DateTimeFormat("zh-Hans-US", { weekday: "short" }).format(date);
}

function monthDay(date) {
  return new Intl.DateTimeFormat("zh-Hans-US", { month: "numeric", day: "numeric" }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat("zh-Hans-US", { hour: "numeric", minute: "2-digit" }).format(date);
}

function formatTimeRange(start, end) {
  return `${formatTime(start)}-${formatTime(end)}`;
}
