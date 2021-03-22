"use strict";

import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      currentCity: "moscow",
      temp: null,
      icon: "",
      humidity: null,
      description: "",
      pressure: null,
      windSpeed: null,
      windDegree: null,
      visibility: null,
    };
  },
  mutations: {
    setCity(state, payload) {
      state.currentCity = payload;
    },
    setDescription(state, payload) {
      state.description = payload;
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
      state.windSpeed = payload;
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
      const { icon, main } = data.weather[0];
      const { temp, pressure, humidity } = data.main;
      const { deg, speed } = data.wind;
      context.commit("setIcon", icon);
      context.commit("setDescription", main);
      context.commit("setTemp", temp);
      context.commit("setPressure", pressure);
      context.commit("setHumidity", humidity);
      context.commit("setWindDeg", deg);
      context.commit("setWindSpeed", speed);
      context.commit("setVisibility", data.visibility);
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
  },
});
