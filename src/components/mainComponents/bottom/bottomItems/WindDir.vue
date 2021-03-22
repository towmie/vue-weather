<template>
  <base-bottom-item>
    <h5 class="heading">Wind Status</h5>
    <p class="info-box">
      <span class="data">99</span>
      <span class="units">mph</span>
    </p>
    <div class="info-box">
      <span class="icon"></span>
      <span class="units">Direction</span>
    </div>
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
.icon {
  margin-right: 1rem;
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #656568;
  background-image: url(https://zyzin.com/projects/weather/img/icons/location-arrow-solid.svg);
  background-size: 1rem 1.2rem;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
