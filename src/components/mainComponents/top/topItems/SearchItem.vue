// 'use strict';
<template>
  <form @submit.prevent="setCity" class="form">
    <input
      class="search error"
      type="text"
      placeholder="Enter your City"
      v-model="cityName"
      name="city"
    />
    <button type="submit" class="search-btn"></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cityName: "",
    };
  },
  methods: {
    setCity() {
      this.$store.dispatch("updateUI", this.cityName);
      this.cityName = "";
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
  max-width: 30rem;
  min-width: 20rem;
  width: 100%;
}
.search {
  padding: 1rem 3rem;
  width: 100%;
  border: none;
  /* outline: none; */
  border-radius: 1.5rem;
  font-family: inherit;
  font-size: 1.6rem;
  background-color: rgb(221, 221, 221);
}
.error {
  /* outline: crimson; */
}

.search-btn {
  position: absolute;
  cursor: pointer;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(https://zyzin.com/projects/weather/img/icons/search-solid.svg);
  border: none;
  background-color: transparent;
}
</style>
