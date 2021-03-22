<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  min-width: 30rem;
  max-width: 33rem;
  width: 100%;
  min-height: 18rem;
  padding: 2rem;
  margin: 1rem 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  transition: all 0.3s;
  background-color: #1e213a;
  box-shadow: 0rem 1rem 2rem #000;
}

.item:hover {
  transform: translateY(-0.7rem);
}
</style>
