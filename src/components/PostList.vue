<template>
  <div v-if="posts.length > 0">
    <h3>Posts List:</h3>
    <post-item @remove="$emit('remove',post)"
    :post="post" v-for="post in posts" :key="post.id" />
  </div>
  <h2 v-else>List is empty!</h2>
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