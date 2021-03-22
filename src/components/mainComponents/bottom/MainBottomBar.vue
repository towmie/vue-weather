<template>
  <h2 class="title">Today's HighLights</h2>
  <HighlightsList />
</template>
<script>
import HighlightsList from "./HighlightsList";
export default {
  components: { HighlightsList },
};
</script>

<style scoped>
.title {
  display: block;
  margin-top: 3rem;
  font-weight: 300;
  margin-bottom: 2rem;
}
</style>
