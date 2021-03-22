<template>
  <div class="list">
    <AirPresure />
    <WindDir />
    <Humidity />
    <Visability />
  </div>
</template>

<script>
import AirPresure from "./bottomItems/AirPresure";
import WindDir from "./bottomItems/WindDir";
import Humidity from "./bottomItems/Humidity";
import Visability from "./bottomItems/Visability.vue";

export default {
  components: { AirPresure, WindDir, Humidity, Visability },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
