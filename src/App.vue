<template>
  <div class="app">
    <div class="conteiner">
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

/* #app {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 2px;
}
.conteiner {
  width: 700px;
}
@media (max-width: 768px) {
  .conteiner {
    width: 100%;
  }
}
</style>