"use strict";

const RI_DEFAULT = { latitude: 41.824, longitude: -71.4128 };
const AUTO_REFRESH_MS = 30 * 60 * 1000;

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
    months: [5, 6, 7, 9, 10, 11],
    water: ["bay", "surf", "breachway", "rocky"],
    temp: [50, 72],
    tip: "低光、潮水流动、有 baitfish 时优先。"
  },
  {
    id: "bluefish",
    name: "蓝鱼 Bluefish",
    months: [6, 7, 8, 9, 10],
    water: ["bay", "surf", "breachway"],
    temp: [58, 76],
    tip: "风浪和水面追饵时很积极，金属亮片效率高。"
  },
  {
    id: "summerFlounder",
    name: "夏比目鱼 Fluke",
    months: [5, 6, 7, 8, 9],
    water: ["bay", "breachway", "pond"],
    temp: [55, 74],
    tip: "沙底、通道边和缓慢漂流更适合。"
  },
  {
    id: "blackSeaBass",
    name: "黑海鲈 Black Sea Bass",
    months: [6, 7, 8, 9, 10],
    water: ["rocky", "surf", "bay"],
    temp: [58, 75],
    tip: "礁石、wreck、硬底结构附近更有机会。"
  },
  {
    id: "tautog",
    name: "黑鲷 Tautog",
    months: [4, 5, 10, 11],
    water: ["rocky", "bay"],
    temp: [45, 62],
    tip: "冷水季节贴结构，蟹饵和耐心更重要。"
  },
  {
    id: "scup",
    name: "海鲷 Scup",
    months: [6, 7, 8, 9, 10],
    water: ["bay", "breachway", "pond"],
    temp: [58, 76],
    tip: "码头、礁边、贝壳底，小钩小饵更稳定。"
  },
  {
    id: "squid",
    name: "鱿鱼 Squid",
    months: [4, 5, 6, 10, 11],
    water: ["bay", "rocky", "breachway"],
    temp: [48, 62],
    tip: "夜间灯光、港口、桥边和清水更值得试，木虾要慢抽慢停。"
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
  autoRefreshTimer: null
};

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  registerServiceWorker();
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
    "statusLine",
    "spotTown",
    "spotType",
    "spotName",
    "spotNotes",
    "scoreBox",
    "scoreValue",
    "todayMetrics",
    "spotMap",
    "forecastTitle",
    "forecastList",
    "weeklyScheduleTitle",
    "weeklySchedule",
    "speciesList",
    "speciesSchedule",
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
  document.addEventListener("visibilitychange", refreshIfStale);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
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
    setStatus("这个浏览器无法读取定位，已使用 Providence 默认位置。");
    return;
  }

  setStatus("正在读取当前位置...");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      setStatus("已按当前位置重新排序钓点。");
      renderSpots();
    },
    () => {
      setStatus("定位没有开启，当前使用 Providence 默认位置。");
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 600000 }
  );
}

async function loadForecast() {
  const spot = selectedSpot();
  renderSpotShell();
  setStatus("正在读取天气和潮汐...");

  try {
    const [weather, tides] = await Promise.all([
      fetchWeather(spot),
      fetchTides(spot, state.rangeStart)
    ]);

    state.weather = weather;
    state.tides = tides;
    state.usedFallback = false;
    state.lastUpdatedAt = new Date();
    setStatus(updatedStatus("实时天气和潮汐已更新。"));
  } catch (error) {
    state.weather = fallbackWeather();
    state.tides = [];
    state.usedFallback = true;
    state.lastUpdatedAt = new Date();
    setStatus(updatedStatus("实时数据暂时无法读取，当前展示离线规划。"));
  }

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
  return `${message} 最后更新 ${formatTime(new Date())}；每 30 分钟自动刷新。`;
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
    type: item.type === "H" ? "高潮" : "低潮",
    heightFeet: Number(item.v)
  }));
}

function renderSpotShell() {
  const spot = selectedSpot();
  elements.spotTown.textContent = spot.town;
  elements.spotType.textContent = spot.waterLabel;
  elements.spotName.textContent = spot.name;
  elements.spotNotes.textContent = spot.notes;
  elements.spotMap.src = mapURL(spot);
  elements.tideTitle.textContent = `潮汐窗口 · ${spot.tideStationName}`;
}

