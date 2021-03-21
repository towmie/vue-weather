<template>
  <div class="card">
    <p class="date">Today</p>
    <img src="../../../../assets/icons/01d.png" alt="" />
    <div class="temp__diff">
      <p class="temp__max">
        10
        <span class="temp__type">C</span>
      </p>
      <p class="temp__min">
        3
        <span class="temp__type">C</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.temp__type {
  margin-left: -0.5rem;
  position: relative;
  padding-left: 0.5rem;
  color: rgb(207, 207, 207);
}

.temp__type::before {
  content: "°";
  position: absolute;
  top: -0.5rem;
  left: 0;
  width: 0.2rem;
  height: 0.2rem;
}
.card {
  padding: 1.8rem;
  margin: 1rem 0.5rem;
  min-width: 13rem;
  max-width: 13.3rem;
  width: 100%;
  height: 19rem;
  background-color: #1e213a;
  text-align: center;

  transition: all 0.3s;
  box-shadow: 0rem 1rem 1rem #000;
}

.card:hover {
  transform: translateY(-0.7rem);
}

.date {
  font-weight: 300;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}

.temp__diff {
  margin-top: auto;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
