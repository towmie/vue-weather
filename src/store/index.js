"use strict";

import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      currentCity: "moscow",
      temp: null,
      icon: "",
      humidity: null,
      pressure: null,
      description: "",
      weather: "",
      windSpeed: null,
      windDegree: null,
      visibility: null,
      forecast: [],
    };
  },

  mutations: {
    setCity(state, payload) {
      state.currentCity = payload;
    },
    setDescription(state, payload) {
      state.description = payload;
    },
    setWeather(state, payload) {
      state.weather = payload;
    },
    setIcon(state, payload) {
      state.icon = payload;
    },
    setTemp(state, payload) {
      state.temp = payload.toFixed();
    },
    setVisibility(state, payload) {
      state.visibility = (payload / 1000).toFixed(1);
    },
    setHumidity(state, payload) {
      state.humidity = payload;
    },
    setPressure(state, payload) {
      state.pressure = payload;
    },
    setWindDeg(state, payload) {
      state.windDegree = payload;
    },
    setWindSpeed(state, payload) {
      state.windSpeed = payload.toFixed(1);
    },

    setForecastList(state, payload) {
      const dayTemp = [];
      const nightTemp = [];
      payload
        .filter((el) => {
          const today = new Date().getDate();
          const dayInList = el.dt_txt.split(" ")[0].split("-")[2];
          if (dayInList !== today) return el;
        })
        .map((el) => {
          const time = el.dt_txt.split(" ")[1];

          const dateFull = `${new Date(el.dt_txt)}`.split(" ");
          const day = dateFull[0];
          const month = dateFull[1];
          const date = +dateFull[2];
          let insertDate = `${day}, ${date} ${month}`;

          if (time === "12:00:00") {
            const newObj = {
              day: insertDate,
              id: Math.random(),
              dayTemp: el.main.temp.toFixed(),
              icon: el.weather[0].icon,
            };
            dayTemp.push(newObj);
          }
          if (time === "00:00:00") {
            const newObj = {
              nightTemp: el.main.temp.toFixed(),
            };
            nightTemp.push(newObj);
          }
        });

      let sumObj = [];
      for (let i = 0; i < dayTemp.length; i++) {
        let obj = Object.assign(dayTemp[i], nightTemp[i]);
        sumObj.push(obj);
      }

      state.forecast = sumObj;
    },
  },

  actions: {
    setCity(context, payload) {
      context.commit("setCity", payload);
    },

    async getCityData(context, payload) {
      const apiKey = "56b7d91218774cf2f9808498488f31f9";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      const { icon, main, description } = data.weather[0];
      const { temp, pressure, humidity } = data.main;
      const { deg, speed } = data.wind;

      context.commit("setIcon", icon);
      context.commit("setWeather", main);
      context.commit("setTemp", temp);
      context.commit("setDescription", description);
      context.commit("setPressure", pressure);
      context.commit("setHumidity", humidity);
      context.commit("setWindDeg", deg);
      context.commit("setWindSpeed", speed);
      context.commit("setVisibility", data.visibility);
    },

    async getForecast(context, payload) {
      const apiKey = "56b7d91218774cf2f9808498488f31f9";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${payload}&appid=${apiKey}&units=metric`
      );
      const { list } = await response.json();
      context.commit("setForecastList", list);
    },
  },

  getters: {
    enteredCity(state) {
      return state.currentCity;
    },
    currentIcon(state) {
      return state.icon;
    },
    currentDescription(state) {
      return state.description;
    },
    currentTemp(state) {
      return state.temp;
    },
    currentWeather(state) {
      return state.weather;
    },
    currentPressure(state) {
      return state.pressure;
    },
    currentHumidity(state) {
      return state.humidity;
    },
    currentWindSpeed(state) {
      return state.windSpeed;
    },
    currentWindDeg(state) {
      return state.windDegree;
    },
    curretVisibility(state) {
      return state.visibility;
    },
    currentForecast(state) {
      return state.forecast;
    },
  },
});