function renderForecasts() {
  const spot = selectedSpot();
  const start = state.rangeStart;
  const weekWeather = state.weather.slice(start, start + 7);
  const forecasts = weekWeather.map((weather) => buildForecast(weather, spot, state.tides));
  state.forecasts = forecasts;

  elements.forecastTitle.textContent = start === 0 ? "未来 7 天钓况" : "下周钓况";
  elements.weeklyScheduleTitle.textContent = start === 0 ? "未来 7 天时间表" : "下周时间表";
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
          <small>${weatherCondition(forecast.weather.code).label} · ${Math.round(forecast.weather.windMph)} mph · ${forecast.score} 分</small>
        </span>
        <b>${forecast.species[0]?.name.split(" ")[0] || "目标鱼"}</b>
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
                <span>主时间</span>
                <strong>${species.timing.mainLabel} ${species.timing.mainWindow}</strong>
              </div>
              <div>
                <span>潮水</span>
                <strong>${species.timing.tideWindow || "按固定时段优先"}</strong>
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
    metricCard("天气", weatherCondition(weather.code).label),
    metricCard("温度", `${Math.round(weather.lowF)}-${Math.round(weather.highF)}°F`),
    metricCard("风", `${Math.round(weather.windMph)} mph`),
    metricCard("降雨", `${weather.rainChance}%`),
    metricCard("最佳时间", forecast.species[0]?.time || "看潮水")
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
          <span>主时间</span>
          <strong>${species.timing.mainLabel} ${species.timing.mainWindow}</strong>
        </div>
        <div>
          <span>潮水</span>
          <strong>${species.timing.tideWindow || "今天按固定时段优先"}</strong>
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
          <h4>潮汐数据暂不可用</h4>
          <p>正式出钓前请再确认 NOAA 潮汐表。</p>
        </div>
      </article>
    `;
    return;
  }

  elements.tideList.innerHTML = forecast.tides.slice(0, 5).map((tide) => `
    <article class="tide-card">
      <div>
        <h4>${tide.type}</h4>
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
          <p>${spot.town} · ${spot.waterLabel} · ${distance}</p>
        </div>
        <span class="pill">${spot.bestFor.length} 种</span>
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
  const topTime = forecast.species[0]?.time || "看潮水";
  return `
    <article class="forecast-card">
      <div class="day-block">
        <strong>${weekday(weather.date)}</strong>
        <span>${monthDay(weather.date)}</span>
      </div>
      <div class="forecast-main">
        <h4>${forecast.headline}</h4>
        <p>${condition.label} · ${Math.round(weather.windMph)} mph · ${topSpecies}</p>
        <p class="forecast-time">时间：${topTime}</p>
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
      reasons.push("季节合适");
    }

    if (profile.water.includes(spot.waterType)) {
      score += 18;
      reasons.push(`${spot.waterLabel}地形匹配`);
    }

    if (spot.bestFor.includes(profile.id)) {
      score += 12;
      reasons.push("该钓点常见目标");
    }

    if (averageTemp >= profile.temp[0] && averageTemp <= profile.temp[1]) {
      score += 14;
      reasons.push("气温区间舒服");
    } else if (averageTemp < profile.temp[0]) {
      score -= 8;
      reasons.push("水温可能偏凉");
    } else {
      score -= 5;
      reasons.push("白天可能偏热");
    }

    if (weather.windMph > 20) {
      score -= 10;
      reasons.push("风偏大");
    }

    const timing = speciesTimeWindows(profile, weather, spot, tides);

    return {
      id: profile.id,
      name: profile.name,
      score: clamp(score, 20, 98),
      time: timing.primary,
      timing,
      reason: `${reasons.slice(0, 3).join(" · ")}。${profile.tip}`
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
    primary: tideText ? `${mainLabel} ${mainWindow}；${tideText}` : `${mainLabel} ${mainWindow}`,
    secondary
  });

  switch (profile.id) {
    case "squid":
      return withTide("天黑后", night, "找港口灯光、桥影和清水，慢抽慢停。");
    case "stripedBass":
      return withTide("清晨/黄昏", `${dawn} / ${dusk}`, "低光、流水和 baitfish 最重要。");
    case "bluefish":
      return withTide("清晨/黄昏", `${dawn} / ${dusk}`, "有小鱼跳水或鸟追饵时随时加分。");
    case "summerFlounder":
      return withTide("上午", morning, "慢拖或顺流漂，沙底和通道边更稳。");
    case "blackSeaBass":
      return withTide("上午到午后", lateMorning, "靠硬底、礁石和结构。");
    case "tautog":
      return withTide("白天", lateMorning, "结构边、风小更好，蟹饵更适合。");
    case "scup":
      return withTide("白天", `${lateMorning} / ${afternoon}`, "码头、贝壳底、小钩小饵更稳定。");
    default:
      return withTide("清晨/黄昏", `${dawn} / ${dusk}`, "跟着潮水和饵鱼走。");
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

  return `${tide.type}前后 ${formatTimeRange(shiftMinutes(tide.time, -before), shiftMinutes(tide.time, after))}`;
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
  const fish = topSpecies ? topSpecies.name.split(" ")[0] : "目标鱼";
  if (score >= 80) return `好窗口，优先冲 ${fish}`;
  if (score >= 65) return "可以钓，选对潮水更关键";
  if (score >= 50) return "条件一般，适合短时间探点";
  return "谨慎安排，天气不太友好";
}

function weatherCondition(code) {
  if (code <= 1) return { type: "clear", label: "晴朗" };
  if (code <= 3) return { type: "cloudy", label: "多云" };
  if ([45, 48].includes(code)) return { type: "fog", label: "有雾" };
  if ([51, 53, 55, 56, 57].includes(code)) return { type: "drizzle", label: "小雨" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { type: "rain", label: "降雨" };
  if ([95, 96, 99].includes(code)) return { type: "storm", label: "雷雨" };
  return { type: "snow", label: "寒冷" };
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
