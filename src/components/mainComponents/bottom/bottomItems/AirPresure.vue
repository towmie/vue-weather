<template>
  <base-bottom-item>
    <h5 class="heading">Air Presure</h5>
    <p class="info-box">
      <span class="data">1002</span>
      <span class="units">mb</span>
    </p>
  </base-bottom-item>
</template>

<script>
import BaseBottomItem from "../../../base/BaseBottomItem";
export default {
  components: { BaseBottomItem },
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
</style>
