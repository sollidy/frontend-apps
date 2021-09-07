<template>
  <div class="navbar">
    <div @click="$router.push('/')"><h3>Vue 3</h3></div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/store')" style="margin-left: 10px">Store</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 10px">About</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
};
</script>

<style>
.navbar {
  height: 50px;
  background-color: moccasin;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 30px;
}
.navbar__btns {
  margin-left: auto;
}
</style>