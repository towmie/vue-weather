<template>
  <main class="main" :class="{ blured: hideModalInput }">
    <SideComponent />
    <MainComponent />
  </main>
  <BaseInput />
</template>

<script>
import SideComponent from "./components/SideComponent";
import MainComponent from "./components/mainComponents/MainComponent.vue";
import BaseInput from "./components/base/BaseInput";

export default {
  components: { SideComponent, MainComponent, BaseInput },
  computed: {
    hideModalInput() {
      return this.$store.getters.modalInput;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  margin: 0 auto;
  font-size: 1.6rem;
  font-family: "Raleway", sans-serif;
  line-height: 2.7rem;
  font-weight: 400;
  color: #e7e7eb;
  background-color: #100e1d;
  position: relative;
}

body a {
  text-decoration: none;
  color: inherit;
}

body ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  outline: none;
}

.main {
  display: flex;
  position: relative;
}

.blured {
  pointer-events: none;
  filter: blur(10px);
}
</style>
