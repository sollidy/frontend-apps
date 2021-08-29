<template>
  <div>
    <h3>Posts List:</h3>
    <post-item :post="post" v-for="post in posts" v-bind:key="post.id" />
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>