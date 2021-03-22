// ./../assets/icons/01d.png
<template>
  <div class="side__wrapper">
    <div class="side__location">{{ currentCity }}</div>
    <div class="side__info">
      <img
        class="side__img"
        :src="`https://zyzin.com/projects/weather/img/weather-icons/${currentIcon}.png`"
        alt=""
      />
      <div class="side__temp">
        <span class="side__data">{{ currentTrmp }}</span>
        <span class="side__type">C</span>
      </div>
      <p class="side__weather">{{ currentDesc }}</p>
    </div>
    <p class="aside__date">Today: <span></span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentCity() {
      return this.$store.getters.enteredCity;
    },
    currentTrmp() {
      return this.$store.getters.currentTemp;
    },
    currentDesc() {
      return this.$store.getters.currentDescription;
    },
    currentIcon() {
      return this.$store.getters.currentIcon;
    },
  },
  methods: {},
};
</script>

<style scoped>
.side__type {
  font-size: 5rem;
  position: relative;
  padding-left: 1rem;
  color: rgb(207, 207, 207);
}

.side__type::before {
  content: "°";
  position: absolute;
  top: 0rem;
  left: 0;
  width: 0.2rem;
  height: 0.2rem;
}
.side__wrapper {
  background-color: #1e213a;
  min-width: 32rem;
  max-width: 40rem;
  width: 100%;
  height: 100vh;
  padding: 4.2rem 4.6rem;
  position: relative;
  box-shadow: 0 0 1rem #000;
  overflow: hidden;
}

.side__wrapper::after,
.side__wrapper::before {
  content: "";
  position: absolute;
  display: block;
  width: 40rem;
  height: 40rem;

  border-radius: 50%;
  background-color: #100e1d;
  opacity: 0.3;
  z-index: 0;
}

.side__wrapper::before {
  top: -24rem;
  left: 10rem;
}
.side__wrapper::after {
  bottom: -20rem;
  right: 15.5rem;
}

.side__location {
  text-align: center;
  position: relative;
  font-weight: 300;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding-left: 2rem;
}
.side__location::before {
  content: "";
  position: absolute;
  left: 8.5rem;
  top: 0;
  width: 1.4rem;
  height: 2rem;
  background-image: url(https://zyzin.com/projects/weather/img/icons/map-marker-alt-solid.svg);
}

.side__info {
  text-align: center;
  margin-top: 7.5rem;
}

.side__img {
  width: 24rem;
}

.side__data {
  display: inline-block;
  margin-top: 3rem;
  font-size: 8rem;
}

.side__weather {
  margin: 7.5rem 0;
  color: #d8d8da;
  font-weight: 500;
  font-size: 2.8rem;
}

.aside__date {
  text-align: center;
  z-index: 10;
  font-size: 2rem;
  line-height: 2.1rem;
  font-weight: 500;
  color: #88869d;
}
.aside__date span {
  margin-left: 1rem;
}
</style>
