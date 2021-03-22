<template>
  <div class="weeklist">
    <WeekCard />
    <WeekCard />
    <WeekCard />
    <WeekCard />
    <WeekCard />
  </div>
</template>

<script>
import WeekCard from "./WeekCard";
export default {
  components: { WeekCard },
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
