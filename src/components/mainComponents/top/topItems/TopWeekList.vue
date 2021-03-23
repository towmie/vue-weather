<template>
  <div class="weeklist">
    <WeekCard
      v-for="day in forecastList"
      :key="day.id"
      :icon="day.icon"
      :day-temp="day.nightTemp"
      :night-temp="day.dayTemp"
      :day="day.day"
    />
  </div>
</template>

<script>
import WeekCard from "./WeekCard";
export default {
  components: { WeekCard },
  computed: {
    forecastList() {
      return this.$store.getters.currentForecast;
    },
  },
};
</script>

<style scoped>
.weeklist {
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
