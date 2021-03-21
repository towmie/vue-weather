<template>
  <div class="main__container">
    <MainTopBar />
    <MainBottomBar />
  </div>
</template>

<script>
import MainTopBar from "./top/MainTopBar";
import MainBottomBar from "./bottom/MainBottomBar";

export default {
  components: { MainTopBar, MainBottomBar },
};
</script>

<style scoped>
.main__container {
  width: 100%;
  padding: 4rem 9rem;
}
</style>
