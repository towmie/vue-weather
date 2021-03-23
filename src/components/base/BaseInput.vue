<template>
  <form class="form" @submit.prevent="hideInput" v-if="getHideModalValue">
    <input type="text" name="" id="" class="input" v-model="cityName" />
    <button type="submit" class="search-btn"></button>
    <div v-if="gotError" class="error">{{ gotErrorMessage }} ... Try Again</div>
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
    hideInput() {
      this.$store.dispatch("hideModalInput", false);
      this.$store.dispatch("updateUI", this.cityName);
    },
  },
  computed: {
    getHideModalValue() {
      return this.$store.getters.modalInput;
    },
    gotError() {
      return this.$store.getters.errorState;
    },
    gotErrorMessage() {
      return this.$store.getters.errorMessage;
    },
  },
};
</script>

<style scoped>
.form {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.error {
  position: absolute;
  width: 50rem;
  top: 6rem;
  left: -7.5rem;
  text-align: center;
  font-weight: 300;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: brown;
}
.input {
  font-size: 3rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-weight: 300;
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
