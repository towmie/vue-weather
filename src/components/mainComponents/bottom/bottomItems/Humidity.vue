<template>
  <base-bottom-item>
    <h5 class="heading">Humidity</h5>
    <p class="info-box">
      <span class="data">{{ getHumidity }}</span>
      <span class="units">%</span>
    </p>
    <div class="range">
      <div class="range__tracker" :style="{ width: getHumidity + '%' }"></div>
    </div>
  </base-bottom-item>
</template>

<script>
import BaseBottomItem from "../../../base/BaseBottomItem";
export default {
  components: { BaseBottomItem },
  computed: {
    getHumidity() {
      return this.$store.getters.currentHumidity;
    },
  },
};
</script>

<style scoped>
.heading {
  font-size: 1.6rem;
  font-weight: 300;
}
.data {
  font-size: 6rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
}

.info-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.units {
  font-size: 2rem;
  margin-left: 1rem;
}

.range {
  margin: 1rem 0;
  width: 50%;
  height: 0.5rem;
  background-color: #100e1d;
  border-radius: 0.3rem;

  position: relative;
  /* left: 50rem; */
}
.range__tracker {
  width: 30%;
  height: 0.5rem;
  background-color: #fdc736;
  border-radius: 0.3rem;
}

.range__tracker::before,
.range__tracker::after {
  position: absolute;
  top: -2.3rem;
  font-size: 1rem;

  color: #5e5e6a;
}

.range__tracker::before {
  content: "0";
  left: 0;
}
.range__tracker::after {
  content: "100";
  right: 0;
}
</style>
