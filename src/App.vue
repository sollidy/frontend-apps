<template>
  <div id="root">
    <div class="app">
      <navbar></navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app {
  width: 55%;
}
@media (max-width: 768px) {
  .app {
    width: 100%;
  }
}
</style>